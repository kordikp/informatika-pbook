---
id: vyzva-tvorba-kodovani
type: challenge
title: "Kam zmizelo 44 gigabajtů"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Minuta 4K z mobilu má asi 350 MB."
voice: universal
parent: svet-tvorba-kodovani
diagram: null
core: false
lang: cs
status: accepted
concept: kodovani
state: edited
lens: tvorba
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Minuta 4K z mobilu má asi 350 MB. Kdyby mobil ukládal každý pixel každého snímku, měla by desítky gigabajtů. Kam se poděl zbytek? A proč se některá videa „nafouknou“ víc než jiná?

<!-- task -->

**Část 1.** Spočítej, kolik by měla minuta videa ve 4K (3840 × 2160 pixelů, 30 snímků za vteřinu, 3 bajty na pixel) bez komprese. Kolikrát víc je to než 350 MB?

**Část 2.** Kodek je program, který video zmenšuje. Celý snímek uloží jen občas, mezi tím ukládá hlavně **rozdíly** oproti předchozímu snímku. Seřaď čtyři desetivteřinové záběry podle velikosti souboru při stejné kvalitě, od nejmenšího:
- A) Úvodní titulek: bílý text na černém, nic se nehýbe.
- B) Spolužák mluví do kamery na stativu, za ním bílá zeď.
- C) Totéž, ale kamera je v ruce a trochu se třese.
- D) Detail padajících konfet ve větru.

**Část 3.** Vysvětli jednou větou, proč video s datovým tokem 8 Mb/s vypadá u konfet rozmazaně a u titulku ostře.

**Kritérium úspěchu:** číslo s přesností na 5 %, správné pořadí a vysvětlení, které stojí na rozdílech mezi snímky.

<!-- hint -->

Jeden snímek má 3840 × 2160 × 3 bajtů. Snímků za minutu je 60 × 30.

<!-- hint -->

Představ si, že kamarádovi po telefonu popisuješ, co se změnilo od minulého snímku. U kterého záběru budeš mluvit nejdéle?

<!-- hint -->

Třesoucí se kamera posune celý obraz najednou. To se dá popsat jednou větou „všechno o kousek vlevo“. Konfety se ale hýbou každá jinak.

<!-- solution -->

**1.** 3840 × 2160 × 3 = 24 883 200 B na snímek, asi 24,9 MB. Za minutu je to 1800 snímků, tedy asi 44 800 MB ≈ **45 GB**. To je zhruba **128× víc** než 350 MB.

**2.** **A < B < C < D.** Titulek se nemění, rozdíly jsou skoro nulové. Na stativu se mění jen ústa a oči. Třesoucí se kamera posune celý obraz, ale kodek posun popíše jedním „vektorem pohybu“ a doplní jen okraje. Konfety jsou tisíce drobných nezávislých pohybů, takže každý snímek je skoro úplně nový.

**3.** Datový tok je pevný rozpočet bitů na vteřinu. Titulku stačí málo, konfety by potřebovaly mnohem víc, a tak kodek zahodí detaily a obraz se rozpadne do čtverečků. Proto videa se sněhem nebo konfetami vypadají na sítích hůř.

<!-- more -->

Natoč mobilem 10 vteřin na stativu a 10 vteřin s kamerou v ruce proti listí ve větru. Porovnej velikosti souborů: sedí pořadí? Pak si zahraj hru navíc „Kolik váží obraz a zvuk“ a spočítej, jak trik 4:2:0 ušetří polovinu dat, aniž by si toho kdokoli všiml.
