/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/component/Footer.jsx",
      "./src/component/Header.jsx",
      "./src/component/Home.jsx",
      "./public/index.html",
      "./App.js",
      "./index.js"
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: [
                'Nunito'
            ],
        },
        colors: {
            'dark-blue': '#1B245F',
            'med-blue': 'rgb(45, 56, 131)',
            'light-blue': 'rgb(68, 83, 184)',
            'light-orange': 'rgb(255, 216, 126)',
            'off-black': 'rgb(30,30,30)',
            'off-white': 'rgb(176, 187, 197)',
            'white': '#FFFFFF',
        },
    },
  },
  plugins: [],
}

