/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lucida: ["Lucida Bright", "serif"],
        lufga: ["Lufga", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        awesome: ["Font Awesome 6 Brands", "sans-serif"],
      },
      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        lg2: "1220px",
        xl: "1440px",
        xxl: "1920px",
      },
    },
  },
  plugins: [],
};
