import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Gibraltar Banking 2026 | Sterling & Euro Accounts, GIB, Jyske, NatWest',
  description:
    'How to open a Gibraltar bank account as a UK citizen in 2026. Gibraltar International Bank, Jyske Bank, NatWest International, due diligence, Sterling and Euro multi-currency accounts.',
  alternates: { canonical: '/gibraltar/banking' },
  openGraph: { url: '/gibraltar/banking' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="gibraltar"
      subPillarSlug="banking"
      eyebrow="Banking · 2026"
      h1="Gibraltar banking for British movers"
      intro="Gibraltar is a regulated finance hub with strict due diligence. Onboarding takes longer than a UK high-street account, but the multi-currency capabilities are excellent, the regulatory framework is reassuring, and the territory&apos;s post-Brexit position means clean Sterling and Euro access in one place. The key institutions are Gibraltar International Bank (GIB), Jyske Bank Gibraltar, NatWest International, and a small number of private banks for high-net-worth clients."
      bullets={[
        'Gibraltar International Bank (GIB): government-owned, strongest retail product for residents',
        'NatWest International: UK-familiar, simpler onboarding for British movers',
        'Jyske Bank Gibraltar: established offshore offering, multi-currency strong',
        'Sterling and Euro accounts available side-by-side at all three',
        'Source-of-funds documentation required for any opening above modest limits',
        'Wise / Revolut multi-currency: useful supplement but not a full Gibraltar replacement',
      ]}
      sections={[
        {
          id: 'choosing-a-bank',
          title: 'Which Gibraltar bank fits which buyer',
          body: (
            <>
              <p>
                Gibraltar International Bank is the default for most Gibraltar residents.
                Government-owned (by HM Government of Gibraltar), full retail product range,
                Sterling and Euro current accounts, mortgages, savings. Onboarding takes 2-6
                weeks depending on profile complexity, and they require a Gibraltar residence
                permit or compelling reason for the account (employment offer, property
                purchase).
              </p>
              <p>
                NatWest International is the easiest entry point for British movers in their
                first months. Many UK NatWest customers can pre-apply from the UK before the
                move and convert to a Gibraltar-resident account once their address is set up.
                Multi-currency support is good, the UI is familiar, customer service is
                English-speaking.
              </p>
              <p>
                Jyske Bank Gibraltar suits more sophisticated multi-currency needs. Stronger
                investment products, slightly higher minimum balance expectations, longer
                onboarding. Used by Cat 2 residents and high-earning frontier workers more than
                day-to-day expats.
              </p>
            </>
          ),
        },
        {
          id: 'due-diligence',
          title: 'Due diligence: what every Gibraltar bank will ask',
          body: (
            <>
              <p>
                Gibraltar banks operate under the Gibraltar Financial Services Commission
                (GFSC) and are aligned with EU and UK anti-money-laundering frameworks. The
                practical effect for the customer is that opening an account takes longer than
                a UK high-street equivalent, and the bank will ask for more documentation. You
                will be asked for:
              </p>
              <ul>
                <li>Passport plus a recent utility bill showing your current address</li>
                <li>Proof of Gibraltar residence (permit, residential lease, employment contract)</li>
                <li>Source of funds for the opening deposit (payslips, pension statements, sale-of-property evidence)</li>
                <li>For larger balances: source of wealth narrative covering at least 5 years</li>
                <li>Tax residency confirmation (UK, Gibraltar, or other) — relevant to CRS reporting</li>
              </ul>
              <p>
                Cat 2 applicants typically open the Gibraltar account immediately after
                residency is granted. The source-of-funds dossier prepared for the Cat 2
                application is largely the same paperwork the bank wants.
              </p>
            </>
          ),
        },
        {
          id: 'multi-currency',
          title: 'Multi-currency strategy: Gibraltar bank + Wise + UK',
          body: (
            <>
              <p>
                Most British movers end up with a layered set-up: a Gibraltar account for
                Sterling and Euro day-to-day spending and bills, a UK account kept open for
                legacy income (rental, UK pension, ISA wrappers), and a Wise or Revolut
                multi-currency account for cheap conversion and travel.
              </p>
              <p>
                Wise gives you Sterling, Euro, USD, and 30+ other balances at near interbank
                exchange rates. It is not a Gibraltar resident account and does not replace one
                — direct debits for Gibraltar utilities, rent, and Income Tax Office payments
                go through your Gibraltar bank. But for international transfers Wise typically
                beats Gibraltar bank rates by 1-3%.
              </p>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'Gibraltar Financial Services Commission (GFSC)', href: 'https://www.fsc.gi/' },
        { label: 'Gibraltar International Bank', href: 'https://www.gibintbank.gi/' },
        { label: 'gov.uk — Common Reporting Standard for offshore accounts', href: 'https://www.gov.uk/government/publications/exchange-of-information-common-reporting-standard' },
      ]}
      faqs={[
        { q: 'How long does opening a Gibraltar bank account take?', a: 'Typically 2-6 weeks from a complete application. Faster if you have an existing relationship (e.g. UK NatWest customer applying for NatWest International), slower if your source-of-funds story is complex.' },
        { q: 'Can I open a Gibraltar account before I have a residence permit?', a: 'Most banks require some form of Gibraltar connection (residence permit, employment contract, property purchase) before opening. NatWest International is the most flexible for pre-arrival opening if you already bank with NatWest in the UK.' },
        { q: 'Will UK HMRC see my Gibraltar account?', a: 'Yes, under the Common Reporting Standard (CRS). Gibraltar reports account balances annually to your tax residence country. If you remain UK tax resident, HMRC sees the account. This is a transparency feature, not a problem if your tax filing is correct.' },
        { q: 'Do I need a Gibraltar bank as a frontier worker living in Spain?', a: 'Strongly recommended even if you live in Spain. Most Gibraltar employers pay salary into Gibraltar bank accounts, and the new UK-EU treaty makes the cross-border banking layer more important. Many frontier workers use a Gibraltar account plus a Spanish account.' },
      ]}
    />
  );
}
