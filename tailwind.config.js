const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    container: {
      center: true,
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    textColor: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ["Roboto", "Helvetica", "sans-serif"],
      serif: ["Georgia", "serif"],
      mono: ["Courier"],
    },
    extend: {
      // backgroundImage: (theme) => ({
      //   wave: "url('/public/vercel.svg')",
      // }),
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["focus-visible"],
      opacity: ["disabled"],
    },
  },
};
