/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        "flipkart-nav_btn": "0 1px 5px 0 rgba(0,0,0,.11)",
      },
      colors: {
        flipkart: {
          blue: "#2874F0",
          green: "#388E3C",
          yellow: "#FFE500",
          footer: "#172337",
        },
      },
    },
  },
  plugins: [],
};
