# 1. Load the structure from JSON
$jsonFile = "project_structure.json"
if (!(Test-Path $jsonFile)) {
    Write-Error "Could not find $jsonFile. Please make sure it is in the same folder."
    return
}
$structure = Get-Content $jsonFile | ConvertFrom-Json

Write-Host "--- Building BahyWay Website Structure ---" -ForegroundColor Cyan

# 2. Create all directories
foreach ($dir in $structure.directories) {
    if (!(Test-Path $dir)) {
        New-Item -Path $dir -ItemType Directory -Force | Out-Null
        Write-Host "[DIR]  Created: $dir" -ForegroundColor Green
    }
}

# 3. Create all files
foreach ($file in $structure.files) {
    if (!(Test-Path $file)) {
        # Ensure the parent directory exists (just in case)
        $parent = Split-Path $file -Parent
        if ($parent -and !(Test-Path $parent)) {
            New-Item -Path $parent -ItemType Directory -Force | Out-Null
        }

        New-Item -Path $file -ItemType File -Force | Out-Null
        Write-Host "[FILE] Created: $file" -ForegroundColor Yellow
    }
}

Write-Host "`n--- Done! Your website skeleton is ready. ---" -ForegroundColor Cyan
