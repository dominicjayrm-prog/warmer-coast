import type { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { SchoolCostCalc } from './SchoolCostCalc';

export const metadata: Metadata = {
  title: 'International school cost estimator | Iberia for British families',
  description: 'Estimate annual international school fees across Costa del Sol, Algarve, Gibraltar, Madrid, Barcelona, Lisbon. British, American, IB.',
  alternates: { canonical: '/calculators/school-cost' },
};

export default function Page() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-content max-w-4xl">
        <Badge tone="warm" uppercase>Calculator</Badge>
        <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
          International school cost estimator
        </h1>
        <p className="mt-3 text-[18px] text-muted">
          Annual fees for British, American and IB schools across Iberia. Costa del Sol, Algarve,
          Gibraltar, Madrid, Barcelona, Lisbon.
        </p>
        <div className="mt-8">
          <SchoolCostCalc />
        </div>
      </div>
    </section>
  );
}
