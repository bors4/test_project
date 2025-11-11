import globals from 'globals';
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import cucumberPlugin from 'eslint-plugin-cucumber';

export default [
  {
    ignores: ['node_modules/', 'dist/', 'build/', 'coverage/', '*.min.js', '*.bundle.js'],
  },

  js.configs.recommended,

  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/step-definitions/**/*.js',
            '**/features/**/*.js',
            '**/*.steps.js',
            '**/*.test.js',
            '**/wdio.conf*.js',
            '**/*.config.js',
            '**/allure.config.js',
            '**eslint*',
          ],
        },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'always',
          mjs: 'always',
        },
      ],
    },
  },

  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  {
    files: ['**/step-definitions/**/*.js', '**/features/**/*.feature'],
    plugins: {
      cucumber: cucumberPlugin,
    },
    rules: {},
  },

  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
        ...globals.webextensions,
        $: 'readonly',
        browser: 'readonly',
        driver: 'readonly',
        $$: 'readonly',
        expect: 'readonly',
        allure: 'readonly',
      },
    },
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'object-shorthand': 'error',
      'no-console': 'warn',
      'no-unused-vars': 'error',
      'prefer-template': 'error',
      'no-param-reassign': 'error',
      'class-methods-use-this': 'off',
      'prefer-destructuring': [
        'error',
        {
          array: true,
          object: true,
        },
      ],
      'prefer-arrow-callback': 'error',
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
  },

  {
    files: ['**/step-definitions/**/*.js'],
    rules: {
      'func-names': 'off',
      'prefer-arrow-callback': 'off',
      'no-console': 'off',
    },
  },

  {
    files: ['**/*.test.js', '**/*.spec.js'],
    rules: {
      'no-console': 'off',
      'max-len': ['error', {code: 120}],
    },
  },
];
