import type { Metadata } from 'next';
import { PlaybookSalesTemplate } from '@/components/marketing/PlaybookSalesTemplate';

export const metadata: Metadata = {
  title: 'The Iberia Bundle · all three playbooks · £797',
  description:
    'Spain, Portugal and Gibraltar in one. The bundle for buyers who want to compare and decide before committing, plus the cross-border interactions module.',
  alternates: { canonical: '/playbook/bundle' },
};

export default function Page() {
  return (
    <PlaybookSalesTemplate
      slug="bundle"
      title="The Iberia Bundle"
      subtitle="All three country playbooks plus the cross-border interactions module not sold separately. The bundle is for buyers who haven't decided, or who want to keep options open."
      modules={[
        { n: 1, title: 'Decision module: which country?', body: 'The structured framework for choosing Spain vs Portugal vs Gibraltar based on income, profile, family, and life goals. Includes the decision-support quiz.' },
        { n: 2, title: 'Spain Playbook (full)', body: 'All 8 Spain modules, identical to the standalone £397 product.' },
        { n: 3, title: 'Portugal Playbook (full)', body: 'All 7 Portugal modules, identical to the standalone £397 product.' },
        { n: 4, title: 'Gibraltar Playbook (full)', body: 'All 6 Gibraltar modules, identical to the standalone £497 product.' },
        { n: 5, title: 'Cross-border interactions', body: 'Bundle-exclusive. UK-Spain-Portugal-Gibraltar treaty stacks, when each scheme conflicts, day counting across multiple jurisdictions, dual residence edge cases.' },
        { n: 6, title: 'Pivot scenarios', body: 'What happens if you start in Spain and move to Portugal, what happens if you trial Gibraltar and shift to Spain frontier-working. Real worked examples.' },
      ]}
      whoFor={[
        'You haven\'t finalised your country yet',
        'You want to keep options open for future moves between Iberian countries',
        'You\'re saving £494 vs buying separately',
        'You want the cross-border module that\'s not sold standalone',
      ]}
      notFor={[
        'You\'re absolutely certain about a single country (just buy that playbook)',
        'You expect 1-to-1 advice (this is structured content, not consulting)',
        'You want a Mediterranean lifestyle course (this is a relocation playbook)',
      ]}
      bonuses={[
        { title: 'All three country starter checklists', body: 'Spain, Portugal and Gibraltar pre-move PDFs.' },
        { title: '"Which country" decision tool', body: 'Interactive in-app tool, weights tax, cost, lifestyle, family.' },
        { title: 'Cross-border interaction case studies', body: 'Four real (anonymised) scenarios with full worked-through structuring.' },
      ]}
      guarantee="Complete modules 1, 2 and 5 within 30 days. If you haven't identified at least £1,000 in tax mistakes or structural pitfalls you would have made without the bundle, email us for a full refund and keep the materials. Less than 4% of buyers ever ask."
      faqs={[
        { q: 'How much do I save vs buying separately?', a: 'Separately the three country playbooks total £1,291. The bundle is £797, saving you £494. Plus the cross-border module is bundle-exclusive.' },
        { q: 'Can I upgrade later if I buy a single country?', a: 'Yes. Email us within 12 months of your single-playbook purchase, we\'ll credit your previous payment toward the bundle.' },
        { q: 'How long does the bundle take to work through?', a: 'About 30 to 40 hours of structured content total. Most buyers do the decision module first, then the country they pick, in the run-up to their move date.' },
        { q: 'Is the cross-border module worth it on its own?', a: 'Probably yes if you\'re considering frontier-working Gibraltar from Spain, or moving between Portugal and Spain mid-life. It\'s not sold standalone because it builds on the country playbooks.' },
      ]}
    />
  );
}
