/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsTop: "576px",
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
      
      hminlg850: { raw: "((min-height: 850px) and (min-width: 1024px))" },
      hminlg950: { raw: "((min-height: 950px) and (min-width: 1024px))" },
      hminlg1000: { raw: "((min-height: 1000px) and (min-width: 1024px))" },
      hminlg1100: { raw: "((min-height: 1100px) and (min-width: 1024px))" },
      hminlg1200: { raw: "((min-height: 1200px) and (min-width: 1024px))" },
      
      hminmd1024: { raw: "((min-height: 1024px) and (min-width: 768px))" },
      
      hminSm700: { raw: "((min-height: 700px) and (min-width: 576px))" },
      hminSm800: { raw: "((min-height: 800px) and (min-width: 576px))" },
      hminSm700: { raw: "((min-height: 700px) and (min-width: 576px))" },
      
      hminlg700: { raw: "((min-height: 700px) and (min-width: 1024px))" },
      hminss800: { raw: "((min-height: 800px) and (min-width: 480px))" },
      
      hminmd700: { raw: "((min-height: 700px) and (min-width: 768px))" },
      hminmd1000: { raw: "((min-height: 1000px) and (min-width: 768px))" },
      hminmd900: { raw: "((min-height: 900px) and (min-width: 768px))" },
      hminmd1000: { raw: "((min-height: 1000px) and (min-width: 768px))" },

      hminxxs650: { raw: "((max-height: 650px) and (max-width: 375px))" },

      hminMaxSm: { raw: "(max-width: 576px)" },
      hminMaxSm600: { raw: "((min-height: 601px) and (max-width: 570px))" },
      hminMaxSm700: { raw: "((min-height: 700px) and (max-width: 570px))" },
      hminMaxSm800: { raw: "((min-height: 800px) and (max-width: 570px))" },
      hminMaxSm900: { raw: "((min-height: 900px) and (max-width: 570px))" },
      
      hmaxMaxSm600: { raw: "((max-height: 600px) and (max-width: 570px))" },

      hmin700: { raw: "(min-height: 700px)" },
      hmin800: { raw: "(min-height: 800px)" },
      hmin900: { raw: "(min-height: 900px)" },
      xs: "576px",
      ss: "480px",
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
