import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Gibraltar Frontier Worker 2026 | Living Spain, Working Gibraltar, EU Treaty',
  description: 'The 2026 frontier-worker reality after the UK-EU treaty. Schengen border from 15 July 2026, no more EES delays, tax and social security coordination, day-counting.',
  alternates: { canonical: '/gibraltar/frontier-worker' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="gibraltar"
      eyebrow="Frontier worker · 2026"
      h1="Living in Spain, working in Gibraltar · 2026"
      intro="The single most affected group by the new UK-EU treaty (provisional application from 15 July 2026). Removing the physical land border at La Línea changes daily life dramatically. Tax residency, social security coordination, and day-counting still matter but the practical mechanics get easier."
      bullets={[
        '15 July 2026: physical border removed, fence at La Línea comes down, Schengen rules apply at Gibraltar port and airport',
        'EES (Entry/Exit System) does not apply at the Spain-Gibraltar land frontier under the new treaty',
        'Spanish 183-day residency trigger: still applies, day-counting log is still essential',
        'Social security coordination: A1 certificate from UK / Gibraltar protects against double-payment',
        'Centre of vital interests test: can override day count if family / assets are in Spain',
        'Where to live: La Línea (cheapest), Sotogrande (premium), Algeciras (further but better infrastructure)',
        'Sources: House of Commons Library briefing CBP-10572, EU Council press release 1 April 2026',
      ]}
    />
  );
}
