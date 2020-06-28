module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint-config-airbnb/whitespace',
    'prettier',
  ],
  plugins: ['prettier', 'jest'],
  rules: {
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'prettier/prettier': ['error'],
  },
  env: {
    'jest/globals': true,
    node: true,
  },
};
