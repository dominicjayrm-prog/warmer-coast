import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Card, CardBody } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { COUNTRY_META, COUNTRIES, type Country } from '@/lib/site';
import { listModules } from '@/lib/modules-db';
import { getEntitlements } from '@/lib/entitlements';

export const metadata: Metadata = {
  title: 'Your dashboard',
  robots: { index: false, follow: false },
};

interface ProgressRow {
  country: string;
  module_number: number;
  completed: boolean;
}

export default async function AppHome() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login?next=/app');

  const ent = await getEntitlements();
  const owned: Country[] = ent ? Array.from(ent.ownedCountries) : [];

  const { data: progress } = await supabase
    .from('wc_user_progress')
    .select('country,module_number,completed')
    .eq('user_id', user.id);

  const progressMap = new Map<string, number>();
  ((progress as ProgressRow[] | null) ?? []).forEach((p) => {
    if (p.completed) {
      const key = `${p.country}-completed`;
      progressMap.set(key, (progressMap.get(key) ?? 0) + 1);
    }
  });

  // Same source of truth as the country pages (DB with code fallback), so the
  // dashboard percentage can never drift from the module list actually shown.
  const moduleCounts = new Map<Country, number>(
    await Promise.all(
      owned.map(async (c) => [c, (await listModules(c)).length] as [Country, number]),
    ),
  );

  return (
    <section className="bg-white py-14">
      <div className="container-content">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Badge tone="warm" uppercase>Dashboard</Badge>
            <h1 className="display mt-3 text-display-2 font-semibold tracking-tight text-ink">
              Hello {user.email?.split('@')[0]}
            </h1>
            <p className="mt-2 text-muted">
              {owned.length === 0
                ? 'No playbook on this account yet. Pick one below to get started.'
                : ent?.isAdmin
                  ? 'Admin access. All playbooks unlocked.'
                  : 'Pick up where you left off, or jump into another module.'}
            </p>
          </div>
          <Link href="/account" className="text-sm font-semibold text-muted hover:text-ink">
            Account settings →
          </Link>
        </div>

        {owned.length > 0 && (
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {owned.map((c) => {
              const meta = COUNTRY_META[c];
              const total = moduleCounts.get(c) ?? 0;
              const done = progressMap.get(`${c}-completed`) ?? 0;
              const pct = total > 0 ? Math.round((done / total) * 100) : 0;
              return (
                <Card key={c} variant="bordered">
                  <div className="h-2" style={{ background: meta.accent }} />
                  <CardBody className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{meta.flag}</span>
                        <h2 className="display text-[22px] font-semibold tracking-tight text-ink">
                          {meta.name}
                        </h2>
                      </div>
                      {ent?.isAdmin && <Badge tone="dark">Admin</Badge>}
                    </div>
                    <div className="text-xs text-muted">
                      {done} of {total} modules done · {pct}%
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-pill bg-border/60">
                      <div
                        className="h-full rounded-pill transition-all"
                        style={{ width: `${pct}%`, background: meta.accent }}
                      />
                    </div>
                    <Link
                      href={`/app/${c}`}
                      className="mt-2 inline-flex items-center gap-2 rounded-pill bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:-translate-y-px transition-all"
                    >
                      Open playbook →
                    </Link>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        )}

        {owned.length === 0 && (
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Card variant="bordered" className="lg:col-span-2">
              <CardBody>
                <Badge tone="warm" uppercase>Get started</Badge>
                <h2 className="display mt-3 text-display-3 font-semibold tracking-tight text-ink">
                  You don&apos;t have a playbook yet.
                </h2>
                <p className="mt-3 text-muted">
                  If you just purchased and you&apos;re seeing this, refresh in a moment, the Stripe
                  webhook can take 5 to 10 seconds. Otherwise, browse the playbooks below.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    href="/quiz"
                    className="rounded-pill bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:-translate-y-px transition-all"
                  >
                    Which country fits you?
                  </Link>
                  {COUNTRIES.map((c) => (
                    <Link
                      key={c}
                      href={`/playbook/${c}`}
                      className="rounded-pill border border-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-ink"
                    >
                      {COUNTRY_META[c].flag} {COUNTRY_META[c].name} · £{COUNTRY_META[c].price}
                    </Link>
                  ))}
                </div>
              </CardBody>
            </Card>
            <Card variant="bordered" className="lg:col-span-2">
              <CardBody>
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                  Just bought something?
                </div>
                <p className="mt-2 text-sm text-muted">
                  Purchases are linked to your account by email. If you paid with a different email
                  than the one you logged in with, contact us at{' '}
                  <a href="mailto:hello@warmercoast.com" className="text-warm hover:underline underline-offset-2">
                    hello@warmercoast.com
                  </a>{' '}
                  and we&apos;ll sort it out fast.
                </p>
              </CardBody>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
