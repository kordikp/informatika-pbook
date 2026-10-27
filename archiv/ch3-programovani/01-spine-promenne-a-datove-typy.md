---
id: ch3-promenne-a-datove-typy
type: spine
title: "Proměnné a datové typy"
readingTime: 3
standalone: true
teaser: "Skóre, počet životů, jméno hráče — každá hra si pamatuje tucty věcí. Kam si je ukládá?"
voice: universal
parent: null
diagram: promenne-krabicky
core: true
recallQ: "K čemu slouží proměnná a co určuje datový typ?"
recallA: "Proměnná je pojmenovaná krabička, do které si program ukládá hodnotu (třeba skore = 0) a může ji měnit. Typ říká, co je uvnitř — číslo, text, nebo pravda/nepravda — a co se s tím dá dělat."
highlights:
  - "Proměnná je pojmenovaná krabička, do které si program ukládá hodnotu."
  - "Datový typ říká, co je uvnitř — a co se s tím dá dělat"
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch3-promenne-a-datove-typy
state: core
carriers: prose|table|diagram|code
---

Hraješ hru a nahoře svítí: skóre 1 250, životy 3, jméno „Kuba". Zavřeš appku, otevřeš — a hra to pořád ví. Kde to celou dobu bylo? V proměnných.

**Proměnná je pojmenovaná krabička, do které si program ukládá hodnotu.** Krabička má jméno (`skore`), uvnitř leží hodnota (`1250`) — a jak název napovídá, hodnota se může měnit. Sebereš minci? Program provede `skore = skore + 10`: vezme, co je v krabičce, přičte deset a výsledek uloží zpátky.

```python
skore = 0        # vytvořím krabičku a dám do ní nulu
skore = skore + 10   # sebral jsem minci
zivoty = 3
jmeno = "Kuba"
hraje = True     # pravda/nepravda: hra běží
```

Všimni si, že v krabičkách neleží totéž. **Datový typ říká, co je uvnitř — a co se s tím dá dělat:**

| Typ | Příklad | Co s ním jde |
|---|---|---|
| číslo | `1250`, `3.5` | sčítat, porovnávat |
| text (řetězec) | `"Kuba"` | spojovat, vypisovat |
| pravda/nepravda | `True`, `False` | rozhodovat v podmínkách |

Proč na typu záleží? Protože `10 + 10` je `20`, ale `"10" + "10"` (dva texty) je `"1010"` — počítač texty nepočítá, ale lepí za sebe. Půlka záhadných chyb začátečníků je přesně tohle: číslo omylem uložené jako text.

Jména proměnných si volíš sám — a stojí za to volit srozumitelně. `pocet_zivotu` ti za týden řekne všechno, `x` nic. Kód totiž čteš mnohem častěji, než ho píšeš.

**Zkus to!** Vymysli, jaké proměnné by potřebovala jednoduchá hra „hádej číslo": co si musí program pamatovat? (Minimálně: tajné číslo, poslední tip hráče, počet pokusů. Jakého typu je každá z nich?)

> **Věděl/a jsi?** I obří hry stojí na týchž krabičkách. Minecraft si v proměnných drží polohu hráče, obsah inventáře i denní dobu ve světě — jen jich má miliony najednou.

Krabičky máš. Teď program naučíme rozhodovat se podle toho, co v nich je — přichází `if` a `else`.
