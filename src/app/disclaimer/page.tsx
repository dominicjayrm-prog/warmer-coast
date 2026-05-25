import type { Metadata } from 'next';
import { LegalDoc } from '@/components/legal/LegalDoc';

export const metadata: Metadata = {
  title: 'Disclaimer | WarmerCoast',
  description: 'WarmerCoast is educational content, not regulated financial, legal, tax or immigration advice. Who to engage for situation-specific guidance.',
  alternates: { canonical: '/disclaimer' },
  openGraph: { url: '/disclaimer' },
};

export default function Page() {
  return (
    <LegalDoc
      eyebrow="Disclaimer"
      title="Disclaimer"
      intro="The boring but important page."
      updated="2026-05-19"
      sections={[
        { title: 'Not regulated advice', body: <p>WarmerCoast content is for educational purposes. It is not regulated financial, legal, tax or immigration advice. For decisions specific to your situation, engage:</p> },
        { title: 'For UK matters', body: <p>An FCA-regulated independent financial adviser, an STEP-qualified solicitor for cross-border estate planning, or a UK qualified accountant for tax filings.</p> },
        { title: 'For Spain', body: <p>A colegiado abogado for legal questions, an asesor fiscal for tax filings (modelo 100, modelo 720, etc), an immigration lawyer for visa appeals.</p> },
        { title: 'For Portugal', body: <p>A registered advogado for legal matters, a contabilista certificado for IRS filings, an immigration lawyer for SEF/AIMA appeals.</p> },
        { title: 'For Gibraltar', body: <p>A Gibraltar-licensed lawyer for Cat 2 or HEPSS applications and ongoing compliance.</p> },
        { title: 'Sources cited', body: <p>We cite primary sources inline (gov.uk, agencia tributaria, portal das finanças, gibraltar.gov.gi) so you can verify directly. We update content when laws change but cannot guarantee real-time accuracy.</p> },
      ]}
    />
  );
}
