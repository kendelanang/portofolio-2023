/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      ipon5: "320px",
      // => @media (min-width: 640px) { ... }

      realme: "360px",
      // => @media (min-width: 1280px) { ... }

      iponxr: "414px",
      // => @media (min-width: 1280px) { ... }

      ipad: "1024px",
      // => @media (min-width: 1024px) { ... }

      md: "768px",

      lg: "1366px",

      xl: "1536px",

      xxl: "2560px",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        monument: ["Monument Extended"],
      },
    },
  },
  plugins: [],
};
