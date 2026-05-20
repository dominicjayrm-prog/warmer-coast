import { redirect } from 'next/navigation';
import { createClient, createServiceClient } from '@/lib/supabase/server';

function adminEmails(): string[] {
  return (process.env.ADMIN_EMAILS ?? '')
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
}

export async function requireAdmin() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    redirect('/login?next=/admin');
  }
  const allow = adminEmails();
  if (allow.length === 0) {
    redirect('/?error=admin_not_configured');
  }
  if (!allow.includes((user.email ?? '').toLowerCase())) {
    redirect('/?error=unauthorized');
  }
  return user;
}

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  return adminEmails().includes(email.toLowerCase());
}

/**
 * Admin DB client. Uses service-role to bypass RLS so admin pages can
 * see all rows (drafts, pending reviews, every lead, every purchase).
 * Safe because every admin route checks isAdminEmail() or requireAdmin()
 * before calling this.
 *
 * Falls back to the regular client if SUPABASE_SERVICE_ROLE_KEY isn't set,
 * so the admin still renders (with reduced visibility) until you add the
 * env var.
 */
export function adminDb() {
  try {
    return createServiceClient();
  } catch {
    return createClient();
  }
}

export function hasServiceRole(): boolean {
  return !!process.env.SUPABASE_SERVICE_ROLE_KEY;
}
