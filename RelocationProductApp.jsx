import React, { useState } from 'react';

export default function RelocationProductApp() {
  const [activeCountry, setActiveCountry] = useState('spain');
  const [activeModule, setActiveModule] = useState(2);
  const [income, setIncome] = useState(65000);
  const [familySize, setFamilySize] = useState(2);
  const [completedItems, setCompletedItems] = useState(new Set(['nie-1', 'nie-2', 'padron-1']));

  const countries = [
    { id: 'spain', name: 'Spain', flag: '🇪🇸', accent: '#FF6B35', progress: 38 },
    { id: 'portugal', name: 'Portugal', flag: '🇵🇹', accent: '#00A878', progress: 12 },
    { id: 'gibraltar', name: 'Gibraltar', flag: '🇬🇮', accent: '#DC2626', progress: 0 }
  ];

  const currentCountry = countries.find(c => c.id === activeCountry);

  const modules = [
    { id: 1, name: 'Decide', desc: 'Is this country right for you?', icon: '🎯', complete: true },
    { id: 2, name: 'Visa', desc: 'Pick and apply for the right route', icon: '📋', complete: false, active: true },
    { id: 3, name: 'Tax', desc: 'Set up your tax position', icon: '💰', complete: false },
    { id: 4, name: 'Money', desc: 'Banking, currency, finance', icon: '🏦', complete: false },
    { id: 5, name: 'Land', desc: 'First 90 days on the ground', icon: '✈️', complete: false },
    { id: 6, name: 'Settle', desc: 'Long-term life setup', icon: '🏡', complete: false }
  ];

  // Tax calculator logic
  const beckhamLawTax = income * 0.24;
  const standardSpanishTax = income < 12450 ? income * 0.19 : 
                              income < 20200 ? 2365 + (income - 12450) * 0.24 :
                              income < 35200 ? 4225 + (income - 20200) * 0.30 :
                              income < 60000 ? 8725 + (income - 35200) * 0.37 :
                              income < 300000 ? 17901 + (income - 60000) * 0.45 :
                              125901 + (income - 300000) * 0.47;
  const ukTax = income < 12570 ? 0 :
                income < 50270 ? (income - 12570) * 0.20 :
                income < 125140 ? 7540 + (income - 50270) * 0.40 :
                37088 + (income - 125140) * 0.45;

  const visaChecklist = [
    { id: 'nie-1', text: 'Book NIE appointment at Spanish consulate', deadline: 'Done', section: 'NIE Application' },
    { id: 'nie-2', text: 'Prepare passport + 2 photos + EX-15 form', deadline: 'Done', section: 'NIE Application' },
    { id: 'nie-3', text: 'Attend NIE appointment in person', deadline: 'In 18 days', section: 'NIE Application' },
    { id: 'nie-4', text: 'Collect NIE certificate (allow 2 weeks)', deadline: 'In 32 days', section: 'NIE Application' },
    { id: 'padron-1', text: 'Sign Spanish rental contract (proof of address)', deadline: 'Done', section: 'Padron' },
    { id: 'padron-2', text: 'Book empadronamiento at town hall', deadline: 'In 5 days', section: 'Padron' },
    { id: 'padron-3', text: 'Collect padron certificate', deadline: 'In 12 days', section: 'Padron' },
    { id: 'visa-1', text: 'Compile last 3 years tax returns (Beckham Law evidence)', deadline: 'In 14 days', section: 'Beckham Law' },
    { id: 'visa-2', text: 'Submit Modelo 149 within 6 months of arrival', deadline: 'In 78 days', section: 'Beckham Law' }
  ];

  const toggleComplete = (id) => {
    const newSet = new Set(completedItems);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setCompletedItems(newSet);
  };

  return (
    <div style={{ background: '#F7F8FA', minHeight: '100vh', fontFamily: '"Inter", -apple-system, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&display=swap');
        
        .serif { font-family: 'Instrument Serif', serif; }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        
        .slide-in { animation: slideIn 0.3s ease-out both; }
        
        .progress-bar {
          background: linear-gradient(90deg, #FF6B35 0%, #F7B731 100%);
          transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        details[open] summary svg { transform: rotate(180deg); }
        details summary svg { transition: transform 0.2s; }
        
        .check-anim {
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      {/* Top nav */}
      <div style={{ background: 'white', borderBottom: '1px solid #E5E7EB', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div style={{ fontWeight: 800, fontSize: '17px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '20px' }}>🌍</span>
              Relocate.Smart
            </div>
            <nav style={{ display: 'flex', gap: '24px' }}>
              <a style={{ fontSize: '14px', color: '#0A0E1A', fontWeight: 600 }}>My Playbooks</a>
              <a style={{ fontSize: '14px', color: '#6B7280', fontWeight: 500 }}>Updates</a>
              <a style={{ fontSize: '14px', color: '#6B7280', fontWeight: 500 }}>Resources</a>
              <a style={{ fontSize: '14px', color: '#6B7280', fontWeight: 500 }}>Community</a>
            </nav>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button style={{ fontSize: '13px', color: '#6B7280', background: 'transparent', border: 'none', cursor: 'pointer' }}>
              🔔
              <span style={{ display: 'inline-block', width: '6px', height: '6px', background: '#FF6B35', borderRadius: '50%', marginLeft: '2px', verticalAlign: 'top' }}></span>
            </button>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF6B35, #F7B731)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '13px' }}>
              D
            </div>
          </div>
        </div>
      </div>

      {/* Main container */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '32px 24px', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }}>
        
        {/* LEFT SIDEBAR — Country selector + module nav */}
        <aside>
          {/* Country switcher */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#6B7280', marginBottom: '12px' }}>
              YOUR PLAYBOOKS (3)
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {countries.map(country => (
                <button
                  key={country.id}
                  onClick={() => setActiveCountry(country.id)}
                  style={{
                    background: activeCountry === country.id ? 'white' : 'transparent',
                    border: activeCountry === country.id ? '1px solid #E5E7EB' : '1px solid transparent',
                    borderRadius: '12px',
                    padding: '12px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    boxShadow: activeCountry === country.id ? '0 1px 2px rgba(0,0,0,0.04)' : 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '22px' }}>{country.flag}</span>
                      <span style={{ fontSize: '14px', fontWeight: 700 }}>{country.name}</span>
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: country.accent }}>
                      {country.progress}%
                    </span>
                  </div>
                  <div style={{ background: '#F3F4F6', borderRadius: '100px', height: '4px', overflow: 'hidden' }}>
                    <div className="progress-bar" style={{ height: '100%', width: `${country.progress}%`, background: country.accent }}></div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Module nav */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#6B7280', marginBottom: '12px' }}>
              {currentCountry.name.toUpperCase()} — 6 MODULES
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {modules.map(module => (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module.id)}
                  style={{
                    background: activeModule === module.id ? 'white' : 'transparent',
                    border: 'none',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    boxShadow: activeModule === module.id ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: module.complete ? '#10B981' : activeModule === module.id ? currentCountry.accent : '#F3F4F6',
                    color: (module.complete || activeModule === module.id) ? 'white' : '#9CA3AF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>
                    {module.complete ? '✓' : module.id}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#0A0E1A' }}>
                      {module.name}
                    </div>
                    <div style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '1px' }}>
                      {module.desc}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar widget — buyer LTV signal */}
          <div style={{ 
            marginTop: '32px', 
            padding: '16px', 
            background: 'linear-gradient(135deg, #0A0E1A, #1E293B)', 
            borderRadius: '12px',
            color: 'white'
          }}>
            <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '8px' }}>
              UPGRADE AVAILABLE
            </div>
            <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px', lineHeight: '1.3' }}>
              Join the Members' Lounge
            </div>
            <div style={{ fontSize: '12px', color: '#94A3B8', lineHeight: '1.5', marginBottom: '12px' }}>
              Monthly Q&A with Dom & Sofia. Private community. Tax law updates.
            </div>
            <button style={{ 
              background: 'white', 
              color: '#0A0E1A', 
              padding: '8px 14px', 
              borderRadius: '8px', 
              border: 'none', 
              fontSize: '12px', 
              fontWeight: 700,
              cursor: 'pointer',
              width: '100%'
            }}>
              £29/month →
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main>
          {/* Module header */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#6B7280', marginBottom: '12px' }}>
              <span>{currentCountry.flag} {currentCountry.name}</span>
              <span>›</span>
              <span>Module {activeModule}</span>
            </div>
            <h1 className="serif" style={{ fontSize: '44px', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: '1.1', marginBottom: '12px' }}>
              Pick and apply for the right visa route
            </h1>
            <p style={{ fontSize: '17px', color: '#525866', lineHeight: '1.5', maxWidth: '720px' }}>
              You've decided Spain is right. Now choose between the Non-Lucrative, Digital Nomad, Self-Employed, or Beckham Law routes — and get every document you need without paying a lawyer £2,000.
            </p>
          </div>

          {/* Interactive: Visa decision tree */}
          <div style={{ background: 'white', borderRadius: '20px', padding: '32px', marginBottom: '24px', border: '1px solid #E5E7EB' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#FF6B35', letterSpacing: '0.08em', marginBottom: '6px' }}>
                  INTERACTIVE TOOL
                </div>
                <div style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em' }}>
                  Which visa is right for you?
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#10B981', fontWeight: 600 }}>
                <span style={{ width: '8px', height: '8px', background: '#10B981', borderRadius: '50%' }}></span>
                Saved
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '8px' }}>
                  Annual UK gross income (£)
                </label>
                <input 
                  type="range" 
                  min="20000" 
                  max="200000" 
                  step="5000" 
                  value={income} 
                  onChange={(e) => setIncome(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#FF6B35' }}
                />
                <div style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '4px' }}>
                  £{income.toLocaleString()}
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '8px' }}>
                  Will you work remotely for a UK employer?
                </label>
                <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                  <button style={{ flex: 1, padding: '10px', borderRadius: '10px', border: '2px solid #FF6B35', background: '#FFF4EE', color: '#FF6B35', fontWeight: 700, fontSize: '13px', cursor: 'pointer' }}>
                    Yes
                  </button>
                  <button style={{ flex: 1, padding: '10px', borderRadius: '10px', border: '1px solid #E5E7EB', background: 'white', color: '#6B7280', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}>
                    No, self-employed
                  </button>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '24px', padding: '20px', background: 'linear-gradient(135deg, #FFF4EE 0%, #FFEAD9 100%)', borderRadius: '14px', borderLeft: '4px solid #FF6B35' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#FF6B35', letterSpacing: '0.08em', marginBottom: '8px' }}>
                YOUR RECOMMENDED ROUTE
              </div>
              <div style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '8px' }}>
                Digital Nomad Visa + Beckham Law
              </div>
              <div style={{ fontSize: '14px', color: '#525866', lineHeight: '1.5' }}>
                At £{income.toLocaleString()}/year working remotely for a UK employer, you qualify for both. Apply for the Digital Nomad Visa first (60-day processing), then activate Beckham Law within 6 months of arrival — your effective tax rate drops to <strong style={{ color: '#0A0E1A' }}>24% flat</strong> for 6 years vs Spain's progressive scale up to 47%.
              </div>
              <button style={{ marginTop: '12px', background: '#FF6B35', color: 'white', padding: '8px 14px', borderRadius: '8px', border: 'none', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>
                See full walkthrough →
              </button>
            </div>
          </div>

          {/* Interactive: Tax comparison */}
          <div style={{ background: 'white', borderRadius: '20px', padding: '32px', marginBottom: '24px', border: '1px solid #E5E7EB' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#FF6B35', letterSpacing: '0.08em', marginBottom: '6px' }}>
              YOUR NUMBERS
            </div>
            <div style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '24px' }}>
              What this saves you in year one
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              <div style={{ padding: '20px', background: '#F9FAFB', borderRadius: '14px' }}>
                <div style={{ fontSize: '12px', color: '#6B7280', fontWeight: 600, marginBottom: '6px' }}>UK TAX (CURRENT)</div>
                <div style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.03em', color: '#0A0E1A' }}>
                  £{Math.round(ukTax).toLocaleString()}
                </div>
                <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '4px' }}>
                  {((ukTax / income) * 100).toFixed(1)}% effective rate
                </div>
              </div>
              <div style={{ padding: '20px', background: '#FFF4EE', borderRadius: '14px', border: '2px solid #FF6B35' }}>
                <div style={{ fontSize: '12px', color: '#FF6B35', fontWeight: 700, marginBottom: '6px' }}>BECKHAM LAW</div>
                <div style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.03em', color: '#0A0E1A' }}>
                  £{Math.round(beckhamLawTax).toLocaleString()}
                </div>
                <div style={{ fontSize: '12px', color: '#FF6B35', fontWeight: 600, marginTop: '4px' }}>
                  24% flat rate
                </div>
              </div>
              <div style={{ padding: '20px', background: '#F9FAFB', borderRadius: '14px' }}>
                <div style={{ fontSize: '12px', color: '#6B7280', fontWeight: 600, marginBottom: '6px' }}>STANDARD SPANISH</div>
                <div style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.03em', color: '#0A0E1A' }}>
                  £{Math.round(standardSpanishTax).toLocaleString()}
                </div>
                <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '4px' }}>
                  {((standardSpanishTax / income) * 100).toFixed(1)}% effective rate
                </div>
              </div>
            </div>

            <div style={{ marginTop: '20px', padding: '16px 20px', background: '#0A0E1A', color: 'white', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>YOU SAVE PER YEAR WITH BECKHAM LAW</div>
                <div style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.02em' }}>
                  £{Math.round(ukTax - beckhamLawTax).toLocaleString()}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>OVER 6 YEARS</div>
                <div style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.02em', color: '#10B981' }}>
                  £{Math.round((ukTax - beckhamLawTax) * 6).toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive checklist */}
          <div style={{ background: 'white', borderRadius: '20px', padding: '32px', marginBottom: '24px', border: '1px solid #E5E7EB' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#FF6B35', letterSpacing: '0.08em', marginBottom: '6px' }}>
                  YOUR PROGRESS
                </div>
                <div style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em' }}>
                  Visa application checklist
                </div>
              </div>
              <div style={{ fontSize: '14px', color: '#6B7280' }}>
                <strong style={{ color: '#0A0E1A', fontSize: '20px' }}>{completedItems.size}</strong> / {visaChecklist.length} complete
              </div>
            </div>

            {/* Group by section */}
            {['NIE Application', 'Padron', 'Beckham Law'].map(section => (
              <div key={section} style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#374151', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {section}
                </div>
                {visaChecklist.filter(item => item.section === section).map(item => {
                  const isComplete = completedItems.has(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleComplete(item.id)}
                      className="check-anim"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        marginBottom: '6px',
                        background: isComplete ? '#F0FDF4' : '#F9FAFB',
                        border: '1px solid',
                        borderColor: isComplete ? '#BBF7D0' : 'transparent'
                      }}
                    >
                      <div style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '6px',
                        border: '2px solid',
                        borderColor: isComplete ? '#10B981' : '#D1D5DB',
                        background: isComplete ? '#10B981' : 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        {isComplete && <span style={{ color: 'white', fontSize: '13px', fontWeight: 700 }}>✓</span>}
                      </div>
                      <div style={{ 
                        flex: 1, 
                        fontSize: '14px', 
                        color: isComplete ? '#6B7280' : '#0A0E1A',
                        fontWeight: 500,
                        textDecoration: isComplete ? 'line-through' : 'none'
                      }}>
                        {item.text}
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        fontWeight: 600,
                        color: item.deadline === 'Done' ? '#10B981' : '#FF6B35',
                        padding: '4px 10px',
                        background: item.deadline === 'Done' ? '#DCFCE7' : '#FFEAD9',
                        borderRadius: '100px'
                      }}>
                        {item.deadline}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Document vault preview */}
          <div style={{ background: 'white', borderRadius: '20px', padding: '32px', marginBottom: '24px', border: '1px solid #E5E7EB' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#FF6B35', letterSpacing: '0.08em', marginBottom: '6px' }}>
                  YOUR DOCUMENT VAULT
                </div>
                <div style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em' }}>
                  Templates & forms for this module
                </div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {[
                { name: 'EX-15 NIE Form', size: 'PDF · 2 pages', status: 'pre-filled' },
                { name: 'Empadronamiento template', size: 'PDF · 1 page', status: 'ready' },
                { name: 'Modelo 149 (Beckham)', size: 'PDF · 3 pages', status: 'walkthrough' },
                { name: 'Rental contract checklist', size: 'PDF · 2 pages', status: 'ready' },
                { name: 'Document translation list', size: 'PDF · 1 page', status: 'ready' },
                { name: 'Apostille requirements', size: 'PDF · 2 pages', status: 'ready' }
              ].map((doc, idx) => (
                <div key={idx} style={{ padding: '16px', background: '#F9FAFB', borderRadius: '12px', cursor: 'pointer' }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>📄</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, marginBottom: '2px' }}>{doc.name}</div>
                  <div style={{ fontSize: '11px', color: '#9CA3AF' }}>{doc.size}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Continue */}
          <div style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #F7B731 100%)', borderRadius: '20px', padding: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', opacity: 0.9, marginBottom: '6px' }}>
                UP NEXT
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.02em' }}>
                Module 3: Setting up your tax position
              </div>
              <div style={{ fontSize: '14px', opacity: 0.9, marginTop: '4px' }}>
                12 min read · 3 interactive tools · 4 templates
              </div>
            </div>
            <button style={{ background: 'white', color: '#FF6B35', padding: '12px 20px', borderRadius: '12px', border: 'none', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
              Continue →
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
