import type { Metadata } from 'next';
import { PlaybookSalesTemplate } from '@/components/marketing/PlaybookSalesTemplate';

export const metadata: Metadata = {
  title: 'The Gibraltar Playbook for British movers · £497',
  description:
    'The structured Gibraltar relocation playbook. Cat 2 mechanics, HEPSS, frontier-worker reality, banking, schools. £497, instant access.',
};

export default function Page() {
  return (
    <PlaybookSalesTemplate
      slug="gibraltar"
      title="The Gibraltar Playbook"
      subtitle="Six modules. The premium playbook for a narrow market. Cat 2, HEPSS, frontier-worker mechanics, the realistic cost of living, and the cross-border reality."
      modules={[
        { n: 1, title: 'Pre-move UK actions', body: 'P85, ISA treatment, UK property timing, the specific Gibraltar tax-residency mechanics.' },
        { n: 2, title: 'Cat 2 application', body: 'Net worth proof, accommodation requirements, vetting process, realistic timeline.' },
        { n: 3, title: 'HEPSS application', body: 'For specialist senior employees. Employer-led, but what you need to bring.' },
        { n: 4, title: 'Frontier-worker setup', body: 'Living La Línea or Sotogrande, working Gibraltar. Day counting, social security, treaty mechanics.' },
        { n: 5, title: 'Gibraltar banking', body: 'Sterling and Euro accounts, the due diligence reality, multi-currency strategy.' },
        { n: 6, title: 'Years 2 to 5: maintenance', body: 'Annual renewals, ongoing compliance, when to upgrade to ordinary residency.' },
      ]}
      whoFor={[
        'You have £2m+ net worth and want capped Gibraltar tax via Cat 2',
        'You\'re being recruited into Gibraltar for a senior specialist role (HEPSS)',
        'You work for a Gibraltar employer but plan to live in Spain (frontier-worker)',
        'You want sourced, structured guidance over WhatsApp group anecdotes',
      ]}
      notFor={[
        'You want a generic Mediterranean relocation guide',
        'You\'re looking for Costa del Sol lifestyle (read the Spain playbook)',
        'You need urgent legal advice on a specific application (engage a Cat 2 specialist directly)',
        'You expect significant savings vs UK cost of living (Gibraltar is expensive)',
      ]}
      bonuses={[
        { title: 'Cat 2 application checklist (PDF)', body: 'Documents, source-of-funds templates, vetting prep. 2026 ready.' },
        { title: 'Frontier crossing reality (video)', body: 'Real cross-border timing, peak vs off-peak, what changed post-Brexit.' },
        { title: 'Vetted Cat 2 specialist referrals', body: 'Three Gibraltar-based specialists we\'ve personally vetted.' },
      ]}
      guarantee="Complete the first 3 modules within 30 days. If you haven't identified at least £1,000 in tax mistakes or structural pitfalls you would have made without the playbook, email us for a full refund and keep the materials. Less than 4% of buyers ever ask."
      faqs={[
        { q: 'Is the Gibraltar playbook actually different enough to justify £497?', a: 'Yes. Cat 2, HEPSS and frontier-worker mechanics are far narrower than Spain or Portugal content, and the premium is partly because the market is small. We charge what makes the work worth doing.' },
        { q: 'Cat 2 net worth: how strict is the £2m?', a: 'Strict. The Finance Centre Director will not approve below that bar. The playbook walks through documenting it correctly.' },
        { q: 'Can I do this without an immigration lawyer?', a: 'Many do, especially HEPSS where the employer drives the application. Cat 2 we recommend you brief a specialist before filing, the playbook gives you the questions to ask.' },
        { q: 'How does the border actually work post-Brexit?', a: 'Bespoke arrangements evolving since 2020. Module 4 documents the current state and the practical day-to-day reality of crossing.' },
      ]}
    />
  );
}
