import type { Metadata } from 'next';
import { SubPillarTemplate } from '@/components/marketing/SubPillarTemplate';

export const metadata: Metadata = {
  title: 'Portugal Tax for UK Movers 2026 | NHR 2.0 (IFICI), IRS, Pensions',
  description: 'How Portuguese tax works for British movers in 2026. IFICI (NHR 2.0) 20% flat rate, qualifying activities, IRS brackets 13%-48%, UK pension treatment under the double tax treaty.',
  alternates: { canonical: '/portugal/tax' },
};

export default function Page() {
  return (
    <SubPillarTemplate
      country="portugal"
      eyebrow="Tax · 2026"
      h1="Portuguese tax for British movers · 2026"
      intro="The IRS is more progressive than UK income tax (13% to 48% across 9 bands), but IFICI / NHR 2.0 caps qualifying employment income at a 20% flat rate. Eligibility requires both a qualifying activity AND establishing Portuguese tax residency after 1 January 2024. Pensioners no longer get the original NHR 10-year exemption."
      bullets={[
        'IFICI (NHR 2.0): 20% flat rate on Portuguese-source employment or self-employment income from qualifying activities',
        'Qualifying activities: tech (software, data science, AI/ML, cybersecurity), R&D, scientific research, qualifying engineering, higher education',
        'Eligibility gates: no Portuguese tax residency in prior 5 years, never used original NHR, established residency after 1 Jan 2024, academic credentials or 3+ years experience',
        'Standard IRS: 9 brackets from 13% (up to €8,059) to 48% (over €83,696)',
        'UK pensions: government pensions taxed only in UK (DTA Art 17), private and state pensions taxed in Portugal once resident',
        'Capital gains on UK property sold post-Portuguese-residency: primary taxing rights in UK, Portugal applies credit under DTA',
      ]}
    />
  );
}
