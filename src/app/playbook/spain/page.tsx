import type { Metadata } from 'next';
import { PlaybookSalesTemplate } from '@/components/marketing/PlaybookSalesTemplate';

export const metadata: Metadata = {
  title: 'The Spain Playbook for British movers · £397',
  description:
    'The structured Spain relocation playbook. Beckham Law, visas, banking, schools, year-one tax. £397, instant access, 30-day strong refund.',
  alternates: { canonical: '/playbook/spain' },
  openGraph: { url: '/playbook/spain' },
};

export default function Page() {
  return (
    <PlaybookSalesTemplate
      slug="spain"
      title="The Spain Playbook"
      subtitle="Eight modules. Sourced, sequenced, written from Cádiz. The exact tax and visa playbook for British adults moving to Spain in 2026."
      modules={[
        { n: 1, title: 'Pre-move UK actions', body: 'Form P85, ISA wind-down, UK property sale timing, pension drawdown sequencing. Six to twelve months before the move.' },
        { n: 2, title: 'Choosing the right visa', body: 'NLV vs DNV vs work vs family. Document checklists, income thresholds, consulate quirks per region.' },
        { n: 3, title: 'Beckham Law structuring', body: 'The six-month window, the election, when standard tax actually wins. Worked examples £50k to £200k.' },
        { n: 4, title: 'Arriving and registering', body: 'NIE, padrón, modelo 030, social security order of operations. Region-specific paperwork.' },
        { n: 5, title: 'Spanish banking', body: 'Sabadell, BBVA, Santander, plus multi-currency strategies with Wise and Revolut.' },
        { n: 6, title: 'Year-one tax filing', body: 'Modelo 100, modelo 720, the deadlines, the worked examples, the common mistakes.' },
        { n: 7, title: 'Healthcare, schools, life admin', body: 'Public vs private healthcare, British and international schools, driving licence exchange.' },
        { n: 8, title: 'Years 2 to 5: maintenance', body: 'Renewals, residency upgrade to long-term, citizenship pathway, when to disengage from the UK.' },
      ]}
      whoFor={[
        'You\'re a UK adult planning a real move to Spain in the next 18 months',
        'You have at least £50,000 of UK income and want it taxed sensibly in Spain',
        'You want sourced answers, not vibes',
        'You\'re willing to read 100+ pages of structured guidance',
      ]}
      notFor={[
        'You\'re already represented by an IFA who handles cross-border relocation',
        'You need legal advice on a current visa rejection (get a regulated immigration lawyer)',
        'You want a generic "move abroad" course',
        'You expect a guru funnel with countdown timers and one-on-one Voxer access',
      ]}
      bonuses={[
        { title: 'Spain Starter Checklist (PDF)', body: 'The exact 14-page pre-move list. Printable. Updated 2026.' },
        { title: 'Padrón walkthrough (video)', body: 'A real padrón appointment, recorded and narrated. What to bring, what they actually ask, what to do if they push back.' },
        { title: 'Vetted asesor fiscal referrals', body: 'Three independent asesores we\'ve personally vetted. No kickbacks.' },
      ]}
      guarantee="Complete the first 3 modules within 30 days. If you haven't identified at least £1,000 in tax mistakes you would have made without the playbook, email us for a full refund and keep the materials. Almost no one asks — which is why we can keep this policy."
      timeline={[
        { when: '6-12 months out', what: 'File HMRC Form P85, review UK ISAs and pension drawdown, decide whether to sell UK property before or after the move.' },
        { when: '3-6 months out', what: 'Choose visa route (NLV or DNV), apostille birth/marriage certificates, secure sworn translations.' },
        { when: '1-3 months out', what: 'Book consulate appointment, finalise income documentation, sort medical certificate and criminal record check.' },
        { when: 'First 30 days in Spain', what: 'Obtain NIE, register padrón at the town hall, register social security if employed.' },
        { when: 'Within 6 months of social security', what: 'File Modelo 149 to elect Beckham Law. This deadline is absolute - miss it and you lose Beckham Law for your whole stay.' },
        { when: 'Year 1, by 30 June', what: 'File Modelo 100 (IRPF return). By 31 March if Modelo 720 (foreign assets) applies.' },
      ]}
      documents={[
        { name: 'Form P85', purpose: 'HMRC departure notification' },
        { name: 'Visa application form', purpose: 'NLV or DNV at Spanish consulate' },
        { name: 'Apostilled birth/marriage', purpose: 'Required for residency registration' },
        { name: 'Sworn translation (jurado)', purpose: 'For every non-Spanish document' },
        { name: 'Medical certificate', purpose: 'Specific format demanded by Spanish consulates' },
        { name: 'Criminal record check (ACRO)', purpose: 'Apostilled, less than 6 months old' },
        { name: 'NIE application (EX-15)', purpose: 'Foreigner identification number' },
        { name: 'Padrón certificate', purpose: 'Town hall residency registration' },
        { name: 'Modelo 030', purpose: 'Hacienda tax address registration' },
        { name: 'Modelo 149', purpose: 'Beckham Law election, 6-month deadline' },
        { name: 'Modelo 100', purpose: 'Annual IRPF return' },
        { name: 'Modelo 720', purpose: 'Foreign asset declaration (if applicable)' },
      ]}
      faqs={[
        { q: 'Is the playbook updated for 2026?', a: 'Yes. Last full review May 2026. Includes the current DNV income threshold of €2,849/month, the 2026 IPREM figures, Modelo 720 post-ECJ-ruling penalty regime, and the latest Beckham Law eligibility rules.' },
        { q: 'How long do I have access?', a: 'Forever. The dashboard stays live. Updates included for 12 months from purchase, then optional renewal for ongoing access to changes.' },
        { q: 'Can I share with my spouse?', a: 'Yes. One purchase, household use. We don\'t police logins.' },
        { q: 'Is this regulated tax advice?', a: 'No. It is sourced educational content. For decisions specific to your situation, the playbook recommends an asesor fiscal and includes vetted referrals.' },
        { q: 'What if I decide on Portugal halfway through?', a: 'Email us within 30 days and we\'ll swap your Spain access for Portugal free. After 30 days you keep Spain and get the Portugal playbook at a 25% loyalty discount.' },
      ]}
    />
  );
}
