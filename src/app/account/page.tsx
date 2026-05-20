import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Card, CardBody } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Account',
  robots: { index: false, follow: false },
};

export default async function AccountPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const { data: profile } = await supabase
    .from('wc_profiles')
    .select('full_name,uk_city,target_country,moving_timeframe')
    .eq('id', user.id)
    .maybeSingle();

  const { data: purchases } = await supabase
    .from('wc_purchases')
    .select('product_slug,amount_paid,currency,created_at,status')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  return (
    <section className="bg-white py-14">
      <div className="container-content max-w-3xl">
        <Badge tone="neutral" uppercase>Account</Badge>
        <h1 className="display mt-3 text-display-2 font-semibold tracking-tight text-ink">
          Your account
        </h1>
        <p className="mt-2 text-muted">Signed in as {user.email}.</p>

        <div className="mt-10 grid gap-6">
          <Card variant="bordered">
            <CardBody>
              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Profile</div>
              <dl className="mt-4 grid gap-3 text-sm">
                <Row label="Name" value={profile?.full_name ?? '-'} />
                <Row label="UK city" value={profile?.uk_city ?? '-'} />
                <Row label="Target country" value={profile?.target_country ?? '-'} />
                <Row label="Moving timeframe" value={profile?.moving_timeframe ?? '-'} />
              </dl>
              <p className="mt-4 text-xs text-faint">
                Profile editing UI will live here. For now Supabase service-role updates direct.
              </p>
            </CardBody>
          </Card>

          <Card variant="bordered">
            <CardBody>
              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Purchases</div>
              {(purchases?.length ?? 0) === 0 ? (
                <p className="mt-4 text-sm text-muted">No purchases yet. Browse playbooks from the dashboard.</p>
              ) : (
                <ul className="mt-4 flex flex-col gap-2 text-sm">
                  {(purchases as Array<{
                    product_slug: string;
                    amount_paid: number;
                    currency: string;
                    created_at: string;
                    status: string;
                  }> | null)?.map((p, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between rounded-card border border-border bg-white px-4 py-2"
                    >
                      <span className="font-semibold capitalize">{p.product_slug} playbook</span>
                      <span className="text-muted">
                        £{(p.amount_paid / 100).toFixed(0)} · {p.status} ·{' '}
                        {new Date(p.created_at).toLocaleDateString('en-GB')}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </CardBody>
          </Card>

          <Card variant="bordered">
            <CardBody>
              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Privacy</div>
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                <button className="rounded-pill border border-border bg-white px-4 py-2 font-semibold text-ink hover:border-ink">
                  Export my data
                </button>
                <button className="rounded-pill border border-border bg-white px-4 py-2 font-semibold text-gibraltar hover:border-gibraltar">
                  Delete my account
                </button>
                <Link
                  href="/privacy"
                  className="rounded-pill px-4 py-2 font-semibold text-muted hover:text-ink"
                >
                  Privacy policy
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-2 last:border-0">
      <dt className="text-muted">{label}</dt>
      <dd className="font-semibold text-ink">{value}</dd>
    </div>
  );
}
