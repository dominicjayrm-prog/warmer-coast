import { NextResponse } from 'next/server';
import { createClient, createServiceClient } from '@/lib/supabase/server';

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

  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    // Ensure a wc_profiles row exists.
    await supabase.from('wc_profiles').upsert(
      { id: user.id, email: user.email },
      { onConflict: 'id' },
    );

    // Claim any orphaned purchases that landed before the buyer logged in.
    // Stripe webhook writes wc_purchases with user_id=null and email=<buyer>.
    // First login after purchase links those rows to the new profile.
    if (user.email) {
      try {
        const service = createServiceClient();
        await service.rpc('wc_claim_pending_purchases', {
          p_user_id: user.id,
          p_email: user.email,
        });
      } catch (e) {
        console.error('claim pending purchases failed', e);
      }
    }
  }

  return NextResponse.redirect(`${origin}${next}`);
}
