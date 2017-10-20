/* eslint-env node */

module.exports = {
  extends: ['last', 'plugin:react/all', 'prettier/react'],
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-no-literals': [0],
  },
};
