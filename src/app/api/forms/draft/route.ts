import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getFormTemplate } from '@/lib/forms';

export const runtime = 'nodejs';

interface PutBody {
  form_type?: string;
  data?: Record<string, unknown>;
  completed?: boolean;
}

export async function GET(request: Request) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const url = new URL(request.url);
  const formType = url.searchParams.get('form_type');
  if (!formType) {
    return NextResponse.json({ error: 'form_type required' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('wc_form_drafts')
    .select('form_type,data,completed,updated_at')
    .eq('user_id', user.id)
    .eq('form_type', formType)
    .maybeSingle();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ draft: data ?? null });
}

export async function PUT(request: Request) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = (await request.json()) as PutBody;
  if (!body.form_type) {
    return NextResponse.json({ error: 'form_type required' }, { status: 400 });
  }
  if (!getFormTemplate(body.form_type)) {
    return NextResponse.json({ error: 'Unknown form_type' }, { status: 400 });
  }

  const { error } = await supabase.from('wc_form_drafts').upsert(
    {
      user_id: user.id,
      form_type: body.form_type,
      data: body.data ?? {},
      completed: body.completed ?? false,
    },
    { onConflict: 'user_id,form_type' },
  );

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
