import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Spain cost of living 2026 for British movers | Real numbers by region',
  description:
    'Real 2026 cost of living for British movers across Andalucía, Valencia, Cataluña, Madrid and the islands. Sourced from ONS, Numbeo and on-the-ground checks.',
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="spain"
      eyebrow="Cost of living"
      h1="What Spain actually costs in 2026"
      intro="Cost of living varies dramatically across Spain. The £2,500 monthly that gets you a comfortable Andalucía lifestyle is tight in Barcelona and uncomfortable in Mallorca."
      bullets={[
        'Andalucía: cheapest region, especially inland from the Costa del Sol',
        'Valencia: best value city, Mediterranean coast, growing expat scene',
        'Madrid: most expensive non-coastal, but salaries match',
        'Cataluña and the islands: premium pricing, especially for housing',
        'Numbers benchmarked against Manchester, Bristol and South-East UK averages',
      ]}
    />
  );
}
