import type { Metadata } from 'next';
import { PillarTemplate } from '@/components/marketing/PillarTemplate';

export const metadata: Metadata = {
  title: 'Move to Gibraltar from the UK | Cat 2, HEPSS, frontier-worker',
  description:
    'The Gibraltar relocation guide. Category 2 individual residency, HEPSS for specialists, frontier-worker mechanics, banking, schooling, the Spain crossing.',
  alternates: { canonical: 'https://warmercoast.com/gibraltar' },
};

export default function GibraltarPillar() {
  return (
    <PillarTemplate
      country="gibraltar"
      hero={{
        eyebrow: 'Gibraltar · pillar guide',
        h1Lead: 'Move to Gibraltar',
        h1Accent: 'from the UK.',
        intro:
          'British adults relocating to or working from Gibraltar. Category 2 high-net-worth residency, HEPSS for specialist employees, frontier-worker mechanics into Spain, banking, schools, and the post-Brexit border reality.',
      }}
      subPillars={[
        { href: '/gibraltar/residency', label: 'Residency', blurb: 'Cat 2, HEPSS, ordinary residency.' },
        { href: '/gibraltar/tax', label: 'Tax', blurb: 'Capped liability, qualifying income, ATR.' },
        { href: '/gibraltar/frontier-worker', label: 'Frontier-worker', blurb: 'Living Spain, working Gibraltar.' },
        { href: '/gibraltar/banking', label: 'Banking', blurb: 'GibTel sector banks, Sterling and Euro.' },
      ]}
      sections={[
        {
          id: 'who-this-is-for',
          title: 'Who Gibraltar actually suits',
          intro:
            'A narrow product. Gibraltar suits high-net-worth individuals seeking capped tax liability, specialist employees recruited into finance, gaming or maritime sectors, and frontier-workers living in Spain who work for Gibraltar employers.',
          body: (
            <p>
              Gibraltar is not a generic Iberia option. The population is small, the property
              market is tight, and the lifestyle is genuinely different from Costa del Sol or
              Algarve. The right buyer is someone with a specific structural reason to be here.
              Two reasons dominate: Cat 2 capped tax for high net worth, and HEPSS for senior
              specialists earning above the qualifying threshold.
            </p>
          ),
          sources: [
            { label: 'Gibraltar Income Tax Office', href: 'https://www.gibraltar.gov.gi/' },
            { label: 'HM Government of Gibraltar', href: 'https://www.gibraltar.gov.gi/' },
          ],
        },
        {
          id: 'cat-2',
          title: 'Category 2: how the cap actually works',
          intro: 'The headline mechanism is a cap on assessable income, not an exemption.',
          body: (
            <p>
              Under Cat 2, only the first £118,000 of worldwide income is assessable to Gibraltar
              tax (2026 figure), with a minimum annual tax of approximately £37,000 and a
              maximum of approximately £44,740. Net worth of at least £2 million is required to
              qualify, plus availability of approved residential accommodation. Application is
              via the Finance Centre Director and includes vetting.
            </p>
          ),
          bullets: [
            'Worldwide income above £118k is excluded from Gibraltar assessment',
            'Minimum tax floor around £37k annually',
            'Maximum tax ceiling around £44k annually',
            'Net worth requirement £2m, vetting required',
            'Approved residential property in Gibraltar required',
          ],
        },
        {
          id: 'hepss',
          title: 'HEPSS for specialist senior employees',
          intro:
            'A different route for individuals recruited into Gibraltar to fill skilled roles.',
          body: (
            <p>
              HEPSS (High Executive Possessing Specialist Skills) caps tax liability at the
              equivalent of the first £160,000 of income, currently producing an effective tax
              ceiling around £44,740. The role must be one for which no suitable local candidate
              is available, and the employer applies on behalf of the individual. Common in
              finance, gaming, and maritime sectors.
            </p>
          ),
        },
        {
          id: 'frontier-worker',
          title: 'Frontier-worker: living in Spain, working in Gibraltar',
          intro: 'A common arrangement, materially complicated post-Brexit but still viable.',
          body: (
            <p>
              Frontier-workers remain a specifically recognised category under post-Brexit
              treaties. The tax mechanics depend heavily on physical day-counting, social
              security coordination under the EU-UK Trade and Cooperation Agreement, and
              whether you exceed Spanish tax residency thresholds (the 183-day rule). The
              playbook covers each scenario.
            </p>
          ),
        },
        {
          id: 'common-mistakes',
          title: 'Five Gibraltar mistakes British movers make',
          intro: 'Specific, expensive, avoidable.',
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Assuming the £118k cap exempts UK pensions.</strong> Treaty mechanics
                still apply. The cap is on Gibraltar assessment, not UK source taxation.
              </li>
              <li>
                <strong>Buying property before Cat 2 approval.</strong> Cat 2 needs approved
                accommodation, but premature purchase locks you in before vetting outcome.
              </li>
              <li>
                <strong>Underestimating cost of living.</strong> Gibraltar is expensive,
                particularly housing. Budget UK London-equivalent on a smaller territory.
              </li>
              <li>
                <strong>Frontier-worker day counting errors.</strong> Crossing the 183-day
                threshold in Spain accidentally moves your tax residency.
              </li>
              <li>
                <strong>Schools waitlist surprises.</strong> Limited international school
                capacity. Apply months early.
              </li>
            </ul>
          ),
        },
      ]}
      faqs={[
        {
          q: 'How long does Cat 2 approval take?',
          a: 'Typically 3 to 6 months from a complete application. Net worth and source-of-funds documentation drives most of the timeline.',
        },
        {
          q: 'Does Gibraltar tax UK rental income?',
          a: 'Under Cat 2, only assessable income is taxed in Gibraltar. UK rental income remains UK-source-taxed first. The playbook has the worked numbers.',
        },
        {
          q: 'Is Gibraltar in the EU for residency purposes?',
          a: 'No. Post-Brexit Gibraltar is a third country relative to the EU, with specific frontier protocols. The land border with Spain operates under bespoke arrangements that have been evolving since 2020.',
        },
        {
          q: 'Cost of living vs Costa del Sol?',
          a: 'Significantly higher. Housing especially. Buyers who choose Gibraltar usually do so for the tax structure or job, not lifestyle savings.',
        },
      ]}
    />
  );
}
