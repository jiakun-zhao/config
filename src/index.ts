import { defu } from 'defu'
import type { OxfmtConfig } from 'oxfmt'
import type { OxlintConfig } from 'oxlint'
import { oxfmtConfig } from '~/config/oxfmt'
import { oxlintConfig } from '~/config/oxlint'

export function defineOxfmtConfig(config: OxfmtConfig = {}): OxfmtConfig {
  return defu(config, oxfmtConfig)
}

export function defineOxlintConfig(config: OxlintConfig = {}): OxlintConfig {
  return defu(config, oxlintConfig)
}
