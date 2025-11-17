<#
Simple bootstrap script for Windows PowerShell to enable Corepack, prepare pnpm and install dependencies.
Run: .\scripts\setup.ps1
#>

Write-Host "Enabling Corepack and preparing pnpm..."
corepack enable
corepack prepare pnpm@latest --activate

Write-Host "Installing dependencies with pnpm..."
pnpm install

Write-Host "Done. You can now run 'pnpm dev' or 'pnpm build'"
