---
id: vyzva-stroje-a-site-cesta-dat-hu
translationOf: vyzva-stroje-a-site-cesta-dat
lang: hu
type: challenge
title: "A ping, ami nem létezhet"
level: 2
minutes: 25
readingTime: 2
standalone: true
teaser: "Egy ausztrál játékos azzal dicsekszik a fórumon: „A prágai szerverre 50 ms a pingem.” Senki sem látta játszani, te mégis tudod, hogy ez nem igaz."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: cesta-dat
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Egy ausztrál játékos azzal dicsekszik a fórumon: „A prágai szerverre 50 ms a pingem.” Senki sem látta játszani, te mégis tudod, hogy ez nem igaz. Az internetes késleltetésnek ugyanis van alsó határa, és azt a fizika szabja meg.

<!-- task -->

Adatok: Prága és Sydney légvonalban kb. 16 000 km-re van egymástól. A fény vákuumban 300 000 km/s sebességgel halad, üvegből készült optikai szálban kb. 200 000 km/s-mal. A **ping** az az idő, amíg egy csomag elér a szerverig, és a válasz visszaér.

1. Számold ki a lehető legkisebb pinget, ha az optikai kábel egyenesen a Föld felszínén futna.
2. Bizonyítsd be, hogy az 50 ms akkor is lehetetlen, ha a jel vákuumbeli fénysebességgel haladna.
3. A valódi ping Prágából Sydney-be általában 300 ms körül van. Hová lesz a különbség? Írj legalább két okot.
4. Egy játékcég azt szeretné, hogy a sydney-i játékosok pingje 30 ms alatt legyen. Mit kell tennie?

**A siker feltétele:** a 2. pontban a számítás 50 ms fölött jön ki, a 3. pontban két fizikailag helyes ok szerepel, a 4. pontban pedig olyan megoldás, amely nem kerüli meg a fizikát.

<!-- hint -->

Idő = út : sebesség. A ping oda-vissza értendő, ezért az út kétszeres.

<!-- hint -->

A bizonyításhoz helyettesítsd be a létező legnagyobb sebességet. Ha még így is több jön ki 50 ms-nál, kész vagy.

<!-- hint -->

Nézd meg a térképen, merre futnak a kábelek Európából Ausztráliába: Afrika körül vagy Szuezen, Indián és Szingapúron át. És minden útba eső routernek fogadnia kell a csomagot, el kell olvasnia a címet, és tovább kell küldenie.

<!-- solution -->

1. Az út 2 × 16 000 = 32 000 km. 32 000 : 200 000 = 0,16 s, vagyis **160 ms**.
2. Még vákuumban is: 32 000 : 300 000 ≈ 0,107 s = **107 ms**, és ez több, mint 50 ms. Az állítás lehetetlen. (Bónusz: még egy egyenes alagút is a Földön át, kb. 12 100 km, oda-vissza 81 ms.)
3. A kábel nem egyenesen fut, hanem a tenger fenekén kerüli meg a szárazföldeket, ezért sokkal hosszabb. Minden router egy kicsit sorban tartja a csomagot, mielőtt továbbküldi. A szervernek pedig idő kell, hogy kiszámolja a választ.
4. Szervert kell építeni **Ausztráliában**, a játékosok közelében. Gyorsabb fényt nem lehet venni. Ezért vannak az online játékoknak régiónként szerverei, a nagy weboldalaknak pedig másolatai az egész világon.

<!-- more -->

Mérd meg az utat a saját gépeddel: Windowson írd be a parancssorba, hogy tracert és egy weboldal címét, Macen vagy Linuxon traceroute. Látni fogsz minden routert és az odáig tartó időt. Megtalálod azt az ugrást, ahol a csomag átrepült az óceánon? Aztán próbáld ki a „Hol vész el a ping” extra játékot és az „Út a hálózaton” pályáit a tenger alatti kábelekkel.
