/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      'Navy' : '#152942',
      'Teal' : '#628298',
      'Grey' : '#F1F1F1',
      'Coral' : '#FA9173',
    },

    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
      },
    },
  },

  plugins: [],

}