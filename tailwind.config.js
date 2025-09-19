/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Purple and Reddish Theme
        primary: {
          // Rich Purple
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        secondary: {
          // Deep Reddish Purple
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        accent: {
          // Warm Reddish
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        logo: {
          // Additional theme colors
          white: '#ffffff',
          black: '#000000',
          lightPurple: '#c084fc',
          deepPurple: '#6b21a8',
          rose: '#f43f5e',
          crimson: '#dc2626',
          magenta: '#d946ef',
          violet: '#8b5cf6',
          indigo: '#6366f1',
          slate: '#64748b',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Purple and Reddish gradients
        'purple-mesh': 'radial-gradient(at 40% 20%, hsla(270,100%,70%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(320,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(0,84%,60%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(270,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(320,100%,70%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(0,84%,60%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(270,100%,70%,1) 0px, transparent 50%)',
        'purple-aurora': 'linear-gradient(45deg, #a855f7 0%, #ec4899 100%)',
        'purple-sunset': 'linear-gradient(135deg, #a855f7 0%, #ec4899 25%, #ef4444 50%, #9333ea 75%, #db2777 100%)',
        'purple-midnight': 'linear-gradient(135deg, #6b21a8 0%, #be185d 50%, #dc2626 100%)',
        'purple-heaven': 'linear-gradient(135deg, #a855f7 0%, #ec4899 25%, #ef4444 50%, #ffffff 75%, #000000 100%)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'purple-glow': 'purple-glow 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(168, 85, 247, 0.8), 0 0 40px rgba(236, 72, 153, 0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'purple-glow': {
          '0%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.3), 0 0 40px rgba(236, 72, 153, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(236, 72, 153, 0.4), 0 0 50px rgba(239, 68, 68, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.3), 0 0 40px rgba(236, 72, 153, 0.2)' },
        },
      },
    },
  },
  plugins: [],
};
