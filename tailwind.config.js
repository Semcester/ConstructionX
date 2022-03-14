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
        redFinger: "url('../public/images/browse/redFinger.png')",
        cubes: "url('../public/images/browse/cubes.png')",
        pencil: "url('../public/images/browse/pencil.png')",
        Invest1: "url('../public/images/sponsors/1.png')",
        Invest2: "url('../public/images/sponsors/2.png')",
        Invest3: "url('../public/images/sponsors/3.png')",
        Invest4: "url('../public/images/sponsors/4.png')",
        Invest5: "url('../public/images/sponsors/5.png')",
        Invest6: "url('../public/images/sponsors/6.png')",
        facts: "url('../public/images/facts/facts.png')",
        application: "url('../public/images/application/BG.png')",
      },
      backgroundColor: {
        brand: "#FF5A30",
        footer: "#1E212C",
      },
      display: ["group-hover"],
      height: {
        934: "58rem",
        666: "42rem",
      },
      width: {
        495: "31rem",
        1024: "64rem",
        1920: "120rem",
      },
      borderColor: {
        brand: "#FF5A30",
      },
      accentColor: {
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
}
