module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js', 'postcss.config.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/indent': ['error', 2, {'SwitchCase': 1, 'ignoredNodes': ['PropertyDefinition']}],
    'semi': ['error', 'always'],
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'object-curly-spacing': ['error', 'never'],
    'react/jsx-max-props-per-line': [
      'error',
      {
          maximum: 2,
          when: 'always',
      },
  ]
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
