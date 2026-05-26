import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Portugal IRS Jovem 2026 | Under-35 Tax Exemption for UK Movers',
  description:
    'IRS Jovem is Portugal\'s under-35 tax break: 10 years of preferential rates from 100% exemption in year 1 to 25% in years 8-10, capped at 55× IAS (~€29,500/yr). 2026 rates and rules, eligibility for British movers, how it stacks with IFICI and standard IRS. Sourced from the Portuguese tax authority.',
  alternates: { canonical: '/portugal/irs-jovem' },
  openGraph: { url: '/portugal/irs-jovem' },
  keywords: [
    'IRS Jovem',
    'Portugal under 35 tax exemption',
    'IRS Jovem 2026',
    'Portuguese youth tax break',
    'young worker tax Portugal',
    'British under 35 Portugal',
  ],
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="portugal"
      subPillarSlug="irs-jovem"
      eyebrow="Under-35 tax break · 2026"
      h1="Portugal IRS Jovem — the under-35 tax break"
      intro="IRS Jovem is Portugal&apos;s preferential tax regime for young workers under 35. After a major 2024-2025 reform it now offers 10 years of graduated exemptions, starting at 100% in year 1 and tapering to 25% in years 8-10, capped at 55 times the IAS (€29,542 in 2026). It applies to both employment income (Category A) and self-employed income (Category B). For British movers under 35 — especially those who can&apos;t qualify for IFICI — this is the materially-strongest available tax structure for the first decade of life in Portugal."
      bullets={[
        'Ages 18-35 at the start of the relevant tax year',
        '10-year duration, starting from your first year of non-dependent A or B income',
        'Year 1: 100% income exemption · Years 2-4: 75% · Years 5-7: 50% · Years 8-10: 25%',
        'Cap: 55× the IAS, currently €29,542.15 per year for 2026',
        'Applies to employment (Cat A) and freelance (Cat B) income — not pensions, capital gains, rental',
        'NOT restricted to specific activities (unlike IFICI)',
        'Can be applied through monthly payroll withholding adjustments or via annual IRS reconciliation',
      ]}
      sections={[
        {
          id: 'who-qualifies',
          title: 'Who qualifies in 2026',
          glance: { value: '18-35 years old', label: 'At start of relevant year', note: 'For 10 years from first income' },
          body: (
            <>
              <p>
                Eligibility is materially broader than IFICI / NHR 2.0. To qualify for IRS Jovem
                in a given tax year you must:
              </p>
              <ul>
                <li>Be aged 18-35 at the start of the tax year (i.e. on 1 January)</li>
                <li>Earn income in Category A (employment) or Category B (self-employment / recibos verdes)</li>
                <li>Have completed at least 4 years of secondary education / be in formal training (this requirement was relaxed in the 2024-2025 reform — confirm with your contabilista based on circumstances)</li>
                <li>Not be financially dependent on your parents for IRS purposes</li>
                <li>Be Portuguese tax resident in the relevant year</li>
              </ul>
              <p>
                Unlike IFICI, there is <strong>no qualifying-activity restriction</strong> — IRS
                Jovem applies to virtually any work, not just &ldquo;innovative entrepreneurship&rdquo;
                or specific listed sectors. A 28-year-old British copywriter, marketing
                consultant, sales rep or remote engineer all qualify, irrespective of whether
                their activity meets IFICI&apos;s tighter list.
              </p>
              <p>
                The 10-year clock starts from the first year you earn Category A or B income as
                an independent (not financially dependent) taxpayer. For most British movers
                this means: from the first calendar year you become Portuguese-resident and
                earn employment or freelance income.
              </p>
            </>
          ),
        },
        {
          id: 'rate-structure',
          title: 'The 10-year rate schedule',
          glance: { value: '100% → 25%', label: 'Graduated taper over 10 years', note: 'Capped at 55× IAS' },
          body: (
            <>
              <p>
                The exemption tapers across four bands:
              </p>
              <div className="mt-4 overflow-hidden rounded-card border border-border">
                <table className="w-full text-left text-[14.5px]">
                  <thead className="bg-surface text-[12px] font-semibold uppercase tracking-[0.06em] text-muted">
                    <tr>
                      <th className="px-4 py-3">Year of activity</th>
                      <th className="px-4 py-3">Exemption</th>
                      <th className="px-4 py-3">2026 max exempt income (55× IAS = €29,542)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-white">
                    <tr><td className="px-4 py-3 font-semibold text-ink">Year 1</td><td className="px-4 py-3">100%</td><td className="px-4 py-3 text-ink/85">Up to €29,542 fully exempt</td></tr>
                    <tr><td className="px-4 py-3 font-semibold text-ink">Years 2-4</td><td className="px-4 py-3">75%</td><td className="px-4 py-3 text-ink/85">75% × €29,542 = €22,156 exempt</td></tr>
                    <tr><td className="px-4 py-3 font-semibold text-ink">Years 5-7</td><td className="px-4 py-3">50%</td><td className="px-4 py-3 text-ink/85">50% × €29,542 = €14,771 exempt</td></tr>
                    <tr><td className="px-4 py-3 font-semibold text-ink">Years 8-10</td><td className="px-4 py-3">25%</td><td className="px-4 py-3 text-ink/85">25% × €29,542 = €7,386 exempt</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-[15.5px] text-ink/85">
                Income above the 55× IAS cap is taxed at standard IRS rates (no exemption).
                Income below the cap benefits from the year-specific exemption percentage.
              </p>
              <p className="mt-3">
                Worked example: a 26-year-old British freelancer with €45,000 of recibos verdes
                income in year 1 of IRS Jovem:
              </p>
              <ul>
                <li>Exempt portion: €29,542 (full Year 1 exemption up to the cap)</li>
                <li>Taxable portion: €45,000 − €29,542 = €15,458 at standard IRS progressive rates</li>
                <li>Approximate IRS bill on €15,458: ~€2,000 (standard scale, before deductions)</li>
                <li>Vs no IRS Jovem: full €45,000 at standard rates ≈ €9,500 IRS bill</li>
                <li><strong>Year-1 saving: ~€7,500</strong></li>
              </ul>
              <p>
                Over the full 10 years, total savings depend on your income trajectory but
                typically run €30,000-€60,000 for someone earning at the cap throughout. For
                higher earners (above the cap), savings are capped — meaning IRS Jovem is most
                valuable for moderate earners (€20k-€50k/year) and less impactful for high
                earners (€80k+).
              </p>
            </>
          ),
        },
        {
          id: 'jovem-vs-ifici',
          title: 'IRS Jovem vs IFICI: which to choose',
          body: (
            <>
              <p>
                The two regimes are mutually exclusive — you elect one or the other, not both.
                For under-35 movers, the choice depends on income level and activity type.
              </p>
              <ul>
                <li>
                  <strong>Choose IFICI if:</strong> your activity qualifies (research, certified
                  tech startup, exports-heavy company, designated sectors) AND your income is
                  comfortably above €50,000-€60,000. IFICI&apos;s flat 20% on all qualifying
                  income beats IRS Jovem&apos;s capped exemption at higher incomes.
                </li>
                <li>
                  <strong>Choose IRS Jovem if:</strong> your activity doesn&apos;t qualify for
                  IFICI (general marketing, sales, consulting, non-qualifying tech work) OR
                  your income is below €40,000-€50,000 where IRS Jovem&apos;s 100% Year 1
                  exemption can produce zero IRS bill on the first €29,542.
                </li>
                <li>
                  <strong>Sweet spot for IRS Jovem:</strong> 25-30 year-olds earning €25k-€45k
                  in their first Portuguese year, in non-IFICI-qualifying work. They get
                  effectively zero IRS for Year 1, with sharp savings continuing through Years
                  2-4.
                </li>
                <li>
                  <strong>Sweet spot for IFICI:</strong> 25-35 year-olds in qualifying tech
                  startups or research roles earning €60k+, where 20% flat beats IRS Jovem at
                  the cap.
                </li>
              </ul>
              <p>
                Practically: get specialist advice on which regime to elect. Both have specific
                election procedures and the wrong choice in Year 1 can be hard to reverse.
              </p>
            </>
          ),
        },
        {
          id: 'application',
          title: 'How to apply for IRS Jovem',
          body: (
            <>
              <p>
                Two routes for getting the benefit applied:
              </p>
              <h3 className="display mt-4 text-[20px] font-semibold text-ink">Route 1: monthly payroll withholding</h3>
              <p>
                For employees, you can request that the IRS Jovem reduction is applied to your
                monthly payroll withholdings from January onwards. You submit a formal request
                to your employer under Article 99-F of the IRS Code, indicating the year in
                which you started earning Category A or B income as a non-dependent. The
                employer then reduces the IRS retained at source on each paycheck.
              </p>
              <h3 className="display mt-6 text-[20px] font-semibold text-ink">Route 2: annual IRS reconciliation</h3>
              <p>
                You can also elect IRS Jovem when filing your annual IRS return (Modelo 3) in
                April-June following the tax year. You tick the relevant box on the form and
                indicate your IRS Jovem year (1-10). The benefit is applied in the
                reconciliation calculation and you get a refund for any over-withheld IRS.
              </p>
              <p>
                For freelancers (recibos verdes), Route 2 is the default — you self-declare the
                IRS Jovem year on Modelo 3 each year.
              </p>
              <p>
                Documentation to retain: proof of age (passport), proof of independent status
                (no longer dependent on parents&apos; tax return), proof of relevant education
                or training where required by the year&apos;s rules.
              </p>
            </>
          ),
        },
        {
          id: 'common-mistakes',
          title: 'Common mistakes',
          body: (
            <>
              <ul>
                <li>
                  <strong>Missing Year 1 because of late tax-return filing.</strong> The 10-year
                  clock starts in your first income year. If you don&apos;t elect IRS Jovem in
                  Year 1, you don&apos;t get a second chance at the 100% exemption — the next
                  year is Year 2 with 75%.
                </li>
                <li>
                  <strong>Choosing the wrong regime (IFICI vs Jovem).</strong> Modelling both
                  regimes against your expected 10-year income trajectory matters. A 27-year-old
                  joining a non-IFICI-eligible job at €40k who picks IFICI by default may save
                  nothing; the same person picking Jovem saves €7k+ in Year 1 alone.
                </li>
                <li>
                  <strong>Forgetting Segurança Social applies anyway.</strong> IRS Jovem reduces
                  income tax, not social security contributions. Recibos verdes contributions
                  at 21.4% of 70% of gross invoices still apply.
                </li>
                <li>
                  <strong>Aging out mid-regime.</strong> Once you start IRS Jovem before turning
                  35, the regime runs for the full 10 years even if you turn 36 within it. But
                  if you don&apos;t start it before 36, you can&apos;t apply retroactively.
                </li>
                <li>
                  <strong>Assuming foreign-source income is covered.</strong> IRS Jovem covers
                  Portuguese-source employment and self-employment income. Foreign income is
                  outside its scope — it&apos;s taxed under standard Portuguese rules with
                  treaty relief where applicable. For high-foreign-income movers, IFICI&apos;s
                  foreign-income exemption may matter more.
                </li>
              </ul>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'Autoridade Tributária · IRS Jovem', href: 'https://www.portaldasfinancas.gov.pt/' },
        { label: 'gov.pt · Youth IRS scheme', href: 'https://www2.gov.pt/en/noticias' },
        { label: 'BOE-equivalent: IRS Code Article 99-F', href: 'https://www.parlamento.pt/' },
      ]}
      faqs={[
        {
          q: 'Who exactly qualifies for IRS Jovem in 2026?',
          a: 'Portuguese tax residents aged 18-35 (at the start of the tax year) earning Category A (employment) or Category B (self-employment) income, not financially dependent on their parents. The 4-year secondary-education requirement was relaxed in the 2024-2025 reform — confirm specific eligibility with a contabilista. Unlike IFICI there is no qualifying-activity restriction.',
        },
        {
          q: 'How much can I actually save with IRS Jovem?',
          a: 'Depends on income level. At €30,000/year of qualifying income with the 2026 cap of €29,542 fully exempt in Year 1, IRS Jovem saves roughly €6,000-€7,500 in Year 1. Over the full 10 years at similar income levels, total savings typically run €30,000-€60,000. For incomes well above the €29,542 cap, savings are flat in absolute terms.',
        },
        {
          q: 'Can I combine IRS Jovem with IFICI?',
          a: 'No — they\'re mutually exclusive. You elect one or the other in each tax year. The choice is consequential and worth getting specialist advice on, particularly if you\'re moving in Year 1 and your activity might qualify for IFICI.',
        },
        {
          q: 'Does IRS Jovem reduce my Segurança Social contributions?',
          a: 'No. IRS Jovem is an income tax (IRS) provision only. Segurança Social contributions are calculated separately on the same income, regardless of IRS Jovem election. Employees pay 11% employee + 23.75% employer NIC-equivalent; freelancers pay 21.4% of 70% of gross invoices after the first-year exemption.',
        },
        {
          q: 'I started work in Portugal at 33 — can I get 10 years of IRS Jovem ending at 43?',
          a: 'Yes. The 10-year clock starts at your first Category A/B income year. As long as you were under 35 at the start of that year, the full 10-year regime runs even beyond age 35. Critical: you must elect in Year 1 — if you start work at 33 but don\'t elect Jovem until 34, you lose Year 1\'s 100% exemption.',
        },
        {
          q: 'Does IRS Jovem affect my UK tax position?',
          a: 'No. IRS Jovem is a Portuguese tax election — it changes how Portugal taxes your Portuguese-source income. Your UK tax position depends on UK statutory residence test analysis and DTA mechanics, independent of which Portuguese regime you elect.',
        },
      ]}
      reviewedOn="2026-05-25"
      relatedResources={[
        { kind: 'Deep dive', href: '/portugal/tax', label: 'Portuguese tax: IFICI / NHR 2.0', blurb: 'The alternative regime for qualifying high earners.' },
        { kind: 'Deep dive', href: '/portugal/niss', label: 'Portuguese NISS (social security)', blurb: 'Combined with IRS Jovem election for the under-35 worker setup.' },
        { kind: 'Deep dive', href: '/portugal/nif', label: 'Portuguese NIF (tax number)', blurb: 'The first number you need, before any tax election.' },
        { kind: 'Deep dive', href: '/portugal/visa-guide', label: 'Portugal visa guide: D7 and D8', blurb: 'Most under-35 IRS Jovem candidates arrive on the D8 visa.' },
        { kind: 'Reference', href: '/thresholds', label: '2026 thresholds for British movers', blurb: 'Portuguese SMI, IAS, and the income thresholds underpinning IRS Jovem.' },
        { kind: 'Playbook', href: '/playbook/portugal', label: 'The Portugal Playbook · £397', blurb: 'Year-one tax election decision tree including IRS Jovem vs IFICI worked examples.' },
      ]}
    />
  );
}
