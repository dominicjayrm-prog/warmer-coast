import type { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { CompareCountries } from '@/components/calculators/CompareCountries';

export const metadata: Metadata = {
  title: 'Spain vs Portugal vs Gibraltar | Decide where to move',
  description:
    'Interactive comparison: tax, cost, visa, weather, English-speaking, healthcare, family-friendliness. Weight what matters and see your best fit.',
  alternates: { canonical: '/calculators/compare-countries' },
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
      </div>
    </section>
  );
}
