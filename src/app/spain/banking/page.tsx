import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Spanish Banking 2026 | NIE, Sabadell, BBVA, Santander for UK Movers',
  description:
    'How to open a Spanish bank account as a UK national in 2026. NIE first, then bank choice. Sabadell Expat, BBVA, Santander One, multi-currency strategy with Wise and Revolut.',
  alternates: { canonical: '/spain/banking' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="spain"
      subPillarSlug="banking"
      eyebrow="Banking · 2026"
      h1="Spanish banking for UK movers"
      intro="Spanish banks have become substantially friendlier to non-resident UK applicants since 2020. Sabadell, BBVA, and Santander now run dedicated expat onboarding streams in English. ING and Openbank cover the digital-first segment. The NIE (Número de Identificación de Extranjero) is the gateway: without it you cannot open a resident account, sign a Spanish utility contract, buy property, or register with Hacienda. Getting NIE early is the highest-leverage step of the entire move."
      bullets={[
        'NIE: required by every Spanish bank for resident accounts (non-resident accounts have lighter requirements but limited functionality)',
        'Sabadell Expat: free with €700/mo income proof, dedicated English-speaking expat desk',
        'BBVA Online: €16/mo if conditions unmet, free with payroll deposit or €600/mo direct debit',
        'Santander One: free with conditions, large branch network, traditional',
        'Openbank: app-only (owned by Santander), free, faster onboarding',
        'Wise + Revolut for cheap UK-Spain transfers and multi-currency holding',
      ]}
      sections={[
        {
          id: 'nie-first',
          title: 'NIE first: get this before anything else',
          body: (
            <>
              <p>
                The NIE is a 9-character identifier (letter + 7 digits + letter) issued by the
                Oficina de Extranjería. Every non-Spanish national who interacts with Spain
                materially has one. Without NIE you cannot register a long-term rental, sign a
                utility contract, open a resident bank account, register with Hacienda, or
                buy property.
              </p>
              <p>
                Two routes to NIE: in Spain at a Police station or Extranjería office (the
                process takes 1-4 weeks depending on the city), or in the UK at the Spanish
                Consulate in London or Edinburgh (longer wait for appointments, 4-8 weeks
                typical). Most movers get NIE in Spain shortly after arrival, but the UK route
                is useful if you need NIE for a property purchase or visa stage before moving.
              </p>
              <p>
                Once issued, NIE is permanent and never changes. Keep multiple printed copies —
                Spanish bureaucracy still runs on photocopies of identity documents.
              </p>
            </>
          ),
        },
        {
          id: 'choosing-bank',
          title: 'Which Spanish bank fits which buyer',
          body: (
            <>
              <p>
                Three traditional banks dominate the British-expat segment:
              </p>
              <ul>
                <li>
                  <strong>Sabadell Expat</strong>: most popular among British movers in Andalucía
                  and the Costa del Sol. Free current account with €700/mo deposit. Dedicated
                  English-speaking expat team. Multi-currency capability limited.
                </li>
                <li>
                  <strong>BBVA Online</strong>: strong digital app, broad ATM network. €16/mo
                  fee waived with payroll deposit or qualifying direct debits. Good for tech
                  workers and digital nomads. Limited expat hand-holding compared to Sabadell.
                </li>
                <li>
                  <strong>Santander One</strong>: largest branch network in Spain, traditional
                  retail relationship. Free with three direct debits and a card payment per
                  quarter. Best fit for buyers wanting in-person banking and frequent branch
                  visits.
                </li>
              </ul>
              <p>
                For app-only banking, <strong>Openbank</strong> (owned by Santander) is the
                fastest onboarding option. Free, no monthly fees, no branch visits required.
                Good for digital-first movers who don&apos;t need cash deposit facilities.
              </p>
              <p>
                Standard documentation for opening: passport, NIE certificate, padrón
                (town-hall residency registration), proof of income (UK payslips or pension
                statements), and a small initial deposit (typically €100-€300).
              </p>
            </>
          ),
        },
        {
          id: 'multi-currency',
          title: 'Multi-currency strategy: Spanish bank + Wise + UK account',
          body: (
            <>
              <p>
                The default British-mover banking stack is three-layered. A Spanish current
                account at one of the major banks handles daily euro expenses, Spanish utility
                direct debits, mortgage payments if buying, and Bizum (Spain&apos;s instant
                peer-to-peer payment network, the equivalent of UK Faster Payments). The UK
                account stays open for legacy income — UK rental, pension drawdowns to a UK
                account before transferring, ISA wrappers. Wise or Revolut sits in between for
                FX conversion.
              </p>
              <p>
                Wise gives you GBP, EUR, USD and 30+ other balances at near-interbank rates.
                For a typical British mover transferring £2,000-£5,000 per month from UK
                income to Spanish living costs, Wise saves £400-£900 per year in FX vs Spanish
                bank conversion rates. Wise does not replace a Spanish bank for direct debits,
                but it dramatically reduces the FX bleed.
              </p>
              <p>
                Revolut serves the same purpose with a slightly different focus — better
                travel card features, slightly worse FX on larger amounts. Most movers run
                both Wise and a Spanish bank, plus a UK account, and rarely use a Spanish bank
                for FX at all.
              </p>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'Banco de España — banking supervisor', href: 'https://www.bde.es/' },
        { label: 'gov.uk — opening a bank account in Spain', href: 'https://www.gov.uk/guidance/living-in-spain' },
        { label: 'gov.uk — Common Reporting Standard', href: 'https://www.gov.uk/government/publications/exchange-of-information-common-reporting-standard' },
      ]}
      faqs={[
        { q: 'Can I open a Spanish bank account before getting NIE?', a: 'Yes, a non-resident account can be opened with just passport and overseas address proof, but it has limited functionality (no direct debits for Spanish bills, limited mortgage capability). For a real resident account you need NIE.' },
        { q: 'How long does opening a Spanish account take?', a: 'Walk-in to Sabadell Expat or Santander branch with documents: same-day account open. Openbank app-only: 24-48 hours. BBVA Online: 2-5 working days. All faster than equivalent UK high-street processes for non-residents.' },
        { q: 'Will my Spanish account be visible to UK HMRC?', a: 'Yes, under the Common Reporting Standard. Spain reports account balances annually to your declared tax residency country. If you remain UK tax resident, HMRC sees the account. Once Spanish tax resident, Spain treats it as a domestic account.' },
        { q: 'What is Bizum and do I need it?', a: 'Bizum is Spain\'s near-universal instant peer-to-peer payment network, similar to UK Faster Payments via mobile number. Splitting restaurant bills, paying for AirBnB cleaners, transferring to friends. Activate it on your Spanish bank app — almost every Spaniard uses it.' },
      ]}
    />
  );
}
