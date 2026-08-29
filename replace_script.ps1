$files = Get-ChildItem -Path . -Include *.html,*.css,*.js,*.md -Recurse
foreach ($f in $files) {
    $text = [IO.File]::ReadAllText($f.FullName)
    if ($text.Contains('Aharax')) {
        $newText = $text.Replace('Aharax', 'AharaX')
        $utf8NoBom = New-Object System.Text.UTF8Encoding $false
        [IO.File]::WriteAllText($f.FullName, $newText, $utf8NoBom)
        Write-Host "Updated $($f.FullName)"
    }
}
