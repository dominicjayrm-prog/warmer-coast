import { createClient } from '@/lib/supabase/server';
import { isAdminEmail, adminDb } from '@/lib/admin';
import { SITE } from '@/lib/site';

export const runtime = 'nodejs';

interface Lead {
  email: string;
  name: string;
  source: string;
  enquiry_type: string;
  status: string;
  message: string;
  created_at: string;
}

export async function GET(request: Request) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!isAdminEmail(user?.email)) {
    return new Response('Unauthorized', { status: 403 });
  }
  const db = adminDb();

  const url = new URL(request.url);
  const source = url.searchParams.get('source');

  let query = db
    .from('leads')
    .select('email,name,source,enquiry_type,status,message,created_at')
    .eq('site', SITE.siteKey)
    .order('created_at', { ascending: false })
    .limit(10000);
  if (source) query = query.eq('source', source);

  const { data } = await query;
  const rows = (data as Lead[] | null) ?? [];

  const headers = ['email', 'name', 'source', 'enquiry_type', 'status', 'message', 'created_at'];
  const escape = (v: string) => `"${(v ?? '').replace(/"/g, '""')}"`;
  const lines = [
    headers.join(','),
    ...rows.map((r) =>
      [r.email, r.name, r.source, r.enquiry_type, r.status, r.message, r.created_at].map(escape).join(','),
    ),
  ];
  const csv = lines.join('\n');

  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="warmercoast-leads-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
