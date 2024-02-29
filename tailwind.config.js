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
        wildSand: "#F4F4F4",
        silver: "#CBCBCB", 
        gallery: "#EAEAEA", 
        gulfStream: "#8BB4B3",
        patina: "#649694", 
        alabaster: "#FAFAFA",
        dustyGray: "#979797",
      },
      backgroundImage: {
        headerDesktop: "url('/public/images/image-hero-desktop.jpg')",
        headerMobile: "url('/public/images/image-hero-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
