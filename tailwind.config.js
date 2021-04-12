module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      bangers: ["Bangers"],
      roboto: ["Roboto Condensed"],
    },
    extend: {
      colors: {
        sticksyellow: "#F7C600",
      },
      lineHeight: {
        20: "5rem",
      },
    },
  },
  variants: {
    extend: {},
    backgroundColor: ({ after }) => after(["disabled"]),
  },
  plugins: [],
};
