/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#1C1C1C",
        primary: "#1454FA",
        border: "#D0D0D0",
        rating: "#F3851E",
      },
    },
  },
  plugins: [],
};
