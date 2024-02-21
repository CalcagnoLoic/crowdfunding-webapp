/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        keppel: "#3CB4AC",
        genoa: "#147B74",
        codGray: "#131313",
        boulder: "#7A7A7A",
        wildSand: "#F4F4F4", //bookmark-btn
        silver: "#CBCBCB", //disabled-btn
        gallery: "#EAEAEA", //border box
        gulfStream: "#8BB4B3", //active-box
        patina: "#649694", //text-modal
        alabaster: "#FAFAFA",
        dustyGray: "#979797"
      },
    },
  },
  plugins: [],
};
