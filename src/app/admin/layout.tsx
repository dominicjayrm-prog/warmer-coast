import type { Metadata } from 'next';
import Link from 'next/link';
import { requireAdmin, hasServiceRole } from '@/lib/admin';
import { AdminNavLinks } from '@/components/admin/AdminNavLinks';

export const metadata: Metadata = {
  title: 'Admin · WarmerCoast',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await requireAdmin();
  const serviceRole = hasServiceRole();

  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-40 border-b border-border bg-white/85 backdrop-blur">
        <div className="container-content flex h-14 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="display text-[15px] font-semibold tracking-tight text-ink">
              warmer<span className="text-warm italic">coast</span>{' '}
              <span className="ml-1 rounded-pill bg-ink px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
                Admin
              </span>
            </Link>
            <AdminNavLinks />
          </div>
          <div className="flex items-center gap-3 text-xs text-muted">
            <span className="hidden sm:inline">{user.email}</span>
            <Link href="/" className="rounded-pill border border-border bg-white px-3 py-1.5 font-semibold text-ink hover:border-ink">
              View site
            </Link>
          </div>
        </div>
      </header>
      {!serviceRole && (
        <div className="bg-warning/10 border-b border-warning/40 text-ink">
          <div className="container-content py-3 text-sm">
            <strong className="font-semibold">Set up needed:</strong>{' '}
            Add the <code className="rounded bg-white px-1.5 py-0.5 text-xs border border-border">SUPABASE_SERVICE_ROLE_KEY</code>{' '}
            env var on Vercel so the admin can read and write all data. Without it: list views look empty and saves fail silently.
          </div>
        </div>
      )}
      <main className="container-content py-8">{children}</main>
    </div>
  );
}
