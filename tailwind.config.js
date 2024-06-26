/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./scrypt.js"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins",
      },

      screens : {
        'petitecran' : {'max': '380px'},
      },

      
    },
  },
  plugins: [],
}

