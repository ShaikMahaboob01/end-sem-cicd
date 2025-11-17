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
.\scripts\setup.ps1
if ($LASTEXITCODE -ne 0) {
  Write-Error "setup.ps1 failed. Fix pnpm installation first."; exit $LASTEXITCODE
}
Write-Host "Step 2: Prepare pnpm command (fallback to 'npm exec -- pnpm' if pnpm not in PATH)"
$pnpmAvailable = (Get-Command pnpm -ErrorAction SilentlyContinue) -ne $null
function Run-Pnpm {
  param([Parameter(Mandatory=$true)][string[]]$Args)
  if ($pnpmAvailable) {
    & pnpm @Args
  } else {
    # Use npm exec to run pnpm without global install
    & npm exec -- pnpm @Args
  }
  return $LASTEXITCODE
}

Write-Host "Step 3: Install dependencies"
if ((Run-Pnpm -Args @('install')) -ne 0) { Write-Error "pnpm install failed"; exit 1 }

Write-Host "Step 4: Typecheck"
if ((Run-Pnpm -Args @('typecheck')) -ne 0) { Write-Error "typecheck failed"; exit 1 }

Write-Host "Step 5: Run tests"
if ((Run-Pnpm -Args @('test')) -ne 0) { Write-Error "tests failed"; exit 1 }

Write-Host "Step 6: Build"
if ((Run-Pnpm -Args @('build')) -ne 0) { Write-Error "build failed"; exit 1 }

if ($Dev) {
  Write-Host "Step 7: Starting dev server (pnpm dev)"
  # Start dev server; this will block until terminated
  if ((Run-Pnpm -Args @('dev')) -ne 0) { Write-Error "pnpm dev failed"; exit 1 }
}

Write-Host "All steps completed successfully"
