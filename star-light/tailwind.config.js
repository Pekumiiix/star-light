/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'myBlack': "#292D32",
        'lightBlack': "#292D3219",
        'myBlue': "#9619F9",
        'myWhite': "#F8F9FA",
        'myGreen': "#2EB119",
      },
      backgroundImage: {
        'graph': "url('img/graph.svg')"
      }
    },
  },
  plugins: [],
}

