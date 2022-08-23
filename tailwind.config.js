/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "golden-rod": "#daa520",
        inverted: "#2b50c8",
      },
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
      },
    },
    screens: {
      phone: { max: "500px" },
    },
  },
  plugins: [],
};
