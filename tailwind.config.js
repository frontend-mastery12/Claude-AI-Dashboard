/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0A0A0A',
        surface: '#111111',
        'surface-2': '#161616',
        'surface-hover': '#1A1A1A',
        border: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          light: 'rgba(255,255,255,0.14)',
        },
        accent: {
          DEFAULT: '#7CFF6B',
          dim: '#5FD650',
          soft: 'rgba(124,255,107,0.12)',
        },
        warning: '#F5B700',
        danger: '#FF5C5C',
        neutral: {
          DEFAULT: '#9CA3AF',
          light: '#C7CBD1',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 12px 32px -16px rgba(0,0,0,0.6)',
        glow: '0 0 0 1px rgba(124,255,107,0.25), 0 0 24px -4px rgba(124,255,107,0.35)',
      },
      borderRadius: {
        xl: '14px',
        '2xl': '20px',
      },
      backgroundImage: {
        'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
        'glow-radial': 'radial-gradient(120% 120% at 0% 0%, rgba(124,255,107,0.10) 0%, rgba(124,255,107,0) 60%)',
      },
    },
  },
  plugins: [],
}
