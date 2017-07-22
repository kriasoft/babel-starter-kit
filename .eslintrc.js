module.exports = {
  parser: 'babel-eslint',

  extends: [
    'airbnb-base',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
  ],

  plugins: ['flowtype', 'prettier', 'jest'],

  globals: {
    __DEV__: true,
  },

  env: {
    browser: true,
    'jest/globals': true,
  },

  rules: {
    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],

    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      {
        // https://github.com/prettier/prettier#options
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
