import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Portuguese NIF for UK Movers 2026 | How to Get One, In-Person or Remote',
  description:
    'The NIF (Número de Identificação Fiscal) is the single most important Portuguese number for British movers — needed for bank accounts, property, utilities, tax, SNS healthcare, NHR/IFICI. 2026 guide: in-person process at Finanças, remote acquisition via fiscal representative, post-Brexit changes, common mistakes.',
  alternates: { canonical: '/portugal/nif' },
  openGraph: { url: '/portugal/nif' },
  keywords: [
    'Portugal NIF',
    'how to get NIF Portugal',
    'NIF for British expat',
    'fiscal representative Portugal',
    'NIF before moving Portugal',
    'Portuguese tax number',
  ],
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="portugal"
      subPillarSlug="nif"
      eyebrow="NIF · 2026"
      h1="Portuguese NIF (tax number) for UK movers"
      intro="The Número de Identificação Fiscal is the keystone Portuguese number. Without it you can&apos;t open a bank account, sign a lease, buy property, register for SNS healthcare, take a job, register as freelance, or claim NHR / IFICI. It&apos;s also one of the easiest Portuguese formalities — issued same-day at any Finanças office in person, or remotely via a fiscal representative before you even arrive. Here&apos;s the 2026 process, the post-Brexit fiscal-rep requirement, and the order to do everything in."
      bullets={[
        'NIF = 9-digit Portuguese tax ID, issued free by the Autoridade Tributária (AT)',
        'Mandatory for: bank account, lease, property purchase, utility contracts, tax filing, SNS, work',
        'Post-Brexit: non-EU citizens (including Brits) need a Portuguese fiscal representative to obtain NIF remotely',
        'In-person at Finanças: typically same-day issuance, no fiscal rep needed',
        'Remote NIF via fiscal rep: €100-€300 one-off plus optional ongoing representation fee',
        'NIF activation: free at Finanças or online via Portal das Finanças',
        'Once you become Portuguese resident, you can revoke fiscal representation if it was used to obtain NIF',
      ]}
      sections={[
        {
          id: 'why-nif-matters',
          title: 'Why the NIF matters before everything else',
          body: (
            <>
              <p>
                The NIF is requested by virtually every Portuguese institution. Concretely, you
                can&apos;t do any of the following without one:
              </p>
              <ul>
                <li>Open a Portuguese bank account (Multicare, Médis, Allianz Care, etc.)</li>
                <li>Sign a residential lease (landlords require it)</li>
                <li>Buy property — fully blocked without NIF</li>
                <li>Sign utility contracts (water, electricity, gas, internet, mobile)</li>
                <li>Register for SNS healthcare and obtain a número de utente</li>
                <li>Start employment or register as freelance (recibos verdes)</li>
                <li>File tax returns (IRS)</li>
                <li>Apply for IFICI / NHR 2.0 status</li>
                <li>Even subscribe to a Portuguese streaming service or sign up to certain online retailers</li>
              </ul>
              <p>
                Because of this, getting the NIF is typically the first administrative step of
                any Portuguese move — even before arrival. The Portuguese system tolerates
                non-resident NIF holders without issue; many British movers obtain NIF 3-6
                months before they actually relocate.
              </p>
            </>
          ),
        },
        {
          id: 'two-paths',
          title: 'The two paths to NIF',
          body: (
            <>
              <h3 className="display text-[20px] font-semibold text-ink">Path 1: In-person at any Finanças office</h3>
              <p>
                The cheapest and most straightforward route if you&apos;re already in Portugal
                or visiting. Walk into any Serviço de Finanças office (the local tax authority
                branch — there&apos;s one in every município), bring:
              </p>
              <ul>
                <li>Valid passport</li>
                <li>Proof of address — either Portuguese (lease, utility bill) or non-Portuguese with apostille if requested</li>
                <li>If using a non-Portuguese address: a Portuguese fiscal representative is required for the NIF to be issued (see Path 2)</li>
              </ul>
              <p>
                For British movers in country on a residence-application timeline, the
                practical path is: enter Portugal on a tourist stay, find temporary
                accommodation, walk to Finanças with your lease or hotel receipt, walk out
                with NIF the same day. No appointment required at most Finanças branches.
              </p>
              <p>
                If you can produce a Portuguese address proof, no fiscal representative is
                needed at all — the NIF is issued on the spot in your own name.
              </p>
              <h3 className="display mt-6 text-[20px] font-semibold text-ink">Path 2: Remote NIF via fiscal representative</h3>
              <p>
                If you want NIF before arriving in Portugal — typically to open a bank account,
                sign a remote lease, or progress a property purchase from the UK — you go via a
                Portuguese fiscal representative.
              </p>
              <p>
                The fiscal representative is a Portuguese-resident individual or company who
                acts as your tax-correspondence point with the AT. They apply for NIF on your
                behalf using their own Portuguese address as the registered address. You sign
                a power of attorney; they file at Finanças; NIF is typically issued within
                3-10 working days.
              </p>
              <p>
                Cost: one-off NIF acquisition typically €100-€300. Ongoing fiscal representation
                (where the rep continues to receive your tax correspondence after NIF issuance)
                typically €150-€500/year. Many British movers use a fiscal rep for the initial
                NIF and then immediately update the registered address to their Portuguese
                address once they arrive, terminating ongoing representation.
              </p>
              <p>
                Post-Brexit specifics: as a non-EU national, you need a fiscal representative
                to maintain NIF with a non-Portuguese registered address. Once you become a
                Portuguese tax resident and update your address to a Portuguese one, the
                fiscal-rep requirement falls away.
              </p>
            </>
          ),
        },
        {
          id: 'right-order',
          title: 'The right order for a UK move',
          body: (
            <>
              <p>
                For a typical British mover the most efficient sequence:
              </p>
              <ol>
                <li><strong>2-4 months before move:</strong> obtain NIF remotely via fiscal representative. ~€150-€250 one-off.</li>
                <li><strong>2-3 months before move:</strong> open a Portuguese bank account using your remote NIF. ActivoBank and Multicare offer remote-onboarding for D7/D8 applicants.</li>
                <li><strong>1-2 months before move:</strong> visa applied for at Portuguese consulate (D7/D8/golden), with NIF + Portuguese bank account already in place. This makes the file materially stronger.</li>
                <li><strong>Arrival:</strong> register address at the municipal câmara, update NIF address to Portuguese via Finanças (free), terminate fiscal representation. Apply for AIMA residence permit.</li>
                <li><strong>30 days post-arrival:</strong> apply for número de utente at the centro de saúde using NIF + AIMA receipt.</li>
                <li><strong>If applicable, within first year:</strong> apply for IFICI / NHR 2.0 status if your activity qualifies.</li>
              </ol>
              <p>
                Skipping NIF and doing &ldquo;everything on arrival&rdquo; works but adds
                4-8 weeks of arrival-period friction — most banking and lease processes stall
                until NIF is in hand, and competitive rental markets (Lisbon, Cascais, central
                Porto) won&apos;t hold a property while you wait. The €200 spent on remote NIF
                pre-arrival is typically the cheapest single piece of move admin you&apos;ll buy.
              </p>
            </>
          ),
        },
        {
          id: 'common-mistakes',
          title: 'Common mistakes',
          body: (
            <>
              <ul>
                <li>
                  <strong>Using an unregulated &ldquo;NIF service.&rdquo;</strong> The fiscal
                  representative role is a legal one in Portugal. Use a registered Portuguese
                  lawyer, accountant or specialised NIF service — not a third-party form-filling
                  site that may use a shell representative who later disappears.
                </li>
                <li>
                  <strong>Forgetting to update the registered address post-move.</strong> NIF
                  correspondence (including tax-deadline reminders, Modelo 3 filings) goes to
                  the registered address. If that&apos;s still your fiscal rep&apos;s office, you
                  miss correspondence. Update via Portal das Finanças as soon as you have a
                  Portuguese address.
                </li>
                <li>
                  <strong>Letting fiscal representation lapse before activating Portuguese
                  resident status.</strong> If you terminate the fiscal rep before your address
                  is officially Portuguese on the AT system, you create a registration gap.
                  Order matters.
                </li>
                <li>
                  <strong>Using one NIF for a couple.</strong> Each individual needs their own
                  NIF. Joint bank accounts and joint leases require both partners&apos; NIFs.
                </li>
                <li>
                  <strong>Forgetting NIF for children.</strong> Children also need NIFs for
                  Portuguese school enrolment, banking on their behalf, etc. Get child NIFs at
                  the same time as adults — same process, free.
                </li>
              </ul>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'Autoridade Tributária e Aduaneira · NIF', href: 'https://www.portaldasfinancas.gov.pt/' },
        { label: 'gov.pt · Apply for tax identification number', href: 'https://www2.gov.pt/en/servicos' },
        { label: 'gov.uk · Living in Portugal', href: 'https://www.gov.uk/guidance/living-in-portugal' },
      ]}
      faqs={[
        {
          q: 'Can I get a Portuguese NIF without visiting Portugal?',
          a: 'Yes, via a Portuguese fiscal representative. You sign a power of attorney remotely, the rep applies at Finanças on your behalf, NIF issued within 3-10 working days. One-off cost typically €100-€300. Most British movers preparing for a move take this route.',
        },
        {
          q: 'How much does a fiscal representative cost?',
          a: 'One-off NIF acquisition: €100-€300. Ongoing fiscal representation: €150-€500 per year. Most British movers use the fiscal rep for initial NIF only and terminate the ongoing representation once they have a Portuguese address registered. Don\'t pay ongoing fees beyond the period you actually need representation.',
        },
        {
          q: 'Is the NIF different from the número de utente?',
          a: 'Yes. NIF is the tax number issued by Finanças (Autoridade Tributária). The número de utente is the SNS user number issued by the health system for healthcare access. NIF is mandatory for SNS registration; you obtain NIF first, then apply for número de utente at your local centro de saúde with your NIF + residence permit.',
        },
        {
          q: 'Do I need a NIF before applying for a Portuguese visa?',
          a: 'Strictly no — the D7/D8 visa application doesn\'t formally require NIF. But Portuguese consulates strongly prefer applicants who already have NIF + a Portuguese bank account because it demonstrates serious intent and reduces post-arrival friction. Almost every successful 2025-2026 D7/D8 applicant had both in place before submitting the application.',
        },
        {
          q: 'Can I get NIF for my children?',
          a: 'Yes — same process, free of charge, no fiscal rep needed for in-person application with a parent. Children need their own NIFs for Portuguese school enrolment, banking on their behalf, and IRS family return inclusion. Do it at the same time as adult NIFs.',
        },
        {
          q: 'My fiscal representative disappeared. What now?',
          a: 'Common situation when British movers use cheap one-off services that close down or change ownership. Visit any Finanças office in person with your passport — update the registered address to your current Portuguese address (or to an alternative fiscal rep) directly. This terminates the old fiscal-rep arrangement and reinstates direct correspondence with the AT.',
        },
      ]}
      reviewedOn="2026-05-25"
      relatedResources={[
        { kind: 'Deep dive', href: '/portugal/niss', label: 'Portuguese NISS (social security number)', blurb: 'The next number you need after NIF — required for work and full social security access.' },
        { kind: 'Deep dive', href: '/portugal/healthcare', label: 'Portuguese healthcare for UK movers', blurb: 'Getting the número de utente once NIF is in hand.' },
        { kind: 'Deep dive', href: '/portugal/visa-guide', label: 'Portugal visa guide: D7 and D8', blurb: 'Why having NIF in advance strengthens the visa application file.' },
        { kind: 'Deep dive', href: '/portugal/banking', label: 'Portuguese banking for UK movers', blurb: 'NIF is the first step before any Portuguese bank account opens.' },
        { kind: 'Reference', href: '/thresholds', label: '2026 thresholds for British movers', blurb: 'D7/D8 income thresholds and what comes next post-NIF.' },
        { kind: 'Playbook', href: '/playbook/portugal', label: 'The Portugal Playbook · £397', blurb: 'Step-by-step pre-move admin including vetted fiscal representative introductions.' },
      ]}
    />
  );
}
