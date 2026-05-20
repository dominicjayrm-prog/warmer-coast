import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'About WarmerCoast | UK to Spain, Portugal & Gibraltar relocation, by Dominic Roworth',
  description:
    'WarmerCoast is built by Dominic Roworth, a UK-born relocation researcher based on the Mediterranean coast. Honest, sourced playbooks for moving to Spain, Portugal or Gibraltar from the UK.',
  alternates: { canonical: '/about' },
};

const personDom = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dominic Roworth',
  jobTitle: 'Founder, WarmerCoast',
  worksFor: { '@type': 'Organization', name: 'WarmerCoast' },
  url: 'https://warmercoast.com/about',
  sameAs: [
    'https://www.linkedin.com/in/dominicroworth/',
    'https://www.instagram.com/dj.rar',
  ],
  description:
    'British relocation researcher helping UK adults move to Spain, Portugal or Gibraltar. Writes about visas, tax residency, banking, schools, and the post-Brexit reality on the ground.',
};

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WarmerCoast',
  url: 'https://warmercoast.com',
  founder: {
    '@type': 'Person',
    name: 'Dominic Roworth',
    url: 'https://warmercoast.com/about',
  },
  description:
    'Practical, sourced relocation playbooks for British adults moving to Spain, Portugal or Gibraltar. UK-tax-aware. 2026 ready.',
};

export default function AboutPage() {
  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personDom) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-content max-w-3xl">
          <Badge tone="warm" uppercase>About</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
            Honest UK to Iberia relocation help, built by someone who lives it.
          </h1>
          <p className="mt-5 text-[18px] leading-relaxed text-muted">
            WarmerCoast is the UK relocation resource I wish I&apos;d had when I started looking
            into moving abroad. Not a vague &ldquo;5 reasons to move to Spain&rdquo; PDF. Not a
            sponsored funnel into a regulated adviser. Just the actual playbook for what to do, in
            what order, with the documents you need, the deadlines that matter, and the money it
            saves or costs.
          </p>
        </div>
      </section>

      <section className="bg-surface/60 py-14">
        <div className="container-content max-w-3xl">
          <Card variant="bordered">
            <CardBody className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-pill border border-border bg-gradient-to-br from-warm-glow to-warm">
                {/* Replace with a real headshot at /public/dominic.jpg whenever you upload one. */}
                <Image src="/icon.svg" alt="" fill className="opacity-90" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                  Written by
                </div>
                <div className="display mt-1 text-2xl font-semibold tracking-tight text-ink">
                  Dominic Roworth
                </div>
                <div className="text-sm text-muted">Founder, WarmerCoast</div>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  British, late thirties, currently living between London and the Mediterranean. I
                  spend my time reading tax codes, visa policy updates and treaty stacks so the
                  people I help don&apos;t have to. Every page on WarmerCoast is written or
                  reviewed by me.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                  <a
                    href="https://www.linkedin.com/in/dominicroworth/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-white px-3 py-1.5 font-semibold text-ink hover:border-ink"
                  >
                    LinkedIn <span aria-hidden>↗</span>
                  </a>
                  <a
                    href="https://www.instagram.com/dj.rar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-white px-3 py-1.5 font-semibold text-ink hover:border-ink"
                  >
                    Instagram <span aria-hidden>↗</span>
                  </a>
                  <a
                    href="mailto:hello@warmercoast.com"
                    className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-white px-3 py-1.5 font-semibold text-ink hover:border-ink"
                  >
                    Email <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="container-content max-w-3xl">
          <h2 className="display text-display-3 font-semibold tracking-tight text-ink text-balance">
            Why WarmerCoast exists
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            More than 80,000 UK citizens leave Britain for Spain, Portugal or Gibraltar every
            year, and the number is growing. Every one of them runs into the same wall:
            information that&apos;s either out of date, written for a different country, or
            paywalled behind a £400-an-hour adviser.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            I&apos;ve seen people lose £15,000 on a tax decision that took 20 minutes to research
            properly. I&apos;ve seen families file the wrong visa and wait an extra eight months.
            I&apos;ve seen pensioners miss the Beckham Law election window because no one told
            them it existed.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            WarmerCoast fixes that. Each playbook walks you through the move in order: pre-move UK
            actions, visa application, arrival, tax registration, year-one filing. Every claim is
            sourced from gov.uk, the Agencia Tributaria, Portal das Finanças, or the Gibraltar
            Income Tax Office. Updated for 2026. Written by someone who actually reads the
            primary sources.
          </p>

          <h2 className="display mt-12 text-display-3 font-semibold tracking-tight text-ink text-balance">
            What this is, what it isn&apos;t
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Card variant="bordered">
              <CardBody>
                <Badge tone="success">What it is</Badge>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-ink/90">
                  <li>Structured, sourced relocation playbooks for UK citizens.</li>
                  <li>Tax-aware: Beckham Law, IFICI, Cat 2, treaty mechanics, all worked through.</li>
                  <li>Updated for 2026 rules including the new Gibraltar-EU border treaty.</li>
                  <li>One-time purchase, lifetime access, 12 months of updates included.</li>
                </ul>
              </CardBody>
            </Card>
            <Card variant="bordered">
              <CardBody>
                <Badge tone="gibraltar">What it isn&apos;t</Badge>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-ink/90">
                  <li>Regulated financial, legal or tax advice for your specific case.</li>
                  <li>A &ldquo;done for you&rdquo; service. You still do the paperwork.</li>
                  <li>A funnel into a paid adviser network or affiliate links.</li>
                  <li>Generic &ldquo;why Spain is amazing&rdquo; content.</li>
                </ul>
              </CardBody>
            </Card>
          </div>

          <h2 className="display mt-12 text-display-3 font-semibold tracking-tight text-ink text-balance">
            How I work
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            Every page has a &ldquo;reviewed&rdquo; date. When a tax rule changes, the relevant
            module gets updated and a note appears at the top. When a reader asks a question that
            isn&apos;t covered, I add the answer. When the Gibraltar-EU border treaty was finally
            signed in 2025, the Gibraltar playbook was rewritten within a week.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            I cite primary sources inline so you can verify. I tell you when I don&apos;t know
            something. I tell you when a strategy is politically fragile. And when the right
            answer is &ldquo;hire a specialist for this one&rdquo;, I tell you that too, and I
            give you the questions to ask them.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/playbook/spain"
              className="inline-flex items-center gap-2 rounded-pill bg-ink px-5 py-3 text-sm font-semibold text-white hover:-translate-y-px transition-all"
            >
              See the Spain playbook
            </Link>
            <Link
              href="/playbook/portugal"
              className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-5 py-3 text-sm font-semibold text-ink hover:border-ink"
            >
              See the Portugal playbook
            </Link>
            <Link
              href="/playbook/gibraltar"
              className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-5 py-3 text-sm font-semibold text-ink hover:border-ink"
            >
              See the Gibraltar playbook
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
