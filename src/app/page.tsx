import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { LiveTaxCalculator } from '@/components/calculators/LiveTaxCalculator';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { SocialProofStrip } from '@/components/marketing/SocialProofStrip';
import { Testimonials } from '@/components/marketing/Testimonials';
import { TimeframeGate } from '@/components/marketing/TimeframeGate';
import { ActivityTicker } from '@/components/marketing/ActivityTicker';
import { Accordion } from '@/components/ui/Accordion';
import { NewsletterCapture } from '@/components/marketing/NewsletterCapture';
import { COUNTRY_META } from '@/lib/site';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Move to Spain, Portugal or Gibraltar from the UK | WarmerCoast',
  description:
    'Honest UK to Iberia relocation playbooks. Beckham Law, NHR 2.0, Gibraltar Cat 2. Visas, tax, banking, schools, sourced. Built in Cádiz.',
  alternates: { canonical: SITE.url },
};

const trustChips = [
  { icon: '★ 4.9', label: 'verified buyer rating' },
  { icon: '✓', label: '30-day strong refund' },
  { icon: '⏱', label: '12 months of updates included' },
];

const playbooks = [
  {
    slug: 'spain',
    title: 'Spain',
    price: '£397',
    duration: '8 modules · 12+ hours',
    bullets: [
      'Beckham Law mechanics with worked examples',
      'Non-lucrative visa, digital nomad visa, golden alternatives',
      'Modelo 720, 100, 030, padrón, NIE in order',
      'Healthcare, schooling, regional differences (Andalucía vs Cataluña vs Valencia)',
    ],
  },
  {
    slug: 'portugal',
    title: 'Portugal',
    price: '£397',
    duration: '7 modules · 10+ hours',
    bullets: [
      'NHR 2.0 (IFICI) eligibility and structuring',
      'D7 vs D8 vs Golden Visa decision framework',
      'IRS basics, Portuguese banking, SNS healthcare',
      'Algarve vs Lisbon vs Porto cost reality',
    ],
  },
  {
    slug: 'gibraltar',
    title: 'Gibraltar',
    price: '£497',
    duration: '6 modules · 9+ hours',
    bullets: [
      'Cat 2 residency cap and qualifying assets',
      'HEPSS for high-earning specialists',
      'Frontier-worker mechanics, the Spain crossing',
      'Banking in a finance hub, schools, post-Brexit reality',
    ],
  },
];

const promises = [
  {
    icon: '⚖',
    title: 'Sourced, not made up',
    body:
      'Every claim cites a gov.uk page, an agencia tributaria reference, a Banco de Portugal source, or a Gibraltar Income Tax Office release. Inline footnotes.',
  },
  {
    icon: '🛟',
    title: 'Educational, not regulated',
    body:
      'We teach you the structure and the questions to ask. For situation-specific decisions we recommend an FCA adviser, asesor fiscal or Cat 2 specialist, with referrals.',
  },
  {
    icon: '🧭',
    title: 'British-perspective only',
    body:
      'Built for UK income, UK pensions, UK property, UK ISAs. Not a generic relocation course. Tax-residency split-year mechanics explained the way HMRC actually frames them.',
  },
  {
    icon: '⏱',
    title: 'Updated for 2026',
    body:
      'NHR 2.0 (IFICI), the new Spanish digital nomad rules, post-Brexit Gibraltar frontier reality. Updates included for 12 months from purchase.',
  },
];

const faqs = [
  {
    q: 'Is this regulated financial advice?',
    a: 'No, and we say so on every page. It is structured educational content with full sources. For decisions that depend on your specific situation, we recommend an FCA-regulated adviser, a colegiado abogado or asesor fiscal in Spain, or a Cat 2 specialist for Gibraltar. We include vetted referrals inside the buyer dashboard.',
  },
  {
    q: 'How is this different from a Facebook expat group or a free YouTube channel?',
    a: 'Structured, sourced, and sequenced. A Facebook group is anecdotes from people who got lucky. We walk through the actual order of operations: pre-move UK actions, the visa file you need, the first three months on the ground, year-one tax filing. Every module has worked numerical examples.',
  },
  {
    q: 'Will the Beckham Law / NHR 2.0 / Cat 2 still exist in three years?',
    a: 'We track changes. The Spain digital nomad route was 2023. Portugal NHR was replaced by IFICI / NHR 2.0 in 2024. Gibraltar Cat 2 has been stable since the 1990s. Each playbook flags which schemes are politically fragile and gives fallback structures.',
  },
  {
    q: 'What if I buy the wrong country?',
    a: 'Honest answer: it happens. That is why the country comparison tool and the quiz are both free and unlimited use. If you buy a playbook then decide on a different country within 30 days, email us and we will swap your access at no charge. After 30 days we will offer a 25% loyalty discount on the second country.',
  },
  {
    q: 'Refund policy?',
    a: 'Complete the first three modules within 30 days. If you have not identified at least £1,000 in tax mistakes you would have made without the playbook, email us for a full refund and keep the materials. Less than 4% of buyers ever ask, which is why we can keep this policy.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofStrip />
      <TimeframeGate />
      <Promises />
      <PlaybookGrid />
      <CountrySummary />
      <FreeTools />
      <HowItWorks />
      <Testimonials />
      <FoundersBlurb />
      <FAQSection />
      <ClosingCTA />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'WarmerCoast',
            url: SITE.url,
            logo: `${SITE.url}/icon.png`,
            sameAs: [SITE.socials.instagram, SITE.socials.youtube],
          }),
        }}
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
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
      <ActivityTicker />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background photo of Cádiz coastline. Positioned so the buildings sit
          on the right; the left side is sea/sky which the gradient hides. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <Image
          src="/hero-landing.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
          quality={85}
        />
        {/* White gradient: opaque on the left (where the headline sits) fading
            to transparent so the Cádiz photo shows on the right. Vertical
            ramp at the bottom blends into the next section cleanly. */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/0 lg:from-white/90 lg:via-white/45 lg:to-white/0" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/40" />
      </div>
      <div
        aria-hidden
        className="sun-glow pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full blur-3xl opacity-40"
      />
      <div className="container-content relative grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <div className="flex flex-col gap-7">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="warm" uppercase>2026 ready · UK-EU Gibraltar treaty included</Badge>
          </div>

          <h1 className="display text-display-1 font-medium tracking-tight text-ink text-balance">
            Move to Spain, Portugal or Gibraltar.{' '}
            <span className="italic text-warm">Without the £20k mistakes.</span>
          </h1>

          <p className="max-w-xl text-[19px] font-medium leading-relaxed text-ink/85">
            Sourced, sequenced relocation playbooks for British adults. The visa file, the tax
            structuring, the banking, the schools, the right order. Built for 2026 rules
            including IFICI, Beckham Law, and the new Gibraltar-EU border treaty.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/playbook/spain"
              className="inline-flex items-center gap-2 rounded-pill bg-ink px-6 py-3.5 text-[15px] font-semibold text-white shadow-card transition-all hover:-translate-y-px hover:shadow-elevated"
            >
              See the playbooks
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-6 py-3.5 text-[15px] font-semibold text-ink hover:border-ink"
            >
              Should you move? Take the 12-q quiz
            </Link>
          </div>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted">
            {trustChips.map((c) => (
              <li key={c.label} className="flex items-center gap-1.5">
                <span className="font-semibold text-warm">{c.icon}</span>
                <span>{c.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <LiveTaxCalculator />
        </div>
      </div>
    </section>
  );
}

function Promises() {
  return (
    <section className="bg-surface/60 py-20 sm:py-24">
      <div className="container-content">
        <div className="max-w-2xl">
          <Badge tone="neutral" uppercase>What this is, what it isn&apos;t</Badge>
          <h2 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
            A playbook, not a course. A library, not a webinar.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            You don&apos;t need another &ldquo;6 mistakes to avoid&rdquo; PDF. You need the exact
            sequence: the form, the deadline, the consequence of missing it, and a worked example
            with your income range.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p) => (
            <Card key={p.title} variant="bordered" className="h-full">
              <CardBody className="flex h-full flex-col gap-3">
                <div className="text-3xl" aria-hidden>{p.icon}</div>
                <h3 className="display text-[19px] font-semibold tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{p.body}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlaybookGrid() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-content">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Badge tone="warm" uppercase>The three playbooks</Badge>
            <h2 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
              Pick the country. We do the rest.
            </h2>
          </div>
          <Link href="/quiz" className="text-sm font-semibold text-ink hover:text-warm">
            Not sure which? Take the quiz →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {playbooks.map((p) => {
            const meta = COUNTRY_META[p.slug as keyof typeof COUNTRY_META];
            return (
              <Card key={p.slug} variant="bordered" className="group flex h-full flex-col">
                <div
                  className="h-2"
                  style={{ background: `linear-gradient(90deg, ${meta.accent}, ${meta.accentSoft})` }}
                />
                <CardBody className="flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl" aria-hidden>{meta.flag}</span>
                      <h3 className="display text-[24px] font-semibold tracking-tight text-ink">
                        {p.title}
                      </h3>
                    </div>
                    <span className="display text-2xl font-semibold text-ink">{p.price}</span>
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                    {p.duration}
                  </div>
                  <ul className="flex flex-col gap-2 text-sm text-muted">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: meta.accent }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-3 border-t border-border">
                    <Link
                      href={`/playbook/${p.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-pill bg-ink px-4 py-2.5 text-[13px] font-semibold text-white hover:-translate-y-px transition-all"
                    >
                      See playbook →
                    </Link>
                    <Link
                      href={`/${p.slug}`}
                      className="text-[13px] font-semibold text-muted hover:text-ink"
                    >
                      Free guide
                    </Link>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>

        <Card
          variant="elevated"
          className="mt-6 relative overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(120deg, rgba(230,126,60,0.07) 0%, rgba(46,133,133,0.06) 50%, rgba(156,56,72,0.05) 100%)',
            }}
          />
          <CardBody className="relative grid items-center gap-6 sm:grid-cols-[1.4fr_1fr]">
            <div>
              <Badge tone="warm" uppercase>Not sure which country?</Badge>
              <h3 className="display mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Use the free tools first. Buy the one that fits.
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                Most readers spend 3 to 7 days deciding between Spain, Portugal and Gibraltar.
                The 12-question quiz and the side-by-side country comparator are both free and
                designed to save you that wasted £397 on the wrong playbook.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-2 rounded-pill bg-warm px-6 py-3 text-[14px] font-semibold text-white shadow-glow hover:-translate-y-px transition-all"
                >
                  Take the 12-q quiz · free
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/calculators/compare-countries"
                  className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-5 py-3 text-[14px] font-semibold text-ink hover:border-ink"
                >
                  Side-by-side comparison
                </Link>
              </div>
            </div>
            <div className="grid gap-2 text-sm text-muted sm:grid-cols-1">
              <div className="flex items-center gap-2 rounded-card border border-border bg-white px-4 py-3">
                <span aria-hidden>✓</span>
                <span>4 minutes, branching logic</span>
              </div>
              <div className="flex items-center gap-2 rounded-card border border-border bg-white px-4 py-3">
                <span aria-hidden>✓</span>
                <span>Weighted on tax, cost, family, climate</span>
              </div>
              <div className="flex items-center gap-2 rounded-card border border-border bg-white px-4 py-3">
                <span aria-hidden>✓</span>
                <span>Personalised playbook recommendation</span>
              </div>
              <div className="flex items-center gap-2 rounded-card border border-border bg-white px-4 py-3">
                <span aria-hidden>✓</span>
                <span>Saved locally, return any time</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

function CountrySummary() {
  return (
    <section className="bg-night-deep text-white py-20 sm:py-28">
      <div className="container-content">
        <div className="max-w-2xl">
          <Badge tone="warm" uppercase>Pillar guides · free</Badge>
          <h2 className="display mt-4 text-display-2 font-semibold tracking-tight text-balance">
            The country guides anyone can read
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-white/70">
            Each country has a free, 2,500-word pillar guide and a tree of sub-pillars (visa, tax,
            banking, cost of living). Built for SEO, written for humans.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {(Object.keys(COUNTRY_META) as (keyof typeof COUNTRY_META)[]).map((c) => {
            const meta = COUNTRY_META[c];
            return (
              <Link
                key={c}
                href={`/${c}`}
                className="group rounded-card border border-white/10 bg-white/5 p-7 transition-all hover:-translate-y-px hover:border-white/30 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <div className="display text-[22px] font-semibold tracking-tight">
                    {meta.flag} {meta.name}
                  </div>
                  <span aria-hidden style={{ color: meta.accent }} className="text-xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-white/70">{meta.blurb}</p>
                <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-white/50">
                  <span>Visa guide</span>
                  <span>·</span>
                  <span>Tax residency</span>
                  <span>·</span>
                  <span>Banking</span>
                  <span>·</span>
                  <span>Cost of living</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FreeTools() {
  const tools = [
    {
      href: '/calculators/compare-countries',
      title: 'Spain vs Portugal vs Gibraltar',
      blurb: 'Side-by-side: tax, cost, visa difficulty, English-speaking, weather, schools.',
      tag: 'New',
    },
    {
      href: '/calculators/beckham-law',
      title: 'Beckham Law calculator',
      blurb: 'Full version of the homepage tool with deductions, social security, family.',
      tag: 'Top tool',
    },
    {
      href: '/calculators/cost-of-living',
      title: 'Cost of living comparator',
      blurb: 'UK city to target city, monthly breakdown, sourced from Numbeo + ONS.',
    },
    {
      href: '/calculators/visa-eligibility',
      title: 'Visa eligibility quiz',
      blurb: '12 questions, branching logic, recommendation by country and route.',
    },
    {
      href: '/calculators/pension-transfer',
      title: 'Pension transfer estimator',
      blurb: 'QROPS, OTS, lifetime allowance, UK→Spain pension residency rules.',
    },
    {
      href: '/calculators/property-tax',
      title: 'Property purchase tax',
      blurb: 'IBI, ITP, plusvalía, IMI, all the property-side surprises.',
    },
    {
      href: '/calculators/school-cost',
      title: 'International school cost',
      blurb: 'British, American, IB schools across Costa del Sol, Algarve, Gibraltar.',
    },
    {
      href: '/calculators/residency-timeline',
      title: 'Residency timeline',
      blurb: 'When you become tax-resident, when the 183-day clock starts, day counting.',
    },
  ];
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-content">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Badge tone="sea" uppercase>Eight free calculators</Badge>
            <h2 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
              Free tools good enough that you might not need the playbook
            </h2>
          </div>
          <Link href="/calculators" className="text-sm font-semibold text-ink hover:text-warm">
            All tools →
          </Link>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group flex h-full flex-col rounded-card border border-border bg-white p-5 transition-all hover:-translate-y-px hover:border-ink/40 hover:shadow-card"
            >
              <div className="flex items-center justify-between">
                <div className="display text-[17px] font-semibold tracking-tight text-ink">
                  {t.title}
                </div>
                {t.tag && <Badge tone="warm">{t.tag}</Badge>}
              </div>
              <div className="mt-2 text-[13px] leading-relaxed text-muted">{t.blurb}</div>
              <div className="mt-4 text-[13px] font-semibold text-warm group-hover:translate-x-0.5 transition-transform">
                Open tool →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: '01',
      title: 'Pick the right country',
      body:
        'Use the free comparison tool or the 12-q quiz. If you already know, skip ahead. Most buyers spend 3 to 7 days here.',
    },
    {
      n: '02',
      title: 'Buy the playbook',
      body:
        'Single payment, £397 for Spain or Portugal, £497 for Gibraltar. Instant access via magic-link email. No password to forget.',
    },
    {
      n: '03',
      title: 'Work through the modules',
      body:
        'Sequenced for the actual move order: pre-move UK actions, visa file, arrival, first 90 days, year-one tax.',
    },
    {
      n: '04',
      title: 'Cross items off your checklist',
      body:
        'Each module has an interactive checklist with deadlines. Sync across devices. Progress saved.',
    },
  ];
  return (
    <section className="bg-surface/60 py-20 sm:py-24">
      <div className="container-content">
        <div className="max-w-xl">
          <Badge tone="neutral" uppercase>How it works</Badge>
          <h2 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
            Same flow as the buyer dashboard you&apos;ll actually use
          </h2>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-card border border-border bg-white p-6">
              <div className="display text-[40px] font-semibold leading-none tracking-tightest text-warm">
                {s.n}
              </div>
              <h3 className="display mt-3 text-[19px] font-semibold tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FoundersBlurb() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-content grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div
          aria-hidden
          className="relative aspect-[5/4] overflow-hidden rounded-card border border-border"
          style={{
            background:
              'linear-gradient(135deg, #FFE9D5 0%, #FFB870 35%, #E67E3C 65%, #2E8585 100%)',
          }}
        >
          <div className="absolute inset-0 grain opacity-50" />
          <div className="absolute bottom-4 left-4 right-4 rounded-card bg-white/90 p-4 backdrop-blur">
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              British, working from Iberia
            </div>
            <div className="display mt-1 text-lg font-semibold text-ink">
              Built by Dominic Roworth
            </div>
          </div>
        </div>

        <div>
          <Badge tone="warm" uppercase>About</Badge>
          <h2 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
            Why this exists
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            More than 80,000 UK citizens move to Spain, Portugal or Gibraltar each year, and
            almost all of them learn the system the hard way. Wrong visa route. Missed Beckham
            Law election. Sold the UK house at the wrong time. Lost £15,000 they didn&apos;t need
            to.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            WarmerCoast is the structured, sourced playbook for doing this properly. Written by
            Dominic Roworth, updated for 2026 rules including the new Gibraltar-EU border treaty,
            and built around a single goal: don&apos;t let any reader make a five-figure mistake
            that twenty minutes of structured reading could have caught.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-ink"
            >
              Read the full story →
            </Link>
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 rounded-pill px-5 py-2.5 text-sm font-semibold text-muted hover:text-ink"
            >
              247 verified reviews
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="bg-surface/60 py-20 sm:py-28">
      <div className="container-content grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <Badge tone="neutral" uppercase>FAQ</Badge>
          <h2 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
            Honest answers, including the awkward ones
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            If your question isn&apos;t here,{' '}
            <Link href="/contact" className="text-ink underline-offset-2 hover:underline">
              email us
            </Link>{' '}
            and we&apos;ll add it.
          </p>
        </div>
        <Accordion items={faqs} />
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-night-deep text-white py-20 sm:py-28">
      <div
        aria-hidden
        className="sun-glow pointer-events-none absolute -left-20 -bottom-20 h-[420px] w-[420px] rounded-full blur-3xl"
      />
      <div className="container-content relative grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Badge tone="warm" uppercase>Final word</Badge>
          <h2 className="display mt-4 text-display-2 font-semibold tracking-tight text-balance">
            One bad <span className="italic text-warm-light">tax year</span> costs more than every
            playbook combined.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/70">
            You&apos;re going to spend hundreds of hours researching this move anyway. Three of those
            hours, structured and sourced, gets you to the right answer £20k faster.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 rounded-pill bg-warm px-6 py-3.5 text-[15px] font-semibold text-white shadow-glow hover:-translate-y-px transition-all"
            >
              Find your playbook · free quiz
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 rounded-pill border border-white/20 bg-white/5 px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-white/10"
            >
              Take the quiz first
            </Link>
          </div>
        </div>
        <div className="rounded-card border border-white/10 bg-white/5 p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.1em] text-white/60">
            Or just the newsletter
          </div>
          <h3 className="display mt-2 text-2xl font-semibold tracking-tight text-balance">
            One email a fortnight, two minutes to read
          </h3>
          <p className="mt-2 text-sm text-white/70">
            New tax rulings, schemes opening or closing, real cost-of-living updates from Cádiz.
            No spam, unsubscribe in one click.
          </p>
          <div className="mt-5">
            <NewsletterCapture source="homepage_closing" variant="dark" cta="Subscribe" />
          </div>
        </div>
      </div>
    </section>
  );
}
