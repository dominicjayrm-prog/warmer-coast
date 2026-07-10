import type { Metadata } from 'next';
import Link from 'next/link';
import { adminDb } from '@/lib/admin';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { SITE } from '@/lib/site';
import { visibleFileBlogPosts } from '@/content/blog/registry';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Blog · WarmerCoast',
  description:
    'Long-form, sourced articles on UK to Iberia relocation. Tax, visas, banking, schools, real cost of living.',
  alternates: { canonical: '/blog' },
  openGraph: { url: '/blog' },
};

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  cover_image: string;
  category: string;
  read_time_minutes: number;
  published_at: string;
  author_name: string;
}

export default async function BlogIndex() {
  let posts: Post[] = [];
  let queryError: string | null = null;
  try {
    const supabase = adminDb();
    const { data, error } = await supabase
      .from('blog_posts')
      .select('slug,title,excerpt,cover_image,category,read_time_minutes,published_at,author_name')
      .eq('site', SITE.siteKey)
      .eq('status', 'published')
      .lte('published_at', new Date().toISOString())
      .order('published_at', { ascending: false })
      .limit(60);
    if (error) {
      queryError = error.message;
      console.error('[blog] supabase query error:', error);
    }
    posts = (data as Post[]) ?? [];
  } catch (e) {
    queryError = e instanceof Error ? e.message : String(e);
    console.error('[blog] supabase client error:', e);
  }

  // Merge in file-based posts (code-resident, ship with deploy, no DB needed).
  const filePosts: Post[] = visibleFileBlogPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    cover_image: p.cover_image,
    category: p.category,
    read_time_minutes: p.read_time_minutes,
    published_at: p.published_at,
    author_name: p.author_name,
  }));
  posts = [...filePosts, ...posts]
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-content">
        <div className="max-w-2xl">
          <Badge tone="warm" uppercase>Blog</Badge>
          <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
            Long-form, sourced articles
          </h1>
          <p className="mt-3 text-[18px] text-muted">
            New posts twice a fortnight. Tax law changes, real cost of living updates, visa policy
            shifts, and worked examples for British movers.
          </p>
        </div>

        {posts.length === 0 ? (
          <Card variant="bordered" className="mt-10">
            <CardBody>
              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                Empty for now
              </div>
              <h2 className="display mt-2 text-2xl font-semibold tracking-tight text-ink">
                Blog is coming.
              </h2>
              <p className="mt-2 text-muted">
                Articles will appear here once we publish through the admin panel. The blog reads
                from the shared <code className="rounded bg-surface px-1 py-0.5">blog_posts</code>{' '}
                table filtered by <code className="rounded bg-surface px-1 py-0.5">site = &lsquo;warmercoast.com&rsquo;</code>.
              </p>
              {queryError && (
                <p className="mt-3 text-xs text-warm">
                  Diagnostic: <code className="rounded bg-surface px-1 py-0.5">{queryError}</code>
                </p>
              )}
              <Link
                href="/calculators"
                className="mt-5 inline-flex items-center gap-2 rounded-pill bg-ink px-5 py-2.5 text-sm font-semibold text-white"
              >
                Explore the free tools →
              </Link>
            </CardBody>
          </Card>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                    <h2 className="display mt-3 text-[20px] font-semibold tracking-tight text-ink">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
                    <div className="mt-4 text-xs text-faint">
                      By {post.author_name} · {new Date(post.published_at).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </div>
                  </CardBody>
                </Link>
              </Card>
            ))}
          </div>
        )}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            '@id': `${SITE.url}/blog`,
            url: `${SITE.url}/blog`,
            name: 'WarmerCoast Blog',
            description:
              'Long-form, sourced articles on UK to Iberia relocation. Tax, visas, banking, schools, real cost of living.',
            publisher: {
              '@type': 'Organization',
              name: 'WarmerCoast',
              url: SITE.url,
              logo: { '@type': 'ImageObject', url: `${SITE.url}/icon.svg` },
            },
            blogPost: posts.map((p) => ({
              '@type': 'BlogPosting',
              headline: p.title,
              description: p.excerpt,
              url: `${SITE.url}/blog/${p.slug}`,
              datePublished: p.published_at,
              author: { '@type': 'Person', name: p.author_name },
              image: p.cover_image || undefined,
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.url}/blog` },
            ],
          }),
        }}
      />
    </section>
  );
}
