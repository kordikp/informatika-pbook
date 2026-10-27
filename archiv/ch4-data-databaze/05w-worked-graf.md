---
id: ch4-worked-graf
type: spine
title: "Pět odpovědí, jeden správný graf"
readingTime: 2
standalone: true
teaser: "Malá anketa o minutách na mobilu — a rozhodování, který graf řekne pravdu a který by jen vyprávěl smyšlený příběh."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Podle čeho vybereš typ grafu a co ohlídáš, aby graf nemátl?"
recallA: "Podle otázky: vývoj v čase → spojnicový, porovnání kategorií → sloupcový, podíly celku → koláčový. A vždy zkontroluj osy — kde začínají, jaké mají měřítko a zda jsou popsané."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
concept: ch4-vizualizace-a-volba-grafu
state: edited
status: accepted
carriers: prose|table
---

Udělal jsi ve třídě mini anketu: „Kolik minut denně strávíš na mobilu?" Pět odpovědí (smyšlených — je to cvičení) máš v tabulce:

| Kdo | Minut denně |
|---|---|
| Adam | 60 |
| Bára | 180 |
| Cyril | 45 |
| Dana | 120 |
| Eda | 240 |

**1. Polož si otázku, na kterou má graf odpovědět.** Tady: „Jak se pětice liší? Kdo tráví na mobilu nejvíc?" To je **porovnání kategorií** — každý člověk je jedna kategorie. Není to vývoj v čase (neměřil jsi Adama den po dni) ani podíl celku (Edových 240 minut není „dílek" ničeho společného).

**2. Vyber typ podle otázky.** Porovnání kategorií → **sloupcový graf**. Pět sloupců vedle sebe a výšky srovnáš jedním pohledem: Eda nejvíc, Cyril nejmíň — a Eda má víc než pětkrát tolik co Cyril.

**3. Popiš osy.** Vodorovná osa: jména (kategorie, jejich pořadí je jen na tobě). Svislá osa: „minuty na mobilu za den" a **začíná na nule** — u sloupců povinně, protože oko srovnává výšky. Dílky dej po 60 minutách, čtou se pak jako hodiny. A titulek: „Denní čas na mobilu, anketa 8.B".

**4. Mezivýsledek: kontrola poctivosti.** Osa od nuly? Ano. Jednotky a popisky? Ano. Vybral jsem si jen část odpovědí? Ne, všech pět. Graf je poctivý.

**5. A teď chybná volba: spojnicový graf.** Spoj těch pět bodů čarou a graf začne vyprávět: „od Adama k Báře to prudce roste, pak padá…" Jenže **mezi Adamem a Bárou nic neroste** — jsou to dva různí lidé, žádné „mezi" neexistuje. Čára naznačuje vývoj v čase, který se nekonal. Důkaz? Seřaď jména jinak, třeba podle abecedy odzadu, a „příběh" čáry se úplně změní, ačkoli data zůstala stejná. Graf, jehož vyznění závisí na náhodném pořadí jmen, mate.

**Co sis odnesl:** Typ grafu vybírá otázka, ne krása: čas → spojnicový, kategorie → sloupcový, podíly → koláčový. Osy vždy popsané a u sloupců od nuly. A čára mezi nesouvisejícími body vypráví příběh, který se nikdy nestal.
