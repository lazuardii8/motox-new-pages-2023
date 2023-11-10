/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      ...defaultTheme.screens,
      hminlg700: { raw: "((min-height: 700px) and (min-width: 1024px))" },
      hminlg800: { raw: "((min-height: 800px) and (min-width: 1024px))" },
      hminlg900: { raw: "((min-height: 900px) and (min-width: 1024px))" },

      hminxl700: { raw: "((min-height: 700px) and (min-width: 1280px))" },
      hminxl800: { raw: "((min-height: 800px) and (min-width: 1280px))" },
      hminxl900: { raw: "((min-height: 900px) and (min-width: 1280px))" },

      hmin2xl700: { raw: "((min-height: 700px) and (min-width: 1536px))" },
      hmin2xl800: { raw: "((min-height: 800px) and (min-width: 1536px))" },
      hmin2xl900: { raw: "((min-height: 900px) and (min-width: 1536px))" },

      hmin3Xl700: { raw: "((min-height: 700px) and (min-width: 1600px))" },
      hmin3Xl800: { raw: "((min-height: 800px) and (min-width: 1600px))" },
      hmin3Xl900: { raw: "((min-height: 900px) and (min-width: 1600px))" },

      hmin700: { raw: "(min-height: 700px)" },
      hmin800: { raw: "(min-height: 800px)" },
      hmin900: { raw: "(min-height: 900px)" },
      xs: "576px",
      xx: "425px",
    },
    fontFamily: {},
    colors: {
      ...colors,
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};
