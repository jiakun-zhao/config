import type { OxfmtConfig } from 'oxfmt'

export const oxfmtConfig: OxfmtConfig = {
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
