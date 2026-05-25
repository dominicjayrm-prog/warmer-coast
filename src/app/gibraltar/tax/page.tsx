import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Gibraltar Tax 2026 | ABS vs GIBS, Cat 2 Cap, HEPSS, UK Pensions',
  description:
    'How Gibraltar tax works for UK movers in 2026. ABS vs GIBS dual system, Cat 2 £118,000 income cap, HEPSS ceiling, UK government and private pensions under the double tax treaty.',
  alternates: { canonical: '/gibraltar/tax' },
  openGraph: { url: '/gibraltar/tax' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="gibraltar"
      subPillarSlug="tax"
      eyebrow="Tax · 2026"
      h1="Gibraltar tax for British movers"
      intro="Gibraltar runs a dual system that lets ordinary residents pick whichever produces the lower liability: the Allowance-Based Scheme (ABS) with progressive rates and deductions, or the Gross-Income-Based Scheme (GIBS) with flat rates and no allowances. Category 2 caps assessable worldwide income at £118,000. HEPSS caps effective liability for senior specialists at approximately £44,000. UK pensions follow the UK-Gibraltar double tax treaty mechanics."
      bullets={[
        'ABS (Allowance-Based): progressive rates, generous personal allowances and deductions',
        'GIBS (Gross-Income-Based): flat rates, no allowances, simpler — taxpayer chooses lower',
        'Category 2: worldwide income assessed only on first £118,000, £37,000 floor, £42,380 ceiling',
        'HEPSS: caps assessable income at £160,000 specialist threshold; ceiling published annually by Gibraltar Income Tax Office',
        'UK government pensions: taxed only in UK under the double tax treaty',
        'UK state and private pensions: taxed only in Gibraltar once Gibraltar-resident',
      ]}
      sections={[
        {
          id: 'abs-vs-gibs',
          title: 'ABS vs GIBS: which system to elect',
          body: (
            <>
              <p>
                Ordinary Gibraltar residents elect annually between two parallel systems. The
                Allowance-Based Scheme uses progressive bands (around 14% to 39%) with a
                personal allowance, spouse allowance, child allowance, and deductible items
                including mortgage interest, education costs, medical insurance, and approved
                pension contributions. It rewards households with significant deductions.
              </p>
              <p>
                The Gross-Income-Based Scheme applies flat rates (currently 7% to 28% across
                income bands) with no personal allowance and almost no deductions. It rewards
                straightforward income with few offsets. The two systems are deliberately
                designed so different earners benefit from different schemes. The Income Tax
                Office accepts annual elections, so the choice can change as circumstances
                change.
              </p>
              <p>
                For most British movers without children and without significant deductible
                outgoings, GIBS is simpler and slightly cheaper. For families with mortgages and
                school fees in approved schools, ABS often wins. The playbook walks through the
                calculation with worked examples at the £60k, £100k and £200k income levels.
              </p>
            </>
          ),
        },
        {
          id: 'cat-2-cap',
          title: 'The Category 2 cap in plain numbers',
          body: (
            <>
              <p>
                Cat 2 holders are taxed only on the first £118,000 of worldwide income,
                regardless of total earnings. The combined effect of the ABS calculation on
                that capped slice, the personal allowance, and the minimum tax floor produces
                an annual liability between roughly £37,000 and £42,380. Whether you earn
                £200,000 or £20,000,000, your Gibraltar tax bill stays within that band.
              </p>
              <p>
                The cap applies to assessable Gibraltar tax only. UK-source income (rental
                from a UK property, UK government pensions) may still be taxed in the UK at
                source under the double tax treaty. The treaty&apos;s credit mechanism prevents
                double taxation but does not extend the cap to non-Gibraltar systems.
              </p>
            </>
          ),
        },
        {
          id: 'uk-pensions',
          title: 'UK pensions under the Gibraltar-UK double tax treaty',
          body: (
            <>
              <p>
                UK government pensions (Civil Service, NHS, teachers, armed forces, police)
                remain taxable only in the UK under Article 18 of the UK-Gibraltar DTA, even
                after you become Gibraltar tax resident. They are excluded from Gibraltar
                assessment entirely.
              </p>
              <p>
                The UK State Pension, and private/occupational pensions including SIPP
                drawdowns, are taxable only in Gibraltar once you are Gibraltar tax resident.
                The UK no longer taxes them (you can apply for HMRC to stop withholding via the
                DT-Individual form). For Cat 2 holders, pension income falls inside the £118,000
                cap.
              </p>
              <p>
                Drawdown timing matters in the year of the move. Large lump sums taken before
                Gibraltar residency triggers stay UK-taxable in full. The same drawdown after
                the trigger may benefit from Cat 2 capping. The playbook walks through a worked
                example of a £100,000 pension lump sum and the £30,000+ tax difference between
                pre- and post-trigger timing.
              </p>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'Gibraltar Income Tax Office', href: 'https://www.gibraltar.gov.gi/' },
        { label: 'gov.uk — Tax on foreign pensions and UK-Gibraltar DTA', href: 'https://www.gov.uk/tax-foreign-income/non-domiciled-residents' },
        { label: 'HM Government of Gibraltar — Treaty text', href: 'https://www.gbc.gi/news/treaty-text-published' },
      ]}
      faqs={[
        { q: 'Can I switch between ABS and GIBS each year?', a: 'Yes. The election is annual. Many residents elect ABS in years with high deductible spending (school fees, medical costs) and GIBS in simpler years.' },
        { q: 'Does Cat 2 protect UK rental income from UK tax?', a: 'No. UK rental income remains taxable in the UK as source-country income. The Gibraltar cap applies only to Gibraltar assessment. The treaty allows you to credit the UK tax paid against any Gibraltar liability, but you cannot escape UK tax on UK property.' },
        { q: 'What is the minimum Cat 2 tax I have to pay?', a: 'Approximately £37,000 per year, even if your assessable income is below the level that would generate that liability under normal rates. The minimum is part of the regime structure.' },
        { q: 'Do I need to file a Gibraltar tax return?', a: 'Yes. All Gibraltar residents file an annual return with the Income Tax Office. Returns for the year ending 30 June are filed by 30 November the same year.' },
      ]}
    />
  );
}
