import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { isAdminEmail, adminDb } from '@/lib/admin';

export const runtime = 'nodejs';

const ALLOWED = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_BYTES = 5 * 1024 * 1024;

export async function POST(request: Request) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!isAdminEmail(user?.email)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  const form = await request.formData();
  const file = form.get('file');
  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }
  if (!ALLOWED.includes(file.type)) {
    return NextResponse.json({ error: 'Use JPG, PNG or WebP' }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: 'File over 5MB limit' }, { status: 400 });
  }

  const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 80);
  const path = `${Date.now()}-${safe}`;

  const db = adminDb();
  const bytes = new Uint8Array(await file.arrayBuffer());
  const { error: upErr } = await db.storage.from('blog-images').upload(path, bytes, {
    contentType: file.type,
    upsert: false,
  });
  if (upErr) {
    console.error('[blog-images upload]', upErr);
    return NextResponse.json({ error: upErr.message }, { status: 500 });
  }

  const { data: pub } = db.storage.from('blog-images').getPublicUrl(path);
  return NextResponse.json({ ok: true, url: pub.publicUrl, path });
}
