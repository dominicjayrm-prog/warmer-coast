import type { Metadata } from 'next';
import { PlaybookSalesTemplate } from '@/components/marketing/PlaybookSalesTemplate';

export const metadata: Metadata = {
  title: 'The Gibraltar Playbook for British movers · £497',
  description:
    'The structured Gibraltar relocation playbook. Cat 2 mechanics, HEPSS, frontier-worker reality, banking, schools. £497, instant access.',
  alternates: { canonical: '/playbook/gibraltar' },
  openGraph: { url: '/playbook/gibraltar' },
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
        { title: 'Cat 2 application checklists', body: 'The source-of-funds dossier structure, document list and vetting prep — interactive, with progress saved.' },
        { title: 'Official-form fillers', body: 'Guided fillers for P85, the Cat 2 and HEPSS applications and the annual ABS/GIBS return — saved drafts, filing-ready PDF briefs.' },
        { title: 'Vetted Cat 2 specialist referrals', body: 'Gibraltar law and accountancy firms we\'ve personally vetted — sent on request after purchase.' },
      ]}
      guarantee="Complete the first 3 modules within 30 days. If you haven't identified at least £1,000 in tax mistakes or structural pitfalls you would have made without the playbook, email us for a full refund and keep the materials. Almost no one asks — which is why we can keep this policy."
      timeline={[
        { when: '6-12 months out', what: 'File HMRC Form P85, compile source-of-funds dossier for Cat 2 vetting, choose between Cat 2 (HNW) and HEPSS (specialist senior role) and frontier-worker routes.' },
        { when: '3-6 months out', what: 'Secure approved Gibraltar residential accommodation (own or rent), prepare £2m net worth documentation for Cat 2.' },
        { when: '1-3 months out', what: 'File Cat 2 application via Finance Centre Director, or have employer file HEPSS. Vetting takes 3-6 months.' },
        { when: 'July 15, 2026 onwards', what: 'New UK-EU treaty provisionally applies: no land border checks with Spain, Schengen rules at port/airport, frontier-worker logistics massively simpler.' },
        { when: 'First 60 days', what: 'Receive Cat 2 / HEPSS approval, open Gibraltar bank account (Sterling + Euro), register with Income Tax Office.' },
        { when: 'Year 1', what: 'File Allowance-Based or Gross-Income-Based assessment, maintain qualifying accommodation, annual compliance return.' },
      ]}
      documents={[
        { name: 'Form P85', purpose: 'HMRC departure notification' },
        { name: 'Cat 2 application', purpose: 'Filed via Finance Centre Director' },
        { name: 'Source-of-funds dossier', purpose: '£2m net worth documentation' },
        { name: 'Proof of approved accommodation', purpose: 'Own or rent qualifying Gibraltar property' },
        { name: 'HEPSS application', purpose: 'Employer-filed for senior specialist roles' },
        { name: 'Tax Identification Number (TIN)', purpose: 'Registration with Income Tax Office' },
        { name: 'A1 social security certificate', purpose: 'For frontier-workers (UK-EU coordination)' },
        { name: 'Day-counting log', purpose: 'Critical for avoiding accidental Spanish residency' },
        { name: 'Annual compliance return', purpose: 'Cat 2 and HEPSS holders' },
        { name: 'Civil status documents', purpose: 'Apostilled where issued outside Gibraltar' },
      ]}
      faqs={[
        { q: 'How does the new UK-EU treaty change things?', a: 'Massively, in a good way. Provisional application from 15 July 2026 removes the physical Spain border, drops the fence at La Línea, and applies Schengen rules at Gibraltar\'s port and airport instead. Customs union with the EU. Frontier-workers and short-term visitors no longer hit EES delays. Sovereignty over Gibraltar is unchanged.' },
        { q: 'Is the Gibraltar playbook worth £497 vs the others at £397?', a: 'Yes if you fit the buyer. Cat 2 net worth is £2m+. HEPSS is senior specialist roles only. Frontier-worker has new 2026 dynamics. The market is narrow and the playbook reflects that depth. If your situation doesn\'t fit those three, the Spain playbook is cheaper and probably more useful.' },
        { q: 'Cat 2 net worth: how strict is the £2m?', a: 'Strict. The Finance Centre Director will not approve below that bar. The playbook walks through what counts (liquid assets, real estate, investments) and what doesn\'t (future earnings, pension entitlements not yet drawn).' },
        { q: 'Can I do this without an immigration lawyer?', a: 'HEPSS: usually yes, the employer drives the application. Cat 2: we recommend briefing a Gibraltar-licensed specialist before filing because vetting is a one-shot process. The playbook gives you the exact questions to ask them and includes three vetted referrals.' },
      ]}
    />
  );
}
