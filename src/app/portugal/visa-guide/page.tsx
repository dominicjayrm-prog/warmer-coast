import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Portugal Visa Guide for UK Citizens 2026 | D7, D8, Golden Visa',
  description: 'Every Portuguese visa route open to British applicants in 2026. D7 passive income €820/mo, D8 digital nomad €3,680/mo, Golden Visa fund route. Income thresholds, documents, timelines.',
  alternates: { canonical: '/portugal/visa-guide' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="portugal"
      eyebrow="Visa sub-pillar"
      h1="Portuguese visa guide for British citizens · 2026"
      intro="Two routes cover almost every UK applicant moving to Portugal: the D7 passive-income visa and the D8 digital nomad visa. The Golden Visa residential property route closed in October 2023. Here are the 2026 income thresholds and the route best matched to each profile."
      bullets={[
        'D7 (passive income, retirees / FIRE): €820 per month minimum (€9,840 per year), from pensions, dividends, rental or royalties',
        'D8 (digital nomad, remote workers): €3,680 per month (4× Portuguese minimum wage of €920 in 2026) plus €11,040 savings',
        'Golden Visa: fund investment routes only (€500k+), property purchase no longer qualifies since October 2023',
        'Family reunification: derived right for spouses and dependants of an existing Portuguese or EU resident',
        'Work visa: sponsored by Portuguese employer, longest processing time',
        'Sources: Portuguese Government / Portal das Finanças, AIMA (formerly SEF) official guidance',
      ]}
    />
  );
}
