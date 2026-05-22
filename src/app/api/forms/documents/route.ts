import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { COUNTRIES, type Country } from '@/lib/site';
import { getFormTemplate } from '@/lib/forms';

export const runtime = 'nodejs';

const ALLOWED_STATUSES = ['draft', 'signed', 'submitted', 'accepted', 'rejected'] as const;
type DocStatus = (typeof ALLOWED_STATUSES)[number];

interface PostBody {
  country?: string;
  form_type?: string;
  file_path?: string;
  file_size_bytes?: number;
  mime_type?: string;
  source?: 'upload' | 'filled_in_app';
}

interface PatchBody {
  id?: string;
  status?: DocStatus;
  notes?: string;
}

export async function GET(request: Request) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const url = new URL(request.url);
  const country = url.searchParams.get('country');

  let q = supabase
    .from('wc_user_documents')
    .select('id,country,form_type,file_path,file_size_bytes,mime_type,status,notes,source,created_at,updated_at')
    .eq('user_id', user.id)
    .order('updated_at', { ascending: false });
  if (country && COUNTRIES.includes(country as Country)) q = q.eq('country', country);

  const { data, error } = await q;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ documents: data ?? [] });
}

export async function POST(request: Request) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = (await request.json()) as PostBody;
  if (!body.country || !COUNTRIES.includes(body.country as Country)) {
    return NextResponse.json({ error: 'Invalid country' }, { status: 400 });
  }
  if (!body.form_type || !getFormTemplate(body.form_type)) {
    return NextResponse.json({ error: 'Invalid form_type' }, { status: 400 });
  }
  if (!body.file_path) {
    return NextResponse.json({ error: 'file_path required' }, { status: 400 });
  }
  if (!body.file_path.startsWith(`${user.id}/`)) {
    return NextResponse.json({ error: 'file_path must be under your user folder' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('wc_user_documents')
    .insert({
      user_id: user.id,
      country: body.country,
      form_type: body.form_type,
      file_path: body.file_path,
      file_size_bytes: body.file_size_bytes ?? null,
      mime_type: body.mime_type ?? null,
      source: body.source ?? 'upload',
      status: 'draft',
    })
    .select('id')
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, id: data.id });
}

export async function PATCH(request: Request) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = (await request.json()) as PatchBody;
  if (!body.id) return NextResponse.json({ error: 'id required' }, { status: 400 });
  if (body.status && !ALLOWED_STATUSES.includes(body.status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
  }

  const patch: Record<string, unknown> = {};
  if (body.status) patch.status = body.status;
  if (body.notes !== undefined) patch.notes = body.notes;

  const { error } = await supabase
    .from('wc_user_documents')
    .update(patch)
    .eq('id', body.id)
    .eq('user_id', user.id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });

  const { data: doc } = await supabase
    .from('wc_user_documents')
    .select('file_path')
    .eq('id', id)
    .eq('user_id', user.id)
    .maybeSingle();

  if (doc?.file_path) {
    await supabase.storage.from('wc-user-documents').remove([doc.file_path]);
  }
  const { error } = await supabase
    .from('wc_user_documents')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
