import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Portuguese Healthcare for UK Movers 2026 | SNS, Utente, S1, Private',
  description:
    'How British movers access Portuguese healthcare in 2026. SNS public system reform, the número de utente, S1 form for UK pensioners, taxas moderadoras (almost all abolished), Multicare and Médis private insurance. Sourced from gov.uk, the Portuguese Ministry of Health and gov.pt.',
  alternates: { canonical: '/portugal/healthcare' },
  openGraph: { url: '/portugal/healthcare' },
  keywords: [
    'Portugal healthcare for British',
    'SNS Portugal',
    'número de utente',
    'S1 form Portugal',
    'taxas moderadoras',
    'D7 health insurance requirement',
    'Multicare Médis Allianz Care Portugal',
    'NHS Portugal expat',
  ],
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="portugal"
      subPillarSlug="healthcare"
      eyebrow="Healthcare · 2026"
      h1="Portuguese healthcare for UK movers"
      intro="Portugal&apos;s Serviço Nacional de Saúde (SNS) is universally accessible to anyone legally resident — including British movers from day one of formal residency. The 2022-2024 reform abolished user fees (taxas moderadoras) across primary care, planned hospital care and surgery, leaving only non-referred emergency rooms with a modest charge. The system is genuinely free for most interactions, but capacity is uneven. Here&apos;s how to access it, where it falls short, what to add privately, and the S1 mechanics for UK state pensioners."
      bullets={[
        'SNS access: any legally resident foreigner can register and get a número de utente',
        'User fees (taxas moderadoras) abolished for almost all services since 2022 — only non-referred ER ~€14-18, capped at €40',
        'UK state pensioners: S1 form transfers your healthcare cost from UK to Portugal',
        'D7/D8 visa applicants need private insurance for the application — typically Multicare, Médis, Allianz Care, Cigna',
        'NIF + AIMA residence card → SNS centro de saúde registration → utente number issued',
        'Family doctor (médico de família) allocation can take 4-12 weeks; in Lisbon and Algarve longer',
        'Private hospital networks (Lusíadas, CUF, Trofa, Joaquim Chaves) cover most expat hot zones',
      ]}
      sections={[
        {
          id: 'how-the-sns-works',
          title: 'How the SNS works in 2026',
          glance: { value: 'Almost entirely free', label: 'Since the 2022-2024 taxa moderadora reform', note: 'Capacity uneven by region' },
          body: (
            <>
              <p>
                The Serviço Nacional de Saúde is funded through general taxation and operated by
                the Ministério da Saúde via regional Administrações Regionais de Saúde (ARS).
                Unlike Spain&apos;s region-by-region model, Portugal runs a more centralised
                system — same rules nationwide, same drug formulary, same primary-care structure.
              </p>
              <p>
                The 2022-2024 reform pushed through under PS government abolished user fees
                (taxas moderadoras) across the vast majority of SNS contact points. As of 2026:
              </p>
              <ul>
                <li><strong>Primary care GP consultations:</strong> free</li>
                <li><strong>Prescribed exams (analyses, imaging):</strong> free</li>
                <li><strong>Planned specialist hospital consultations:</strong> free</li>
                <li><strong>Surgery and hospitalisation:</strong> free</li>
                <li><strong>Non-referred hospital emergency room:</strong> €14-€18 per visit, total capped at €40 including any procedures</li>
              </ul>
              <p>
                The remaining ER charge exists specifically to dissuade non-urgent emergency-room
                use — if your GP refers you to ER, no charge. The cap is also waived for users
                in formal economic insufficiency (household monthly income below 1.5× IAS, which
                is €805.70 in 2026).
              </p>
              <p>
                Where the system frays: family-doctor allocation. The médico de família is your
                point of entry to specialist referrals, prescriptions and most administrative
                health processes. In Greater Lisbon and parts of the Algarve, waiting lists for
                allocation regularly run 4-12 weeks; some districts have outright shortages
                meaning multi-year wait-lists. Once allocated, day-to-day access is fine. Until
                allocated, you can still use unidades de saúde familiar (USF) for urgent matters
                and book private consultations to cover gaps.
              </p>
            </>
          ),
        },
        {
          id: 'getting-utente',
          title: 'Getting your número de utente',
          glance: { value: 'Required for SNS access', label: 'One-time registration', note: 'Done at your local Centro de Saúde' },
          body: (
            <>
              <p>
                The número de utente is the SNS user number — the equivalent of an NHS number,
                tied to your record on the national system. Without it you cannot book an SNS
                consultation, fill an SNS prescription, or claim S1-funded care. Every legally
                resident foreigner can obtain one.
              </p>
              <p>
                The process, in order:
              </p>
              <ol>
                <li>Obtain a NIF (Número de Identificação Fiscal) — Portugal&apos;s tax number, available before arrival via a fiscal representative or in-person at any Finanças office.</li>
                <li>Register your residency with AIMA (Agência para a Integração, Migrações e Asilo — successor to SEF) and receive your residence permit.</li>
                <li>Visit your local Centro de Saúde with passport, residence permit, NIF and proof of address (a lease or padrão equivalent). Bring originals plus photocopies.</li>
                <li>Apply for the utente number on the spot. Issuance is typically same-day or within a week.</li>
                <li>If you hold an S1, register it at this stage (see next section).</li>
              </ol>
              <p>
                Online application is now available via the gov.pt portal for some demographics,
                but Centro de Saúde in person remains the most reliable path for British movers
                in 2026.
              </p>
            </>
          ),
        },
        {
          id: 's1-for-uk-pensioners',
          title: 'The S1 form for UK state pensioners',
          body: (
            <>
              <p>
                UK state pension recipients (and recipients of certain UK exportable benefits)
                are entitled to an S1 form. The S1 confirms to the Portuguese authorities that
                the UK takes responsibility for the cost of your healthcare — and Portugal gives
                you SNS access on the same basis as a Portuguese national, with the UK reimbursing
                Portugal.
              </p>
              <p>
                In practice:
              </p>
              <ol>
                <li>Apply for the S1 from the NHS Business Services Authority Overseas Healthcare team before you leave the UK (ideally 3-6 months before).</li>
                <li>On arrival in Portugal, present the S1 at your local Centro de Saúde when applying for the utente number, or separately at the Instituto da Segurança Social.</li>
                <li>The ISS registers it on the system; from that point you are an SNS user funded by the UK.</li>
                <li>Dependants named on the S1 are covered too.</li>
              </ol>
              <p>
                The S1 also removes the private-insurance requirement at D7 visa renewal: an
                S1-registered applicant is treated as having state healthcare cover, and the
                consulate accepts this in lieu of private insurance evidence. This is the
                cleanest path for British retirees moving to Portugal — no Convenio-equivalent
                buy-in scheme to pay because the UK is footing the bill.
              </p>
            </>
          ),
        },
        {
          id: 'visa-insurance-requirement',
          title: 'D7, D8 and the private-insurance requirement',
          body: (
            <>
              <p>
                Before you become a Portuguese resident with utente status, you are not yet in
                the SNS. The D7 (passive income) and D8 (digital nomad) visa applications both
                require evidence of private health insurance covering you for the initial visa
                period.
              </p>
              <p>
                The Portuguese consulate is less rigid on insurance spec than the Spanish — there
                is no formal &ldquo;no copay, no cap&rdquo; rule equivalent to Spain&apos;s. What
                consulates look for is a policy that provides full coverage in Portugal for the
                period of the visa, with a minimum coverage amount usually around €30,000.
                Travel insurance does not qualify; you need a proper expat health policy.
              </p>
              <p>
                The carriers most commonly used by British movers in 2026 are:
              </p>
              <ul>
                <li><strong>Multicare</strong> (owned by Fidelidade) — the largest network in Portugal, strong English-speaking support, good clinic access in Lisbon and Porto.</li>
                <li><strong>Médis</strong> (owned by Ageas) — second largest, slightly better positioning in the Algarve and central Portugal.</li>
                <li><strong>Allianz Care</strong> and <strong>Cigna Global</strong> — international expat insurers, usually pricier but easier to set up before arrival; popular for the visa application stage before you switch to a Portuguese-domestic carrier post-arrival.</li>
              </ul>
              <p>
                2026 monthly pricing for a healthy 40-year-old: Multicare and Médis run roughly
                €40-€80/month for mid-tier coverage; Allianz Care and Cigna €80-€180/month for
                fuller international plans. Once you have utente status, you typically downgrade
                or cancel the private policy — many retain a low-tier policy (€30-€60/month) for
                faster specialist access in Lisbon/Porto/Algarve hot zones.
              </p>
            </>
          ),
        },
        {
          id: 'common-mistakes',
          title: 'Mistakes British movers make in year one',
          body: (
            <>
              <ul>
                <li>
                  <strong>Not registering S1 within 3 months of arrival.</strong> The S1 must be
                  registered with the Portuguese ISS — issued in the UK doesn&apos;t auto-flow
                  to Lisbon. Missing this means paying for what should be UK-funded care.
                </li>
                <li>
                  <strong>Cancelling private insurance the day you get utente.</strong> Allocation
                  to a family doctor can take 4-12 weeks after utente issuance. Keep your private
                  cover running for at least 3 months post-arrival as a safety net.
                </li>
                <li>
                  <strong>Mistaking taxas moderadoras for current.</strong> If you read a 2021
                  guide, you&apos;ll see fees of €5-€20 for GP visits — those are abolished. The
                  ONLY remaining standard fee in 2026 is non-referred ER (€14-€18, capped €40).
                </li>
                <li>
                  <strong>Buying travel insurance for the D7 visa application.</strong> Consulates
                  reject travel-cover certificates. You need an actual expat health insurance
                  policy with renewable annual coverage.
                </li>
                <li>
                  <strong>Failing the post-2026 utente residency-flag check.</strong> The SNS
                  has tightened utente database checks: patients whose address records show
                  long absences abroad may receive verification letters, and non-response leads
                  to utente suspension. Keep your registered address current with the SNS as well
                  as with Finanças.
                </li>
              </ul>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'gov.uk · Healthcare for UK nationals in Portugal', href: 'https://www.gov.uk/guidance/healthcare-in-portugal-including-madeira' },
        { label: 'gov.pt · Obtain a SNS user number', href: 'https://www2.gov.pt/en/servicos/pedir-o-numero-de-utente-do-sns' },
        { label: 'SNS · Taxas moderadoras (current rules)', href: 'https://www.sns.gov.pt/sns-saude-mais/taxas-moderadoras/' },
        { label: 'NHS BSA · Overseas Healthcare (S1 form)', href: 'https://www.nhsbsa.nhs.uk/exemption-certificates/overseas-healthcare' },
      ]}
      faqs={[
        {
          q: 'Are SNS user fees (taxas moderadoras) still charged in 2026?',
          a: 'Not for almost any standard interaction. The 2022-2024 reform abolished fees for primary care, prescribed exams, planned hospital consultations, surgery, and hospitalisation. The only remaining fee is for non-referred hospital emergency room visits — €14-€18 per visit, total capped at €40 including any procedures performed during the visit.',
        },
        {
          q: 'How quickly can I get a número de utente after arriving?',
          a: 'Same day in most Centros de Saúde, provided you have NIF + AIMA residence permit + proof of address. Allocation to a specific family doctor (médico de família) takes longer — 4-12 weeks is typical, longer in Greater Lisbon and the Algarve where allocation queues are tight.',
        },
        {
          q: 'Do I need private health insurance for the D7 visa?',
          a: 'Yes, for the application. You must show coverage of at least €30,000 valid in Portugal for the initial visa period (typically 4 months for the visa, extended through the first residence permit year). Multicare, Médis, Allianz Care and Cigna Global are the common choices. Once you have utente status and are in the SNS, the private requirement falls away at renewal.',
        },
        {
          q: 'My UK state pension hasn\'t started yet. Do I still get S1?',
          a: 'No. S1 is for those already receiving UK state pension or certain UK exportable benefits. If you\'re moving before state pension age, you access the SNS via your AIMA-issued residence permit (same as any other resident) — no S1, no UK reimbursement of Portuguese care. The S1 becomes available when your state pension begins; you can apply for it then and add it to your existing utente record.',
        },
        {
          q: 'Can I keep using my UK GP for prescriptions and remote care?',
          a: 'Only as a UK private patient. Once you become Portuguese resident, your NHS GP relationship typically ends — NHS practices remove patients who have moved abroad on Brexit settled-status grounds. UK private GPs (Babylon, Livi, Push Doctor) operate via consultation only and cannot issue prescriptions valid in Portuguese pharmacies. Plan for a Portuguese GP from week one.',
        },
        {
          q: 'How does the SNS compare to the Spanish SNS for British movers?',
          a: 'Both are universal-access systems. Portugal&apos;s is more centralised (uniform rules nationwide), more recently reformed (almost zero user fees), and more permissive on initial access (utente from day one of legal residency). Spain&apos;s offers stronger specialist depth but requires more paperwork to enter (employment/S1/Convenio routes) and has region-by-region capacity gaps. For straightforward retiree access on an S1, Portugal is slightly easier; for working-age movers with employment, the practical experience is comparable.',
        },
      ]}
      reviewedOn="2026-05-25"
      relatedResources={[
        { kind: 'Reference', href: '/thresholds', label: '2026 thresholds for British movers', blurb: 'D7/D8 minimum income figures — pair these with your insurance evidence.' },
        { kind: 'Deep dive', href: '/portugal/visa-guide', label: 'Portugal visa guide: D7 vs D8', blurb: 'Where the private-insurance evidence fits in each visa\'s document pack.' },
        { kind: 'Deep dive', href: '/portugal/tax', label: 'Portuguese tax: NHR 2.0 / IFICI', blurb: 'Tax residency and SNS entitlement interlock — get the sequencing right.' },
        { kind: 'Compare', href: '/spain-vs-portugal', label: 'Healthcare: Spain vs Portugal compared', blurb: 'Where Portugal\'s SNS wins and where Spain\'s SNS wins for British movers.' },
        { kind: 'Calculator', href: '/calculators/cost-of-living', label: 'UK vs Portugal cost of living', blurb: 'Real monthly outgoings including private health top-up budget.' },
        { kind: 'Playbook', href: '/playbook/portugal', label: 'The Portugal Playbook · £397', blurb: 'Step-by-step year-one healthcare setup including S1 registration walkthrough.' },
      ]}
    />
  );
}
