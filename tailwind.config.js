module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        slate: {
          css: {
            '--tw-prose-links': theme('colors.yellow[400]'),
            '--tw-prose-invert-links': theme('colors.green[400]'),
          },
        },
        DEFAULT: {
          css: {
            '--tw-prose-links': theme('colors.red[400]'),
            '--tw-prose-invert-links': theme('colors.blue[400]'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
