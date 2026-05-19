'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Card, CardBody } from '@/components/ui/Card';
import { Slider } from '@/components/ui/Input';
import { compareCountry, formatGBP, type Country } from '@/lib/tax';
import { COUNTRY_META } from '@/lib/site';
import { cn } from '@/lib/cn';

interface Props {
  initialIncome?: number;
  initialCountry?: Country;
  variant?: 'hero' | 'embedded';
}

export function LiveTaxCalculator({
  initialIncome = 65_000,
  initialCountry = 'spain',
  variant = 'hero',
}: Props) {
  const [income, setIncome] = useState(initialIncome);
  const [country, setCountry] = useState<Country>(initialCountry);

  const result = useMemo(() => compareCountry(income, country), [income, country]);
  const sixYears = result.yearlySavings * 6;
  const accent = COUNTRY_META[country].accent;
  const accentSoft = COUNTRY_META[country].accentSoft;

  return (
    <Card variant="elevated" className="relative overflow-visible">
      <CardBody className="relative">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Live tax-saving estimate
            </div>
            <div className="display mt-1 text-[20px] font-semibold tracking-tight text-ink">
              How much would you save?
            </div>
          </div>
          <div
            className="hidden sm:inline-flex items-center gap-1.5 rounded-pill px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em]"
            style={{ background: accentSoft, color: accent }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
            Estimate
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-5">
            <Slider
              label="UK income (gross)"
              value={income}
              min={20000}
              max={200000}
              step={1000}
              accent={accent}
              onChange={(e) => setIncome(Number(e.target.value))}
              valueDisplay={<span className="display text-[22px]">{formatGBP(income)}</span>}
            />

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                Destination
              </div>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {(Object.keys(COUNTRY_META) as Country[]).map((c) => {
                  const meta = COUNTRY_META[c];
                  const active = country === c;
                  return (
                    <button
                      type="button"
                      key={c}
                      onClick={() => setCountry(c)}
                      className={cn(
                        'flex flex-col items-center gap-1 rounded-card border px-3 py-3 transition-all',
                        active
                          ? 'border-transparent text-ink shadow-card'
                          : 'border-border text-muted hover:border-ink/30',
                      )}
                      style={
                        active
                          ? { background: meta.accentSoft, borderColor: meta.accent }
                          : undefined
                      }
                      aria-pressed={active}
                    >
                      <span className="text-xl" aria-hidden>{meta.flag}</span>
                      <span className="text-[13px] font-semibold">{meta.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className="relative flex flex-col justify-between gap-3 rounded-card p-5"
            style={{ background: accentSoft }}
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: accent }}>
                You save · per year
              </div>
              <div className="display mt-1 text-[44px] font-semibold leading-none tracking-tightest text-ink">
                {formatGBP(result.yearlySavings)}
              </div>
              <div className="mt-1 text-xs text-muted">
                {result.schemeLabel}
              </div>
            </div>
            <div className="border-t border-ink/10 pt-3 text-xs text-ink/80">
              <div className="flex justify-between">
                <span>UK tax</span>
                <span className="font-semibold">{formatGBP(result.ukTax)}</span>
              </div>
              <div className="flex justify-between">
                <span>Scheme tax</span>
                <span className="font-semibold">{formatGBP(result.countryTax)}</span>
              </div>
              <div className="mt-2 flex justify-between pt-2 border-t border-ink/10">
                <span>Over 6 years</span>
                <span className="font-semibold">{formatGBP(sixYears)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          <Link
            href={`/playbook/${country}`}
            className="inline-flex items-center gap-2 rounded-pill bg-ink px-5 py-2.5 text-[14px] font-semibold text-white shadow-card hover:-translate-y-px transition-all"
          >
            See the {COUNTRY_META[country].name} playbook
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/calculators/beckham-law"
            className="text-[13px] font-semibold text-muted underline-offset-4 hover:text-ink hover:underline"
          >
            Full calculator with assumptions
          </Link>
        </div>

        {variant === 'hero' && (
          <p className="mt-4 text-[11px] leading-relaxed text-faint">
            Estimate only, simplified bands, ignores allowances and social security. Real numbers
            depend on residence status, employment vs self-employed, family. The full playbook walks
            you through the actual calculation with worked examples.
          </p>
        )}
      </CardBody>
    </Card>
  );
}
