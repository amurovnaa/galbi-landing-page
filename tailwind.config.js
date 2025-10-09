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
      keyframes: {
        fade: {
          "0%, 16.66%": { opacity: "1" },
          "33.33%, 100%": { opacity: "0" },
        },
      },
      animation: {
        fade: "fade 30s linear infinite",
      },
    },
  },
  plugins: [],
};
