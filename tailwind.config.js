module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // Adjust this depending on the location of your source files.
      './public/index.html',
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}