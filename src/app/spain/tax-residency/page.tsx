import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Spain Tax Residency for UK Movers 2026 | Beckham Law, Modelo 720, 183 Days',
  description:
    'How Spanish tax residency works for British citizens in 2026. 183-day rule, centre of economic interests, Modelo 720 foreign-asset declaration, Beckham Law 24% flat rate, UK-Spain double tax treaty mechanics.',
  alternates: { canonical: '/spain/tax-residency' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="spain"
      eyebrow="Tax residency · 2026"
      h1="Spanish tax residency for British movers · 2026"
      intro="The single most important topic for getting your move right. Tax residency is binary and triggers obligations and opportunities that can cost or save £20,000 in year one alone. Two triggers: 183 days physical presence in a calendar year, or centre of economic interests being in Spain."
      bullets={[
        '183-day rule: arrival and departure days both count; "sporadic absences" outside Spain still count unless you prove tax residency elsewhere',
        'Beckham Law (Régimen impatriado): 24% flat rate on Spanish-source employment income up to €600,000, 6 years total, Modelo 149 election within 6 months of Social Security registration (absolute deadline)',
        'Modelo 720: foreign-asset declaration when any of bank accounts / securities / real estate exceeds €50,000, deadline 31 March each year, post-2022 ECJ ruling penalties proportionate',
        'UK-Spain DTA Article 17: government pensions taxed only in UK; state/private pensions taxed only in Spain once resident',
        'ISA wrapper: not recognised in Spain, income/gains become taxable, wind down before crossing residency line',
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
