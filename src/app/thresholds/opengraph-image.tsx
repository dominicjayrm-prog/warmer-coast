import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '2026 relocation thresholds — UK, Spain, Portugal, Gibraltar — every figure sourced';
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
          background: 'linear-gradient(135deg, #FFF8F0 0%, #FFE0BB 60%, #F5A663 100%)',
          fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
          <div
            style={{
              display: 'flex',
              padding: '10px 20px',
              borderRadius: '999px',
              background: '#0F1B2D',
              color: 'white',
              fontSize: '17px',
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            2026 · SOURCED REFERENCE
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <div
            style={{
              display: 'flex',
              fontSize: '76px',
              fontWeight: 700,
              color: '#0F1B2D',
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
              maxWidth: '1050px',
            }}
          >
            The 2026 thresholds for moving to Iberia.
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '26px',
              color: '#3D4A5F',
              lineHeight: 1.3,
              maxWidth: '950px',
            }}
          >
            UK tax bands · Beckham Law · NLV · DNV · Modelo 720 · D7 · IFICI · Gibraltar Cat 2 — every figure cites a primary source.
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
          <div style={{ display: 'flex', gap: '24px' }}>
            <span style={{ display: 'flex' }}>🇬🇧 UK</span>
            <span style={{ display: 'flex' }}>🇪🇸 Spain</span>
            <span style={{ display: 'flex' }}>🇵🇹 Portugal</span>
            <span style={{ display: 'flex' }}>🇬🇮 Gibraltar</span>
          </div>
          <div style={{ display: 'flex', color: '#9C4513' }}>warmercoast.com/thresholds →</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
