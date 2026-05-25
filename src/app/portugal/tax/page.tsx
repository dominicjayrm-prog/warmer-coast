import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Portugal Tax 2026 | NHR 2.0 (IFICI), IRS, UK Pensions for British Movers',
  description:
    'How Portuguese tax works for UK movers in 2026. IFICI / NHR 2.0 20% flat rate, qualifying activities, IRS brackets 13-48%, UK pension treatment under the double tax treaty, capital gains rules.',
  alternates: { canonical: '/portugal/tax' },
  openGraph: { url: '/portugal/tax' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="portugal"
      subPillarSlug="tax"
      eyebrow="Tax · 2026"
      h1="Portuguese tax for UK movers"
      intro="The IRS is more progressive than UK income tax — 9 bands from 13% to 48%. IFICI (Tax Incentive for Scientific Research and Innovation, the replacement for NHR) caps qualifying employment income at a 20% flat rate. Eligibility requires both a qualifying activity AND establishing Portuguese tax residency after 1 January 2024. Pensioners no longer get the original NHR 10-year exemption — that scheme closed to new applicants in 2024. UK pensions, ISAs and property follow the UK-Portugal double tax treaty mechanics, with significant impact on the timing of major decisions."
      bullets={[
        'IFICI (NHR 2.0): 20% flat rate on qualifying Portuguese-source employment or self-employment income',
        'Qualifying activities: tech, R&D, scientific research, qualifying engineering, higher education',
        'Eligibility gates: no Portuguese residency in prior 5 years, never used original NHR, residency from 1 Jan 2024+',
        'Standard IRS: 9 brackets from 13% (up to €8,059) to 48% (above €83,696)',
        'UK government pensions: taxed only in UK (DTA Article 17)',
        'UK private and state pensions: taxed only in Portugal once resident',
      ]}
      sections={[
        {
          id: 'ifici',
          title: 'IFICI / NHR 2.0: who actually qualifies',
          glance: {
            value: '20% flat',
            label: 'On qualifying employment / self-employment income',
            note: '10-year window · Portuguese tax residency from 1 Jan 2024+',
          },
          body: (
            <>
              <p>
                The original Non-Habitual Residency (NHR) scheme closed to new applicants in
                2024. The replacement, IFICI (Tax Incentive for Scientific Research and
                Innovation), is narrower. It targets specific high-skill activities that
                Portugal wants to attract: not retired pensioners, not generic remote workers,
                but professionals working in research, technology, qualifying engineering, and
                higher education.
              </p>
              <p>
                The benefit is meaningful: a 20% flat rate on qualifying Portuguese-source
                employment or self-employment income, applied for 10 years from Portuguese tax
                residency. Most foreign-source income is exempt from Portuguese taxation during
                the 10-year window, though it counts for rate determination on Portuguese-source
                income.
              </p>
              <p>
                Eligibility gates: you must not have been Portuguese tax resident in the
                previous 5 years; you must never have used the original NHR or another
                Portuguese tax incentive programme; you must have established Portuguese tax
                residency after 1 January 2024; and you must provide documentation proving
                academic qualifications relevant to the activity or at least 3 years of
                professional experience.
              </p>
              <p>
                The qualifying activity list is narrow and worth checking carefully. Software
                developers, data scientists, AI and ML engineers, cybersecurity specialists,
                research scientists, biotechnology and pharmaceutical R&D, academic researchers,
                university lecturers, and a small set of strategic-sector engineers qualify.
                Lawyers, accountants, generic financial services workers, retirees, and most
                creative professionals do not.
              </p>
            </>
          ),
        },
        {
          id: 'standard-irs',
          title: 'Standard IRS: when IFICI does not apply',
          body: (
            <>
              <p>
                If you do not qualify for IFICI — which is the case for most retirees,
                non-tech remote workers, and people moving for lifestyle rather than work —
                Portuguese IRS applies on a standard progressive scale. The 9 bands for 2026
                approximately track:
              </p>
              <ul>
                <li>13% on income up to €8,059</li>
                <li>16.5% on income €8,059 to €12,160</li>
                <li>22% on income €12,160 to €17,233</li>
                <li>25% on income €17,233 to €22,306</li>
                <li>32% on income €22,306 to €28,400</li>
                <li>35.5% on income €28,400 to €41,629</li>
                <li>43.5% on income €41,629 to €44,987</li>
                <li>45% on income €44,987 to €83,696</li>
                <li>48% on income above €83,696</li>
              </ul>
              <p>
                Additional solidarity rates apply at very high income levels (above €80,000).
                There are personal and spouse allowances, dependent allowances, deductions for
                health, education, mortgage interest and approved pension contributions. The
                exact rate landscape is fluid — Portal das Finanças publishes the annual update
                in late January each year.
              </p>
            </>
          ),
        },
        {
          id: 'uk-pensions',
          title: 'UK pensions under the UK-Portugal double tax treaty',
          body: (
            <>
              <p>
                UK government pensions — Civil Service, NHS, teachers, armed forces, police —
                are taxed only in the UK under Article 17 of the UK-Portugal DTA, even after
                you become Portuguese tax resident. They are excluded from Portuguese assessment
                entirely.
              </p>
              <p>
                The UK State Pension and private/occupational pensions including SIPP drawdowns
                are taxed only in Portugal once you are Portuguese tax resident. The UK no
                longer taxes them. You can apply for HMRC to stop withholding on private
                pensions via the DT-Individual form once Portuguese residency is established.
              </p>
              <p>
                Under the original NHR these pension income streams enjoyed a favourable rate
                for 10 years. Under IFICI, that exemption is gone for new arrivals. Pensioners
                now face standard Portuguese IRS on the same income, which can be materially
                higher than the old NHR rate. This is the single biggest reason pre-2024
                arrivals are sometimes still NHR-grandfathered while new arrivals face IFICI
                + IRS exposure.
              </p>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'Portal das Finanças (Portuguese tax authority)', href: 'https://www.portaldasfinancas.gov.pt/' },
        { label: 'gov.uk — UK nationals in Portugal', href: 'https://www.gov.uk/guidance/living-in-portugal' },
        { label: 'UK-Portugal Double Taxation Convention', href: 'https://www.gov.uk/government/publications/portugal-tax-treaties' },
      ]}
      faqs={[
        { q: 'Can I still get NHR if I established Portuguese residency in 2024?', a: 'No. The original NHR closed to new applicants. IFICI is the only option for those establishing Portuguese tax residency from 1 January 2024, and IFICI is narrower.' },
        { q: 'I retired and moved to the Algarve — do I qualify for IFICI?', a: 'Usually no. IFICI requires you to work in a qualifying activity. Retirees with passive pension income do not qualify. You pay standard Portuguese IRS, with UK government pensions remaining UK-taxable under the DTA.' },
        { q: 'How is UK rental income treated after I move?', a: 'UK has primary taxing rights as the source country. You still file a UK Self Assessment for the rental income. Portugal also assesses it but credits the UK tax paid, so you typically pay the difference (if any) to Portugal.' },
        { q: 'When can I apply for Portuguese citizenship?', a: 'After 5 years of legal residence in Portugal, with an A2 Portuguese language certificate, no serious criminal record, and demonstrable ties to Portuguese community. Dual citizenship is permitted — you can keep your UK passport.' },
      ]}
    />
  );
}
