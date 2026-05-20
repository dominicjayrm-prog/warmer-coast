import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/Badge';
import { COUNTRY_META } from '@/lib/site';
import { getModuleForAdmin } from '@/lib/modules-db';
import { ModuleEditor } from '@/components/admin/ModuleEditor';

export const dynamic = 'force-dynamic';

export default async function EditModulePage({ params }: { params: { id: string } }) {
  const detail = await getModuleForAdmin(params.id);
  if (!detail) notFound();
  const meta = COUNTRY_META[detail.module.country];

  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/admin/playbooks" className="text-muted hover:text-ink">Playbooks</Link>
            <span className="text-faint">/</span>
            <Link href="/admin/playbooks" className="capitalize text-muted hover:text-ink">
              {meta.flag} {meta.name}
            </Link>
          </div>
          <h1 className="display mt-2 text-display-3 font-semibold tracking-tight text-ink">
            Edit module
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`/app/${detail.module.country}/${detail.module.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-muted hover:text-ink"
          >
            Preview as buyer ↗
          </a>
          {!detail.module.published && <Badge tone="warning">draft</Badge>}
        </div>
      </div>

      <div className="mt-6">
        <ModuleEditor initial={detail} />
      </div>
    </section>
  );
}
