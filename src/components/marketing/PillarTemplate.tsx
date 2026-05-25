import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Accordion, type AccordionItem } from '@/components/ui/Accordion';
import { LiveTaxCalculator } from '@/components/calculators/LiveTaxCalculator';
import { RelatedResources, type RelatedResource } from '@/components/marketing/RelatedResources';
import { COUNTRY_META } from '@/lib/site';
import type { Country } from '@/lib/site';

const RELATED_BY_COUNTRY: Record<Country, RelatedResource[]> = {
  spain: [
    { kind: 'Reference', href: '/thresholds', label: '2026 thresholds, sourced', blurb: 'Beckham Law cap, IPREM, NLV, DNV, Modelo 720, all on one page with primary-source citations.' },
    { kind: 'Deep dive', href: '/spain/tax-residency', label: 'Spain tax residency for British movers', blurb: '183-day rule, centre-of-vital-interests, when the clock starts, treaty tiebreakers.' },
    { kind: 'Deep dive', href: '/spain/visa-guide', label: 'Spain visa guide: NLV vs DNV', blurb: 'Income thresholds, document packs, consulate quirks, the 6-month Beckham election window.' },
    { kind: 'Deep dive', href: '/spain/banking', label: 'Spanish banking for UK movers', blurb: 'Sabadell, BBVA, Santander, Openbank — what each requires from a British applicant.' },
    { kind: 'Deep dive', href: '/spain/cost-of-living', label: 'Spain cost of living for British movers', blurb: 'Madrid, Barcelona, Valencia, Sevilla, Málaga — real monthly outgoings in 2026.' },
    { kind: 'Compare', href: '/spain-vs-portugal', label: 'Spain vs Portugal compared', blurb: 'Beckham vs IFICI, NLV vs D7, wealth tax, citizenship — dimension by dimension.' },
    { kind: 'Compare', href: '/spain-vs-gibraltar', label: 'Spain vs Gibraltar compared', blurb: 'Where Beckham wins, where Cat 2 wins, and the income tier that flips the answer.' },
    { kind: 'Calculator', href: '/calculators/beckham-law', label: 'Beckham Law tax-saving calculator', blurb: 'Standard IRPF vs Beckham flat 24%. Find your break-even.' },
    { kind: 'Playbook', href: '/playbook/spain', label: 'The Spain Playbook · £397', blurb: '8 sequenced modules, vetted asesor referrals, padrón video walkthrough, lifetime updates.' },
  ],
  portugal: [
    { kind: 'Reference', href: '/thresholds', label: '2026 thresholds, sourced', blurb: 'D7 minimum income, IFICI rate and duration, every figure links to its primary source.' },
    { kind: 'Deep dive', href: '/portugal/tax', label: 'Portuguese tax: NHR 2.0 / IFICI explained', blurb: 'Who qualifies for IFICI, the 20% rate mechanics, foreign-income exemptions.' },
    { kind: 'Deep dive', href: '/portugal/visa-guide', label: 'Portugal visa guide: D7 vs D8', blurb: 'Passive-income D7 vs digital-nomad D8, the closed Golden Visa, family reunification.' },
    { kind: 'Deep dive', href: '/portugal/banking', label: 'Portuguese banking for UK movers', blurb: 'ActivoBank, Millennium BCP, fiscal-representative requirement, multi-currency strategy.' },
    { kind: 'Deep dive', href: '/portugal/cost-of-living', label: 'Portugal cost of living for British movers', blurb: 'Lisbon, Porto, Algarve — and what changed after the 2022-2024 rental surge.' },
    { kind: 'Compare', href: '/spain-vs-portugal', label: 'Spain vs Portugal compared', blurb: 'The decision most British movers wrestle with first.' },
    { kind: 'Compare', href: '/portugal-vs-gibraltar', label: 'Portugal vs Gibraltar compared', blurb: 'IFICI vs Cat 2, D7 vs £2m net worth, citizenship paths, banking.' },
    { kind: 'Calculator', href: '/calculators/cost-of-living', label: 'UK vs Portugal cost comparator', blurb: 'Monthly breakdown by city. Numbeo + ONS sourced.' },
    { kind: 'Playbook', href: '/playbook/portugal', label: 'The Portugal Playbook · £397', blurb: '7 sequenced modules, vetted contabilista referrals, year-one IRS walkthrough.' },
  ],
  gibraltar: [
    { kind: 'Reference', href: '/thresholds', label: '2026 thresholds, sourced', blurb: 'Cat 2 min/max tax, £118k income cap, net worth requirement — straight from the Gibraltar tax office.' },
    { kind: 'Deep dive', href: '/gibraltar/residency', label: 'Gibraltar Cat 2 residency in 2026', blurb: 'Net worth test, approved accommodation, Finance Centre vetting, the practical bar.' },
    { kind: 'Deep dive', href: '/gibraltar/tax', label: 'Gibraltar tax system: ABS, GIBS, Cat 2, HEPSS', blurb: 'How the bands actually work, the £118k cap mechanism, and which UK income stays UK-taxed.' },
    { kind: 'Deep dive', href: '/gibraltar/frontier-worker', label: 'Frontier worker: live Spain, work Gibraltar', blurb: 'The post-Brexit border, the 2026 EU treaty, tax-treaty mechanics, day counting.' },
    { kind: 'Deep dive', href: '/gibraltar/banking', label: 'Gibraltar banking for UK movers', blurb: 'GBP banking inside Iberia. Vetting, source-of-funds, frontier-worker setup.' },
    { kind: 'Compare', href: '/spain-vs-gibraltar', label: 'Spain vs Gibraltar compared', blurb: 'Beckham Law vs Cat 2 — and the income tier that flips the answer.' },
    { kind: 'Compare', href: '/portugal-vs-gibraltar', label: 'Portugal vs Gibraltar compared', blurb: 'For the HNW Algarve-vs-Rock decision: IFICI vs Cat 2, EU vs sterling.' },
    { kind: 'Calculator', href: '/calculators/beckham-law', label: 'Beckham Law (Spain) calculator', blurb: 'Useful if you’re also considering Spain as a Cat 2 alternative.' },
    { kind: 'Playbook', href: '/playbook/gibraltar', label: 'The Gibraltar Playbook · £497', blurb: '6 deep modules, frontier-worker mechanics, banking in a finance hub, schools, Spain-side.' },
  ],
};

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
  /** Real ISO date of the last manual review. Don't auto-bump — credibility lives in this being honest. */
  reviewedOn?: string;
}

interface HeroImage {
  src: string;
  objectPosition?: string;
}

const HERO_IMAGE: Record<Country, HeroImage> = {
  spain: { src: '/cadiz-coastline.png', objectPosition: 'right center' },
  portugal: { src: '/portugal.jpg', objectPosition: 'right center' },
  // New Gibraltar image has the Rock on the left, so we anchor left and
  // the calculator card overlays the empty sea on the right.
  gibraltar: { src: '/gibraltar.jpg', objectPosition: 'left center' },
};

export function PillarTemplate({ country, hero, subPillars, sections, faqs, reviewedOn = '2026-05-25' }: Props) {
  const meta = COUNTRY_META[country];
  const heroImage = HERO_IMAGE[country];
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
      '@id': 'https://warmercoast.com/about#dominic-roworth',
      name: 'Dominic Roworth',
      url: 'https://warmercoast.com/author/dominic-roworth',
      image: 'https://warmercoast.com/dominic-roworth.jpg',
    },
    publisher: {
      '@type': 'Organization',
      name: 'WarmerCoast',
      url: 'https://warmercoast.com',
    },
    datePublished: '2026-01-15',
    dateModified: reviewedOn,
  };
  return (
    <>
      <section className="relative overflow-hidden">
        {/* Country hero photo, positioned right so subject is visible behind
            the calculator card; left side is sea/sky which the white gradient
            blends into for headline legibility. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image
            src={heroImage.src}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover"
            style={{ objectPosition: heroImage.objectPosition ?? 'right center' }}
          />
          {country === 'gibraltar' ? (
            // Gibraltar image has the Rock on the LEFT directly under the
            // headline text. Stronger white on the left to keep text legible
            // over the limestone, fading to a softer wash on the right where
            // the calculator card sits.
            <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/70 to-white/85 lg:from-white/85 lg:via-white/55 lg:to-white/80" />
          ) : (
            // Spain + Portugal: lighter gradient so the ocean on the left
            // shows through, while the headline still has enough white-wash
            // behind it to stay readable. Text colour is also darkened
            // (text-ink/85) to compensate.
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/0 lg:from-white/90 lg:via-white/45 lg:to-white/0" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/40" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-10%] top-[-20%] h-[460px] w-[460px] rounded-full blur-3xl opacity-25"
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
            <p className="text-[18px] font-medium leading-relaxed text-ink/85">{hero.intro}</p>
            <div className="flex items-center gap-2 text-xs text-faint">
              <span>By <a href="/author/dominic-roworth" className="text-muted hover:text-ink underline-offset-2 hover:underline">Dominic Roworth</a></span>
              <span>·</span>
              <span>Reviewed {new Date(reviewedOn).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
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

      <RelatedResources
        heading={`Free ${meta.name} resources for movers`}
        subheading="Sourced, no email required. Read these before you buy the playbook."
        items={RELATED_BY_COUNTRY[country]}
      />

      <section className="relative overflow-hidden bg-night-deep text-white py-20">
        <div className="container-content text-center">
          <h2 className="display text-display-2 font-semibold tracking-tight text-balance">
            Ready for the full {meta.name} playbook?
          </h2>
          <p className="mt-3 text-white/70">
            {meta.modules} sequenced modules, interactive checklists, sourced calculations, lifetime updates.
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
