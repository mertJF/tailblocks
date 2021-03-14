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
    extend: {
      colors: {
        theme: {
          100: "var(--theme-100)",
          200: "var(--theme-200)",
          300: "var(--theme-300)",
          400: "var(--theme-400)",
          500: "var(--theme-500)",
          600: "var(--theme-600)",
          700: "var(--theme-700)",
          800: "var(--theme-800)",
          900: "var(--theme-900)",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
