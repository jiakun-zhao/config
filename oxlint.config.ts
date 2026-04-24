import { defineOxlintConfig } from '@jiakun-zhao/config'

export default defineOxlintConfig({
  overrides: [
    {
      files: ['*'],
      rules: {
        'eslint/sort-keys': 'warn',
      },
    },
  ],
})
