/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#F96D41",
          secondary: "#25282F",
          black: "#1E1B26",
          white: "#FFFFFF",
          lightGray: "#64676D",
          lightGray2: "#EFEFF0",
          lightGray3: "#D4D5D6",
          lightGray4: "#7D7E84",
          gray: "#2D3038",
          gray1: "#282C35",
          darkRed: "#31262F",
          lightRed: "#C5505E",
          darkBlue: "#22273B",
          lightBlue: "#424BAF",
          darkGreen: "#213432",
          lightGreen: "#31Ad66",
        },
      },
    },
  },
  plugins: [],
};
