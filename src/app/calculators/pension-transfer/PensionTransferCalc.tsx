'use client';

import { SimpleCalculator } from '@/components/calculators/SimpleCalculator';
import { formatGBP, spainGeneralTax, portugalStandardTax, gibraltarCat2Tax } from '@/lib/tax';

export function PensionTransferCalc() {
  return (
    <SimpleCalculator
      captureSource="calculator_pension_transfer"
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
        const grossYearly = draw;
        // Progressive scales per destination (pension drawdown = general
        // income under both DTAs once resident; Beckham/IFICI do not shelter
        // pension income — see notes).
        let tax: number;
        let taxLabel = 'Est. country tax';
        if (country === 'spain') {
          tax = spainGeneralTax(grossYearly);
        } else if (country === 'portugal') {
          // Portuguese pension deduction (€4,462) before the IRS scale.
          tax = portugalStandardTax(Math.max(0, grossYearly - 4_462));
        } else {
          // Cat 2: the £37,000 minimum applies to the household regardless —
          // show the clamp so nobody reads Gibraltar as an 18% pension haven.
          tax = gibraltarCat2Tax(grossYearly);
          taxLabel = 'Cat 2 tax band (min £37k)';
        }
        const net = grossYearly - Math.min(tax, grossYearly);
        const years = pot > 0 && draw > 0 ? Math.round((pot / draw) * 10) / 10 : 0;
        return [
          { label: 'Gross drawdown', value: formatGBP(grossYearly), accent: '#0F1827' },
          { label: taxLabel, value: formatGBP(Math.round(tax)), accent: '#9C3848' },
          { label: 'Net to you', value: formatGBP(Math.round(Math.max(0, net))), accent: '#10B981' },
          { label: 'Years of drawdown at this rate', value: `${years} yrs`, accent: '#E67E3C' },
        ];
      }}
      notes={[
        'Progressive 2026 scales; € thresholds applied 1:1 to £ inputs (slightly conservative). Treaty mechanics simplified.',
        'Spain: pension drawdown is general-scale income. Beckham Law does NOT shelter pension income — do not move for it.',
        'Portugal: IFICI gives pensions no special treatment (the old NHR pension deal closed end-2023). €4,462 pension deduction applied.',
        'Gibraltar: Cat 2 carries a £37,000 minimum household tax whatever you draw — it only makes sense with £125k+ total income.',
        'The 25% UK tax-free lump sum is taxable in Spain and Portugal once resident — take it while UK resident (covered in the playbooks).',
      ]}
      sources={[
        { label: 'gov.uk · pension tax', href: 'https://www.gov.uk/tax-on-pension' },
        { label: 'HMRC · QROPS list', href: 'https://www.gov.uk/government/publications/list-of-qualifying-recognised-overseas-pension-schemes-qrops' },
      ]}
    />
  );
}
