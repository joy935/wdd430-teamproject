/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          backgroundDark: '#1A0E2E',
          darkPurple: '#3B1D5E',
          electricBlue: '#7F3FFC',
          neonPink: '#F14BBF',
          errorRed: '#E63946',
          fgLight: '#EDEDED',
          fgDark: '#171717',
        },
        fontFamily: {
          poppins: ['var(--font-poppins)', 'sans-serif'],
          inter: ['var(--font-inter)', 'sans-serif'],
          mono: ['var(--font-fira-code)', 'monospace'],
        },
      },
    },
    plugins: [],
  }