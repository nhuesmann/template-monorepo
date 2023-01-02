const join = require('path').join;

module.exports = {
  extends: [
    join(__dirname, './shared/core.js'),
    join(__dirname, './shared/prettier.js'),
  ],
  plugins: ['node'],
  env: { node: true },
  rules: {
    'no-buffer-constructor': 'warn',
    'node/no-path-concat': 'warn',
  },
};
