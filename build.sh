#!/bin/bash
# This script is used for Vercel deployment

# Make sure public directory exists
mkdir -p public

# Check if public directory is empty
if [ -z "$(ls -A public 2>/dev/null)" ]; then
  echo "Public directory is empty. Copying docs content as fallback."
  # Copy docs content as fallback if public is empty
  cp -r docs/* public/ 2>/dev/null || echo "No docs content available"
  
  # Create a fallback index if needed
  if [ ! -f public/index.html ]; then
    cat > public/index.html << 'EOL'
<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <title>RemapperCZ</title>
    <style>
        body { font-family: sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        a { color: #3f51b5; }
    </style>
</head>
<body>
    <h1>RemapperCZ</h1>
    <p>Vítejte v dokumentaci projektu RemapperCZ.</p>
    <p>Pro zobrazení plně formátované dokumentace:</p>
    <ol>
        <li>Vygenerujte HTML lokálně pomocí MkDocs</li>
        <li>Nahrajte vygenerované soubory do adresáře public</li>
    </ol>
    <p><a href="https://github.com/Alexuspo/RemapperCZ">GitHub repozitář</a></p>
</body>
</html>
EOL
  fi
fi

echo "Build process completed."
