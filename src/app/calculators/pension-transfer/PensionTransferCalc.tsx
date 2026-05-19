'use client';

import { SimpleCalculator } from '@/components/calculators/SimpleCalculator';
import { formatGBP } from '@/lib/tax';

export function PensionTransferCalc() {
  return (
    <SimpleCalculator
      inputs={[
        { id: 'pot', label: 'Total pension pot', type: 'slider', min: 50_000, max: 2_000_000, step: 10_000, format: (n) => formatGBP(n) },
        { id: 'annualDraw', label: 'Annual drawdown', type: 'slider', min: 0, max: 80_000, step: 1_000, format: (n) => formatGBP(n) },
        {
          id: 'country',
          label: 'Destination',
          type: 'select',
          options: [
            { value: 'spain', label: 'Spain (standard residency)' },
            { value: 'portugal', label: 'Portugal (IFICI / standard)' },
            { value: 'gibraltar', label: 'Gibraltar (Cat 2)' },
          ],
        },
      ]}
      initialValues={{ pot: 400_000, annualDraw: 24_000, country: 'spain' }}
      compute={(v) => {
        const pot = Number(v.pot);
        const draw = Number(v.annualDraw);
        const country = String(v.country);
        // Crude estimate: UK gross drawdown taxed in country of residence.
        const grossYearly = draw;
        const tax =
          country === 'spain'
            ? grossYearly * 0.24
            : country === 'portugal'
              ? grossYearly * 0.22
              : grossYearly * 0.18;
        const net = grossYearly - tax;
        const years = pot > 0 && draw > 0 ? Math.round((pot / draw) * 10) / 10 : 0;
        return [
          { label: 'Gross drawdown', value: formatGBP(grossYearly), accent: '#0F1827' },
          { label: 'Est. country tax', value: formatGBP(Math.round(tax)), accent: '#9C3848' },
          { label: 'Net to you', value: formatGBP(Math.round(net)), accent: '#10B981' },
          { label: 'Years of drawdown at this rate', value: `${years} yrs`, accent: '#E67E3C' },
        ];
      }}
      notes={[
        'Assumes UK personal allowance fully used elsewhere; treaty mechanics simplified',
        'Spain: standard residency, ignores Beckham (which excludes most foreign pension favourably)',
        'Portugal: IFICI does not apply to most private pensions',
        'Gibraltar: assumes Cat 2 capped income, not exhaustive',
      ]}
      sources={[
        { label: 'gov.uk · pension tax', href: 'https://www.gov.uk/tax-on-pension' },
        { label: 'HMRC · QROPS list', href: 'https://www.gov.uk/government/publications/list-of-qualifying-recognised-overseas-pension-schemes-qrops' },
      ]}
    />
  );
}
