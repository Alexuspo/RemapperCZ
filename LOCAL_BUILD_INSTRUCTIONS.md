# Návod na lokální build a nasazení

Pro správné zobrazení dokumentace s vizuálním stylem je potřeba provést build lokálně a nahrát vygenerované HTML soubory.

## Lokální build a příprava souborů pro nasazení

1. **Nainstalujte Python 3.x**
   - Stáhněte a nainstalujte z [python.org](https://www.python.org/downloads/)

2. **Nainstalujte potřebné balíčky**
   ```bash
   pip install -r requirements.txt
   ```

3. **Vygenerujte statické HTML soubory**
   ```bash
   mkdocs build
   ```
   - To vytvoří adresář `site` s kompletním HTML, CSS a JS

4. **Zkopírujte vygenerované soubory do `public` adresáře**
   ```bash
   # Na Windows
   xcopy /E /I /Y site\* public\

   # Na macOS nebo Linux
   cp -r site/* public/
   ```

5. **Commitněte a pushněte změny do GitHubu**
   ```bash
   git add .
   git commit -m "Aktualizace vygenerovaných HTML souborů"
   git push
   ```

6. **Vercel automaticky nasadí novou verzi**

## Workflow pro úpravy

1. Upravte Markdown soubory v adresáři `docs/`
2. Pro náhled spusťte: `mkdocs serve` a otevřete http://localhost:8000
3. Po dokončení úprav proveďte build: `mkdocs build`
4. Zkopírujte soubory z `site` do `public`
5. Commitněte a pushněte změny

## Tipy

- Adresář `site` je v .gitignore, necommituje se
- Do GitHubu se nahrávají pouze zdrojové Markdown soubory (`docs/`) a vygenerované HTML soubory (`public/`)
- Pokud chcete využít všechny možnosti MkDocs Material theme, podívejte se na [oficiální dokumentaci](https://squidfunk.github.io/mkdocs-material/)
