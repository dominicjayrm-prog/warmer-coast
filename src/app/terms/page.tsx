import type { Metadata } from 'next';
import { LegalDoc } from '@/components/legal/LegalDoc';

export const metadata: Metadata = {
  title: 'Terms of service | WarmerCoast',
  description: 'WarmerCoast terms of service. Educational content licence, refund mechanics, limitation of liability, governing law (England and Wales).',
  alternates: { canonical: '/terms' },
};

export default function Page() {
  return (
    <LegalDoc
      eyebrow="Terms"
      title="Terms of service"
      intro="The plain-English version of how using WarmerCoast works."
      updated="2026-05-19"
      sections={[
        { title: 'Educational content only', body: <p>Everything on WarmerCoast is educational. It is not regulated financial, legal, tax or immigration advice. For decisions that depend on your specific circumstances, engage a qualified professional. We give referrals to vetted advisers inside the buyer dashboard.</p> },
        { title: 'Licence', body: <p>When you buy a playbook you get a personal, non-transferable licence to access the materials. Sharing access externally is not permitted. Household use is fine.</p> },
        { title: 'Refunds', body: <p>30-day strong conditional refund as set out on each playbook page. Honoured. See /refund-policy for the detail.</p> },
        { title: 'Limitation of liability', body: <p>We do our best to keep content accurate but tax law and immigration rules change. We are not liable for decisions you make based on this content. Always check current legislation with a regulated professional.</p> },
        { title: 'Governing law', body: <p>These terms are governed by the laws of England and Wales.</p> },
      ]}
    />
  );
}
