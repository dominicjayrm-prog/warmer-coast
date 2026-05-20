import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { COUNTRY_META, type Country } from '@/lib/site';
import { listModulesForAdmin } from '@/lib/modules-db';

export default async function PlaybooksAdmin() {
  const all = await listModulesForAdmin();
  const byCountry: Record<Country, typeof all> = { spain: [], portugal: [], gibraltar: [] };
  all.forEach((m) => {
    if (m.country in byCountry) byCountry[m.country].push(m);
  });

  return (
    <section>
      <div className="flex items-end justify-between">
        <div>
          <Badge tone="neutral" uppercase>Playbooks</Badge>
          <h1 className="display mt-2 text-display-3 font-semibold tracking-tight text-ink">
            Module CMS
          </h1>
          <p className="mt-2 text-sm text-muted max-w-2xl">
            The paid playbook content. Each module has sections (rich text) and a checklist. Buyers
            see published modules at <code className="rounded bg-surface px-1 py-0.5 text-xs">/app/[country]/[slug]</code>.
            Drag-to-reorder lives inside each module editor.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {(['spain', 'portugal', 'gibraltar'] as Country[]).map((c) => {
          const meta = COUNTRY_META[c];
          const mods = byCountry[c];
          return (
            <Card key={c} variant="bordered">
              <div className="h-2" style={{ background: meta.accent }} />
              <CardBody>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{meta.flag}</span>
                    <h2 className="display text-[20px] font-semibold tracking-tight text-ink">
                      {meta.name}
                    </h2>
                  </div>
                  <span className="text-xs text-muted">{mods.length} modules</span>
                </div>

                <ul className="mt-4 flex flex-col gap-1.5">
                  {mods.map((m) => (
                    <li key={m.id}>
                      <Link
                        href={`/admin/playbooks/${m.id}`}
                        className="flex items-center justify-between rounded-card border border-border bg-white px-3 py-2 transition-all hover:border-ink/30"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span
                            className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-pill text-[11px] font-semibold"
                            style={{ background: meta.accentSoft, color: meta.accent }}
                          >
                            {String(m.module_number).padStart(2, '0')}
                          </span>
                          <span className="truncate text-sm font-semibold text-ink">{m.title}</span>
                        </div>
                        {!m.published && <Badge tone="warning">draft</Badge>}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <Link
                    href={`/admin/playbooks/new?country=${c}`}
                    className="inline-flex items-center gap-1 rounded-pill border border-border bg-white px-3 py-1.5 text-xs font-semibold text-ink hover:border-ink"
                  >
                    + New module
                  </Link>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
