/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        stix: ["STIX Two Text", "serif"],
        satoshi: ["Satoshi", "serif"],
        clashdisplay: ["ClashDisplay", "serif"],
        bellefair: ["Bellefair", "serif"],
        poppins: ["Poppins", "sans-serif"],
        clashdisplaylight: ["ClashDisplayLight", "serif"],
        baskerville: ["Baskervville", "serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
