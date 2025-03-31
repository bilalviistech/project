/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textPrimary: "#262626",
        textSecondary: "#323232",
        bgBlue: "#0A86F8",
        bgOpacity: "#0A86F84D",
        head: "#2C2D33",
        body: "#323232",
        checkbox: "#CFD3D4",
        "step-gray": "#9499A1",
        "light-gray": "#EAEAEA",
        "primary-green": "#16A636",
        "light-green": "#EBF6EB",
        "secondry-light-green": "#A0DE8C",
        "light-red": "#EB001B33",
        "light-blue": "#2E70E833",
        "primary-red": "#EB001B",
        "primary-blue": "#3591FE",
        "body-black": "#262626",
        dark: "rgba(38, 38, 38, 0.75)",
        "light-gray": "#939393",
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        "global-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      },
      fontSize: {
        h1: "4.5rem",
        h2: "3.25rem",
        h3: "3rem",
        h4: "1.875rem",
        p: "1.5rem",
        pSmall: "1.125rem",
      },
      backgroundImage: {
        secondaryGradientReverse:
          "linear-gradient(to bottom, #F0FFEC, #A4F58F, #86D672)",
      },
    },
  },
  plugins: [],
};
