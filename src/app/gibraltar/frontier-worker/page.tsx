import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Gibraltar frontier-worker mechanics | Living Spain, working Gibraltar',
  description: 'The post-Brexit frontier-worker reality. Tax, social security, day-counting, the border crossing, treaty mechanics.',
  alternates: { canonical: '/gibraltar/frontier-worker' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="gibraltar"
      eyebrow="Frontier worker"
      h1="Living in Spain, working in Gibraltar"
      intro="A widespread arrangement made considerably more complicated post-Brexit but still entirely viable. Day counting, social security coordination, and crossing logistics are the key topics."
      bullets={[
        'Frontier-worker status under the UK-EU TCA',
        'Spanish 183-day residency trigger and avoidance',
        'Social security: pay where, claim where?',
        'Sevogia, La Línea, Algeciras: which side to live on',
      ]}
    />
  );
}
