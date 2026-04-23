import type { OxlintConfig } from 'oxlint'

export const oxlintConfig: OxlintConfig = {
  categories: {
    correctness: 'error',
    perf: 'warn',
    restriction: 'warn',
    style: 'warn',
    suspicious: 'warn',
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
  plugins: [
    'eslint',
    'typescript',
    'unicorn',
    'oxc',
    'import',
    'jsdoc',
    'jsx-a11y',
    'node',
    'promise',
    'vitest',
  ],
  rules: {
    'eslint/func-style': 'off',
    'eslint/sort-imports': 'off',
    'import/group-exports': 'off',
    'import/no-default-export': 'off',
    'import/no-named-export': 'off',
    'import/prefer-default-export': 'off',
    'typescript/ban-types': 'error',
  },
}
