---
id: ch3-funkce-a-procedury
type: spine
title: "Funkce: napiš jednou, volej pořád"
readingTime: 3
standalone: true
teaser: "Nejlepší kód je ten, který nemusíš psát znovu. Zabal ho, pojmenuj — a jen volej."
voice: universal
parent: null
diagram: null
core: true
recallQ: "Proč se opakující se kód vyplatí uložit do funkce?"
recallA: "Funkce je pojmenovaný kus kódu: napíšeš ho jednou a voláš odkudkoli. Může dostat vstupy (parametry) a vrátit výsledek — kód je kratší, přehlednější a opravuje se na jednom místě."
highlights:
  - "Funkce je pojmenovaný, znovupoužitelný kousek kódu: napíšeš ho jednou a pak už jen „voláš“ jménem."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch3-funkce-a-procedury
state: core
carriers: prose|code
---

Ve hře máš tři místa, kde hráč získává body: za minci, za nepřítele, za bonus. Třikrát stejný kus kódu: přičti body, přehraj zvuk, ukaž animaci. Pak se rozhodneš změnit zvuk… a musíš to přepsat třikrát. Zapomeneš na jedno místo — a máš chybu, která se projevuje „jen někdy". Zní to jako past? Je to past. A funkce je cesta ven.

**Funkce je pojmenovaný, znovupoužitelný kousek kódu: napíšeš ho jednou a pak už jen „voláš" jménem.**

```python
def pridej_body(kolik):
    global skore
    skore = skore + kolik
    prehraj_zvuk("cink")

pridej_body(10)   # mince
pridej_body(50)   # nepřítel
pridej_body(100)  # bonus
```

Všimni si dvou věcí. **Parametr** (`kolik`) je vstup — tatáž funkce díky němu funguje pro 10, 50 i 100 bodů. A **volání** (`pridej_body(10)`) je jediný řádek, kterým celou práci spustíš odkudkoli. Funkce navíc umí výsledek **vrátit**: `spocitej_prumer(znamky)` ti vydá číslo, se kterým počítáš dál.

Proč je to tak zásadní?

- **Oprava na jednom místě.** Nový zvuk? Změníš jeden řádek ve funkci — a platí všude.
- **Čitelnost.** `pridej_body(50)` čteš jako větu. Deset řádků výpočtů ne.
- **Dekompozice v praxi.** Pamatuješ z 2. kapitoly? Rozlož problém na části — a každá část se stane funkcí. Velký program je pak jen skládačka malých pojmenovaných dílů.

Ve Scratchi téhle věci říkají „vlastní bloky", v Pythonu `def`, jinde procedury či metody — princip je všude stejný. A mimochodem, celou dobu funkce používáš: `print()` je funkce, kterou napsal někdo jiný, a ty ji jen voláš. Programování je z velké části skládání cizích funkcí — vzpomeň na API z první kapitoly: to je vlastně volání funkcí přes internet.

**Zkus to!** Najdi ve svém týdnu „funkci": postup, který opakuješ se stejnými kroky, ale jinými vstupy (třeba „udělej referát(téma)" nebo „uvař čaj(druh)"). Rozepiš kroky a podtrhni, co je parametr.

> **Věděl/a jsi?** Velké aplikace obsahují statisíce funkcí, které se volají navzájem. Když ti AI asistent vygeneruje kód, dobrá první otázka zní: „Rozumím, co která funkce dělá?"

Zbývá poslední — a možná nejdůležitější — dovednost programátora: co dělat, když to celé nefunguje.
