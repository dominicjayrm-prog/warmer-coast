import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Gibraltar tax for British movers | Cat 2 cap, HEPSS, ATR system',
  description: 'How Gibraltar tax actually works. The ATR vs gross-income-based system, Cat 2 capping, HEPSS effective ceiling, UK pension treatment.',
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="gibraltar"
      eyebrow="Tax"
      h1="Gibraltar tax for British movers"
      intro="Gibraltar runs a dual system: Allowance-Based or Gross-Income-Based. Cat 2 caps assessable income at £118,000. HEPSS caps at the £160,000 specialist level. Pensions follow treaty mechanics."
      bullets={[
        'Cap on assessable income under Cat 2: £118,000',
        'Minimum annual tax under Cat 2: ~£37,000',
        'HEPSS effective ceiling: ~£44,000 on £160,000+ income',
        'UK pension treatment under the double tax treaty',
      ]}
    />
  );
}
