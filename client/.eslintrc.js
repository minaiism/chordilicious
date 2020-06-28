module.exports = {
  extends: ['../eslint-config-chordilicious', 'prettier/react'],
  plugins: ['react'],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'no-underscore-dangle': 'off',
    'prettier/prettier': ['error'],
  },
  env: {
    browser: true,
  },
};
