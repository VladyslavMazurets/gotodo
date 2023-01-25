/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'bcolor': '#B2AFA1',
      'button-bg': '#69665C',
      'text-color': '#69665C',
      'button-text': 'white',
      'todo-bg': '#FFF9DE',
      'work': '#D2CEFF',
      'entertainment': '#FFCECE',
      'study': '#D1E5F7',
      'family': '#DAF2D6',
      'checkbox-current': 'current',
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
