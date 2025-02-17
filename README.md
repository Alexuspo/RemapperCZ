# ReMapper CZ

ReMapper je TypeScript knihovna pro vytváření map pro Beat Saber. Poskytuje výkonné nástroje pro manipulaci s objekty, vytváření efektů a správu složitých mapovacích projektů.

## Obsah

- [Začínáme](./docs/zacatky.md)
- [Instalace](./docs/instalace.md)
- [Základní koncepty](./docs/zakladni-koncepty.md)
- [Pokročilé funkce](./docs/pokrocile-funkce.md)
- [API Reference](./docs/api-reference.md)

## Hlavní funkce

- Plná podpora TypeScriptu
- Intuitivní API pro manipulaci s objekty
- Pokročilé animační nástroje
- Optimalizovaný výkon
- Rozšířitelná architektura

## Rychlý start

```typescript
import { map } from "remapper";

map.setSettings({
    bpm: 120,
    noteJumpSpeed: 16
});

// Vytvoření základního objektu
const kostka = new CustomEvent(0).push();
```

## Podpora

Při problémech můžete:
1. Otevřít issue na GitHubu
2. Připojit se na [Discord server](https://discord.gg/rKduRNc)

## Licence

Tento projekt je licencován pod MIT licencí.
