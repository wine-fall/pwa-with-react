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
    ],
    '@typescript-eslint/no-misused-promises': [2, {
      'checksVoidReturn': {
        'attributes': false
      }
    }],
    'eol-last': ['error', 'always'],
    'react/jsx-wrap-multilines': [
      'error',
      {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
      },
    ],
    'semi-spacing': ['error'],
    'keyword-spacing': ['error'],
    'comma-spacing': ['error'],
    'key-spacing': ['error', {beforeColon: false, afterColon: true}],
    'object-curly-spacing': ['error', 'never'],
    'arrow-spacing': ['error'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'switch-colon-spacing': ['error'],
    'space-before-function-paren': [
        'error',
        {anonymous: 'always', named: 'never'},
    ],
    'space-infix-ops': ['error'],
    'space-unary-ops': [
      2, {
          'words': true,
          'nonwords': false,
          'overrides': {
              'new': false,
          }
      }
    ]
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
