import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/Badge';

const spokes: Record<string, { title: string; intro: string; body: string[] }> = {
  'non-lucrative': {
    title: 'Spain Non-Lucrative Visa (NLV): the 2026 guide',
    intro:
      'For applicants with passive income who do not need to work in Spain. The most established route, well-understood by consulates.',
    body: [
      'Income threshold is set as a multiple of IPREM. For 2026 expect roughly €30,000 per primary applicant per year, plus around €7,500 for each dependant. Bank statements and recurring source proof.',
      'No work in or for Spain. Remote work for a UK employer is the contentious area, technically prohibited under NLV, in practice tolerated when contained, but the DNV is the safer route for remote workers.',
      'Renewable. Initial one year, then two-year renewals. Permanent residency at five years, citizenship pathway at ten years.',
    ],
  },
  'digital-nomad': {
    title: 'Spain Digital Nomad Visa (DNV): full mechanics',
    intro: 'The post-2023 route for remote workers and qualifying self-employed.',
    body: [
      'Minimum monthly income €2,849 in 2026 (200% of the Spanish minimum interprofessional wage, SMI), for solo applicants. Dependants add roughly 75% of IPREM each (~€480 per dependent). Updated annually with the SMI.',
      'Eligibility for Beckham Law is the structural prize. 24% flat rate on qualifying income for six years.',
      'Applicable to employees of a non-Spanish entity, or self-employed with no more than 20% Spanish-source income.',
    ],
  },
  'work-visa': {
    title: 'Spain work visa for British nationals',
    intro: 'Employer-sponsored route. Slowest but the cleanest legally if you have an offer.',
    body: [
      'Spanish employer must demonstrate that no suitable EU candidate is available. Process runs through the Public Employment Service.',
      'Timeline 4 to 8 months typically. Initial residence permit is tied to the employer.',
      'Strong fit for tech, engineering, healthcare specialists where Spain has documented shortages.',
    ],
  },
  'golden-alternatives': {
    title: 'Spain Golden Visa: what is still open in 2026',
    intro: 'Residential property route closed in 2025. Investment-only paths remain.',
    body: [
      '€1m in Spanish government bonds, €2m in publicly traded Spanish company shares, or €1m in a Spanish bank deposit.',
      'Business investment of €1m that creates jobs or has clear public-interest economic impact.',
      'In practice few applicants take this route post-property-closure. The DNV is the modern Brit default.',
    ],
  },
  'family-reunification': {
    title: 'Spain family reunification visa',
    intro: 'Derived right for spouses, children and dependants of an existing Spanish or EU resident.',
    body: [
      'Sponsor must have legal residency for one year and demonstrate adequate accommodation and income.',
      'Applications process at the Spanish consulate after sponsor files at the Oficina de Extranjería.',
      'Faster for spouses of Spanish citizens than for spouses of long-term residents.',
    ],
  },
  'student-visa': {
    title: 'Spain student visa as a stepping stone',
    intro: 'Niche use case but worth knowing for younger applicants.',
    body: [
      'Requires enrollment in an accredited Spanish course of at least 20 hours per week.',
      'Allows part-time work up to 20 hours weekly.',
      'Can convert to a work or residence permit once you have the equivalent of a year in Spain.',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(spokes).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = spokes[params.slug];
  if (!s) return {};
  return {
    title: s.title,
    description: s.intro,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const s = spokes[params.slug];
  if (!s) notFound();

  return (
    <article className="bg-white py-14 sm:py-20">
      <div className="container-content max-w-3xl">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/spain" className="text-muted hover:text-ink">Spain</Link>
          <span className="text-faint">/</span>
          <Link href="/spain/visa-guide" className="text-muted hover:text-ink">Visa guide</Link>
        </div>
        <Badge tone="warm" uppercase className="mt-5">Spain · Visa spoke</Badge>
        <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
          {s.title}
        </h1>
        <p className="mt-4 text-[18px] leading-relaxed text-muted">{s.intro}</p>

        <div className="mt-8 flex flex-col gap-5 text-[17px] leading-relaxed text-ink/90">
          {s.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-12 rounded-card border border-border bg-surface p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
            Related
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {Object.entries(spokes)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 4)
              .map(([slug, sp]) => (
                <Link
                  key={slug}
                  href={`/spain/visa-guide/${slug}`}
                  className="rounded-card border border-border bg-white p-3 text-sm font-semibold text-ink hover:border-ink/30"
                >
                  {sp.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
}
