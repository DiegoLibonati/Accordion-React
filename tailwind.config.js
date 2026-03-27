/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./index.html", "./src/**/*.{ts,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EB5A3C",
        secondary: "#DF9755",
        white: "#ffffff",
        black: "#000000",
      },
      fontFamily: {
        primary: ["Roboto", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
