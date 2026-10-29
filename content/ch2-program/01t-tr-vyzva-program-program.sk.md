---
id: vyzva-program-program-sk
translationOf: vyzva-program-program
lang: sk
type: challenge
title: "Ktoré riadky smieš vymeniť?"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "V jadre stačilo vymeniť dva bloky a robot išiel inam."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: program
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|code
---

V jadre stačilo vymeniť dva bloky a robot išiel inam. Lenže nie každá výmena niečo pokazí. Niektoré riadky sa dajú poprehadzovať bez trestu. Ktoré a podľa čoho to spoznáš?

<!-- task -->

Tu je krátky program v Pythone. Znak `=` znamená „nastav na“: do škatuľky vľavo sa uloží hodnota sprava. `print` vypíše výsledok.

```
1  cena = 150
2  zlava = 30
3  kusy = 2
4  cena = cena - zlava
5  celkom = cena * kusy
6  print(celkom)
```

**Úloha 1.** Čo program vypíše?

**Úloha 2.** Prejdi päť dvojíc susedných riadkov: 1–2, 2–3, 3–4, 4–5, 5–6. Pri každej rozhodni: keď tie dva riadky vymeníš, vypíše program stále to isté?

**Úloha 3.** Nájdi pravidlo. Kedy dva príkazy smieš vymeniť a kedy nie? Pravidlo sa musí dať použiť na akýkoľvek program, nielen na tento.

**Úloha 4.** Zmeň riadok 2 na `zlava = cena // 5` (pätina ceny, `//` je delenie bez zvyšku). Ktoré dvojice sa dajú vymeniť teraz? Sedí na ne tvoje pravidlo?

**Kedy máš hotovo:** správny výstup, správne rozhodnuté všetky dvojice v oboch verziách a pravidlo, ktoré platí pre obe.

<!-- hint -->

Pri každom riadku si napíš dve veci: ktoré škatuľky **číta** (vpravo od `=` alebo v zátvorke) a do ktorej **zapisuje** (vľavo od `=`).

<!-- hint -->

Riadok 5 číta `cena` a riadok 4 ju zapisuje. Záleží potom na tom, ktorý z nich prebehne skôr?

<!-- hint -->

Výmena je bezpečná, keď ani jeden riadok nezapisuje škatuľku, ktorú ten druhý číta alebo zapisuje.

<!-- solution -->

**Výstup:** 240. Cena je 150 − 30 = 120 a 120 × 2 = 240.

**Pôvodná verzia:**
- 1–2 áno: nezdieľajú žiadnu škatuľku.
- 2–3 áno.
- 3–4 áno: riadok 4 škatuľku `kusy` nepoužíva.
- 4–5 nie: riadok 5 by násobil starú cenu 150 a vyšlo by 300.
- 5–6 nie: `print` by chcel vypísať `celkom`, ktoré ešte neexistuje, a program spadne.

**Pravidlo:** dva príkazy smieš vymeniť, keď **žiadny z nich nezapisuje škatuľku, ktorú ten druhý číta alebo zapisuje**. Inak je medzi nimi **závislosť** a poradie je pevné.

**Verzia so `zlava = cena // 5`:** 1–2 už nejde, lebo riadok 2 teraz číta `cena`, ktorá by ešte neexistovala. 2–3 a 3–4 idú, 4–5 a 5–6 nie. Výstup je stále 240, lebo pätina zo 150 je 30.

<!-- more -->

Presne toto pravidlo používa **procesor** v tvojom mobile. Aby bol rýchlejší, sám prehadzuje príkazy, ktoré na sebe nezávisia, a niektoré robí súčasne. Stráži pritom rovnaké „číta a zapisuje“ ako ty.

Skús si nakresliť **graf závislostí**: každý riadok je krúžok a šípka vedie od riadku, ktorý škatuľku zapisuje, k riadku, ktorý ju číta. Koľko rôznych poradí všetkých šiestich riadkov dá rovnaký výsledok? (Na kontrolu: 8.) Over si to v [Python Tutore](https://pythontutor.com/).
