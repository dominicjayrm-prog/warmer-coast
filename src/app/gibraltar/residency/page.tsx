import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Gibraltar Residency 2026 | Category 2, HEPSS, Ordinary Residency',
  description: 'How British citizens become Gibraltar residents in 2026. Category 2 high-net-worth route (£2m, capped tax ~£44k), HEPSS for specialist roles, ordinary residency. Net worth thresholds, approved accommodation, vetting timelines.',
  alternates: { canonical: '/gibraltar/residency' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="gibraltar"
      eyebrow="Residency · 2026"
      h1="Gibraltar residency: Cat 2, HEPSS and ordinary · 2026"
      intro="Three established routes. Category 2 (Cat 2) for high-net-worth individuals seeking capped tax liability. HEPSS for senior specialists recruited into Gibraltar roles. Ordinary residency for everyone else, including frontier-workers who become Gibraltar tax resident. All routes require approved Gibraltar accommodation."
      bullets={[
        'Category 2: minimum £2,000,000 net worth, worldwide income assessed only on first £118,000, minimum annual tax ~£37,000, maximum ~£44,740',
        'HEPSS (High Executive Possessing Specialist Skills): senior specialist role where no suitable local candidate exists, effective tax ceiling ~£44,000',
        'Ordinary residency: 183-day physical presence or centre of vital interests in Gibraltar, taxed under standard Allowance-Based or Gross-Income-Based system',
        'Approved accommodation: must own or rent qualifying Gibraltar residential property as a Cat 2 prerequisite',
        'Cat 2 vetting timeline: typically 3-6 months from complete application',
        'Source: Gibraltar Income Tax Office, HM Government of Gibraltar',
      ]}
    />
  );
}
