import Link from 'next/link';
import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Accordion, type AccordionItem } from '@/components/ui/Accordion';
import { LiveTaxCalculator } from '@/components/calculators/LiveTaxCalculator';
import { COUNTRY_META } from '@/lib/site';
import type { Country } from '@/lib/site';

export interface PillarSection {
  id: string;
  title: string;
  intro: string;
  body: ReactNode;
  bullets?: string[];
  sources?: { label: string; href: string }[];
}

export interface SubPillarLink {
  href: string;
  label: string;
  blurb: string;
}

interface Props {
  country: Country;
  hero: {
    eyebrow: string;
    h1Lead: string;
    h1Accent: string;
    h1Tail?: string;
    intro: string;
  };
  subPillars: SubPillarLink[];
  sections: PillarSection[];
  faqs: AccordionItem[];
  breadcrumbName?: string;
}

export function PillarTemplate({ country, hero, subPillars, sections, faqs }: Props) {
  const meta = COUNTRY_META[country];
  const playbookSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://warmercoast.com' },
      { '@type': 'ListItem', position: 2, name: meta.name, item: `https://warmercoast.com/${country}` },
    ],
  };
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to move to ${meta.name} from the UK`,
    description: hero.intro,
    totalTime: 'P12M',
    step: sections.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.intro,
      url: `https://warmercoast.com/${country}#${s.id}`,
    })),
  };
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Move to ${meta.name} from the UK`,
    description: hero.intro,
    author: {
      '@type': 'Person',
      name: 'Dom Roworth',
      url: 'https://warmercoast.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'WarmerCoast',
      url: 'https://warmercoast.com',
    },
    datePublished: '2026-01-15',
    dateModified: new Date().toISOString().slice(0, 10),
  };
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-10%] top-[-20%] h-[460px] w-[460px] rounded-full blur-3xl opacity-50"
          style={{
            background: `radial-gradient(circle at center, ${meta.accent} 0%, transparent 70%)`,
          }}
        />
        <div className="container-content relative grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-24">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone={country === 'spain' ? 'warm' : country === 'portugal' ? 'sea' : 'gibraltar'} uppercase>
                {hero.eyebrow}
              </Badge>
              <Badge tone="neutral">Free guide · {sections.length}-part pillar</Badge>
            </div>
            <h1 className="display text-display-1 font-medium tracking-tight text-ink text-balance">
              {hero.h1Lead}{' '}
              <span className="italic" style={{ color: meta.accent }}>
                {hero.h1Accent}
              </span>
              {hero.h1Tail ? <>{' '}{hero.h1Tail}</> : null}
            </h1>
            <p className="text-[18px] leading-relaxed text-muted">{hero.intro}</p>
            <div className="flex items-center gap-2 text-xs text-faint">
              <span>By <a href="/about" className="text-muted hover:text-ink underline-offset-2 hover:underline">Dom Roworth and Sofia</a></span>
              <span>·</span>
              <span>Reviewed {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}</span>
              <span>·</span>
              <span>2026 figures</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/playbook/${country}`}
                className="inline-flex items-center gap-2 rounded-pill px-6 py-3.5 text-[15px] font-semibold text-white shadow-card hover:-translate-y-px transition-all"
                style={{ background: meta.accent }}
              >
                See the {meta.name} playbook · £{meta.price}
                <span aria-hidden>→</span>
              </Link>
              <a
                href="#sections"
                className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-6 py-3.5 text-[15px] font-semibold text-ink hover:border-ink"
              >
                Free guide ↓
              </a>
            </div>
          </div>
          <LiveTaxCalculator initialCountry={country} />
        </div>
      </section>

      <section className="border-y border-border bg-surface/60 py-10">
        <div className="container-content">
          <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
            Sub-pillars · part of the {meta.name} hub
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {subPillars.map((sp) => (
              <Link
                key={sp.href}
                href={sp.href}
                className="group rounded-card border border-border bg-white p-4 transition-all hover:-translate-y-px hover:border-ink/30"
              >
                <div className="text-sm font-semibold text-ink">{sp.label}</div>
                <div className="mt-1 text-xs text-muted">{sp.blurb}</div>
                <div className="mt-3 text-xs font-semibold" style={{ color: meta.accent }}>
                  Read →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="sections" className="bg-white py-20 sm:py-24">
        <div className="container-content grid gap-12 lg:grid-cols-[1fr_2.4fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
              On this page
            </div>
            <ul className="mt-3 flex flex-col gap-1.5 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block rounded-card py-1.5 text-muted hover:text-ink"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
              <li className="mt-3 border-t border-border pt-3">
                <Link
                  href={`/playbook/${country}`}
                  className="block rounded-card px-3 py-2 text-sm font-semibold text-white hover:opacity-90"
                  style={{ background: meta.accent }}
                >
                  See the playbook →
                </Link>
              </li>
            </ul>
          </aside>

          <div className="prose-base flex flex-col gap-14">
            {sections.map((s) => (
              <article key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="display text-display-3 font-semibold tracking-tight text-ink text-balance">
                  {s.title}
                </h2>
                <p className="mt-3 text-[17px] leading-relaxed text-muted">{s.intro}</p>
                <div className="mt-5 text-[16px] leading-relaxed text-ink/90 space-y-4">{s.body}</div>
                {s.bullets && (
                  <ul className="mt-5 flex flex-col gap-2 text-[16px] text-ink/90">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: meta.accent }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.sources && s.sources.length > 0 && (
                  <Card variant="bordered" className="mt-6">
                    <CardBody className="!p-4">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                        Sources
                      </div>
                      <ul className="mt-2 flex flex-col gap-1 text-[13px] text-muted">
                        {s.sources.map((src) => (
                          <li key={src.href}>
                            <a
                              href={src.href}
                              target="_blank"
                              rel="noopener noreferrer"
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface/60 py-20 sm:py-24">
        <div className="container-content grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Badge tone="neutral" uppercase>FAQ</Badge>
            <h2 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
              {meta.name} questions buyers actually ask
            </h2>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-night-deep text-white py-20">
        <div className="container-content text-center">
          <h2 className="display text-display-2 font-semibold tracking-tight text-balance">
            Ready for the full {meta.name} playbook?
          </h2>
          <p className="mt-3 text-white/70">
            8 sequenced modules, interactive checklists, sourced calculations, lifetime updates.
          </p>
          <Link
            href={`/playbook/${country}`}
            className="mt-6 inline-flex items-center gap-2 rounded-pill px-6 py-3.5 text-[15px] font-semibold text-white hover:-translate-y-px transition-all"
            style={{ background: meta.accent }}
          >
            See the playbook · £{meta.price}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(playbookSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: typeof f.a === 'string' ? f.a : '' },
            })),
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['[data-speakable="faq"]'],
            },
          }),
        }}
      />
    </>
  );
}
