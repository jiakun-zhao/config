import { defineConfig } from 'tsdown'

export default defineConfig({
  copy: [
    { from: 'repos/github/awesome-copilot/skills/gh-cli/*', to: 'skills/gh-cli' },
    { from: 'repos/github/awesome-copilot/skills/git-commit/*', to: 'skills/git-commit' },
  ],
  entry: ['src/*.ts'],
})
