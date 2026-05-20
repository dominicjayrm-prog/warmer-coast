import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { NewModuleForm } from '@/components/admin/NewModuleForm';

export default function NewModulePage({ searchParams }: { searchParams: { country?: string } }) {
  const country = searchParams.country ?? 'spain';
  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/admin/playbooks" className="text-muted hover:text-ink">Playbooks</Link>
          </div>
          <Badge tone="neutral" uppercase className="mt-2">New</Badge>
          <h1 className="display mt-2 text-display-3 font-semibold tracking-tight text-ink">
            New module
          </h1>
          <p className="mt-2 text-sm text-muted max-w-lg">
            Create the shell, then add sections and checklist items on the next screen. Starts as a
            draft, you publish when ready.
          </p>
        </div>
      </div>

      <Card variant="bordered" className="mt-6 max-w-xl">
        <CardBody>
          <NewModuleForm initialCountry={country} />
        </CardBody>
      </Card>
    </section>
  );
}
