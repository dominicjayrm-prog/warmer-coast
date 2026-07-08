'use client';

import { SimpleCalculator } from '@/components/calculators/SimpleCalculator';
import { formatGBP } from '@/lib/tax';

const annualPerChild: Record<string, number> = {
  'costa-del-sol-british': 10_500,
  'costa-del-sol-ib': 14_500,
  'madrid-british': 16_000,
  'barcelona-ib': 18_500,
  'algarve-british': 11_000,
  'lisbon-ib': 17_000,
  'gibraltar-private': 9_000,
};

export function SchoolCostCalc() {
  return (
    <SimpleCalculator
      captureSource="calculator_school_cost"
      inputs={[
        {
          id: 'school',
          label: 'School',
          type: 'select',
          options: [
            { value: 'costa-del-sol-british', label: 'Costa del Sol · British' },
            { value: 'costa-del-sol-ib', label: 'Costa del Sol · IB' },
            { value: 'madrid-british', label: 'Madrid · British' },
            { value: 'barcelona-ib', label: 'Barcelona · IB' },
            { value: 'algarve-british', label: 'Algarve · British' },
            { value: 'lisbon-ib', label: 'Lisbon · IB' },
            { value: 'gibraltar-private', label: 'Gibraltar · Private' },
          ],
        },
        { id: 'children', label: 'Number of children', type: 'slider', min: 1, max: 4, step: 1, format: (n) => `${n}` },
        { id: 'years', label: 'Years to plan', type: 'slider', min: 1, max: 15, step: 1, format: (n) => `${n} yrs` },
      ]}
      initialValues={{ school: 'costa-del-sol-british', children: 2, years: 6 }}
      compute={(v) => {
        const per = annualPerChild[String(v.school)] ?? 12_000;
        const kids = Number(v.children);
        const years = Number(v.years);
        const annual = per * kids;
        const total = annual * years;
        return [
          { label: 'Per-child annual', value: formatGBP(per) },
          { label: 'Household annual', value: formatGBP(annual), accent: '#E67E3C' },
          { label: `Total over ${years} years`, value: formatGBP(total), accent: '#0F1827' },
        ];
      }}
      notes={[
        'Annual fees only, excludes registration, lunch, uniform, transport',
        'British schools are GCSE/A-Level pathway; IB schools are International Baccalaureate',
        'Gibraltar has limited international school capacity, apply months early',
      ]}
    />
  );
}
