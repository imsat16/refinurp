module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extends: {
      fontWeight: ['hover', 'focus'],
      borderRadius: ['hover', 'focus'],
      translate: ['active', 'group-hover', 'responsive'],
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
};
