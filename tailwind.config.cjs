/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/main.js','./src/partials/*.hbs'],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito,sans-serif"],
      },

    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
}
