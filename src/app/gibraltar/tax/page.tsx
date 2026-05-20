import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Gibraltar Tax for UK Movers 2026 | Cat 2 Cap, HEPSS, ATR System',
  description: 'How Gibraltar tax works in 2026. Allowance-Based vs Gross-Income-Based system, Cat 2 cap on first £118,000, HEPSS effective ceiling ~£44,000, UK pension treatment under the double tax treaty.',
  alternates: { canonical: '/gibraltar/tax' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="gibraltar"
      eyebrow="Tax · 2026"
      h1="Gibraltar tax for British movers · 2026"
      intro="Gibraltar runs a dual system: Allowance-Based Scheme (ABS) or Gross-Income-Based Scheme (GIBS), whichever produces the lower liability. Category 2 caps assessable worldwide income at £118,000. HEPSS caps effective liability for senior specialists. UK pensions follow the UK-Gibraltar double tax treaty mechanics."
      bullets={[
        'Category 2: worldwide income assessed only on first £118,000, minimum annual tax ~£37,000, maximum ~£44,740',
        'HEPSS: caps assessable income at the £160,000 specialist threshold, effective tax ceiling ~£44,000',
        'Standard tax (ordinary residency): progressive ABS or flat-rate GIBS, taxpayer chooses the lower',
        'UK government pensions: taxed only in the UK under DTA',
        'UK state and private pensions: taxed in Gibraltar once Gibraltar-resident',
        'Source: Gibraltar Income Tax Office',
      ]}
    />
  );
}
