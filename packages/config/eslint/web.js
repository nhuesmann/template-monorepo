const join = require('path').join;

module.exports = {
  extends: [
    join(__dirname, './shared/core.js'),
    join(__dirname, './shared/react.js'),
    join(__dirname, './shared/prettier.js'),
  ],
  env: { browser: true },
};
