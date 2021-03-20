module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jest',
    'simple-import-sort'
  ],
  rules: {
    'react/self-closing-comp': ['error', {
      component: true,
      html: true
    }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'arrow-body-style': ['error', 'as-needed']
  }
}
