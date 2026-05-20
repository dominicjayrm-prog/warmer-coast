import type { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { PensionTransferCalc } from './PensionTransferCalc';

export const metadata: Metadata = {
  title: 'UK pension transfer estimator for Iberia movers',
  description: 'Estimate QROPS/OTS impact, lifetime allowance, and the right pension structure for moving from the UK to Spain, Portugal or Gibraltar.',
  alternates: { canonical: '/calculators/pension-transfer' },
};

export default function Page() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-content max-w-4xl">
        <Badge tone="sea" uppercase>Calculator</Badge>
        <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
          UK pension transfer estimator
        </h1>
        <p className="mt-3 text-[18px] text-muted">
          A rough sketch of UK pension drawdown vs QROPS, with Iberian tax treatment overlaid.
          For sense-checking only, not advice.
        </p>

        <div className="mt-8">
          <PensionTransferCalc />
        </div>
      </div>
    </section>
  );
}
