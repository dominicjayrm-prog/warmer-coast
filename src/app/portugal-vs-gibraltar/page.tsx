import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { RelatedResources } from '@/components/marketing/RelatedResources';
import { SITE } from '@/lib/site';

const TITLE = 'Portugal vs Gibraltar for British Movers in 2026: Tax, Residency, Reality';
const DESC =
  'Sourced comparison of Portugal and Gibraltar for UK adults in 2026. IFICI vs Category 2, D7/D8 vs Cat 2/HEPSS, wealth tax, citizenship, climate, banking. The two least-overlapping Iberia options, properly compared.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/portugal-vs-gibraltar' },
  openGraph: { url: '/portugal-vs-gibraltar', title: TITLE, description: DESC },
  twitter: { title: TITLE, description: DESC },
  keywords: [
    'Portugal vs Gibraltar',
    'IFICI vs Cat 2',
    'D7 vs Category 2',
    'Algarve vs Gibraltar',
    'British expat Portugal Gibraltar',
    'NHR replacement Gibraltar',
  ],
};

const VERDICT_ROWS: { dimension: string; portugal: string; gibraltar: string; winner: 'portugal' | 'gibraltar' | 'tie' }[] = [
  { dimension: 'Best for retirees on UK pensions', portugal: 'D7 at €920/mo, standard IRS on world income (IFICI no help)', gibraltar: 'Cat 2 minimum £37k tax — overkill for pension-only', winner: 'portugal' },
  { dimension: 'Best for £250k+ employment income', portugal: 'IFICI 20% × income (if qualifying activity)', gibraltar: 'Cat 2 max £42,380 — true cap', winner: 'gibraltar' },
  { dimension: 'Best for IFICI-ineligible high earners', portugal: 'Standard IRS up to 48% — punishing', gibraltar: 'Cat 2 caps everything at £42,380', winner: 'gibraltar' },
  { dimension: 'Wealth tax', portugal: 'None', gibraltar: 'None', winner: 'tie' },
  { dimension: 'Foreign-asset disclosure', portugal: 'None equivalent to Modelo 720', gibraltar: 'None', winner: 'tie' },
  { dimension: 'Residency bar', portugal: 'D7 €11k/yr income, no net-worth bar', gibraltar: '£2 million net worth, Finance Centre vetting', winner: 'portugal' },
  { dimension: 'Citizenship after residency', portugal: '5 years → Portuguese (EU) citizenship', gibraltar: 'British Overseas Territory route — UK citizenship', winner: 'portugal' },
  { dimension: 'Climate and outdoor lifestyle', portugal: 'Algarve, Alentejo, Lisbon, Porto — 800km of coast', gibraltar: 'Mediterranean climate, 6.7 km² territory', winner: 'portugal' },
  { dimension: 'Currency match for UK earners', portugal: 'Euro — GBP/EUR exposure', gibraltar: 'Sterling zone', winner: 'gibraltar' },
  { dimension: 'English coverage day-to-day', portugal: 'Widely spoken in Lisbon, Porto, Algarve', gibraltar: 'English is the working language', winner: 'gibraltar' },
];

const FAQS = [
  {
    q: 'Why would anyone compare Portugal and Gibraltar — they\'re completely different?',
    a: 'They are, but they end up on the same shortlist for one specific buyer profile: the British HNW mover who values the UK-style sterling-zone bureaucracy of Gibraltar but is weighing it against Portugal\'s Algarve lifestyle and EU-citizenship pathway. The Algarve is also geographically close to Gibraltar via Faro airport (~2-3 hours), so people who own property in the Algarve sometimes assess Gibraltar as a tax-residency alternative to Portuguese tax.',
  },
  {
    q: 'I\'m a retiree on UK pensions. Which is better?',
    a: 'Portugal\'s D7 visa, every time. The minimum income is €920/month (€11,040/year) and pensions qualify directly. IFICI doesn\'t help pension income any more, but standard Portuguese IRS plus the UK-Portugal double-tax treaty handles UK pensions reasonably well. Gibraltar\'s Cat 2 demands £2m net worth and charges a £37k minimum tax — vastly overkill for someone living on a UK pension. The only retirees who should look seriously at Cat 2 are those with very high investment income, where the £42,380 cap on tax becomes meaningful.',
  },
  {
    q: 'I have a remote-work income of £150k. Where should I move?',
    a: 'Neither is the obvious answer — Spain probably wins your specific case via Beckham Law (24% × £150k = £36k tax for six years). But between Portugal and Gibraltar specifically: if your activity is on Portugal\'s IFICI qualifying list (science, tech startups, high-export sectors), IFICI gives you 20% × income = £30k for 10 years, which is the longest-running savings. If you don\'t qualify for IFICI, you face standard IRS up to 48% in Portugal, and Gibraltar Cat 2 (capped at £37k–£42,380) becomes the rational choice if you can clear the £2m net worth bar.',
  },
  {
    q: 'How does the climate compare?',
    a: 'Both Mediterranean-influenced. Gibraltar is hotter than the Algarve in summer (35°C+ regularly) and warmer in winter due to its peninsula geography. The Algarve has more extreme temperature swings inland but milder coastal summers. Northern Portugal (Porto upward) is materially cooler and wetter — closer to a southern UK climate.',
  },
  {
    q: 'Can I get EU citizenship via Gibraltar?',
    a: 'No. Gibraltar is a British Overseas Territory — the residency-to-citizenship pathway leads to British Overseas Territories Citizen status and, after further qualifying residence, full British Citizenship. It does not lead to EU citizenship. Portugal at 5 years gives full Portuguese (and therefore EU) citizenship. For movers who want EU passports, Portugal is the only one of these two that delivers it.',
  },
  {
    q: 'Banking comparison — Portugal or Gibraltar?',
    a: 'Gibraltar has the GBP-zone advantage — Gibraltar International Bank, Bank of Gibraltar, NatWest International all run accounts in pounds. Portugal\'s banks (ActivoBank, Millennium BCP, Novo Banco) operate in euros only, and require a NIF + fiscal representative for non-residents to open. For British movers managing UK income and UK pension drawdown, Gibraltar removes a layer of FX friction; Portugal doesn\'t.',
  },
];

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESC,
    datePublished: '2026-05-25',
    dateModified: '2026-05-25',
    author: { '@type': 'Person', '@id': `${SITE.url}/about#dominic-roworth`, name: 'Dominic Roworth', url: `${SITE.url}/author/dominic-roworth` },
    publisher: { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/portugal-vs-gibraltar`,
    about: [
      { '@type': 'Country', name: 'Portugal' },
      { '@type': 'Country', name: 'Gibraltar' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Portugal vs Gibraltar', item: `${SITE.url}/portugal-vs-gibraltar` },
    ],
  };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-content max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink underline-offset-2 hover:underline">Home</Link>
            <span aria-hidden>›</span>
            <span className="text-ink">Portugal vs Gibraltar</span>
          </nav>

          <Badge tone="warm" uppercase>2026 comparison · sourced</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
            Portugal vs Gibraltar for British movers in 2026
          </h1>
          <p className="mt-5 text-[18.5px] leading-relaxed text-muted">
            These two countries appeal to opposite ends of the same audience: Portugal is for
            British movers who want EU citizenship, an outdoor lifestyle and lower friction.
            Gibraltar is for British movers who want sterling-zone banking, English-language
            bureaucracy and a hard tax cap. They overlap in one specific decision: HNW Algarve-
            adjacent buyers weighing Faro-region life against the Rock. This is the honest
            comparison.
          </p>

          <div className="mt-6 flex items-center gap-3 text-xs text-faint">
            <span>By <Link href="/author/dominic-roworth" className="text-muted hover:text-ink underline-offset-2 hover:underline font-semibold">Dominic Roworth</Link></span>
            <span aria-hidden>·</span>
            <span>Reviewed 25 May 2026</span>
            <span aria-hidden>·</span>
            <span>2026 figures</span>
          </div>

          <Card variant="bordered" className="mt-8">
            <CardBody>
              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">The TL;DR</div>
              <p className="mt-2 text-[16.5px] leading-relaxed text-ink/90">
                <strong>Portugal wins for almost every ordinary British mover</strong>: lower
                residency bar, EU citizenship in 5 years, wider geography, gentler everyday
                bureaucracy. <strong>Gibraltar wins only for the specific £200k+ income / £2m+
                net worth HNW profile</strong> where Cat 2&apos;s £42,380 tax cap and the absence
                of any wealth-tax or disclosure overhead overpower Portugal&apos;s structural
                advantages.
              </p>
            </CardBody>
          </Card>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">The verdict, dimension by dimension</h2>
          <div className="mt-5 overflow-hidden rounded-card border border-border">
            <table className="w-full text-left text-[14.5px]">
              <thead className="bg-surface text-[12px] font-semibold uppercase tracking-[0.06em] text-muted">
                <tr>
                  <th className="px-4 py-3 w-[28%]">Dimension</th>
                  <th className="px-4 py-3">🇵🇹 Portugal</th>
                  <th className="px-4 py-3">🇬🇮 Gibraltar</th>
                  <th className="px-4 py-3 w-[12%]">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                {VERDICT_ROWS.map((r) => (
                  <tr key={r.dimension} className="align-top">
                    <td className="px-4 py-3 font-semibold text-ink">{r.dimension}</td>
                    <td className="px-4 py-3 text-ink/85">{r.portugal}</td>
                    <td className="px-4 py-3 text-ink/85">{r.gibraltar}</td>
                    <td className="px-4 py-3 text-[12.5px] font-semibold">
                      {r.winner === 'tie'
                        ? <span className="text-muted">Tie</span>
                        : r.winner === 'portugal'
                          ? <span className="text-sea">Portugal</span>
                          : <span className="text-gibraltar">Gibraltar</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Tax: IFICI vs Cat 2</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Portugal&apos;s{' '}
            <Link href="/portugal/tax" className="text-warm underline-offset-2 hover:underline">IFICI regime</Link>{' '}
            gives a 20% flat rate on qualifying employment and self-employment income, plus
            exemption on most foreign-source income, for 10 years. The catch: only specific
            activities qualify (research, certified tech startups, high-export sectors). If
            your work doesn&apos;t fit the list, you fall into standard Portuguese IRS — which
            tops out around 48% on income above ~£72,000, making Portugal a punishing tax
            jurisdiction for ordinary high earners who can&apos;t structure into IFICI.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Gibraltar&apos;s{' '}
            <Link href="/gibraltar/residency" className="text-warm underline-offset-2 hover:underline">Cat 2</Link>{' '}
            takes a different approach: you pay <strong>£37,000 minimum, £42,380 maximum</strong>,
            in tax — regardless of how much you actually earn. £150k income? £37,000. £500k
            income? £42,380. £5 million income? Still £42,380. The cap is the entire point. The
            entry price is a £2 million net-worth requirement and Finance Centre vetting on
            source-of-funds.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            <strong>The break-even logic:</strong> for income below ~£185k where IFICI applies,
            IFICI is cheaper (20% × £185k = £37,000 = Cat 2 floor). Above that, Cat 2 starts
            winning, and the higher the income, the bigger the gap. For IFICI-ineligible high
            earners, Cat 2 wins at any income level because the Portuguese alternative is
            standard 48% IRS.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Residency mechanics</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Portugal&apos;s residency routes are accessible to ordinary applicants. The{' '}
            <Link href="/portugal/visa-guide" className="text-warm underline-offset-2 hover:underline">D7</Link>{' '}
            asks for €920/month of passive income; the D8 asks for €3,680/month for remote
            workers. No net-worth requirement. No vetting beyond standard criminal-record and
            financial-substantiation checks.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Gibraltar&apos;s Cat 2 requires <strong>£2 million estimated net worth</strong>,
            approved residential accommodation in Gibraltar (which is in short supply on the
            6.7 km² peninsula), and Finance Centre Director vetting that typically takes 3-6
            months from a complete application. Application fee £1,168 plus refundable deposit
            of £42,380.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Citizenship pathway</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Portugal: <strong>5 years to citizenship</strong>, with an A2 Portuguese language
            test. Citizenship gives you full EU rights. This is the fastest EU-citizenship
            pathway in the Union.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Gibraltar: as a British Overseas Territory, residency leads to British Overseas
            Territories Citizenship, not EU citizenship. For movers who already have UK
            citizenship, this is functionally meaningless. For movers who want an EU passport,
            Gibraltar is a dead-end on that front.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Geography and lifestyle</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Portugal is a country: 800 km of coast, multiple distinct climate zones, dozens of
            substantive cities and towns to choose from. Lisbon, Porto, the Algarve, the
            Alentejo wine country, the Douro Valley, the Atlantic islands (Madeira, Azores).
            You can move between climates, switch cities every few years, build a real
            non-British life.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Gibraltar is a peninsula of 6.7 km² with roughly 34,000 residents. You can walk
            from one end to the other in 90 minutes. Beach access is via the Mediterranean
            side and Catalan Bay. There are no &ldquo;parts of Gibraltar&rdquo; — you live in
            the one place and you visit Spain (the Costa del Sol is 10 minutes across the
            border) for variety. For many British movers this is exactly the point. For others
            it&apos;s claustrophobic. Spend a week before committing.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Who should choose which</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Card variant="bordered">
              <CardBody>
                <Badge tone="sea" uppercase>Choose Portugal if…</Badge>
                <ul className="mt-3 flex flex-col gap-2 text-[15px] text-ink/90">
                  <li className="flex gap-2"><span className="mt-1 text-sea">✓</span><span>You&apos;re retiring on UK pensions or rental income.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-sea">✓</span><span>You want EU citizenship within 5 years.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-sea">✓</span><span>You don&apos;t have £2m+ vetted net worth.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-sea">✓</span><span>Your work qualifies for IFICI — or your income is below ~£185k.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-sea">✓</span><span>You want a country, not a peninsula.</span></li>
                </ul>
                <Link
                  href="/playbook/portugal"
                  className="mt-5 inline-flex items-center gap-2 rounded-pill bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:-translate-y-px transition-all"
                >
                  See the Portugal Playbook · £397 →
                </Link>
              </CardBody>
            </Card>
            <Card variant="bordered">
              <CardBody>
                <Badge tone="gibraltar" uppercase>Choose Gibraltar if…</Badge>
                <ul className="mt-3 flex flex-col gap-2 text-[15px] text-ink/90">
                  <li className="flex gap-2"><span className="mt-1 text-gibraltar">✓</span><span>£200k+ income and you don&apos;t qualify for IFICI.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-gibraltar">✓</span><span>£2 million+ net worth, vetted source of funds.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-gibraltar">✓</span><span>Sterling-zone banking and English-language bureaucracy matter.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-gibraltar">✓</span><span>You don&apos;t need EU citizenship (already have something else).</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-gibraltar">✓</span><span>You&apos;re comfortable on a small peninsula with Spain at the border.</span></li>
                </ul>
                <Link
                  href="/playbook/gibraltar"
                  className="mt-5 inline-flex items-center gap-2 rounded-pill bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:-translate-y-px transition-all"
                >
                  See the Gibraltar Playbook · £497 →
                </Link>
              </CardBody>
            </Card>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">FAQ</h2>
          <div className="mt-5">
            <Accordion items={FAQS} />
          </div>
        </div>
      </section>

      <RelatedResources
        tone="surface"
        heading="Keep going"
        subheading="The deep dives that explain each side of this comparison properly."
        items={[
          { kind: 'Pillar', href: '/portugal', label: 'Move to Portugal from the UK', blurb: 'The full Portugal topic cluster: D7/D8, IFICI, IRS, banking, healthcare.' },
          { kind: 'Pillar', href: '/gibraltar', label: 'Move to Gibraltar from the UK', blurb: 'Cat 2, HEPSS, frontier-worker mechanics, the new EU-Gibraltar treaty.' },
          { kind: 'Reference', href: '/thresholds', label: '2026 thresholds, sourced', blurb: 'D7 minimum, IFICI rate, Cat 2 min/max, HEPSS — every figure with primary-source link.' },
          { kind: 'Compare', href: '/spain-vs-portugal', label: 'Spain vs Portugal', blurb: 'The most common comparison for British movers.' },
          { kind: 'Compare', href: '/spain-vs-gibraltar', label: 'Spain vs Gibraltar', blurb: 'For the income tier where Cat 2 starts beating Beckham Law.' },
          { kind: 'Calculator', href: '/calculators/compare-countries', label: 'Spain vs Portugal vs Gibraltar comparator', blurb: 'Weight the factors that matter for your move and see your best fit.' },
        ]}
      />
    </article>
  );
}
