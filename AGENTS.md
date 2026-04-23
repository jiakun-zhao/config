# AGENTS.md

## What this is

`@jiakun-zhao/config` — a shared config package that exports oxlint rule presets and oxfmt formatter config for downstream consumption. Not an application.

## Commands

- `pnpm build` — tsdown (bundles `src/*.ts` → `dist/`)
- `pnpm test` — vitest (no config file, uses defaults)
- `pnpm dev` — `tsx src/index.ts`
- Release: `pnpm run release` → bumpp + publish + cnpm sync

## Lint & format

Two linters run in parallel:

- **oxlint** — `.oxlintrc.json` (plugins: typescript, import, unicorn). Also consumes the exported rule sets from `src/oxlint/`.
- **eslint** — `eslint.config.mjs` via `@jiakun-zhao/eslint-config`
- **oxfmt** — formatter config exported from `src/index.ts`

## Architecture

- `src/index.ts` — exports `oxfmt` config object
- `src/oxlint/*.ts` — exports typed oxlint rule config objects (one per plugin: import, typescript, unicorn)
- `src/oxlint/*.rules.json` — static data listing all available oxlint rules per plugin (used as reference/catalog, not consumed at runtime)
- `tsdown.config.ts` — entry glob `src/*.ts` means each top-level `.ts` file in `src/` becomes a separate build entry

## Key conventions

- ESM only (`"type": "module"`)
- TypeScript strict mode with `bundler` module resolution
- Path alias: `~/*` → `./src/*`
- `oxfmt`, `oxlint`, `oxlint-tsgolint` are listed as both dev, peer, and optional dependencies — consumers are expected to provide their own versions
