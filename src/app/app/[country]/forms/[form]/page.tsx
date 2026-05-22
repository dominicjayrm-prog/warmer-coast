import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Badge } from '@/components/ui/Badge';
import { COUNTRIES, COUNTRY_META, type Country } from '@/lib/site';
import { getEntitlements, hasAccess } from '@/lib/entitlements';
import { getFormTemplate } from '@/lib/forms';
import { getFormSchema } from '@/lib/forms/schemas';
import { FormFiller } from '@/components/forms/FormFiller';

export const metadata: Metadata = {
  title: 'Form',
  robots: { index: false, follow: false },
};

export default async function FormFillPage({
  params,
}: {
  params: { country: string; form: string };
}) {
  if (!COUNTRIES.includes(params.country as Country)) notFound();
  const country = params.country as Country;
  const template = getFormTemplate(params.form);
  if (!template || template.country !== country) notFound();

  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`/login?next=/app/${country}/forms/${params.form}`);

  const ent = await getEntitlements();
  if (!hasAccess(ent, country)) {
    redirect(`/playbook/${country}?gated=1`);
  }

  const meta = COUNTRY_META[country];
  const schema = getFormSchema(template.id);

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="container-content max-w-3xl">
        <Link
          href={`/app/${country}/documents`}
          className="text-sm font-semibold text-muted hover:text-ink"
        >
          ← All documents
        </Link>
        <Badge
          tone={country === 'spain' ? 'warm' : country === 'portugal' ? 'sea' : 'gibraltar'}
          uppercase
          className="mt-5"
        >
          {meta.name} · {template.authority}
        </Badge>
        <h1 className="display mt-4 text-display-2 font-semibold tracking-tight text-ink text-balance">
          {schema?.title ?? template.name}
        </h1>
        <p className="mt-3 text-[17px] text-muted">{schema?.intro ?? template.blurb}</p>

        {schema ? (
          <FormFiller schema={schema} country={country} />
        ) : (
          <div className="mt-10 rounded-card border border-dashed border-border bg-surface/40 p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
              In-app filler
            </div>
            <p className="mt-2 text-sm text-muted">
              The native React form for {template.name} is being built. In the meantime, download
              the blank PDF and either fill it offline or use the upload-scan flow on the documents
              page.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {template.officialPdfUrl && (
                <a
                  href={template.officialPdfUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-pill bg-ink px-4 py-2 text-sm font-semibold text-white"
                >
                  Download blank PDF ↗
                </a>
              )}
              <Link
                href={`/app/${country}/documents`}
                className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:border-ink"
              >
                Back to documents
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
