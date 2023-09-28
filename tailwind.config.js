/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1000px",
    },
    extend: {
      spacing: {
        0.5: "0.5rem",
        1: "1rem",
        1.5: "1.5rem",
        2: "2rem",
      },
      borderColor: {
        1: "#000",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
