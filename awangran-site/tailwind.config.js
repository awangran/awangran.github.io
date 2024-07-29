/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4.052rem',
      '9xl' : '150px'
    },
    extend: {
      colors: {
        'beige': '#FFF2DF',
        'orange': '#FFAC81',
        'pink': '#FF928B',
        'salmon': '#FEC3A6',
        'yellow': '#EFE9AE',
        'lime': '#CDEAC0',
        'green': '#B7E0A3'
      }
    },
  },
  plugins: [],
}

