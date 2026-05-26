import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Schools in Portugal for British Children 2026 | International, IB, Public',
  description:
    'Schools in Portugal for British movers in 2026. 77 international schools, the British-curriculum options in Lisbon/Porto/Algarve, IB Diploma offerings, public-school reality, real fee ranges by region and pathway choice.',
  alternates: { canonical: '/portugal/schools' },
  openGraph: { url: '/portugal/schools' },
  keywords: [
    'British schools Portugal',
    'international schools Lisbon',
    'international schools Porto',
    'international schools Algarve',
    'St Julian\'s Carcavelos',
    'Oporto British School',
    'IB Diploma Portugal',
    'Portuguese public school for expat children',
    'St Dominic\'s International School',
  ],
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="portugal"
      subPillarSlug="schools"
      eyebrow="Schools · 2026"
      h1="Schools in Portugal for British children"
      intro="Portugal has 77 international schools — a high density for its population — concentrated in three zones: Greater Lisbon (36 schools), Greater Porto (8 schools, expanding), and the Algarve (15 schools). British-curriculum schools are strong in all three. The public system is free, increasingly well-regarded at primary level, and operates entirely in Portuguese. This is the practical breakdown by region, what each tier costs in 2026, and the IB vs A-Level pathway decision for British families."
      bullets={[
        'Public schools: free, Portuguese-medium, 12-year structure (9 basic + 3 secondary)',
        'International schools: 77 in Portugal — 36 Lisbon, 8 Porto, 15 Algarve, rest scattered',
        'British-curriculum schools: St Julian\'s, St Dominic\'s, BSL (Lisbon); Oporto British, CLIP (Porto); Aljezur and Lagoa region (Algarve)',
        'Lisbon fees: €6,000-€12,000 primary; €10,000-€20,000 secondary; some IB/British schools €18,000-€21,000',
        'Porto fees: €5,000-€8,000 primary; €9,000-€16,000 secondary',
        'Algarve fees: €6,000-€10,000 primary; €9,000-€17,000 secondary',
        'School year: mid-September → late June, three terms split by Christmas + Easter + Carnaval',
      ]}
      sections={[
        {
          id: 'two-tiers',
          title: 'Public, private and international — what each is',
          glance: { value: 'Public works for under-9s', label: 'Above 9 most Brits go international', note: 'Portuguese-medium public system' },
          body: (
            <>
              <p>
                Portugal&apos;s school system has fewer formal tiers than Spain&apos;s (no
                concertado-equivalent). Three practical options:
              </p>
              <h3 className="display mt-6 text-[20px] font-semibold text-ink">Public (Escola Pública)</h3>
              <p>
                Free, operated by the Ministério da Educação. Curriculum is the Portuguese
                national curriculum delivered in Portuguese. Structure is unusual to UK eyes:
                <strong> nine years of Ensino Básico</strong> (ages 6-15, split into three ciclos)
                followed by <strong>three years of Ensino Secundário</strong> (15-18). Compulsory
                until 18 — older than the UK&apos;s 16 floor.
              </p>
              <p>
                Quality has improved markedly since 2010, particularly in primary years. For
                British children under 8-9, public school typically works well — language
                acquisition is fast and the social integration is strong. Above 9, the academic
                load steepens before language stabilises, and most British families pivot to
                international. Lisbon districts vary considerably; Cascais and parts of the
                outer suburbs have strong public schools, central Lisbon mixed, Porto improving
                year on year.
              </p>
              <h3 className="display mt-6 text-[20px] font-semibold text-ink">Portuguese-curriculum private (Colégio Privado)</h3>
              <p>
                Fee-paying schools following the Portuguese national curriculum. Often Catholic
                (Salesians, Marists, Jesuits) or established secular institutions. Typical fees
                €3,000-€8,000/year. For families committed to long-term Portugal residency and
                wanting smaller classes than public schools at moderate cost, this is the
                sensible middle option. Curriculum and language remain Portuguese — same trade-
                off as public for older British children.
              </p>
              <h3 className="display mt-6 text-[20px] font-semibold text-ink">International schools</h3>
              <p>
                Fee-paying, English-medium (occasionally French/German), delivering UK, US, IB
                or another foreign curriculum. 77 international schools across Portugal, with
                roughly 70% concentrated in Greater Lisbon, Porto and the Algarve. Annual fees
                from roughly €5,000 at the lowest end to €21,000+ at the elite Lisbon end.
              </p>
              <p>
                For British movers with children 9+, this is the default tier. It preserves UK
                academic pathway, English-medium social environment in the early years, and
                clear UCAS routes to UK universities.
              </p>
            </>
          ),
        },
        {
          id: 'lisbon-schools',
          title: 'Lisbon: the main British-curriculum schools',
          glance: { value: '36 international schools', label: 'In Greater Lisbon', note: 'Densest cluster in Portugal' },
          body: (
            <>
              <p>
                Greater Lisbon (encompassing Cascais, Estoril, Sintra and Setúbal as well as the
                city) is the densest international-school market in Portugal. The schools British
                families most often shortlist:
              </p>
              <ul>
                <li>
                  <strong>St Julian&apos;s School (Carcavelos).</strong> The largest and oldest
                  British-tradition international school in Portugal, IB Diploma + A-Level
                  options, strong record in Oxbridge and US Ivy admissions. Fees roughly
                  €13,000-€21,000/year depending on phase.
                </li>
                <li>
                  <strong>St Dominic&apos;s International School (Outeiro de Polima).</strong>{' '}
                  Catholic IB school, English-medium, strong reputation for university entry.
                  Fees broadly comparable to St Julian&apos;s.
                </li>
                <li>
                  <strong>The British School of Lisbon (BSL).</strong> Newer English-curriculum
                  school, growing fast, fees €13,000-€21,000/year per 2026 schedule.
                </li>
                <li>
                  <strong>TASIS Portugal.</strong> American-curriculum, recently established,
                  AP and IB pathways. Mid-to-upper fee range.
                </li>
                <li>
                  <strong>IPS — International Preparatory School (Cascais).</strong> British
                  curriculum, primary focus, well-regarded for early years and primary.
                </li>
                <li>
                  <strong>Carlucci American International School of Lisbon.</strong>{' '}
                  American-curriculum, AP pathway, large campus near Sintra.
                </li>
              </ul>
              <p>
                Greater Lisbon waiting lists are real — St Julian&apos;s and St Dominic&apos;s
                routinely require applications 12+ months ahead for popular intake years
                (Reception, Year 7, Year 12). The Algarve and Porto have similar elite-school
                queues at the top schools but generally more flexibility at mid-tier schools.
              </p>
            </>
          ),
        },
        {
          id: 'porto-and-algarve-schools',
          title: 'Porto and the Algarve: the regional schools',
          body: (
            <>
              <h3 className="display text-[20px] font-semibold text-ink">Porto</h3>
              <p>
                Eight international schools, with British-curriculum particularly strong:
              </p>
              <ul>
                <li>
                  <strong>Oporto British School (OBS).</strong> The oldest British school in
                  Portugal (founded 1894), English National Curriculum, IGCSE + A-Level
                  pathway. Fees €9,000-€16,000/year by phase.
                </li>
                <li>
                  <strong>CLIP — Colégio Luso-Internacional do Porto.</strong> Bilingual
                  Portuguese-English, IGCSE + IB Diploma. Fees similar to OBS.
                </li>
                <li>
                  <strong>Lycée Français International de Porto (LFIP).</strong> French
                  curriculum, popular with families anticipating return to France or further
                  EU mobility.
                </li>
                <li>
                  <strong>CJD International School.</strong> Newer Cambridge International
                  curriculum school, opened 2023-2024.
                </li>
              </ul>
              <p>
                Porto fees average roughly 10-20% below equivalent Lisbon schools. Capacity is
                growing as Porto&apos;s British expat community expands.
              </p>
              <h3 className="display mt-6 text-[20px] font-semibold text-ink">The Algarve</h3>
              <p>
                15 international schools, concentrated around Lagos, Lagoa, Aljezur and the
                Faro region. Notable schools include:
              </p>
              <ul>
                <li>
                  <strong>Nobel International School Algarve (NISA, Lagoa).</strong>{' '}
                  British-curriculum, IGCSE + IB Diploma + A-Level options. Large campus,
                  long-established.
                </li>
                <li>
                  <strong>Aljezur International School.</strong> British curriculum,
                  primary and early secondary, growing.
                </li>
                <li>
                  <strong>The International School of the Algarve (Lagoa).</strong> Mixed
                  British/IB.
                </li>
                <li>
                  <strong>Vale Verde International School.</strong> Smaller, family-feel,
                  IGCSE pathway.
                </li>
              </ul>
              <p>
                Algarve school costs typically run €6,000-€10,000 primary, €9,000-€17,000
                secondary — slightly below Lisbon levels but with a smaller selection of A-Level
                offerings in upper-sixth.
              </p>
            </>
          ),
        },
        {
          id: 'curriculum-pathway',
          title: 'IB vs A-Level vs Portuguese pathway',
          body: (
            <>
              <p>
                Three clean curriculum options exist in Portugal — and the choice shapes UK
                versus Portuguese versus US/EU university optionality.
              </p>
              <p>
                <strong>A-Level pathway.</strong> Offered at Oporto British School, NISA, IPS
                and several others. IGCSE 14-16 then A-Levels 16-18. UCAS direct routes to UK
                universities; accepted in Portugal via the conversion table for ingresso no
                ensino superior. The most familiar route for British families and the simplest
                if UK university is the target.
              </p>
              <p>
                <strong>IB Diploma pathway.</strong> Offered at St Julian&apos;s, St
                Dominic&apos;s, CLIP Porto and others. IB Diploma sat at 18. Strongest pathway
                for US and continental European universities; accepted by UK universities and
                Portuguese universities. For families considering global university options, IB
                is often the broader passport.
              </p>
              <p>
                <strong>Portuguese pathway.</strong> Public or Portuguese-curriculum private
                school through to the Exames Nacionais at 18. Direct entry into Portuguese
                universities; UK universities accept it but the conversion is conservative.
                This pathway favours families committed long-term to Portugal and intending
                Portuguese-language tertiary study.
              </p>
              <p>
                The decisive factor for most British families is university-target geography.
                If UK universities are the realistic plan — A-Level. If a global mix — IB. If
                Portuguese (cheap, English-medium options exist at several universities) —
                Portuguese pathway.
              </p>
            </>
          ),
        },
        {
          id: 'admissions-and-timing',
          title: 'Admissions, timing, and the AIMA paperwork',
          body: (
            <>
              <p>
                Portuguese school year runs mid-September to late June. Elite Lisbon schools
                (St Julian&apos;s, St Dominic&apos;s, BSL) accept applications 12-18 months
                ahead and routinely have waiting lists at Reception, Year 7 and Year 12 entry
                points. Porto and Algarve schools have shorter lead times — typically 3-9
                months — but the most popular still fill early.
              </p>
              <p>
                Public-school enrolment runs on a regional calendar, mostly April-June for the
                following September. Out-of-cycle applications go to the regional Direção
                Regional de Educação and onto waitlists.
              </p>
              <p>
                Document requirements (any school type):
              </p>
              <ul>
                <li>Child&apos;s passport</li>
                <li>NIF for the child (Portuguese tax number, obtainable via Finanças)</li>
                <li>Child&apos;s AIMA residence permit (or proof of pending application)</li>
                <li>Apostilled UK birth certificate</li>
                <li>Sworn-translated school records from the previous school</li>
                <li>Vaccination record (Portugal requires specific vaccinations for school entry — your Portuguese GP issues the boletim de vacinas after review)</li>
                <li>Proof of address (utility bill, lease)</li>
              </ul>
              <p>
                The AIMA backlog has been the single most disruptive paperwork issue for
                school-applying families since 2023. Schools generally accept proof of pending
                AIMA application as sufficient for enrolment, but processing delays at AIMA can
                affect a child&apos;s entitlement to free SNS healthcare, school transport
                subsidies, and (for public schools) certain catchment-based admission priorities.
              </p>
            </>
          ),
        },
        {
          id: 'common-mistakes',
          title: 'Mistakes British families make',
          body: (
            <>
              <ul>
                <li>
                  <strong>Applying to St Julian&apos;s 4 months before September.</strong> Too
                  late for popular intake years. Apply 12+ months ahead or expect to be in a
                  second-choice school.
                </li>
                <li>
                  <strong>Choosing Algarve schools without checking A-Level subject coverage.</strong>{' '}
                  Smaller Algarve sixth forms can&apos;t offer every A-Level subject. If your
                  child needs Further Maths plus a specific MFL plus a science combination,
                  confirm the combination is offered before committing.
                </li>
                <li>
                  <strong>Assuming public school fees are zero.</strong> Public school tuition is
                  free, but uniforms, books, transport, lunches and trips still cost €600-€1,200
                  per child per year. Less than international but not zero.
                </li>
                <li>
                  <strong>Forgetting Bachelor entry rules for Portuguese universities.</strong>{' '}
                  Even from a British-curriculum school in Portugal, your child enters
                  Portuguese universities via the same Exames Nacionais conversion system. UCAS
                  scores get translated; not every UK A-Level combination maps cleanly to every
                  Portuguese degree&apos;s prerequisites.
                </li>
                <li>
                  <strong>Picking Lisbon by default.</strong> Porto offers stronger value at OBS
                  / CLIP; Algarve schools are cheaper and have more space; Cascais public
                  schools are genuinely good. The reflex &ldquo;Lisbon is best&rdquo; is often
                  wrong for a specific family&apos;s priorities.
                </li>
              </ul>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'Ministério da Educação · Direção-Geral da Educação', href: 'https://www.dge.mec.pt/' },
        { label: 'British Council Portugal · Schools', href: 'https://www.britishcouncil.pt/' },
        { label: 'gov.uk · Living in Portugal — children\'s education', href: 'https://www.gov.uk/guidance/living-in-portugal#childrens-education' },
        { label: 'gov.pt · Education for migrants', href: 'https://www2.gov.pt/en/migrantes-viver-e-trabalhar-em-portugal' },
      ]}
      faqs={[
        {
          q: 'How much does an international school in Portugal cost in 2026?',
          a: 'Lisbon: €6,000-€12,000/year primary, €10,000-€20,000/year secondary, with elite British and IB schools reaching €18,000-€21,000/year. Porto: €5,000-€8,000 primary, €9,000-€16,000 secondary. Algarve: €6,000-€10,000 primary, €9,000-€17,000 secondary. On top of tuition expect €1,000-€2,500/year for uniform, books, lunches, transport and trips.',
        },
        {
          q: 'Which British-curriculum schools are best in Lisbon?',
          a: 'St Julian\'s School in Carcavelos is the oldest and largest, with strong IB and A-Level results and frequent Oxbridge/Ivy admissions. St Dominic\'s International School delivers a strong IB programme. The British School of Lisbon (BSL) is newer but growing. IPS in Cascais is strong for primary. Application 12+ months ahead is sensible for elite Lisbon schools.',
        },
        {
          q: 'Can my children go to Portuguese public school?',
          a: 'Yes — once you have residence status with AIMA, your children have full right to enrol in Portuguese public schools on the same basis as Portuguese children. There are no visa-status restrictions. For children under 8-9 the language transition usually works well; above that age most British families lean to international schools to preserve curriculum continuity.',
        },
        {
          q: 'Do Portuguese universities accept A-Levels?',
          a: 'Yes, via the official conversion system run through the Direção-Geral do Ensino Superior. A-Level grades are converted into a Portuguese university entry score; combined with subject-specific prerequisites for each course, this gives access to all Portuguese universities. Several universities (especially Católica, Nova, Porto) offer English-medium programmes which avoid the Portuguese-language requirement entirely.',
        },
        {
          q: 'How long do school applications take?',
          a: 'Elite Lisbon British schools — 12-18 months ahead is the realistic timeline for the popular intake years (Reception, Year 7, Year 12). Mid-tier international schools 6-12 months. Porto international schools 3-9 months. Algarve international schools 3-6 months. Public-school enrolment runs on the national calendar — main allocation April-June for the following September.',
        },
        {
          q: 'My child doesn\'t speak Portuguese — is public school realistic?',
          a: 'Under 9, yes — schools have Portuguese-as-a-foreign-language support and immersion typically delivers conversational fluency within 6-12 months. Above 9, the academic content moves faster than language acquisition for most children and confidence/grades suffer in year one. The Cascais/Estoril and central Porto districts have better PALOP/expat-experienced public schools that handle the transition more smoothly than rural or interior schools.',
        },
      ]}
      reviewedOn="2026-05-25"
      relatedResources={[
        { kind: 'Reference', href: '/thresholds', label: '2026 thresholds for British movers', blurb: 'D7/D8 income proofs that include school-age dependants.' },
        { kind: 'Calculator', href: '/calculators/school-cost', label: 'International school cost estimator', blurb: 'Plug in your number of children and Portuguese region.' },
        { kind: 'Deep dive', href: '/portugal/cost-of-living', label: 'Portugal cost of living for British movers', blurb: 'Where school fees fit in the bigger monthly outgoings picture.' },
        { kind: 'Deep dive', href: '/portugal/visa-guide', label: 'Portugal visa guide for British movers', blurb: 'Dependant income thresholds and document packs for family applications.' },
        { kind: 'Compare', href: '/spain-vs-portugal', label: 'Schools: Spain vs Portugal compared', blurb: 'NABSS network density vs Portuguese international school options, by region.' },
        { kind: 'Playbook', href: '/playbook/portugal', label: 'The Portugal Playbook · £397', blurb: 'Step-by-step schools-shortlist methodology with region-specific comparison templates.' },
      ]}
    />
  );
}
