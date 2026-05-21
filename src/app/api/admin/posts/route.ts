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

export async function POST(request: Request) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!isAdminEmail(user?.email)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  const body = (await request.json()) as Body;

  if (!body.title || !body.slug || !body.content) {
    return NextResponse.json({ error: 'title, slug, content required' }, { status: 400 });
  }

  const now = new Date().toISOString();
  const status = body.status === 'published' ? 'published' : 'draft';
  const insert = {
    site: SITE.siteKey,
    site_id: SITE.siteKey,
    title: body.title,
    slug: body.slug,
    category: body.category ?? 'Spain',
    excerpt: body.excerpt ?? '',
    meta_title: body.meta_title ?? body.title,
    meta_description: body.meta_description ?? (body.excerpt ?? '').slice(0, 155),
    seo_title: body.meta_title ?? body.title,
    seo_description: body.meta_description ?? (body.excerpt ?? '').slice(0, 155),
    cover_image: body.cover_image ?? '',
    featured_image: body.cover_image ?? '',
    cover_image_alt: body.cover_image_alt ?? body.title ?? '',
    content: body.content,
    read_time_minutes: body.read_time_minutes ?? 5,
    status,
    is_published: status === 'published',
    published: status === 'published',
    is_featured: false,
    author_name: body.author_name ?? 'Dominic Roworth',
    tags: body.tags ?? [],
    language: 'en',
    published_at: status === 'published' ? now : now,
    updated_at: now,
  };

  const db = adminDb();
  const { data, error } = await db
    .from('blog_posts')
    .insert(insert)
    .select('id,slug')
    .single();

  if (error) {
    console.error('post insert error', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  revalidatePath('/blog');
  if (data?.slug) revalidatePath(`/blog/${data.slug}`);

  return NextResponse.json({ id: data.id });
}
