import { adminDb } from '@/lib/admin';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { ActivityRowActions } from '@/components/admin/ActivityRowActions';

interface Row {
  id: string;
  event_type: string;
  product_slug: string | null;
  anonymised_name: string | null;
  is_seed: boolean;
  created_at: string;
}

export default async function ActivityPage() {
  const supabase = adminDb();
  const { data } = await supabase
    .from('wc_activity_log')
    .select('id,event_type,product_slug,anonymised_name,is_seed,created_at')
    .order('created_at', { ascending: false })
    .limit(200);
  const rows = (data as Row[] | null) ?? [];
  const seedCount = rows.filter((r) => r.is_seed).length;

  return (
    <section>
      <Badge tone="neutral" uppercase>Activity</Badge>
      <h1 className="display mt-2 text-display-3 font-semibold tracking-tight text-ink">
        Live ticker entries ({rows.length})
      </h1>
      <p className="mt-2 text-sm text-muted">
        Public visitors see these in the bottom-left ticker on marketing pages.{' '}
        {seedCount > 0 && (
          <>
            <strong className="text-warning">{seedCount} seed entries</strong> still showing. Delete them once real
            Stripe purchases start landing.
          </>
        )}
      </p>

      <Card variant="bordered" className="mt-6">
        <CardBody className="!p-0">
          {rows.length === 0 ? (
            <div className="p-12 text-center text-muted">No activity yet.</div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-surface">
                <tr className="text-left">
                  <th className="px-4 py-3 font-semibold text-ink">Event</th>
                  <th className="px-4 py-3 font-semibold text-ink">Product</th>
                  <th className="px-4 py-3 font-semibold text-ink">Name shown</th>
                  <th className="px-4 py-3 font-semibold text-ink">Source</th>
                  <th className="px-4 py-3 font-semibold text-ink">When</th>
                  <th className="px-4 py-3 font-semibold text-ink text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-t border-border">
                    <td className="px-4 py-3 font-semibold text-ink">{r.event_type}</td>
                    <td className="px-4 py-3 text-muted">{r.product_slug ?? '-'}</td>
                    <td className="px-4 py-3 text-muted">{r.anonymised_name ?? '-'}</td>
                    <td className="px-4 py-3">
                      {r.is_seed ? <Badge tone="warning">seed</Badge> : <Badge tone="success">real</Badge>}
                    </td>
                    <td className="px-4 py-3 text-xs text-faint">
                      {new Date(r.created_at).toLocaleString('en-GB', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <ActivityRowActions id={r.id} />
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
