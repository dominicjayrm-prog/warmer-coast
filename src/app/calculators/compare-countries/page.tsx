import type { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { CompareCountries } from '@/components/calculators/CompareCountries';
import { RelatedResources } from '@/components/marketing/RelatedResources';
import { NewsletterCapture } from '@/components/marketing/NewsletterCapture';

export const metadata: Metadata = {
  title: 'Spain vs Portugal vs Gibraltar | Decide where to move',
  description:
    'Interactive comparison: tax, cost, visa, weather, English-speaking, healthcare, family-friendliness. Weight what matters and see your best fit.',
  alternates: { canonical: '/calculators/compare-countries' },
  openGraph: { url: '/calculators/compare-countries' },
};

export default function Page() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-content max-w-5xl">
        <Badge tone="warm" uppercase>Decision tool</Badge>
        <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
          Spain vs Portugal vs Gibraltar
        </h1>
        <p className="mt-3 text-[18px] text-muted">
          Slide the factors that matter for your move. We&apos;ll show your best fit. Saved in
          your browser, comes back next time you visit.
        </p>

        <div className="mt-10">
          <CompareCountries />
        </div>

        <div className="mt-8 rounded-card border border-border bg-white p-6">
          <h2 className="display text-xl font-semibold tracking-tight text-ink">Email yourself the comparison</h2>
          <p className="mt-2 text-sm text-muted">
            Your weighted result plus the threshold table behind it — and updates when the 2026 figures move.
          </p>
          <div className="mt-4">
            <NewsletterCapture source="calculator_compare_countries" cta="Send my comparison" />
          </div>
        </div>
      </div>

      <RelatedResources
        tone="surface"
        heading="Or go deeper on a specific pair"
        subheading="The interactive comparator above weighs all three. The head-to-head pages below tell you the verdict — sourced, dimension by dimension."
        items={[
          { kind: 'Compare', href: '/spain-vs-portugal', label: 'Spain vs Portugal — full comparison', blurb: 'Beckham Law vs IFICI, NLV vs D7, wealth tax, citizenship, English coverage.' },
          { kind: 'Compare', href: '/spain-vs-gibraltar', label: 'Spain vs Gibraltar — full comparison', blurb: 'The income tier where Cat 2 starts beating Beckham Law.' },
          { kind: 'Compare', href: '/portugal-vs-gibraltar', label: 'Portugal vs Gibraltar — full comparison', blurb: 'IFICI vs Cat 2, D7 vs £2m net worth, EU citizenship vs sterling-zone banking.' },
          { kind: 'Reference', href: '/thresholds', label: '2026 thresholds, sourced', blurb: 'Every income, tax and visa figure across all three countries with primary-source links.' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Spain vs Portugal vs Gibraltar comparator',
            description:
              'Side-by-side comparison of Spain, Portugal and Gibraltar for British movers: tax, cost of living, visa difficulty, English coverage, schools.',
            url: 'https://warmercoast.com/calculators/compare-countries',
            applicationCategory: 'LifestyleApplication',
            operatingSystem: 'Web',
            isAccessibleForFree: true,
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
            inLanguage: 'en-GB',
            audience: { '@type': 'PeopleAudience', geographicArea: 'United Kingdom' },
          }),
        }}
      />
    </section>
  );
}
