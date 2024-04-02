/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        alemendra: ["Alemendra Display", "serif"],
        wallpoet: ["Wallpoet-Regular", "sans-serif"],
        minaRegular: ["Mina-Regular", "sans-serif"],
        minaBold: ["Mina-Bold", "sans-serif"],
        tourneyReg: ["Tourney-Regular", "serif"],
        tourneyItalic: ["Tourney-Italic", "serif"],
        tourneyBold: ["Tourney-Bold", "serif"],
      },
    },
  },
  plugins: [],
};
