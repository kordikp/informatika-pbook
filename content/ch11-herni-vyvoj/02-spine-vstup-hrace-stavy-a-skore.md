---
id: ch11-vstup-hrace-stavy-a-skore
type: spine
title: "Vstup hráče, stavy a skóre"
readingTime: 3
standalone: true
teaser: "Scéna s objekty ještě není hra. Hra začíná, když si pamatuje, jak si vedeš."
voice: universal
parent: null
diagram: null
core: true
recallQ: "Co dělá ze scény skutečnou hru?"
recallA: "Reakce na vstup hráče (klávesy, dotyk) a paměť: proměnné pro skóre a životy a stav hry (menu, hraje se, konec). Větvení podle stavu rozhoduje, co se právě děje a kdy hra končí."
highlights:
  - "smyčka čte vstup → podmínky podle stavu mění proměnné → proměnné rozhodují o stavu → scéna se vykreslí."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch11-vstup-hrace-stavy-a-skore
state: core
carriers: prose
---

Postava se hýbe po scéně — hezké, ale ještě to není hra. Chybí dvě věci: aby poslouchala **tebe** a aby hra **věděla, jak si vedeš**. Obojí už vlastně umíš z dřívějších kapitol; teď to jen složíme dohromady.

**Vstup hráče** jsou události, které smyčka čte v první fázi: stisknutá klávesa, klepnutí, naklonění telefonu. Ve Scratchi je to blok „když je stisknuta klávesa", v enginech podobné. Pravidla reakce jsou obyčejné podmínky: *když šipka vpravo → zvětši x. Když mezerník a postava stojí na zemi → skoč.*

**Paměť hry** jsou proměnné — a dvě z nich zná každý hráč na světě:

- **Skóre:** `skore = skore + 10` při sebrání mince. (Tohle přičítání jsi poprvé viděl v kapitole o proměnných — tady je jeho domov.)
- **Životy:** `zivoty = zivoty - 1` při nárazu. A hned za tím větvení: *když životy = 0 → konec hry.*

A třetí ingredience, která dělá z kódu skutečnou hru: **stav hry.** Hra není pořád „ve hře" — je v menu, hraje se, je pauza, je konec. Zní povědomě? Jsou to **stavy z logiky aplikací** (kapitola 9): stejný stisk mezerníku znamená v menu „start", ve hře „skok" a na obrazovce konce „hrát znovu". Program se větví podle stavu — a přechody mezi stavy (menu → hraje → konec → menu) jsou kostra celé hry.

Když tyhle tři věci propojíš, vzniká kompletní vzorec: **smyčka čte vstup → podmínky podle stavu mění proměnné → proměnné rozhodují o stavu → scéna se vykreslí.** Každá hra od Ping-Pongu po Fortnite je tenhle vzorec, jen s víc proměnnými.

A protože propojení = místa, kde se dá udělat chyba, dostáváš i ladicí superschopnost: hra se chová divně? Ptej se jako u aplikací — *jaký byl stav? co přišlo za vstup? která proměnná se (ne)změnila?* Skóre naskakuje dvakrát? Nejspíš se pravidlo vyhodnotí ve smyčce vícekrát, než mince zmizí ze scény. Klasika, kterou potkal každý tvůrce her.

**Zkus to!** Postav ve Scratchi (nebo v čemkoli) miniházení: objekt padá, hráč ho chytá, +1 bod za chycení, −1 život za minutí, 3 minutí = konec. Máš vstup, dvě proměnné, větvení i stavy — kompletní hru v jedné obrazovce.

> **Věděl/a jsi?** Ukládání pozice ve starých hrách nebylo nic jiného než zapsání všech důležitých proměnných (kam ses dostal, co máš v inventáři). „Save" je dodnes jen snímek stavu hry — proměnné na disk a zpátky.

Hráč hraje, hra počítá. Jenže zatím nic do ničeho nenaráží — a bez nárazů není akce. Další sekce: kolize a fyzika.
