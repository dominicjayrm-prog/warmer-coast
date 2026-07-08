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

// Open each destination at an income where its scheme genuinely beats UK
// PAYE — otherwise the hero of the site reads "You save £0" and looks broken:
//  - Beckham's flat 24% only undercuts UK tax above ≈ £79k (and shines above
//    £100k where the UK personal-allowance taper bites).
//  - IFICI's 20% crosses earlier but the same logic applies.
//  - Cat 2's £37,000 floor needs ≈ £125k+ to make sense.
// Below-crossover incomes get an honest explainer instead of a bare £0.
const DEFAULT_INCOME: Record<Country, number> = {
  spain: 95_000,
  portugal: 95_000,
  gibraltar: 150_000,
};

export function LiveTaxCalculator({
  initialIncome,
  initialCountry = 'spain',
  variant = 'hero',
}: Props) {
  const [income, setIncome] = useState(initialIncome ?? DEFAULT_INCOME[initialCountry]);
  const [country, setCountry] = useState<Country>(initialCountry);
  const [touched, setTouched] = useState(initialIncome != null);
  const [ificiQualifies, setIficiQualifies] = useState(true);

  const result = useMemo(
    () =>
      compareCountry(income, country, {
        portugalRegime: ificiQualifies ? 'ifici' : 'standard',
      }),
    [income, country, ificiQualifies],
  );
  const sixYears = result.yearlySavings * 6;
  const accent = COUNTRY_META[country].accent;
  const accentSoft = COUNTRY_META[country].accentSoft;

  function pickCountry(c: Country) {
    setCountry(c);
    // If the user hasn't set their own income yet, snap to the destination's
    // sensible default so each scheme opens in its designed range.
    if (!touched) setIncome(DEFAULT_INCOME[c]);
  }

  const belowCrossover = result.yearlySavings === 0;
  const crossoverNote: Record<Country, string> = {
    spain:
      'At this income the Beckham flat 24% costs more than UK PAYE — the regime pays above roughly £80k of salary (strongly above £100k, where the UK personal-allowance taper bites), or when you have foreign investment income it exempts entirely. Slide the income up to see the crossover.',
    portugal:
      'At this income the IFICI flat 20% is close to (or above) UK PAYE — the regime pays above roughly £60k, and the foreign-income exemption can matter more than the rate. Slide the income up to see the crossover.',
    gibraltar:
      'Cat 2 carries a £37,000 minimum annual tax — it is built for incomes above ~£125k (and £2m+ net worth), where the £42,380 ceiling turns into a huge advantage. Below that level, Spain or Portugal usually wins: slide the income up or switch destination to see the crossover.',
  };

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
              max={300000}
              step={1000}
              accent={accent}
              onChange={(e) => {
                setIncome(Number(e.target.value));
                setTouched(true);
              }}
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
                      onClick={() => pickCountry(c)}
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

            {country === 'portugal' && (
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                  Do you qualify for IFICI?
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setIficiQualifies(true)}
                    className={cn(
                      'rounded-card border px-3 py-2 text-[13px] font-semibold transition-all',
                      ificiQualifies
                        ? 'border-sea bg-sea/10 text-ink'
                        : 'border-border text-muted hover:border-ink/30',
                    )}
                    aria-pressed={ificiQualifies}
                  >
                    Yes — qualifying activity
                  </button>
                  <button
                    type="button"
                    onClick={() => setIficiQualifies(false)}
                    className={cn(
                      'rounded-card border px-3 py-2 text-[13px] font-semibold transition-all',
                      !ificiQualifies
                        ? 'border-sea bg-sea/10 text-ink'
                        : 'border-border text-muted hover:border-ink/30',
                    )}
                    aria-pressed={!ificiQualifies}
                  >
                    No — standard IRS
                  </button>
                </div>
                <p className="mt-1.5 text-[11px] leading-relaxed text-faint">
                  IFICI&apos;s 20% flat rate is activity-gated (research, certified startups,
                  qualifying sectors). Pensions never qualify.
                </p>
              </div>
            )}
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

        {belowCrossover && (
          <p className="mt-3 rounded-card border border-warning/40 bg-warning/5 px-3 py-2 text-[12px] leading-relaxed text-ink/80">
            {crossoverNote[country]}
          </p>
        )}

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
            Estimate only. UK side includes the personal-allowance taper; scheme side is the
            headline rate and ignores allowances and social security. Real numbers depend on
            residence status, employment vs self-employed, family. The full playbook walks you
            through the actual calculation with worked examples.
          </p>
        )}
      </CardBody>
    </Card>
  );
}
