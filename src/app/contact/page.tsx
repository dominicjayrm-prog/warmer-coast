import type { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact WarmerCoast',
  description: 'Get in touch with WarmerCoast. We reply to every email within 48 hours.',
  alternates: { canonical: '/contact' },
  openGraph: { url: '/contact' },
};

export default function Page() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-content max-w-2xl">
        <Badge tone="neutral" uppercase>Contact</Badge>
        <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
          Get in touch
        </h1>
        <p className="mt-3 text-[18px] text-muted">
          We reply to every email within 48 hours. For refund requests use the dedicated address
          in the refund policy.
        </p>

        <div className="mt-8 grid gap-2 text-sm">
          <a href="mailto:hello@warmercoast.com" className="text-warm hover:underline underline-offset-2">
            hello@warmercoast.com
          </a>
          <a href="mailto:refunds@warmercoast.com" className="text-muted hover:text-ink">refunds@warmercoast.com</a>
          <a href="mailto:privacy@warmercoast.com" className="text-muted hover:text-ink">privacy@warmercoast.com</a>
        </div>

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
