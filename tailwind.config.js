module.exports = {
  mode: 'jit',
  content: [
    './navigation.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'block-blue': '#1030AD',
      },
      screens: {
        tiny: '300px',
        tablet: '640px',
      },
      fontFamily: {
        display: ['azo-sans-web'],
        sans: [
          'azo-sans-web',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        azo: ['azo-sans-web', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        slate: {
          css: {},
        },
        DEFAULT: {
          css: {
            '--tw-prose-links': theme('colors.yellow[400]'),
            '--tw-prose-invert-links': theme('colors.yellow[400]'),
            a: {
              textDecoration: 'none',
            },
            // h1: {
            //   color: "inherit",
            // },
          },
        },
      }),
    },
  },

  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
