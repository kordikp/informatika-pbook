---
id: program-hu
translationOf: program
lang: hu
type: spine
title: "Program: bemenet → lépések → kimenet"
readingTime: 2
standalone: true
teaser: "Rábökök a „Küldés” gombra, és az üzenet elrepül. A bökés és az elrepülés között parancsok ezrei futottak le. Ki írta őket, és milyen sorrendben?"
voice: universal
parent: null
diagram: vstup-zpracovani-vystup-hu
core: true
recallQ: "Mit csinál a számítógép, ha a programban felcserélsz két parancsot, és miért?"
recallA: "Az új sorrendben hajtja végre őket, akkor is, ha ennek nincs értelme, mert semmit sem gondol hozzá. Ezért az eredmény megváltozhat."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: program
conceptTitle: "Program: bemenet → lépések → kimenet"
objective: "Rábökök a „Küldés” gombra, és az üzenet elrepül. A bökés és az elrepülés között parancsok ezrei futottak le. Ki írta őket, és milyen sorrendben?"
mustCover:
  - "A kód egy algoritmus leírása programozási nyelven (blokkos és szöveges is)"
  - "Szekvencia: a parancsok abban a sorrendben futnak le, ahogyan le vannak írva"
  - "Bemenet → feldolgozás → kimenet; a felhasználói felület az a hely, ahol találkozol velük"
state: core
highlights:
  - "A kód egy algoritmus leírása programozási nyelven (blokkos és szöveges is)"
  - "Szekvencia: a parancsok abban a sorrendben futnak le, ahogyan le vannak írva"
  - "Bemenet → feldolgozás → kimenet; a felhasználói felület az a hely, ahol találkozol velük"
carriers: prose|diagram
---

Rábökök a „Küldés” gombra, és az üzenet elrepül. A bökés és az elrepülés között parancsok ezrei futottak le. Ki írta őket, és milyen sorrendben?

A **program** olyan nyelven leírt algoritmus, amelyet a számítógép megért. Lehet szöveg, vagy blokkok, mint a Scratchben és a MakeCode-ban. A számítógép a programot **szó szerint és a leírt sorrendben hajtja végre**. Semmit sem gondol hozzá.

Minden program három dolgot csinál: fogad egy **bemenetet** (kattintás, érzékelő, szöveg), **feldolgozza**, és **kimenetet** ad (kép, hang, fény).

A robotnak el kell jutnia a csillagig, és a célban fel kell kapcsolnia egy lámpát. A program **bemenettel** kezdődik: *amikor megnyomják az A gombot*. Az ilyen indítót **eseménynek** hívják: a program vár, amíg bekövetkezik, aztán elindul. Utána jön a **feldolgozás**, vagyis a blokkok sorrendben: *menj előre 3-at, fordulj balra, menj előre 2-t*. A végén a **kimenet**: *kapcsold fel a lámpát*. Ha felcseréled a *menj előre 3-at* és a *menj előre 2-t*, a robot túl korán fordul, nekimegy a falnak, és nem éri el a csillagot.

Elég volt felcserélni két blokkot, és a robot máshová ment. **A parancsok sorrendje a program része.** A számítógép nem tudja, mire gondoltál. Csak azt tudja, mit írtál.

A program azonban nem csak a számítógépnek szól. Azok is olvassák, akik majd javítani fogják. Ezért kerülnek a kódba **megjegyzések**: emberi olvasóknak szóló jegyzetek, amelyeket a számítógép átugrik.

**Próbáld ki!** Keress három programot a telefonodon, és mindegyiknél határozd meg a bemenetet, a feldolgozást és a kimenetet. Ébresztőóra: a bemenet a beállított idő, a feldolgozás az óra figyelése, a kimenet a csörgés. Aztán diktálj le egy barátodnak egy programot „a padtól a tábláig”, és hajtsa végre. Mi történik, ha felcserélsz két lépést?

> **Vigyázz, gyakori tévedés:** „A számítógép rájön, mire gondolt a szerző.” Nem jön rá. Pontosan azt hajtja végre, ami le van írva. És a programot nem csak a számítógép olvassa: azok is, akik majd javítani fogják. Ezért írnak bele megjegyzéseket.

**Tovább:** Amikor a program fut, a memóriában él, és a processzor egymás után hajtja végre a parancsait. → [Egy eszköz belsejében](#c/uvnitr-zarizeni)
