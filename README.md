# end-sem-cicd

[![CI](https://github.com/ShaikMahaboob01/end-sem-cicd/workflows/CI/badge.svg)](https://github.com/ShaikMahaboob01/end-sem-cicd/actions?query=workflow%3ACI)
[![Deploy](https://github.com/ShaikMahaboob01/end-sem-cicd/workflows/Build%20and%20Deploy%20HMS%20Frontend/badge.svg)](https://github.com/ShaikMahaboob01/end-sem-cicd/actions?query=workflow%3A%22Build+and+Deploy+HMS+Frontend%22)

This repository is a full-stack React + Express starter. CI is configured to run TypeScript typecheck, tests and build using pnpm.

Live demo (GitHub Pages): https://ShaikMahaboob01.github.io/end-sem-cicd/

Quick setup (Windows PowerShell)

1. Enable Corepack and install pnpm (PowerShell):

```powershell
corepack enable
corepack prepare pnpm@latest --activate
```

2. Install dependencies and run the project:

```powershell
pnpm install
pnpm dev   # start dev server (Vite + Express)
# or to build:
pnpm build
```

Run tests

```powershell
pnpm test
pnpm typecheck
```

If you run into issues on Windows, run `.\	ools\setup.ps1` to ensure pnpm is activated and dependencies are installed.

CI

A GitHub Actions workflow (`.github/workflows/ci.yml`) runs on push and PRs to `main` and performs the same checks.
