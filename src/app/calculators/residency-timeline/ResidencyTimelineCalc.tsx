'use client';

import { SimpleCalculator } from '@/components/calculators/SimpleCalculator';

export function ResidencyTimelineCalc() {
  return (
    <SimpleCalculator
      captureSource="calculator_residency_timeline"
      inputs={[
        { id: 'daysPresent', label: 'Days in target country this year', type: 'slider', min: 0, max: 365, step: 1, format: (n) => `${n} days` },
        { id: 'daysUk', label: 'Days back in UK this tax year', type: 'slider', min: 0, max: 365, step: 1, format: (n) => `${n} days` },
        {
          id: 'ukTies',
          label: 'UK ties you keep (SRT)',
          type: 'select',
          options: [
            { value: '0', label: '0 ties' },
            { value: '1', label: '1 tie (e.g. 90-day tie)' },
            { value: '2', label: '2 ties (e.g. + accommodation)' },
            { value: '3', label: '3 ties (+ work or family)' },
            { value: '4', label: '4+ ties' },
          ],
        },
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
      initialValues={{ daysPresent: 120, daysUk: 60, ukTies: '2', country: 'spain' }}
      compute={(v) => {
        const days = Number(v.daysPresent);
        const daysUk = Number(v.daysUk);
        const ties = Number(v.ukTies);
        const country = String(v.country);
        const triggered = days > 183;
        const remainingToTrigger = Math.max(0, 184 - days);

        // UK SRT sufficient-ties day limits for LEAVERS (UK resident in one
        // of the prior 3 years) — the relevant table for someone moving out.
        // ties → max UK days while remaining non-resident.
        const leaverLimits: Record<number, number> = { 0: 182, 1: 120, 2: 90, 3: 45, 4: 15 };
        const ukLimit = leaverLimits[Math.min(ties, 4)];
        const ukSafe = daysUk <= ukLimit;

        return [
          { label: `${country.charAt(0).toUpperCase() + country.slice(1)} 183-day trigger`, value: triggered ? 'Triggered ✓' : `Not yet (${remainingToTrigger} more)`, accent: triggered ? '#9C3848' : '#10B981' },
          {
            label: `UK SRT (leaver, ${ties} tie${ties === 1 ? '' : 's'})`,
            value: ukSafe
              ? `Non-resident at ${daysUk} UK days (limit ${ukLimit})`
              : `UK-RESIDENT risk: ${daysUk} days > ${ukLimit}-day limit`,
            accent: ukSafe ? '#10B981' : '#9C3848',
          },
          { label: 'Centre of vital interests', value: 'Check separately', accent: '#E67E3C' },
        ];
      }}
      notes={[
        'The 183-day test is the primary destination-country trigger but not the only one — centre of vital interests (family, home, business) can override day count',
        'UK side: the SRT sufficient-ties table shown is for leavers (UK-resident in any of the prior 3 tax years). Ties: family, accommodation, work (40+ days), 90-day, and country tie',
        'Day of arrival and departure both count in Spain and Portugal; UK counts days where you are present at midnight',
        'Gibraltar uses ordinary-residence concepts in addition to day counting',
        'Full walkthrough: see our UK Statutory Residence Test guide (/uk-statutory-residence-test)',
      ]}
    />
  );
}
