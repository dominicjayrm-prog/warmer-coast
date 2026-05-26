import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Gibraltar Healthcare for UK Movers 2026 | GHA, Reciprocal, Cat 2 Private',
  description:
    'How British movers access healthcare in Gibraltar in 2026. Gibraltar Health Authority (GHA) registration, the UK-Gibraltar reciprocal agreement, St Bernard\'s Hospital, what Cat 2 holders are required to insure privately, frontier-worker complications. Sourced from gov.gi and the GHA.',
  alternates: { canonical: '/gibraltar/healthcare' },
  openGraph: { url: '/gibraltar/healthcare' },
  keywords: [
    'Gibraltar healthcare for British',
    'GHA Gibraltar registration',
    'St Bernard\'s Hospital',
    'Cat 2 private health insurance',
    'frontier worker healthcare Gibraltar Spain',
    'UK Gibraltar reciprocal healthcare',
  ],
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="gibraltar"
      subPillarSlug="healthcare"
      eyebrow="Healthcare · 2026"
      h1="Gibraltar healthcare for UK movers"
      intro="Gibraltar runs a compact, well-funded healthcare system through the Gibraltar Health Authority (GHA), centred on St Bernard&apos;s Hospital and a network of primary-care practices. For ordinary residents the system is free at point of use — funded through social security contributions. For Category 2 holders the rules are different: GHA requires confirmation of private medical insurance as part of the status. For UK visitors the longstanding reciprocal arrangement gives 30 days of free care on production of a UK passport. This is the route map by status."
      bullets={[
        'GHA = Gibraltar Health Authority, the territory\'s NHS-equivalent — free at point of use for entitled residents',
        'St Bernard\'s Hospital is the main acute hospital — specialist care often referred to UK or Spain',
        'UK-Gibraltar reciprocal agreement: 30 days free care for UK visitors on passport production',
        'Cat 2 holders: GHA generally requires private medical insurance to be in place — confirmed at application',
        'HEPSS holders: covered by their employer-sponsored arrangements and GHA registration',
        'Frontier workers (live Spain, work Gibraltar): cross-border coordination via EU/UK social security rules',
        'Specialist services for complex cases often involve referral to UK NHS or Spanish hospitals via formal arrangements',
      ]}
      sections={[
        {
          id: 'how-the-gha-works',
          title: 'How the GHA works',
          glance: { value: 'Free at point of use', label: 'For registered residents', note: 'Social-security funded' },
          body: (
            <>
              <p>
                The Gibraltar Health Authority operates the territory&apos;s public health system
                from the Primary Care Centre (Casemates) and St Bernard&apos;s Hospital — the
                only acute hospital on the Rock — supported by mental-health services at Ocean
                Views and various community clinics. Funding is from general taxation plus
                social-security contributions; entitled residents pay nothing at point of use.
              </p>
              <p>
                With a resident population of roughly 34,000, the system is small by NHS
                standards but well-resourced per capita. The trade-off: specialist depth is
                limited. Complex oncology, neurosurgery, cardiac interventions, transplant work,
                and several other tertiary services are typically routed via formal referral
                arrangements to UK NHS hospitals (most commonly the South East of England) or
                Spanish hospitals (most commonly Costa del Sol Hospital in Marbella, Hospital
                Quirónsalud in Málaga, or Madrid for highly specialist cases). These referrals
                are GHA-funded and travel logistics handled by the GHA — but they exist because
                Gibraltar cannot economically run every speciality in-territory.
              </p>
              <p>
                Day-to-day, the experience is good: short waits at the Primary Care Centre,
                English-language by default (with Spanish widely available), familiar UK-trained
                clinical staff, prescriptions issued at the on-site pharmacy.
              </p>
            </>
          ),
        },
        {
          id: 'registration-process',
          title: 'Registering with the GHA',
          glance: { value: 'Online or in-person', label: 'Via gov.gi or Civil Status', note: 'Issues your GHA card' },
          body: (
            <>
              <p>
                The GHA Medical Healthcare card is your point-of-care identifier. To register
                you need:
              </p>
              <ul>
                <li>Valid photo ID (passport or ID card)</li>
                <li>Recent passport-style photo</li>
                <li>Proof of up-to-date Gibraltar social security contributions OR proof of entitlement (Cat 2 status documents, HEPSS sponsorship, UK S1 form, etc.)</li>
                <li>Proof of address in Gibraltar (lease, utility bill or property deed)</li>
              </ul>
              <p>
                Registration is via the Gov.gi portal&apos;s Register/Renew Medical Healthcare
                eService or in person at the Civil Status and Registration Office. Issuance
                typically takes 1-3 weeks; in the interim you carry the receipt as proof of
                entitlement.
              </p>
              <p>
                UK state pensioners moving to Gibraltar register an S1 form on the same basis
                as in Spain or Portugal — the UK reimburses the GHA for your care via the
                long-standing reciprocal mechanism. Apply for the S1 from the NHS BSA Overseas
                Healthcare team before moving.
              </p>
            </>
          ),
        },
        {
          id: 'cat-2-healthcare',
          title: 'Category 2 and private healthcare',
          glance: { value: 'Private insurance expected', label: 'As part of Cat 2 status', note: 'Confirmed at application' },
          body: (
            <>
              <p>
                Category 2 residency is designed for high-net-worth individuals who don&apos;t
                work in Gibraltar — so the standard &ldquo;social-security-contributions buy you
                GHA access&rdquo; route doesn&apos;t directly apply. The Finance Centre Director
                ordinarily expects Cat 2 applicants to evidence private medical insurance as part
                of the application file, on the principle that a Cat 2 holder should not be a
                net draw on the GHA budget.
              </p>
              <p>
                In practice this means a comprehensive international or domestic-Gibraltar
                private health insurance policy covering you and any dependants for the duration
                of Cat 2 status. The carriers commonly used: Bupa Gibraltar, Vitality, AXA, Cigna
                Global, Allianz Care. Premiums for a 50-year-old Cat 2 holder typically run
                £1,500-£4,500 per year for comprehensive cover, scaling sharply with age.
              </p>
              <p>
                Cat 2 holders are NOT excluded from the GHA — emergency care and specific
                acute presentations are covered as for any resident. The private requirement
                is for elective and primary care. The Cat 2 deep dive walks through what the
                Finance Centre actually checks at application and renewal.
              </p>
            </>
          ),
        },
        {
          id: 'frontier-worker-healthcare',
          title: 'Frontier-worker healthcare: live Spain, work Gibraltar',
          body: (
            <>
              <p>
                If you live in Spain and work in Gibraltar (the classic frontier-worker pattern),
                your healthcare entitlement straddles both systems. Under the EU-UK Trade and
                Cooperation Agreement and the 2026 EU-Gibraltar treaty, frontier workers
                generally remain insured in the country of employment (Gibraltar) but receive
                medical care in their country of residence (Spain).
              </p>
              <p>
                Mechanically: your Gibraltar employer pays social security contributions on your
                behalf to the Gibraltar Department of Social Security. Gibraltar then issues an
                S1 form which you register in Spain. The Spanish SNS treats you as a normal
                SNS user (centro de salud, médico de familia, hospital referral) and Gibraltar
                reimburses Spain for the cost.
              </p>
              <p>
                Common errors here are not requesting the S1 from Gibraltar Social Security
                early enough (allow 6-8 weeks), forgetting that your registered address must be
                Spanish, and assuming the GHA covers you in Spain (it does not — the Spanish
                SNS does). See the frontier-worker deep dive for the full sequencing.
              </p>
            </>
          ),
        },
        {
          id: 'common-mistakes',
          title: 'Common mistakes British movers make',
          body: (
            <>
              <ul>
                <li>
                  <strong>Cat 2 applicants who skip the private health evidence.</strong> The
                  Finance Centre will flag this at the application stage. Have a policy quote
                  ready before submission.
                </li>
                <li>
                  <strong>Frontier workers using the GHA Casemates centre as their primary
                  care.</strong> Once formally S1-registered in Spain via the Gibraltar
                  employer, your primary care belongs to your Spanish centro de salud. Routine
                  use of GHA primary care in this status is wrong-footed administratively.
                </li>
                <li>
                  <strong>Assuming UK NHS prescriptions are dispensable in Gibraltar.</strong>{' '}
                  They are not. Register with the GHA, get a Gibraltar GP, transition
                  prescriptions onto the GHA system within the first 30 days.
                </li>
                <li>
                  <strong>Not requesting an S1 from the right country.</strong> If you&apos;re
                  a UK state pensioner moving to Gibraltar, request from NHS BSA. If you&apos;re
                  a frontier worker, request from Gibraltar Social Security. Different forms,
                  different processes.
                </li>
                <li>
                  <strong>Forgetting specialist referrals may involve travel.</strong> Complex
                  cardiac, oncology, neurosurgery, transplant work may route you to the UK or
                  to Spain. The GHA funds it but you plan around it.
                </li>
              </ul>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'Gibraltar Health Authority · Registration', href: 'https://www.gha.gi/registration/' },
        { label: 'HM Government of Gibraltar · Health', href: 'https://www.gibraltar.gov.gi/health' },
        { label: 'NHS BSA · Overseas Healthcare (S1 form)', href: 'https://www.nhsbsa.nhs.uk/exemption-certificates/overseas-healthcare' },
        { label: 'gov.uk · Healthcare for UK nationals in Gibraltar', href: 'https://www.gov.uk/guidance/living-in-gibraltar' },
      ]}
      faqs={[
        {
          q: 'Is GHA care really free at point of use?',
          a: 'Yes for entitled residents — those paying Gibraltar social security contributions, registered S1 holders, Cat 2 holders (for emergency/acute care), HEPSS holders, dependants of the above, and a few other defined groups. The system is funded by general taxation plus contributions; there is no per-visit charge for GP consultations, hospital care, or planned surgery at St Bernard\'s.',
        },
        {
          q: 'Do I need private health insurance for Cat 2?',
          a: 'In practical terms yes. The Finance Centre Director ordinarily expects Cat 2 applicants to evidence comprehensive private medical insurance for themselves and dependants as part of the application file. Common carriers are Bupa Gibraltar, AXA, Vitality, Cigna Global and Allianz Care; expect £1,500-£4,500/year for a 50-year-old applicant with comprehensive cover.',
        },
        {
          q: 'What happens if I need treatment Gibraltar doesn\'t offer?',
          a: 'For complex tertiary care — major cardiac surgery, advanced oncology, neurosurgery, transplants — the GHA refers you to UK NHS hospitals (most commonly in the South East of England) or to Spanish hospitals (Costa del Sol Hospital, Quirónsalud Málaga, or Madrid). The GHA funds the treatment and the travel logistics; you don\'t self-fund the gap. Routine specialist work is delivered locally at St Bernard\'s.',
        },
        {
          q: 'Can I use my UK GHIC in Gibraltar?',
          a: 'For temporary visits up to 30 days, the UK-Gibraltar reciprocal agreement gives you free emergency and necessary medical care on production of your UK passport. The GHIC itself is an EU-scoped card; the Gibraltar arrangement is separate and more generous for short stays. For residency you need full GHA registration, not the GHIC route.',
        },
        {
          q: 'How does healthcare work for frontier workers who live in Spain?',
          a: 'You pay Gibraltar social security via your employer, Gibraltar issues an S1 to you, you register the S1 in Spain. Your primary care, GP visits, prescriptions, specialist referrals all happen in the Spanish SNS at your registered Spanish centro de salud. Gibraltar reimburses Spain for the cost. Routine use of Gibraltar healthcare for elective matters in this status is administratively wrong — the right system for you is the Spanish one.',
        },
        {
          q: 'Are dental and optical care covered by the GHA?',
          a: 'Limited. The GHA provides emergency dental care, child dental care, and certain other dental services free; routine adult dental care is largely private. Optical similarly — basic eye care provided, routine spectacles and contact lenses are private. Most Gibraltar residents add modest dental/optical cover to their main health insurance.',
        },
      ]}
      reviewedOn="2026-05-25"
      relatedResources={[
        { kind: 'Reference', href: '/thresholds', label: '2026 thresholds for British movers', blurb: 'Cat 2 net-worth requirement, HEPSS thresholds — all the application-stage figures.' },
        { kind: 'Deep dive', href: '/gibraltar/residency', label: 'Gibraltar Cat 2 residency in 2026', blurb: 'The private-insurance evidence requirement fits inside the wider Cat 2 application.' },
        { kind: 'Deep dive', href: '/gibraltar/frontier-worker', label: 'Live Spain, work Gibraltar — the frontier-worker setup', blurb: 'S1 mechanics for frontier workers and where your primary care actually sits.' },
        { kind: 'Compare', href: '/spain-vs-gibraltar', label: 'Healthcare: Spain vs Gibraltar compared', blurb: 'Where each system wins for British movers, by status and life stage.' },
        { kind: 'Compare', href: '/portugal-vs-gibraltar', label: 'Healthcare: Portugal vs Gibraltar compared', blurb: 'For the HNW British mover weighing Algarve vs Rock options.' },
        { kind: 'Playbook', href: '/playbook/gibraltar', label: 'The Gibraltar Playbook · £497', blurb: 'Full year-one setup, including insurance broker introductions for Cat 2 buyers.' },
      ]}
    />
  );
}
