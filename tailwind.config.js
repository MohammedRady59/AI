/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "4rem",
        lg: "4rem",
        xl: "5rem",
      },
    },

    extend: {
      fontFamily: {
        main: ["DM Sans", "sans-serif"],
      },
      colors: {
        mainColor: "#05051e",
        secandary: "#43a5fe",
      },
    },
  },
  plugins: [],
};
