import type { Metadata } from 'next';
import { PlaybookSalesTemplate } from '@/components/marketing/PlaybookSalesTemplate';

export const metadata: Metadata = {
  title: 'The Portugal Playbook for British movers · £397',
  description:
    'The structured Portugal relocation playbook. IFICI / NHR 2.0, D7, D8, IRS, banking, schools. £397, instant access, 30-day strong refund.',
  alternates: { canonical: '/playbook/portugal' },
  openGraph: { url: '/playbook/portugal' },
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
        { title: 'Interactive move checklists', body: '50+ sequenced checklist items across the 7 modules, with deadlines flagged and your progress saved to your account.' },
        { title: 'Official-form fillers', body: 'Guided fillers for P85, the D7/D8 applications and the IFICI registration — validated inputs, saved drafts, filing-ready PDF briefs.' },
        { title: 'Vetted advogado referrals', body: 'Independent Portuguese lawyers and contabilistas we\'ve personally vetted — sent on request after purchase. No kickbacks.' },
      ]}
      guarantee="Complete the first 3 modules within 30 days. If you haven't identified at least £1,000 in tax mistakes you would have made without the playbook, email us for a full refund and keep the materials."
      timeline={[
        { when: '6-12 months out', what: 'File HMRC Form P85, review UK ISAs, decide on D7 vs D8 vs Golden Visa route, plan IFICI eligibility if applicable.' },
        { when: '3-6 months out', what: 'Obtain Portuguese NIF (tax number) before arrival via fiscal representative, apostille required documents, prove minimum income (€820/mo for D7, €3,680/mo for D8).' },
        { when: '1-3 months out', what: 'Book consulate appointment, finalise rental agreement or property contract, gather criminal record check.' },
        { when: 'First 30 days in Portugal', what: 'Register residence with SEF / AIMA, obtain NISS if working, register with SNS for healthcare.' },
        { when: 'Year 1', what: 'Register for IFICI within first year if qualifying activity, file annual IRS return.' },
        { when: 'Year 5', what: 'Apply for Portuguese citizenship if eligible (faster than Spain, A2 language test required).' },
      ]}
      documents={[
        { name: 'Form P85', purpose: 'HMRC departure notification' },
        { name: 'NIF application', purpose: 'Portuguese tax number, obtainable pre-arrival' },
        { name: 'Visa application (D7 or D8)', purpose: 'Filed at the Portuguese consulate in London' },
        { name: 'Apostilled birth/marriage', purpose: 'For residence registration and visa' },
        { name: 'Criminal record check', purpose: 'ACRO certificate, apostilled' },
        { name: 'Proof of income', purpose: '€820/mo (D7) or €3,680/mo (D8)' },
        { name: 'Proof of savings', purpose: '€11,040 for D8 applicants' },
        { name: 'Health insurance', purpose: 'Private cover until SNS registration' },
        { name: 'Rental contract or escritura', purpose: 'Proof of Portuguese address' },
        { name: 'IFICI registration', purpose: 'If qualifying activity, within first year' },
        { name: 'Annual IRS return', purpose: 'Filed by 30 June each year' },
        { name: 'NISS application', purpose: 'Social security if working' },
      ]}
      faqs={[
        { q: 'Is IFICI as good as the old NHR?', a: 'For qualifying activities (tech, R&D, science, qualifying engineering, higher education) and most employment income, broadly similar at 20% flat. For pensioners and non-qualifying-activity workers, no - the favourable 10-year pension treatment is gone for new arrivals. We help you check eligibility on the first call.' },
        { q: 'D7 or D8?', a: 'D7 if your income is passive (pensions, dividends, rental). D8 if you have remote employment or qualifying self-employment. The playbook has a decision tree.' },
        { q: 'How long does the D8 take?', a: '3 to 5 months currently, faster than D7 in most consulates.' },
        { q: 'Can I switch from D7 to D8 later?', a: 'Yes, but it\'s simpler to apply for the right one initially. The playbook walks through the criteria.' },
      ]}
    />
  );
}
