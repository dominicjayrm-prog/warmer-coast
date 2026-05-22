import type { Metadata } from 'next';
import { PillarTemplate } from '@/components/marketing/PillarTemplate';

export const metadata: Metadata = {
  title: 'Move to Spain from the UK | Visas, Beckham Law, banking, schools',
  description:
    'The honest UK to Spain relocation guide. Beckham Law, non-lucrative visa, digital nomad visa, modelo 720, padrón, NIE, schools, healthcare. Sourced.',
  alternates: { canonical: '/spain' },
};

export default function SpainPillar() {
  return (
    <PillarTemplate
      country="spain"
      hero={{
        eyebrow: 'Spain · pillar guide',
        h1Lead: 'Move to Spain',
        h1Accent: 'from the UK.',
        intro:
          'British adults moving to Andalucía, Valencia, Madrid, Cataluña or the islands. The visa routes that actually exist in 2026, the Beckham Law mechanics, the post-Brexit reality, and the order to do everything in.',
      }}
      subPillars={[
        {
          href: '/spain/visa-guide',
          label: 'Visa guide',
          blurb: 'Non-lucrative, DNV, work, golden alternatives.',
        },
        {
          href: '/spain/tax-residency',
          label: 'Tax residency',
          blurb: 'Beckham Law, 183-day rule, modelo 720, modelo 100.',
        },
        {
          href: '/spain/banking',
          label: 'Banking',
          blurb: 'Spanish banks, multi-currency, paying UK bills.',
        },
        {
          href: '/spain/cost-of-living',
          label: 'Cost of living',
          blurb: 'Real 2026 numbers across the main regions.',
        },
      ]}
      sections={[
        {
          id: 'who-this-is-for',
          title: 'Who Spain actually suits',
          intro:
            'Spain is the right call for most British adults moving to Iberia. It is not the right call for everyone.',
          body: (
            <>
              <p>
                Spain works well if you have employment income (especially remote, well-paid),
                want a deep cultural and lifestyle change, are willing to learn at least
                conversational Spanish, and are comfortable with a more bureaucratic system than
                the UK. It also disproportionately favours households where one earner can
                qualify for the impatriate regime (Beckham Law).
              </p>
              <p>
                Spain is less compelling if you depend heavily on UK pensions still being drawn
                tax-efficiently (Portugal&apos;s IFICI is often stronger for pensioners), if you have
                significant non-UK investment assets you need to disclose every year (the modelo
                720 obligation is real), or if you want to keep substantial UK property income
                tax-light.
              </p>
            </>
          ),
          sources: [
            { label: 'Agencia Tributaria · Régimen impatriados', href: 'https://sede.agenciatributaria.gob.es/' },
            { label: 'gov.uk · UK nationals in Spain', href: 'https://www.gov.uk/guidance/living-in-spain' },
          ],
        },
        {
          id: 'visa-routes',
          title: 'The four visa routes that matter in 2026',
          intro:
            'After Brexit, Brits are third-country nationals. The two old defaults (EU freedom of movement, UK passport stamp) no longer apply.',
          body: (
            <>
              <p>
                Today four routes cover 95% of UK applicants. The non-lucrative visa for
                financially independent applicants. The digital nomad visa for remote employees
                or self-employed workers earning at least the relevant threshold (approximately
                €2,849 monthly for solo applicants in 2026, +75% IPREM per dependent). Standard work visas, which require
                an offer letter from a Spanish entity. And family reunification, for those with
                a Spanish or EU spouse.
              </p>
              <p>
                The Golden Visa property route formally closed to new property-only investment
                applications in 2025. Alternative investment routes (Spanish government bonds,
                qualifying business investment) remain available but suit very few applicants.
              </p>
            </>
          ),
          bullets: [
            'Non-lucrative visa: no work allowed in or for Spain, passive income proof required',
            'Digital nomad visa: remote employment, includes Beckham Law eligibility',
            'Work visa: sponsored by Spanish employer, longest processing',
            'Family reunification: dependent on relationship to Spanish/EU resident',
          ],
        },
        {
          id: 'beckham-law',
          title: 'Beckham Law: the structuring decision worth getting right',
          intro:
            'The impatriate regime taxes qualifying income at 24% flat on the first €600,000. For higher earners moving from the UK 40% or 45% bracket, this is a £15k to £40k annual difference. It is also a one-shot decision with a six-month window.',
          body: (
            <>
              <p>
                You can elect into the regime within six months of registering for social security
                or obtaining residency, whichever applies. Miss the window and the option is gone.
                You stay in the regime for the year of the move plus the next five, six years
                total, after which you transition to standard Spanish progressive tax.
              </p>
              <p>
                The decision is not automatic. Some applicants are better off in standard tax
                because of the differing treatment of foreign-sourced investment and capital
                gains. The playbook walks through a worked example for incomes between £50k and
                £200k, and shows where standard tax actually wins.
              </p>
            </>
          ),
          sources: [
            { label: 'BOE · Ley 35/2006 art. 93 (impatriados)', href: 'https://www.boe.es/' },
            { label: 'Asociación Española de Asesores Fiscales', href: 'https://www.aedaf.es/' },
          ],
        },
        {
          id: 'first-90-days',
          title: 'The first 90 days on the ground',
          intro:
            'There is a correct order. Get it wrong and you are paying for a Spanish lawyer to fix it.',
          body: (
            <>
              <p>
                NIE first (the foreigner identification number). Then padrón at the town hall
                where you actually live. Then social security registration if employed. Then bank
                account opening (most Spanish banks now require padrón). Then modelo 030 to
                register with Hacienda. Then, if applicable, the Beckham Law election.
              </p>
              <p>
                Each of these has paperwork requirements that vary by region. Andalucía is
                relatively painless. Cataluña is the slowest. Madrid is the most paperwork-heavy
                but the most predictable. The playbook has region-specific document checklists.
              </p>
            </>
          ),
        },
        {
          id: 'common-mistakes',
          title: 'The five mistakes that cost most Brits in year one',
          intro: 'Real numbers from real buyers who told us what they wish they had done differently.',
          body: (
            <>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Selling the UK home after becoming Spanish tax resident.</strong> Capital
                  gain becomes Spanish-taxable at 19 to 28%, where it would have been UK CGT
                  taxable at 18 or 24% (and possibly principal-residence-relieved).
                </li>
                <li>
                  <strong>Missing the Beckham Law window.</strong> Six months from social security
                  enrolment. Lost forever after that.
                </li>
                <li>
                  <strong>Filing modelo 720 incorrectly or late.</strong> Penalties were softened
                  after the 2022 ECJ ruling but reporting is still mandatory for assets over €50k
                  in each of three categories.
                </li>
                <li>
                  <strong>Drawing the UK pension wrong.</strong> Article 17 of the UK-Spain DTA
                  exempts government pensions from Spanish tax. Private pensions are different.
                </li>
                <li>
                  <strong>Not closing UK ISAs before becoming Spanish resident.</strong> ISAs are
                  not recognised in Spain, all income becomes taxable, and the wrapper is wasted.
                </li>
              </ul>
            </>
          ),
        },
      ]}
      faqs={[
        {
          q: 'Can I keep my UK home and rent it out from Spain?',
          a: 'Yes, but the rental income becomes part of your Spanish-taxable worldwide income once you are Spanish tax resident. UK tax is still primary by source-country rule, then Spain credits it. The playbook walks through the relief mechanism.',
        },
        {
          q: 'Is Beckham Law going away?',
          a: 'Periodic political talk, no imminent legislation. The 2023 reforms expanded eligibility (remote workers, qualifying self-employed). Best assumption: stable for the next 3 to 5 years.',
        },
        {
          q: 'How quickly do I become Spanish tax resident?',
          a: 'The two main triggers: 183 days physical presence in a calendar year, or your centre of economic interests being in Spain. The day-counting nuances are in the residency timeline calculator.',
        },
        {
          q: 'Can my UK ISA stay open?',
          a: 'It can stay open as a UK product, but it loses its tax-free status from a Spanish perspective. Income and gains become Spanish-taxable. Most buyers wind ISAs down before crossing the residency line.',
        },
      ]}
    />
  );
}
