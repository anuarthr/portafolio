/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Fondo muy oscuro
        base: '#0a0a0f',
        surface: '#10101a',
        card: '#13141f',
        // Accent azul oscuro vibrante
        accent: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dark: '#1d4ed8',
          glow: '#1e40af',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: '14px',
        '2xl': '16px',
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg) translateZ(0)' },
          '100%': { transform: 'rotate(360deg) translateZ(0)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateZ(0)' },
          '50%': { transform: 'translateY(-10px) translateZ(0)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 6s linear infinite',
        blink: 'blink 1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
