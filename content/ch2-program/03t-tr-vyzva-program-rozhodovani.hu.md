---
id: vyzva-program-rozhodovani-hu
translationOf: vyzva-program-rozhodovani
lang: hu
type: challenge
title: "Három pénztár, két hiba"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Három szakköri barát beprogramozott egy uszodai pénztárat, mindegyik másképp."
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

Három szakköri barát beprogramozott egy uszodai pénztárat, mindegyik másképp. Két pénztár rosszul számol. A harmadik jó, pedig furcsán néz ki. Rájössz, melyik melyik, és találsz egy életkort, amely mindkét hibát leleplezi?

<!-- task -->

Árlista: 5 éves korig **ingyenes**, 6–14 év **60 Kč**, 15–64 év **120 Kč**, 65 évtől **60 Kč**. Pythonban az `elif` azt jelenti: „különben, ha”. A program felülről halad a feltételeken, és az **elsőt** hajtja végre, amelyik igaz. A többit kihagyja.

**A pénztár**
```
if kor >= 15:
    ar = 120
elif kor >= 65:
    ar = 60
elif kor >= 6:
    ar = 60
else:
    ar = 0
```
**B pénztár**
```
if kor < 6:
    ar = 0
elif kor < 15 or kor > 65:
    ar = 60
else:
    ar = 120
```
**C pénztár**
```
if kor < 6:
    ar = 0
elif kor >= 15 and kor < 65:
    ar = 120
elif kor >= 65 and kor < 15:
    ar = 60
else:
    ar = 60
```

**1. feladat.** Minden pénztárnál döntsd el, hogy jó-e. A hibásnál keresd meg az **összes** életkort, amelyre rosszul számol.

**2. feladat.** Két programban van olyan ág, amely **soha nem futhat le**. Találd meg mindkettőt. Miért okoz az egyik hibát, a másik pedig nem?

**3. feladat.** Találd meg a **legkisebb** tesztelendő életkor-készletet, amely mindkét hibás pénztárat leleplezi.

**Akkor vagy kész, ha** megvannak a helyes ítéletek, a hibás életkorok pontos tartományai, mindkét halott ág és a legkisebb tesztkészlet.

<!-- hint -->

Az A-nál próbáld ki a 70 éves kort. Melyik feltétellel találkozik először a program?

<!-- hint -->

A B-nél vesd össze a `kor > 65` feltételt az árlistával. Mennyit fizet, aki pontosan 65 éves?

<!-- hint -->

A `kor >= 65 and kor < 15` feltétel azt kéri, hogy valaki egyszerre legyen legalább 65 és 15-nél fiatalabb.

<!-- solution -->

**Az A hibás** minden életkorra **65-től felfelé**: egy nyugdíjas rögtön teljesíti az első, `kor >= 15` feltételt, és 120-at fizet. A `kor >= 65` ág alatta van, és soha nem kerül rá sor, **halott**. Az `elif`-nél számít a sorrend: a szűkebb feltételnek kell előbb jönnie.

**A B hibás**, de csak **pontosan 65** évesre: a `65 > 65` nem igaz, így egy 65 éves 120-at fizet. Helyesen `kor >= 65` kellene.

**A C jó.** A harmadik ága szintén halott, senki sem lehet egyszerre legalább 65 és 15-nél fiatalabb. A nyugdíjasok viszont az `else` ágba esnek, és a helyes 60-at fizetik. Az A halott ága elrejtett egy hibát, a C halott ága csak összezavarja a kód olvasóját.

**A legkisebb készlet egyetlen életkor: 65.** Leleplezi az A-t és a B-t is, mindkettő 120-at számol. Egy jó tesztkészlet bármilyen pénztárhoz viszont **minden határ mindkét oldalát** teszteli: 5, 6, 14, 15, 64, 65.

<!-- more -->

Ezt hívják **határérték-tesztelésnek**. A profik automatikus teszteket írnak, amelyek a kód minden változtatása után lefutnak. Próbáld ki: csomagold a pénztárat egy `def ar(kor):` függvénybe, `ar = …` helyett `return`-nel, és alá írj ilyen sorokat: `assert ar(65) == 60`. Ha egy teszt nem megy át, a Python hibát jelez. Aztán írd át úgy a feltételeket, hogy tetszőleges sorrendbe rakhatók legyenek, és mégis működjenek. Tipp: minden ágnak a teljes saját tartományát kell leírnia, például `kor >= 6 and kor < 15`.
