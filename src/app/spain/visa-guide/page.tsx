import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Spain visa guide for British citizens 2026 | NLV, DNV, work, golden',
  description:
    'Every Spanish visa route open to UK applicants in 2026. Non-lucrative, digital nomad, work, golden, family. Documents, costs, timelines, gotchas.',
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="spain"
      eyebrow="Visa sub-pillar"
      h1="Spanish visa guide for British citizens · 2026"
      intro="Brexit made Brits third-country nationals. Four visa routes now cover almost every UK applicant. Pick the wrong one and you waste six months and €2,000 in legal fees."
      bullets={[
        'Non-lucrative visa: no work, passive income proof',
        'Digital nomad visa: remote work, Beckham Law compatible',
        'Work visa: employer-sponsored, slowest route',
        'Golden Visa property route closed in 2025',
      ]}
      spokes={[
        { href: '/spain/visa-guide/non-lucrative', label: 'Non-lucrative visa (NLV)', excerpt: 'The passive income route. Document checklist, income thresholds, renewal mechanics.' },
        { href: '/spain/visa-guide/digital-nomad', label: 'Digital nomad visa (DNV)', excerpt: 'For remote employees and self-employed. The 2026 income thresholds and Beckham Law combo.' },
        { href: '/spain/visa-guide/work-visa', label: 'Work visa', excerpt: 'Employer-sponsored. What an offer needs to contain. Realistic timeline.' },
        { href: '/spain/visa-guide/golden-alternatives', label: 'Golden Visa alternatives', excerpt: 'Property route is closed. Government bonds and qualifying business investment still open.' },
        { href: '/spain/visa-guide/family-reunification', label: 'Family reunification', excerpt: 'Spouse and dependants. Rights derived from EU or Spanish resident family.' },
        { href: '/spain/visa-guide/student-visa', label: 'Student visa', excerpt: 'Edge case but useful as a stepping stone for younger applicants.' },
      ]}
    />
  );
}
