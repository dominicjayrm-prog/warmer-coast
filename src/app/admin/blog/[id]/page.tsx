import { notFound } from 'next/navigation';
import Link from 'next/link';
import { adminDb } from '@/lib/admin';
import { SITE } from '@/lib/site';
import { Badge } from '@/components/ui/Badge';
import { PostForm } from '@/components/admin/PostForm';

interface Post {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  meta_title: string;
  meta_description: string;
  cover_image: string;
  content: string;
  read_time_minutes: number;
  status: string;
  author_name: string;
  tags: string[] | null;
}

export default async function EditPostPage({ params }: { params: { id: string } }) {
  const supabase = adminDb();
  const { data } = await supabase
    .from('blog_posts')
    .select('id,title,slug,category,excerpt,meta_title,meta_description,cover_image,content,read_time_minutes,status,author_name,tags')
    .eq('id', params.id)
    .eq('site', SITE.siteKey)
    .maybeSingle();
  if (!data) notFound();
  const post = data as Post;

  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <Badge tone="neutral" uppercase>Blog</Badge>
          <h1 className="display mt-2 text-display-3 font-semibold tracking-tight text-ink">
            Edit post
          </h1>
        </div>
        <div className="flex items-center gap-3">
          {post.status === 'published' && (
            <a
              href={`/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-muted hover:text-ink"
            >
              View live ↗
            </a>
          )}
          <Link href="/admin/blog" className="text-sm font-semibold text-muted hover:text-ink">
            ← All posts
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <PostForm
          mode="edit"
          initial={{
            id: post.id,
            title: post.title,
            slug: post.slug,
            category: post.category,
            excerpt: post.excerpt,
            meta_title: post.meta_title,
            meta_description: post.meta_description,
            cover_image: post.cover_image,
            content: post.content,
            read_time_minutes: post.read_time_minutes,
            status: post.status === 'published' ? 'published' : 'draft',
            author_name: post.author_name,
            tags: post.tags ?? [],
          }}
        />
      </div>
    </section>
  );
}
