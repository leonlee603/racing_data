module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // primary: "#270A4B",
        // secondary: "#E8C36D",
        // dark: "#110734",
      },
      fontFamily: {
        // sans: ['VT323']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}