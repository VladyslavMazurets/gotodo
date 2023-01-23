/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'bcolor': '#B2AFA1',
      'button-bg': '#69665C',
      'button-text': 'white',
      'todo-bg': '#FFF9DE',
      'work': '#D2CEFF',
      'entertainment': '#FFCECE',
      'stude': '#D1E5F7',
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
