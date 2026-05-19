import type { Metadata } from 'next';
import { LegalDoc } from '@/components/legal/LegalDoc';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'How WarmerCoast collects, uses and protects your data. GDPR compliant.',
};

export default function Page() {
  return (
    <LegalDoc
      eyebrow="Privacy"
      title="Privacy policy"
      intro="What we collect, why, how we store it, and how to delete it."
      updated="2026-05-19"
      sections={[
        { title: 'Who we are', body: <p>WarmerCoast Ltd, registered in the UK. ICO registered. We operate <strong>warmercoast.com</strong> and its related services.</p> },
        { title: 'What we collect', body: (
          <>
            <p><strong>Account data:</strong> email address (for magic-link login), optional profile fields if you provide them in /account.</p>
            <p><strong>Purchase data:</strong> Stripe stores card details, we only see customer ID and metadata. We store the product purchased and amount.</p>
            <p><strong>Activity data:</strong> module progress and checklist items, stored against your account for your own benefit.</p>
            <p><strong>Lead data:</strong> if you give us your email via a form, we store it with a source tag (e.g. exit_intent, newsletter).</p>
            <p><strong>Analytics:</strong> aggregated, anonymised page-view counts via Plausible. Optionally Microsoft Clarity if you accept marketing cookies.</p>
          </>
        ) },
        { title: 'Cookies', body: (
          <>
            <p>We use a tiny number of cookies. Functional cookies are essential for the site to work. Analytics cookies are anonymous and can be declined in the cookie banner. We do not use third-party advertising trackers.</p>
          </>
        ) },
        { title: 'Your rights', body: (
          <>
            <p>You can export your data, ask for it to be deleted, or unsubscribe from marketing at any time. Go to /account, or email <a className="text-warm" href="mailto:privacy@warmercoast.com">privacy@warmercoast.com</a>.</p>
          </>
        ) },
        { title: 'Where data lives', body: (
          <>
            <p>Our database is hosted by Supabase in the EU (eu-central-1, Frankfurt). Stripe handles card data and is PCI-DSS compliant. ConvertKit is our marketing email processor.</p>
          </>
        ) },
        { title: 'AI disclosure', body: (
          <>
            <p>Some content drafts on the blog are AI-assisted, every one is reviewed and edited by a human author named on the post. We do not generate fake testimonials or imaginary statistics. Calculator outputs come from defined formulas, not LLMs.</p>
          </>
        ) },
      ]}
    />
  );
}
