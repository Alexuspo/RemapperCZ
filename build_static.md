# Jak vytvořit statické stránky pomocí MkDocs

Vzhledem k tomu, že Vercel nepodporuje Python v své běžné konfiguraci pro build, používáme předem vytvořené statické HTML soubory.

## Lokální build

Pro vytvoření aktualizovaných HTML souborů:

1. Nainstalujte Python 3.x
2. Nainstalujte potřebné balíčky: `pip install -r requirements.txt`
3. Spusťte build: `mkdocs build`
4. Zkopírujte obsah adresáře `site` do adresáře `public`
5. Commitněte a pushněte změny

## Online editor

Alternativně můžete upravit HTML soubory přímo v adresáři `public`.
