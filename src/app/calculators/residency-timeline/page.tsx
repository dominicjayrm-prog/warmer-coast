import type { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { ResidencyTimelineCalc } from './ResidencyTimelineCalc';

export const metadata: Metadata = {
  title: 'Residency timeline calculator | When you become tax resident',
  description:
    'When does Spain/Portugal/Gibraltar consider you tax resident? Day-counting calculator with the 183-day rule and centre of interests.',
};

export default function Page() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-content max-w-4xl">
        <Badge tone="sea" uppercase>Calculator</Badge>
        <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
          Residency timeline calculator
        </h1>
        <p className="mt-3 text-[18px] text-muted">
          When the 183-day clock starts, when it stops, and when your tax residency formally
          shifts.
        </p>
        <div className="mt-8">
          <ResidencyTimelineCalc />
        </div>
      </div>
    </section>
  );
}
