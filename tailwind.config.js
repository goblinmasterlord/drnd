/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Clash Display', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f4f7f4',
          100: '#e6ebe6',
          200: '#d1dcd3',
          300: '#afc3b2',
          400: '#85a289',
          500: '#4c6b50',  // Muted British Racing Green
          600: '#3c543f',
          700: '#324434',
          800: '#2b392c',
          900: '#1a231b',
          950: '#0f140f',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}