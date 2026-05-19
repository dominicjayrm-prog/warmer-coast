import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Portugal tax for British movers | NHR 2.0 (IFICI), IRS, pensions',
  description: 'How Portuguese tax works for UK movers. IFICI / NHR 2.0 eligibility, IRS brackets, pension treatment, capital gains, double tax treaty mechanics.',
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="portugal"
      eyebrow="Tax"
      h1="Portuguese tax for British movers"
      intro="The IRS is more progressive than UK income tax, but IFICI cuts qualifying income to a 20% flat rate. Pensioners no longer get the old NHR 10-year exemption."
      bullets={[
        'IFICI / NHR 2.0: 20% flat on qualifying employment income',
        'Standard IRS brackets from 13% up to 48% on high incomes',
        'UK pension treatment under the double tax treaty',
        'Capital gains and Portuguese property tax basics',
      ]}
    />
  );
}
