import Link from 'next/link';
import { adminDb } from '@/lib/admin';
import { SITE } from '@/lib/site';
import { Card, CardBody } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default async function AdminDashboard() {
  const supabase = adminDb();

  const [postsTotal, postsPublished, leadsTotal, leadsThisWeek, testimonialsPending, purchasesTotal] =
    await Promise.all([
      supabase.from('blog_posts').select('id', { count: 'exact', head: true }).eq('site', SITE.siteKey),
      supabase
        .from('blog_posts')
        .select('id', { count: 'exact', head: true })
        .eq('site', SITE.siteKey)
        .eq('status', 'published'),
      supabase.from('leads').select('id', { count: 'exact', head: true }).eq('site', SITE.siteKey),
      supabase
        .from('leads')
        .select('id', { count: 'exact', head: true })
        .eq('site', SITE.siteKey)
        .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()),
      supabase.from('wc_testimonials').select('id', { count: 'exact', head: true }).eq('approved', false),
      supabase.from('wc_purchases').select('id', { count: 'exact', head: true }),
    ]);

  const cards = [
    { label: 'Blog posts', value: postsTotal.count ?? 0, sub: `${postsPublished.count ?? 0} published`, href: '/admin/blog' },
    { label: 'Leads (all-time)', value: leadsTotal.count ?? 0, sub: `${leadsThisWeek.count ?? 0} this week`, href: '/admin/leads' },
    { label: 'Reviews pending', value: testimonialsPending.count ?? 0, sub: 'awaiting moderation', href: '/admin/testimonials' },
    { label: 'Purchases', value: purchasesTotal.count ?? 0, sub: 'all-time', href: '/admin/purchases' },
  ];

  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <Badge tone="warm" uppercase>Dashboard</Badge>
          <h1 className="display mt-2 text-display-3 font-semibold tracking-tight text-ink">
            Overview
          </h1>
        </div>
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-2 rounded-pill bg-ink px-4 py-2 text-sm font-semibold text-white hover:-translate-y-px transition-all"
        >
          + New blog post
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <Link key={c.label} href={c.href}>
            <Card variant="bordered" interactive className="h-full">
              <CardBody>
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">{c.label}</div>
                <div className="display mt-2 text-[40px] font-semibold leading-none text-ink">
                  {c.value.toLocaleString()}
                </div>
                <div className="mt-2 text-xs text-faint">{c.sub}</div>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <Card variant="bordered">
          <CardBody>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Quick actions</div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/admin/blog/new"
                className="rounded-pill bg-warm px-4 py-2 text-sm font-semibold text-white hover:-translate-y-px transition-all"
              >
                + Write blog post
              </Link>
              <Link
                href="/admin/leads?export=csv"
                className="rounded-pill border border-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:border-ink"
              >
                Export leads (CSV)
              </Link>
              <Link
                href="/admin/testimonials"
                className="rounded-pill border border-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:border-ink"
              >
                Moderate reviews
              </Link>
            </div>
          </CardBody>
        </Card>
        <Card variant="bordered">
          <CardBody>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Heads-up</div>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-muted">
              <li>Blog posts published with site=&apos;warmercoast.com&apos; appear immediately on /blog.</li>
              <li>Image uploads land in Supabase storage bucket <code className="rounded bg-surface px-1">blog-images/warmercoast/</code>.</li>
              <li>Activity ticker still shows seed entries until you delete them on the Activity page.</li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
