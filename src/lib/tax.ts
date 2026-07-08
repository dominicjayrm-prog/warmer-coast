export type Country = 'spain' | 'portugal' | 'gibraltar';

// UK income tax 2026/27 (rUK bands) including the personal-allowance taper:
// PA of £12,570 withdrawn £1 per £2 of income over £100,000 (gone at
// £125,140), which produces the real 60% effective zone. Band widths are
// measured on taxable income; the 40% band ends where income hits £125,140.
export function ukIncomeTax(income: number): number {
  if (income <= 0) return 0;
  const pa = Math.max(0, 12_570 - Math.max(0, (income - 100_000) / 2));
  const taxable = Math.max(0, income - pa);
  const basicWidth = 37_700;
  const higherWidth = Math.max(0, 125_140 - pa - basicWidth);
  const basic = Math.min(taxable, basicWidth);
  const higher = Math.min(Math.max(taxable - basicWidth, 0), higherWidth);
  const additional = Math.max(taxable - basicWidth - higherWidth, 0);
  return basic * 0.2 + higher * 0.4 + additional * 0.45;
}

// Beckham Law: 24% flat on UK-sourced employment income up to £600k (Spain only).
export function beckhamLawTax(income: number): number {
  const capped = Math.min(income, 600_000);
  const excess = Math.max(0, income - 600_000);
  return capped * 0.24 + excess * 0.47;
}

// Portugal IFICI (NHR 2.0) approximation: 20% flat on qualifying employment income.
export function portugalIficiTax(income: number): number {
  return income * 0.2;
}

// Standard Spanish IRPF general scale (state + typical regional half, 2026
// approximation): 19/24/30/37/45/47. Personal minimum modelled as a 19%
// credit on €5,550. Used for pension/general income where Beckham does not
// apply. Thresholds are € figures used 1:1 against GBP inputs — a slightly
// conservative simplification, disclosed in the tools that use it.
export function spainGeneralTax(income: number): number {
  if (income <= 0) return 0;
  const bands: [number, number][] = [
    [12_450, 0.19],
    [20_200, 0.24],
    [35_200, 0.3],
    [60_000, 0.37],
    [300_000, 0.45],
    [Infinity, 0.47],
  ];
  let tax = 0;
  let prev = 0;
  for (const [cap, rate] of bands) {
    if (income > prev) tax += (Math.min(income, cap) - prev) * rate;
    prev = cap;
    if (income <= cap) break;
  }
  const personalCredit = 5_550 * 0.19;
  return Math.max(0, tax - personalCredit);
}

// Standard Portuguese IRS (very rough banded approximation, 2026 brackets).
export function portugalStandardTax(income: number): number {
  if (income <= 8_059) return income * 0.13;
  if (income <= 12_160) return 8_059 * 0.13 + (income - 8_059) * 0.165;
  if (income <= 17_233) return 8_059 * 0.13 + 4_101 * 0.165 + (income - 12_160) * 0.22;
  if (income <= 22_306) return 8_059 * 0.13 + 4_101 * 0.165 + 5_073 * 0.22 + (income - 17_233) * 0.25;
  if (income <= 28_400)
    return 8_059 * 0.13 + 4_101 * 0.165 + 5_073 * 0.22 + 5_073 * 0.25 + (income - 22_306) * 0.32;
  if (income <= 41_629)
    return (
      8_059 * 0.13 +
      4_101 * 0.165 +
      5_073 * 0.22 +
      5_073 * 0.25 +
      6_094 * 0.32 +
      (income - 28_400) * 0.355
    );
  if (income <= 44_987)
    return (
      8_059 * 0.13 +
      4_101 * 0.165 +
      5_073 * 0.22 +
      5_073 * 0.25 +
      6_094 * 0.32 +
      13_229 * 0.355 +
      (income - 41_629) * 0.435
    );
  if (income <= 83_696)
    return (
      8_059 * 0.13 +
      4_101 * 0.165 +
      5_073 * 0.22 +
      5_073 * 0.25 +
      6_094 * 0.32 +
      13_229 * 0.355 +
      3_358 * 0.435 +
      (income - 44_987) * 0.45
    );
  return (
    8_059 * 0.13 +
    4_101 * 0.165 +
    5_073 * 0.22 +
    5_073 * 0.25 +
    6_094 * 0.32 +
    13_229 * 0.355 +
    3_358 * 0.435 +
    38_709 * 0.45 +
    (income - 83_696) * 0.48
  );
}

// Gibraltar GIBS (Gross Income Based System) — the rate structure used to
// compute tax for Cat 2 and HEPSS holders. Bands per the EY Gibraltar tax
// facts 2025/26 (assessment year 1 July 2025 – 30 June 2026) and the
// Gibraltar Income Tax Office personal tax rate publications. Note that
// the top band on income above £105,000 tapers DOWN from 28% to 25% — this
// is deliberate, not a typo, and is how the published EY tax facts express
// it. For incomes ≤ £25,000 a different lower-band schedule applies; this
// function uses the >£25,000 schedule because the HNWI cases that drive
// the calculator (Cat 2 / HEPSS) sit comfortably above that threshold.
function gibraltarGibsTaxRaw(income: number): number {
  if (income <= 0) return 0;
  if (income <= 17_000) return income * 0.16;
  if (income <= 25_000) return 17_000 * 0.16 + (income - 17_000) * 0.19;
  if (income <= 40_000) return 17_000 * 0.16 + 8_000 * 0.19 + (income - 25_000) * 0.25;
  if (income <= 105_000) {
    return 17_000 * 0.16 + 8_000 * 0.19 + 15_000 * 0.25 + (income - 40_000) * 0.28;
  }
  return (
    17_000 * 0.16 + 8_000 * 0.19 + 15_000 * 0.25 + 65_000 * 0.28 + (income - 105_000) * 0.25
  );
}

// Gibraltar Category 2: assessable worldwide income capped at £118,000, with
// a minimum annual tax of £37,000 and a maximum of £42,380 (per the
// Gibraltar Income Tax Office 2025/26 publication). The min and max are
// hard regulatory bounds, not just outputs of the GIBS schedule.
export function gibraltarCat2Tax(income: number): number {
  const gibs = gibraltarGibsTaxRaw(Math.min(income, 118_000));
  return Math.min(Math.max(gibs, 37_000), 42_380);
}

// Gibraltar HEPSS: assessable income capped at £160,000 under GIBS, yielding
// a maximum tax of £39,940 (verified against EY Gibraltar tax facts
// 2025/26 — the figure they publish). No minimum tax floor.
export function gibraltarHepssTax(income: number): number {
  return gibraltarGibsTaxRaw(Math.min(income, 160_000));
}

export interface CalcResult {
  ukTax: number;
  countryTax: number;
  schemeLabel: string;
  yearlySavings: number;
  effectiveRate: { uk: number; country: number };
}

export interface CompareOptions {
  /** Portugal only: IFICI is activity-gated — non-qualifiers pay standard IRS. */
  portugalRegime?: 'ifici' | 'standard';
}

export function compareCountry(income: number, country: Country, opts?: CompareOptions): CalcResult {
  const uk = ukIncomeTax(income);
  let country_ = 0;
  let label = '';
  switch (country) {
    case 'spain':
      country_ = beckhamLawTax(income);
      label = 'Beckham Law (Spain)';
      break;
    case 'portugal':
      if (opts?.portugalRegime === 'standard') {
        country_ = portugalStandardTax(income);
        label = 'Standard IRS (Portugal)';
      } else {
        country_ = portugalIficiTax(income);
        label = 'IFICI / NHR 2.0 (Portugal)';
      }
      break;
    case 'gibraltar':
      // Cat 2 is the route most British movers use (HNW residency) — HEPSS
      // is the narrower employer-sponsored specialist route. The calculator
      // is generic-purpose, so default to Cat 2 mechanics.
      country_ = gibraltarCat2Tax(income);
      label = 'Category 2 (Gibraltar)';
      break;
  }
  return {
    ukTax: Math.round(uk),
    countryTax: Math.round(country_),
    schemeLabel: label,
    yearlySavings: Math.max(0, Math.round(uk - country_)),
    effectiveRate: {
      uk: income > 0 ? uk / income : 0,
      country: income > 0 ? country_ / income : 0,
    },
  };
}

export function formatGBP(n: number, opts?: { withPence?: boolean }): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: opts?.withPence ? 2 : 0,
    minimumFractionDigits: opts?.withPence ? 2 : 0,
  }).format(n);
}
