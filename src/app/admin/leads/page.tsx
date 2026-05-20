import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { SITE } from '@/lib/site';
import { Card, CardBody } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface Lead {
  id: string;
  email: string;
  name: string;
  enquiry_type: string;
  message: string;
  source: string;
  status: string;
  created_at: string;
}

export default async function LeadsPage({ searchParams }: { searchParams: { source?: string } }) {
  const supabase = createClient();
  let query = supabase
    .from('leads')
    .select('id,email,name,enquiry_type,message,source,status,created_at')
    .eq('site', SITE.siteKey)
    .order('created_at', { ascending: false })
    .limit(500);
  if (searchParams.source) query = query.eq('source', searchParams.source);

  const { data } = await query;
  const leads = (data as Lead[] | null) ?? [];

  const sources = Array.from(new Set(leads.map((l) => l.source))).sort();

  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <Badge tone="neutral" uppercase>Leads</Badge>
          <h1 className="display mt-2 text-display-3 font-semibold tracking-tight text-ink">
            Leads inbox ({leads.length})
          </h1>
        </div>
        <a
          href={`/api/admin/leads/export${searchParams.source ? `?source=${searchParams.source}` : ''}`}
          className="inline-flex items-center gap-2 rounded-pill bg-ink px-4 py-2 text-sm font-semibold text-white hover:-translate-y-px transition-all"
        >
          Export CSV
        </a>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href="/admin/leads"
          className={`rounded-pill border px-3 py-1.5 text-xs font-semibold ${
            !searchParams.source ? 'bg-ink text-white border-ink' : 'border-border bg-white text-muted hover:border-ink'
          }`}
        >
          All
        </Link>
        {sources.map((s) => (
          <Link
            key={s}
            href={`/admin/leads?source=${s}`}
            className={`rounded-pill border px-3 py-1.5 text-xs font-semibold ${
              searchParams.source === s ? 'bg-ink text-white border-ink' : 'border-border bg-white text-muted hover:border-ink'
            }`}
          >
            {s}
          </Link>
        ))}
      </div>

      <Card variant="bordered" className="mt-6">
        <CardBody className="!p-0">
          {leads.length === 0 ? (
            <div className="p-12 text-center text-muted">No leads yet for this filter.</div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-surface">
                <tr className="text-left">
                  <th className="px-4 py-3 font-semibold text-ink">Email</th>
                  <th className="px-4 py-3 font-semibold text-ink">Name</th>
                  <th className="px-4 py-3 font-semibold text-ink">Source</th>
                  <th className="px-4 py-3 font-semibold text-ink">Type</th>
                  <th className="px-4 py-3 font-semibold text-ink">When</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.id} className="border-t border-border">
                    <td className="px-4 py-3 font-semibold text-ink">
                      <a href={`mailto:${l.email}`} className="hover:text-warm">{l.email}</a>
                    </td>
                    <td className="px-4 py-3 text-muted">{l.name}</td>
                    <td className="px-4 py-3">
                      <Badge tone="neutral">{l.source}</Badge>
                    </td>
                    <td className="px-4 py-3 text-muted">{l.enquiry_type}</td>
                    <td className="px-4 py-3 text-faint text-xs">
                      {new Date(l.created_at).toLocaleString('en-GB', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardBody>
      </Card>
    </section>
  );
}

