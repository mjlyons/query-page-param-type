const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'react-app',
    'prettier',
  ],
  env: {
    es6: true,
  },
  parserOptions: {
    project: './tsconfig.base.json',
    sourceType: 'module',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: true,
      typescript: {
        project: 'packages/*/tsconfig.json',
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
      },
    ],
    'no-shadow': 'error',
    'import/no-cycle': 'error',
    'import/no-unresolved': ['error', { ignore: ['^@tanstack/'] }],
    'import/no-unused-modules': ['off', { unusedExports: true }],
    'no-redeclare': 'off',
    'react-hooks/exhaustive-deps': 'error',
  },
}

module.exports = config
