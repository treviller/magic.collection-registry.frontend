/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/pages/**/*.tsx",
      "./src/components/**/*.tsx"
  ],
  theme: {
    fontFamily: {
        'body': ['"Open Sans"', 'Arial', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
