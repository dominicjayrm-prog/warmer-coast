import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Schools in Spain for British Children 2026 | NABSS, IB, Public Bilingual',
  description:
    'Schools in Spain for British movers in 2026. Public, concertado and private tiers, the NABSS network of 80+ British curriculum schools, IB diploma options, bilingual public programmes, Bachillerato vs A-Level pathway choice, real fee ranges by region.',
  alternates: { canonical: '/spain/schools' },
  openGraph: { url: '/spain/schools' },
  keywords: [
    'British schools Spain',
    'NABSS schools',
    'Spanish public schools for expat children',
    'concertado school Spain',
    'Bachillerato vs A-Level',
    'IB schools Spain',
    'Costa del Sol British schools',
    'Madrid British schools',
    'Selectividad EvAU PAU',
  ],
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="spain"
      subPillarSlug="schools"
      eyebrow="Schools · 2026"
      h1="Schools in Spain for British children"
      intro="Spain has three school tiers — public (free), concertado (semi-private, partially state-funded, low fees, usually religious), and fully private including international and British-curriculum schools. The British-curriculum option is unusually well-developed: the NABSS network covers 80+ accredited British schools across the major expat zones, with the Costa del Sol, Madrid, Barcelona, Valencia, the Balearics and Tenerife each hosting multiple options. Here&apos;s how to choose, what each tier actually costs in 2026, and the curriculum trade-off most British families face."
      bullets={[
        'Public schools: free, Spanish-language curriculum, ESO + Bachillerato → Selectividad (EvAU/PAU)',
        'Concertado: state-subsidised semi-private, ~€100-€500/month, often Catholic, Spanish curriculum',
        'British-curriculum (NABSS-accredited): €5,000-€32,000/year depending on school + level',
        'International (IB, American, French, German): typically €8,000-€25,000/year',
        'Bilingual public programmes (Spanish + English): expanding in Madrid, Andalucía, Murcia',
        'School year: September → late June, with regional half-term and summer breaks',
        'Mandatory schooling 6-16 (Educación Primaria + ESO); Bachillerato 16-18 is optional',
      ]}
      sections={[
        {
          id: 'three-tiers',
          title: 'The three tiers of Spanish schooling',
          glance: { value: '~70% public', label: 'of all Spanish pupils', note: 'Concertado ~25%, private ~5%' },
          body: (
            <>
              <p>
                Spain&apos;s system has three distinct school types and the choice between them
                shapes the next decade of your child&apos;s life. The vast majority of Spanish
                children attend free public schools; British movers split more evenly across
                the three tiers.
              </p>
              <h3 className="display mt-6 text-[20px] font-semibold text-ink">Public (Colegio Público)</h3>
              <p>
                Free, run by the regional education ministry. Curriculum is the Spanish national
                curriculum delivered in Spanish (with Catalan, Basque, Galician or Valencian as
                the language of instruction in those regions). For British children under 9, the
                language acquisition curve is typically fast and full immersion works well. Above
                9, the academic load arrives before the language is fully stabilised, which is
                why many British families with older children skip this tier.
              </p>
              <p>
                Quality varies more by school than by region — strong individual public schools
                exist in every Spanish city. Andalucía, Madrid and parts of the Valencian
                Community now offer formal bilingual public programmes (typically 30-40% of
                lessons taught in English) which materially smooth the transition for British
                children. Bilingual programme availability per school is published by each
                Consejería de Educación.
              </p>
              <h3 className="display mt-6 text-[20px] font-semibold text-ink">Concertado (Colegio Concertado)</h3>
              <p>
                Semi-private schools that receive state subsidy in exchange for following the
                public-school curriculum and admission rules. Fees are modest — typically €100
                to €500 per month all-in. Around 60% of concertados are Catholic schools (Jesuit,
                Salesian, Marist orders), with the remainder a mix of secular cooperatives and
                older religious orders.
              </p>
              <p>
                For middle-of-the-road British families who want better facilities and smaller
                classes than typical public schools but can&apos;t justify private fees, the
                concertado is often the sweet spot. Curriculum is Spanish, so the language
                trade-off remains. Catholic admission preference applies at religious concertados
                but is usually informal at primary level.
              </p>
              <h3 className="display mt-6 text-[20px] font-semibold text-ink">Private (Colegio Privado)</h3>
              <p>
                Fully fee-paying, no state subsidy. Encompasses the British-curriculum schools
                (NABSS network), the international schools (IB, American, French, German), and
                some elite Spanish-curriculum private schools (e.g. the Madrid &ldquo;Big Six&rdquo;
                — Colegio San Patricio, Liceo Europeo, Runnymede, etc.). Annual fees ranging
                from roughly €5,000 to €32,000+ depending on school and grade level.
              </p>
              <p>
                The vast majority of British movers with school-age children end up in this
                tier — specifically in the NABSS British-curriculum schools — for one reason:
                continuity of UK academic pathway (GCSE/A-Level), which preserves UK university
                applications and avoids the Selectividad (Spanish university entrance exam)
                complexity.
              </p>
            </>
          ),
        },
        {
          id: 'nabss-network',
          title: 'The NABSS network: 80+ British schools in Spain',
          glance: { value: '80+ schools', label: 'NABSS-accredited', note: 'Across all major expat zones' },
          body: (
            <>
              <p>
                The National Association of British Schools in Spain (NABSS) is the accreditation
                body for English-language independent schools operating in Spain. Accreditation
                requires the school to follow the English National Curriculum (or a robust
                international equivalent), maintain UK-standard teaching staff qualifications, and
                pass periodic inspections. NABSS-accredited schools are also affiliated with the
                British Council in Spain.
              </p>
              <p>
                Geographic distribution roughly tracks the British expat footprint:
              </p>
              <ul>
                <li><strong>Costa del Sol (Málaga province):</strong> Sotogrande International School, Aloha College Estepona, BIC Marbella, English International College, Swans International School, Laude San Pedro and several more. The highest density of NABSS schools in Spain.</li>
                <li><strong>Madrid:</strong> The British School of Madrid, Hastings School, King&apos;s College, Runnymede College, St George&apos;s British International School.</li>
                <li><strong>Barcelona:</strong> The British School of Barcelona (BSB), Kensington School, The Olive Tree, ES International School.</li>
                <li><strong>Valencia Community (Valencia city + Costa Blanca):</strong> The British School of Vila-real, Caxton College, El Plantío International School.</li>
                <li><strong>Balearic Islands:</strong> Bellver International College Palma, King Richard III College.</li>
                <li><strong>Tenerife and Canarias:</strong> The British Yeoward School, British School of Las Palmas.</li>
              </ul>
              <p>
                Fee structure across NABSS varies materially. 2026 ranges by phase, drawn from
                published school fee schedules:
              </p>
              <ul>
                <li><strong>Early years (3-5):</strong> €5,000-€11,000/year</li>
                <li><strong>Primary (6-11):</strong> €7,000-€14,000/year</li>
                <li><strong>Secondary (11-16, IGCSE):</strong> €10,000-€20,000/year</li>
                <li><strong>Sixth form (16-18, A-Level or IB):</strong> €13,000-€32,000/year</li>
              </ul>
              <p>
                Elite Madrid and Sotogrande schools sit at the top of the range; provincial NABSS
                schools at the lower end. On top of tuition, expect €1,000-€3,000/year in
                additional charges (uniform, lunches, books, school bus, trip levies).
              </p>
              <p>
                The NABSS directory at <a href="https://nabss.org" target="_blank" rel="nofollow noopener noreferrer" className="text-warm underline-offset-2 hover:underline">nabss.org</a>{' '}
                lists every accredited school with regional filter — the canonical starting point
                for a school search.
              </p>
            </>
          ),
        },
        {
          id: 'curriculum-pathway',
          title: 'A-Level vs Bachillerato: the pathway decision',
          body: (
            <>
              <p>
                For British movers with secondary-school children the curriculum-pathway choice
                is the most consequential. The two clean paths:
              </p>
              <p>
                <strong>UK pathway (IGCSE + A-Level or IB at a NABSS school).</strong> Your child
                sits IGCSEs at 16 and A-Levels or the IB Diploma at 18. UK universities accept
                these directly via UCAS. Spanish universities accept them too via the EBAU
                (Evaluación de Bachillerato para el Acceso a la Universidad) credit-conversion
                route, but with one wrinkle: most popular Spanish degrees (medicine, dentistry,
                veterinary) require a UCAS-equivalent score plus subject-specific top-ups via the
                EvAU Fase Específica. Practically: this pathway preserves UK university optionality
                and works for Spanish universities, with extra paperwork at the Spanish end.
              </p>
              <p>
                <strong>Spanish pathway (Bachillerato + Selectividad/EvAU).</strong> Your child
                attends a Spanish-curriculum school (public, concertado or private), completes
                ESO 12-16, Bachillerato 16-18, and sits the EvAU (formerly Selectividad/PAU) for
                Spanish university entry. This is the smoothest path into Spanish universities
                and many cooperative European programmes. UK universities will accept Bachillerato
                + EvAU but the score conversion is conservative; the practical experience is that
                top UK universities are harder to reach via this route than via A-Levels.
              </p>
              <p>
                <strong>The 2026 Selectividad reform:</strong> the EvAU is being phased through a
                revised structure with more focus on competency-based assessment and standardised
                content across regions. Implementation is rolling region by region through 2026-
                2028. For 16-18-year-olds starting Bachillerato in 2026, confirm the specific
                version with each school as you visit; the reform changes weightings and some
                subject combinations.
              </p>
              <p>
                For most British families moving in 2026 with secondary-age children, the NABSS
                A-Level or IB route remains the default — it preserves optionality both sides.
              </p>
            </>
          ),
        },
        {
          id: 'admissions-and-timing',
          title: 'Admissions, timing and the August move trap',
          body: (
            <>
              <p>
                Spanish school year runs September to late June. Application windows for
                competitive private/British schools open 9-18 months ahead — Sotogrande, BSB
                Barcelona, King&apos;s College Madrid typically full for September entry by the
                preceding November/December. Provincial NABSS schools have more rolling
                availability but still require 3-6 months lead time.
              </p>
              <p>
                Public-school admission (escolarización pública) runs on a regional calendar with
                main allocation in March-May for the following September; out-of-cycle applications
                via the regional Consejería go on a waitlist for any spare capacity. Concertado
                applications run on the same regional calendar.
              </p>
              <p>
                The August move trap: many British families plan their move for July or August
                so the kids start the Spanish school year in September. By August the
                competitive private schools are full, public/concertado schools are on summer
                break with no admin staff. If you arrive in August needing a September school
                place at a school you haven&apos;t pre-applied to, you are almost certainly
                facing either a mid-year start (January) or a less-preferred school. Start the
                application process before you book the move.
              </p>
              <p>
                Required documentation for all tiers: child&apos;s passport, apostilled UK birth
                certificate, sworn-translated school records from the previous school (libro
                escolar equivalent), child vaccination record, NIE for any adult signatory
                (parent or guardian), proof of address (padrón) for catchment-based admission.
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
                  <strong>Putting an 11+ year-old straight into a Spanish public school.</strong>{' '}
                  Below 9 it usually works; 11+ tends to result in academic regression in the
                  first year and a confidence hit that&apos;s hard to recover. Use a bilingual
                  programme or a NABSS school for older children.
                </li>
                <li>
                  <strong>Choosing a NABSS school purely by fee.</strong> The cheapest schools
                  are often the newest with weaker A-Level results and limited IB. Look at
                  recent IB diploma average score, UCAS Oxbridge offers, A-Level grade
                  distribution — not just the entry fee.
                </li>
                <li>
                  <strong>Underestimating the &ldquo;extras.&rdquo;</strong> Tuition is roughly
                  70-80% of the real annual cost. Uniforms, books, lunches, transport, trips,
                  insurance can add €2,000-€4,000/year on top per child.
                </li>
                <li>
                  <strong>Assuming UK private-school fee benefits transfer.</strong> 529-style
                  US plans or UK pension-linked education schemes generally don&apos;t transfer
                  cleanly to Spanish fee structures. Plan the cash flow separately.
                </li>
                <li>
                  <strong>Forgetting Bachillerato is optional.</strong> Spanish compulsory
                  schooling ends at 16. A child who completes ESO has technically discharged
                  the legal requirement; Bachillerato is the academic-track pathway to
                  university but FP (Formación Profesional, vocational) is an alternative and
                  increasingly well-regarded route.
                </li>
              </ul>
            </>
          ),
        },
      ]}
      sources={[
        { label: 'NABSS · National Association of British Schools in Spain', href: 'https://nabss.org/' },
        { label: 'Ministerio de Educación · Sistema educativo español', href: 'https://www.educacionyfp.gob.es/' },
        { label: 'British Council Spain · Schools programme', href: 'https://www.britishcouncil.es/en/programmes/education/schools' },
        { label: 'gov.uk · Living in Spain — children\'s education', href: 'https://www.gov.uk/guidance/living-in-spain#childrens-education' },
      ]}
      faqs={[
        {
          q: 'How much does a British school in Spain actually cost in 2026?',
          a: 'NABSS-accredited British schools in 2026 charge roughly €5,000-€11,000/year at early years (3-5), €7,000-€14,000/year at primary (6-11), €10,000-€20,000/year at secondary (11-16, IGCSE), and €13,000-€32,000/year at sixth form (A-Level or IB). On top of tuition expect €1,000-€3,000/year for uniform, lunches, books, transport and trips. Elite Madrid and Sotogrande schools sit at the top of the range; provincial NABSS schools at the lower end.',
        },
        {
          q: 'Should I send my child to a public school or a British school?',
          a: 'For children under 9, Spanish public school usually works well — language immersion is fast and the academic load is light. For children 11+, the academic content moves faster than language acquisition; most British families opt for a NABSS school or a bilingual public programme. The Selectividad/EvAU exam pathway also matters for UK university plans, which often favours A-Level routes.',
        },
        {
          q: 'What is the NABSS and why does it matter?',
          a: 'The National Association of British Schools in Spain is the accreditation body for English-language independent schools in Spain. NABSS accreditation guarantees the school follows the English National Curriculum, employs UK-qualified teachers, and passes periodic inspections. Affiliation with the British Council confirms recognised standards. There are 80+ NABSS-accredited schools across all major British expat zones. The directory at nabss.org is the canonical starting point.',
        },
        {
          q: 'Do Spanish universities accept A-Levels?',
          a: 'Yes, via the EBAU (Evaluación de Bachillerato para el Acceso a la Universidad) credit-conversion. UNED runs the formal scoring conversion. The catch: for the most competitive degrees (medicine, dentistry, veterinary, certain engineering) you may need to sit the EvAU Fase Específica in your chosen subjects to top up the entry score. Most NABSS sixth forms now have experience guiding pupils through this process.',
        },
        {
          q: 'When do school applications need to be in for a September start?',
          a: 'Competitive private/NABSS schools: 9-18 months ahead. Elite schools (Sotogrande International, BSB Barcelona, King\'s College Madrid, Runnymede College Madrid) are typically full for September entry by the preceding November-December. Public and concertado: regional applications in March-May for following September. Public out-of-cycle applications go on waitlists; spaces typically open mid-September after enrolments settle.',
        },
        {
          q: 'Can my child attend Spanish state school if I\'m on a Non-Lucrative Visa?',
          a: 'Yes. Once you and your child hold TIE (foreigner identity card) and have padrón registration, you can apply to public and concertado schools on the same basis as Spanish residents. Visa status doesn\'t bar school access — it only affects work permission for adults. Private/NABSS schools accept students irrespective of visa subtype as long as residency is legal.',
        },
      ]}
      reviewedOn="2026-05-25"
      relatedResources={[
        { kind: 'Reference', href: '/thresholds', label: '2026 thresholds for British movers', blurb: 'NLV/DNV income proofs that include school-age dependants.' },
        { kind: 'Calculator', href: '/calculators/school-cost', label: 'International school cost estimator', blurb: 'Plug in your number of children and school tier — see annual cost across NABSS schools.' },
        { kind: 'Deep dive', href: '/spain/cost-of-living', label: 'Spain cost of living for British movers', blurb: 'Where schools sit in the bigger monthly outgoings picture.' },
        { kind: 'Deep dive', href: '/spain/visa-guide', label: 'Spain visa guide for British movers', blurb: 'Dependant income thresholds and document packs for family applications.' },
        { kind: 'Compare', href: '/spain-vs-portugal', label: 'Schools: Spain vs Portugal compared', blurb: 'NABSS network density vs Portugal\'s international schools — by city.' },
        { kind: 'Playbook', href: '/playbook/spain', label: 'The Spain Playbook · £397', blurb: 'Step-by-step schools-shortlist methodology with NABSS school comparison templates.' },
      ]}
    />
  );
}
