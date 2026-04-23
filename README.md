# @jiakun-zhao/config

![NPM Version](https://img.shields.io/npm/v/@jiakun-zhao/config?labelColor=%23000&color=%23954)
![NPM Version](https://img.shields.io/npm/l/@jiakun-zhao/config?labelColor=%23000&color=%23954)

Shared config package that exports [oxlint](https://oxc.rs/docs/guide/usage/linter.html) rule presets and [oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) formatter config for downstream consumption.

## Install

```sh
npm i -D @jiakun-zhao/config oxfmt oxlint oxlint-tsgolint
```

## Usage

### oxfmt

Create `oxfmt.config.ts`:

```ts
import { defineOxfmtConfig } from '@jiakun-zhao/config'

export default defineOxfmtConfig()
```

Pass options to override defaults:

```ts
import { defineOxfmtConfig } from '@jiakun-zhao/config'

export default defineOxfmtConfig({ semi: true })
```

### oxlint

Create `oxlint.config.ts`:

```ts
import { defineOxlintConfig } from '@jiakun-zhao/config'

export default defineOxlintConfig()
```

Pass options to override defaults:

```ts
import { defineOxlintConfig } from '@jiakun-zhao/config'

export default defineOxlintConfig({
  rules: { 'typescript/ban-types': 'off' },
})
```

## Default config

### oxfmt

| Option                        | Default |
| ----------------------------- | ------- |
| `jsxSingleQuote`              | `true`  |
| `semi`                        | `false` |
| `singleQuote`                 | `true`  |
| `sortImports.newlinesBetween` | `false` |
| `sortPackageJson.sortScripts` | `true`  |

### oxlint

**Categories** (all set to `error`): correctness, perf, restriction, style, suspicious

**Plugins**: eslint, typescript, unicorn, oxc, import, jsdoc, jsx-a11y, node, promise, vitest

**Options**: `typeAware: true`, `typeCheck: true`

**Rules**:

| Rule                           | Severity |
| ------------------------------ | -------- |
| `eslint/func-style`            | off      |
| `eslint/sort-imports`          | off      |
| `import/group-exports`         | off      |
| `import/no-default-export`     | off      |
| `import/no-named-export`       | off      |
| `import/prefer-default-export` | off      |
| `typescript/ban-types`         | error    |
| `unicorn/prefer-node-protocol` | error    |

## License

MIT
