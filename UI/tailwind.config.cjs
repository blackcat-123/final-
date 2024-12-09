/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  daisyui: {
    themes: ["light", "dark", "winter", "cupcake", "garden", "corporate", "lemonade", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula"],
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      //primary: ,
      //secondary: ,

    },
  },
};
