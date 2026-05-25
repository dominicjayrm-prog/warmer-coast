import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Gibraltar Residency 2026 | Category 2, HEPSS & Ordinary Residency for UK Citizens',
  description:
    'How British citizens become Gibraltar residents in 2026. Category 2 (£2m net worth, capped tax ~£44k), HEPSS for specialist roles, ordinary residency. Net worth thresholds, vetting timelines, approved accommodation, the new UK-EU treaty.',
  alternates: { canonical: '/gibraltar/residency' },
  openGraph: { url: '/gibraltar/residency' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="gibraltar"
      subPillarSlug="residency"
      eyebrow="Residency · 2026"
      h1="Gibraltar residency for UK citizens: Cat 2, HEPSS, ordinary"
      intro="Three established routes lead to Gibraltar residency for British citizens. Category 2 (Cat 2) for high-net-worth individuals seeking capped tax liability. HEPSS for senior specialists recruited into Gibraltar roles. Ordinary residency for everyone else, including frontier workers who become Gibraltar tax resident. The new UK-EU treaty (provisional from 15 July 2026) does not change the residency routes themselves, but transforms the practical day-to-day reality of living and working in the territory."
      bullets={[
        'Category 2: minimum £2,000,000 net worth, worldwide income assessed only on first £118,000',
        'Cat 2 tax: minimum annual liability ~£37,000, maximum ~£44,740 — capped regardless of total income',
        'HEPSS: senior specialist roles only, employer-driven application, effective tax ceiling ~£44,000',
        'Ordinary residency: 183-day physical presence or centre of vital interests in Gibraltar',
        'All routes: approved Gibraltar residential accommodation required',
        'Vetting timeline: typically 3-6 months from a complete application',
      ]}
      sections={[
        {
          id: 'cat-2',
          title: 'Category 2 Individual: how the cap really works',
          glance: {
            value: '£44,740',
            label: 'Maximum annual Gibraltar tax · regardless of income',
            note: '£2m net worth required · £37,000 minimum tax floor',
          },
          body: (
            <>
              <p>
                Cat 2 is Gibraltar&apos;s flagship residency route for high-net-worth individuals.
                The headline isn&apos;t a tax exemption — it&apos;s a cap on assessable income.
                Worldwide income is only assessed up to the first £118,000. Anything above that
                is excluded from Gibraltar tax. Combined with the territory&apos;s personal
                allowance and tax rates, this produces a minimum annual liability of approximately
                £37,000 and a maximum of around £44,740, regardless of whether you earn £200,000
                or £20 million.
              </p>
              <p>
                The eligibility bar is strict. Net worth must be at least £2,000,000, documented
                with bank statements, investment portfolios, property valuations, and source-of-funds
                evidence. Future earnings, undrawn pension entitlements, and unrealised business
                value typically don&apos;t count toward the threshold. You must secure approved
                residential accommodation in Gibraltar — own or rent qualifying property — before
                the application can progress.
              </p>
              <p>
                Applications are filed through the Finance Centre Director and undergo vetting
                that takes 3-6 months from a complete file. The vetting is thorough: criminal
                records, source of wealth, tax compliance history in prior jurisdictions. Most
                applicants engage a Gibraltar-licensed Category 2 specialist before filing —
                vetting failures are difficult to recover from.
              </p>
            </>
          ),
        },
        {
          id: 'hepss',
          title: 'HEPSS: residency through specialist employment',
          body: (
            <>
              <p>
                HEPSS (High Executive Possessing Specialist Skills) is the route for senior
                specialists recruited into Gibraltar to fill roles where no suitable local
                candidate is available. It&apos;s primarily used in finance, gaming, and maritime
                sectors. Unlike Cat 2, HEPSS doesn&apos;t require £2m of net worth; the
                qualifying threshold is the seniority and specialism of the role.
              </p>
              <p>
                The employer drives the application, not the individual. The job offer must
                document the specialist nature of the role and the lack of suitable local
                candidates. Income must meet the relevant threshold (currently above the £160,000
                level for the full cap benefit). Once approved, HEPSS caps effective tax liability
                at approximately £44,000 — broadly equivalent to the Cat 2 ceiling, achieved
                through a different mechanism.
              </p>
            </>
          ),
        },
        {
          id: 'ordinary-residency',
          title: 'Ordinary residency: the default route',
          body: (
            <>
              <p>
                Ordinary residency in Gibraltar is established by 183 days physical presence in a
                tax year OR by having your centre of vital interests in Gibraltar. There is no
                net worth requirement and no special tax cap — you pay standard Gibraltar tax
                under either the Allowance-Based System (ABS) or the Gross-Income-Based System
                (GIBS), whichever produces the lower liability.
              </p>
              <p>
                This is the route for most working people moving to Gibraltar without Cat 2 or
                HEPSS qualifying conditions: lower-tier finance staff, hospitality workers,
                small-business owners, retirees with modest income. It&apos;s also the default
                outcome for frontier workers whose centre of vital interests becomes Gibraltar
                over time.
              </p>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'Gibraltar Income Tax Office', href: 'https://www.gibraltar.gov.gi/' },
        { label: 'HM Government of Gibraltar', href: 'https://www.gibraltar.gov.gi/' },
        { label: 'House of Commons Library — UK-EU Agreement on Gibraltar', href: 'https://commonslibrary.parliament.uk/research-briefings/cbp-10572/' },
      ]}
      faqs={[
        { q: 'Does the new UK-EU treaty change Cat 2 or HEPSS rules?', a: 'No. The treaty changes border-control mechanics (Schengen rules at port/airport, no land-border checks) but does not alter the Cat 2 or HEPSS residency frameworks. The routes themselves are governed by Gibraltar domestic law.' },
        { q: 'How strict is the £2m Cat 2 net worth threshold?', a: 'Strict. The Finance Centre Director will not approve below that bar. Documentation needs to be primary evidence (bank statements, audited accounts, property valuations) covering at least 12 months of stability.' },
        { q: 'Can I work in Gibraltar under Cat 2?', a: 'Cat 2 is not a work permit. You can hold a passive role, own a Gibraltar business, or work outside Gibraltar entirely. Active employment within Gibraltar typically requires a separate work authorisation.' },
        { q: 'What does "approved accommodation" mean?', a: 'A qualifying residential property in Gibraltar that you either own or rent on a long-term lease. Hotels and short-term lets do not count. The property must be available for your exclusive use for the duration of residency.' },
      ]}
    />
  );
}
