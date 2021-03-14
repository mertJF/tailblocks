module.exports = {
  purge: {
    enabled: true,
    content: ["./src/blocks/*/*/*.js"],
    options: {
      safelist: ["dark"],
    },
  },
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
