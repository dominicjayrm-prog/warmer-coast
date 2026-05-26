import Link from 'next/link';
import { adminDb } from '@/lib/admin';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { SITE } from '@/lib/site';
import { FILE_BLOG_POSTS } from '@/content/blog/registry';

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  read_time_minutes: number;
  published_at: string;
}

interface Props {
  /** Optional category filter, e.g. "tax" or "visa". Omit for any category. */
  category?: string;
  /** Headline above the strip. */
  heading?: string;
  /** Subhead text. */
  subhead?: string;
  /** Max posts to show. Default 3. */
  limit?: number;
  /** Background tone. */
  tone?: 'white' | 'surface';
}

export async function LatestPostsStrip({
  category,
  heading = 'Latest from the blog',
  subhead = 'Sourced 2026 deep-dives. Tax law changes, visa policy, real cost of living.',
  limit = 3,
  tone = 'surface',
}: Props) {
  let posts: Post[] = [];
  try {
    const supabase = adminDb();
    let query = supabase
      .from('blog_posts')
      .select('slug,title,excerpt,category,read_time_minutes,published_at')
      .eq('site', SITE.siteKey)
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .limit(limit);
    if (category) query = query.eq('category', category);
    const { data } = await query;
    posts = (data as Post[]) ?? [];
  } catch {
    posts = [];
  }

  // Merge in file-based posts (filtered by category if specified).
  const filePosts: Post[] = FILE_BLOG_POSTS
    .filter((p) => !category || p.category === category)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      read_time_minutes: p.read_time_minutes,
      published_at: p.published_at,
    }));
  posts = [...filePosts, ...posts]
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
    .slice(0, limit);

  if (posts.length === 0) return null;

  return (
    <section className={tone === 'surface' ? 'bg-surface/60 py-14' : 'bg-white py-14'}>
      <div className="container-content">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div className="max-w-2xl">
            <Badge tone="warm" uppercase>Blog</Badge>
            <h2 className="display mt-3 text-display-3 font-semibold tracking-tight text-ink text-balance">
              {heading}
            </h2>
            <p className="mt-2 text-muted">{subhead}</p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-ink underline-offset-2 hover:underline"
          >
            All posts →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.slug} variant="bordered" interactive>
              <CardBody>
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <Badge tone="neutral">{post.category}</Badge>
                    <span>· {post.read_time_minutes} min read</span>
                  </div>
                  <h3 className="display mt-3 text-[19px] font-semibold tracking-tight text-ink text-balance">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 text-xs font-semibold text-warm">Read the post →</div>
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
