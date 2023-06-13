const web = require('config/eslint/web');

module.exports = {
  ...web,
  extends: [...web.extends, 'next/core-web-vitals'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
};
