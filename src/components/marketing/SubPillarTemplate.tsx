import Link from 'next/link';
import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { COUNTRY_META, type Country } from '@/lib/site';

export interface SpokeLink {
  href: string;
  label: string;
  excerpt: string;
}

export interface SubPillarSection {
  id: string;
  title: string;
  body: ReactNode;
}

interface Props {
  country: Country;
  eyebrow: string;
  h1: string;
  intro: string;
  spokes?: SpokeLink[];
  bullets?: string[];
  /** Rich body sections with H2 + paragraphs/lists. Rendered between
   *  the intro/bullets and the spokes. Use for SEO-weight content. */
  sections?: SubPillarSection[];
  /** External primary-source citations. Rendered nofollow + noopener. */
  sources?: { label: string; href: string }[];
  /** FAQ entries with question + answer, renders schema.org FAQPage JSON-LD. */
  faqs?: { q: string; a: string }[];
  subPillarSlug?: string;
}

export function SubPillarTemplate({
  country,
  eyebrow,
  h1,
  intro,
  spokes,
  bullets,
  sections,
  sources,
  faqs,
  subPillarSlug,
}: Props) {
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
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: h1,
    description: intro,
    author: { '@type': 'Person', name: 'Dominic Roworth', url: 'https://warmercoast.com/about' },
    publisher: { '@type': 'Organization', name: 'WarmerCoast', url: 'https://warmercoast.com' },
    dateModified: new Date().toISOString().slice(0, 10),
  };
  const faqSchema = faqs && faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
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
          <p className="mt-4 text-[18px] leading-relaxed text-ink/85 font-medium">{intro}</p>
          <div className="mt-3 flex items-center gap-2 text-xs text-faint">
            <span>By <Link href="/about" className="text-muted hover:text-ink underline-offset-2 hover:underline">Dominic Roworth</Link></span>
            <span>·</span>
            <span>Reviewed {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}</span>
            <span>·</span>
            <span>2026 figures</span>
          </div>
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

      {sections && sections.length > 0 && (
        <section className="bg-white pb-16">
          <div className="container-content max-w-3xl">
            <div className="flex flex-col gap-12">
              {sections.map((s) => (
                <article key={s.id} id={s.id} className="scroll-mt-24">
                  <h2 className="display text-[28px] font-semibold tracking-tight text-ink text-balance sm:text-[32px]">
                    {s.title}
                  </h2>
                  <div className="prose prose-base mt-4 max-w-none text-[16px] leading-relaxed text-ink/90 prose-headings:display prose-headings:tracking-tight prose-a:text-warm prose-a:underline-offset-2 hover:prose-a:underline">
                    {s.body}
                  </div>
                </article>
              ))}
            </div>

            {sources && sources.length > 0 && (
              <Card variant="bordered" className="mt-12">
                <CardBody className="!p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                    Primary sources
                  </div>
                  <ul className="mt-2 flex flex-col gap-1 text-[13px] text-muted">
                    {sources.map((src) => (
                      <li key={src.href}>
                        <a
                          href={src.href}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className="underline-offset-2 hover:text-ink hover:underline"
                        >
                          {src.label} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            )}

            {faqs && faqs.length > 0 && (
              <div className="mt-14">
                <h2 className="display text-[28px] font-semibold tracking-tight text-ink text-balance sm:text-[32px]">
                  Frequently asked questions
                </h2>
                <div className="mt-6 flex flex-col gap-3">
                  {faqs.map((f, i) => (
                    <div key={i} className="rounded-card border border-border bg-white p-5">
                      <div className="display text-[18px] font-semibold tracking-tight text-ink">
                        {f.q}
                      </div>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {breadcrumb && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      )}
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
    </>
  );
}
