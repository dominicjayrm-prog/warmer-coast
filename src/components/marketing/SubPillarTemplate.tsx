import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { COUNTRY_META, type Country } from '@/lib/site';

export interface SpokeLink {
  href: string;
  label: string;
  excerpt: string;
}

interface Props {
  country: Country;
  eyebrow: string;
  h1: string;
  intro: string;
  spokes?: SpokeLink[];
  bullets?: string[];
  subPillarSlug?: string;
}

export function SubPillarTemplate({ country, eyebrow, h1, intro, spokes, bullets, subPillarSlug }: Props) {
  const meta = COUNTRY_META[country];
  const breadcrumb = subPillarSlug
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://warmercoast.com' },
          { '@type': 'ListItem', position: 2, name: meta.name, item: `https://warmercoast.com/${country}` },
          { '@type': 'ListItem', position: 3, name: eyebrow, item: `https://warmercoast.com/${country}/${subPillarSlug}` },
        ],
      }
    : null;
  return (
    <>
      <section className="bg-white py-14 sm:py-20">
        <div className="container-content max-w-3xl">
          <div className="flex items-center gap-2 text-sm">
            <Link href={`/${country}`} className="text-muted hover:text-ink">{meta.name}</Link>
            <span className="text-faint">/</span>
            <Badge tone={country === 'spain' ? 'warm' : country === 'portugal' ? 'sea' : 'gibraltar'} uppercase>
              {eyebrow}
            </Badge>
          </div>
          <h1 className="display mt-5 text-display-2 font-semibold tracking-tight text-ink text-balance">
            {h1}
          </h1>
          <p className="mt-4 text-[18px] leading-relaxed text-muted">{intro}</p>
          {bullets && (
            <ul className="mt-6 flex flex-col gap-2 text-[16px] text-ink/90">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: meta.accent }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {spokes && spokes.length > 0 && (
        <section className="bg-surface/60 py-14">
          <div className="container-content">
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Deep dives
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {spokes.map((s) => (
                <Card key={s.href} variant="bordered" interactive>
                  <CardBody>
                    <Link href={s.href} className="block">
                      <div className="display text-[19px] font-semibold tracking-tight text-ink">
                        {s.label}
                      </div>
                      <p className="mt-2 text-sm text-muted">{s.excerpt}</p>
                      <div className="mt-3 text-xs font-semibold" style={{ color: meta.accent }}>
                        Read →
                      </div>
                    </Link>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-16">
        <div className="container-content max-w-3xl text-center">
          <h2 className="display text-display-3 font-semibold tracking-tight text-ink text-balance">
            Get the full {meta.name} playbook
          </h2>
          <p className="mt-3 text-muted">
            The structured version of everything on this page, with worked examples, checklists,
            and 12 months of updates.
          </p>
          <Link
            href={`/playbook/${country}`}
            className="mt-5 inline-flex items-center gap-2 rounded-pill px-6 py-3.5 text-[14px] font-semibold text-white shadow-card hover:-translate-y-px transition-all"
            style={{ background: meta.accent }}
          >
            See the playbook · £{meta.price}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {breadcrumb && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      )}
    </>
  );
}
