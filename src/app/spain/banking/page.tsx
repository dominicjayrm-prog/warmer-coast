import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Spanish banking for Brits | NIE, padrón, multi-currency, UK bills',
  description:
    'Opening a Spanish bank account as a UK national. Documents, best banks for expats, multi-currency setups, paying UK bills from Spain.',
  alternates: { canonical: '/spain/banking' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="spain"
      eyebrow="Banking"
      h1="Spanish banking for British movers"
      intro="Spanish banks have become much friendlier to non-resident applicants since 2020, but the document requirements still trip people up. Here is what works in 2026."
      bullets={[
        'NIE required for resident accounts at every major bank',
        'Sabadell, BBVA and Santander dominate the expat segment',
        'Multi-currency strategies: Wise or Revolut alongside a Spanish account',
        'How to pay UK bills cleanly without losing money on FX',
      ]}
    />
  );
}
