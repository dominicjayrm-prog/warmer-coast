import type { Metadata } from 'next';
import Link from 'next/link';
import { requireAdmin } from '@/lib/admin';
import { AdminNavLinks } from '@/components/admin/AdminNavLinks';

export const metadata: Metadata = {
  title: 'Admin · WarmerCoast',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await requireAdmin();

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
      <main className="container-content py-8">{children}</main>
    </div>
  );
}
