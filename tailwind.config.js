/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-main": "#8d0801",
        "red-light": "#c51e02",
        "gray-main": "#CCC5B9",
      },
      backgroundImage: {
        hero: "url('../public/img/hero2.jpg') ",
      },
    },
  },
  plugins: [],
};
