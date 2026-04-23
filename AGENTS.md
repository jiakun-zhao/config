# AGENTS.md

## What this is

`@jiakun-zhao/config` — a shared config package that exports oxlint rule presets and oxfmt formatter config for downstream consumption. Not an application.

## Commands

- `pnpm build` — tsdown (bundles `src/index.ts` → `dist/`)
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

## Key conventions

- ESM only (`"type": "module"`)
- TypeScript strict mode with `bundler` module resolution
- Path alias: `~/*` → `./src/*`
- `oxfmt`, `oxlint`, `oxlint-tsgolint` are listed as both dev, peer, and optional dependencies — consumers are expected to provide their own versions
