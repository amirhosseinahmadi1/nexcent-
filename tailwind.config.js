/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors : {
      "green" : "#4CAF4F",
      "white": "#ffffff",
      "black":"#000000",
      "gray":"#717171",
      "dark-blue":"#263238",
      "center-white":"#F5F7FA",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
        extend: {},
  },
  plugins: [],
}

