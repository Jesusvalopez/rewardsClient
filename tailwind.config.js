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
    },
  },
  variants: {
    extend: {},
    backgroundColor: ({ after }) => after(["disabled"]),
  },
  plugins: [],
};
