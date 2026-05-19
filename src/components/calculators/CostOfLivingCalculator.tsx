'use client';

import { useMemo, useState } from 'react';
import { Card, CardBody } from '@/components/ui/Card';
import { Select, Slider } from '@/components/ui/Input';
import { formatGBP } from '@/lib/tax';

interface CityProfile {
  rent2bed: number;
  utilities: number;
  groceries: number;
  eatingOut: number;
  transport: number;
  healthcare: number;
  leisure: number;
}

const cities: Record<string, CityProfile> = {
  'london-zone-2': { rent2bed: 2400, utilities: 220, groceries: 480, eatingOut: 380, transport: 180, healthcare: 0, leisure: 220 },
  'manchester': { rent2bed: 1350, utilities: 200, groceries: 420, eatingOut: 280, transport: 90, healthcare: 0, leisure: 180 },
  'bristol': { rent2bed: 1600, utilities: 210, groceries: 440, eatingOut: 320, transport: 100, healthcare: 0, leisure: 200 },
  'edinburgh': { rent2bed: 1500, utilities: 210, groceries: 430, eatingOut: 300, transport: 90, healthcare: 0, leisure: 190 },
  'cadiz': { rent2bed: 720, utilities: 130, groceries: 260, eatingOut: 180, transport: 50, healthcare: 80, leisure: 110 },
  'valencia': { rent2bed: 1100, utilities: 140, groceries: 280, eatingOut: 200, transport: 55, healthcare: 90, leisure: 140 },
  'malaga': { rent2bed: 1300, utilities: 150, groceries: 290, eatingOut: 210, transport: 55, healthcare: 90, leisure: 150 },
  'barcelona': { rent2bed: 1700, utilities: 160, groceries: 320, eatingOut: 260, transport: 60, healthcare: 100, leisure: 180 },
  'madrid': { rent2bed: 1600, utilities: 170, groceries: 320, eatingOut: 250, transport: 60, healthcare: 100, leisure: 180 },
  'lagos-pt': { rent2bed: 1400, utilities: 140, groceries: 290, eatingOut: 210, transport: 50, healthcare: 70, leisure: 140 },
  'tavira': { rent2bed: 1100, utilities: 130, groceries: 270, eatingOut: 180, transport: 50, healthcare: 70, leisure: 120 },
  'lisbon': { rent2bed: 1700, utilities: 150, groceries: 320, eatingOut: 260, transport: 55, healthcare: 80, leisure: 170 },
  'porto': { rent2bed: 1200, utilities: 140, groceries: 290, eatingOut: 210, transport: 50, healthcare: 70, leisure: 140 },
  'gibraltar': { rent2bed: 2200, utilities: 200, groceries: 480, eatingOut: 360, transport: 40, healthcare: 130, leisure: 200 },
};

const ukCityOptions = [
  { value: 'london-zone-2', label: 'London (Zone 2)' },
  { value: 'manchester', label: 'Manchester' },
  { value: 'bristol', label: 'Bristol' },
  { value: 'edinburgh', label: 'Edinburgh' },
];

const targetCityOptions = [
  { value: 'cadiz', label: 'Cádiz · Spain' },
  { value: 'valencia', label: 'Valencia · Spain' },
  { value: 'malaga', label: 'Málaga · Spain' },
  { value: 'barcelona', label: 'Barcelona · Spain' },
  { value: 'madrid', label: 'Madrid · Spain' },
  { value: 'lagos-pt', label: 'Lagos · Portugal' },
  { value: 'tavira', label: 'Tavira · Portugal' },
  { value: 'lisbon', label: 'Lisbon · Portugal' },
  { value: 'porto', label: 'Porto · Portugal' },
  { value: 'gibraltar', label: 'Gibraltar' },
];

export function CostOfLivingCalculator() {
  const [uk, setUk] = useState('london-zone-2');
  const [target, setTarget] = useState('valencia');
  const [household, setHousehold] = useState(2);

  const ukProfile = cities[uk];
  const tgtProfile = cities[target];

  const ukTotal = useMemo(() => sumProfile(ukProfile, household), [ukProfile, household]);
  const tgtTotal = useMemo(() => sumProfile(tgtProfile, household), [tgtProfile, household]);
  const monthlyDiff = ukTotal - tgtTotal;
  const annualDiff = monthlyDiff * 12;
  const fiveYearDiff = annualDiff * 5;

  return (
    <div className="flex flex-col gap-6">
      <Card variant="elevated">
        <CardBody className="grid gap-4 sm:grid-cols-3">
          <Select label="UK city" options={ukCityOptions} value={uk} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setUk(e.target.value)} />
          <Select label="Target city" options={targetCityOptions} value={target} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTarget(e.target.value)} />
          <Slider
            label="Household size"
            min={1}
            max={5}
            step={1}
            value={household}
            onChange={(e) => setHousehold(Number(e.target.value))}
            valueDisplay={<span className="font-semibold">{household} {household === 1 ? 'person' : 'people'}</span>}
          />
        </CardBody>
      </Card>

      <div className="grid gap-4 sm:grid-cols-3">
        <ResultStat title="Saved per month" value={formatGBP(Math.max(0, monthlyDiff))} subtitle="vs UK baseline" />
        <ResultStat title="Per year" value={formatGBP(Math.max(0, annualDiff))} accent="#2E8585" />
        <ResultStat title="Over 5 years" value={formatGBP(Math.max(0, fiveYearDiff))} accent="#E67E3C" />
      </div>

      <Card variant="bordered">
        <CardBody>
          <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
            Monthly breakdown ({household} {household === 1 ? 'person' : 'people'})
          </div>
          <table className="mt-4 w-full text-sm">
            <thead>
              <tr className="text-left text-muted">
                <th className="pb-2">Category</th>
                <th className="pb-2 text-right">{ukCityOptions.find((o) => o.value === uk)?.label}</th>
                <th className="pb-2 text-right">{targetCityOptions.find((o) => o.value === target)?.label}</th>
                <th className="pb-2 text-right">Diff</th>
              </tr>
            </thead>
            <tbody>
              {(
                [
                  ['Rent (2-bed)', ukProfile.rent2bed, tgtProfile.rent2bed],
                  ['Utilities', ukProfile.utilities, tgtProfile.utilities],
                  ['Groceries', ukProfile.groceries * household / 2, tgtProfile.groceries * household / 2],
                  ['Eating out', ukProfile.eatingOut * household / 2, tgtProfile.eatingOut * household / 2],
                  ['Transport', ukProfile.transport * household / 2, tgtProfile.transport * household / 2],
                  ['Healthcare', ukProfile.healthcare * household / 2, tgtProfile.healthcare * household / 2],
                  ['Leisure', ukProfile.leisure, tgtProfile.leisure],
                ] as [string, number, number][]
              ).map(([label, u, t]) => (
                <tr key={label} className="border-t border-border">
                  <td className="py-2 text-ink">{label}</td>
                  <td className="py-2 text-right">{formatGBP(Math.round(u))}</td>
                  <td className="py-2 text-right">{formatGBP(Math.round(t))}</td>
                  <td className={`py-2 text-right font-semibold ${u > t ? 'text-success' : 'text-gibraltar'}`}>
                    {u > t ? '−' : '+'}
                    {formatGBP(Math.abs(Math.round(u - t)))}
                  </td>
                </tr>
              ))}
              <tr className="border-t-2 border-ink/30 font-semibold">
                <td className="py-2">Total monthly</td>
                <td className="py-2 text-right">{formatGBP(Math.round(ukTotal))}</td>
                <td className="py-2 text-right">{formatGBP(Math.round(tgtTotal))}</td>
                <td className={`py-2 text-right ${monthlyDiff > 0 ? 'text-success' : 'text-gibraltar'}`}>
                  {monthlyDiff > 0 ? '−' : '+'}
                  {formatGBP(Math.abs(Math.round(monthlyDiff)))}
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 text-xs text-faint">
            Estimates based on Numbeo 2026, Eurostat consumer price indices, and ONS UK statistics.
            Healthcare row reflects supplemental private cover typical for British expats.
          </p>
        </CardBody>
      </Card>
    </div>
  );
}

function sumProfile(p: CityProfile, household: number): number {
  return (
    p.rent2bed +
    p.utilities +
    (p.groceries * household) / 2 +
    (p.eatingOut * household) / 2 +
    (p.transport * household) / 2 +
    (p.healthcare * household) / 2 +
    p.leisure
  );
}

function ResultStat({
  title,
  value,
  subtitle,
  accent = '#0F1827',
}: {
  title: string;
  value: string;
  subtitle?: string;
  accent?: string;
}) {
  return (
    <div className="rounded-card border border-border bg-white p-5">
      <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">{title}</div>
      <div className="display mt-2 text-[34px] font-semibold leading-none tracking-tightest" style={{ color: accent }}>
        {value}
      </div>
      {subtitle && <div className="mt-2 text-xs text-muted">{subtitle}</div>}
    </div>
  );
}
