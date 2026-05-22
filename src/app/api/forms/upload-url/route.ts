import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { COUNTRIES, type Country } from '@/lib/site';
import { getFormTemplate } from '@/lib/forms';

export const runtime = 'nodejs';

interface Body {
  country?: string;
  form_type?: string;
  filename?: string;
}

/**
 * Generates a signed upload URL for the wc-user-documents bucket.
 * The user uploads directly to supabase storage from the browser; this avoids
 * pushing the file through our Next.js function and keeps Vercel egress free.
 *
 * Path is locked to `<userId>/<country>/<form_type>/<timestamp>-<filename>`.
 * Storage RLS already enforces that the prefix matches auth.uid().
 */
export async function POST(request: Request) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = (await request.json()) as Body;
  if (!body.country || !COUNTRIES.includes(body.country as Country)) {
    return NextResponse.json({ error: 'Invalid country' }, { status: 400 });
  }
  if (!body.form_type || !getFormTemplate(body.form_type)) {
    return NextResponse.json({ error: 'Invalid form_type' }, { status: 400 });
  }
  const filename = (body.filename ?? 'document').replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 80);
  if (!filename) {
    return NextResponse.json({ error: 'Invalid filename' }, { status: 400 });
  }

  const path = `${user.id}/${body.country}/${body.form_type}/${Date.now()}-${filename}`;

  const { data, error } = await supabase
    .storage
    .from('wc-user-documents')
    .createSignedUploadUrl(path);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ path: data.path, token: data.token });
}
