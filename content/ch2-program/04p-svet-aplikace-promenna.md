---
id: svet-aplikace-promenna
type: spine
title: "Stejné tlačítko, tři reakce"
readingTime: 1
standalone: true
teaser: "Klepneš v hudební appce na ▶. Jednou začne hrát, jindy se zastaví a jindy chce přihlášení. Appka není rozbitá. Pamatuje si, v jakém je stavu."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Skóre je 5. Program provede „nastav skóre na 3“ a pak „změň skóre o 2“. Kolik je skóre?"
recallA: "5. Nastavení přepíše hodnotu na 3, změna o 2 ji zvýší na 5. Proměnná si pamatuje jen poslední hodnotu."
lang: cs
lens: aplikace
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: promenna
state: edited
highlights:
  - "Název a aktuální hodnota (právě jedna)"
  - "Nastav vs. změň o; přiřazení přepíše starou hodnotu"
  - "Proměnná jako stav programu (skóre, životy, režim)"
carriers: prose|code
---

Klepneš v hudební appce na ▶. Jednou začne hrát, jindy se zastaví a jindy chce přihlášení. Appka není rozbitá. Pamatuje si, v jakém je stavu.

Stav drží appka v **proměnných**. Každá má **název** a v jednu chvíli **právě jednu hodnotu**: *přihlášen = ne*, *režim = hraje*, *písnička = 7*. Tlačítko ▶ se podívá do proměnných a podle nich se rozhodne:

```
když přihlášen = ne → ukaž přihlášení
jinak když režim = „hraje“ → zastav, nastav režim na „pauza“
jinak → hraj, nastav režim na „hraje“
```

Proměnná *režim* je **stav programu**. Stejný vstup, klepnutí, a podle stavu jiná akce.

**Nastav** a **změň o** jsou dvě různé věci. *Nastav hlasitost na 5* přepíše hodnotu, ať tam bylo cokoli. *Změň hlasitost o 1* přičte k tomu, co tam je. **Přiřazení přepíše starou hodnotu**, ta stará zmizí. Proto je zrádné tohle: v košíku e-shopu jsou dva kusy a ty klepneš na +. Když tlačítko udělá *nastav počet na 1* místo *změň počet o 1*, máš v košíku zase jen jeden kus.

Nejčastější chyby appek jsou chyby stavu. Po odhlášení appka pořád ukazuje tvoje jméno: proměnná se nevynulovala. Po návratu z hovoru hrají dvě písničky naráz: režim se nastavil dvakrát. Když hledáš chybu, ptej se nejdřív: jaké hodnoty měly proměnné v tu chvíli?

**Zkus to!** Vyber si appku, kterou používáš každý den. Najdi aspoň tři proměnné, které si musí pamatovat, třeba režim, přihlášení nebo počet nepřečtených zpráv. Kdy se která nastaví a kdy změní?

**Dál ve světě aplikací:** → [Appka z tabulky](#svet-aplikace-tabulka-a-evidence)
