import type { Metadata } from 'next';
import { LegalDoc } from '@/components/legal/LegalDoc';

export const metadata: Metadata = {
  title: 'Refund policy | WarmerCoast',
  description: 'Our 30-day strong conditional refund policy. Honoured, simple to claim. Less than 4% of buyers ever ask. Read the full mechanics here.',
  alternates: { canonical: '/refund-policy' },
  openGraph: { url: '/refund-policy' },
};

export default function Page() {
  return (
    <LegalDoc
      eyebrow="Refunds"
      title="Refund policy"
      intro="Stronger than vanilla money-back. Honoured. Less than 4% of buyers ask."
      updated="2026-05-19"
      sections={[
        { title: 'The guarantee', body: <p><strong>Complete the first 3 modules within 30 days of purchase.</strong> If you have not identified at least <strong>£1,000</strong> in tax mistakes you would have made without the playbook, email us for a full refund and keep the materials. No questions, no hassle.</p> },
        { title: 'How to claim', body: <p>Email <a className="text-warm" href="mailto:refunds@warmercoast.com">refunds@warmercoast.com</a> within 30 days of purchase. We confirm receipt the same working day and process the refund via Stripe within 5 working days. You keep your access and materials.</p> },
        { title: 'Why we can offer this', body: <p>Because the playbook works. Real refund rate is under 4%, the vast majority of those are simple change-of-mind within the first week. We would rather refund honestly than play games with restrictive terms.</p> },
        { title: 'Stripe Customer Portal', body: <p>If you prefer, you can also manage your purchase including refund requests via the Stripe Customer Portal linked from your account settings.</p> },
      ]}
    />
  );
}
