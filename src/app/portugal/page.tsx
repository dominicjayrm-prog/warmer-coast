import type { Metadata } from 'next';
import { PillarTemplate } from '@/components/marketing/PillarTemplate';

export const metadata: Metadata = {
  title: 'Move to Portugal from the UK | NHR 2.0, D7, D8, IRS, banking',
  description:
    'The honest UK to Portugal relocation guide. NHR 2.0 (IFICI), D7 vs D8, IRS basics, healthcare, schooling, banking. Algarve vs Lisbon vs Porto reality.',
  alternates: { canonical: 'https://warmercoast.com/portugal' },
};

export default function PortugalPillar() {
  return (
    <PillarTemplate
      country="portugal"
      hero={{
        eyebrow: 'Portugal pillar guide',
        h1: 'Move to Portugal with |NHR 2.0 |intact, the D7 sorted, and the IRS surprises avoided',
        intro:
          'British adults moving to the Algarve, Lisbon, Porto, or smaller coastal towns. The IFICI / NHR 2.0 successor regime, the D7 and D8 visa routes, the IRS basics, the SNS, and the practical reality once you arrive.',
      }}
      subPillars={[
        { href: '/portugal/visa-guide', label: 'Visa guide', blurb: 'D7, D8, golden, work, family.' },
        { href: '/portugal/tax', label: 'Tax', blurb: 'IRS basics, IFICI, capital gains, pensions.' },
        { href: '/portugal/banking', label: 'Banking', blurb: 'NIF, Portuguese banks, Wise integration.' },
        { href: '/portugal/cost-of-living', label: 'Cost of living', blurb: 'Real numbers per region.' },
      ]}
      sections={[
        {
          id: 'who-this-is-for',
          title: 'Who Portugal actually suits',
          intro: 'Portugal is the right call for retirees with UK pensions and remote earners chasing IFICI status. It is less compelling for high-earning UK employees who would be better off under Beckham Law in Spain.',
          body: (
            <p>
              Portugal works particularly well for households drawing UK pensions, for remote
              workers in tech, science, or qualifying creative fields who can claim IFICI status,
              and for buyers who prioritise the English-speaking ease of the Algarve. Bureaucracy
              is more relaxed than Spain but slower in places, and the property market in Lisbon
              and parts of the Algarve has tightened significantly since 2022.
            </p>
          ),
          sources: [
            { label: 'Portal das Finanças · IRS', href: 'https://www.portaldasfinancas.gov.pt/' },
            { label: 'gov.uk · UK nationals in Portugal', href: 'https://www.gov.uk/guidance/living-in-portugal' },
          ],
        },
        {
          id: 'visa-routes',
          title: 'D7 vs D8 vs Golden Visa in 2026',
          intro: 'Three routes cover almost every UK applicant.',
          body: (
            <p>
              The D7 (passive income visa) suits retirees and applicants with substantial
              dividend, rental or pension income. The D8 (digital nomad visa) requires evidence
              of remote employment or self-employment at a minimum of four times the Portuguese
              minimum wage. The Golden Visa still exists but excludes residential property since
              the 2023 reform, leaving qualifying fund investments as the realistic route.
            </p>
          ),
          bullets: [
            'D7: passive income proof, accessible to retirees',
            'D8: remote work, fastest route for working applicants',
            'Golden Visa: investment-only, no residential property since 2023',
            'Family reunification: based on existing Portuguese or EU resident',
          ],
        },
        {
          id: 'ifici',
          title: 'IFICI (NHR 2.0): who actually qualifies',
          intro:
            'The original NHR closed to new applicants in March 2024. The replacement, IFICI, is narrower but useful.',
          body: (
            <p>
              IFICI offers a 20% flat rate on Portuguese-source employment and self-employment
              income from qualifying scientific, technological, higher-education and other listed
              activities, plus exemption on most foreign-source income. The qualifying list is
              tighter than NHR was. You must register with the appropriate authority within the
              first year of tax residency. Pensioners do not get the favourable treatment they
              had under the original NHR.
            </p>
          ),
          sources: [
            { label: 'Portal das Finanças · IFICI', href: 'https://www.portaldasfinancas.gov.pt/' },
          ],
        },
        {
          id: 'first-90-days',
          title: 'The first 90 days on the ground',
          intro: 'Order matters, but it is more forgiving than Spain.',
          body: (
            <p>
              NIF (tax number) first, sometimes obtainable before arrival via a fiscal
              representative. Then residence registration at the SEF / AIMA office. Then NISS
              (social security) if working. Then bank account opening. Then SNS healthcare
              registration. Then, if eligible, IFICI election.
            </p>
          ),
        },
        {
          id: 'common-mistakes',
          title: 'Five Portugal mistakes Brits make in year one',
          intro: 'From the buyers who told us what they wish they had done differently.',
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Assuming the old NHR still exists.</strong> It does not for new arrivals.
                The successor IFICI is narrower.
              </li>
              <li>
                <strong>Buying a property before sorting tax residency.</strong> IMT and stamp duty
                trigger before any tax planning has happened.
              </li>
              <li>
                <strong>Not declaring world income.</strong> Once Portuguese tax resident, world
                income is reportable. The double-tax treaty handles most outcomes but reporting
                is still required.
              </li>
              <li>
                <strong>Underestimating winter heating.</strong> Older Portuguese houses can be
                cold and expensive to heat. Budget accordingly.
              </li>
              <li>
                <strong>Driving licence exchange windows.</strong> The UK to Portugal exchange
                window is now 90 days from residency. Miss it and you retest.
              </li>
            </ul>
          ),
        },
      ]}
      faqs={[
        {
          q: 'Is the old NHR really gone?',
          a: 'For new applicants, yes. Applicants who registered before the March 2024 cutoff retain their original 10-year status. IFICI is the current option.',
        },
        {
          q: 'Can I still get residency by buying a flat in Lisbon?',
          a: 'No. Residential property no longer qualifies for Golden Visa as of October 2023. Fund investment is the remaining route.',
        },
        {
          q: 'How is UK rental income taxed once I am Portuguese resident?',
          a: 'Primary taxation stays in the UK (source rule). Portugal applies the credit method under the double tax treaty. The playbook walks through the calculation.',
        },
        {
          q: 'Healthcare reality?',
          a: 'SNS is free at the point of use but waiting times for non-urgent care are longer than the UK NHS in some regions. Most Brits supplement with private insurance at €40 to €80 per person per month.',
        },
      ]}
    />
  );
}
