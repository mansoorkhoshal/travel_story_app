/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    fontFamily: ["Poppins", "sans-serif"],
    extend: {
      // colors used in the project are
      colors: {
        primary: "#05B6D3",
        secondary: "#EF863E",
      },
    },
  },
  plugins: [],
};
