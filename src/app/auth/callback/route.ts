import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/app';

  if (!code) {
    return NextResponse.redirect(`${origin}/login?error=missing_code`);
  }

  const supabase = createClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    return NextResponse.redirect(`${origin}/login?error=${encodeURIComponent(error.message)}`);
  }

  // Ensure a wc_profiles row exists.
  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    await supabase.from('wc_profiles').upsert(
      { id: user.id, email: user.email },
      { onConflict: 'id' },
    );
  }

  return NextResponse.redirect(`${origin}${next}`);
}
