# RemapperCZ

Dokumentace k projektu RemapperCZ.

## Lokální vývoj

Pro lokální vývoj dokumentace:

1. Nainstalujte Python 3.x a pip
2. Nainstalujte závislosti: `pip install -r requirements.txt`
3. Spusťte lokální server: `mkdocs serve`
4. Navštivte http://localhost:8000

## Deployment na Vercel

Kvůli omezení Vercel s Python, používáme statické HTML soubory:

1. Vygenerujte HTML lokálně: `mkdocs build`
2. Zkopírujte obsah složky `site` do složky `public`
3. Commitněte a pushněte změny do GitHubu
4. Vercel automaticky nasadí novou verzi

## Struktura projektu

- `docs/` - Markdown soubory dokumentace
- `public/` - Vygenerované HTML soubory pro nasazení
- `mkdocs.yml` - Konfigurace MkDocs
- `requirements.txt` - Python závislosti pro lokální vývoj
