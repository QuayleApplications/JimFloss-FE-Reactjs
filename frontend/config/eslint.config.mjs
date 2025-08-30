// Flat config for ESLint v9+
import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-config-prettier'
import vitest from '@vitest/eslint-plugin' // <-- add if you keep the Vitest block

export default [
  // Ignore build output and deps
  { ignores: ['dist', 'build', 'coverage', 'node_modules'] },

  // Base JS rules
  js.configs.recommended,

  // TypeScript (no type-checking by default = fast)
  ...tseslint.configs.recommended,

  // React + Hooks (shared across JS/TS)
  {
    plugins: { react, 'react-hooks': reactHooks },
    settings: { react: { version: 'detect' } },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node }
    },
    rules: {
      // React 17+ new JSX transform
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Prefer TS unused-vars
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ]
    }
  },

  // Enable TYPE-AWARE TS rules (scoped to TS files only)
  {
    files: ['**/*.{ts,tsx}'],
    // Bring in the type-checked presets
    ...tseslint.configs.recommendedTypeChecked,
    // Optionally add stylistic type-checked rules:
    // ...tseslint.configs.stylisticTypeChecked,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        // If this file lives in ./config/, root is one dir up:
        tsconfigRootDir: new URL('..', import.meta.url)
      }
    },
    rules: {
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-misused-promises': 'error'
    }
  },

  // Vitest (tests only)
  {
    files: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
    plugins: { vitest },
    ...vitest.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.node,
        ...vitest.globals
      }
    }
  },

  // Prettier compatibility (turns off conflicting stylistic rules)
  prettier
]
