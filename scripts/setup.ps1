
<#
Robust bootstrap script for Windows PowerShell to ensure `pnpm` is available.

Behavior:
- If `pnpm` is already available, exits successfully.
- Tries to install/activate via Corepack.
- If Corepack fails (non-elevated), falls back to installing `pnpm` via `npm` into the user's prefix.

Usage: Run in PowerShell (recommended to run as Administrator for the Corepack path to work):
  .\scripts\setup.ps1

This script does NOT run `pnpm install` by default; it only ensures `pnpm` is installed. After success run `pnpm install` in the repo root.
#>

function Test-HasPnpm {
	return (Get-Command pnpm -ErrorAction SilentlyContinue) -ne $null
}

if (Test-HasPnpm) {
	try {
		$v = pnpm -v 2>$null
	} catch {
		$v = "unknown"
	}
	Write-Host "pnpm already available: $v"
	exit 0
}

Write-Host "Attempting to enable Corepack and prepare pnpm..."
try {
	corepack enable
	corepack prepare pnpm@latest --activate
} catch {
	Write-Warning "corepack prepare failed: $_"
}

if (Test-HasPnpm) {
	Write-Host "pnpm installed via Corepack: $(pnpm -v)"
	exit 0
}

Write-Host "Corepack did not provide pnpm. Installing pnpm via npm into user prefix..."

try {
	npm config set prefix "$env:USERPROFILE\npm" | Out-Null
	$sessionBin = "$env:USERPROFILE\npm"
	# add to PATH for this session so `npm -g` installs are immediately available
	if ($env:Path -notlike "*$sessionBin*") {
		$env:Path = "$sessionBin;" + $env:Path
	}
	npm install -g pnpm
} catch {
	Write-Warning "npm-based pnpm install failed: $_"
}

if (Test-HasPnpm) {
	Write-Host "pnpm installed via npm: $(pnpm -v)"
	exit 0
}

Write-Error "Unable to install pnpm automatically.
Try one of the following:
  1) Run PowerShell as Administrator and run: corepack enable; corepack prepare pnpm@latest --activate
  2) Install pnpm via npm (non-admin): npm config set prefix %USERPROFILE%\npm; npm install -g pnpm; then add %USERPROFILE%\npm to PATH
  3) Install pnpm using a package manager (scoop/choco)
If you want, paste the full error output here and I'll help.
"
exit 1
