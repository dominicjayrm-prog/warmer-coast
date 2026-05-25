import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { RelatedResources } from '@/components/marketing/RelatedResources';
import { SITE } from '@/lib/site';

const TITLE = 'Spain vs Portugal for British Movers in 2026: Tax, Visa, Cost Compared';
const DESC =
  'Honest, sourced comparison of Spain and Portugal for UK adults relocating in 2026. Tax regimes (Beckham vs IFICI), visas (NLV/DNV vs D7/D8), cost of living, healthcare, schools, language. The verdict, then the workings.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/spain-vs-portugal' },
  openGraph: { url: '/spain-vs-portugal', title: TITLE, description: DESC },
  twitter: { title: TITLE, description: DESC },
  keywords: [
    'Spain vs Portugal',
    'move to Spain or Portugal',
    'Beckham Law vs IFICI',
    'NLV vs D7',
    'Spain DNV vs Portugal D8',
    'cost of living Spain Portugal',
    'British expat Iberia',
    'UK to Iberia 2026',
  ],
};

const VERDICT_ROWS: { dimension: string; spain: string; portugal: string; winner: 'spain' | 'portugal' | 'tie' }[] = [
  { dimension: 'Best for high earners (employment income)', spain: 'Beckham Law: 24% flat on first €600k for 6 years', portugal: 'IFICI 20% but narrow eligible activities only', winner: 'spain' },
  { dimension: 'Best for retirees on UK pensions', spain: 'Standard IRPF on world income, no NHR-style relief', portugal: 'D7 + IFICI does not help pensions; old NHR closed', winner: 'tie' },
  { dimension: 'Easiest passive-income visa', spain: 'NLV: €28,800/yr (400% IPREM), strict no-work rule', portugal: 'D7: €11,040/yr, more permissive on light activity', winner: 'portugal' },
  { dimension: 'Easiest digital-nomad visa', spain: 'DNV: €2,849/mo gross (200% SMI), Beckham-eligible', portugal: 'D8: €3,680/mo + €11,040 savings — higher bar', winner: 'spain' },
  { dimension: 'Cheaper monthly cost of living', spain: 'Madrid/BCN expensive; Valencia, Sevilla cheaper', portugal: 'Lisbon now ~Madrid prices; Porto + interior cheaper', winner: 'portugal' },
  { dimension: 'English coverage day-to-day', spain: 'Patchy outside Costa del Sol, Barcelona expat zones', portugal: 'Materially higher; Lisbon and Algarve operate in English', winner: 'portugal' },
  { dimension: 'Wealth tax on assets', spain: 'Yes — Patrimonio + Solidaridad above thresholds', portugal: 'No general wealth tax', winner: 'portugal' },
  { dimension: 'Foreign-asset reporting', spain: 'Modelo 720 mandatory above €50k per category', portugal: 'No equivalent; standard IRS only', winner: 'portugal' },
  { dimension: 'Citizenship pathway speed', spain: '10 years (2 years for Latin American & Sephardic)', portugal: '5 years to citizenship — fastest in EU', winner: 'portugal' },
];

const FAQS = [
  {
    q: 'Spain or Portugal for tax — which actually saves more?',
    a: 'It depends entirely on what kind of income you have. If you have £80k+ of UK employment or qualifying self-employment income that you can move with you, Spain wins because Beckham Law taxes the first €600k at a 24% flat — far better than Portugal\'s IFICI which only applies to a narrow list of qualifying activities. If you live off pensions, dividends or rental, the gap is much smaller because IFICI doesn\'t help pension income any more (the old NHR did, but it closed to new applicants). For HNW investors with foreign capital gains, Portugal usually wins because Spain runs Patrimonio wealth tax and Modelo 720 disclosure.',
  },
  {
    q: 'Which has the easier visa for a UK retiree with pension income only?',
    a: 'Portugal\'s D7 is materially easier. The minimum is €920/month (€11,040/year) for a single applicant — pension income qualifies. Spain\'s NLV requires €28,800/year (400% IPREM) and the consulate is stricter on showing the income is recurring. Both visas have a strict no-work rule for the applicant — the NLV explicitly, the D7 in practice.',
  },
  {
    q: 'Is Portugal really cheaper than Spain in 2026?',
    a: 'Less than it used to be. Lisbon rents have risen 40-60% since 2020 and now match Madrid. The Algarve in tourist zones is more expensive than the Costa del Sol equivalent. Interior Portugal (Coimbra, Évora, Viseu) and second-tier cities (Porto, Braga) remain meaningfully cheaper than the equivalent in Spain. For groceries, utilities and eating out, Portugal still wins by roughly 5-10%.',
  },
  {
    q: 'Can I keep my UK ISA in either?',
    a: 'You can keep it open as a UK product in both, but it loses its tax-free wrapper from the perspective of both Spanish and Portuguese tax once you become resident. Income and gains become taxable locally. Most UK movers wind ISAs down before crossing the residency line into either country.',
  },
  {
    q: 'Which has better healthcare for British movers?',
    a: 'Both have universal public healthcare (SNS in Spain, SNS in Portugal — coincidentally identical acronyms). Spain\'s public system is generally rated higher on outcomes; Portugal\'s is more accessible to non-locals in practice. Most British movers pay €60-€120/month for top-up private insurance in either country.',
  },
  {
    q: 'How long until I can become a citizen?',
    a: 'Portugal is dramatically faster — 5 years of legal residency, plus a basic Portuguese language test. Spain requires 10 years for most nationalities (2 years if you\'re of Latin American or Sephardic Jewish heritage, which excludes most Brits). For movers who want EU citizenship in their pocket, this is one of the biggest single deciders.',
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
    author: {
      '@type': 'Person',
      '@id': `${SITE.url}/about#dominic-roworth`,
      name: 'Dominic Roworth',
      url: `${SITE.url}/author/dominic-roworth`,
    },
    publisher: { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/spain-vs-portugal`,
    about: [
      { '@type': 'Country', name: 'Spain' },
      { '@type': 'Country', name: 'Portugal' },
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
      { '@type': 'ListItem', position: 2, name: 'Spain vs Portugal', item: `${SITE.url}/spain-vs-portugal` },
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
            <span className="text-ink">Spain vs Portugal</span>
          </nav>

          <Badge tone="warm" uppercase>2026 comparison · sourced</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
            Spain vs Portugal for British movers in 2026
          </h1>
          <p className="mt-5 text-[18.5px] leading-relaxed text-muted">
            The honest, sourced version. No affiliate angle, no &ldquo;both are great&rdquo; fence-sitting.
            By tax bracket, visa profile and lifestyle priority, one of these countries is materially
            better for you than the other. The first table tells you the verdict in 90 seconds; the
            sections below show the workings.
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
                <strong>Spain wins if you’re a high-earning employee or qualifying self-employed
                worker</strong> — Beckham Law&apos;s 24% flat on the first €600,000 for six years
                is the strongest tax position in Iberia for that profile. <strong>Portugal wins
                for almost everyone else</strong>: easier visa for retirees (D7 at €920/mo vs NLV
                at €2,400/mo), no wealth tax, no foreign-asset disclosure, faster citizenship at 5
                years, better English coverage, and lower friction on day-to-day bureaucracy.
              </p>
            </CardBody>
          </Card>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">The verdict, dimension by dimension</h2>
          <div className="mt-5 overflow-hidden rounded-card border border-border">
            <table className="w-full text-left text-[14.5px]">
              <thead className="bg-surface text-[12px] font-semibold uppercase tracking-[0.06em] text-muted">
                <tr>
                  <th className="px-4 py-3 w-[28%]">Dimension</th>
                  <th className="px-4 py-3">🇪🇸 Spain</th>
                  <th className="px-4 py-3">🇵🇹 Portugal</th>
                  <th className="px-4 py-3 w-[12%]">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                {VERDICT_ROWS.map((r) => (
                  <tr key={r.dimension} className="align-top">
                    <td className="px-4 py-3 font-semibold text-ink">{r.dimension}</td>
                    <td className="px-4 py-3 text-ink/85">{r.spain}</td>
                    <td className="px-4 py-3 text-ink/85">{r.portugal}</td>
                    <td className="px-4 py-3 text-[12.5px] font-semibold">
                      {r.winner === 'tie'
                        ? <span className="text-muted">Tie</span>
                        : r.winner === 'spain'
                          ? <span className="text-warm">Spain</span>
                          : <span className="text-sea">Portugal</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Tax: Beckham Law vs IFICI (NHR 2.0)</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            The tax dimension is where Spain and Portugal diverge most sharply for British movers,
            and where the wrong choice can cost £15k–£40k a year for the first five-to-six years
            of the move.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            <strong>Spain&apos;s Beckham Law</strong> (the Régimen Especial para Trabajadores
            Desplazados under Art. 93 LIRPF) gives you a flat <strong>24%</strong> on Spanish-
            source employment and qualifying self-employment income up to <strong>€600,000</strong>{' '}
            per year, with foreign investment and dividend income largely exempt during the regime.
            It runs for the year of arrival plus the next five — six years total. You must elect
            into it via Modelo 149 within 6 months of registering with Spanish Social Security;
            miss the window and the option is lost for the whole stay. See the{' '}
            <Link href="/spain/tax-residency/beckham-law" className="text-warm underline-offset-2 hover:underline">Beckham Law deep dive</Link>{' '}
            for the worked-example workings, and the{' '}
            <Link href="/calculators/beckham-law" className="text-warm underline-offset-2 hover:underline">Beckham Law calculator</Link>{' '}
            to plug in your numbers.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            <strong>Portugal&apos;s IFICI</strong> (the successor scheme to the old NHR — sometimes
            called &ldquo;NHR 2.0&rdquo;) gives you a flat <strong>20%</strong> on Portuguese-source
            employment and self-employment income — but only if your activity is on the qualifying
            list: scientific research, higher education teaching, certified tech startups, highly
            qualified roles in companies exporting over 50% of revenue, and a handful of designated
            sectors. Most foreign-source income is exempt during the regime. It runs for 10 years
            — almost double the Beckham window. You must not have been Portuguese tax resident in
            any of the previous five years. The{' '}
            <Link href="/portugal/tax" className="text-warm underline-offset-2 hover:underline">Portugal tax deep dive</Link>{' '}
            walks through who actually qualifies.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            <strong>The deciding question:</strong> does your work activity sit inside Portugal&apos;s
            qualifying-activities list? If yes, Portugal&apos;s 20% × 10 years usually beats
            Spain&apos;s 24% × 6 years on lifetime tax saved. If no, Beckham Law is the only
            structured relief available to you in Iberia. For most British movers in commercial,
            sales, marketing, finance, law, consulting or general management roles, the activity
            list excludes them and Spain wins by default.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Visa: NLV/DNV vs D7/D8</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Since Brexit, British citizens are third-country nationals in both Spain and Portugal.
            Four main visa routes cover almost every UK applicant: two each side.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            <strong>Spain Non-Lucrative Visa (NLV)</strong> — minimum income{' '}
            <strong>€28,800/year</strong> (400% IPREM 2026) plus €7,200/year per dependant. Strict
            no-work rule: no employment, freelance or remote work for any client, Spanish or
            foreign. Pension, dividend, rental and investment income only. The{' '}
            <Link href="/spain/visa-guide/non-lucrative" className="text-warm underline-offset-2 hover:underline">NLV deep dive</Link>{' '}
            has the document pack and consulate-by-consulate notes.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            <strong>Spain Digital Nomad Visa (DNV)</strong> — minimum gross income{' '}
            <strong>€2,849/month</strong> (200% SMI 2026), remote work for non-Spanish clients (up
            to 20% Spanish clients allowed for freelancers). Beckham-Law eligible from day one,
            which is the strongest combined tax-and-visa stack available in Iberia for a remote
            worker.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            <strong>Portugal D7</strong> — minimum passive income <strong>€920/month</strong>{' '}
            (€11,040/year, tied to the 2026 Portuguese minimum wage), +50% for spouse, +30% per
            dependent child. Accepts pensions, rental, dividends, royalties. Materially lower bar
            than the Spanish NLV — and more permissive in practice about light work activity.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            <strong>Portugal D8</strong> — minimum income <strong>€3,680/month</strong> (4× the
            Portuguese minimum wage) plus savings of at least €11,040. Higher bar than the Spanish
            DNV.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            All the income thresholds and primary-source links are on the{' '}
            <Link href="/thresholds" className="text-warm underline-offset-2 hover:underline">2026 thresholds reference page</Link>.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Cost of living</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            The &ldquo;Portugal is cheaper&rdquo; narrative was true in 2018 and is now only
            partially true in 2026. Lisbon rents have closed the gap with Madrid since the
            pandemic; the Algarve in summer is now comparable to the Costa del Sol; Porto remains
            meaningfully cheaper than the Spanish equivalent (Valencia). Groceries, utilities,
            healthcare and eating out are still 5-10% lower in Portugal across the board, but the
            housing line item now narrows the overall gap to roughly 5-8% per month for like-for-
            like cities. Plug your numbers into the{' '}
            <Link href="/calculators/cost-of-living" className="text-warm underline-offset-2 hover:underline">UK vs Iberia cost-of-living comparator</Link>.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Language and English coverage</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Portugal is materially easier as a first move. English is widely spoken in Lisbon,
            Porto and the Algarve; public services and consultations frequently pivot to English.
            Spain operates in Spanish outside specific Costa del Sol and Barcelona expat
            corridors, and even there the bureaucracy (Hacienda, Seguridad Social, Padrón) runs
            in Spanish only. If you&apos;re unwilling or unable to reach conversational Spanish
            in the first 12-18 months, Portugal is the lower-friction choice by a wide margin.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Wealth tax and disclosure</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Spain runs <strong>two</strong> wealth taxes that catch HNW British movers off guard.
            Patrimonio is region-set with thresholds typically starting around €700,000 of net
            wealth (varying by region — Madrid currently rebates to zero). On top of that, the
            national Solidaridad surcharge kicks in above €3 million of net wealth. Spain also
            requires{' '}
            <Link href="/spain/tax-residency/modelo-720" className="text-warm underline-offset-2 hover:underline">Modelo 720</Link>{' '}
            — annual declaration of foreign assets in three categories (accounts, securities, real
            estate) where any category exceeds €50,000. <strong>Portugal has no general wealth
            tax and no Modelo 720 equivalent.</strong> For HNW British movers with substantial
            UK or third-country assets, this disclosure-and-wealth-tax stack is often the
            single biggest reason Portugal wins.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Citizenship pathway</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Portugal&apos;s naturalisation requirement is <strong>5 years of legal residency</strong>{' '}
            plus a basic A2 Portuguese test. Spain requires <strong>10 years</strong> for British
            citizens (2 years is reserved for Latin American and Sephardic Jewish applicants).
            For movers who want EU citizenship in their back pocket — and don&apos;t want to wait
            for it — Portugal is double the speed.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Who should choose which</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Card variant="bordered">
              <CardBody>
                <Badge tone="warm" uppercase>Choose Spain if…</Badge>
                <ul className="mt-3 flex flex-col gap-2 text-[15px] text-ink/90">
                  <li className="flex gap-2"><span className="mt-1 text-warm">✓</span><span>You have £80k+ of UK employment or qualifying self-employment income that moves with you.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-warm">✓</span><span>You can elect Beckham Law within 6 months of arrival — and the 6-year regime fits your plan.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-warm">✓</span><span>You&apos;re willing to learn conversational Spanish in the first 12-18 months.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-warm">✓</span><span>Your asset base is below the Patrimonio thresholds for the region you&apos;ll live in.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-warm">✓</span><span>You want a deeper cultural change and access to a wider range of cities and climates.</span></li>
                </ul>
                <Link
                  href="/playbook/spain"
                  className="mt-5 inline-flex items-center gap-2 rounded-pill bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:-translate-y-px transition-all"
                >
                  See the Spain Playbook · £397 →
                </Link>
              </CardBody>
            </Card>
            <Card variant="bordered">
              <CardBody>
                <Badge tone="sea" uppercase>Choose Portugal if…</Badge>
                <ul className="mt-3 flex flex-col gap-2 text-[15px] text-ink/90">
                  <li className="flex gap-2"><span className="mt-1 text-sea">✓</span><span>You&apos;re retiring on UK pensions, rental or dividend income.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-sea">✓</span><span>You have HNW assets outside the UK and want to avoid Patrimonio + Modelo 720.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-sea">✓</span><span>You want EU citizenship within 5 years rather than 10.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-sea">✓</span><span>English fluency is non-negotiable for at least the first 2-3 years.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-sea">✓</span><span>Your activity is on the IFICI qualifying list (research, certified startups, high-export sectors).</span></li>
                </ul>
                <Link
                  href="/playbook/portugal"
                  className="mt-5 inline-flex items-center gap-2 rounded-pill bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:-translate-y-px transition-all"
                >
                  See the Portugal Playbook · £397 →
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
          { kind: 'Pillar', href: '/spain', label: 'Move to Spain from the UK', blurb: 'The full Spain topic cluster: tax, visas, banking, residency, life-admin.' },
          { kind: 'Pillar', href: '/portugal', label: 'Move to Portugal from the UK', blurb: 'The full Portugal topic cluster: D7/D8, IFICI, IRS, banking, healthcare.' },
          { kind: 'Reference', href: '/thresholds', label: '2026 thresholds, sourced', blurb: 'Every income, tax and visa figure on this page with primary-source links.' },
          { kind: 'Compare', href: '/spain-vs-gibraltar', label: 'Spain vs Gibraltar', blurb: 'Beckham Law vs Cat 2 — for the income tier where Gibraltar becomes a serious option.' },
          { kind: 'Compare', href: '/portugal-vs-gibraltar', label: 'Portugal vs Gibraltar', blurb: 'Less common but a real choice for some HNW Algarve-vs-Rock decisions.' },
          { kind: 'Calculator', href: '/calculators/beckham-law', label: 'Beckham Law tax-saving calculator', blurb: 'Plug in your numbers — see Beckham vs standard IRPF for your bracket.' },
        ]}
      />
    </article>
  );
}
