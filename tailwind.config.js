module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "Mobile": { "min": "200px", "max": "480px" },
      "Tablet": { "min": "480px", "max": "768px" },
      "default": { "min": "768px", "max": "1024px" },
      "Desktop": { "min": "1024px", "max": "1200px" },
      "large": "1440px",
    },
    colors: {
      // ## Colors

      // ### Primary

      "Bright-Red": "hsl(12, 88%, 59%)",
      "Bright-Red-2": "hsl(12, 88%, 70%)",
      "Dark-Blue": "hsl(228, 39%, 23%)",

      // ### Neutral

      "Dark-Grayish-Blue": "hsl(227, 12%, 61%)",
      "Very-Dark-Blue": "hsl(233, 12%, 13%)",
      "Very-Pale-Red": "hsl(13, 100%, 96%)",
      "Vary-Light-Gray": "hsl(0, 0%, 98%)",

      // Default

      "White": "#ffffff",

    },
    fontFamily: {
      viet: ["Be Vietnam Pro", "sans-serif"],
    },
    fontSize: {
      normal: "16px",
    },
    fontWeight: {
      n: 400,
      m: 500,
      l: 700,
    },


    extend: {},
  },
  plugins: [],
}
