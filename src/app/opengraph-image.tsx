import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/site';

export const runtime = 'edge';
export const alt = `${SITE.name} — sourced UK to Spain, Portugal & Gibraltar relocation playbooks`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background:
            'linear-gradient(135deg, #FFF8F0 0%, #FFE9D2 35%, #F5C18B 100%)',
          fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: '#0F1B2D',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '22px',
              letterSpacing: '-0.04em',
            }}
          >
            W
          </div>
          <div
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#0F1B2D',
              letterSpacing: '-0.02em',
            }}
          >
            WarmerCoast
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              fontSize: '70px',
              fontWeight: 700,
              color: '#0F1B2D',
              lineHeight: 1.05,
              letterSpacing: '-0.035em',
              maxWidth: '960px',
            }}
          >
            Move to Spain, Portugal or Gibraltar — without the costly mistakes.
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#4A5568',
              lineHeight: 1.3,
              maxWidth: '900px',
            }}
          >
            Sourced, sequenced relocation playbooks for British adults. Tax, visas, banking, schools — every number cites a primary source.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            fontSize: '22px',
            color: '#0F1B2D',
            fontWeight: 600,
          }}
        >
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>🇪🇸 Spain</span>
            <span>🇵🇹 Portugal</span>
            <span>🇬🇮 Gibraltar</span>
          </div>
          <div style={{ color: '#C2410C' }}>warmercoast.com →</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
