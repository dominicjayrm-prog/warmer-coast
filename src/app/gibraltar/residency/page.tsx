import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Gibraltar residency | Cat 2, HEPSS, ordinary',
  description: 'How to become a Gibraltar resident. Category 2, HEPSS, ordinary residence. Net worth thresholds, approved accommodation, vetting timelines.',
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="gibraltar"
      eyebrow="Residency"
      h1="Gibraltar residency: Cat 2, HEPSS and ordinary"
      intro="Three main routes. Cat 2 for high net worth seeking capped tax. HEPSS for specialist senior employees. Ordinary residency for everyone else, including frontier-workers."
      bullets={[
        'Cat 2: £2m net worth, capped tax at ~£44k',
        'HEPSS: specialist senior role, employer-driven',
        'Ordinary residency: pathway after time as Cat 2 or HEPSS',
        'Approved accommodation requirement: own or rent qualifying property',
      ]}
    />
  );
}
