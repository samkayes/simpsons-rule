/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      colors: {
        color1: "#F9F9F9",
        color2: "#FFFFFF",
        color3: "#000000",
        color4: "#EF4444",
        color5: "#D1D5DB",
        color6: "#16A34A",
        color7: "#15803D",
        color8: "#DB2777",
        color9: "#FF80B9",
      },
      fontFamily: {
        montserrat: "Montserrat",
        noto: "Noto Sans Math, sans-serif",
      },
    },
  },
  plugins: [],
};
