/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "moderate-violet": "hsl(263, 55%, 52%)",
        "dark-grayish-blue": "hsl(217, 19%, 35%)",
        "dark-blackish-blue": "hsl(219, 29%, 14%)",
        "light-grey": "hsl(0, 0%, 81%)",
        "light-greyish-blue": "hsl(210, 46%, 95%)"
      }
    },
  },
  plugins: [],
}
