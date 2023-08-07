/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'lime-green': 'hsl(163, 72%, 41%)',
        'bright-red': 'hsl(356, 69%, 56%)',
        'facebook': 'hsl(208, 92%, 53%)',
        'twitter': 'hsl(203, 89%, 53%)',
        'instagram-start': 'hsl(37, 97%, 70%)',
        'instagram-end': 'hsl(329, 70%, 58%)',
        'youtube': 'hsl(348, 97%, 39%)',
        'dark-toggle': 'linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
        'light-toggle': 'hsl(230, 22%, 74%)',

        'dark': {
          'very-dark-blue-bg': 'hsl(230, 17%, 14%)',
          'very-dark-blue-top-bg-pattern': 'hsl(232, 19%, 15%)',
          'dark-desaturated-blue-card-bg': 'hsl(228, 28%, 20%)',
          'desaturated-blue-text': 'hsl(228, 34%, 66%)',
          'white-text': 'hsl(0, 0%, 100%)',
        },
        'light': {
          'white-bg': 'hsl(0, 0%, 100%)',
          'very-pale-blue-top-bg-pattern': 'hsl(225, 100%, 98%)',
          'light-gray': 'hsl(227, 47%, 96%)',
          'dark-grayish-blue-text': 'hsl(228, 12%, 44%)',
          'very-dark-blue-text': 'hsl(230, 17%, 14%)',
        },
      },
      fontFamily: {
        'body': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'body': '14px',
      },
      fontWeight: {
        'normal': 400,
        'bold': 700,
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}