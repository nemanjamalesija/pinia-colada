// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      // line split
      '**/*.ts.timestamp*',
      'nuxt',
    ],
    rules: {
      'symbol-description': 'off',
      'node/prefer-global/process': 'off',
      'no-control-regex': 'off',
      'curly': ['error', 'multi-line'],
      'antfu/if-newline': 'off',
      'style/brace-style': ['error', '1tbs'],
      'antfu/top-level-function': 'off',
      'test/prefer-lowercase-title': 'off',
      'style/yield-star-spacing': ['error', 'before'],
      'style/arrow-parens': ['error', 'always'],
      'no-console': 'warn',
      'style/indent': 'off',
      'style/indent-binary-ops': 'off',
      'ts/no-use-before-define': 'off',
      'perfectionist/sort-imports': 'off',
      'perfectionist/sort-named-imports': 'off',
      'perfectionist/sort-exports': 'off',
      'unused-imports/no-unused-imports': 'warn',
      // NOTE: initially came from 'eslint-plugin-import-newlines' but the indent is off
      // since I preffer the one added by prettier
      //  'import-newlines/enforce': [
      //   'error',
      //   {
      //     'max-len': 100,
      //     'items': 3,
      //   },
      // ],
    },
  },
  {
    files: ['playground/**/*'],
    rules: {
      'no-console': 'off',
      'vue/require-v-for-key': 'off',
    },
  },
  {
    files: ['docs/**/*', '!docs/.vitepress/**/*'],
    rules: {
      'import/order': ['off'],
      'unused-imports/no-unused-imports': 'off',
      'no-console': 'off',
      'node/handle-callback-err': 'off',
    },
  },
  {
    files: ['**/*.spec.ts'],
    rules: {
      'unicorn/consistent-function-scoping': 'off',
    },
  },
  {
    files: ['.github/workflows/**/*.yml'],
    rules: {
      'yaml/plain-scalar': 'off',
    },
  },
)
