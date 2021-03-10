const imp = require('postcss-import');
const flex = require('postcss-flexbugs-fixes');
const preset = require('postcss-preset-env');

module.exports = {
  plugins: [
    imp,
    flex,
    preset({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }),
  ],
};
