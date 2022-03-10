module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    textColor: {
      primary: "#3490dc",
      secondary: "#ffed4a",
      brand: "#FF5A30",
      white: "#FFFFFF",
      black: "#1E212C",
    },
    screens: {
      mobile: "390px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      backgroundImage: {
        firstHero: "url('../public/images/firstHeroBg.png')",
        serviceBg1: "url('../public/images/services/interior.png')",
        const: "url('../public/images/services/const.png')",
        project: "url('../public/images/services/project.png')",
        repair: "url('../public/images/services/repair.png')",
      },
      backgroundColor: {
        brand: "#FF5A30",
      },
    },
    fontFamily: {
      league: ["League Spartan", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
}
