import type { OxfmtConfig } from 'oxfmt'
import { globExclude } from '~/config/oxc-glob-exclude'

export const oxfmtConfig: OxfmtConfig = {
  ignorePatterns: globExclude,
  jsxSingleQuote: true,
  semi: false,
  singleQuote: true,
  sortImports: {
    newlinesBetween: false,
  },
  sortPackageJson: {
    sortScripts: true,
  },
}
