'use client';

import { SimpleCalculator } from '@/components/calculators/SimpleCalculator';

export function ResidencyTimelineCalc() {
  return (
    <SimpleCalculator
      inputs={[
        { id: 'daysPresent', label: 'Days in target country this year', type: 'slider', min: 0, max: 365, step: 1, format: (n) => `${n} days` },
        { id: 'daysUk', label: 'Days back in UK this year', type: 'slider', min: 0, max: 365, step: 1, format: (n) => `${n} days` },
        {
          id: 'country',
          label: 'Target country',
          type: 'select',
          options: [
            { value: 'spain', label: 'Spain' },
            { value: 'portugal', label: 'Portugal' },
            { value: 'gibraltar', label: 'Gibraltar' },
          ],
        },
      ]}
      initialValues={{ daysPresent: 120, daysUk: 60, country: 'spain' }}
      compute={(v) => {
        const days = Number(v.daysPresent);
        const country = String(v.country);
        const triggered = days > 183;
        const remainingToTrigger = Math.max(0, 184 - days);
        return [
          { label: 'Days in target country', value: `${days}` },
          { label: '183-day trigger', value: triggered ? 'Triggered ✓' : `Not yet (${remainingToTrigger} more)`, accent: triggered ? '#9C3848' : '#10B981' },
          { label: 'Centre of interests', value: 'Check separately', accent: '#E67E3C' },
          { label: 'Country', value: country.charAt(0).toUpperCase() + country.slice(1) },
        ];
      }}
      notes={[
        '183-day test is the primary trigger but not the only one',
        'Centre of vital interests (family, business, assets) can override day count',
        'Day of arrival and departure both count in Spain and Portugal',
        'Gibraltar uses ordinary residence concepts in addition to day counting',
      ]}
    />
  );
}
