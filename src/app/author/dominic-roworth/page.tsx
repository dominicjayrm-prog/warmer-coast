import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { adminDb } from '@/lib/admin';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { SITE } from '@/lib/site';

export const dynamic = 'force-dynamic';

const AUTHOR = {
  name: 'Dominic Roworth',
  jobTitle: 'Founder & lead researcher, WarmerCoast',
  bioShort: 'British relocation researcher based on the Mediterranean coast. Reads tax codes, visa policy updates and treaty stacks so the people I help don’t have to. Every page on WarmerCoast is written or reviewed by Dominic.',
  bioLong:
    'I started WarmerCoast after watching too many British friends lose £10–40k on tax decisions they made by reading expat Facebook groups. The information was either out of date, written for the wrong country, or paywalled behind a £400-an-hour adviser. This site is the answer: structured, sourced, sequenced playbooks for the move I went through myself.',
  links: {
    linkedin: 'https://www.linkedin.com/in/dominicroworth/',
    instagram: 'https://www.instagram.com/dj.rar',
  },
  imageUrl: '/dominic-roworth.jpg',
};

const SLUG = 'dominic-roworth';

export const metadata: Metadata = {
  title: `${AUTHOR.name} — author at WarmerCoast`,
  description:
    'Every article and deep dive written by Dominic Roworth, founder of WarmerCoast. UK to Spain, Portugal and Gibraltar relocation, sourced from primary sources.',
  alternates: { canonical: `/author/${SLUG}` },
  openGraph: {
    url: `/author/${SLUG}`,
    type: 'profile',
    images: [{ url: AUTHOR.imageUrl, width: 605, height: 816, alt: `Photograph of ${AUTHOR.name}` }],
  },
  twitter: { card: 'summary', images: [AUTHOR.imageUrl] },
};

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  cover_image: string;
  category: string;
  read_time_minutes: number;
  published_at: string;
}

export default async function AuthorPage() {
  let posts: Post[] = [];
  try {
    const supabase = adminDb();
    // Pull every published post and filter in app code. Tolerates variations
    // in how author_name is stored (case, whitespace, just "Dominic", or
    // null on legacy rows). Dominic is the sole author so an empty author_name
    // counts too — better to over-include here than silently miss a post.
    const { data } = await supabase
      .from('blog_posts')
      .select('slug,title,excerpt,cover_image,category,read_time_minutes,published_at,author_name')
      .eq('site', SITE.siteKey)
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .limit(200);
    const rows = (data as (Post & { author_name: string | null })[] | null) ?? [];
    const normalised = AUTHOR.name.trim().toLowerCase();
    posts = rows.filter((r) => {
      const a = (r.author_name ?? '').trim().toLowerCase();
      // Match exact name, first-name only, or empty (Dominic is sole author).
      return a === normalised || a === 'dominic' || a === '';
    });
  } catch {}

  const authorUrl = `${SITE.url}/author/${SLUG}`;
  const imageAbs = `${SITE.url}${AUTHOR.imageUrl}`;

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.url}/about#dominic-roworth`,
    name: AUTHOR.name,
    jobTitle: AUTHOR.jobTitle,
    url: authorUrl,
    image: imageAbs,
    description: AUTHOR.bioShort,
    worksFor: {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
    },
    sameAs: [AUTHOR.links.linkedin, AUTHOR.links.instagram],
    knowsAbout: [
      'UK to Spain relocation',
      'UK to Portugal relocation',
      'UK to Gibraltar relocation',
      'Spanish Beckham Law (Régimen especial impatriados)',
      'Portuguese IFICI / NHR 2.0',
      'Gibraltar Category 2 residency',
      'Modelo 720',
      'Spanish Non-Lucrative Visa (NLV)',
      'Spanish Digital Nomad Visa (DNV)',
      'Portuguese D7 and D8 visas',
      'UK tax residency, split-year treatment, SRT',
      'Cross-border pension drawdown',
      'UK-Spain double tax treaty',
      'UK-Portugal double tax treaty',
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Articles by ${AUTHOR.name}`,
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    numberOfItems: posts.length,
    itemListElement: posts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE.url}/blog/${p.slug}`,
      name: p.title,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: AUTHOR.name, item: authorUrl },
    ],
  };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-content">
          <nav className="flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink underline-offset-2 hover:underline">Home</Link>
            <span aria-hidden>›</span>
            <span className="text-ink">Author</span>
          </nav>

          <div className="mt-6 flex flex-col items-start gap-8 lg:flex-row lg:items-center">
            <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-pill border border-border">
              <Image
                src={AUTHOR.imageUrl}
                alt={`Photograph of ${AUTHOR.name}, founder of WarmerCoast`}
                fill
                sizes="160px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="flex-1">
              <Badge tone="warm" uppercase>Author</Badge>
              <h1 className="display mt-3 text-display-2 font-semibold tracking-tight text-ink text-balance">
                {AUTHOR.name}
              </h1>
              <div className="mt-1 text-sm text-muted">{AUTHOR.jobTitle}</div>
              <p className="mt-4 max-w-2xl text-[16.5px] leading-relaxed text-muted">
                {AUTHOR.bioShort}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 rounded-pill bg-ink px-4 py-2 font-semibold text-white hover:-translate-y-px transition-all"
                >
                  Read the full About page →
                </Link>
                <a
                  href={AUTHOR.links.linkedin}
                  target="_blank"
                  rel="me nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-white px-4 py-2 font-semibold text-ink hover:border-ink"
                >
                  LinkedIn <span aria-hidden>↗</span>
                </a>
                <a
                  href={AUTHOR.links.instagram}
                  target="_blank"
                  rel="me nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-white px-4 py-2 font-semibold text-ink hover:border-ink"
                >
                  Instagram <span aria-hidden>↗</span>
                </a>
                <a
                  href="mailto:hello@warmercoast.com"
                  className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-white px-4 py-2 font-semibold text-ink hover:border-ink"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          <Card variant="bordered" className="mt-10 max-w-3xl">
            <CardBody>
              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Why I write this</div>
              <p className="mt-2 text-[15.5px] leading-relaxed text-ink/85">{AUTHOR.bioLong}</p>
            </CardBody>
          </Card>
        </div>
      </section>

      <section className="bg-surface/40 py-14 sm:py-20">
        <div className="container-content">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <Badge tone="neutral" uppercase>{posts.length === 0 ? 'No articles yet' : `${posts.length} articles`}</Badge>
              <h2 className="display mt-3 text-display-3 font-semibold tracking-tight text-ink text-balance">
                Articles by {AUTHOR.name}
              </h2>
              <p className="mt-2 text-[15.5px] text-muted">
                Every published article on WarmerCoast that I&apos;ve personally written or
                substantially reviewed.
              </p>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-ink hover:text-warm">
              All articles →
            </Link>
          </div>

          {posts.length === 0 ? (
            <Card variant="bordered" className="mt-8 max-w-2xl">
              <CardBody>
                <p className="text-muted">
                  No published articles yet — the blog is still warming up. Meanwhile, the
                  pillar pages and{' '}
                  <Link href="/thresholds" className="text-warm underline-offset-2 hover:underline">
                    2026 thresholds reference
                  </Link>{' '}
                  are all written and maintained directly by Dominic.
                </p>
              </CardBody>
            </Card>
          ) : (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Card key={post.slug} variant="bordered" interactive>
                  <Link href={`/blog/${post.slug}`} className="block">
                    {post.cover_image && (
                      <div
                        aria-hidden
                        className="h-44 w-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${post.cover_image})` }}
                      />
                    )}
                    <CardBody>
                      <div className="flex items-center gap-2 text-xs text-muted">
                        <Badge tone="neutral">{post.category}</Badge>
                        <span>· {post.read_time_minutes} min read</span>
                      </div>
                      <h3 className="display mt-3 text-[19px] font-semibold tracking-tight text-ink">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
                      <div className="mt-4 text-xs text-faint">
                        {new Date(post.published_at).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </div>
                    </CardBody>
                  </Link>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </article>
  );
}
