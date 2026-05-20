import { Badge } from '@/components/ui/Badge';
import { PostForm } from '@/components/admin/PostForm';
import Link from 'next/link';

export default function NewPostPage() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <Badge tone="neutral" uppercase>Blog</Badge>
          <h1 className="display mt-2 text-display-3 font-semibold tracking-tight text-ink">
            New post
          </h1>
        </div>
        <Link href="/admin/blog" className="text-sm font-semibold text-muted hover:text-ink">
          ← All posts
        </Link>
      </div>
      <div className="mt-6">
        <PostForm mode="create" />
      </div>
    </section>
  );
}
