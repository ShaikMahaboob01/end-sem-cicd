<#
Run full local pipeline:
  - Ensures pnpm is installed (calls setup.ps1)
  - Installs dependencies
  - Runs typecheck, tests, build
  - Optionally runs dev server if -Dev switch provided

Usage:
  .\scripts\run-all.ps1           # run setup, install, typecheck, test, build
  .\scripts\run-all.ps1 -Dev     # same as above, then run pnpm dev (keeps running)
#>

param(
    [switch]$Dev
)

Write-Host "Step 1: Ensure pnpm is installed"
.\n+\scripts\setup.ps1
if ($LASTEXITCODE -ne 0) {
    Write-Error "setup.ps1 failed. Fix pnpm installation first."; exit $LASTEXITCODE
}

Write-Host "Step 2: Install dependencies (pnpm install)"
pnpm install
if ($LASTEXITCODE -ne 0) { Write-Error "pnpm install failed"; exit $LASTEXITCODE }

Write-Host "Step 3: Typecheck"
pnpm typecheck
if ($LASTEXITCODE -ne 0) { Write-Error "typecheck failed"; exit $LASTEXITCODE }

Write-Host "Step 4: Run tests"
pnpm test
if ($LASTEXITCODE -ne 0) { Write-Error "tests failed"; exit $LASTEXITCODE }

Write-Host "Step 5: Build"
pnpm build
if ($LASTEXITCODE -ne 0) { Write-Error "build failed"; exit $LASTEXITCODE }

if ($Dev) {
    Write-Host "Step 6: Starting dev server (pnpm dev)"
    pnpm dev
}

Write-Host "All steps completed successfully"
