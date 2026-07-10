import { NextResponse } from 'next/server';
import { createHmac, timingSafeEqual } from 'node:crypto';
import { createServiceClient } from '@/lib/supabase/server';
import { SITE } from '@/lib/site';

export const runtime = 'nodejs';

interface StripeEvent {
  id: string;
  type: string;
  data: { object: Record<string, unknown> };
}

export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: 'Webhook secret missing' }, { status: 503 });
  }
  const sig = request.headers.get('stripe-signature');
  if (!sig) return NextResponse.json({ error: 'No signature' }, { status: 400 });

  const rawBody = await request.text();
  if (!verifySignature(rawBody, sig, secret)) {
    return NextResponse.json({ error: 'Bad signature' }, { status: 400 });
  }

  let event: StripeEvent;
  try {
    event = JSON.parse(rawBody) as StripeEvent;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  try {
    const supabase = createServiceClient();

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Record<string, unknown>;
      const sessionId = session.id as string;
      const customerId = (session.customer as string) ?? null;
      const email = (session.customer_details as { email?: string } | undefined)?.email ?? null;
      const metadata = (session.metadata as Record<string, string> | undefined) ?? {};
      const productSlug = metadata.product_slug;
      const amountTotal = (session.amount_total as number) ?? 0;
      const currency = (session.currency as string) ?? 'gbp';

      if (email) {
        // Look up existing profile by email so we can link immediately if they
        // already have an account. If not, user_id stays null and the orphan
        // gets claimed on first magic-link login (via wc_claim_pending_purchases).
        const { data: existingProfile } = await supabase
          .from('wc_profiles')
          .select('id')
          .eq('email', email)
          .maybeSingle();

        // Upsert by stripe_session_id for idempotency (Stripe can deliver the
        // same event multiple times; webhook must be safe to retry).
        await supabase.from('wc_purchases').upsert(
          {
            user_id: existingProfile?.id ?? null,
            email,
            stripe_session_id: sessionId,
            stripe_customer_id: customerId,
            product_slug: productSlug,
            amount_paid: amountTotal,
            currency,
            status: 'completed',
          },
          { onConflict: 'stripe_session_id' },
        );

        await supabase.from('wc_activity_log').insert({
          event_type: 'purchase',
          product_slug: productSlug,
          anonymised_name: 'A new buyer',
          metadata: { email_domain: email.split('@')[1] },
          is_seed: false,
        });

        // Trigger purchase email with an embedded magic link so the buyer
        // is one click from /app, no need to revisit /login first.
        await sendPurchaseEmail({
          to: email,
          productSlug: productSlug ?? 'playbook',
          supabase,
        });
      }
    }

    if (event.type === 'charge.refunded') {
      const charge = event.data.object as Record<string, unknown>;
      // Charges don't carry session metadata by default — resolve the checkout
      // session from the payment_intent via the Stripe API, then match the
      // purchase row (keyed by stripe_session_id).
      const paymentIntent = charge.payment_intent as string | undefined;
      const secret = process.env.STRIPE_SECRET_KEY;
      let sessionId =
        (charge.metadata as Record<string, string> | undefined)?.checkout_session ?? null;
      if (!sessionId && paymentIntent && secret) {
        try {
          const res = await fetch(
            `https://api.stripe.com/v1/checkout/sessions?payment_intent=${paymentIntent}&limit=1`,
            { headers: { Authorization: `Bearer ${secret}` } },
          );
          const data = (await res.json()) as { data?: { id?: string }[] };
          sessionId = data.data?.[0]?.id ?? null;
        } catch (e) {
          console.error('refund session lookup failed', e);
        }
      }
      if (sessionId) {
        await supabase
          .from('wc_purchases')
          .update({ status: 'refunded', refunded_at: new Date().toISOString() })
          .eq('stripe_session_id', sessionId);
      } else {
        console.error('charge.refunded: could not resolve checkout session', paymentIntent);
      }
    }

    return NextResponse.json({ received: true });
  } catch (e) {
    console.error('webhook error', e);
    return NextResponse.json({ error: 'Webhook handler error' }, { status: 500 });
  }
}

interface SendPurchaseEmailArgs {
  to: string;
  productSlug: string;
  supabase: ReturnType<typeof createServiceClient>;
}

async function sendPurchaseEmail({ to, productSlug, supabase }: SendPurchaseEmailArgs) {
  const resendKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!resendKey || !fromEmail) {
    console.log('resend not configured, skipping purchase email');
    return;
  }

  // Generate a Supabase magic link so one click takes the buyer straight
  // into the buyer dashboard. Falls back to a plain /login link if the
  // admin generate-link call fails.
  let actionLink = `${SITE.url}/login?email=${encodeURIComponent(to)}`;
  try {
    const { data, error } = await supabase.auth.admin.generateLink({
      type: 'magiclink',
      email: to,
      options: { redirectTo: `${SITE.url}/auth/callback?next=/app` },
    });
    if (!error && data?.properties?.action_link) {
      actionLink = data.properties.action_link;
    }
  } catch (e) {
    console.error('generateLink failed, falling back', e);
  }

  const productName = productSlug.charAt(0).toUpperCase() + productSlug.slice(1) + ' Playbook';

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to,
        subject: `Welcome to WarmerCoast · your ${productName} is ready`,
        html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #0F1827;">
  <h1 style="font-family: Georgia, serif; font-size: 28px; font-weight: 500; letter-spacing: -0.02em; margin: 0 0 16px;">
    You're in.
  </h1>
  <p style="font-size: 16px; line-height: 1.6; color: #525866; margin: 0 0 20px;">
    Your <strong style="color: #0F1827;">${productName}</strong> is ready. Click below to access it (no password to remember, this link logs you straight in).
  </p>
  <p style="margin: 28px 0;">
    <a href="${actionLink}" style="display: inline-block; padding: 14px 28px; background: #E67E3C; color: white; text-decoration: none; border-radius: 999px; font-weight: 600; font-size: 15px;">
      Open my playbook →
    </a>
  </p>
  <p style="font-size: 14px; line-height: 1.6; color: #7A8294; margin: 24px 0;">
    If the button doesn't work, paste this into your browser:<br>
    <span style="color: #525866; word-break: break-all;">${actionLink}</span>
  </p>
  <hr style="border: 0; border-top: 1px solid #E8E4DC; margin: 32px 0;">
  <p style="font-size: 13px; color: #7A8294; margin: 0;">
    Questions or stuck? Reply to this email, we read everything.<br>
    WarmerCoast · Cádiz, Spain
  </p>
</div>`,
      }),
    });
  } catch (e) {
    console.error('resend send failed', e);
  }
}

function verifySignature(payload: string, header: string, secret: string): boolean {
  const parts = Object.fromEntries(
    header.split(',').map((part) => part.split('=')) as [string, string][],
  );
  const ts = parts.t;
  const sig = parts.v1;
  if (!ts || !sig) return false;
  const signed = `${ts}.${payload}`;
  const expected = createHmac('sha256', secret).update(signed).digest('hex');
  try {
    return timingSafeEqual(Buffer.from(expected, 'hex'), Buffer.from(sig, 'hex'));
  } catch {
    return false;
  }
}
