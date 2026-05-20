import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Spain tax residency for British movers | Beckham Law, modelo 720, 183 days',
  description:
    'How Spanish tax residency works for UK citizens. 183-day rule, centre of interests, modelo 720, Beckham Law, double tax treaty mechanics.',
  alternates: { canonical: '/spain/tax-residency' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="spain"
      eyebrow="Tax residency"
      h1="Spanish tax residency for British movers"
      intro="The single most important topic for getting your move right. Tax residency is binary and triggers obligations and opportunities that can cost or save £20,000 in year one alone."
      bullets={[
        '183-day rule and centre of economic interests',
        'Beckham Law: when it makes sense and when it does not',
        'Modelo 720: declaring foreign assets above €50k thresholds',
        'UK-Spain double tax treaty mechanics for pensions and property',
      ]}
      spokes={[
        { href: '/spain/tax-residency/183-day-rule', label: '183-day rule explained', excerpt: 'How Spain actually counts days, what \"sporadic absences\" means.' },
        { href: '/spain/tax-residency/beckham-law', label: 'Beckham Law mechanics', excerpt: 'Six-year window, 24% flat rate, the exact election process.' },
        { href: '/spain/tax-residency/modelo-720', label: 'Modelo 720 obligations', excerpt: 'Foreign asset declarations, post-ECJ-ruling penalty regime.' },
        { href: '/spain/tax-residency/uk-pensions', label: 'UK pensions taxed in Spain', excerpt: 'Article 17, government vs private pensions, drawdown timing.' },
        { href: '/spain/tax-residency/cgt-on-uk-property', label: 'CGT on UK property after Spain move', excerpt: 'Pre-move sale vs post-move sale, principal residence relief edge cases.' },
        { href: '/spain/tax-residency/isa-treatment', label: 'How Spain treats your UK ISA', excerpt: 'ISAs are not recognised. What to do before crossing residency line.' },
      ]}
    />
  );
}
