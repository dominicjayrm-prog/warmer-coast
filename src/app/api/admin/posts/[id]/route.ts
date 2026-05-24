import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { createClient } from '@/lib/supabase/server';
import { isAdminEmail, adminDb } from '@/lib/admin';
import { SITE } from '@/lib/site';

export const runtime = 'nodejs';

interface Body {
  title?: string;
  slug?: string;
  category?: string;
  excerpt?: string;
  meta_title?: string;
  meta_description?: string;
  cover_image?: string;
  cover_image_alt?: string;
  content?: string;
  read_time_minutes?: number;
  status?: string;
  author_name?: string;
  tags?: string[];
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!isAdminEmail(user?.email)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  const db = adminDb();

  const body = (await request.json()) as Body;
  const now = new Date().toISOString();
  const status = body.status === 'published' ? 'published' : 'draft';
  const patch = {
    title: body.title,
    slug: body.slug,
    category: body.category,
    excerpt: body.excerpt,
    meta_title: body.meta_title,
    meta_description: body.meta_description,
    seo_title: body.meta_title,
    seo_description: body.meta_description,
    cover_image: body.cover_image,
    featured_image: body.cover_image,
    cover_image_alt: body.cover_image_alt,
    content: body.content,
    read_time_minutes: body.read_time_minutes,
    status,
    is_published: status === 'published',
    published: status === 'published',
    author_name: body.author_name,
    tags: body.tags,
    updated_at: now,
  };

  const { data, error } = await db
    .from('blog_posts')
    .update(patch)
    .eq('id', params.id)
    .eq('site', SITE.siteKey)
    .select('slug')
    .maybeSingle();

  if (error) {
    console.error('post update error', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  if (!data) {
    console.error('post update returned no rows - likely RLS blocking write');
    return NextResponse.json(
      {
        error:
          'Save did not update any row. Most likely cause: SUPABASE_SERVICE_ROLE_KEY env var is missing on Vercel AND your admin email is not in the RLS allowlist. Check Vercel env vars or add your email to the blog_posts_admin_update policy.',
      },
      { status: 500 },
    );
  }

  revalidatePath('/blog');
  if (data.slug) revalidatePath(`/blog/${data.slug}`);
  if (body.slug && body.slug !== data.slug) revalidatePath(`/blog/${body.slug}`);

  return NextResponse.json({ ok: true });
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!isAdminEmail(user?.email)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  const db = adminDb();
  const { data, error } = await db
    .from('blog_posts')
    .delete()
    .eq('id', params.id)
    .eq('site', SITE.siteKey)
    .select('slug')
    .maybeSingle();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data) {
    return NextResponse.json(
      { error: 'Delete affected no rows - likely RLS blocking. See SUPABASE_SERVICE_ROLE_KEY env var or RLS allowlist.' },
      { status: 500 },
    );
  }

  revalidatePath('/blog');
  if (data.slug) revalidatePath(`/blog/${data.slug}`);

  return NextResponse.json({ ok: true });
}
