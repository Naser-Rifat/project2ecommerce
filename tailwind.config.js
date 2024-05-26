/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xsm: "100%",
          xm: "100%",
          xlg: "100%",
          sm: "100%",
          md: "100%",
          tab: "100%",
          lg: "1024px",
          xl: "1232px",
        },
        padding: {
          DEFAULT: "1rem",
          xl: "0rem",
        },
      },
      colors: {
        primary: "#0A3E68",
        primaryLight: "#3B5C77",
        secondary: "#EA244E",
        dark: "#202020",
        darkLight:"#363739",
        gray: "#676768",
        lightGray: "#9B9B9C",
        "super-lightGray": "#C0C6C7",
        lightWhite: "#F8F8F8",
        slate:"#CDCDCD",
        light:"#F4F4F4"
      },
      fontSize: {
        "8xl": "8px",
        xsm: "10px",
        "15xl": "15px",
        "18xl": "18px",
        "22xl": "22px",
        "26xl": "26px",
        "34xl": "34xl",
        "45xl": "45px",
        "80xl": "80px",
      },
      screens: {
        xsm: "320px",
        xm: "390px",
        xlg: "425px",
        sm: "640px",
        md: "768px",
        tab: "992px",
        lg: "1024px",
        xl: "1232px",
      },
      spacing: {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
      },
    },
  },
  plugins: [],
}