import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { COUNTRIES, type Country } from '@/lib/site';
import { getFormTemplate } from '@/lib/forms';
import { getFormSchema } from '@/lib/forms/schemas';
import { generateBriefPdf } from '@/lib/forms/pdf-generator';

export const runtime = 'nodejs';

interface Body {
  country?: string;
  form_type?: string;
  data?: Record<string, unknown>;
}

export async function POST(request: Request) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = (await request.json()) as Body;
  if (!body.country || !COUNTRIES.includes(body.country as Country)) {
    return NextResponse.json({ error: 'Invalid country' }, { status: 400 });
  }
  const template = body.form_type ? getFormTemplate(body.form_type) : undefined;
  const schema = body.form_type ? getFormSchema(body.form_type) : undefined;
  if (!template || !schema) {
    return NextResponse.json({ error: 'Unknown form_type' }, { status: 400 });
  }
  if (template.country !== body.country) {
    return NextResponse.json({ error: 'Form does not match country' }, { status: 400 });
  }

  // Validate required fields
  const missing: string[] = [];
  const data = body.data ?? {};
  for (const section of schema.sections) {
    for (const field of section.fields) {
      if (field.required) {
        const v = data[field.id];
        if (v === undefined || v === null || v === '') missing.push(field.label);
      }
    }
  }
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing required fields: ${missing.join(', ')}` },
      { status: 400 },
    );
  }

  // Generate
  const pdfBytes = await generateBriefPdf({
    schema,
    data,
    userEmail: user.email ?? null,
  });

  // Upload
  const filename = `${schema.id}-${Date.now()}.pdf`;
  const path = `${user.id}/${body.country}/${schema.id}/${filename}`;
  const { error: upErr } = await supabase.storage
    .from('wc-user-documents')
    .upload(path, pdfBytes, {
      contentType: 'application/pdf',
      upsert: false,
    });
  if (upErr) {
    console.error('[forms/generate] upload error', upErr);
    return NextResponse.json({ error: upErr.message }, { status: 500 });
  }

  // Record
  const { data: doc, error: insErr } = await supabase
    .from('wc_user_documents')
    .insert({
      user_id: user.id,
      country: body.country,
      form_type: schema.id,
      file_path: path,
      file_size_bytes: pdfBytes.byteLength,
      mime_type: 'application/pdf',
      source: 'filled_in_app',
      status: 'draft',
    })
    .select('id')
    .single();
  if (insErr) {
    console.error('[forms/generate] insert error', insErr);
    return NextResponse.json({ error: insErr.message }, { status: 500 });
  }

  // Mark draft complete
  await supabase.from('wc_form_drafts').upsert(
    {
      user_id: user.id,
      form_type: schema.id,
      data,
      completed: true,
    },
    { onConflict: 'user_id,form_type' },
  );

  // Return a signed URL so the browser can fetch immediately
  const { data: signed } = await supabase.storage
    .from('wc-user-documents')
    .createSignedUrl(path, 120);

  return NextResponse.json({
    ok: true,
    document_id: doc.id,
    file_path: path,
    download_url: signed?.signedUrl ?? null,
  });
}
