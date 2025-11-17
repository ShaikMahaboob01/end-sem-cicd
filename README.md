# end-sem-cicd

This repository is a full-stack React + Express starter. CI is configured to run TypeScript typecheck, tests and build using pnpm.

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
