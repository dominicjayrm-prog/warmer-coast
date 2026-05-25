import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { COUNTRY_META, type Country } from '@/lib/site';
import { LatestPostsStrip } from '@/components/marketing/LatestPostsStrip';
import { CountryAlternativesCallout } from '@/components/marketing/CountryAlternativesCallout';

export interface SpokeLink {
  href: string;
  label: string;
  excerpt: string;
}

export interface SubPillarSection {
  id: string;
  title: string;
  body: ReactNode;
  /** Optional "at a glance" key-figure card displayed alongside the section. */
  glance?: {
    label: string;
    value: string;
    note?: string;
  };
}

interface Props {
  country: Country;
  eyebrow: string;
  h1: string;
  intro: string;
  spokes?: SpokeLink[];
  bullets?: string[];
  sections?: SubPillarSection[];
  sources?: { label: string; href: string }[];
  faqs?: { q: string; a: string }[];
  subPillarSlug?: string;
  /** Real ISO date of the last manual review. Don't auto-bump. */
  reviewedOn?: string;
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
  reviewedOn = '2026-05-25',
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
      {/* Hero band */}
      <section className="relative bg-gradient-to-b from-surface/50 to-white pt-12 pb-10 sm:pt-16 sm:pb-14">
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
          <p className="mt-4 text-[19px] leading-relaxed text-ink/85 font-medium">{intro}</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-faint">
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block h-6 w-6 rounded-pill bg-gradient-to-br from-warm-light to-warm" aria-hidden />
              By <Link href="/about" className="text-muted hover:text-ink underline-offset-2 hover:underline font-semibold">Dominic Roworth</Link>
            </span>
            <span>·</span>
            <span>Reviewed {new Date(reviewedOn).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>·</span>
            <span>2026 figures</span>
          </div>
          {bullets && (
            <div className="mt-7 rounded-card border border-border bg-white p-5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                Key facts
              </div>
              <ul className="mt-3 flex flex-col gap-2 text-[15px] text-ink/90">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: meta.accent }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {sections && sections.length > 0 && (
        <section className="bg-white pb-16">
          <div className="container-content grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-12">
            {/* Sticky TOC on desktop */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                  On this page
                </div>
                <ul className="mt-3 flex flex-col gap-1 text-sm">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block rounded-md px-3 py-1.5 text-muted hover:bg-surface hover:text-ink transition-colors"
                      >
                        <span className="text-faint mr-2">{String(i + 1).padStart(2, '0')}</span>
                        {s.title.split(':')[0]}
                      </a>
                    </li>
                  ))}
                  {faqs && faqs.length > 0 && (
                    <li>
                      <a
                        href="#faq"
                        className="block rounded-md px-3 py-1.5 text-muted hover:bg-surface hover:text-ink transition-colors"
                      >
                        <span className="text-faint mr-2">FAQ</span>
                        Questions
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </aside>

            <div className="max-w-3xl lg:max-w-none">
              <div className="flex flex-col gap-14">
                {sections.map((s, i) => (
                  <article key={s.id} id={s.id} className="scroll-mt-24">
                    {/* Numbered section marker */}
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.1em] text-faint">
                      <span
                        className="inline-flex h-7 w-7 items-center justify-center rounded-pill text-[12px] text-white"
                        style={{ background: meta.accent }}
                        aria-hidden
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      Section {i + 1} of {sections.length}
                    </div>
                    <h2 className="display mt-3 text-[26px] font-semibold tracking-tight text-ink text-balance sm:text-[30px]">
                      {s.title}
                    </h2>
                    {s.glance && (
                      <Card variant="bordered" className="mt-5 border-l-4" style={{ borderLeftColor: meta.accent }}>
                        <CardBody className="!py-4">
                          <div className="flex items-baseline gap-3">
                            <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-faint shrink-0">
                              At a glance
                            </div>
                            <div className="flex-1">
                              <div className="display text-[26px] font-semibold leading-none tracking-tight text-ink">
                                {s.glance.value}
                              </div>
                              <div className="mt-1 text-sm text-muted">{s.glance.label}</div>
                              {s.glance.note && (
                                <div className="mt-1 text-xs text-faint">{s.glance.note}</div>
                              )}
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    )}
                    <div className="prose prose-base mt-5 max-w-none text-[16.5px] leading-[1.7] text-ink/90 prose-headings:display prose-headings:tracking-tight prose-headings:text-ink prose-strong:text-ink prose-a:text-warm prose-a:underline-offset-2 hover:prose-a:underline prose-li:my-1 prose-ul:my-3">
                      {s.body}
                    </div>
                  </article>
                ))}
              </div>

              {sources && sources.length > 0 && (
                <div className="mt-14 rounded-card border border-border bg-surface/60 p-5">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                    <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: meta.accent }} />
                    Primary sources
                  </div>
                  <ul className="mt-3 flex flex-col gap-1.5 text-[14px] text-muted">
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
                </div>
              )}

              {faqs && faqs.length > 0 && (
                <div id="faq" className="mt-16 scroll-mt-24">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.1em] text-faint">
                    <span
                      className="inline-flex h-7 w-7 items-center justify-center rounded-pill text-[12px] text-white"
                      style={{ background: meta.accent }}
                      aria-hidden
                    >
                      ?
                    </span>
                    Questions buyers actually ask
                  </div>
                  <h2 className="display mt-3 text-[26px] font-semibold tracking-tight text-ink text-balance sm:text-[30px]">
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

              <CountryAlternativesCallout current={country} />

              {/* Author bio card */}
              <Card variant="bordered" className="mt-14">
                <CardBody className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                  <div
                    className="relative h-16 w-16 shrink-0 overflow-hidden rounded-pill bg-gradient-to-br from-warm-light to-warm"
                    aria-hidden
                  >
                    <Image src="/icon.svg" alt="" fill className="opacity-90" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                      Written by
                    </div>
                    <div className="display mt-1 text-[20px] font-semibold tracking-tight text-ink">
                      Dominic Roworth
                    </div>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted">
                      British relocation researcher. Writes WarmerCoast&apos;s sourced guides on
                      moving from the UK to Spain, Portugal or Gibraltar. Every page reviewed
                      against primary government sources for 2026.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 text-sm">
                      <Link
                        href="/about"
                        className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-white px-3 py-1.5 font-semibold text-ink hover:border-ink"
                      >
                        About →
                      </Link>
                      <a
                        href="https://www.linkedin.com/in/dominicroworth/"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-white px-3 py-1.5 font-semibold text-ink hover:border-ink"
                      >
                        LinkedIn ↗
                      </a>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
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

      <LatestPostsStrip
        heading={`Related ${meta.name} reading`}
        subhead="Sourced 2026 deep-dives on the most important tax, visa and residency topics."
        tone="white"
      />

      <section className="bg-surface/60 py-16">
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
