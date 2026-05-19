'use client';

import { useMemo, useState } from 'react';
import { Card, CardBody } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

type Factor = 'tax' | 'cost' | 'visa' | 'weather' | 'english' | 'healthcare' | 'family';

const factorMeta: Record<Factor, { label: string; description: string }> = {
  tax: { label: 'Tax', description: 'How light tax is for a typical British mover' },
  cost: { label: 'Cost of living', description: 'Affordability vs UK reference cities' },
  visa: { label: 'Visa ease', description: 'How accessible the visa routes are for Brits' },
  weather: { label: 'Weather', description: 'Sunshine and mild winter' },
  english: { label: 'English use', description: 'Practical day-to-day use of English' },
  healthcare: { label: 'Healthcare', description: 'Quality and access for residents' },
  family: { label: 'Family-friendliness', description: 'Schools, family infrastructure, safety' },
};

// Scores 1-5 per country per factor.
const scores: Record<'spain' | 'portugal' | 'gibraltar', Record<Factor, number>> = {
  spain: { tax: 4, cost: 4, visa: 3, weather: 5, english: 3, healthcare: 4, family: 4 },
  portugal: { tax: 3, cost: 4, visa: 4, weather: 4, english: 4, healthcare: 3, family: 4 },
  gibraltar: { tax: 5, cost: 1, visa: 2, weather: 5, english: 5, healthcare: 3, family: 3 },
};

const countryStyle: Record<'spain' | 'portugal' | 'gibraltar', { color: string; soft: string; flag: string; name: string }> = {
  spain: { color: '#E67E3C', soft: '#FFE9D5', flag: '🇪🇸', name: 'Spain' },
  portugal: { color: '#2E8585', soft: '#D7ECEA', flag: '🇵🇹', name: 'Portugal' },
  gibraltar: { color: '#9C3848', soft: '#F4DCE0', flag: '🇬🇮', name: 'Gibraltar' },
};

export function CompareCountries() {
  const [weights, setWeights] = useState<Record<Factor, number>>({
    tax: 3,
    cost: 3,
    visa: 2,
    weather: 2,
    english: 2,
    healthcare: 2,
    family: 2,
  });

  const totals = useMemo(() => {
    const result: Record<keyof typeof countryStyle, number> = { spain: 0, portugal: 0, gibraltar: 0 };
    (Object.keys(scores) as (keyof typeof countryStyle)[]).forEach((c) => {
      let sum = 0;
      let maxSum = 0;
      (Object.keys(weights) as Factor[]).forEach((f) => {
        sum += scores[c][f] * weights[f];
        maxSum += 5 * weights[f];
      });
      result[c] = maxSum > 0 ? Math.round((sum / maxSum) * 100) : 0;
    });
    return result;
  }, [weights]);

  const ranked = (Object.keys(totals) as (keyof typeof countryStyle)[])
    .map((c) => ({ country: c, score: totals[c] }))
    .sort((a, b) => b.score - a.score);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
      <Card variant="bordered">
        <CardBody>
          <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
            What matters to you?
          </div>
          <p className="mt-2 text-sm text-muted">Drag each slider to weight what matters in your move.</p>
          <div className="mt-5 flex flex-col gap-4">
            {(Object.keys(factorMeta) as Factor[]).map((f) => (
              <div key={f}>
                <div className="flex items-baseline justify-between">
                  <label htmlFor={`w-${f}`} className="text-sm font-semibold text-ink">
                    {factorMeta[f].label}
                  </label>
                  <span className="text-xs text-muted">{weights[f]}</span>
                </div>
                <input
                  id={`w-${f}`}
                  type="range"
                  min={0}
                  max={5}
                  step={1}
                  value={weights[f]}
                  onChange={(e) => setWeights({ ...weights, [f]: Number(e.target.value) })}
                  className="w-full accent-warm"
                />
                <p className="text-[11px] text-faint">{factorMeta[f].description}</p>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      <div className="flex flex-col gap-4">
        <Card variant="elevated">
          <CardBody>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Best fit for you
            </div>
            <div className="mt-4 flex flex-col gap-3">
              {ranked.map((r, i) => {
                const m = countryStyle[r.country];
                return (
                  <div
                    key={r.country}
                    className="rounded-card border border-border p-4"
                    style={{ background: i === 0 ? m.soft : '#fff' }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{m.flag}</span>
                        <span className="display text-lg font-semibold text-ink">{m.name}</span>
                        {i === 0 && <Badge tone="warm">Best fit</Badge>}
                      </div>
                      <span className="display text-2xl font-semibold" style={{ color: m.color }}>
                        {r.score}
                      </span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-pill bg-border/60">
                      <div
                        className="h-full rounded-pill transition-all"
                        style={{ width: `${r.score}%`, background: m.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardBody>
        </Card>

        <Card variant="bordered">
          <CardBody>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Per-factor breakdown
            </div>
            <table className="mt-3 w-full text-sm">
              <thead>
                <tr className="text-left text-muted">
                  <th></th>
                  <th className="text-right">🇪🇸</th>
                  <th className="text-right">🇵🇹</th>
                  <th className="text-right">🇬🇮</th>
                </tr>
              </thead>
              <tbody>
                {(Object.keys(factorMeta) as Factor[]).map((f) => (
                  <tr key={f} className="border-t border-border">
                    <td className="py-1.5 text-ink">{factorMeta[f].label}</td>
                    <td className="py-1.5 text-right">{'★'.repeat(scores.spain[f])}</td>
                    <td className="py-1.5 text-right">{'★'.repeat(scores.portugal[f])}</td>
                    <td className="py-1.5 text-right">{'★'.repeat(scores.gibraltar[f])}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
