/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
        'primary': '#13274B',
        'secondary': '#00C1F3'
      }
    },
    fontFamily: {
      display: ['Chelsea Market', 'cursive'],
      sansSerif: ['Roboto', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
}
