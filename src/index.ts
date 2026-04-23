import { defu } from 'defu'
import type { OxfmtConfig } from 'oxfmt'
import type { OxlintConfig } from 'oxlint'
import { oxfmtConfig } from '~/config/oxfmt'
import { oxlintConfig } from '~/config/oxlint'

export function defineOxfmtConfig(config: OxfmtConfig = {}): OxfmtConfig {
  return defu(oxfmtConfig, config)
}

export function defineOxlintConfig(config: OxlintConfig = {}): OxlintConfig {
  return defu(oxlintConfig, config)
}
