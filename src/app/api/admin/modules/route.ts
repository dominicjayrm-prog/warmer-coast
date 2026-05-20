import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { createClient } from '@/lib/supabase/server';
import { isAdminEmail, adminDb } from '@/lib/admin';
import { COUNTRIES, type Country } from '@/lib/site';

export const runtime = 'nodejs';

interface Body {
  country?: string;
  slug?: string;
  title?: string;
  summary?: string;
  duration?: string;
}

export async function POST(request: Request) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!isAdminEmail(user?.email)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  const db = adminDb();
  const body = (await request.json()) as Body;

  if (!body.country || !COUNTRIES.includes(body.country as Country)) {
    return NextResponse.json({ error: 'Invalid country' }, { status: 400 });
  }
  if (!body.title || !body.slug) {
    return NextResponse.json({ error: 'title and slug required' }, { status: 400 });
  }

  // Auto-assign module_number = max(existing) + 1
  const { data: maxRow } = await db
    .from('wc_modules')
    .select('module_number')
    .eq('country', body.country)
    .order('module_number', { ascending: false })
    .limit(1)
    .maybeSingle();
  const nextNumber = (maxRow?.module_number ?? 0) + 1;

  const { data, error } = await db
    .from('wc_modules')
    .insert({
      country: body.country,
      slug: body.slug,
      module_number: nextNumber,
      title: body.title,
      summary: body.summary ?? '',
      duration: body.duration ?? '60 min',
      published: false,
    })
    .select('id')
    .single();

  if (error) {
    console.error('module create error', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  revalidatePath(`/app/${body.country}`);
  return NextResponse.json({ id: data.id });
}
