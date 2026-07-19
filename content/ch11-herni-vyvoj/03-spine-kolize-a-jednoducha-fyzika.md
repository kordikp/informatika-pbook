---
id: ch11-kolize-a-jednoducha-fyzika
type: spine
title: "Kolize a jednoduchá fyzika"
readingTime: 3
standalone: true
teaser: "Jak hra pozná, že jsi sebral minci? Nepozná „dotyk“ — počítá překrývání obdélníků."
voice: universal
parent: null
diagram: null
core: true
recallQ: "Co je kolize a jaké tři prvky tvoří jednoduchou herní fyziku?"
recallA: "Kolize je detekce dotyku dvou objektů (typicky překryv jejich obrysů) a reakce na něj. Základní fyziku tvoří rychlost (posun za snímek), gravitace (rychlost dolů stále roste) a odraz (obrácení směru)."
highlights:
  - "jak hra pozná, že se dvě věci dotkly?"
  - "Kolize je zjištění, že se dva objekty dotýkají, a reakce na to."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch11-kolize-a-jednoducha-fyzika
state: core
carriers: prose
---

Mario sebere houbu. Míček se odrazí od pálky. Postava nespadne skrz podlahu. Tři různé situace, jedna společná otázka: **jak hra pozná, že se dvě věci dotkly?** Oči nemá — má souřadnice.

**Kolize je zjištění, že se dva objekty dotýkají, a reakce na to.** Uvnitř to bývá překvapivě prosté: kolem každého objektu si hra myslí neviditelný obdélník (nebo kruh) a v každém průchodu smyčky kontroluje: **překrývají se?** Překryv = kolize. Ve Scratchi to je blok „dotýká se…?", v enginech hotové funkce — princip je vždycky překrývání tvarů. A pak přijde reakce podle pravidla, které napíšeš ty: *hráč × mince → mince zmizí, skóre +1. Hráč × zeď → zastav se. Střela × nepřítel → oba pryč.* Poznáváš vzorec? Kolize je **vstup, podmínka a akce** z minulé sekce — jen vstup nepřišel od hráče, ale ze světa hry.

Druhá půlka akce je **jednoduchá fyzika** — tři přísady, se kterými vystačíš na většinu her:

- **Rychlost:** o kolik se objekt posune každý snímek. `x = x + rychlost` — plynulý pohyb je jen opakované přičítání.
- **Gravitace:** rychlost dolů, která pořád roste: `rychlost_y = rychlost_y + 1` každý snímek. Proto pád zrychluje a skok vypadá přirozeně: nahoru rychle, zpomalení, pád.
- **Odraz:** při nárazu obrať směr: `rychlost_x = -rychlost_x`. Celý Pong je tahle jedna mínuska.

Skok v plošinovce = všechno dohromady: stisk (vstup) nastaví rychlost nahoru, gravitace ji každý snímek užírá, kolize s podlahou pád zastaví.

A když se to rozbije? Rozliš dvě příčiny, přesně jak chce kritérium téhle sekce: **selhala detekce** (obdélník je větší než obrázek → „dotyk na dálku"; objekt letí tak rychle, že zeď mezi dvěma snímky přeskočí), **nebo pravidlo pohybu** (gravitace se přičítá i na zemi → postava se „zavrtává"). První hledáš v podmínce kolize, druhé v přepočtu rychlostí.

**Zkus to!** Přidej do své hry z minulé sekce odraz: míček, který se od okrajů odráží obrácením rychlosti. Pak schválně zdvojnásob jeho rychlost — začne okraje přeskakovat? Právě jsi vyrobil (a pochopil) nejslavnější bug herní fyziky.

> **Věděl/a jsi?** I velké hry počítají kolize se zjednodušenými tvary — postava je uvnitř pár obdélníků a kapslí, ne přesný obrys. Speedrunneři chyby v kolizích milují: proskočení zdí bývá jen kolize, kterou smyčka nestihla.

Hra se hýbe, naráží a počítá. Teď to nejtěžší a nejzajímavější: jak z fungující hry udělat hru, kterou nechceš pustit z ruky. Herní design.
