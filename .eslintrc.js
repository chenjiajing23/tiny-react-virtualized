module.exports = {
  env: {
    browser: true,
    es2020: true,
    es6: true,
    node: true
  },
  extends: [
    "plugin:prettier/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true
    },
    ecmaVersion: 2020,
    extraFileExtensions: ['.ts', '.tsx']
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    },
  },
  rules: {
    semi: ['error', 'always'],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/class-name-casing': 'off',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'off',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/semi': ['off', null],
    '@typescript-eslint/space-within-parens': ['off', 'never'],
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'always',
        types: 'always',
        lib: 'always'
      }
    ],
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    'arrow-body-style': 'error',
    'arrow-parens': ['off', 'as-needed'],
    camelcase: 'off',
    'comma-dangle': 'off',
    complexity: 'off',
    'constructor-super': 'error',
    curly: 'error',
    'dot-notation': 'error',
    'eol-last': 'off',
    eqeqeq: ['error', 'always'],
    'guard-for-in': 'error',
    'id-blacklist': ['error', 'any', 'Number', 'number', 'string', 'Boolean', 'boolean'],
    'id-match': 'error',
    'import/order': 'off',
    'linebreak-style': 'off',
    'max-classes-per-file': 'off',
    'max-len': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': 'off',
    'no-debugger': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-extra-semi': 'off',
    'no-fallthrough': 'off',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': 'off',
    'no-new-wrappers': 'error',
    'no-shadow': [
      'off',
      {
        hoist: 'all'
      }
    ],
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'off',
    'no-undef-init': 'error',
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
        allowAfterThisConstructor: true
      }
    ],
    'no-unsafe-finally': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    'no-unused-labels': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-const': 'error',
    'quote-props': 'off',
    radix: 'error',
    'space-before-function-paren': 'off',
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'use-isnan': 'error',
    'valid-typeof': 'off',
    'react/jsx-no-target-blank': [
      'error',
      {
        enforceDynamicLinks: 'always'
      }
    ],
    'react/no-unused-state': 'error',
    'react/self-closing-comp': 'error',
    'react/boolean-prop-naming': ['error', { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],
    'react/no-direct-mutation-state': 'error',
    'react/no-multi-comp': [
      'error',
      {
        ignoreStateless: true
      }
    ],
    'react/no-this-in-sfc': 'error',
    'react/no-unsafe': [
      'error',
      {
        checkAliases: true
      }
    ],
    'react/state-in-constructor': 'off',
    'react/jsx-uses-vars': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        ignoreRefs: true,
        allowBind: true
      }
    ],
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-closing-tag-location': 'error',
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error', // ?????? Hook ?????????
    'react-hooks/exhaustive-deps': 'warn' // ?????? effect ?????????
  },
};
