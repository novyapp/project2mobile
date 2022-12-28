/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#42C6A5", // Green
          primary2: "#FBB344", // Orange
          primary3: "#33354E", // Dark Blue
          secondary: "#FC2626", // Red
        },
      },
    },
  },
  plugins: [],
};
