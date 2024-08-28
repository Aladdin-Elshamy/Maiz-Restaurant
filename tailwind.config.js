/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      cotoris : ['cotoris', 'sans-serif'],
      cotorisBold : ['cotorisBold', 'sans-serif'],
      cotorisHeavy : ['cotorisHeavy', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}