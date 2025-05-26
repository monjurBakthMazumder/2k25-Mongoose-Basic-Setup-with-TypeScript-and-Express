import globals from 'globals';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    // Apply to JavaScript and TypeScript files
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],

    // Use the recommended ESLint JavaScript rules
    extends: ['eslint:recommended'],

    // Specify the environment globals, here enabling browser globals
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },

    plugins: {
      '@typescript-eslint': tsPlugin,
    },

    // Recommended TypeScript ESLint config for better TS linting
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],

    rules: {
      'no-unused-vars': 'off', // Disabled in favor of TS plugin rule below
      '@typescript-eslint/no-unused-vars': ['error'],

      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-undefined': 'error',
    },

    globals: {
      process: 'readonly',
    },

    ignores: ['node_modules/**', 'dist/**'],
  },
]);
