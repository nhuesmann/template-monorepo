module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'turbo',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      ecmaFeatures: { impliedStrict: true, jsx: true },
    },
  },
  env: {
    es2022: true,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // ? Extra rules
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
  // globals: {
  //   console: false,
  //   exports: false,
  //   global: false,
  //   module: false,
  //   require: false,
  // },
};
