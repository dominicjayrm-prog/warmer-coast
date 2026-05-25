import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { RelatedResources } from '@/components/marketing/RelatedResources';
import { SITE } from '@/lib/site';

const TITLE = 'Spain vs Gibraltar for British Movers in 2026: Tax, Residency, Cost';
const DESC =
  'Sourced comparison of Spain and Gibraltar for UK adults relocating in 2026. Beckham Law vs Category 2, NLV/DNV vs Cat 2/HEPSS, cost of living, the new EU-Gibraltar border treaty, frontier-worker setups, citizenship pathway.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/spain-vs-gibraltar' },
  openGraph: { url: '/spain-vs-gibraltar', title: TITLE, description: DESC },
  twitter: { title: TITLE, description: DESC },
  keywords: [
    'Spain vs Gibraltar',
    'Beckham Law vs Category 2',
    'Gibraltar Cat 2 tax',
    'frontier worker Gibraltar Spain',
    'British expat Gibraltar',
    'EU Gibraltar treaty 2026',
    'HEPSS vs Beckham',
  ],
};

const VERDICT_ROWS: { dimension: string; spain: string; gibraltar: string; winner: 'spain' | 'gibraltar' | 'tie' }[] = [
  { dimension: 'Best for £80k–£200k employment income', spain: 'Beckham Law: 24% flat on first €600k', gibraltar: 'Cat 2 floor £37k minimum — usually loses below ~£180k', winner: 'spain' },
  { dimension: 'Best for £200k+ employment income', spain: 'Beckham hits ~24% × income — uncapped to €600k', gibraltar: 'Cat 2 max £42,380 — true tax cap', winner: 'gibraltar' },
  { dimension: 'Best for HNW with capped tax certainty', spain: 'Patrimonio + Solidaridad on wealth above region threshold', gibraltar: 'No wealth tax. Cat 2 £37–42,380 cap regardless of income', winner: 'gibraltar' },
  { dimension: 'Easiest residency for ordinary movers', spain: 'NLV at €28,800/yr or DNV at €2,849/mo', gibraltar: 'Cat 2 requires £2m net worth + vetting', winner: 'spain' },
  { dimension: 'Choice of cities and climates', spain: 'Costa del Sol, Valencia, Madrid, Barcelona, islands, north Atlantic coast', gibraltar: '6.7 km² territory — one city', winner: 'spain' },
  { dimension: 'English speaking by default', spain: 'No outside specific expat zones', gibraltar: 'Yes — English is the working language', winner: 'gibraltar' },
  { dimension: 'Schengen access', spain: 'Yes — Schengen member', gibraltar: 'No — but new EU border treaty gives Schengen-like Spanish frontier from 2026', winner: 'tie' },
  { dimension: 'EU citizenship after residency', spain: '10 years residency → Spanish (EU) citizen', gibraltar: 'British Overseas Territory — UK citizenship pathway, not EU', winner: 'spain' },
  { dimension: 'Currency match for UK earners', spain: 'Euro — exposed to GBP/EUR moves', gibraltar: 'Sterling zone — same as UK', winner: 'gibraltar' },
];

const FAQS = [
  {
    q: 'At what income does Gibraltar Cat 2 actually beat Beckham Law?',
    a: 'Roughly £180,000-£200,000 of qualifying employment income. Below that, Beckham Law\'s 24% flat on the first €600,000 produces a smaller tax bill than Cat 2\'s £37,000 minimum floor. Above £200k, Cat 2\'s £42,380 ceiling starts to bite materially against Beckham\'s effectively 24% of your income. At £500k Beckham gives ~£120k of tax; Cat 2 gives £42,380. That\'s the income tier where Gibraltar is genuinely the better number.',
  },
  {
    q: 'Can I live in Spain and work in Gibraltar (frontier worker)?',
    a: 'Yes — and this is a real, well-defined category under the post-Brexit settlement and the new UK-EU Gibraltar treaty. You become Spanish tax resident if you spend 183+ days/year on the Spanish side. The tax mechanics get complex (Gibraltar taxes the employment income at source, Spain treats you as resident on worldwide income, the treaty resolves overlaps). Most frontier workers also need a Cat 2 application strategy on the Gibraltar side. The Gibraltar playbook has the worked examples.',
  },
  {
    q: 'Does Gibraltar have wealth tax or Modelo 720?',
    a: 'Neither. Gibraltar has no wealth tax and no general foreign-asset disclosure equivalent to Spain\'s Modelo 720. This alone is often the deciding factor for British HNW movers comparing the two — the disclosure-and-Patrimonio overhead in Spain can quietly cost £10–20k a year in additional administration even before you start counting wealth tax itself.',
  },
  {
    q: 'Can I bring family on Cat 2?',
    a: 'Yes. Cat 2 is a status granted to the individual; spouse and dependent children are typically included with proof of relationship and accommodation. The £2 million net-worth requirement is on the principal applicant.',
  },
  {
    q: 'How long does Cat 2 approval take?',
    a: 'Typically 3-6 months from complete application. The bottleneck is the source-of-funds documentation that the Finance Centre Director requires for vetting. Application fee is £1,168 (non-refundable); there\'s a £42,380 refundable deposit returned when you relinquish Cat 2 status.',
  },
  {
    q: 'Is the Gibraltar Cat 2 minimum tax really £37,000?',
    a: 'Yes. Under Cat 2, Gibraltar charges tax on the first £118,000 of your worldwide assessable income only, with a regulatory minimum annual tax of £37,000 and a maximum of £42,380 — figures confirmed by HM Government of Gibraltar Income Tax Office for the 2025/26 assessment year. The minimum is the floor: even if your computed tax under the Gross Income Based System on £118,000 would be lower, you still pay £37,000.',
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
    mainEntityOfPage: `${SITE.url}/spain-vs-gibraltar`,
    about: [
      { '@type': 'Country', name: 'Spain' },
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
      { '@type': 'ListItem', position: 2, name: 'Spain vs Gibraltar', item: `${SITE.url}/spain-vs-gibraltar` },
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
            <span className="text-ink">Spain vs Gibraltar</span>
          </nav>

          <Badge tone="warm" uppercase>2026 comparison · sourced</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
            Spain vs Gibraltar for British movers in 2026
          </h1>
          <p className="mt-5 text-[18.5px] leading-relaxed text-muted">
            Spain and Gibraltar look like they&apos;re competing for the same buyer; they&apos;re
            not. Spain is a mass-market relocation for British adults across most income tiers.
            Gibraltar is a narrow, sterling-zone, English-speaking HNW play with a £2 million
            net-worth bar to qualify for Category 2 status. This is the honest comparison —
            including where Beckham Law beats Cat 2, and where Cat 2 quietly destroys it.
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
                <strong>Spain wins for most British movers.</strong> Easier residency (NLV/DNV
                instead of £2m net worth), wider choice of climates and cities, EU citizenship in
                10 years. <strong>Gibraltar wins for the specific HNW profile</strong>: £200k+
                employment income where the Cat 2 cap at £42,380 becomes a true bargain against
                Beckham, no wealth tax, no foreign-asset disclosure, sterling-zone banking, and
                English as the working language. For frontier workers (live Spain, work Gibraltar),
                the 2026 EU-Gibraltar treaty made the cross-border setup viable again.
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
                  <th className="px-4 py-3">🇬🇮 Gibraltar</th>
                  <th className="px-4 py-3 w-[12%]">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                {VERDICT_ROWS.map((r) => (
                  <tr key={r.dimension} className="align-top">
                    <td className="px-4 py-3 font-semibold text-ink">{r.dimension}</td>
                    <td className="px-4 py-3 text-ink/85">{r.spain}</td>
                    <td className="px-4 py-3 text-ink/85">{r.gibraltar}</td>
                    <td className="px-4 py-3 text-[12.5px] font-semibold">
                      {r.winner === 'tie'
                        ? <span className="text-muted">Tie</span>
                        : r.winner === 'spain'
                          ? <span className="text-warm">Spain</span>
                          : <span className="text-gibraltar">Gibraltar</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Tax: Beckham Law vs Category 2</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            The break-even point between Beckham Law (Spain) and Cat 2 (Gibraltar) is around{' '}
            <strong>£180,000–£200,000</strong> of qualifying employment income. Beckham at 24% on
            £180k = £43,200. Cat 2 minimum is £37,000 — so above ~£180k income, Cat 2 starts
            beating Beckham. Above £200k the gap widens fast: Beckham scales linearly, Cat 2 is
            capped at £42,380 regardless.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            For a £500,000 employment income earner moving from the UK 45% bracket, the
            comparison is roughly:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-[15.5px] text-ink/85">
            <li>UK standard: ~£200,000 of UK income tax</li>
            <li>Spain Beckham Law: 24% × £500k ≈ £120,000</li>
            <li>Gibraltar Cat 2: hard capped at <strong>£42,380</strong></li>
          </ul>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            That&apos;s a ~£80,000/year difference between Beckham and Cat 2 at the half-million
            mark, in Gibraltar&apos;s favour. The catch: Cat 2 demands £2m net worth, vetted
            source of funds, approved Gibraltar accommodation, and acceptance that you&apos;ll
            live on a 6.7 km² peninsula. See the{' '}
            <Link href="/gibraltar/residency" className="text-warm underline-offset-2 hover:underline">Cat 2 deep dive</Link>{' '}
            and{' '}
            <Link href="/thresholds" className="text-warm underline-offset-2 hover:underline">2026 thresholds</Link>{' '}
            for the full mechanics.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Residency: NLV/DNV vs Cat 2/HEPSS</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Spain&apos;s residency routes are open to a wide range of British applicants —{' '}
            <Link href="/spain/visa-guide/non-lucrative" className="text-warm underline-offset-2 hover:underline">NLV</Link>{' '}
            at €28,800/year passive income, or{' '}
            <Link href="/spain/visa-guide/digital-nomad" className="text-warm underline-offset-2 hover:underline">DNV</Link>{' '}
            at €2,849/month for remote workers. No net-worth bar, no vetting on funds, no minimum
            net assets.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Gibraltar has two main routes. <strong>Category 2</strong> for HNW individuals
            (£2 million net worth, Finance Centre vetting, approved residential property,
            non-employment in Gibraltar required). <strong>HEPSS</strong> (High Executive
            Possessing Specialist Skills) for individuals recruited into senior specialist roles
            where no local Gibraltar candidate is available; the employer applies. Both are
            narrow gates compared to Spain&apos;s NLV/DNV.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">The frontier-worker option</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            The combination that most British movers ask about: <strong>live in Spain, work in
            Gibraltar</strong>. This was a thriving pre-Brexit arrangement, was painful 2020-2025,
            and is back on the table from 2026 under the new UK-EU Gibraltar treaty signed in
            2025. The treaty creates a Schengen-like frontier from the Spanish side and preserves
            cross-border employment for British nationals. The full mechanics are in the{' '}
            <Link href="/gibraltar/frontier-worker" className="text-warm underline-offset-2 hover:underline">frontier-worker deep dive</Link>.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Wealth tax and disclosure</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Spain runs Patrimonio (regional wealth tax, usually kicking in above ~€700k net
            wealth depending on region) plus the national Solidaridad surcharge above €3 million.
            Spain also requires{' '}
            <Link href="/spain/tax-residency/modelo-720" className="text-warm underline-offset-2 hover:underline">Modelo 720</Link>{' '}
            (annual foreign-asset declaration). <strong>Gibraltar has neither.</strong> For
            British HNW movers comparing the two, the absence of Spanish-style wealth taxation
            and disclosure is often the deciding factor over and above the headline income tax
            figures.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Currency and banking</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
            Gibraltar is in the sterling zone — same currency as the UK. For British movers with
            UK income, UK pensions or UK property to manage, this eliminates an entire layer of
            FX risk and bank-side currency-conversion cost. Spain is Eurozone; you live with
            GBP/EUR exposure across rent, payroll and savings. Most Spain-based UK movers run a
            multi-currency stack (UK bank + Spanish bank + Wise/Revolut) to manage this.
          </p>

          <h2 className="display mt-14 text-display-3 font-semibold tracking-tight text-ink">Who should choose which</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Card variant="bordered">
              <CardBody>
                <Badge tone="warm" uppercase>Choose Spain if…</Badge>
                <ul className="mt-3 flex flex-col gap-2 text-[15px] text-ink/90">
                  <li className="flex gap-2"><span className="mt-1 text-warm">✓</span><span>Income between £50k and £180k where Beckham&apos;s 24% beats Cat 2&apos;s £37k floor.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-warm">✓</span><span>You don&apos;t have £2 million in vetted net worth.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-warm">✓</span><span>You want a wider range of cities, climates and cultures.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-warm">✓</span><span>EU citizenship in 10 years matters to you.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-warm">✓</span><span>Your wealth is below regional Patrimonio thresholds.</span></li>
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
                <Badge tone="gibraltar" uppercase>Choose Gibraltar if…</Badge>
                <ul className="mt-3 flex flex-col gap-2 text-[15px] text-ink/90">
                  <li className="flex gap-2"><span className="mt-1 text-gibraltar">✓</span><span>£200k+ income where Cat 2&apos;s £42,380 cap is genuinely better than Beckham.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-gibraltar">✓</span><span>£2 million+ net worth and a wealth base you don&apos;t want to disclose annually.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-gibraltar">✓</span><span>You want sterling-zone banking and English as the working language.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-gibraltar">✓</span><span>You&apos;re a senior specialist who qualifies for HEPSS via employer sponsorship.</span></li>
                  <li className="flex gap-2"><span className="mt-1 text-gibraltar">✓</span><span>You want the Spain-side lifestyle but the Gibraltar-side tax (frontier worker).</span></li>
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
          { kind: 'Pillar', href: '/spain', label: 'Move to Spain from the UK', blurb: 'The full Spain topic cluster: tax, visas, banking, residency, life-admin.' },
          { kind: 'Pillar', href: '/gibraltar', label: 'Move to Gibraltar from the UK', blurb: 'Cat 2, HEPSS, frontier-worker mechanics, the new EU-Gibraltar treaty.' },
          { kind: 'Reference', href: '/thresholds', label: '2026 thresholds, sourced', blurb: 'Beckham Law cap, Cat 2 min/max, HEPSS ceiling — every figure with primary-source link.' },
          { kind: 'Compare', href: '/spain-vs-portugal', label: 'Spain vs Portugal', blurb: 'The more common comparison for British movers.' },
          { kind: 'Compare', href: '/portugal-vs-gibraltar', label: 'Portugal vs Gibraltar', blurb: 'The third corner of the Iberia decision triangle.' },
          { kind: 'Calculator', href: '/calculators/beckham-law', label: 'Beckham Law tax-saving calculator', blurb: 'Plug your income — see the Beckham number against UK and Cat 2.' },
        ]}
      />
    </article>
  );
}
