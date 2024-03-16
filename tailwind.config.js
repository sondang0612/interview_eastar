/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#4f5a69",
        primary1: "rgb(242, 44, 77)",
      },
      backgroundColor: {
        primary: "rgb(227, 235, 249)",
        secondary: "rgb(253, 229, 233)",
      },
      borderColor: {
        primary1: "rgb(242, 44, 77)",
      },
    },
  },
  plugins: [],
};
