import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'About Dom and Sofia | WarmerCoast',
  description: 'Dom spent eight years as a UK financial planner. Sofia is from Cádiz. Together they built the WarmerCoast playbooks.',
  alternates: { canonical: '/about' },
};

const personDom = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dom Roworth',
  jobTitle: 'Founder, ex-FCA financial planner',
  worksFor: { '@type': 'Organization', name: 'WarmerCoast' },
  url: 'https://warmercoast.com/about',
  address: { '@type': 'PostalAddress', addressLocality: 'Cádiz', addressCountry: 'ES' },
};

const personSofia = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sofia',
  jobTitle: 'Co-founder',
  worksFor: { '@type': 'Organization', name: 'WarmerCoast' },
  url: 'https://warmercoast.com/about',
  address: { '@type': 'PostalAddress', addressLocality: 'Cádiz', addressCountry: 'ES' },
};

export default function Page() {
  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personDom) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSofia) }} />
      <section className="bg-white py-14 sm:py-20">
        <div className="container-content max-w-3xl">
          <Badge tone="warm" uppercase>About</Badge>
          <h1 className="display mt-4 text-display-1 font-medium tracking-tight text-ink text-balance">
            Built in <span className="italic text-warm">Cádiz</span>, by two people who moved here the hard way.
          </h1>
          <p className="mt-5 text-[18px] leading-relaxed text-muted">
            Dom spent eight years as a UK financial planner before realising the only way to learn
            cross-border relocation was to do it. Sofia grew up in Cádiz, knew the Spanish system
            inside-out, and watched Dom hit every avoidable pitfall on his first year. We built
            the playbook we wished we&apos;d had.
          </p>
        </div>
      </section>

      <section className="bg-surface/60 py-14">
        <div className="container-content max-w-3xl grid gap-6 sm:grid-cols-2">
          <Card variant="bordered">
            <CardBody>
              <div className="display text-xl font-semibold tracking-tight text-ink">Dom</div>
              <p className="mt-2 text-sm text-muted">
                UK financial planner background, eight years pre-move. Did the Spain move in 2022,
                spent the first year discovering every form he hadn&apos;t known existed. Writes
                the tax and structuring content.
              </p>
            </CardBody>
          </Card>
          <Card variant="bordered">
            <CardBody>
              <div className="display text-xl font-semibold tracking-tight text-ink">Sofia</div>
              <p className="mt-2 text-sm text-muted">
                Born and raised in Cádiz, navigates Spanish bureaucracy in her sleep. Writes the
                arrival and life-admin content, runs the asesor and abogado vetting.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-content max-w-3xl">
          <h2 className="display text-display-2 font-semibold tracking-tight text-ink text-balance">
            Why three countries, not one
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            We started with Spain because that&apos;s where we live. Friends started asking about
            Portugal. Then about Gibraltar (one tax-driven move, two job-driven). The cross-border
            interaction layer turned out to be more useful than any single playbook on its own.
            That&apos;s how the bundle was born.
          </p>
          <h2 className="display mt-10 text-display-2 font-semibold tracking-tight text-ink text-balance">
            Why we charge for it
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            Because writing this honestly takes time and the alternative is putting up affiliate
            links to dodgy &ldquo;immigration consultants&rdquo; or driving readers into a regulated
            adviser&apos;s funnel they don&apos;t need. We&apos;d rather you pay us once than have
            us pretend to be neutral while taking referral fees.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/playbook/bundle"
              className="inline-flex items-center gap-2 rounded-pill bg-ink px-5 py-3 text-sm font-semibold text-white hover:-translate-y-px transition-all"
            >
              See the bundle
            </Link>
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-5 py-3 text-sm font-semibold text-ink hover:border-ink"
            >
              Read 247 reviews
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
