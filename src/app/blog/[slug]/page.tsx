import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Badge } from '@/components/ui/Badge';
import { SITE } from '@/lib/site';

export const revalidate = 600;

interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string;
  category: string;
  read_time_minutes: number;
  published_at: string;
  author_name: string;
  meta_title: string;
  meta_description: string;
  tags: string[] | null;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const supabase = createClient();
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('site', SITE.siteKey)
      .eq('slug', slug)
      .eq('status', 'published')
      .maybeSingle();
    return (data as Post) ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};
  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: post.cover_image ? [post.cover_image] : [],
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  // Find related: shared category, same site
  let related: { slug: string; title: string }[] = [];
  try {
    const supabase = createClient();
    const { data } = await supabase
      .from('blog_posts')
      .select('slug,title')
      .eq('site', SITE.siteKey)
      .eq('status', 'published')
      .eq('category', post.category)
      .neq('id', post.id)
      .limit(4);
    related = (data as { slug: string; title: string }[]) ?? [];
  } catch {}

  return (
    <article className="bg-white py-14 sm:py-20">
      <div className="container-content max-w-3xl">
        <Link href="/blog" className="text-sm font-semibold text-muted hover:text-ink">
          ← Blog
        </Link>
        <div className="mt-5 flex items-center gap-2">
          <Badge tone="warm">{post.category}</Badge>
          <span className="text-xs text-muted">{post.read_time_minutes} min read</span>
        </div>
        <h1 className="display mt-4 text-display-1 font-medium tracking-tighter text-ink text-balance">
          {post.title}
        </h1>
        <p className="mt-5 text-[18px] leading-relaxed text-muted">{post.excerpt}</p>
        <div className="mt-6 flex items-center gap-3 text-sm text-muted">
          <span className="font-semibold text-ink">{post.author_name}</span>
          <span>·</span>
          <span>{new Date(post.published_at).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>

        {post.cover_image && (
          <div
            aria-hidden
            className="mt-8 aspect-[16/8] w-full overflow-hidden rounded-card border border-border bg-cover bg-center"
            style={{ backgroundImage: `url(${post.cover_image})` }}
          />
        )}

        <div
          className="prose mt-10 max-w-none text-[17px] leading-relaxed text-ink/90 prose-headings:display prose-headings:tracking-tight prose-headings:text-ink prose-a:text-warm prose-a:no-underline hover:prose-a:underline prose-img:rounded-card"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {related.length > 0 && (
          <div className="mt-14 rounded-card border border-border bg-surface p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Related articles
            </div>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="block rounded-card border border-border bg-white p-3 text-sm font-semibold text-ink hover:border-ink/30"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: post.title,
              description: post.excerpt,
              image: post.cover_image,
              datePublished: post.published_at,
              author: { '@type': 'Person', name: post.author_name },
              publisher: { '@type': 'Organization', name: 'WarmerCoast', url: SITE.url },
            }),
          }}
        />
      </div>
    </article>
  );
}
