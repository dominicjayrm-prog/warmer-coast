import { adminDb } from '@/lib/admin';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';

interface Purchase {
  id: string;
  stripe_session_id: string | null;
  stripe_customer_id: string | null;
  product_slug: string;
  amount_paid: number;
  currency: string;
  status: string;
  created_at: string;
  refunded_at: string | null;
}

export default async function PurchasesPage() {
  const supabase = adminDb();
  const { data } = await supabase
    .from('wc_purchases')
    .select('id,stripe_session_id,stripe_customer_id,product_slug,amount_paid,currency,status,created_at,refunded_at')
    .order('created_at', { ascending: false })
    .limit(500);
  const rows = (data as Purchase[] | null) ?? [];

  const totalRevenue = rows
    .filter((r) => r.status === 'completed')
    .reduce((sum, r) => sum + r.amount_paid, 0);
  const refunded = rows.filter((r) => r.status === 'refunded').length;
  const refundRate = rows.length > 0 ? (refunded / rows.length) * 100 : 0;

  return (
    <section>
      <Badge tone="neutral" uppercase>Purchases</Badge>
      <h1 className="display mt-2 text-display-3 font-semibold tracking-tight text-ink">
        Stripe purchases ({rows.length})
      </h1>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Stat label="Total revenue" value={`£${(totalRevenue / 100).toLocaleString('en-GB', { maximumFractionDigits: 0 })}`} />
        <Stat label="Refunded" value={`${refunded}`} sub={`${refundRate.toFixed(1)}% of all`} />
        <Stat label="Completed" value={`${rows.length - refunded}`} />
      </div>

      <Card variant="bordered" className="mt-6">
        <CardBody className="!p-0">
          {rows.length === 0 ? (
            <div className="p-12 text-center text-muted">
              No purchases yet. Once you configure Stripe and the webhook fires, they&apos;ll appear here.
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-surface">
                <tr className="text-left">
                  <th className="px-4 py-3 font-semibold text-ink">Product</th>
                  <th className="px-4 py-3 font-semibold text-ink">Amount</th>
                  <th className="px-4 py-3 font-semibold text-ink">Status</th>
                  <th className="px-4 py-3 font-semibold text-ink">Stripe</th>
                  <th className="px-4 py-3 font-semibold text-ink">When</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-t border-border">
                    <td className="px-4 py-3 font-semibold capitalize text-ink">{r.product_slug}</td>
                    <td className="px-4 py-3 text-ink">£{(r.amount_paid / 100).toFixed(0)}</td>
                    <td className="px-4 py-3">
                      <Badge tone={r.status === 'completed' ? 'success' : r.status === 'refunded' ? 'gibraltar' : 'warning'}>
                        {r.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-xs text-faint font-mono">
                      {r.stripe_customer_id ? r.stripe_customer_id.slice(0, 14) : '-'}
                    </td>
                    <td className="px-4 py-3 text-xs text-muted">
                      {new Date(r.created_at).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })}
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

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <Card variant="bordered">
      <CardBody>
        <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">{label}</div>
        <div className="display mt-1 text-[32px] font-semibold text-ink">{value}</div>
        {sub && <div className="text-xs text-faint">{sub}</div>}
      </CardBody>
    </Card>
  );
}
