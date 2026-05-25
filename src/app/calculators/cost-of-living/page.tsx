import type { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { CostOfLivingCalculator } from '@/components/calculators/CostOfLivingCalculator';
import { NewsletterCapture } from '@/components/marketing/NewsletterCapture';
import { RelatedResources } from '@/components/marketing/RelatedResources';

export const metadata: Metadata = {
  title: 'Cost of living comparator | UK vs Spain, Portugal, Gibraltar 2026',
  description:
    'Compare monthly cost of living between any UK city and 10 Iberian destinations. Real 2026 numbers, sourced. See annual and 5-year savings.',
  alternates: { canonical: '/calculators/cost-of-living' },
  openGraph: { url: '/calculators/cost-of-living' },
};

export default function Page() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-content max-w-4xl">
        <Badge tone="sea" uppercase>Calculator</Badge>
        <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
          UK vs Iberia cost of living
        </h1>
        <p className="mt-3 text-[18px] text-muted">
          Real 2026 numbers across 10 Iberian destinations. Rent, utilities, groceries, eating
          out, transport, healthcare, leisure. Sourced from Numbeo, Eurostat, ONS.
        </p>

        <div className="mt-8">
          <CostOfLivingCalculator />
        </div>

        <div className="mt-10 rounded-card border border-border bg-white p-6">
          <h2 className="display text-xl font-semibold tracking-tight text-ink">Save your result</h2>
          <p className="mt-2 text-sm text-muted">
            Drop your email, we&apos;ll send you the full breakdown plus the Spain Starter
            Checklist (PDF).
          </p>
          <div className="mt-4">
            <NewsletterCapture source="calculator_col" cta="Send my breakdown" />
          </div>
        </div>
      </div>

      <RelatedResources
        tone="surface"
        heading="The story behind each city number"
        subheading="The comparator is the short answer. These are the city-level guides that explain why."
        items={[
          { kind: 'Deep dive', href: '/spain/cost-of-living', label: 'Spain cost of living for British movers', blurb: 'Madrid, Barcelona, Valencia, Sevilla, Málaga — what your monthly outgoings actually look like.' },
          { kind: 'Deep dive', href: '/portugal/cost-of-living', label: 'Portugal cost of living for British movers', blurb: 'Lisbon, Porto, Algarve — and what changed after the 2022-2024 rental surge.' },
          { kind: 'Calculator', href: '/calculators/school-cost', label: 'International school cost estimator', blurb: 'The single biggest variable in family-mover budgets — solved with real fee data.' },
          { kind: 'Calculator', href: '/calculators/property-tax', label: 'Iberia property purchase tax', blurb: 'IMT, IMI, ITP, IVA, AJD — the tax stack on buying a home, broken out per country.' },
          { kind: 'Reference', href: '/thresholds', label: '2026 income thresholds, sourced', blurb: 'The minimum income figures your visa requires — pair these with your cost estimate.' },
        ]}
      />
    </section>
  );
}
