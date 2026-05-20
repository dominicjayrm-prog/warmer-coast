import type { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { PropertyTaxCalc } from './PropertyTaxCalc';

export const metadata: Metadata = {
  title: 'Iberian property purchase tax calculator | IBI, ITP, IMI',
  description: 'Estimate property purchase tax and ongoing annual property tax in Spain, Portugal and Gibraltar. ITP, IVA, IBI, IMI, IMT, stamp duty.',
  alternates: { canonical: '/calculators/property-tax' },
};

export default function Page() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-content max-w-4xl">
        <Badge tone="warm" uppercase>Calculator</Badge>
        <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
          Property purchase tax estimator
        </h1>
        <p className="mt-3 text-[18px] text-muted">
          The property-side surprises: transfer tax, VAT on new builds, annual property tax. UK
          buyers consistently underestimate these.
        </p>
        <div className="mt-8">
          <PropertyTaxCalc />
        </div>
      </div>
    </section>
  );
}
