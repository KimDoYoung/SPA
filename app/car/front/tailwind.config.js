module.exports = {
  content: [
    './src/**/*.{html,js}','./src/**/*.tpl.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
