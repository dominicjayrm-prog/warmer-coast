import type { Metadata } from 'next';
import Link from 'next/link';
import { PillarTemplate } from '@/components/marketing/PillarTemplate';

export const metadata: Metadata = {
  title: 'Move to Portugal from the UK | NHR 2.0, D7, D8, IRS, banking',
  description:
    'The honest UK to Portugal relocation guide. NHR 2.0 (IFICI), D7 vs D8, IRS basics, healthcare, schooling, banking. Algarve vs Lisbon vs Porto reality.',
  alternates: { canonical: '/portugal' },
  openGraph: { url: '/portugal' },
};

export default function PortugalPillar() {
  return (
    <PillarTemplate
      country="portugal"
      hero={{
        eyebrow: 'Portugal · pillar guide',
        h1Lead: 'Move to Portugal',
        h1Accent: 'from the UK.',
        intro:
          'British adults moving to the Algarve, Lisbon, Porto, or smaller coastal towns. The IFICI / NHR 2.0 successor regime, the D7 and D8 visa routes, IRS basics, the SNS, and the practical reality once you arrive.',
      }}
      subPillars={[
        { href: '/portugal/visa-guide', label: 'Visa guide', blurb: 'D7, D8, golden, work, family.' },
        { href: '/portugal/tax', label: 'Tax', blurb: 'IRS basics, IFICI, capital gains, pensions.' },
        { href: '/portugal/banking', label: 'Banking', blurb: 'NIF, Portuguese banks, Wise integration.' },
        { href: '/portugal/cost-of-living', label: 'Cost of living', blurb: 'Real numbers per region.' },
        { href: '/portugal/healthcare', label: 'Healthcare', blurb: 'SNS, utente, S1, D7 insurance, taxas moderadoras.' },
        { href: '/portugal/schools', label: 'Schools', blurb: 'International schools, IB/A-Level, Lisbon/Porto/Algarve.' },
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
            <>
              <p>
                The <Link href="/portugal/visa-guide" className="text-warm underline-offset-2 hover:underline">D7 (passive income visa)</Link>{' '}
                suits retirees and applicants with substantial dividend, rental or pension
                income. 2026 minimum: <strong>€920 per month</strong> (€11,040 per year), tied to
                the Portuguese minimum wage — see the{' '}
                <Link href="/thresholds" className="text-warm underline-offset-2 hover:underline">2026 threshold reference</Link>.
              </p>
              <p>
                The D8 (digital nomad visa) requires remote employment or qualifying
                self-employment income at <strong>€3,680 per month</strong> (4× the 2026
                Portuguese minimum wage of €920) plus savings of at least €11,040 (12× minimum
                wage). The Golden Visa still exists but excludes residential property since
                October 2023, leaving qualifying fund investments as the realistic route.
              </p>
            </>
          ),
          bullets: [
            'D7: €920 per month passive income, accessible to retirees',
            'D8: €3,680 per month + €11,040 savings, remote work',
            'Golden Visa: investment-only, no residential property since 2023',
            'Family reunification: based on existing Portuguese or EU resident',
          ],
        },
        {
          id: 'ifici',
          title: 'IFICI (NHR 2.0): who actually qualifies',
          intro:
            'The original NHR closed to new applicants from 2024. The replacement, IFICI, restricts the 20% flat rate to specific qualifying activities. UK tax residency must have been established after 1 January 2024 to be eligible.',
          body: (
            <p>
              <Link href="/portugal/tax" className="text-warm underline-offset-2 hover:underline">IFICI</Link>{' '}
              offers a 20% flat rate on Portuguese-source employment and self-employment income
              from qualifying scientific, technological, higher-education and other listed
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
          a: 'For new applicants, yes. People who registered under the original NHR before the 2024 cutoff retain their 10-year status. IFICI is the current option and is narrower: it requires you to work in a qualifying activity (tech, R&D, scientific research, qualifying engineering or higher education) AND establish Portuguese tax residency after 1 January 2024.',
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
