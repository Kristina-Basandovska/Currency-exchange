module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        slide: "slide 20s ease-in-out infinite",
      },
      keyframes: {
        slide: {
          "0%": { right: "-100%" },
          "15%": { right: "0%" },
          "85%": { right: "100%" },
          "100%": { right: "200%" },
        },
      },
    },
  },
  plugins: [],
};
