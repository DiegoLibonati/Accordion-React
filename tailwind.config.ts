import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EB5A3C",
        secondary: "#DF9755",
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [],
};

export default config;
