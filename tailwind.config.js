/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./scrypt.js"],
  theme: {
    extend: {
      screens : {
        'petitecran' : {'max': '380px'},
      }
    },
  },
  plugins: [],
}

