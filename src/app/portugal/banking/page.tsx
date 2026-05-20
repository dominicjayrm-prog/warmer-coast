import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Portuguese Banking 2026 | NIF, Millennium, ActivoBank, Wise for UK Movers',
  description:
    'How to open a Portuguese bank account as a UK national in 2026. NIF first, then bank choice. Millennium BCP, Novobanco, ActivoBank, multi-currency strategy with Wise.',
  alternates: { canonical: '/portugal/banking' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="portugal"
      subPillarSlug="banking"
      eyebrow="Banking · 2026"
      h1="Portuguese banking for UK movers"
      intro="Portuguese banking is more relaxed than Spanish or Gibraltar onboarding but rigid in one specific way: the NIF (Número de Identificação Fiscal, your Portuguese tax number) is the gateway to almost everything. Without it you cannot open a bank account, rent property, sign a utility contract, or buy anything material. Get the NIF before arriving in Portugal — it&apos;s the single most leveraged document for the entire relocation."
      bullets={[
        'NIF (tax number): obtainable from the UK via a fiscal representative, the prerequisite for everything',
        'Millennium BCP, Novobanco, BPI: traditional high-street banks with branches across Portugal',
        'ActivoBank: app-only, free, popular with newer expats',
        'Caixa Geral de Depósitos: state-owned, slightly more bureaucratic onboarding',
        'Wise + Revolut multi-currency: useful supplement for UK transfers and travel',
        'Direct debits for Portuguese utilities and rent must run from a Portuguese SEPA account',
      ]}
      sections={[
        {
          id: 'nif-first',
          title: 'NIF first: the document that unlocks everything',
          body: (
            <>
              <p>
                The NIF is a 9-digit Portuguese tax number issued by the Autoridade Tributária.
                Every Portuguese resident has one. Every non-resident who owns Portuguese
                property, holds a Portuguese bank account, or files a Portuguese tax return
                has one too. For British movers, the NIF is typically the first thing to
                obtain, before any other step of the relocation.
              </p>
              <p>
                Two routes: in person at a Finanças office in Portugal (free, but obviously
                requires being in Portugal), or remotely via a fiscal representative (typically
                €50-€200 from one of dozens of Portuguese law firms offering the service).
                Remote NIF takes 2-4 weeks. Once obtained it is permanent and never changes.
              </p>
              <p>
                After NIF is in hand, you can open a Portuguese bank account, secure a long-term
                rental, sign utility contracts, and progress your D7 or D8 visa application
                from the UK. Without NIF, none of those steps are possible.
              </p>
            </>
          ),
        },
        {
          id: 'choosing-bank',
          title: 'Which Portuguese bank suits which buyer',
          body: (
            <>
              <p>
                Three traditional banks dominate the expat segment with full branch coverage
                across Portugal:
              </p>
              <ul>
                <li>
                  <strong>Millennium BCP</strong>: largest private bank, English-speaking
                  branches in major cities, monthly fees around €5-8 for full current account.
                  Strong digital app, decent FX rates.
                </li>
                <li>
                  <strong>Novobanco</strong>: rebuilt after the Banco Espírito Santo collapse,
                  now well-regarded. Free current account for new customers, English service in
                  Algarve and Lisbon branches.
                </li>
                <li>
                  <strong>BPI</strong>: part of CaixaBank group (Spanish ownership). Good for
                  Spain-Portugal cross-border activity. Slightly more expensive monthly fees.
                </li>
              </ul>
              <p>
                For app-only banking, <strong>ActivoBank</strong> (owned by Millennium BCP) is
                popular with younger expats and digital nomads. Free current account, no
                monthly fees, English interface, fast onboarding. No physical branches, so
                cash deposit and complex transactions require the parent Millennium network.
              </p>
              <p>
                Documentation required for any Portuguese bank account: passport, NIF, proof
                of Portuguese address (rental contract or temporary AirBnB receipt with letter
                from landlord), source of income (UK payslips, pension statements, employment
                offer). Most banks ask for an initial deposit of €100-€250.
              </p>
            </>
          ),
        },
        {
          id: 'multi-currency',
          title: 'Multi-currency strategy: Wise + Portuguese bank + UK account',
          body: (
            <>
              <p>
                Most British movers settle on a three-layer setup: a Portuguese current
                account for daily expenses, rent, and Portuguese utility direct debits; a UK
                account kept open for UK rental income, pension drawdowns, and ISA wrappers;
                and a Wise or Revolut multi-currency account for cheap GBP-to-EUR conversion
                and travel.
              </p>
              <p>
                Wise gives you GBP, EUR, USD and 30+ other balances at near-interbank rates.
                Direct debits via Wise work for most subscription services but not for
                Portuguese utilities (which require a Portuguese SEPA mandate via a real
                Portuguese bank). Wise replaces a lot of FX conversion fees but doesn&apos;t
                replace a local bank for the rooted-life side of the equation.
              </p>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'Portal das Finanças — Portuguese tax authority and NIF', href: 'https://www.portaldasfinancas.gov.pt/' },
        { label: 'Banco de Portugal — banking supervisor', href: 'https://www.bportugal.pt/' },
        { label: 'gov.uk — Common Reporting Standard', href: 'https://www.gov.uk/government/publications/exchange-of-information-common-reporting-standard' },
      ]}
      faqs={[
        { q: 'Can I open a Portuguese bank account from the UK before moving?', a: 'ActivoBank and Millennium BCP both offer remote account opening for D7/D8 visa applicants. You need NIF and an apostilled passport copy. Onboarding takes 2-4 weeks. Most other Portuguese banks require an in-person branch visit.' },
        { q: 'Do I need a fiscal representative permanently?', a: 'No. Once you become Portuguese tax resident, the fiscal representative is no longer required. You can revoke the representation through Portal das Finanças. Before tax residency, you need one if you hold Portuguese property or assets.' },
        { q: 'Will my Portuguese account be visible to UK HMRC?', a: 'Yes, under the Common Reporting Standard. Portugal exchanges annual financial account information with the UK if you remain UK tax resident, or with whichever country you declared as your tax residence on the account opening forms.' },
        { q: 'What about credit cards in Portugal?', a: 'Most Portuguese banks issue debit cards by default. Credit cards exist but Portuguese banks evaluate creditworthiness on Portuguese credit history, which a new arrival does not have. Many British movers continue using a UK credit card abroad in the first 1-2 years.' },
      ]}
    />
  );
}
