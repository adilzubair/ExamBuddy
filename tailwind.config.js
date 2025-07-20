/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        neon: {
          400: '#39FF14',
        },
        blue: {
          600: '#1736F5',
        },
        platinum: {
          200: '#F8F8F8',
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'neon': '0 0 15px rgba(57, 255, 20, 0.3)',
        'modern': '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
        'glow': '0 10px 25px -5px rgba(23, 54, 245, 0.2), 0 10px 10px -5px rgba(57, 255, 20, 0.1)',
        'glow-blue': '0 0 15px rgba(23, 54, 245, 0.3)',
        'glow-neon': '0 0 15px rgba(57, 255, 20, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 3s ease infinite',
        'gradient-shift': 'gradient-shift 5s ease infinite',
        'progress': 'progress 8s linear forwards',
        'spin-slow': 'spin-slow 10s linear infinite',
        'particle-1': 'particle-1 15s ease-in-out infinite',
        'particle-2': 'particle-2 12s ease-in-out infinite',
        'particle-3': 'particle-3 18s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-gentle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '20%': { opacity: '1', transform: 'translateY(0)' },
          '80%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' }
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        'progress': {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
