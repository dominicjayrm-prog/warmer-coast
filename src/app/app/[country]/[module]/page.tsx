import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Badge } from '@/components/ui/Badge';
import { COUNTRY_META, COUNTRIES, type Country } from '@/lib/site';
import { PLAYBOOK_MODULES, getModule } from '@/lib/playbook-modules';
import { ModuleChecklist } from '@/components/app/ModuleChecklist';

export const metadata: Metadata = {
  title: 'Module',
  robots: { index: false, follow: false },
};

export default async function ModulePage({
  params,
}: {
  params: { country: string; module: string };
}) {
  if (!COUNTRIES.includes(params.country as Country)) notFound();
  const country = params.country as Country;
  const mod = getModule(country, params.module);
  if (!mod) notFound();

  const meta = COUNTRY_META[country];
  const allModules = PLAYBOOK_MODULES[country];
  const idx = allModules.findIndex((m) => m.slug === mod.slug);
  const prev = idx > 0 ? allModules[idx - 1] : null;
  const next = idx < allModules.length - 1 ? allModules[idx + 1] : null;

  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const { data: checklistRows } = await supabase
    .from('wc_user_checklist')
    .select('item_id,completed')
    .eq('user_id', user.id)
    .eq('country', country)
    .eq('module_number', mod.n);

  const completed = new Set<string>(
    ((checklistRows as { item_id: string; completed: boolean }[] | null) ?? [])
      .filter((r) => r.completed)
      .map((r) => r.item_id),
  );

  return (
    <section className="bg-white py-14">
      <div className="container-content grid gap-10 lg:grid-cols-[1fr_2.4fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Link href={`/app/${country}`} className="text-sm font-semibold text-muted hover:text-ink">
            ← {meta.name} Playbook
          </Link>
          <div className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-faint">
            Module navigator
          </div>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm">
            {allModules.map((m) => {
              const isCurrent = m.slug === mod.slug;
              return (
                <li key={m.slug}>
                  <Link
                    href={`/app/${country}/${m.slug}`}
                    className={`flex items-center justify-between rounded-card px-3 py-2 ${
                      isCurrent ? 'bg-surface font-semibold text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    <span>
                      <span className="text-faint">{String(m.n).padStart(2, '0')}</span> {m.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>

        <article>
          <Badge tone="warm" uppercase style={{ background: meta.accentSoft, color: meta.accent, borderColor: meta.accent + '50' }}>
            {meta.name} · module {mod.n}
          </Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
            {mod.title}
          </h1>
          <p className="mt-3 text-[18px] leading-relaxed text-muted">{mod.summary}</p>
          <div className="mt-3 text-xs text-faint">Estimated time: {mod.duration}</div>

          <div className="mt-8 flex flex-col gap-6 text-[16px] leading-relaxed text-ink/90">
            {mod.sections.map((s) => (
              <section key={s.title}>
                <h2 className="display text-[22px] font-semibold tracking-tight text-ink">{s.title}</h2>
                <p className="mt-2">{s.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="display text-[22px] font-semibold tracking-tight text-ink">Checklist</h2>
            <p className="mt-1 text-sm text-muted">
              Tick items as you complete them. Progress saves automatically.
            </p>
            <ModuleChecklist
              country={country}
              moduleNumber={mod.n}
              items={mod.checklist}
              initialCompleted={Array.from(completed)}
              accent={meta.accent}
            />
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
            {prev ? (
              <Link
                href={`/app/${country}/${prev.slug}`}
                className="rounded-pill border border-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-ink"
              >
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/app/${country}/${next.slug}`}
                className="rounded-pill bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:-translate-y-px transition-all"
              >
                {next.title} →
              </Link>
            ) : (
              <Link
                href={`/app/${country}`}
                className="rounded-pill bg-ink px-5 py-2.5 text-sm font-semibold text-white"
              >
                Back to overview →
              </Link>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
