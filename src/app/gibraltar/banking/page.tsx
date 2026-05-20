import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Gibraltar banking | Finance hub access, Sterling and Euro accounts',
  description: 'Banking in Gibraltar as a resident or frontier-worker. Sterling and Euro accounts, the major institutions, due diligence reality.',
  alternates: { canonical: '/gibraltar/banking' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="gibraltar"
      eyebrow="Banking"
      h1="Gibraltar banking for British movers"
      intro="A finance hub with strict due diligence. Onboarding is slower than UK high-street, but the multi-currency capabilities are excellent and the regulatory framework is reassuring."
      bullets={[
        'Sterling and Euro accounts side by side',
        'Major institutions: Gibraltar International Bank, Jyske, NatWest International',
        'Due diligence on source of funds and source of wealth',
        'Practical multi-currency strategy alongside a Spanish account',
      ]}
    />
  );
}
