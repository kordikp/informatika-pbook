---
id: vyzva-program-promenna-sk
translationOf: vyzva-program-promenna
lang: sk
type: challenge
title: "Vymeň dve škatuľky"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "V škatuľke a je 5, v škatuľke b je 8."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: promenna
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|code
---

V škatuľke `a` je 5, v škatuľke `b` je 8. Chceš ich vymeniť. Znie to ako hračka. Prvý pokus však zradí skoro každého.

<!-- task -->

Kamarát napísal:

```
a = 5
b = 8
a = b
b = a
```

**Úloha 1.** Napíš trasovaciu tabuľku: hodnoty `a` a `b` po každom riadku. Čo je v škatuľkách na konci a prečo výmena zlyhala?

**Úloha 2.** Oprav to. Smieš použiť tretiu škatuľku `t`. Koľko najmenej príkazov potrebuješ (prvé dva riadky sa nepočítajú)?

**Úloha 3.** Teraz bez tretej škatuľky. Smieš len sčítať a odčítať. Stačia tri príkazy. Nájdi ich.

**Úloha 4.** Tri škatuľky: `a = 1`, `b = 2`, `c = 3`. Zarotuj ich: do `a` príde hodnota z `b`, do `b` z `c` a do `c` z `a`. Výsledok má byť `a = 2`, `b = 3`, `c = 1`. Koľko najmenej príkazov potrebuješ s jednou pomocnou škatuľkou?

**Kedy máš hotovo:** tabuľky sedia a každá oprava funguje pre **akékoľvek** čísla, nielen pre 5 a 8. Over to ešte s inou dvojicou, napríklad −3 a 10.

<!-- hint -->

Po riadku `a = b` je päťka preč, škatuľka drží len poslednú hodnotu. Kam ju schováš, kým ju prepíšeš?

<!-- hint -->

Bez tretej škatuľky: ulož do `a` súčet `a + b`. Súčet v sebe nesie obe čísla. Ako z neho dostaneš späť pôvodné `a`?

<!-- hint -->

Pri rotácii stačí schovať jedinú hodnotu: tú, ktorú prepíšeš ako prvú.

<!-- solution -->

**Úloha 1:** po `a = b` je a = 8, b = 8. Po `b = a` zostáva a = 8, b = 8. Päťka zmizla hneď prvým priradením, lebo **nastav na** starú hodnotu prepíše.

**Úloha 2:** tri príkazy: `t = a`, `a = b`, `b = t`.

**Úloha 3:** `a = a + b` (a = 13), `b = a - b` (b = 13 − 8 = 5), `a = a - b` (a = 13 − 5 = 8). Funguje to, lebo súčet si pamätá obe čísla: keď od neho odčítaš jedno, zostane druhé.

**Úloha 4:** štyri príkazy: `t = a`, `a = b`, `b = c`, `c = t`.

<!-- more -->

V Pythone sa výmena dá napísať jedným riadkom: `a, b = b, a`. Python si najprv vyrobí dvojicu hodnôt (8, 5) a až potom ju rozdelí do škatuliek, takže nič nezmizne. Zamysli sa: prečo trik so sčítaním nefunguje pre texty, napríklad `a = "pes"`? A čo trik s násobením a delením (`a = a * b`, `b = a / b`, `a = a / b`)? Nájdi číslo, pre ktoré zlyhá, a vysvetli prečo.
