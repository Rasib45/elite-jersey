/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0E13',
        surface: '#12161D',
        surface2: '#1A212B',
        chalk: '#F5F6F8',
        crimson: '#E23B4E',
        crimsondark: '#B92A3A',
        gold: '#C9A24B',
        goldsoft: '#E4C878',
        muted: '#8A93A3',
      },
      fontFamily: {
        display: ['Anton', 'Arial Narrow', 'sans-serif'],
        body: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
