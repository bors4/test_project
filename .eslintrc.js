module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2021: true,
    webextensions: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  globals: {
    $: 'readonly',
    browser: 'readonly',
    driver: 'readonly',
    $$: 'readonly',
    expect: 'readonly',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'object-shorthand': 'error',
    'no-console': 'warn',
    'no-unused-vars': 'error',
    'prefer-template': 'error',
    'no-param-reassign': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
    ],
    'prefer-arrow-callback': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/step-definitions/**/*.js', '**/features/**/*.js', '**/*.steps.js', '**/*.test.js'],
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'padding-line-between-statements': [
      'error',
      {blankLine: 'always', prev: ['const', 'let'], next: ['block']},
      {blankLine: 'always', prev: ['block'], next: ['const', 'let']},
      {blankLine: 'always', prev: ['block'], next: ['*']},
      {blankLine: 'always', prev: ['*'], next: ['block']},
      {blankLine: 'always', prev: ['block-like'], next: ['*']},
      {blankLine: 'always', prev: ['*'], next: ['block-like']},
      {blankLine: 'always', prev: ['*'], next: ['return']},
    ],
  },
  overrides: [
    {
      files: ['**/step-definitions/**/*.js'],
      rules: {
        'func-names': 'off',
        'prefer-arrow-callback': 'off',
      },
    },
  ],
};
