---
id: vyzva-program-promenna-hu
translationOf: vyzva-program-promenna
lang: hu
type: challenge
title: "Cseréld fel a két dobozt"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Az a dobozban 5 van, a b dobozban 8."
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

Az `a` dobozban 5 van, a `b` dobozban 8. Fel akarod cserélni őket. Gyerekjátéknak hangzik. Az első próbálkozás mégis szinte mindenkit becsap.

<!-- task -->

Egy barátod ezt írta:

```
a = 5
b = 8
a = b
b = a
```

**1. feladat.** Írj nyomkövető táblázatot: az `a` és a `b` értékét minden sor után. Mi van a végén a dobozokban, és miért nem sikerült a csere?

**2. feladat.** Javítsd ki. Használhatsz egy harmadik, `t` dobozt. Legkevesebb hány utasítás kell (az első két sor nem számít)?

**3. feladat.** Most harmadik doboz nélkül. Csak összeadhatsz és kivonhatsz. Három utasítás elég. Találd meg őket.

**4. feladat.** Három doboz: `a = 1`, `b = 2`, `c = 3`. Forgasd el őket: az `a`-ba kerüljön a `b` értéke, a `b`-be a `c`-é, a `c`-be pedig az `a`-é. Az eredmény legyen `a = 2`, `b = 3`, `c = 1`. Legkevesebb hány utasítás kell egy segéddobozzal?

**Akkor vagy kész, ha** a táblázatok stimmelnek, és minden javítás **bármilyen** számra működik, nem csak az 5-re és a 8-ra. Ellenőrizd egy másik párral is, például −3-mal és 10-zel.

<!-- hint -->

Az `a = b` sor után az ötös eltűnt, a doboz csak az utolsó értéket tartja meg. Hová rejted el, mielőtt felülírod?

<!-- hint -->

Harmadik doboz nélkül: tedd az `a`-ba az `a + b` összeget. Az összeg mindkét számot magában hordja. Hogyan kapod vissza belőle az eredeti `a`-t?

<!-- hint -->

A forgatásnál elég egyetlen értéket elrejteni: azt, amelyiket elsőként írod felül.

<!-- solution -->

**1. feladat:** az `a = b` után a = 8, b = 8. A `b = a` után is a = 8, b = 8 marad. Az ötös már az első értékadásnál eltűnt, mert a **legyen** felülírja a régi értéket.

**2. feladat:** három utasítás: `t = a`, `a = b`, `b = t`.

**3. feladat:** `a = a + b` (a = 13), `b = a - b` (b = 13 − 8 = 5), `a = a - b` (a = 13 − 5 = 8). Azért működik, mert az összeg mindkét számot megjegyzi: ha kivonod belőle az egyiket, megmarad a másik.

**4. feladat:** négy utasítás: `t = a`, `a = b`, `b = c`, `c = t`.

<!-- more -->

Pythonban a cserét egy sorban is megírhatod: `a, b = b, a`. A Python előbb elkészít egy értékpárt (8, 5), és csak utána osztja szét a dobozokba, így semmi sem vész el. Gondolkodj el: miért nem működik az összeadásos trükk szövegekre, például `a = "kutya"`? És mi a helyzet a szorzásos-osztásos trükkel (`a = a * b`, `b = a / b`, `a = a / b`)? Keress egy számot, amelyre elromlik, és magyarázd meg, miért.
