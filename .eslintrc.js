/* eslint-env node */

module.exports = {
  extends: [
    'last',
    'plugin:react/all',
    'prettier/react',
    'plugin:jest/recommended',
  ],
  plugins: ['react', 'jest'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-no-literals': [0],
  },
};
