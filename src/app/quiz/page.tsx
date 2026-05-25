import type { Metadata } from 'next';
import { Quiz } from './Quiz';

export const metadata: Metadata = {
  title: 'Should you move abroad? 12-question quiz for British adults',
  description:
    'A 12-question quiz that recommends your best fit between Spain, Portugal, Gibraltar, or staying in the UK. Email-gated final result with personalised playbook recommendation.',
  alternates: { canonical: '/quiz' },
  openGraph: { url: '/quiz' },
};

export default function Page() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-content max-w-2xl">
        <Quiz />
      </div>
    </section>
  );
}
