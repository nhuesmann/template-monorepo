module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['simple-import-sort', 'import'],
  rules: {
    // ? Needed for simple-import-sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
  },
};
