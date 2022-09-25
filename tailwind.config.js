/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
