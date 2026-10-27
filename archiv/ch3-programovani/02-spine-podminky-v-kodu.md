---
id: ch3-podminky-v-kodu
type: spine
title: "Podmínky v kódu: if a else"
readingTime: 2
standalone: true
teaser: "Správné heslo tě pustí dál, špatné ne. Někdo to rozhodl — dva řádky kódu."
voice: universal
parent: null
diagram: null
core: true
recallQ: "Jak se program rozhoduje pomocí if/else?"
recallA: "Vyhodnotí podmínku: když platí (True), provede větev if; když neplatí, provede větev else. Díky tomu reaguje různě podle situace."
highlights:
  - "Když podmínka platí, provede se větev if. Když neplatí, provede se větev else."
  - "jedno `=` hodnotu ukládá, dvojité `==` porovnává."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch3-podminky-v-kodu
state: core
carriers: prose|code
---

Napíšeš špatné heslo — „Nesprávné heslo, zkus to znovu." Napíšeš správné — jsi uvnitř. Appka se v tu chvíli **rozhodla**. Žádná magie: jen se podívala do proměnné a vybrala jednu ze dvou cest.

Větvení znáš z kapitoly o informatickém myšlení. V kódu se zapisuje konstrukcí **if/else** (anglicky „když/jinak"):

```python
if heslo == spravne_heslo:
    print("Vítej!")
else:
    print("Nesprávné heslo, zkus to znovu.")
```

**Když podmínka platí, provede se větev if. Když neplatí, provede se větev else.** Nikdy obě, nikdy žádná — program si vždycky vybere právě jednu cestu a pokračuje dál.

Podmínka je otázka s odpovědí ano/ne — vzpomeň na typ pravda/nepravda z minulé sekce. Ptát se můžeš skoro na cokoli: `skore >= 100` (je skóre aspoň 100?), `zivoty == 0` (došly životy?), `jmeno == "Kuba"`. Pozor na drobnost, o kterou zakopne každý: **jedno `=` hodnotu ukládá, dvojité `==` porovnává.**

Rozhodnutí se dají řetězit a vnořovat. Hra to dělá neustále:

```python
if zivoty == 0:
    print("Konec hry")
elif skore >= 100:
    print("Postupuješ do dalšího levelu!")
else:
    print("Hraj dál")
```

(`elif` = „jinak když" — další otázka, když první nevyšla.)

Rozhlédni se: podmínky řídí celý tvůj digitální den. *Když je zpráva nepřečtená → ukaž puntík. Když je baterie pod 20 % → zapni úsporný režim. Když je odpověď správně → přičti bod.* Každé chytré chování appky je nakonec něčí `if`.

**Zkus to!** Zapiš jako if/elif/else, jak se rozhoduješ ráno: *když je den zkoušení → opakuj si v tramvaji; jinak když prší → vezmi bundu; jinak → pohoda.* Pak zkus totéž pro pravidlo své oblíbené hry.

> **Věděl/a jsi?** I umělá inteligence, která působí tajemně, nakonec běží v programu plném obyčejných podmínek — třeba „když je odhad málo jistý, odpověz opatrněji". O tom, jak se AI rozhoduje uvnitř, bude celá pátá kapitola.

Program už se umí rozhodovat. Teď ho naučíme neúnavně opakovat — na scénu přicházejí cykly.
