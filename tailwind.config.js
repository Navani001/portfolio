/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: "#1A0B2E",
        accent: "#7127BA",
        purpleStart: "#763CAC",
        purpleEnd: "#320F85",
      },
      fontFamily: {
        fugaz: ["Fugaz One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
