import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Portuguese NISS for UK Movers 2026 | Social Security Number Guide',
  description:
    'The NISS (Número de Identificação de Segurança Social) is the Portuguese social security number — required to start work as employee or freelance (recibos verdes), claim social benefits, and contribute to the state pension. 2026 guide for British movers: application process, post-NIF sequencing, recibos verdes registration.',
  alternates: { canonical: '/portugal/niss' },
  openGraph: { url: '/portugal/niss' },
  keywords: [
    'Portugal NISS',
    'how to get NISS Portugal',
    'Portuguese social security number',
    'recibos verdes Portugal',
    'NISS for British expat',
    'Segurança Social Portugal',
  ],
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="portugal"
      subPillarSlug="niss"
      eyebrow="Social security · 2026"
      h1="Portuguese NISS (social security number) for UK movers"
      intro="The Número de Identificação de Segurança Social is Portugal&apos;s social security number — required to start employment, register as freelance (recibos verdes), claim social benefits, and accrue state-pension contributions. Unlike the NIF (which most movers obtain before arrival), the NISS is acquired post-arrival and is typically the gateway to actually starting paid work. Here&apos;s the 2026 process, the post-NIF sequence, and how it interacts with employment vs freelance scenarios."
      bullets={[
        'NISS = 11-digit number issued by the Instituto da Segurança Social (ISS)',
        'Required for: employment, recibos verdes (freelance), social benefits, state pension accrual',
        'Application via Segurança Social Direta portal or in person at any Segurança Social office',
        'Documents needed: passport, AIMA residence permit (or pending application receipt), NIF',
        'Issuance typically 3-15 working days',
        'For UK state pensioners: NISS is NOT needed to register S1 — that&apos;s done separately',
        'Recibos verdes: opens the freelance category and triggers monthly contributions from €25-€480',
      ]}
      sections={[
        {
          id: 'when-niss-is-needed',
          title: 'When you actually need a NISS',
          body: (
            <>
              <p>
                Not every British mover needs a NISS. Those who do:
              </p>
              <ul>
                <li>Anyone starting paid employment in Portugal — your employer requires NISS to register you on the payroll system</li>
                <li>Anyone going freelance (recibos verdes) — you register as a self-employed worker at the Segurança Social</li>
                <li>Anyone seeking social benefits — unemployment support, sick pay, maternity/paternity, family allowances</li>
                <li>Anyone accruing Portuguese state pension contributions</li>
              </ul>
              <p>
                Those who typically don&apos;t need NISS:
              </p>
              <ul>
                <li>UK state pensioners on S1 — your healthcare access is via the S1 mechanism, not NISS</li>
                <li>D7 retirees living off passive income (pensions, dividends, rentals) — no contributions needed</li>
                <li>Non-resident property owners — no Portuguese social security relationship</li>
              </ul>
              <p>
                If you&apos;re on a D7 with passive income only, NISS is optional. If you&apos;re
                on a D8 with remote employment or freelance income, NISS is mandatory.
              </p>
            </>
          ),
        },
        {
          id: 'application-process',
          title: 'How to apply for NISS',
          glance: { value: 'Online or in-person', label: 'Via ISS or local office', note: '3-15 working days' },
          body: (
            <>
              <p>
                Two routes:
              </p>
              <h3 className="display mt-4 text-[20px] font-semibold text-ink">Online via Segurança Social Direta</h3>
              <p>
                The Segurança Social Direta portal (seg-social.pt) allows online NISS
                application for residents with Portuguese ID and certain other categories.
                British movers with AIMA residence cards and Cartão de Cidadão (where applicable)
                can use this route. Documentation upload includes passport, AIMA card, NIF,
                proof of address.
              </p>
              <h3 className="display mt-6 text-[20px] font-semibold text-ink">In-person at Segurança Social office</h3>
              <p>
                More common for British movers in 2026 because the AIMA-permit backlog means
                many applicants don&apos;t yet have a final card. In person you can typically
                proceed with the AIMA receipt (proof of pending application) and the
                Segurança Social will issue NISS regardless. Documentation:
              </p>
              <ul>
                <li>Passport</li>
                <li>NIF</li>
                <li>AIMA residence permit OR AIMA application receipt</li>
                <li>Proof of address (utility bill or lease)</li>
                <li>Birth certificate (apostilled UK original or Portuguese translation)</li>
                <li>If employed: employer&apos;s declaration; if self-employed: declaração de início de atividade from Finanças</li>
              </ul>
              <p>
                Booking an appointment online is strongly advised — walk-in queues at busy
                Segurança Social offices in Greater Lisbon can run 2-4 hours.
              </p>
            </>
          ),
        },
        {
          id: 'recibos-verdes',
          title: 'Going freelance: recibos verdes',
          body: (
            <>
              <p>
                If you&apos;re becoming a freelancer (self-employed worker / trabalhador
                independente), NISS is paired with a Finanças-issued declaração de início de
                atividade. Together these open you as a recibos verdes worker.
              </p>
              <p>
                Recibos verdes contributions:
              </p>
              <ul>
                <li><strong>First 12 months:</strong> exemption — no Segurança Social contributions due, only IRS prepayments (Modelo 3)</li>
                <li><strong>From month 13:</strong> 21.4% of 70% of your gross invoiced income, capped and floored at specific brackets. Monthly contributions typically run €25-€480 depending on your income level</li>
                <li><strong>Annual review:</strong> contributions reconciled against actual income; adjusted up or down</li>
              </ul>
              <p>
                IRS on freelance income: 13%-48% progressive rates on net taxable income (after
                deductions). IFICI (NHR 2.0) at a flat 20% applies if your activity qualifies —
                see the <a href="/portugal/irs-jovem" className="text-warm underline-offset-2 hover:underline">IRS Jovem page</a>{' '}
                for the under-35 alternative.
              </p>
              <p>
                IVA (VAT): the threshold for IVA registration in 2026 is €15,000 of annual
                turnover. Below that, recibos verdes workers are IVA-exempt under the regime de
                isenção. Above it, you charge IVA at the standard 23% rate (with reduced rates
                for some categories).
              </p>
            </>
          ),
        },
        {
          id: 'employment-scenario',
          title: 'Employment scenario: NISS via the employer',
          body: (
            <>
              <p>
                If you&apos;re taking employment with a Portuguese employer, the registration
                process is partly handled by them:
              </p>
              <ol>
                <li>You provide your NIF and AIMA documentation to the employer&apos;s HR or payroll team</li>
                <li>The employer registers you with the Segurança Social as a new employee — this triggers NISS issuance if you don&apos;t already have one</li>
                <li>You complete a separate NISS application via the portal or office if needed</li>
                <li>Employer deducts Segurança Social contributions from your gross salary — 11% employee side, 23.75% employer side</li>
              </ol>
              <p>
                Employee contributions cover sickness, maternity/paternity, unemployment, state
                pension accrual. The 11% rate is materially lower than UK NIC (12% basic +
                Class 2 for some).
              </p>
            </>
          ),
        },
        {
          id: 'uk-totalisation',
          title: 'UK-Portugal social security totalisation',
          body: (
            <>
              <p>
                The 2019 EU Withdrawal Agreement and the underlying Convention on Social
                Security between the UK and Portugal provide for totalisation — years
                contributed in one country count toward eligibility (but not amount) in the
                other.
              </p>
              <p>
                Practically:
              </p>
              <ul>
                <li>UK NIC years already accrued count toward Portuguese state pension eligibility — useful if you become Portuguese resident with under 15 Portuguese years</li>
                <li>Portuguese contributions count toward UK state pension eligibility under the same logic</li>
                <li>The actual pension amount paid by each country is based on contributions in that country only — Portugal pays you for your Portuguese years, UK pays for your UK years, separately</li>
                <li>UK state pension is exportable abroad — paid into a Portuguese bank account in EUR or kept in UK GBP — your choice</li>
              </ul>
              <p>
                You don&apos;t need to do anything special for totalisation to apply — it&apos;s
                automatic when you claim state pension from either country with cross-border
                contributions on record. The DWP and the Portuguese Centro Nacional de Pensões
                coordinate behind the scenes.
              </p>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'Instituto da Segurança Social · NISS', href: 'https://www.seg-social.pt/' },
        { label: 'gov.pt · Apply for NISS', href: 'https://www2.gov.pt/en/servicos' },
        { label: 'gov.uk · National Insurance if you work abroad', href: 'https://www.gov.uk/national-insurance-if-you-go-abroad' },
      ]}
      faqs={[
        {
          q: 'Do I need NISS if I\'m a D7 retiree?',
          a: 'Not strictly — if you\'re living on passive income (UK state pension, dividends, rental) without working in Portugal, NISS isn\'t mandatory. You access SNS healthcare via the S1 form (if eligible for UK state pension) or via your AIMA-issued residence permit. NISS only becomes necessary if you take Portuguese employment or freelance work.',
        },
        {
          q: 'How long does NISS take to issue?',
          a: 'Online application: 5-15 working days. In-person: typically same-day to 5 working days depending on documentation completeness. The bottleneck is usually the AIMA card — if your residence permit is still pending, NISS application sits on a waitlist. Most British movers in 2026 apply with the AIMA receipt (pending), which Segurança Social accepts.',
        },
        {
          q: 'What\'s the first-year exemption for freelancers?',
          a: 'Recibos verdes (freelance) workers are exempt from Segurança Social contributions for the first 12 months of their activity. IRS income tax still applies. From month 13 you contribute 21.4% of 70% of gross invoiced income, with monthly minimums and maximums depending on your declared income level. This is similar in spirit to Spain\'s tarifa plana but mechanically different.',
        },
        {
          q: 'Can I claim UK NIC back if I move to Portugal?',
          a: 'No — UK NIC contributions accrue toward UK state pension and can\'t be refunded. But UK NIC years count toward eligibility for both UK and Portuguese state pensions under the totalisation agreement. If you have 35+ UK NIC years already, you qualify for full UK state pension at retirement age regardless of whether you contribute further. Some British movers continue voluntary Class 2/3 UK NIC contributions while in Portugal to maintain UK state pension entitlement — typically the cheapest way to preserve UK pension eligibility.',
        },
        {
          q: 'Does IFICI affect Segurança Social contributions?',
          a: 'No — IFICI is an IRS (income tax) election only. Segurança Social contributions are calculated separately on the same income base, regardless of IFICI status. IFICI gives you the 20% flat rate on qualifying income; Segurança Social still applies its own 21.4%/70% formula for freelancers or 11%/23.75% for employees.',
        },
        {
          q: 'Do my children need NISS?',
          a: 'Not typically until they\'re in education or work that triggers it. Children of resident parents are covered for SNS healthcare through the parents\' utente record without needing their own NISS. If your child becomes a young worker (e.g. weekend retail job at 16+), NISS becomes relevant at that point.',
        },
      ]}
      reviewedOn="2026-05-25"
      relatedResources={[
        { kind: 'Deep dive', href: '/portugal/nif', label: 'Portuguese NIF (tax number)', blurb: 'The first number you need, before NISS.' },
        { kind: 'Deep dive', href: '/portugal/tax', label: 'Portuguese tax: IFICI / NHR 2.0', blurb: 'How freelance income is taxed under IFICI and standard IRS.' },
        { kind: 'Deep dive', href: '/portugal/healthcare', label: 'Portuguese healthcare for UK movers', blurb: 'NISS vs S1 vs utente — which one you need depends on your status.' },
        { kind: 'Deep dive', href: '/portugal/irs-jovem', label: 'Portugal IRS Jovem (under-35 tax break)', blurb: 'Combine with NISS-registered employment or freelance for 10 years of preferential rates.' },
        { kind: 'Deep dive', href: '/portugal/visa-guide', label: 'Portugal D7 vs D8 visa guide', blurb: 'D8 holders particularly need NISS to operate as freelancers in Portugal.' },
        { kind: 'Playbook', href: '/playbook/portugal', label: 'The Portugal Playbook · £397', blurb: 'Full year-one work-registration sequence with contabilista intros.' },
      ]}
    />
  );
}
