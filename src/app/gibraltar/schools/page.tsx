import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Schools in Gibraltar 2026 | State, Private, British Curriculum, Admissions',
  description:
    'Schools in Gibraltar for British movers in 2026. State system (Westside, Bayside, GHS), Prior Park independent Catholic, primary schools and the UK National Curriculum delivery. Admissions, waitlists, fees, and the frontier-worker family option.',
  alternates: { canonical: '/gibraltar/schools' },
  openGraph: { url: '/gibraltar/schools' },
  keywords: [
    'Gibraltar schools',
    'Westside School Gibraltar',
    'Bayside School Gibraltar',
    'Prior Park Gibraltar',
    'Gibraltar state school admissions',
    'British curriculum Gibraltar',
    'frontier worker family schools',
  ],
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="gibraltar"
      subPillarSlug="schools"
      eyebrow="Schools · 2026"
      h1="Schools in Gibraltar for British children"
      intro="Gibraltar runs a compact UK-aligned school system: free state schools delivering the English National Curriculum through GCSE and A-Level, plus Prior Park as the main independent option. With a resident population of roughly 34,000, the total number of schools is small but the system is well-resourced and uses the same exam structure as UK schools — a significant advantage for British families relative to Spanish or Portuguese international options. Admission demand outstrips supply at the most popular schools and early registration is essential."
      bullets={[
        'State system: free for entitled residents — follows the UK National Curriculum',
        'Secondary state schools: Bayside (boys) and Westside (girls) — both deliver GCSE and A-Level',
        'Prior Park Gibraltar: independent Catholic secondary (11-18), the main private option',
        'Primary schools: state First Schools and Middle Schools serving distinct catchments',
        'Curriculum and exams align with England — GCSE, A-Level, recognised by UK universities',
        'Early registration essential — waiting lists are real at every popular school',
        'Frontier-worker families (Spain-side residence): admission rules tighter — confirm eligibility before assuming access',
      ]}
      sections={[
        {
          id: 'system-overview',
          title: 'How the Gibraltar school system works',
          glance: { value: 'UK National Curriculum', label: 'GCSE + A-Level pathway', note: 'Delivered free for residents' },
          body: (
            <>
              <p>
                Gibraltar&apos;s Department of Education runs a UK-aligned school system funded
                through general taxation. Schools follow the English National Curriculum;
                children sit GCSE and A-Level exams under the same boards (AQA, Edexcel, OCR)
                as English schools. UK universities and Spanish/EU universities both recognise
                Gibraltar qualifications directly with no conversion.
              </p>
              <p>
                The structure mirrors the older English &ldquo;three-tier&rdquo; pattern still
                used in some English shires:
              </p>
              <ul>
                <li><strong>First Schools (ages 4-8)</strong> — primary-level local catchment schools across the territory</li>
                <li><strong>Middle Schools (ages 8-12)</strong> — upper-primary transition</li>
                <li><strong>Secondary Schools (ages 12-16, plus sixth form to 18)</strong> — Bayside (boys), Westside (girls), and Prior Park (independent, mixed)</li>
              </ul>
              <p>
                Gibraltar College serves as the territory&apos;s further education institution
                for vocational and post-16 work outside the secondary sixth forms.
              </p>
              <p>
                State education is free at point of use for residents (Gibraltarian citizens,
                British nationals resident in Gibraltar, frontier workers&apos; children under
                specific eligibility rules, and other defined groups). Out-of-territory pupils
                whose families don&apos;t meet entitlement criteria pay tuition fees if a place
                is available at all.
              </p>
            </>
          ),
        },
        {
          id: 'secondary-state-schools',
          title: 'The two state secondary schools',
          glance: { value: 'Single-sex state secondaries', label: 'Bayside (boys), Westside (girls)', note: 'Both deliver GCSE + A-Level' },
          body: (
            <>
              <h3 className="display text-[20px] font-semibold text-ink">Bayside Comprehensive School</h3>
              <p>
                Located on Waterport Road, Bayside is Gibraltar&apos;s state secondary school for
                boys aged 12-18. Comprehensive intake — no entrance exam — drawing from Middle
                School feeder catchments. Full GCSE programme at Key Stage 4; A-Level offering
                at sixth form covers all the major UCAS combinations (sciences, humanities,
                maths, modern languages, with some specialisms).
              </p>
              <p>
                Results consistently respectable for a comprehensive — typically tracking close
                to English national averages at GCSE and slightly above at A-Level. Strong
                pastoral structure and high progression rate to UK university.
              </p>
              <h3 className="display mt-6 text-[20px] font-semibold text-ink">Westside School</h3>
              <p>
                Westside is the equivalent state secondary for girls, also 12-18. Similar
                comprehensive structure, similar GCSE/A-Level programme. The two schools have
                shared sixth-form arrangements for less-common A-Level subjects — pupils may
                cross between Bayside and Westside for specific courses to make subject
                combinations viable.
              </p>
              <h3 className="display mt-6 text-[20px] font-semibold text-ink">No fees, real waitlists</h3>
              <p>
                State secondary places are not allocated to non-resident applicants until
                resident demand is met. For British families moving to Gibraltar with secondary-
                age children, register your residency early and apply to the Department of
                Education for school placement as soon as your TIE-equivalent identification
                permits. Last-minute mid-year arrivals frequently find no immediate place
                available, particularly at popular Middle Schools and the Year 7 Bayside/
                Westside intake.
              </p>
            </>
          ),
        },
        {
          id: 'prior-park-independent',
          title: 'Prior Park: the independent option',
          glance: { value: 'Independent Catholic', label: 'Mixed, 11-18', note: 'Fee-paying — the main private secondary' },
          body: (
            <>
              <p>
                Prior Park School Gibraltar is the territory&apos;s first Catholic Independent
                Secondary School, part of the wider Prior Park Educational Trust (linked to
                Prior Park College in Bath). Mixed boys and girls, ages 11-18, delivering GCSE
                and A-Level under the UK examination boards. Strong reputation since opening,
                rapidly oversubscribed.
              </p>
              <p>
                For families who want independent education and a mixed school environment (the
                state secondaries are single-sex), Prior Park is the main option. Some families
                also use Prior Park strategically — by enrolling in Year 7 or sixth form when
                state Bayside/Westside places are tight or when the single-sex setting is
                undesired for a specific child.
              </p>
              <p>
                Fees are confirmed annually by the school; British families in 2026 should
                budget materially below comparable UK independent-school fees but above zero —
                a fraction of what equivalent UK private schools charge, given Gibraltar&apos;s
                small market. Confirm current fees direct with the school admissions office at
                application stage.
              </p>
              <p>
                Catholic admission preference is part of the school&apos;s charism but it is
                not the only admission factor; non-Catholic British families are admitted
                regularly. Sixth-form entry is also a common path for non-Catholic pupils joining
                from outside.
              </p>
            </>
          ),
        },
        {
          id: 'primary-schools',
          title: 'Primary schools: First and Middle School tier',
          body: (
            <>
              <p>
                Gibraltar uses the three-tier model still found in parts of England. Children
                attend First Schools from 4 to 8, then Middle Schools from 8 to 12, then
                secondary from 12. The First and Middle schools serve specific local catchments
                across the territory:
              </p>
              <ul>
                <li><strong>Notre Dame First School</strong> — Catholic-tradition primary in the Upper Town</li>
                <li><strong>St Mary&apos;s First School</strong> — historic primary near the Cathedral</li>
                <li><strong>Bishop Fitzgerald First School</strong> — catchment First School</li>
                <li><strong>St Paul&apos;s First School</strong> — catchment First School</li>
                <li><strong>Governor&apos;s Meadow First School</strong> — newer estate-area First School</li>
                <li><strong>Bishop Healy Middle School</strong>, <strong>St Anne&apos;s Middle School</strong> — Middle Schools serving the upper-primary phase</li>
                <li><strong>Loreto Convent</strong> — independent Catholic girls&apos; primary</li>
              </ul>
              <p>
                The Loreto Convent operates as an independent primary for girls, fee-paying;
                most other First and Middle Schools are state-funded and free for entitled
                residents. Specific catchment boundaries are managed by the Department of
                Education and confirmed at registration — your registered address determines
                which First School your child can apply to as catchment priority.
              </p>
            </>
          ),
        },
        {
          id: 'frontier-worker-families',
          title: 'Frontier-worker families: a separate set of rules',
          body: (
            <>
              <p>
                A common family pattern: live in Spain (Costa del Sol — La Línea, San Roque,
                Sotogrande, Estepona) and work in Gibraltar. The historic post-Brexit
                ambiguity around frontier-worker children attending Gibraltar schools was
                materially clarified by the 2026 EU-Gibraltar treaty. The current position:
              </p>
              <ul>
                <li>Children of registered frontier workers retain access to Gibraltar state education in many cases — but eligibility is tighter than for full Gibraltar residents</li>
                <li>Specific eligibility depends on the family&apos;s status (frontier-worker registration date, parents&apos; tax-residence position, length of employment relationship)</li>
                <li>Where Gibraltar state access isn&apos;t available, frontier-worker families either use Spanish public/private schools on the Costa del Sol side (Sotogrande International, EIC Marbella, Aloha College in Estepona — all NABSS-accredited British-curriculum schools 5-30 minutes from the border) or apply to Prior Park as a fee-paying option</li>
                <li>Spanish residency creates ESO/Bachillerato pathway considerations on the Spanish side that don&apos;t apply to true Gibraltar residents</li>
              </ul>
              <p>
                Families considering the frontier-worker life with school-age children should
                confirm the school side of the arrangement before committing to a Spanish
                property. The frontier-worker deep dive walks through the eligibility logic
                in more detail.
              </p>
            </>
          ),
        },
        {
          id: 'admissions-and-timing',
          title: 'Admissions, timing, paperwork',
          body: (
            <>
              <p>
                School year runs September to July, matching England. Department of Education
                applications open in spring for the following September across all tiers.
                Out-of-cycle applications go to a Department waitlist; mid-year placement is
                rarely immediate at popular schools.
              </p>
              <p>
                Required documentation:
              </p>
              <ul>
                <li>Child&apos;s passport</li>
                <li>Proof of Gibraltar residency (registered address — typically a property lease or deed)</li>
                <li>Parents&apos; GHA registration / proof of social security entitlement</li>
                <li>Previous school records (with sworn translation if not in English)</li>
                <li>Birth certificate</li>
                <li>Up-to-date vaccination record (NHS or Spanish equivalent both accepted with translation if needed)</li>
              </ul>
              <p>
                Apply as early as your residency status allows. The state secondary intake at
                Year 7 is the most competitive point and the one most affected by waitlists;
                primary First School allocation is more catchment-driven.
              </p>
              <p>
                For Prior Park: apply 9-18 months ahead for popular intake years; the school
                publishes its own admissions calendar. Sixth-form entry typically has more
                flexibility than Year 7.
              </p>
            </>
          ),
        },
        {
          id: 'common-mistakes',
          title: 'Common mistakes British families make',
          body: (
            <>
              <ul>
                <li>
                  <strong>Assuming Gibraltar = automatic English-school place.</strong> True for
                  residents with full entitlement — not always true for frontier-worker
                  families or out-of-territory applicants. Confirm before committing to the move.
                </li>
                <li>
                  <strong>Underestimating Year 7 waitlists.</strong> The state secondary
                  September intake is the tightest. Mid-year arrivals (October-March) often
                  face genuine no-immediate-place situations.
                </li>
                <li>
                  <strong>Forgetting the single-sex factor at state secondary.</strong>{' '}
                  Bayside is boys, Westside is girls. If you want mixed secondary, Prior Park
                  is the option — and it&apos;s fee-paying.
                </li>
                <li>
                  <strong>Underestimating the cross-border school option.</strong> For
                  Spain-side families (or those moving to Gibraltar but priced out of central
                  apartments), the NABSS schools in Sotogrande, Estepona and Marbella are
                  15-40 minutes from the border and deliver UK-curriculum education at
                  comparable or lower total cost.
                </li>
                <li>
                  <strong>Not factoring in subject combination availability.</strong>{' '}
                  Gibraltar&apos;s state secondaries are small enough that some A-Level
                  combinations require cross-school attendance (Bayside ↔ Westside). Confirm
                  the specific combinations your child needs at registration.
                </li>
              </ul>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'HM Government of Gibraltar · Department of Education', href: 'https://www.gibraltar.gov.gi/education' },
        { label: 'Prior Park School Gibraltar', href: 'https://www.priorparkgibraltar.com/' },
        { label: 'gov.uk · Living in Gibraltar — education', href: 'https://www.gov.uk/guidance/living-in-gibraltar' },
        { label: 'Westside School (state secondary)', href: 'https://www.gibraltar.gov.gi/education/schools' },
      ]}
      faqs={[
        {
          q: 'Are Gibraltar state schools free?',
          a: 'Yes for entitled residents — those with full Gibraltar residency, registered social security contributions, or specific defined entitlement categories. Books, uniforms, transport and trips are extra (modest, similar to UK state-school expectations). Out-of-territory pupils without entitlement may face fees if a place is available at all.',
        },
        {
          q: 'Do Gibraltar schools follow the UK curriculum?',
          a: 'Yes. The state schools follow the English National Curriculum, sit GCSEs and A-Levels under UK examination boards (AQA, Edexcel, OCR), and are recognised by UK universities directly without conversion. Prior Park follows the same English curriculum and exam structure. This is one of Gibraltar\'s biggest advantages for British families relative to Spanish or Portuguese options where curriculum-conversion or pathway-choice complexity exists.',
        },
        {
          q: 'Why are the two state secondaries single-sex?',
          a: 'Historical and cultural — the single-sex secondary structure dates back decades and has been retained through successive reforms. Bayside serves boys, Westside serves girls. The two schools have shared sixth-form arrangements for less-common A-Level subject combinations, so pupils may cross between sites for specific courses. Families who want mixed secondary education use Prior Park.',
        },
        {
          q: 'How much does Prior Park Gibraltar cost?',
          a: 'Confirm current fees direct with the school admissions office. As an independent Gibraltar school the fees are materially lower than equivalent UK independent schools but not zero. Catholic-school admission criteria apply nominally but non-Catholic British families are admitted regularly. Sixth-form entry is a common access route alongside the main Year 7 intake.',
        },
        {
          q: 'Can my frontier-worker family access Gibraltar state schools?',
          a: 'Possibly — but the rules are tighter than for full Gibraltar residents and depend on your specific frontier-worker registration status, employment history, and the family\'s tax-residence position. The 2026 EU-Gibraltar treaty clarified some longstanding ambiguities but eligibility is not automatic. Confirm with the Department of Education before assuming access. Spanish-side NABSS schools (Sotogrande International, Aloha College, EIC Marbella) are a strong alternative for frontier-worker families.',
        },
        {
          q: 'How early should I apply for school in Gibraltar?',
          a: 'Year 7 state secondary intake: spring of the calendar year for September entry — apply as early as your residency registration allows. Primary First Schools: catchment-based allocation, also spring for September entry. Prior Park: 9-18 months ahead for popular intake years (Year 7 and Year 12), 6-12 months ahead for other entry points. Late arrivals frequently face genuine waitlist situations.',
        },
      ]}
      reviewedOn="2026-05-25"
      relatedResources={[
        { kind: 'Reference', href: '/thresholds', label: '2026 thresholds for British movers', blurb: 'Cat 2 net-worth requirement — relevant to evidencing your family stability at application.' },
        { kind: 'Deep dive', href: '/gibraltar/residency', label: 'Gibraltar Cat 2 residency in 2026', blurb: 'Wider Cat 2 application context including school-eligibility evidence.' },
        { kind: 'Deep dive', href: '/gibraltar/frontier-worker', label: 'Frontier worker: live Spain, work Gibraltar', blurb: 'Where Gibraltar schools may or may not be available for cross-border families.' },
        { kind: 'Deep dive', href: '/spain/schools', label: 'Schools in Spain', blurb: 'NABSS-accredited British schools in nearby Sotogrande, Estepona, Marbella — the cross-border alternative.' },
        { kind: 'Calculator', href: '/calculators/school-cost', label: 'International school cost estimator', blurb: 'Including Gibraltar-side and Costa del Sol school options.' },
        { kind: 'Playbook', href: '/playbook/gibraltar', label: 'The Gibraltar Playbook · £497', blurb: 'Step-by-step year-one school admissions methodology, including frontier-worker family options.' },
      ]}
    />
  );
}
