import React, { useState, useEffect } from 'react';

export default function WarmerCoastHome() {
  const [scrolled, setScrolled] = useState(false);
  const [income, setIncome] = useState(65000);
  const [destination, setDestination] = useState('spain');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Live tax calc preview
  const ukTax = income < 12570 ? 0 :
                income < 50270 ? (income - 12570) * 0.20 :
                income < 125140 ? 7540 + (income - 50270) * 0.40 :
                37088 + (income - 125140) * 0.45;
  const beckhamTax = income * 0.24;
  const yearlySavings = Math.max(0, Math.round(ukTax - beckhamTax));

  const countryAccents = {
    spain: '#E67E3C',
    portugal: '#2E8585',
    gibraltar: '#9C3848'
  };

  return (
    <div style={{ background: '#FFFFFF', color: '#0F1827', fontFamily: '"Inter", -apple-system, sans-serif', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&display=swap');
        
        .display { font-family: 'Fraunces', 'Georgia', serif; font-optical-sizing: auto; }
        .body { font-family: 'Inter', sans-serif; }
        
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.2s; }
        .d3 { animation-delay: 0.3s; }
        .d4 { animation-delay: 0.4s; }
        
        .sun-glow {
          background: radial-gradient(circle at center, #FFB870 0%, #E67E3C 40%, transparent 70%);
          opacity: 0.5;
        }
        
        .gradient-headline {
          background: linear-gradient(135deg, #0F1827 0%, #2E8585 50%, #E67E3C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .breadcrumb-fade::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 60px;
          background: linear-gradient(90deg, transparent, #FBF7F1);
          pointer-events: none;
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(251, 247, 241, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        padding: scrolled ? '14px 0' : '24px 0',
        borderBottom: scrolled ? '1px solid rgba(15,24,39,0.08)' : 'none',
        transition: 'all 0.3s'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #FFB870, #E67E3C)', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '-6px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(230, 126, 60, 0.3), transparent)' }}></div>
            </div>
            <span className="display" style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.02em' }}>
              Warmer<span style={{ color: '#E67E3C' }}>Coast</span>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <a style={{ fontSize: '14px', color: '#525866', fontWeight: 500, cursor: 'pointer' }}>Spain</a>
            <a style={{ fontSize: '14px', color: '#525866', fontWeight: 500, cursor: 'pointer' }}>Portugal</a>
            <a style={{ fontSize: '14px', color: '#525866', fontWeight: 500, cursor: 'pointer' }}>Gibraltar</a>
            <a style={{ fontSize: '14px', color: '#525866', fontWeight: 500, cursor: 'pointer' }}>Guides</a>
            <a style={{ fontSize: '14px', color: '#525866', fontWeight: 500, cursor: 'pointer' }}>Calculators</a>
            <a style={{ fontSize: '14px', color: '#525866', fontWeight: 500, cursor: 'pointer' }}>Login</a>
            <button style={{
              background: '#0F1827', color: 'white', padding: '10px 18px',
              borderRadius: '100px', border: 'none', fontWeight: 600, fontSize: '14px',
              cursor: 'pointer', letterSpacing: '-0.01em'
            }}>
              Get the playbook →
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '160px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        {/* Sun decoration */}
        <div style={{ position: 'absolute', top: '120px', right: '-100px', width: '500px', height: '500px', borderRadius: '50%' }} className="sun-glow"></div>
        
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 14px', marginBottom: '32px',
            background: 'rgba(230, 126, 60, 0.1)', color: '#E67E3C',
            borderRadius: '100px', fontSize: '13px', fontWeight: 600
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E67E3C', animation: 'pulse 2s infinite' }}></div>
            2,121 Brits started their relocation with this playbook
          </div>

          <h1 className="display fade-up d1" style={{
            fontSize: 'clamp(48px, 7vw, 88px)',
            lineHeight: '1.02',
            fontWeight: 500,
            letterSpacing: '-0.035em',
            marginBottom: '32px',
            maxWidth: '1000px'
          }}>
            Leave grey Britain behind.<br/>
            <span style={{ fontStyle: 'italic', color: '#E67E3C' }}>Properly.</span>
          </h1>

          <p className="body fade-up d2" style={{
            fontSize: '22px',
            lineHeight: '1.55',
            color: '#525866',
            maxWidth: '680px',
            marginBottom: '40px',
            fontWeight: 400
          }}>
            Interactive relocation playbooks for Spain, Portugal and Gibraltar, written by a Brit who actually moved, 
            with a Spanish wife who lived the bureaucracy. Visa, tax, banking, healthcare, schools, property. 
            Every decision broken down with live calculators that show you exactly what you'd save.
          </p>

          <div className="fade-up d3" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginBottom: '64px' }}>
            <button style={{
              background: '#0F1827', color: 'white', padding: '16px 28px',
              borderRadius: '100px', border: 'none', fontWeight: 600, fontSize: '16px',
              cursor: 'pointer', letterSpacing: '-0.01em',
              boxShadow: '0 4px 24px rgba(15, 24, 39, 0.2)'
            }}>
              See all playbooks
            </button>
            <button style={{
              background: 'transparent', color: '#0F1827', padding: '16px 28px',
              borderRadius: '100px', border: '1.5px solid rgba(15,24,39,0.15)', fontWeight: 600, fontSize: '16px',
              cursor: 'pointer'
            }}>
              Take the 2-min quiz →
            </button>
            <span style={{ fontSize: '13px', color: '#7A8294', marginLeft: '4px' }}>
              ★★★★★ 4.9 from 247 verified buyers
            </span>
          </div>

          {/* Live tax calculator demo - the SEO hook */}
          <div className="fade-up d4" style={{
            background: 'white', borderRadius: '24px', padding: '32px',
            boxShadow: '0 4px 40px rgba(15, 24, 39, 0.06)',
            border: '1px solid rgba(15,24,39,0.04)',
            maxWidth: '900px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#E67E3C', letterSpacing: '0.08em', marginBottom: '6px' }}>
                  FREE CALCULATOR. TRY IT NOW
                </div>
                <div className="display" style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.02em' }}>
                  What would you save moving to {destination === 'spain' ? 'Spain' : destination === 'portugal' ? 'Portugal' : 'Gibraltar'}?
                </div>
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                {[
                  {id: 'spain', label: '🇪🇸 Spain'},
                  {id: 'portugal', label: '🇵🇹 Portugal'},
                  {id: 'gibraltar', label: '🇬🇮 Gibraltar'}
                ].map(c => (
                  <button
                    key={c.id}
                    onClick={() => setDestination(c.id)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '100px',
                      border: destination === c.id ? `2px solid ${countryAccents[c.id]}` : '1px solid #E8E4DC',
                      background: destination === c.id ? 'rgba(230, 126, 60, 0.08)' : 'white',
                      fontWeight: destination === c.id ? 700 : 500,
                      fontSize: '13px',
                      cursor: 'pointer',
                      color: destination === c.id ? countryAccents[c.id] : '#525866'
                    }}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#525866', display: 'block', marginBottom: '8px' }}>
                Your annual UK gross salary
              </label>
              <input
                type="range" min="20000" max="200000" step="5000"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#E67E3C', height: '6px' }}
              />
              <div className="display" style={{ fontSize: '36px', fontWeight: 600, letterSpacing: '-0.025em', marginTop: '4px' }}>
                £{income.toLocaleString()}<span style={{ fontSize: '16px', color: '#7A8294', fontWeight: 400 }}> /year</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '20px' }}>
              <div style={{ padding: '16px', background: '#F8F9FB', borderRadius: '14px' }}>
                <div style={{ fontSize: '11px', color: '#7A8294', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>UK Tax Now</div>
                <div className="display" style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.02em' }}>
                  £{Math.round(ukTax).toLocaleString()}
                </div>
              </div>
              <div style={{ padding: '16px', background: 'linear-gradient(135deg, #FFE9D5, #FFD9B0)', borderRadius: '14px', border: '2px solid #E67E3C' }}>
                <div style={{ fontSize: '11px', color: '#E67E3C', fontWeight: 700, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>With Beckham Law</div>
                <div className="display" style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.02em' }}>
                  £{Math.round(beckhamTax).toLocaleString()}
                </div>
              </div>
              <div style={{ padding: '16px', background: '#0F1827', borderRadius: '14px', color: 'white' }}>
                <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>You Save / Year</div>
                <div className="display" style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.02em', color: '#FFB870' }}>
                  £{yearlySavings.toLocaleString()}
                </div>
              </div>
            </div>

            <div style={{
              padding: '14px 18px',
              background: 'rgba(46, 133, 133, 0.06)',
              borderRadius: '12px',
              borderLeft: '3px solid #2E8585',
              fontSize: '14px',
              color: '#0F1827',
              lineHeight: '1.5'
            }}>
              That's <strong style={{ color: '#2E8585' }}>£{(yearlySavings * 6).toLocaleString()}</strong> saved over 6 years of Beckham Law, 
              and our Spain playbook walks you through every step to qualify. <a style={{ color: '#E67E3C', fontWeight: 600 }}>See the playbook →</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / SOCIAL PROOF STRIP */}
      <section style={{ padding: '40px 24px', borderTop: '1px solid #E8E4DC', borderBottom: '1px solid #E8E4DC', background: 'rgba(255,255,255,0.4)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '12px', fontWeight: 600, color: '#7A8294', letterSpacing: '0.1em', textAlign: 'center', marginBottom: '24px' }}>
            AS RECOMMENDED IN
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap', opacity: 0.6 }}>
            {['Expat Network', 'British in Spain', 'The Olive Press', 'Currency UK', 'Spain Times'].map(name => (
              <span key={name} className="display" style={{ fontSize: '20px', fontWeight: 600, color: '#0F1827', letterSpacing: '-0.02em' }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* THE 3 PLAYBOOKS */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', marginBottom: '20px', background: 'rgba(46, 133, 133, 0.1)', color: '#2E8585', borderRadius: '100px', fontSize: '13px', fontWeight: 600 }}>
            Three countries. One trusted source
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: '1.05', fontWeight: 500, letterSpacing: '-0.03em', maxWidth: '900px', marginBottom: '16px' }}>
            Pick your warmer coast. <span style={{ fontStyle: 'italic', color: '#2E8585' }}>Get the full system.</span>
          </h2>
          <p style={{ fontSize: '18px', color: '#525866', maxWidth: '640px', lineHeight: '1.6', marginBottom: '48px' }}>
            Each playbook is an interactive web app, not a PDF. Live calculators, decision trees, document vault, 
            progress tracking, and quarterly updates as rules change.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {[
              {
                country: 'Spain', flag: '🇪🇸', accent: '#E67E3C',
                tag: 'Beckham Law. Digital Nomad Visa. 24% flat tax',
                desc: 'Move to Costa del Sol, Valencia, Madrid or Barcelona. Full visa walkthrough, Beckham Law qualification, NIE and padron step-by-step.',
                price: 397, sold: 847, popular: true
              },
              {
                country: 'Portugal', flag: '🇵🇹', accent: '#2E8585',
                tag: 'IFICI scheme. D7 Visa. Post-NHR strategy',
                desc: 'NHR is gone but Portugal still works. The honest 2026 playbook covering IFICI eligibility, D7 retirement visa, and what changed.',
                price: 397, sold: 512
              },
              {
                country: 'Gibraltar', flag: '🇬🇮', accent: '#9C3848',
                tag: 'Cat 2 status. Frontier worker. HEPSS',
                desc: 'Written from inside Gibraltar. Cat 2 high-net-worth residency, HEPSS for executives, frontier worker setup with Spain.',
                price: 497, sold: 147
              }
            ].map(pkg => (
              <div key={pkg.country} style={{
                background: 'white', borderRadius: '24px', padding: '32px',
                border: '1px solid rgba(15,24,39,0.06)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {pkg.popular && (
                  <div style={{ position: 'absolute', top: '20px', right: '20px', padding: '4px 12px', borderRadius: '100px', background: pkg.accent, color: 'white', fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em' }}>
                    MOST POPULAR
                  </div>
                )}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: pkg.accent }}></div>
                
                <div style={{ fontSize: '52px', lineHeight: '1', marginBottom: '20px' }}>{pkg.flag}</div>
                <div style={{ fontSize: '11px', color: '#7A8294', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '6px' }}>RELOCATE TO</div>
                <h3 className="display" style={{ fontSize: '32px', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '10px' }}>
                  {pkg.country}
                </h3>
                <div style={{ fontSize: '13px', fontWeight: 600, color: pkg.accent, marginBottom: '16px' }}>
                  {pkg.tag}
                </div>
                <p style={{ fontSize: '15px', lineHeight: '1.55', color: '#525866', marginBottom: '24px' }}>
                  {pkg.desc}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '20px' }}>
                  <div>
                    <div className="display" style={{ fontSize: '40px', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: '1' }}>
                      £{pkg.price}
                    </div>
                    <div style={{ fontSize: '12px', color: '#7A8294', marginTop: '4px' }}>
                      Lifetime access. 12mo updates
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '1px', justifyContent: 'flex-end' }}>
                      {'★★★★★'.split('').map((s, i) => <span key={i} style={{ color: '#E67E3C', fontSize: '13px' }}>{s}</span>)}
                    </div>
                    <div style={{ fontSize: '12px', color: '#7A8294', marginTop: '2px' }}>
                      {pkg.sold} sold
                    </div>
                  </div>
                </div>
                <button style={{
                  width: '100%', padding: '14px', borderRadius: '14px', border: 'none',
                  background: '#0F1827', color: 'white', fontWeight: 600, fontSize: '15px', cursor: 'pointer'
                }}>
                  Get the {pkg.country} playbook →
                </button>
              </div>
            ))}
          </div>

          {/* Bundle */}
          <div style={{
            marginTop: '24px', padding: '32px', borderRadius: '24px',
            background: 'linear-gradient(135deg, #0F1827 0%, #1E2A3F 100%)',
            color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: '24px', position: 'relative', overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(230, 126, 60, 0.25), transparent)' }}></div>
            <div style={{ position: 'relative', maxWidth: '600px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#FFB870', letterSpacing: '0.08em', marginBottom: '8px' }}>
                BUNDLE. SAVE £494
              </div>
              <h3 className="display" style={{ fontSize: '32px', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '8px' }}>
                All 3 playbooks. One price.
              </h3>
              <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: '1.6' }}>
                Still deciding between Spain and Portugal? Comparing Gibraltar tax with Spanish residency? Get all three to compare side-by-side.
              </p>
            </div>
            <div style={{ position: 'relative', textAlign: 'right' }}>
              <div className="display" style={{ fontSize: '56px', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: '1' }}>£797</div>
              <div style={{ fontSize: '14px', color: '#7A8294', textDecoration: 'line-through', marginTop: '4px' }}>£1,291</div>
              <button style={{
                marginTop: '16px', background: '#E67E3C', color: 'white', padding: '14px 24px',
                borderRadius: '100px', border: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer'
              }}>
                Get all 3 →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* THE SEO HUB, content by country */}
      <section style={{ padding: '100px 24px', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', marginBottom: '20px', background: 'rgba(15,24,39,0.06)', color: '#0F1827', borderRadius: '100px', fontSize: '13px', fontWeight: 600 }}>
            240+ free guides . Updated weekly
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: '1.05', fontWeight: 500, letterSpacing: '-0.03em', maxWidth: '900px', marginBottom: '16px' }}>
            Every question answered. <span style={{ fontStyle: 'italic', color: '#E67E3C' }}>For free.</span>
          </h2>
          <p style={{ fontSize: '18px', color: '#525866', maxWidth: '640px', lineHeight: '1.6', marginBottom: '48px' }}>
            Buy the playbook if you want the full system. Or read 240+ free articles covering every visa, tax form, 
            and bureaucratic gotcha across our three countries.
          </p>

          {/* Country hub previews */}
          {[
            { 
              country: 'Spain', flag: '🇪🇸', accent: '#E67E3C', articleCount: '94 articles',
              hubs: [
                { name: 'Spain Visa Guide', count: 12, sample: ['Digital Nomad Visa 2026', 'Non-Lucrative Visa', 'Beckham Law eligibility', 'Spouse visa process'] },
                { name: 'Spain Tax Residency', count: 18, sample: ['183-day rule explained', 'Modelo 720 reporting', 'UK pension transfer tax', 'Crypto tax in Spain'] },
                { name: 'Spanish Banking', count: 8, sample: ['Best banks for expats 2026', 'BBVA vs Santander', 'NIE for bank accounts', 'Avoiding bank fees'] },
                { name: 'Cost of Living Spain', count: 14, sample: ['Cádiz vs Málaga vs Valencia', 'Real monthly costs 2026', 'Healthcare costs SIP card', 'Rent vs buy maths'] }
              ]
            },
            { 
              country: 'Portugal', flag: '🇵🇹', accent: '#2E8585', articleCount: '72 articles',
              hubs: [
                { name: 'Portugal Visa Guide', count: 9, sample: ['D7 retirement visa', 'D8 digital nomad visa', 'Golden Visa 2026', 'Tech visa Portugal'] },
                { name: 'Portuguese Tax', count: 14, sample: ['IFICI explained', 'Post-NHR options', 'NIF registration', 'Capital gains rules'] },
                { name: 'Portuguese Banking', count: 6, sample: ['Best banks Portugal', 'Activobank vs Millennium', 'Opening from UK', 'Online banking apps'] },
                { name: 'Cost of Living Portugal', count: 11, sample: ['Lisbon vs Porto vs Algarve', 'Real monthly costs', 'Healthcare SNS', 'Housing reality 2026'] }
              ]
            },
            { 
              country: 'Gibraltar', flag: '🇬🇮', accent: '#9C3848', articleCount: '48 articles',
              hubs: [
                { name: 'Gibraltar Residency', count: 8, sample: ['Cat 2 high-net-worth', 'HEPSS for executives', 'Self-sufficient route', 'Cat 6 students'] },
                { name: 'Gibraltar Tax', count: 12, sample: ['Cat 2 tax cap explained', 'HEPSS £29k cap', 'Company formation tax', 'EU treaty implications'] },
                { name: 'Frontier Worker', count: 6, sample: ['Live Spain work Gib', 'Border crossing 2026', 'Tax treaty Spain-Gib', 'Healthcare cross-border'] },
                { name: 'Gibraltar Banking', count: 5, sample: ['Best Gib banks 2026', 'Opening account routes', 'Multi-currency setup', 'NatWest Gibraltar'] }
              ]
            }
          ].map(country => (
            <div key={country.country} style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', paddingBottom: '16px', borderBottom: `2px solid ${country.accent}` }}>
                <span style={{ fontSize: '40px' }}>{country.flag}</span>
                <div style={{ flex: 1 }}>
                  <h3 className="display" style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.02em' }}>
                    {country.country} <span style={{ fontSize: '14px', color: '#7A8294', fontFamily: 'Inter', fontWeight: 500 }}>· {country.articleCount}</span>
                  </h3>
                </div>
                <button style={{
                  fontSize: '13px', color: country.accent, background: 'transparent',
                  border: `1px solid ${country.accent}`, padding: '8px 14px', borderRadius: '100px',
                  fontWeight: 600, cursor: 'pointer'
                }}>
                  Browse all {country.country} →
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                {country.hubs.map(hub => (
                  <div key={hub.name} style={{
                    padding: '20px', borderRadius: '16px', background: '#FFFFFF',
                    border: '1px solid rgba(15,24,39,0.04)', cursor: 'pointer'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <div style={{ fontWeight: 700, fontSize: '15px', letterSpacing: '-0.01em' }}>{hub.name}</div>
                      <div style={{ fontSize: '11px', color: country.accent, fontWeight: 600, padding: '2px 8px', background: `${country.accent}15`, borderRadius: '100px' }}>
                        {hub.count} guides
                      </div>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {hub.sample.slice(0, 3).map((article, idx) => (
                        <li key={idx} style={{ fontSize: '13px', color: '#525866', padding: '4px 0', borderBottom: idx < 2 ? '1px solid rgba(15,24,39,0.04)' : 'none' }}>
                          → {article}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FREE CALCULATORS / LEAD MAGNETS */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', marginBottom: '20px', background: 'rgba(230, 126, 60, 0.1)', color: '#E67E3C', borderRadius: '100px', fontSize: '13px', fontWeight: 600 }}>
            Free tools . No signup required
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: '1.05', fontWeight: 500, letterSpacing: '-0.03em', maxWidth: '900px', marginBottom: '48px' }}>
            8 free calculators that do the maths for you.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {[
              { icon: '🧮', name: 'Beckham Law Calculator', desc: 'See exactly what you\'d save with Spain\'s special tax regime', count: '12k uses' },
              { icon: '💰', name: 'Cost of Living Comparator', desc: 'UK city vs Spanish city vs Portugal, full breakdown', count: '8.4k uses' },
              { icon: '📋', name: 'Visa Eligibility Checker', desc: 'Find your visa route in 60 seconds across 3 countries', count: '15k uses' },
              { icon: '🏠', name: 'Property Tax Calculator', desc: 'Buying as non-resident, full tax estimate', count: '5.2k uses' },
              { icon: '💷', name: 'Pension Transfer Decision', desc: 'Keep UK SIPP, QROPS, or do nothing?', count: '3.8k uses' },
              { icon: '📅', name: 'Residency Timeline Builder', desc: 'When you become tax resident, when you exit UK tax', count: '6.1k uses' },
              { icon: '🏦', name: 'Spanish Bank Comparator', desc: '8 banks ranked for British expats 2026', count: '4.7k uses' },
              { icon: '🎓', name: 'School Cost Calculator', desc: 'International school fees vs state vs concertado', count: '2.9k uses' }
            ].map(tool => (
              <div key={tool.name} style={{
                background: 'white', padding: '20px', borderRadius: '18px',
                border: '1px solid rgba(15,24,39,0.06)', cursor: 'pointer'
              }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>{tool.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '6px', letterSpacing: '-0.01em' }}>{tool.name}</div>
                <div style={{ fontSize: '13px', color: '#525866', lineHeight: '1.5', marginBottom: '10px' }}>{tool.desc}</div>
                <div style={{ fontSize: '11px', color: '#7A8294', fontWeight: 600 }}>{tool.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '100px 24px', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: '1.05', fontWeight: 500, letterSpacing: '-0.03em', maxWidth: '900px', marginBottom: '48px' }}>
            People who actually <span style={{ fontStyle: 'italic', color: '#2E8585' }}>made it.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {[
              { quote: 'Saved me £11,400 in emergency tax I would never have known to reclaim. The Beckham Law walkthrough alone made it worth 50x over.', name: 'James W.', detail: 'Moved to Málaga, Tech sales', flag: '🇪🇸' },
              { quote: 'Portugal post-NHR is still possible, the playbook walked me through IFICI and I qualified. Most "moving to Portugal" content online is two years out of date.', name: 'Marcus L.', detail: 'Moved to Lisbon, Software engineer', flag: '🇵🇹' },
              { quote: 'The Gibraltar Cat 2 walkthrough is genuinely the only honest guide I\'ve found online. Even my accountant was reading it over my shoulder.', name: 'Daniel R.', detail: 'Moved to Gibraltar, Fintech founder', flag: '🇬🇮' }
            ].map((t, idx) => (
              <div key={idx} style={{
                padding: '28px', borderRadius: '20px', background: '#FFFFFF',
                border: '1px solid rgba(15,24,39,0.04)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '1px' }}>
                    {'★★★★★'.split('').map((s, i) => <span key={i} style={{ color: '#E67E3C', fontSize: '14px' }}>{s}</span>)}
                  </div>
                  <span style={{ fontSize: '22px' }}>{t.flag}</span>
                </div>
                <p className="display" style={{ fontSize: '17px', lineHeight: '1.55', fontStyle: 'italic', marginBottom: '20px', color: '#0F1827', fontWeight: 400 }}>
                  "{t.quote}"
                </p>
                <div style={{ fontSize: '14px', fontWeight: 700 }}>{t.name}</div>
                <div style={{ fontSize: '13px', color: '#7A8294', marginTop: '2px' }}>{t.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '120px 24px', background: 'linear-gradient(135deg, #0F1827 0%, #1E2A3F 100%)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-200px', left: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(230, 126, 60, 0.2), transparent)' }}></div>
        <div style={{ position: 'absolute', bottom: '-200px', right: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(46, 133, 133, 0.2), transparent)' }}></div>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <h2 className="display" style={{ fontSize: 'clamp(44px, 6vw, 80px)', lineHeight: '1.05', fontWeight: 500, letterSpacing: '-0.03em', marginBottom: '24px' }}>
            Your warmer coast<br/>is <span style={{ fontStyle: 'italic', color: '#FFB870' }}>closer than you think.</span>
          </h2>
          <p style={{ fontSize: '20px', color: '#94A3B8', maxWidth: '640px', margin: '0 auto 40px', lineHeight: '1.55' }}>
            Stop reading 200 Reddit threads. Get the playbook from someone who actually did it.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ background: '#E67E3C', color: 'white', padding: '16px 28px', borderRadius: '100px', border: 'none', fontWeight: 600, fontSize: '16px', cursor: 'pointer' }}>
              See all 3 playbooks →
            </button>
            <button style={{ background: 'transparent', color: 'white', padding: '16px 28px', borderRadius: '100px', border: '1.5px solid rgba(255,255,255,0.2)', fontWeight: 600, fontSize: '16px', cursor: 'pointer' }}>
              Take the 2-min quiz
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '60px 24px 30px', background: '#0A0E18', color: '#94A3B8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            <div>
              <div className="display" style={{ fontSize: '22px', fontWeight: 600, color: 'white', letterSpacing: '-0.02em', marginBottom: '12px' }}>
                Warmer<span style={{ color: '#E67E3C' }}>Coast</span>
              </div>
              <p style={{ fontSize: '13px', lineHeight: '1.6' }}>
                Country relocation playbooks for Brits leaving for warmer shores.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'white', letterSpacing: '0.08em', marginBottom: '14px' }}>COUNTRIES</div>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: '2' }}>
                <li>🇪🇸 Spain</li>
                <li>🇵🇹 Portugal</li>
                <li>🇬🇮 Gibraltar</li>
              </ul>
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'white', letterSpacing: '0.08em', marginBottom: '14px' }}>RESOURCES</div>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: '2' }}>
                <li>Free calculators</li>
                <li>Country guides</li>
                <li>Visa quiz</li>
                <li>Newsletter</li>
              </ul>
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'white', letterSpacing: '0.08em', marginBottom: '14px' }}>COMPANY</div>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: '2' }}>
                <li>About</li>
                <li>Contact</li>
                <li>Refund policy</li>
                <li>Privacy & terms</li>
              </ul>
            </div>
          </div>
          <div style={{ padding: '24px 0 0', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', fontSize: '12px' }}>
            <div>© 2026 WarmerCoast. Educational content only, not legal/tax/immigration advice</div>
            <div>Built by Brits in Cádiz with their Spanish family</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
