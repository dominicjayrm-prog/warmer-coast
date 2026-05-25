export type Country = 'spain' | 'portugal' | 'gibraltar';

export function ukIncomeTax(income: number): number {
  if (income <= 12_570) return 0;
  if (income <= 50_270) return (income - 12_570) * 0.2;
  if (income <= 125_140) return 7_540 + (income - 50_270) * 0.4;
  return 37_088 + (income - 125_140) * 0.45;
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

export function compareCountry(income: number, country: Country): CalcResult {
  const uk = ukIncomeTax(income);
  let country_ = 0;
  let label = '';
  switch (country) {
    case 'spain':
      country_ = beckhamLawTax(income);
      label = 'Beckham Law (Spain)';
      break;
    case 'portugal':
      country_ = portugalIficiTax(income);
      label = 'IFICI / NHR 2.0 (Portugal)';
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
