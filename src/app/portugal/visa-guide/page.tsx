import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Portugal visa guide for Brits | D7, D8, Golden, work',
  description: 'Every Portuguese visa route open to UK applicants in 2026. D7, D8 digital nomad, golden alternatives, work, family. Documents, costs, timelines.',
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="portugal"
      eyebrow="Visa sub-pillar"
      h1="Portuguese visa guide for British citizens"
      intro="The D7 and D8 routes cover almost every UK applicant. The Golden Visa property route closed in 2023. Here is what is actually open in 2026."
      bullets={[
        'D7: passive income, best for retirees and FIRE applicants',
        'D8: digital nomad, the fastest growing route',
        'Golden Visa: fund investment only, no residential property',
        'Family reunification and study routes for specific cases',
      ]}
    />
  );
}
