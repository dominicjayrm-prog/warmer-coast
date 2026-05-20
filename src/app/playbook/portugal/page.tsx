import type { Metadata } from 'next';
import { PlaybookSalesTemplate } from '@/components/marketing/PlaybookSalesTemplate';

export const metadata: Metadata = {
  title: 'The Portugal Playbook for British movers · £397',
  description:
    'The structured Portugal relocation playbook. IFICI / NHR 2.0, D7, D8, IRS, banking, schools. £397, instant access, 30-day strong refund.',
  alternates: { canonical: '/playbook/portugal' },
};

export default function Page() {
  return (
    <PlaybookSalesTemplate
      slug="portugal"
      title="The Portugal Playbook"
      subtitle="Seven modules. The structured Portugal relocation playbook for British adults in 2026, including IFICI mechanics and the post-NHR reality."
      modules={[
        { n: 1, title: 'Pre-move UK actions', body: 'P85, ISA wind-down, UK property sale timing, pension drawdown for Portuguese tax efficiency.' },
        { n: 2, title: 'D7 vs D8 vs Golden', body: 'Which visa route is right for you, document checklists, realistic timelines.' },
        { n: 3, title: 'IFICI / NHR 2.0', body: 'Eligibility for the new regime, qualifying activities, registration window, alternatives if you don\'t qualify.' },
        { n: 4, title: 'Arriving and registering', body: 'NIF, SEF/AIMA, NISS, bank account, SNS healthcare. The correct order.' },
        { n: 5, title: 'Portuguese banking', body: 'Millennium, ActivoBank, Novobanco. Plus Wise and Revolut for UK transfers.' },
        { n: 6, title: 'Year-one IRS filing', body: 'The IRS form, the deadlines, the worked examples, common mistakes specific to UK-source income.' },
        { n: 7, title: 'Years 2 to 5: maintenance', body: 'Renewals, residency upgrade, citizenship pathway after five years.' },
      ]}
      whoFor={[
        'You\'re a UK retiree or remote worker planning Portugal in the next 18 months',
        'You have UK pensions, rental property, or qualifying remote employment income',
        'You want IFICI mechanics explained properly',
        'You\'re comfortable with structured, sourced reading over guru content',
      ]}
      notFor={[
        'You\'re relying on the old NHR (it\'s gone for new applicants since 2024)',
        'You want generic Portugal relocation content',
        'You need a Lisbon legal expert for an immigration appeal',
        'You\'re looking for a Golden Visa property guide (route closed in 2023)',
      ]}
      bonuses={[
        { title: 'Portugal Starter Checklist (PDF)', body: 'Pre-move and arrival checklist. Printable. 2026 thresholds.' },
        { title: 'NIF without a fiscal rep (video)', body: 'The 2026 process for obtaining a Portuguese tax number from the UK.' },
        { title: 'Vetted advogado referrals', body: 'Three Portuguese lawyers we\'ve personally vetted. No kickbacks.' },
      ]}
      guarantee="Complete the first 3 modules within 30 days. If you haven't identified at least £1,000 in tax mistakes you would have made without the playbook, email us for a full refund and keep the materials."
      faqs={[
        { q: 'Is IFICI as good as the old NHR?', a: 'For qualifying activities and most employment income, broadly similar. For pensioners, no, the favourable 10-year pension treatment is gone for new arrivals.' },
        { q: 'D7 or D8?', a: 'D7 if your income is passive (pensions, dividends, rental). D8 if you have remote employment or qualifying self-employment. The playbook has a decision tree.' },
        { q: 'How long does the D8 take?', a: '3 to 5 months currently, faster than D7 in most consulates.' },
        { q: 'Can I switch from D7 to D8 later?', a: 'Yes, but it\'s simpler to apply for the right one initially. The playbook walks through the criteria.' },
      ]}
    />
  );
}
