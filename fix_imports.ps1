$files = Get-ChildItem -Path "app/[lang]" -Recurse -Filter "page.tsx"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $newContent = $content -replace 'from ".*pages/.*"', 'from "../../../pages"'
    if ($content -ne $newContent) {
        Set-Content -Path $file.FullName -Value $newContent
        Write-Host "Updated $($file.Name)"
    }
}
