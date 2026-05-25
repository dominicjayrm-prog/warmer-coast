import type { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';

const banks = [
  { name: 'Sabadell · Expat', country: 'Spain', fees: 'Free with €700/mo income', multiCurrency: 'No', appQuality: 4, branchAccess: 5, expatFriendly: 5 },
  { name: 'BBVA · Online', country: 'Spain', fees: '€16/mo if conditions unmet', multiCurrency: 'Limited', appQuality: 5, branchAccess: 4, expatFriendly: 4 },
  { name: 'Santander · One', country: 'Spain', fees: 'Free with conditions', multiCurrency: 'No', appQuality: 4, branchAccess: 5, expatFriendly: 4 },
  { name: 'Millennium BCP', country: 'Portugal', fees: '€60-90/yr typical', multiCurrency: 'No', appQuality: 3, branchAccess: 5, expatFriendly: 4 },
  { name: 'ActivoBank', country: 'Portugal', fees: 'Free', multiCurrency: 'No', appQuality: 5, branchAccess: 2, expatFriendly: 5 },
  { name: 'Gibraltar International Bank', country: 'Gibraltar', fees: 'GBP £180/yr typical', multiCurrency: 'Yes (GBP/EUR)', appQuality: 3, branchAccess: 4, expatFriendly: 5 },
  { name: 'Wise (multi-currency)', country: 'UK-licensed', fees: 'Per-transaction', multiCurrency: 'Yes (40+)', appQuality: 5, branchAccess: 0, expatFriendly: 5 },
  { name: 'Revolut Premium', country: 'EU-licensed', fees: '£7.99/mo', multiCurrency: 'Yes (30+)', appQuality: 5, branchAccess: 0, expatFriendly: 4 },
];

export const metadata: Metadata = {
  title: 'Bank comparator for British movers to Spain, Portugal, Gibraltar',
  description: 'Compare Spanish, Portuguese, and Gibraltar banks plus Wise/Revolut multi-currency options for British movers.',
  alternates: { canonical: '/calculators/bank-comparator' },
  openGraph: { url: '/calculators/bank-comparator' },
};

export default function Page() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-content max-w-5xl">
        <Badge tone="warm" uppercase>Calculator</Badge>
        <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
          Bank comparator
        </h1>
        <p className="mt-3 text-[18px] text-muted">
          Side-by-side Iberian and multi-currency banking options. Updated 2026.
        </p>

        <Card variant="bordered" className="mt-8">
          <CardBody className="!p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-surface">
                  <tr className="text-left">
                    <th className="px-4 py-3 font-semibold text-ink">Bank</th>
                    <th className="px-4 py-3 font-semibold text-ink">Country</th>
                    <th className="px-4 py-3 font-semibold text-ink">Fees</th>
                    <th className="px-4 py-3 font-semibold text-ink">Multi-currency</th>
                    <th className="px-4 py-3 font-semibold text-ink">App</th>
                    <th className="px-4 py-3 font-semibold text-ink">Branch</th>
                    <th className="px-4 py-3 font-semibold text-ink">Expat-friendly</th>
                  </tr>
                </thead>
                <tbody>
                  {banks.map((b) => (
                    <tr key={b.name} className="border-t border-border">
                      <td className="px-4 py-3 font-semibold text-ink">{b.name}</td>
                      <td className="px-4 py-3 text-muted">{b.country}</td>
                      <td className="px-4 py-3 text-muted">{b.fees}</td>
                      <td className="px-4 py-3 text-muted">{b.multiCurrency}</td>
                      <td className="px-4 py-3 text-warm">{'★'.repeat(b.appQuality)}</td>
                      <td className="px-4 py-3 text-warm">{b.branchAccess ? '★'.repeat(b.branchAccess) : '-'}</td>
                      <td className="px-4 py-3 text-warm">{'★'.repeat(b.expatFriendly)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>

        <p className="mt-6 text-xs text-faint">
          Subjective ratings based on buyer feedback and our own use. Not exhaustive. Bank
          policies change quarterly, always confirm direct with the institution.
        </p>
      </div>
    </section>
  );
}
