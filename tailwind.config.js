/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#232121",
        secondary: "#928F8F",
        primary_border: "#D9D9D9",
      },
      fontFamily: {
        neue: "Bebas Neue, sans-serif",
        roboto: "Roboto, sans-serif;",
      },
    },
  },
  plugins: [],
};
