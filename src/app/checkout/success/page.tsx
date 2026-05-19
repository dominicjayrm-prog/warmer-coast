import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Welcome to WarmerCoast',
  robots: { index: false, follow: false },
};

export default function Page({
  searchParams,
}: {
  searchParams: { session_id?: string; product?: string };
}) {
  const product = searchParams.product ?? 'playbook';
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-content max-w-2xl text-center">
        <Badge tone="success" uppercase>You&apos;re in</Badge>
        <h1 className="display mt-4 text-display-1 font-medium tracking-tighter text-ink text-balance">
          Welcome to WarmerCoast.
        </h1>
        <p className="mt-5 text-[18px] text-muted">
          Your <span className="font-semibold text-ink">{product}</span> playbook is ready. Check
          your inbox for the magic-link login email, click it, and you&apos;re straight into the
          buyer dashboard.
        </p>
        <p className="mt-3 text-sm text-faint">
          No email in 2 minutes? Check spam, then{' '}
          <Link href="/login" className="text-ink underline-offset-2 hover:underline">
            request another magic link
          </Link>
          .
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-pill bg-ink px-6 py-3.5 text-[15px] font-semibold text-white hover:-translate-y-px transition-all"
          >
            Go to login →
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-6 py-3.5 text-[15px] font-semibold text-ink hover:border-ink"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
