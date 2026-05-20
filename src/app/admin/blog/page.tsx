import Link from 'next/link';
import { adminDb } from '@/lib/admin';
import { SITE } from '@/lib/site';
import { Card, CardBody } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface Post {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: string;
  published_at: string | null;
  updated_at: string;
  author_name: string;
  read_time_minutes: number;
}

export default async function BlogList() {
  const supabase = adminDb();
  const { data } = await supabase
    .from('blog_posts')
    .select('id,slug,title,category,status,published_at,updated_at,author_name,read_time_minutes')
    .eq('site', SITE.siteKey)
    .order('updated_at', { ascending: false })
    .limit(200);
  const posts = (data as Post[] | null) ?? [];

  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <Badge tone="neutral" uppercase>Blog</Badge>
          <h1 className="display mt-2 text-display-3 font-semibold tracking-tight text-ink">
            All posts ({posts.length})
          </h1>
        </div>
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-2 rounded-pill bg-ink px-4 py-2 text-sm font-semibold text-white hover:-translate-y-px transition-all"
        >
          + New post
        </Link>
      </div>

      <Card variant="bordered" className="mt-6">
        <CardBody className="!p-0">
          {posts.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-muted">No posts yet.</p>
              <Link
                href="/admin/blog/new"
                className="mt-4 inline-flex items-center gap-2 rounded-pill bg-warm px-4 py-2 text-sm font-semibold text-white"
              >
                Write your first post
              </Link>
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-surface">
                <tr className="text-left">
                  <th className="px-4 py-3 font-semibold text-ink">Title</th>
                  <th className="px-4 py-3 font-semibold text-ink">Category</th>
                  <th className="px-4 py-3 font-semibold text-ink">Status</th>
                  <th className="px-4 py-3 font-semibold text-ink">Updated</th>
                  <th className="px-4 py-3 font-semibold text-ink text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((p) => (
                  <tr key={p.id} className="border-t border-border">
                    <td className="px-4 py-3">
                      <Link href={`/admin/blog/${p.id}`} className="font-semibold text-ink hover:text-warm">
                        {p.title}
                      </Link>
                      <div className="text-xs text-faint">/{p.slug} · {p.read_time_minutes} min read</div>
                    </td>
                    <td className="px-4 py-3 text-muted">{p.category}</td>
                    <td className="px-4 py-3">
                      <Badge tone={p.status === 'published' ? 'success' : 'neutral'}>{p.status}</Badge>
                    </td>
                    <td className="px-4 py-3 text-muted text-xs">
                      {new Date(p.updated_at).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="inline-flex gap-2">
                        {p.status === 'published' && (
                          <a
                            href={`/blog/${p.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-muted hover:text-ink"
                          >
                            View ↗
                          </a>
                        )}
                        <Link
                          href={`/admin/blog/${p.id}`}
                          className="text-xs font-semibold text-warm hover:underline underline-offset-2"
                        >
                          Edit
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardBody>
      </Card>
    </section>
  );
}
