import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { SITE } from '@/lib/site';
import { FILE_BLOG_POSTS, findFileBlogPost } from '@/content/blog/registry';

export const revalidate = 60;

interface Faq {
  question: string;
  answer: string;
}

interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string;
  cover_image_alt: string | null;
  category: string;
  read_time_minutes: number;
  published_at: string;
  updated_at: string;
  author_name: string;
  meta_title: string;
  meta_description: string;
  tags: string[] | null;
  faqs: Faq[] | null;
  canonical_url: string | null;
}

async function getPost(slug: string): Promise<Post | null> {
  // File-based posts take precedence — they ship with the deploy and don't
  // depend on Supabase availability.
  const filePost = findFileBlogPost(slug);
  if (filePost) return filePost as Post;
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
  const canonical = post.canonical_url?.trim() || `/blog/${post.slug}`;
  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt,
    alternates: { canonical },
    openGraph: {
      url: canonical,
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: post.cover_image ? [post.cover_image] : [],
      publishedTime: post.published_at,
      modifiedTime: post.updated_at,
      authors: [post.author_name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.cover_image ? [post.cover_image] : [],
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  let related: { slug: string; title: string; excerpt: string }[] = [];
  try {
    const supabase = createClient();
    const { data } = await supabase
      .from('blog_posts')
      .select('slug,title,excerpt')
      .eq('site', SITE.siteKey)
      .eq('status', 'published')
      .eq('category', post.category)
      .neq('id', post.id)
      .limit(4);
    related = (data as { slug: string; title: string; excerpt: string }[]) ?? [];
  } catch {}
  // Top up with file-based posts in the same category (excluding the current).
  const filePostsInCategory = FILE_BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug
  ).map((p) => ({ slug: p.slug, title: p.title, excerpt: p.excerpt }));
  related = [...related, ...filePostsInCategory].slice(0, 4);

  const altText = post.cover_image_alt || post.title;
  const isAbsolute = post.cover_image?.startsWith('http');
  const faqs: Faq[] = Array.isArray(post.faqs)
    ? post.faqs.filter((f) => f && f.question && f.answer)
    : [];

  return (
    <article className="bg-white">
      <div className="container-content max-w-3xl pt-10 sm:pt-14">
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-muted hover:text-ink">
          <span aria-hidden>←</span> Blog
        </Link>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Badge tone="warm">{post.category}</Badge>
          <span className="text-xs text-muted">{post.read_time_minutes} min read</span>
        </div>
        <h1 className="display mt-4 text-display-1 font-medium tracking-tight text-ink text-balance">
          {post.title}
        </h1>
        <p className="mt-5 text-[18px] leading-relaxed text-ink/85 font-medium">{post.excerpt}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-faint">
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden className="inline-block h-6 w-6 overflow-hidden rounded-pill border border-border bg-surface">
              <Image src="/dominic-roworth.jpg" alt="" width={24} height={24} className="h-full w-full object-cover object-top" />
            </span>
            By <Link href="/author/dominic-roworth" className="text-muted hover:text-ink underline-offset-2 hover:underline font-semibold">{post.author_name}</Link>
          </span>
          <span>·</span>
          <span>{new Date(post.published_at).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          {post.updated_at && post.updated_at !== post.published_at && (
            <>
              <span>·</span>
              <span>Updated {new Date(post.updated_at).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </>
          )}
        </div>
      </div>

      {post.cover_image && (
        <div className="container-content max-w-4xl mt-8">
          <div className="relative aspect-[16/8] w-full overflow-hidden rounded-card border border-border bg-surface">
            {isAbsolute ? (
              <Image
                src={post.cover_image}
                alt={altText}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1024px"
                className="object-cover"
              />
            ) : (
              <Image
                src={post.cover_image}
                alt={altText}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1024px"
                className="object-cover"
                unoptimized
              />
            )}
          </div>
        </div>
      )}

      <div className="container-content max-w-3xl py-10 sm:py-14">
        <div
          className="prose prose-base max-w-none text-[17px] leading-[1.8] text-ink/90 prose-headings:display prose-headings:tracking-tight prose-headings:text-ink prose-headings:mt-10 prose-headings:mb-4 prose-h2:text-[28px] prose-h2:font-semibold prose-h3:text-[22px] prose-strong:text-ink prose-a:text-warm prose-a:underline-offset-2 hover:prose-a:underline prose-img:rounded-card prose-img:border prose-img:border-border prose-blockquote:border-l-4 prose-blockquote:border-warm prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-ink/90 prose-blockquote:pl-5 prose-li:my-1.5"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {faqs.length > 0 && (
          <section className="mt-14" aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="display text-[28px] font-semibold tracking-tight text-ink"
            >
              Frequently asked questions
            </h2>
            <div className="mt-5 divide-y divide-border rounded-card border border-border bg-surface/40">
              {faqs.map((f, i) => (
                <details key={i} className="group px-5 py-4 open:bg-white">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[17px] font-semibold text-ink">
                    <span>{f.question}</span>
                    <span
                      aria-hidden
                      className="mt-1 inline-block text-warm transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="mt-3 text-[15.5px] leading-relaxed text-ink/85">
                    {f.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Author bio card */}
        <Card variant="bordered" className="mt-14">
          <CardBody className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-pill border border-border">
              <Image
                src="/dominic-roworth.jpg"
                alt={`Photograph of ${post.author_name}`}
                fill
                sizes="64px"
                className="object-cover object-top"
              />
            </div>
            <div className="flex-1">
              <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                Written by
              </div>
              <div className="display mt-1 text-[20px] font-semibold tracking-tight text-ink">
                {post.author_name}
              </div>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                Writes WarmerCoast&apos;s sourced guides on moving from the UK to Spain, Portugal
                or Gibraltar. Every page reviewed against primary government sources for 2026.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-white px-3 py-1.5 font-semibold text-ink hover:border-ink"
                >
                  About the author →
                </Link>
                <a
                  href="https://www.linkedin.com/in/dominicroworth/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-white px-3 py-1.5 font-semibold text-ink hover:border-ink"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </CardBody>
        </Card>

        {related.length > 0 && (
          <div className="mt-12">
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
              Related reading
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {related.map((r) => (
                <Card key={r.slug} variant="bordered" interactive>
                  <CardBody>
                    <Link href={`/blog/${r.slug}`} className="block">
                      <div className="display text-[17px] font-semibold tracking-tight text-ink">
                        {r.title}
                      </div>
                      {r.excerpt && <p className="mt-1.5 text-sm text-muted line-clamp-2">{r.excerpt}</p>}
                      <div className="mt-3 text-xs font-semibold text-warm">Read →</div>
                    </Link>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

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
            dateModified: post.updated_at || post.published_at,
            author: {
              '@type': 'Person',
              '@id': 'https://warmercoast.com/about#dominic-roworth',
              name: post.author_name,
              url: 'https://warmercoast.com/author/dominic-roworth',
              image: 'https://warmercoast.com/dominic-roworth.jpg',
            },
            publisher: {
              '@type': 'Organization',
              name: 'WarmerCoast',
              url: SITE.url,
              logo: { '@type': 'ImageObject', url: `${SITE.url}/icon.svg` },
            },
            mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/blog/${post.slug}` },
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
              { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE.url}/blog/${post.slug}` },
            ],
          }),
        }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: f.answer,
                },
              })),
            }),
          }}
        />
      )}
    </article>
  );
}
