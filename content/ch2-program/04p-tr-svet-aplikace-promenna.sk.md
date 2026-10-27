---
id: svet-aplikace-promenna-sk
translationOf: svet-aplikace-promenna
lang: sk
type: spine
title: "Rovnaké tlačidlo, tri reakcie"
readingTime: 1
standalone: true
teaser: "Ťukneš v hudobnej apke na ▶. Raz začne hrať, inokedy sa zastaví a inokedy chce prihlásenie. Apka nie je pokazená. Pamätá si, v akom je stave."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Skóre je 5. Program vykoná „nastav skóre na 3“ a potom „zmeň skóre o 2“. Koľko je skóre?"
recallA: "5. Nastavenie prepíše hodnotu na 3, zmena o 2 ju zvýši na 5. Premenná si pamätá len poslednú hodnotu."
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
  - "Názov a aktuálna hodnota (práve jedna)"
  - "Nastav vs. zmeň o; priradenie prepíše starú hodnotu"
  - "Premenná ako stav programu (skóre, životy, režim)"
carriers: prose|code
---

Ťukneš v hudobnej apke na ▶. Raz začne hrať, inokedy sa zastaví a inokedy chce prihlásenie. Apka nie je pokazená. Pamätá si, v akom je stave.

Stav drží apka v **premenných**. Každá má **názov** a v jednej chvíli **práve jednu hodnotu**: *prihlaseny = nie*, *rezim = hrá*, *pesnicka = 7*. Tlačidlo ▶ sa pozrie do premenných a podľa nich sa rozhodne:

```
keď prihlaseny = nie → ukáž prihlásenie
inak keď rezim = „hrá“ → zastav, nastav rezim na „pauza“
inak → hraj, nastav rezim na „hrá“
```

Premenná *rezim* je **stav programu**. Rovnaký vstup, ťuknutie, a podľa stavu iná akcia.

**Nastav** a **zmeň o** sú dve rôzne veci. *Nastav hlasitosť na 5* prepíše hodnotu, nech tam bolo čokoľvek. *Zmeň hlasitosť o 1* pripočíta k tomu, čo tam je. **Priradenie prepíše starú hodnotu**, tá stará zmizne. Preto je zradné toto: v košíku e-shopu sú dva kusy a ty ťukneš na +. Keď tlačidlo urobí *nastav pocet na 1* namiesto *zmeň pocet o 1*, máš v košíku zase len jeden kus.

Najčastejšie chyby apiek sú chyby stavu. Po odhlásení apka stále ukazuje tvoje meno: premenná sa nevynulovala. Po návrate z hovoru hrajú dve pesničky naraz: režim sa nastavil dvakrát. Keď hľadáš chybu, pýtaj sa najprv: aké hodnoty mali premenné v tej chvíli?

**Vyskúšaj to!** Vyber si apku, ktorú používaš každý deň. Nájdi aspoň tri premenné, ktoré si musí pamätať, napríklad režim, prihlásenie alebo počet neprečítaných správ. Kedy sa ktorá nastaví a kedy zmení?

**Ďalej vo svete aplikácií:** → [Apka z tabuľky](#svet-aplikace-tabulka-a-evidence-sk)
