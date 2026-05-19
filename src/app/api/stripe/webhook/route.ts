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

      // Upsert profile by email (auth user is created via magic link separately).
      if (email) {
        const { data: existingProfile } = await supabase
          .from('wc_profiles')
          .select('id')
          .eq('email', email)
          .maybeSingle();

        if (!existingProfile) {
          // No matching auth user yet, defer profile creation until login.
          // We still record the purchase below with user_id null.
        }

        await supabase.from('wc_purchases').insert({
          user_id: existingProfile?.id ?? null,
          stripe_session_id: sessionId,
          stripe_customer_id: customerId,
          product_slug: productSlug,
          amount_paid: amountTotal,
          currency,
          status: 'completed',
        });

        await supabase.from('wc_activity_log').insert({
          event_type: 'purchase',
          product_slug: productSlug,
          anonymised_name: 'A new buyer',
          metadata: { email_domain: email.split('@')[1] },
          is_seed: false,
        });

        // Trigger transactional purchase email if Resend configured.
        const resendKey = process.env.RESEND_API_KEY;
        const fromEmail = process.env.RESEND_FROM_EMAIL;
        if (resendKey && fromEmail) {
          try {
            await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${resendKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                from: fromEmail,
                to: email,
                subject: 'Your WarmerCoast playbook · access details',
                html: `<p>Welcome to WarmerCoast.</p>
<p>Your <strong>${productSlug}</strong> playbook is ready. Log in via magic link here:</p>
<p><a href="${SITE.url}/login?email=${encodeURIComponent(email)}">${SITE.url}/login</a></p>
<p>Any questions, just reply to this email.</p>`,
              }),
            });
          } catch (e) {
            console.error('resend send failed', e);
          }
        }
      }
    }

    if (event.type === 'charge.refunded') {
      const charge = event.data.object as Record<string, unknown>;
      const sessionId = (charge.metadata as Record<string, string> | undefined)?.checkout_session;
      if (sessionId) {
        await supabase
          .from('wc_purchases')
          .update({ status: 'refunded', refunded_at: new Date().toISOString() })
          .eq('stripe_session_id', sessionId);
      }
    }

    return NextResponse.json({ received: true });
  } catch (e) {
    console.error('webhook error', e);
    return NextResponse.json({ error: 'Webhook handler error' }, { status: 500 });
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
