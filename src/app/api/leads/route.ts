import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { SITE } from '@/lib/site';

export const runtime = 'nodejs';

interface Body {
  email?: string;
  source?: string;
  metadata?: Record<string, unknown>;
  name?: string;
  phone?: string;
  enquiry_type?: string;
  message?: string;
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (!body.email || !body.email.includes('@')) {
    return NextResponse.json({ error: 'Email required' }, { status: 400 });
  }

  try {
    const supabase = createClient();
    // Shared leads table with the rest of Norry empire, namespaced by `site`.
    const { error } = await supabase.from('leads').insert({
      email: body.email,
      name: body.name ?? 'Unknown',
      phone: body.phone ?? '',
      enquiry_type: body.enquiry_type ?? 'general',
      message: body.message ?? '',
      source: body.source ?? 'unknown',
      status: 'new',
      site: SITE.siteKey,
    });
    if (error) {
      console.error('lead insert error', error);
      return NextResponse.json({ error: 'Insert failed' }, { status: 500 });
    }

    // Optional: ConvertKit subscribe if API key configured.
    const ck = process.env.CONVERTKIT_API_KEY;
    const ckForm =
      body.source === 'quiz'
        ? process.env.CONVERTKIT_FORM_ID_QUIZ
        : body.source === 'exit_intent'
          ? process.env.CONVERTKIT_FORM_ID_STARTER
          : process.env.CONVERTKIT_FORM_ID_NEWSLETTER;
    if (ck && ckForm) {
      try {
        await fetch(`https://api.convertkit.com/v3/forms/${ckForm}/subscribe`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            api_key: ck,
            email: body.email,
            tags: [body.source ?? 'unknown'],
          }),
        });
      } catch (e) {
        console.error('convertkit subscribe failed', e);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
