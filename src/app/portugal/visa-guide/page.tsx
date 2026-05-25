import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Portugal Visa Guide for UK Citizens 2026 | D7, D8, Golden Visa, Family',
  description:
    'Every Portuguese visa route open to British applicants in 2026. D7 passive income €820/mo, D8 digital nomad €3,680/mo, Golden Visa fund route, family reunification. Income thresholds, documents, timelines.',
  alternates: { canonical: '/portugal/visa-guide' },
  openGraph: { url: '/portugal/visa-guide' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="portugal"
      subPillarSlug="visa-guide"
      eyebrow="Visa guide · 2026"
      h1="Portuguese visa guide for UK citizens"
      intro="Brexit made British nationals third-country applicants for Portuguese residency. Two routes cover almost everyone moving from the UK: the D7 passive-income visa and the D8 digital nomad visa. The Golden Visa residential property route closed in October 2023 — only fund and capital-transfer investments still qualify. Family reunification and student routes cover specific cases. This is the 2026 income threshold and document-pack breakdown for each."
      bullets={[
        'D7 (passive income, retirees and FIRE): €920 per month minimum (€11,040 per year)',
        'D8 (digital nomad, remote workers): €3,680 per month + €11,040 savings',
        'Golden Visa: fund investment routes from €500,000, no longer residential property',
        'Family reunification: derived right via Portuguese or EU resident spouse/parent',
        'Standard work visa: sponsored by Portuguese employer, longest processing',
        'All routes: NIF (Portuguese tax number), apostilled UK documents, criminal record check',
      ]}
      sections={[
        {
          id: 'd7-visa',
          title: 'D7 visa: the passive-income route',
          glance: {
            value: '€920/mo',
            label: 'Minimum passive income · €11,040/year',
            note: 'Pensions, dividends, rental income qualify',
          },
          body: (
            <>
              <p>
                The D7 is the longest-established Portuguese residency route for non-EU citizens
                with stable passive income. It suits retirees living on UK pensions, FIRE
                applicants drawing from investment portfolios, and anyone with substantial
                rental, dividend or royalty income. The minimum income threshold in 2026 is
                €920 per month (€11,040 per year), with proportional uplifts for dependants.
              </p>
              <p>
                The route requires proof that the income is stable and not earned from work
                inside Portugal. UK State Pension, private pension drawdowns, UK rental income,
                and dividends from UK-listed companies all qualify. Income from continuing
                remote work for a UK employer technically qualifies under the D7 in some
                consulates and not others — the D8 is the cleaner route for that case.
              </p>
              <p>
                Application is filed at the Portuguese Consulate in London with income proof,
                NIF, accommodation evidence in Portugal, apostilled UK documents, Portuguese
                health insurance, and a clean criminal record check. Timeline is typically 4 to
                6 months. Once granted, the initial residence permit is 2 years, renewable for
                3, with citizenship eligibility at year 5 after an A2 Portuguese language test.
              </p>
            </>
          ),
        },
        {
          id: 'd8-visa',
          title: 'D8 digital nomad visa: the remote-worker route',
          glance: {
            value: '€3,680/mo',
            label: '4× Portuguese minimum wage · IFICI-compatible',
            note: 'Plus €11,040 savings (12× minimum wage)',
          },
          body: (
            <>
              <p>
                Introduced in October 2022, the D8 visa is purpose-built for remote workers and
                qualifying self-employed earning at least 4 times the Portuguese national
                minimum wage. In 2026 that&apos;s €3,680 per month (the minimum wage is €920),
                plus a savings buffer of €11,040 (12 times the minimum wage). The D8 sits
                outside the D7 stream and processes through dedicated channels at the consulate.
              </p>
              <p>
                For UK citizens working remotely for a UK or non-Portuguese employer, the D8 is
                the cleanest route. Self-employed applicants with primarily non-Portuguese
                clients also qualify. The D8 is compatible with the IFICI (NHR 2.0) tax regime
                if your work is in a qualifying activity — tech, R&D, science, qualifying
                engineering, higher education.
              </p>
              <p>
                D8 application requires the same NIF and apostilled-documents pack as the D7,
                plus an employment contract or self-employment contracts proving the income
                stream is set up before applying. Initial permit 2 years, renewable for 3,
                citizenship at year 5.
              </p>
            </>
          ),
        },
        {
          id: 'golden-visa',
          title: 'Golden Visa: what still qualifies after October 2023',
          body: (
            <>
              <p>
                The Portuguese Golden Visa changed substantially in October 2023. Residential
                property purchases — the long-standing default for British movers — no longer
                qualify. The remaining routes are investment-only:
              </p>
              <ul>
                <li>€500,000 in an eligible Portuguese investment or venture capital fund</li>
                <li>€500,000+ in a research and development institution</li>
                <li>€250,000 in arts or cultural heritage preservation</li>
                <li>€500,000 in a Portuguese-incorporated business creating local jobs</li>
              </ul>
              <p>
                The Golden Visa is now used by a much smaller set of applicants — typically
                those who want residency but do not actually plan to spend significant time in
                Portugal in early years (minimum-stay requirements are only 7 days in the first
                year, 14 days in each subsequent two-year period). For most British movers
                planning a real relocation, the D7 or D8 is materially cheaper and more
                practical.
              </p>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'AIMA (Agency for Integration, Migration and Asylum)', href: 'https://aima.gov.pt/' },
        { label: 'Portuguese Embassy London — visa applications', href: 'https://londres.embaixadaportugal.mne.gov.pt/' },
        { label: 'Portal das Finanças (Portuguese tax authority)', href: 'https://www.portaldasfinancas.gov.pt/' },
      ]}
      faqs={[
        { q: 'D7 or D8 if I have remote UK employment?', a: 'D8 is the cleaner route for remote employees. D7 was historically used for this case because the D8 did not exist, but it is now the right route only for genuinely passive income (pensions, dividends, rental). Most consulates now prefer remote workers to apply under D8.' },
        { q: 'Can I apply for the Golden Visa by buying a flat in Lisbon?', a: 'No, not since October 2023. Residential property purchases no longer qualify regardless of price or location. The remaining routes are fund investments, business investment, or qualifying donations.' },
        { q: 'How long does the D7 or D8 visa application take?', a: 'D7: typically 4-6 months from consulate appointment to permit issued. D8: 3-5 months currently, faster than D7 in most consulates. After arrival in Portugal, additional registration with AIMA can take another 2-4 months for the residence card.' },
        { q: 'Do I need to speak Portuguese for the visa?', a: 'No Portuguese is required for the initial D7 or D8 visa. Portuguese A2 level is required for citizenship at year 5 — a fairly basic conversational standard, several language schools in Portugal offer 6-12 month courses targeted at the test.' },
      ]}
    />
  );
}
