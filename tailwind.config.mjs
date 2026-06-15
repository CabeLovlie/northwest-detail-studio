/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#05070a',
        surface: '#0d1117',
        'surface-soft': '#131923',
        text: '#f8fafc',
        'text-muted': '#a6adbb',
        border: 'rgba(255, 255, 255, 0.1)',
        accent: '#00aaff',
        'accent-strong': '#008cff',
        'accent-soft': 'rgba(0, 170, 255, 0.14)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(0, 170, 255, 0.15)',
        'glow-sm': '0 0 20px rgba(0, 170, 255, 0.12)',
      },
    },
  },
  plugins: [],
};
