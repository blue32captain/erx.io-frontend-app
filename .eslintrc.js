'use strict'

const baseConfigs = [
  'plugin:vue/essential',
  'standard',
  // 'ash-nazg/sauron',
  // 'plugin:import/errors',
  // 'plugin:import/warnings',
  // 'plugin:prettier/recommended'
  'plugin:vue/vue3-recommended',
]

const baseTSConfigs = [
  ...baseConfigs,
  'plugin:import/typescript',
  'plugin:@typescript-eslint/recommended',
]

const vueRules = {
  // Disabling as Vue linter won't catch (and we are requiring `name` anyways)
  'import/no-anonymous-default-export': 'off',
  // For prohibiting new lines, filed:
  // https://github.com/vuejs/eslint-plugin-vue/issues/1325

  // Temporarily disable
  'vue/no-boolean-default': 'off',
  'vue/no-mutating-props': 'off',
  'vue/require-default-prop': 'off',
  'vue/require-prop-types': 'off',

  'vue/no-unused-properties': [
    'error',
    {
      // 'data', 'methods'
      groups: ['props', 'computed', 'setup'],
    },
  ],
  // 'vue/no-bare-strings-in-template': ['error'], // Use later i18nizing
  // 'vue/no-static-inline-styles': ['error'], // Revisit later
  // 'vue/no-unregistered-components': ['error'],
  // 'vue/html-comment-indent': ['error'],
  // 'vue/no-duplicate-attr-inheritance': ['error'],

  // Disable
  'vue/attributes-order': 'off',
  'vue/max-attributes-per-line': 'off',

  'vue/component-name-in-template-casing': ['error', 'kebab-case'],
  'vue/html-comment-content-newline': ['error'],
  'vue/html-comment-content-spacing': ['error'],
  'vue/match-component-file-name': ['error', { shouldMatchCase: true }],
  // 'vue/no-boolean-default': ['error'],
  'vue/no-empty-component-block': ['error'],
  'vue/no-multiple-objects-in-class': ['error'],
  'vue/no-potential-component-option-typo': ['error', { presets: ['vue', 'vue-router'] }],
  'vue/no-reserved-component-names': ['error'],
  'vue/no-restricted-component-options': ['error', 'data', 'computed', 'methods', 'watch'],
  'vue/no-template-target-blank': ['error', { allowReferrer: true }],
  'vue/no-unsupported-features': ['error', { version: '^3.0.0' }],
  'vue/no-useless-mustaches': ['error'],
  'vue/no-useless-v-bind': ['error'],
  'vue/padding-line-between-blocks': ['error'],
  'vue/require-direct-export': ['error'],
  'vue/require-name-property': ['error'],
  'vue/v-for-delimiter-style': ['error'],
  'vue/v-on-function-call': ['error'],
  'vue/html-closing-bracket-newline': [
    'error',
    {
      singleline: 'never',
      multiline: 'never',
    },
  ],
  'vue/html-self-closing': [
    'error',
    {
      html: {
        void: 'always',
      },
    },
  ],
  'vue/multi-word-component-names': 'off',
}

const baseRules = {
  // Keep this here so can uncomment to check inline disabling
  // "eslint-comments/no-use": "error",

  // Reapply from ash-nazg
  semi: ['error', 'never'],
  quotes: ['error', 'single'],
  indent: ['error', 2, { SwitchCase: 1 }],
  curly: ['error'],
  'block-spacing': ['error'],
  'comma-spacing': ['error'],
  'comma-dangle': ['error', 'only-multiline'], // Interferes with arrow-parens
  'space-before-function-paren': ['error', 'never'],
  'eol-last': ['error'],
  'key-spacing': ['error'],
  'keyword-spacing': ['error'],
  'no-extra-semi': ['error'],
  'no-trailing-spaces': ['error'],
  'no-tabs': ['error'],
  'no-multi-spaces': ['error'],
  'nonblock-statement-body-position': ['error'],
  'object-curly-spacing': ['error', 'always'],
  'space-before-blocks': ['error'],
  'space-infix-ops': ['error'],
  'no-shadow': 'off',
  'no-implicit-globals': 'off',
  'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'export' }],
  // semi: ['error', 'never'],
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ImportNamespaceSpecifier',
      message:
        'As it is wasteful to use all named imports, use only those ' +
        'which are needed (or switch to a default import).',
    },
  ],

  // Disabling for now
  'max-len': 'off', // ['warn', { code: 80 }],
  'import/extensions': 'off',
  'jsdoc/require-jsdoc': 'off',
  'require-unicode-regexp': 'off',
  'prefer-named-capture-group': 'off',
  'import/order': 'off',
  'no-console': 'off', // TODO: reenable after dev period
  'unicorn/prefer-add-event-listener': 'off', // TODO: breaks a lot of stuff, figure out if needed at all
  'import/unambiguous': 'off',
  'no-use-before-define': 'off',
}

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true
  },
  extends: baseConfigs,
  globals: {
    __static: true,
    __windowUrls: true,
    __preloads: true,
    __workers: true,
    NodeJS: true
  },
  overrides: [
    {
      files: [
        '.eslintrc.js',
        'lint-staged.config.js',
        'babel.config.js',
      ],
      extends: baseConfigs,
      env: {
        node: true,
      },
      globals: {
        // Have to add these back due to config inheritance
        __dirname: true,
        module: true,
        require: true,
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'script',
      },
      rules: {
        ...baseRules,
        strict: ['error', 'global'],
        'import/no-commonjs': 'off',
      },
    },
    {
      files: '*.ts',
      extends: baseTSConfigs,
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      rules: {
        ...baseRules,
        // Reenable later
        'eslint-comments/require-description': 0,
        'eslint-comments/no-unused-disable': 0,

        // '@typescript-eslint/no-unsafe-assignment': ['error'],
        // '@typescript-eslint/no-unsafe-member-access': ['error'],
        // '@typescript-eslint/no-unsafe-return': ['error'],
        // '@typescript-eslint/naming-convention': ['error'],
        // Reenable later?
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-empty-interface': 0,
      },
    },
    {
      files: 'src/shims-vue.d.ts',
      extends: baseTSConfigs,
      rules: {
        ...baseRules,
        // No imports/exports in plain declaration file
        'import/unambiguous': 'off',
      },
    },
    {
      files: '*.vue',
      extends: baseConfigs,
      plugins: ['@pathscale/vue3'],
      rules: {
        ...baseRules,
        ...vueRules,
        // Reapply to better match prettier
        'arrow-parens': ['error', 'as-needed'],

        '@pathscale/vue3/v-directive': [
          'error',
          {
            unsafe: [
              // These just add a single operator
              // 'SpreadElement',
              // 'UnaryExpression',

              // This seems unavoidable
              // 'CallExpression',

              // To avoid these, one can use a call expression
              'AssignmentExpression',
              'BinaryExpression',
              'LogicalExpression',
              'ConditionalExpression',
              // This can have design features but preventing to avoid ugliness
              'TemplateLiteral[expressions.length <= 1]',
            ],
          },
        ],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    ...baseRules,
  },
  ignorePatterns: [
    'node_modules/**',
    'dist/**'
  ]
}
