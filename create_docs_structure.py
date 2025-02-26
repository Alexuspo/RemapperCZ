import os
import yaml

# Načtení navigační struktury z mkdocs.yml
with open('mkdocs.yml', 'r', encoding='utf-8') as f:
    config = yaml.safe_load(f)

nav = config.get('nav', [])

# Vytvoření souborů a složek podle navigační struktury
def create_files_from_nav(items, base_dir='docs'):
    for item in items:
        if isinstance(item, dict):
            for title, content in item.items():
                if isinstance(content, list):
                    create_files_from_nav(content, base_dir)
                elif isinstance(content, str) and content.endswith('.md'):
                    # Vytvoření souboru
                    file_path = os.path.join(base_dir, content)
                    os.makedirs(os.path.dirname(file_path), exist_ok=True)
                    
                    if not os.path.exists(file_path):
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(f"# {title}\n\nObsah stránky pro {title}\n")
                        print(f"Vytvořen soubor: {file_path}")
                    else:
                        print(f"Soubor již existuje: {file_path}")

# Spuštění vytvoření struktury
create_files_from_nav(nav)
print("Struktura dokumentace byla vytvořena.")
