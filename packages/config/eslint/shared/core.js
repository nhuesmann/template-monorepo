module.exports = {
  root: true,
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
    es2021: true,
    // ! Had to add this to avoid weird eslint bugs
    node: true,
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
    '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  // globals: {
  //   console: false,
  //   exports: false,
  //   global: false,
  //   module: false,
  //   require: false,
  // },
};
