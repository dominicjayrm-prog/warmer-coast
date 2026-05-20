import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Portugal cost of living 2026 for Brits | Algarve, Lisbon, Porto',
  description: 'Real Portuguese cost of living in 2026 across the Algarve, Lisbon, Porto, Coimbra. Sourced numbers, benchmarked against UK reference cities.',
  alternates: { canonical: '/portugal/cost-of-living' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="portugal"
      eyebrow="Cost of living"
      h1="What Portugal actually costs in 2026"
      intro="Lisbon caught up with mid-tier UK cities after the post-2020 expat wave. The Algarve has bifurcated between premium coast and reasonable inland. Porto remains the value play."
      bullets={[
        'Algarve coast (Lagos, Tavira, Vilamoura) is premium-priced',
        'Algarve inland (Loulé, São Brás) still under London-2017 levels',
        'Lisbon centre rivals mid-tier London for housing',
        'Porto remains the best value major Portuguese city',
      ]}
    />
  );
}
