---
id: ch3-worked-promenne
type: spine
title: "Hádej číslo: hra očima proměnných"
readingTime: 2
standalone: true
teaser: "Program si myslí číslo a ty hádáš — my se přitom podíváme, co se po každém tipu děje v jeho krabičkách."
voice: universal
parent: null
diagram: null
core: false
recallQ: "K čemu slouží proměnná a co určuje datový typ?"
recallA: "Proměnná je pojmenovaná krabička, do které si program ukládá hodnotu a může ji měnit. Typ říká, co je uvnitř — číslo, text, pravda/nepravda — a co se s tím dá dělat."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
concept: ch3-promenne-a-datove-typy
state: edited
status: accepted
carriers: prose|table|code
---

Zahrajeme si „hádej číslo": program si myslí číslo od 1 do 20, ty tipuješ a on radí „výš" nebo „níž". Nás ale nezajímá výhra — chceme vidět, **co se přitom děje v proměnných**.

**1. Start hry: krabičky vznikají.** Program si připraví:

```python
jmeno = "Ela"        # text: kdo hraje
tajne_cislo = 13     # číslo: hráč ho nevidí
pocet_pokusu = 0     # číslo: zatím nikdo netipoval
uhodnuto = False     # pravda/nepravda: hra běží
```

Čtyři krabičky, tři typy: text, čísla a pravda/nepravda. Krabička `tip` zatím neexistuje — vznikne až s prvním tipem.

**2. První kolo.** Ela napíše 20. Pozor: z klávesnice přijde text `"20"`, program ho nejdřív převede na číslo — text s číslem porovnávat nejde. Pak `tip = 20` a `pocet_pokusu = pocet_pokusu + 1`: vezmi, co je v krabičce (0), přičti 1, ulož zpět. Porovnání `20 > 13` platí → hláška „níž".

**3. Druhé kolo.** Tip 10. Přiřazení `tip = 10` **přepíše** starou hodnotu — dvacítka je nenávratně pryč, krabička drží vždy jen poslední hodnotu. `pocet_pokusu` roste na 2. Protože `10 < 13`, program hlásí „výš".

**4. Třetí kolo.** Tip 13. `pocet_pokusu` je 3, porovnání `13 == 13` platí → `uhodnuto = True` a program vypíše „Elo, dala jsi to na 3 pokusy!" — text z `jmeno` slepený s číslem z `pocet_pokusu`.

**5. Stavy po kolech** — celá hra v jedné tabulce:

| Po kole | tajne_cislo | tip | pocet_pokusu | uhodnuto |
|---|---|---|---|---|
| start | 13 | — | 0 | False |
| 1 (tip 20) | 13 | 20 | 1 | False |
| 2 (tip 10) | 13 | 10 | 2 | False |
| 3 (tip 13) | 13 | 13 | 3 | True |

Všimni si rolí: `tajne_cislo` se nezměnilo ani jednou (krabička může hodnotu i jen držet), `tip` se pořád přepisuje, `pocet_pokusu` jen roste a `uhodnuto` se překlopí jedinkrát — a tím hru ukončí.

**Co sis odnesl:** Proměnná je pojmenovaná krabička; přiřazení do ní vloží novou hodnotu a stará zmizí. Typ určuje, co s hodnotou jde dělat — a texty z klávesnice musíš před počítáním převést na čísla.
