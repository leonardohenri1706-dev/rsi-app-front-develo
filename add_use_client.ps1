$files = Get-ChildItem -Path "app/pages" -Recurse -Filter "index.tsx"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    if (-not $content.StartsWith('"use client";')) {
        $newContent = '"use client";' + "`n" + $content
        Set-Content -Path $file.FullName -Value $newContent
        Write-Host "Added 'use client' to $($file.FullName)"
    }
}
