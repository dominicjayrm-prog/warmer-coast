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

// Gibraltar HEPSS: caps liability on first £118k of income at sliding rates, ~£44k flat ceiling.
export function gibraltarHepssTax(income: number): number {
  const capped = Math.min(income, 118_000);
  if (capped <= 17_000) return capped * 0.16;
  if (capped <= 25_000) return 17_000 * 0.16 + (capped - 17_000) * 0.19;
  return 17_000 * 0.16 + 8_000 * 0.19 + (capped - 25_000) * 0.25;
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
      country_ = gibraltarHepssTax(income);
      label = 'HEPSS (Gibraltar)';
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
