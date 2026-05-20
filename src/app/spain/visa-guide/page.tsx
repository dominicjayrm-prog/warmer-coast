import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Spain Visa Guide for UK Citizens 2026 | NLV, DNV, Work, Golden, Family',
  description:
    'Every Spanish visa route open to British applicants in 2026. Non-lucrative (NLV), digital nomad (DNV €2,849/mo + Beckham Law), work, Golden Visa investment routes, family reunification. Documents, costs, timelines.',
  alternates: { canonical: '/spain/visa-guide' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="spain"
      subPillarSlug="visa-guide"
      eyebrow="Visa guide · 2026"
      h1="Spanish visa guide for British citizens"
      intro="Brexit made British nationals third-country applicants for Spanish residency. In 2026 four routes cover almost every UK applicant: the Non-Lucrative Visa (NLV) for those with passive income, the Digital Nomad Visa (DNV) for remote workers, the standard work visa for those with a Spanish employer, and family reunification for spouses or dependants. The Golden Visa residential property route closed in 2025; investment-only routes remain. Picking the wrong one wastes six months and €2,000 in legal fees. This is what each one actually requires."
      bullets={[
        'NLV: ~€2,400/mo passive income (400% IPREM annually, €28,800 per year), no Spain-side work',
        'DNV: €2,849/mo (200% SMI) + Beckham Law eligibility, max 20% Spanish-client income for self-employed',
        'Work visa: employer-sponsored, requires Public Employment Service shortage confirmation, 4-8 months',
        'Golden Visa: residential property closed 2025, €1m government bonds or €1m+ qualifying business investment still open',
        'Family reunification: derived right via Spanish or EU resident spouse/parent',
        'Every route: apostilled UK documents + sworn Spanish translation (traductor jurado), medical certificate, ACRO check',
      ]}
      sections={[
        {
          id: 'nlv',
          title: 'Non-Lucrative Visa (NLV): the passive-income route',
          body: (
            <>
              <p>
                The NLV is the classic Spanish residency route for those who can live in Spain
                without working — retirees on UK pensions, FIRE applicants with portfolio
                income, and anyone with substantial passive UK rental or dividend income. The
                income threshold is set as a multiple of the IPREM index (€600/month in 2026),
                approximately €2,400 per month for the primary applicant (400% IPREM annually),
                plus uplifts for dependants.
              </p>
              <p>
                The NLV explicitly prohibits work in or for Spain. Continuing remote work for a
                UK employer is the contentious area: technically prohibited under NLV, in
                practice tolerated when contained to non-Spanish employers, but the Digital
                Nomad Visa is the cleaner route for remote workers and the recommended choice
                if you intend to work at all.
              </p>
              <p>
                Application at the Spanish Consulate (London, Edinburgh, Manchester) with bank
                statements, apostilled documents, medical certificate, and ACRO check. Initial
                permit 1 year, then 2-year renewals. Permanent residency at 5 years, citizenship
                at 10 (though dual UK-Spanish citizenship is not generally permitted, so most
                Brits stop at long-term residency).
              </p>
            </>
          ),
        },
        {
          id: 'dnv',
          title: 'Digital Nomad Visa (DNV): the remote-worker route and Beckham Law bridge',
          body: (
            <>
              <p>
                Introduced in 2023, the DNV is purpose-built for remote employees and qualifying
                self-employed earning at least 200% of the Spanish Minimum Interprofessional
                Wage (SMI). For 2026 that&apos;s €2,849 per month, with proportional uplifts of
                approximately 75% of IPREM per dependant (~€480 per dependant per month).
              </p>
              <p>
                For UK citizens, the DNV&apos;s structural prize is Beckham Law eligibility —
                the 24% flat tax on Spanish-source employment income up to €600,000 for six
                years. Combined, the DNV + Beckham Law is the most tax-efficient route for
                high-earning remote employees moving from the UK to Spain.
              </p>
              <p>
                Two subtypes: employees of a non-Spanish entity (cleanest case), or
                self-employed with a maximum of 20% Spanish-source client income. The
                Beckham Law election must be filed via Modelo 149 within 6 months of Social
                Security registration — this deadline is absolute and missing it forfeits
                Beckham Law for the entire stay.
              </p>
            </>
          ),
        },
        {
          id: 'work-visa',
          title: 'Work visa: the employer-sponsored route',
          body: (
            <>
              <p>
                The standard Spanish work visa requires a Spanish employer to sponsor the
                application and demonstrate that no suitable EU candidate is available. The
                application processes through the Servicio Público de Empleo Estatal (SEPE)
                and the Oficina de Extranjería, takes 4-8 months typically, and the initial
                residence permit is tied to that specific employer.
              </p>
              <p>
                Best fit for tech engineers, healthcare specialists, qualified academics, and
                other roles where Spain has documented shortages. For most British movers
                with portable income, the DNV is faster and cleaner. The work visa is mainly
                relevant when the role itself is the reason for the move.
              </p>
            </>
          ),
        },
        {
          id: 'golden-visa',
          title: 'Golden Visa: what still works after the 2025 property closure',
          body: (
            <>
              <p>
                Spain&apos;s Golden Visa changed in 2025 when residential property purchases
                were removed from the qualifying list. The remaining routes are pure
                investment:
              </p>
              <ul>
                <li>€1,000,000 in Spanish government bonds</li>
                <li>€1,000,000+ in shares of publicly-traded Spanish companies</li>
                <li>€1,000,000 deposit in a Spanish bank</li>
                <li>€500,000 in commercial property (commercial only — residential excluded)</li>
                <li>Qualifying business investment creating Spanish jobs (€1m+ scale)</li>
              </ul>
              <p>
                In practice, very few British applicants take this route post-2025. The DNV is
                materially cheaper, gives equivalent residency, and works for most income
                profiles. The Golden Visa survives as an option for ultra-high-net-worth
                individuals who want residency without committing to physical presence in
                Spain.
              </p>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'Spanish Embassy London — visa applications', href: 'https://www.exteriores.gob.es/embajadas/londres/en' },
        { label: 'BOE — Spanish official gazette (visa law)', href: 'https://www.boe.es/' },
        { label: 'Agencia Tributaria — Régimen impatriado (Beckham Law)', href: 'https://sede.agenciatributaria.gob.es/' },
        { label: 'gov.uk — UK nationals in Spain', href: 'https://www.gov.uk/guidance/living-in-spain' },
      ]}
      faqs={[
        { q: 'NLV or DNV if I want to work remotely?', a: 'DNV, every time. NLV technically prohibits remote work for non-Spanish employers and consulates increasingly scrutinise applicants who declare remote-work income. DNV is the legitimate route for remote employees and is the Beckham Law bridge.' },
        { q: 'Can I do anything about already missing the Beckham Law deadline?', a: 'No. The Modelo 149 6-month window from Social Security registration is absolute under current law. If you missed it, standard Spanish progressive tax applies for your entire stay. The playbook walks through the few edge-case workarounds (taking a break in Spanish residency, returning under a new Beckham Law election) but these are rare and require specialist advice.' },
        { q: 'How long is the Spanish visa actually valid?', a: 'NLV initial: 1 year, then 2-year renewals. DNV initial: 1 year (or 3 years if applied for from inside Spain), then renewals. Permanent residency at 5 years for all routes. Citizenship at 10 years, though most British movers stop at long-term residency due to the dual-citizenship restrictions.' },
        { q: 'Do I need a sworn translator for every document?', a: 'Yes for any non-Spanish document submitted to the consulate. A traductor jurado (sworn translator) is the only accepted translation provider. Cost approximately €30-€60 per page. Plan for 5-10 documents needing translation.' },
      ]}
      spokes={[
        { href: '/spain/visa-guide/non-lucrative', label: 'Non-lucrative visa (NLV)', excerpt: 'The passive income route. Document checklist, income thresholds, renewal mechanics.' },
        { href: '/spain/visa-guide/digital-nomad', label: 'Digital nomad visa (DNV)', excerpt: 'For remote employees and self-employed. The 2026 income thresholds and Beckham Law combo.' },
        { href: '/spain/visa-guide/work-visa', label: 'Work visa', excerpt: 'Employer-sponsored. What an offer needs to contain. Realistic timeline.' },
        { href: '/spain/visa-guide/golden-alternatives', label: 'Golden Visa alternatives', excerpt: 'Property route is closed. Government bonds and qualifying business investment still open.' },
        { href: '/spain/visa-guide/family-reunification', label: 'Family reunification', excerpt: 'Spouse and dependants. Rights derived from EU or Spanish resident family.' },
        { href: '/spain/visa-guide/student-visa', label: 'Student visa', excerpt: 'Edge case but useful as a stepping stone for younger applicants.' },
      ]}
    />
  );
}
