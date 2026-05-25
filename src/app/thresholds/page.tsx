import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: '2026 Relocation Thresholds: UK, Spain, Portugal, Gibraltar — Sourced',
  description:
    'Every income, tax and visa threshold a British mover needs for 2026, in one place. UK 2026/27 tax bands, Spain Beckham Law cap, NLV / DNV minimum income (IPREM and SMI 2026), Modelo 720, Portugal D7, IFICI, Gibraltar Cat 2. Every figure links to a primary source.',
  alternates: { canonical: '/thresholds' },
  openGraph: { url: '/thresholds' },
};

interface Row {
  what: string;
  value: string;
  detail: string;
  source: { label: string; url: string };
}

interface Section {
  title: string;
  eyebrow: string;
  context: string;
  rows: Row[];
}

const LAST_VERIFIED = '2026-05-25';

const sections: Section[] = [
  {
    eyebrow: 'United Kingdom · tax year 2026/27',
    title: 'UK income tax — the side you are leaving',
    context:
      'These are the figures that determine your UK tax position in the year you split residency. Frozen until April 2028; the personal allowance has not risen since 2021/22.',
    rows: [
      {
        what: 'Personal Allowance',
        value: '£12,570',
        detail: 'Tax-free band for non-Scottish UK taxpayers. Tapered above £100,000 (lose £1 of allowance per £2 of income) — zero by £125,140.',
        source: { label: 'HMRC: Income Tax rates and Personal Allowances', url: 'https://www.gov.uk/income-tax-rates' },
      },
      {
        what: 'Basic rate (20%)',
        value: '£12,571 – £50,270',
        detail: 'Basic rate limit frozen at £37,700 through 2027/28 per the November 2022 Autumn Statement.',
        source: { label: 'HMRC: Income Tax rates and allowances', url: 'https://www.gov.uk/income-tax-rates' },
      },
      {
        what: 'Higher rate (40%)',
        value: '£50,271 – £125,140',
        detail: 'Higher-rate threshold also frozen. Watch the £100k–£125,140 zone — effective marginal rate is 60% there due to allowance taper.',
        source: { label: 'HMRC: Income Tax rates and allowances', url: 'https://www.gov.uk/income-tax-rates' },
      },
      {
        what: 'Additional rate (45%)',
        value: '£125,141 +',
        detail: 'No personal allowance above this point. If you are moving partway through a tax year, split-year treatment can radically change what falls in the UK bucket.',
        source: { label: 'HMRC: Income Tax rates and allowances', url: 'https://www.gov.uk/income-tax-rates' },
      },
    ],
  },
  {
    eyebrow: 'Spain · 2026',
    title: 'Spain — Beckham Law, NLV, DNV, Modelo 720',
    context:
      'IPREM and SMI are the two reference indices Spain uses to set most income thresholds. IPREM is unchanged from 2025 (€600/mo). SMI has been confirmed for 2026 — the DNV figure tracks 200% of SMI.',
    rows: [
      {
        what: 'Beckham Law — flat-rate cap',
        value: '€600,000 / yr at 24%',
        detail: 'Spanish-source employment income up to €600,000 taxed at a flat 24%; excess at 47%. Foreign investment income largely exempt during the regime.',
        source: { label: 'AEAT: Régimen especial impatriados (Art. 93 LIRPF)', url: 'https://sede.agenciatributaria.gob.es/Sede/en_gb/iae/regimenes-especiales-irpf/regimen-especial-trabajadores-desplazados-territorio-espanol.html' },
      },
      {
        what: 'Beckham Law — election deadline',
        value: '6 months',
        detail: 'Modelo 149 must be filed within 6 months of registering with Spanish Social Security. There is no extension mechanism. Miss it and Beckham is forfeit for the entire stay.',
        source: { label: 'AEAT: Modelo 149', url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G606.shtml' },
      },
      {
        what: 'Beckham Law — duration',
        value: '6 tax years',
        detail: 'Year of arrival plus five subsequent years. After that you transition to standard Spanish progressive tax (up to ~47%).',
        source: { label: 'AEAT: Régimen especial impatriados', url: 'https://sede.agenciatributaria.gob.es/Sede/en_gb/iae/regimenes-especiales-irpf/regimen-especial-trabajadores-desplazados-territorio-espanol.html' },
      },
      {
        what: 'IPREM 2026',
        value: '€600 / mo · €7,200 / yr',
        detail: 'Indicador Público de Renta de Efectos Múltiples. The reference for the NLV income test; unchanged from 2025.',
        source: { label: 'BOE: Ley de Presupuestos Generales del Estado', url: 'https://www.boe.es' },
      },
      {
        what: 'Non-lucrative visa (NLV) minimum income',
        value: '€28,800 / yr (400% IPREM)',
        detail: '€2,400 / mo for the main applicant, +€7,200 / yr (100% IPREM) per dependant. Net income, evidenced by bank statements and pension/dividend documentation. Employment, freelance and remote-work income do not count.',
        source: { label: 'Spanish consular service: non-working residence visa', url: 'https://www.exteriores.gob.es/Consulados/londres/en/ServiciosConsulares/Paginas/Consular/Visado-de-residencia-no-lucrativa.aspx' },
      },
      {
        what: 'Digital nomad visa (DNV) minimum income',
        value: '€2,849 / mo (200% SMI)',
        detail: '+75% of SMI for the first dependant, +25% for each additional. Tied to the Spanish minimum wage — recalibrates whenever the SMI moves. Verify against the published SMI for the year you apply.',
        source: { label: 'Spanish Ministry of Inclusion: DNV income threshold 2026', url: 'https://www.inclusion.gob.es' },
      },
      {
        what: 'Modelo 720 — foreign asset declaration',
        value: '€50,000 per category',
        detail: 'Three independent categories — bank accounts, securities/funds, real estate. Filing window 1 Jan – 31 March. Refile only if a category rises by >€20,000 since last declaration, or you dispose of / acquire reportable assets.',
        source: { label: 'AEAT: Modelo 720', url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GI34.shtml' },
      },
    ],
  },
  {
    eyebrow: 'Portugal · 2026',
    title: 'Portugal — D7, IFICI (NHR 2.0)',
    context:
      'Portugal’s D7 minimum income tracks the national minimum wage, which rose to €920/mo for 2026. The NHR scheme closed to new entrants end-2024; IFICI is its narrower successor — fewer people qualify, but the 20% flat rate is identical.',
    rows: [
      {
        what: 'D7 visa minimum passive income',
        value: '€920 / mo · €11,040 / yr',
        detail: '+50% for a spouse, +30% per dependent child. Acceptable sources: pension, rental, dividends, intellectual property, financial holdings. Active employment income does not count — that is the D8 / digital-nomad route.',
        source: { label: 'AIMA / Portuguese consular service: D7', url: 'https://aima.gov.pt' },
      },
      {
        what: 'IFICI — flat tax rate on qualifying income',
        value: '20%',
        detail: 'Net employment (Cat A) or self-employment (Cat B) income earned in a qualifying activity. Most foreign-source income exempt during the regime.',
        source: { label: 'Portuguese tax authority: IFICI regime', url: 'https://info.portaldasfinancas.gov.pt' },
      },
      {
        what: 'IFICI — duration',
        value: '10 years',
        detail: 'Identical window to the old NHR. Cannot be extended.',
        source: { label: 'Portuguese tax authority: IFICI regime', url: 'https://info.portaldasfinancas.gov.pt' },
      },
      {
        what: 'IFICI — eligibility window',
        value: 'Not Portuguese tax-resident in prior 5 years',
        detail: 'You must actively work in an approved activity (higher-ed teaching and scientific research, certified tech startups, highly qualified roles in companies exporting >50% of revenue, designated priority sectors) every year to keep the benefit.',
        source: { label: 'Portuguese tax authority: IFICI regime', url: 'https://info.portaldasfinancas.gov.pt' },
      },
    ],
  },
  {
    eyebrow: 'Gibraltar · 2025/26 assessment year',
    title: 'Gibraltar — Category 2',
    context:
      'Gibraltar uses an annual assessment year running 1 July → 30 June. Figures below are the 2025/26 published Category 2 position from HM Government of Gibraltar.',
    rows: [
      {
        what: 'Category 2 — minimum annual tax',
        value: '£37,000',
        detail: '£3,083.33 per complete month (or part month) — pro-rated if you take Cat 2 status partway through an assessment year.',
        source: { label: 'HM Government of Gibraltar: Income Tax Office', url: 'https://www.gibraltar.gov.gi/income-tax-office' },
      },
      {
        what: 'Category 2 — maximum annual tax',
        value: '£42,380',
        detail: 'The cap is enforced via the assessable-income limit below. Once your tax bill hits £42,380, no further income tax is charged in that year.',
        source: { label: 'HM Government of Gibraltar: Income Tax Office', url: 'https://www.gibraltar.gov.gi/income-tax-office' },
      },
      {
        what: 'Category 2 — assessable income limit',
        value: '£118,000',
        detail: 'Worldwide taxable income above £118,000 is disregarded for Cat 2 purposes. This is why the regime is built for high earners — past £118k, the effective rate falls fast.',
        source: { label: 'HM Government of Gibraltar: Income Tax Office', url: 'https://www.gibraltar.gov.gi/income-tax-office' },
      },
      {
        what: 'Category 2 — net worth requirement',
        value: '£2,000,000',
        detail: 'Estimated total net worth threshold to qualify. Application fee £1,168 (non-refundable); refundable deposit of £42,380 returned on relinquishing status.',
        source: { label: 'HM Government of Gibraltar: Cat 2 application', url: 'https://www.gibraltar.gov.gi/income-tax-office' },
      },
    ],
  },
];

export default function Page() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-content">
        <div className="max-w-2xl">
          <Badge tone="warm" uppercase>2026 figures · sourced</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
            The 2026 thresholds for a British mover to Spain, Portugal or Gibraltar
          </h1>
          <p className="mt-3 text-[18px] text-muted">
            Every income test, tax band, and election deadline a UK adult needs to plan a 2026 move
            to Iberia. Each row links to a primary source. We update this page in place — bookmark
            it rather than the PDF.
          </p>
        </div>

        <Card variant="bordered" className="mt-8 max-w-2xl">
          <CardBody className="flex flex-col gap-2 text-[14px]">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              How we keep this current
            </div>
            <p className="text-ink/85">
              Last verified <strong>{new Date(LAST_VERIFIED).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>.
              We re-verify against each primary source quarterly and after any Spanish, Portuguese
              or Gibraltarian budget event. If you spot a figure that no longer matches the linked
              source, email{' '}
              <a href="mailto:hello@warmercoast.com" className="text-warm underline-offset-2 hover:underline">
                hello@warmercoast.com
              </a>{' '}
              — we&apos;ll fix it within 48 hours and credit you.
            </p>
          </CardBody>
        </Card>

        <div className="mt-12 flex flex-col gap-12">
          {sections.map((s) => (
            <div key={s.title}>
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-warm">{s.eyebrow}</div>
              <h2 className="display mt-2 text-[28px] font-semibold tracking-tight text-ink">{s.title}</h2>
              <p className="mt-2 max-w-3xl text-[15.5px] leading-relaxed text-muted">{s.context}</p>

              <div className="mt-6 overflow-hidden rounded-card border border-border">
                <table className="w-full text-left text-[14.5px]">
                  <thead className="bg-surface text-[12px] font-semibold uppercase tracking-[0.06em] text-muted">
                    <tr>
                      <th className="px-4 py-3 w-[28%]">Threshold</th>
                      <th className="px-4 py-3 w-[22%]">2026 value</th>
                      <th className="px-4 py-3">Detail &amp; what it triggers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-white">
                    {s.rows.map((r) => (
                      <tr key={r.what} className="align-top">
                        <td className="px-4 py-4 font-semibold text-ink">{r.what}</td>
                        <td className="px-4 py-4 font-semibold text-warm whitespace-nowrap">{r.value}</td>
                        <td className="px-4 py-4 text-ink/85">
                          {r.detail}
                          <div className="mt-2 text-[12.5px]">
                            <a
                              href={r.source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted underline-offset-2 hover:text-ink hover:underline"
                            >
                              Source: {r.source.label} ↗
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-card border border-border bg-surface p-8">
          <h2 className="display text-2xl font-semibold tracking-tight text-ink">
            Need the worked-example version of this?
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            The playbooks turn every threshold above into a step-by-step plan with your numbers —
            what you actually pay, when to elect, what to file, in what order.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/playbook/spain"
              className="inline-flex items-center gap-2 rounded-pill bg-ink px-5 py-3 text-sm font-semibold text-white hover:-translate-y-px transition-all"
            >
              Spain playbook · £397 →
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-5 py-3 text-sm font-semibold text-ink hover:border-ink"
            >
              Not sure which country? Take the 12-q quiz
            </Link>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: '2026 Relocation Thresholds for British Movers to Spain, Portugal and Gibraltar',
            description:
              'Sourced reference table of UK 2026/27 income tax bands, Spain Beckham Law cap, NLV / DNV income thresholds, Modelo 720, Portugal D7 and IFICI, and Gibraltar Category 2 figures.',
            datePublished: LAST_VERIFIED,
            dateModified: LAST_VERIFIED,
            author: { '@type': 'Person', name: 'Dominic Roworth', url: `${SITE.url}/about` },
            publisher: {
              '@type': 'Organization',
              name: 'WarmerCoast',
              url: SITE.url,
              logo: { '@type': 'ImageObject', url: `${SITE.url}/icon.svg` },
            },
            mainEntityOfPage: `${SITE.url}/thresholds`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
              { '@type': 'ListItem', position: 2, name: '2026 Thresholds', item: `${SITE.url}/thresholds` },
            ],
          }),
        }}
      />
    </section>
  );
}
