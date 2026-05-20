import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { COUNTRY_META, COUNTRIES, type Country } from '@/lib/site';
import { listModules } from '@/lib/modules-db';

export const metadata: Metadata = {
  title: 'Playbook',
  robots: { index: false, follow: false },
};

export default async function CountryPlaybook({ params }: { params: { country: string } }) {
  if (!COUNTRIES.includes(params.country as Country)) notFound();
  const country = params.country as Country;
  const meta = COUNTRY_META[country];
  const modules = await listModules(country);

  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const { data: progress } = await supabase
    .from('wc_user_progress')
    .select('module_number,completed')
    .eq('user_id', user.id)
    .eq('country', country);

  const progressByModule = new Map<number, boolean>();
  ((progress as { module_number: number; completed: boolean }[] | null) ?? []).forEach((p) =>
    progressByModule.set(p.module_number, p.completed),
  );

  return (
    <section className="bg-white py-14">
      <div className="container-content">
        <Link href="/app" className="text-sm font-semibold text-muted hover:text-ink">
          ← Dashboard
        </Link>
        <div className="mt-4 flex items-center gap-3">
          <span className="text-3xl">{meta.flag}</span>
          <h1 className="display text-display-2 font-semibold tracking-tight text-ink">
            {meta.name} Playbook
          </h1>
        </div>
        <p className="mt-2 text-muted">
          {modules.length} modules · sequenced for the move order. Tick checklist items inside each
          module, progress syncs across devices.
        </p>

        <div className="mt-10 flex flex-col gap-3">
          {modules.map((m) => {
            const done = progressByModule.get(m.n) === true;
            return (
              <Link
                key={m.slug}
                href={`/app/${country}/${m.slug}`}
                className="group rounded-card border border-border bg-white p-5 transition-all hover:-translate-y-px hover:shadow-card"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-pill text-sm font-semibold"
                      style={{ background: meta.accentSoft, color: meta.accent }}
                    >
                      {String(m.n).padStart(2, '0')}
                    </span>
                    <div>
                      <div className="display text-[20px] font-semibold tracking-tight text-ink">
                        {m.title}
                      </div>
                      <div className="text-sm text-muted">{m.summary}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {done ? (
                      <Badge tone="success">✓ Done</Badge>
                    ) : (
                      <Badge tone="neutral">{m.duration}</Badge>
                    )}
                    <span className="text-warm group-hover:translate-x-0.5 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <Card variant="bordered" className="mt-10">
          <CardBody>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Sticky module navigator
            </div>
            <p className="mt-2 text-sm text-muted">
              Inside each module the sidebar shows your position across the whole playbook. Mark
              checklist items complete, see total progress, jump to any module.
            </p>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
