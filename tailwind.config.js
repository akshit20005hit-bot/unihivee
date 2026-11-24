/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        violet:  { DEFAULT: '#6547F5', light: '#8b6ff7', dark: '#4b35c4' },
        indigo:  { DEFAULT: '#241650', light: '#3a2470' },
        yellow:  { DEFAULT: '#FFD166', light: '#FFE5A3' },
        coral:   { DEFAULT: '#FF6B6B', light: '#FF9898' },
        mint:    { DEFAULT: '#64DDB5', light: '#9EECD3' },
        sky:     { DEFAULT: '#63B9FF', light: '#A3D6FF' },
        canvas:  '#F8F7FC',
        surface: '#FFFFFF',
        ink:     '#211D35',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        inter:   ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
        btn:  '14px',
        input:'12px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 2px 20px 0 rgba(100,71,245,0.08)',
        'card-hover': '0 8px 32px 0 rgba(100,71,245,0.18)',
      },
      animation: {
        'blob': 'blob 8s infinite',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%':       { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%':       { transform: 'translate(-20px, 20px) scale(0.9)' },
        }
      }
    },
  },
  plugins: [],
}
