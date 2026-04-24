# AGENTS.md

## What this is

`@jiakun-zhao/config` — a shared config package that exports oxlint rule presets and oxfmt formatter config for downstream consumption. Not an application.

## Commands

- `pnpm clone` — initialize and fetch git submodules
- `pnpm build` — `pnpm clone` + tsdown (bundles `src/index.ts` → `dist/`, copies skills from submodules → `skills/`)
- `pnpm fmt` / `pnpm fmt:fix` — oxfmt format check / fix
- `pnpm lint` / `pnpm lint:fix` — oxlint check / fix
- Release: `pnpm run release` → bumpp + publish + cnpm sync

## Lint & format

- **oxlint** — `oxlint.config.ts` (plugins: eslint, typescript, unicorn, oxc, import, jsdoc, jsx-a11y, node, promise, vitest). Uses `defineOxlintConfig()` exported from `src/index.ts`.
- **oxfmt** — `oxfmt.config.ts`. Uses `defineOxfmtConfig()` exported from `src/index.ts`.

## Architecture

- `src/index.ts` — exports `defineOxfmtConfig()` and `defineOxlintConfig()` helper functions
- `src/config/oxfmt.ts` — default oxfmt config object
- `src/config/oxlint.ts` — default oxlint config object
- `tsdown.config.ts` — entry `src/index.ts` → single build output
- `repos/<owner>/<repo>/` — git submodules (upstream data sources)
- `skills/<name>/` — skill files, copied from submodules via tsdown `copy` (tracked in git)

## Key conventions

- ESM only (`"type": "module"`)
- TypeScript strict mode with `bundler` module resolution
- Path alias: `~/*` → `./src/*`
- `oxfmt`, `oxlint`, `oxlint-tsgolint` are listed as both dev, peer, and optional dependencies — consumers are expected to provide their own versions
