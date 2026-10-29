---
id: vyzva-roboti-dekompozice-hu
translationOf: vyzva-roboti-dekompozice
lang: hu
type: challenge
title: "Kétszemű kisautó"
level: 3
minutes: 40
readingTime: 2
standalone: true
teaser: "A kisautó szépen követi a vonalat, amíg nem jön egy éles kanyar."
voice: universal
parent: svet-roboti-dekompozice-hu
diagram: null
core: false
status: accepted
concept: dekompozice
state: edited
lens: roboti
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|table|code
---

A kisautó szépen követi a vonalat, amíg nem jön egy éles kanyar. Akkor a vonal mindkét érzékelő elől eltűnik, és a kisautó vidáman megy tovább egyenesen, le az asztalról.

<!-- task -->

A kisautó elején két vonalérzékelő van, **L** (bal) és **P** (jobb). Mindegyik 1-et jelez, ha fekete vonalat lát, és 0-t, ha fehér papírt. A vonal olyan széles, hogy egyenes szakaszon mindkettő látja. A kisautónak két motorja van, **ML** (bal) és **MP** (jobb). Ha csak a jobb motor jár, a kisautó balra kanyarodik.

1. Töltsd ki a táblázatot L és P kombinációira: melyik motor jár (1), és melyik áll (0)? Az L = 0, P = 0 sort egyelőre hagyd üresen.
2. Keress a táblázatban olyan szabályt, amely **egyetlen ha nélkül** is leírható: ML mindig ugyanaz, mint az egyik érzékelő, MP pedig mint a másik.
3. Most a 0 és 0 sor: a vonal eltűnt. Találd ki, mit jegyezzen meg a kisautó, és ez alapján hogyan döntsön, hogy éles kanyarban visszataláljon a vonalhoz. Írd le *ha… akkor…* szabályokként.

**Siker:** a táblázat, a 2. pont szabálya és az elveszett vonal szabályai, amelyek két teszten is megállják a helyüket: éles kanyar balra és éles kanyar jobbra.

<!-- hint -->

Ha csak a bal érzékelő látja a vonalat, a vonal balra szökik. Merre kell kanyarodnia a kisautónak, és melyik motornak kell ehhez állnia?

<!-- hint -->

Nézd meg a táblázat oszlopait: ML minden sorban ugyanazt az értéket veszi fel, mint az egyik érzékelő. Az érzékelők és a motorok „keresztbe vannak kötve”.

<!-- hint -->

Ha a vonal eltűnik, az érzékelők már semmit sem tudnak. Csak a múlt tudja: melyik érzékelő látta utoljára a vonalat? Ehhez egyetlen változó elég.

<!-- solution -->

| L | P | ML | MP | mit csinál |
|---|---|---|---|---|
| 1 | 1 | 1 | 1 | egyenesen megy |
| 1 | 0 | 0 | 1 | balra kanyarodik |
| 0 | 1 | 1 | 0 | jobbra kanyarodik |
| 0 | 0 | ? | ? | a vonal eltűnt |

Szabály *ha* nélkül: **ML = P és MP = L**. A jobb érzékelő vezérli a bal motort, és fordítva. Az ilyen bekötést Braitenberg-járműnek hívják, és két keresztbe kötött dróttal is működik.

Elveszett vonal: az `utoljára` változó megjegyzi, melyik érzékelő látta utoljára egyedül a vonalat.

```
ha L == 1 és P == 0: utoljára = balra
ha L == 0 és P == 1: utoljára = jobbra
ha L == 0 és P == 0:
    ha utoljára == balra: ML = 0, MP = 1
    különben: ML = 1, MP = 0
```

Éles balkanyarban utoljára a bal érzékelő látja a vonalat, ezért a kisautó balra fordul, amíg újra meg nem találja. Jobbra fordítva. A nagy feladat három kisebbre esett szét: **látni, dönteni, emlékezni**.

<!-- more -->

A táblázatot logikai kapukból is megépítheted a „Kisautó-agy logikai kapukból” extra játékban. A versenyrobotok nem csak 0-t és 1-et olvasnak, hanem a szürke árnyalatát, és annál jobban kanyarodnak, minél messzebb van a vonal a középtől. Ezt arányos szabályozásnak hívják. Aki vonalkövető robottal versenyezne, a barátaival elmehet a [Robosoutěž ČVUT](https://robosoutez.fel.cvut.cz) versenyre, amely az alapiskola felső tagozatosainak szól; az építőkészletet a szervezők kölcsönzik.
