import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { createClient } from '@/lib/supabase/server';
import { isAdminEmail, adminDb } from '@/lib/admin';

export const runtime = 'nodejs';

interface SectionPayload {
  id: string;
  position: number;
  title: string;
  body_html: string;
}

interface ChecklistPayload {
  id: string;
  position: number;
  item_id: string;
  label: string;
  detail: string | null;
  deadline: string | null;
}

interface Body {
  title?: string;
  slug?: string;
  summary?: string;
  duration?: string;
  module_number?: number;
  published?: boolean;
  sections?: SectionPayload[];
  checklist?: ChecklistPayload[];
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!isAdminEmail(user?.email)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  const db = adminDb();
  const body = (await request.json()) as Body;

  // 1. Patch the module row.
  const modulePatch: Record<string, unknown> = {};
  if (body.title !== undefined) modulePatch.title = body.title;
  if (body.slug !== undefined) modulePatch.slug = body.slug;
  if (body.summary !== undefined) modulePatch.summary = body.summary;
  if (body.duration !== undefined) modulePatch.duration = body.duration;
  if (body.module_number !== undefined) modulePatch.module_number = body.module_number;
  if (body.published !== undefined) modulePatch.published = body.published;

  const { data: mod, error: modErr } = await db
    .from('wc_modules')
    .update(modulePatch)
    .eq('id', params.id)
    .select('id,country,slug')
    .single();
  if (modErr) {
    console.error('module update error', modErr);
    return NextResponse.json({ error: modErr.message }, { status: 500 });
  }

  // 2. Sync sections via delete-and-reinsert (simplest atomic-enough approach).
  if (body.sections) {
    await db.from('wc_module_sections').delete().eq('module_id', params.id);
    if (body.sections.length > 0) {
      const inserts = body.sections.map((s) => ({
        module_id: params.id,
        position: s.position,
        title: s.title,
        body_html: s.body_html,
      }));
      const { error: secErr } = await db.from('wc_module_sections').insert(inserts);
      if (secErr) {
        console.error('section sync error', secErr);
        return NextResponse.json({ error: secErr.message }, { status: 500 });
      }
    }
  }

  // 3. Sync checklist: upsert by (module_id, item_id) to preserve buyer progress.
  //    First delete any items no longer present.
  if (body.checklist) {
    const keepIds = body.checklist.map((c) => c.item_id);
    if (keepIds.length === 0) {
      await db.from('wc_module_checklist').delete().eq('module_id', params.id);
    } else {
      await db
        .from('wc_module_checklist')
        .delete()
        .eq('module_id', params.id)
        .not('item_id', 'in', `(${keepIds.map((s) => `"${s.replace(/"/g, '')}"`).join(',')})`);
    }

    // Then upsert each item by (module_id, item_id).
    if (body.checklist.length > 0) {
      const rows = body.checklist.map((c) => ({
        module_id: params.id,
        position: c.position,
        item_id: c.item_id,
        label: c.label,
        detail: c.detail,
        deadline: c.deadline,
      }));
      const { error: clErr } = await db
        .from('wc_module_checklist')
        .upsert(rows, { onConflict: 'module_id,item_id' });
      if (clErr) {
        console.error('checklist sync error', clErr);
        return NextResponse.json({ error: clErr.message }, { status: 500 });
      }
    }
  }

  // Revalidate buyer pages.
  if (mod?.country && mod?.slug) {
    revalidatePath(`/app/${mod.country}`);
    revalidatePath(`/app/${mod.country}/${mod.slug}`);
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!isAdminEmail(user?.email)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  const db = adminDb();
  const { data: mod } = await db
    .from('wc_modules')
    .select('country,slug')
    .eq('id', params.id)
    .maybeSingle();
  const { error } = await db.from('wc_modules').delete().eq('id', params.id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (mod?.country) {
    revalidatePath(`/app/${mod.country}`);
    if (mod.slug) revalidatePath(`/app/${mod.country}/${mod.slug}`);
  }
  return NextResponse.json({ ok: true });
}
