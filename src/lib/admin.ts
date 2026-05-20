import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

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
    // Fail-safe: if ADMIN_EMAILS is unset, bounce.
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
