module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-crayola": "#7BDFF2",
        "light-celeste": "#B2F7EF",
        "mint-cream": "#EFF7F6",
        "piggy-pink": "#F7D6E0",
        "cotton-candy": "#F2B5D4",
        "mellow-apricot": "#FFBF69",
        "orange-peel": "FF9F1C",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
