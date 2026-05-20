import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';

export default function NotFound() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-content max-w-xl text-center">
        <Badge tone="neutral" uppercase>404</Badge>
        <h1 className="display mt-4 text-display-1 font-medium tracking-tight text-ink text-balance">
          That page <span className="italic text-warm">isn&apos;t here</span>.
        </h1>
        <p className="mt-4 text-[17px] text-muted">
          Either you mistyped the URL, or we moved the page during a content reshuffle. Try one of
          these:
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
          <Link href="/" className="rounded-pill bg-ink px-4 py-2 font-semibold text-white">Home</Link>
          <Link href="/quiz" className="rounded-pill border border-border px-4 py-2 font-semibold text-ink hover:border-ink">Quiz</Link>
          <Link href="/calculators" className="rounded-pill border border-border px-4 py-2 font-semibold text-ink hover:border-ink">Free tools</Link>
          <Link href="/blog" className="rounded-pill border border-border px-4 py-2 font-semibold text-ink hover:border-ink">Blog</Link>
          <Link href="/contact" className="rounded-pill border border-border px-4 py-2 font-semibold text-ink hover:border-ink">Contact</Link>
        </div>
      </div>
    </section>
  );
}
