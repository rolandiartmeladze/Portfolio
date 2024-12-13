/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryYellow: "#FFCC00",
      },
      borderColor: {
        default: "rgb(255,170,0)",
      },
      borderOpacity: {
        defoult: '1',
      },
      textColor: {
        primary: "#FFCC00",
        defoult: "rgb(500,250,255)",
      }
    },
  },
  plugins: [],
};
