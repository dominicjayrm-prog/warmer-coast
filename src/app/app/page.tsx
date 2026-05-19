import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Card, CardBody } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { COUNTRY_META, type Country } from '@/lib/site';
import { PLAYBOOK_MODULES } from '@/lib/playbook-modules';

export const metadata: Metadata = {
  title: 'Your dashboard',
  robots: { index: false, follow: false },
};

interface Purchase {
  product_slug: string;
  status: string;
}

interface ProgressRow {
  country: string;
  module_number: number;
  completed: boolean;
}

export default async function AppHome() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const { data: purchases } = await supabase
    .from('wc_purchases')
    .select('product_slug,status')
    .eq('user_id', user.id);

  const { data: progress } = await supabase
    .from('wc_user_progress')
    .select('country,module_number,completed')
    .eq('user_id', user.id);

  const owned = new Set<Country>();
  ((purchases as Purchase[] | null) ?? []).forEach((p) => {
    if (p.status !== 'completed') return;
    if (p.product_slug === 'bundle') {
      owned.add('spain');
      owned.add('portugal');
      owned.add('gibraltar');
    } else if (['spain', 'portugal', 'gibraltar'].includes(p.product_slug)) {
      owned.add(p.product_slug as Country);
    }
  });

  // For demo / testing: if no purchases, show all countries as "preview" mode.
  const preview = owned.size === 0;
  const visibleCountries: Country[] = preview ? ['spain', 'portugal', 'gibraltar'] : Array.from(owned);

  const progressMap = new Map<string, number>();
  ((progress as ProgressRow[] | null) ?? []).forEach((p) => {
    const key = `${p.country}-total`;
    progressMap.set(key, (progressMap.get(key) ?? 0) + 1);
    if (p.completed) {
      const ckey = `${p.country}-completed`;
      progressMap.set(ckey, (progressMap.get(ckey) ?? 0) + 1);
    }
  });

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
              {preview
                ? 'Preview mode: you haven\'t completed a purchase yet. Modules are unlocked for browsing.'
                : 'Pick up where you left off, or jump into another module.'}
            </p>
          </div>
          <Link href="/account" className="text-sm font-semibold text-muted hover:text-ink">
            Account settings →
          </Link>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {visibleCountries.map((c) => {
            const meta = COUNTRY_META[c];
            const total = PLAYBOOK_MODULES[c].length;
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
                    {preview && <Badge tone="neutral">Preview</Badge>}
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
      </div>
    </section>
  );
}
