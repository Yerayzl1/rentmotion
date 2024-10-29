module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    colors: {
      mainColor: '#FF0000',
      secondaryColor: '#FF7700',
      terciaryColor: '#8CFF00',
      linkColor: '#00B7FF',
      black: '#000000',
      white: '#FFFFFF',
    },
    extend: {
      backgroundImage: {
        'background': 'linear-gradient(0deg, #990000 0%, #1F1812 29%, #994C08 69%, #FF7700 100%)',
        'plus': 'linear-gradient(0deg, #FF7700 0%, #FF3636 50%, #FF6E00 100%)',
      },
    },
  },
  plugins: [],
};
