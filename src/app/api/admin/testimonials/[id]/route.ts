import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { isAdminEmail } from '@/lib/admin';

export const runtime = 'nodejs';

interface Body {
  approved?: boolean;
  featured?: boolean;
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!isAdminEmail(user?.email)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  const body = (await request.json()) as Body;
  const patch: Record<string, unknown> = {};
  if (typeof body.approved === 'boolean') patch.approved = body.approved;
  if (typeof body.featured === 'boolean') patch.featured = body.featured;
  if (Object.keys(patch).length === 0) {
    return NextResponse.json({ error: 'No fields' }, { status: 400 });
  }
  const { error } = await supabase.from('wc_testimonials').update(patch).eq('id', params.id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!isAdminEmail(user?.email)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  const { error } = await supabase.from('wc_testimonials').delete().eq('id', params.id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
