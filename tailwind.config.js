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
