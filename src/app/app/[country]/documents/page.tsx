import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Badge } from '@/components/ui/Badge';
import { COUNTRY_META, COUNTRIES, type Country } from '@/lib/site';
import { getEntitlements, hasAccess } from '@/lib/entitlements';
import { formsForCountry } from '@/lib/forms';
import { FormCard } from '@/components/forms/FormCard';

export const metadata: Metadata = {
  title: 'Documents',
  robots: { index: false, follow: false },
};

export default async function DocumentsPage({ params }: { params: { country: string } }) {
  if (!COUNTRIES.includes(params.country as Country)) notFound();
  const country = params.country as Country;
  const meta = COUNTRY_META[country];

  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`/login?next=/app/${country}/documents`);

  const ent = await getEntitlements();
  if (!hasAccess(ent, country)) {
    redirect(`/playbook/${country}?gated=1`);
  }

  const forms = formsForCountry(country);

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="container-content max-w-4xl">
        <div className="flex items-center gap-2 text-sm">
          <Link href={`/app/${country}`} className="text-muted hover:text-ink">
            ← {meta.name} playbook
          </Link>
        </div>
        <Badge
          tone={country === 'spain' ? 'warm' : country === 'portugal' ? 'sea' : 'gibraltar'}
          uppercase
          className="mt-5"
        >
          {meta.name} · Documents
        </Badge>
        <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
          Your forms and uploads
        </h1>
        <p className="mt-3 text-[17px] text-muted">
          Fill the official forms in the app or download blanks to fill offline. Either way, upload
          completed scans here so every document for your move lives in one place. Drafts and
          uploads are private to your account.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          {forms.map((f) => (
            <FormCard key={f.id} form={f} />
          ))}
        </div>

        <p className="mt-8 text-xs text-faint">
          Storage: encrypted, private, 10MB per file. Uploads are stored in your dedicated folder
          and only you can see them. We do not submit forms to authorities on your behalf.
        </p>
      </div>
    </section>
  );
}
