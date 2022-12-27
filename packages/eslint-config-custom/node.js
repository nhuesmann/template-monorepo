// ! NOTE: This project is highly influenced by eslint-config-universe

module.exports = {
  extends: ['./shared/core.js', './shared/prettier.js'],
  plugins: ['node'],
  env: { node: true },
  rules: {
    'no-buffer-constructor': 'warn',
    'node/no-path-concat': 'warn',
  },
};
