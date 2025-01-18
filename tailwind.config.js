/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      Playwrite: [
        '"Playwrite AU SA", serif',
      ],
      rubik: [
        '"Rubik Vinyl", serif',
      ]
    },
    extend: {
      colors: {
        autofillBg: '#FFEEE8',
        autofillText: '#604E48',
        autofillBg1: '#E5EDEC',
        autofillText1: '#005E55',
        bghead: '#030712',
        bgall: '#111827',
        color1: '#00BDAA',
        color2: '#BC9E98',
      },
    },
    screens: {
      xs: "320px",
      sm: "375px",
      sml: "500px",
      md: "667px",
      mdl: "768px",
      lg: "860px",
      lgl: "1024px",
      xl: "1280px",
      lxl: "1536px",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('autofill', '&:-webkit-autofill');
    },
  ],
}