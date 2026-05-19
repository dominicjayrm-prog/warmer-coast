import { NextResponse } from 'next/server';
import { PRODUCTS, SITE, type ProductSlug } from '@/lib/site';

export const runtime = 'nodejs';

interface Body {
  product?: ProductSlug;
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  const slug = body.product;
  if (!slug || !(slug in PRODUCTS)) {
    return NextResponse.json({ error: 'Unknown product' }, { status: 400 });
  }

  const secret = process.env.STRIPE_SECRET_KEY;
  const priceEnvKey = `STRIPE_PRICE_${slug.toUpperCase()}` as const;
  const priceId = process.env[priceEnvKey];

  if (!secret || !priceId) {
    // Stripe not configured yet, fall back to soft "coming soon" route.
    return NextResponse.json(
      {
        fallback: true,
        url: `/checkout/${slug}`,
        message: 'Stripe not configured. Redirecting to fallback checkout page.',
      },
      { status: 200 },
    );
  }

  try {
    const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secret}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        mode: 'payment',
        'line_items[0][price]': priceId,
        'line_items[0][quantity]': '1',
        success_url: `${SITE.url}/checkout/success?session_id={CHECKOUT_SESSION_ID}&product=${slug}`,
        cancel_url: `${SITE.url}/playbook/${slug}?cancelled=1`,
        'metadata[product_slug]': slug,
        'metadata[site]': SITE.siteKey,
        allow_promotion_codes: 'true',
        'automatic_tax[enabled]': 'true',
        'customer_creation': 'always',
        billing_address_collection: 'auto',
      }),
    });
    const data = await stripeRes.json();
    if (!stripeRes.ok) {
      console.error('Stripe error', data);
      return NextResponse.json({ error: data?.error?.message ?? 'Stripe error' }, { status: 500 });
    }
    return NextResponse.json({ url: data.url });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Stripe call failed' }, { status: 500 });
  }
}
