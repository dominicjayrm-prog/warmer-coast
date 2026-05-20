import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0F1827',
        muted: '#525866',
        faint: '#7A8294',
        warm: {
          DEFAULT: '#E67E3C',
          light: '#FFB870',
          glow: '#FFE9D5',
        },
        sea: '#2E8585',
        gibraltar: '#9C3848',
        border: '#E8E4DC',
        surface: '#F8F9FB',
        night: {
          DEFAULT: '#0F1827',
          deep: '#0A0E18',
        },
        success: '#10B981',
        warning: '#F59E0B',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Fraunces', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.035em',
        tight: '-0.03em',
      },
      fontSize: {
        'display-1': ['clamp(40px, 5.2vw, 68px)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-2': ['clamp(30px, 3.8vw, 48px)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-3': ['clamp(24px, 2.8vw, 34px)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      maxWidth: {
        prose: '68ch',
        content: '1200px',
        narrow: '900px',
      },
      borderRadius: {
        card: '20px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,24,39,0.04), 0 8px 24px rgba(15,24,39,0.06)',
        elevated: '0 24px 60px -20px rgba(15,24,39,0.18)',
        glow: '0 24px 80px -30px rgba(230,126,60,0.55)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 0.6s ease both',
        'pulse-glow': 'pulseGlow 2.4s ease-in-out infinite',
        'shimmer': 'shimmer 2.4s linear infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
