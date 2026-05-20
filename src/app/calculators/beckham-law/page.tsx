import type { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { LiveTaxCalculator } from '@/components/calculators/LiveTaxCalculator';
import { NewsletterCapture } from '@/components/marketing/NewsletterCapture';

export const metadata: Metadata = {
  title: 'Beckham Law calculator | UK vs Spain tax saving 2026',
  description:
    'Interactive Beckham Law calculator for British movers to Spain. Compare UK tax to the 24% Spanish impatriate regime, see annual and 6-year savings.',
  alternates: { canonical: '/calculators/beckham-law' },
};

export default function Page() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-content max-w-3xl">
        <Badge tone="warm" uppercase>Calculator</Badge>
        <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
          Beckham Law calculator
        </h1>
        <p className="mt-3 text-[18px] text-muted">
          Estimate how much UK tax you would save under Spain&apos;s impatriate regime. 24% flat
          on qualifying employment income up to €600,000 for six years.
        </p>

        <div className="mt-8">
          <LiveTaxCalculator variant="embedded" initialCountry="spain" />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="rounded-card border border-border bg-surface p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Assumptions
            </div>
            <ul className="mt-2 flex flex-col gap-1 text-sm text-muted">
              <li>UK tax: standard 2026 bands and allowances</li>
              <li>Spanish tax: 24% flat on first €600,000</li>
              <li>Excludes social security contributions</li>
              <li>Excludes deductions and family allowances</li>
            </ul>
          </div>
          <div className="rounded-card border border-border bg-surface p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Sources
            </div>
            <ul className="mt-2 flex flex-col gap-1 text-sm">
              <li>
                <a
                  href="https://www.gov.uk/income-tax-rates"
                  className="underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  gov.uk · UK income tax rates
                </a>
              </li>
              <li>
                <a
                  href="https://sede.agenciatributaria.gob.es/"
                  className="underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agencia Tributaria · régimen impatriados
                </a>
              </li>
              <li>BOE · Ley 35/2006 art. 93</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-card border border-border bg-white p-6">
          <h2 className="display text-xl font-semibold tracking-tight text-ink">Save your result</h2>
          <p className="mt-2 text-sm text-muted">
            Drop your email and we&apos;ll send you a snapshot plus a free 14-page Spain Starter
            Checklist.
          </p>
          <div className="mt-4">
            <NewsletterCapture source="calculator_beckham_law" cta="Send my result" />
          </div>
        </div>
      </div>
    </section>
  );
}
