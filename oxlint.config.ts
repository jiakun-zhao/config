import { defineOxlintConfig } from '@jiakun-zhao/config'

export default defineOxlintConfig({
  ignorePatterns: ['repos'],
  overrides: [
    {
      files: ['*'],
      rules: {
        'eslint/sort-keys': 'warn',
      },
    },
  ],
})
