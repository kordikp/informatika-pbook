---
id: vyzva-program-rozhodovani-sk
translationOf: vyzva-program-rozhodovani
lang: sk
type: challenge
title: "Tri pokladne, dve chyby"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Traja kamaráti z krúžku naprogramovali pokladňu na kúpalisko, každý inak."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: rozhodovani
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|code
---

Traja kamaráti z krúžku naprogramovali pokladňu na kúpalisko, každý inak. Dve pokladne počítajú zle. Tretia je správne, aj keď vyzerá čudne. Nájdeš, ktorá je ktorá, a jeden vek, ktorý prezradí obe chyby?

<!-- task -->

Cenník: do 5 rokov **zadarmo**, 6 až 14 rokov **60 Kč**, 15 až 64 rokov **120 Kč**, od 65 rokov **60 Kč**. V Pythone `elif` znamená „inak, ak“. Program ide podmienkami zhora a vykoná **prvú**, ktorá platí. Ostatné preskočí.

**Pokladňa A**
```
if vek >= 15:
    cena = 120
elif vek >= 65:
    cena = 60
elif vek >= 6:
    cena = 60
else:
    cena = 0
```
**Pokladňa B**
```
if vek < 6:
    cena = 0
elif vek < 15 or vek > 65:
    cena = 60
else:
    cena = 120
```
**Pokladňa C**
```
if vek < 6:
    cena = 0
elif vek >= 15 and vek < 65:
    cena = 120
elif vek >= 65 and vek < 15:
    cena = 60
else:
    cena = 60
```

**Úloha 1.** Pri každej pokladni rozhodni, či je správne. Pri chybnej nájdi **všetky** veky, pre ktoré počíta zle.

**Úloha 2.** V dvoch programoch je vetva, ktorá **nemôže nikdy prebehnúť**. Nájdi obe. Prečo jedna z nich spôsobí chybu a druhá nie?

**Úloha 3.** Nájdi **najmenšiu** sadu vekov na otestovanie, ktorá odhalí obe chybné pokladne.

**Kedy máš hotovo:** správne verdikty, presné rozsahy chybných vekov, obe mŕtve vetvy a najmenšia sada testov.

<!-- hint -->

Pri A skús vek 70. Ktorú podmienku program stretne ako prvú?

<!-- hint -->

Pri B porovnaj `vek > 65` s cenníkom. Koľko zaplatí človek, ktorý má presne 65?

<!-- hint -->

Podmienka `vek >= 65 and vek < 15` chce, aby niekto mal zároveň aspoň 65 a menej ako 15.

<!-- solution -->

**A je chybná** pre všetky veky **od 65 vyššie**: senior splní hneď prvú podmienku `vek >= 15` a zaplatí 120. Vetva `vek >= 65` je pod ňou a nikdy na ňu nepríde rad, je **mŕtva**. Pri `elif` záleží na poradí: užšia podmienka musí ísť skôr.

**B je chybná** len pre vek **presne 65**: `65 > 65` neplatí, takže človek, ktorý má 65, zaplatí 120. Správne má byť `vek >= 65`.

**C je správne.** Jej tretia vetva je tiež mŕtva, nikto nemôže mať zároveň aspoň 65 a menej ako 15. Seniori však prepadnú do `else` a zaplatia správnych 60. Mŕtva vetva v A schovala chybu, mŕtva vetva v C len mätie čitateľa kódu.

**Najmenšia sada je jediný vek: 65.** Odhalí A aj B, obe účtujú 120. Dobrá sada pre akúkoľvek pokladňu však testuje **obe strany každej hranice**: 5, 6, 14, 15, 64, 65.

<!-- more -->

Tomu sa hovorí **testovanie hraničných hodnôt**. Profesionáli píšu automatické testy, ktoré sa spustia po každej zmene kódu. Skús to: zabaľ pokladňu do funkcie `def cena(vek):` s `return` namiesto `cena = …` a pod ňu napíš riadky ako `assert cena(65) == 60`. Keď test neprejde, Python ohlási chybu. Potom podmienky prepíš tak, aby sa dali poprehadzovať v ľubovoľnom poradí a stále fungovali. Tip: každá vetva musí opísať celý svoj rozsah, napríklad `vek >= 6 and vek < 15`.
