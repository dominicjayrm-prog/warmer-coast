import type { Metadata } from 'next';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { SITE } from '@/lib/site';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Blog · WarmerCoast',
  description:
    'Long-form, sourced articles on UK to Iberia relocation. Tax, visas, banking, schools, real cost of living.',
  alternates: { canonical: '/blog' },
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
  try {
    const supabase = createClient();
    const { data } = await supabase
      .from('blog_posts')
      .select('slug,title,excerpt,cover_image,category,read_time_minutes,published_at,author_name')
      .eq('site', SITE.siteKey)
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .limit(60);
    posts = (data as Post[]) ?? [];
  } catch {
    posts = [];
  }

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
    </section>
  );
}
