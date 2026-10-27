---
id: svet-aplikace-informacni-system-hu
translationOf: svet-aplikace-informacni-system
lang: hu
type: spine
title: "Ki mit csinálhat az osztály appjában"
readingTime: 1
standalone: true
teaser: "Az osztálykirándulás appjában mindenki látja, ki mennyit fizetett? Bárki törölheti a listát? Vagy csak a tanárnő? Erről a terv dönt, nem a véletlen."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Miért nem látod az iskolai rendszerben az osztálytársaid jegyeit, a tanár viszont igen?"
recallA: "A rendszer szerepek szerint osztja ki a jogokat. A tanárnak a munkájához kellenek az osztály jegyei, a tanulónak csak a sajátjai. Minden szerep csak azt kapja meg, amire szüksége van."
lens: aplikace
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: informacni-system
state: edited
highlights:
  - "A rendszer célja: milyen igényt szolgál, és milyen adatokat tart nyilván"
  - "Szerepek és hozzáférési jogok (olvasó, hozzászóló, szerkesztő, adminisztrátor)"
  - "A legkisebb jogosultság elve; a „bárki, akinél a link van” megosztás kockázat"
carriers: prose|table
---

Az osztálykirándulás appjában mindenki látja, ki mennyit fizetett? Bárki törölheti a listát? Vagy csak a tanárnő? Erről a terv dönt, nem a véletlen.

A kirándulás appja egy kis **információs rendszer**. Adatokat tart nyilván, ki jön, ki fizetett és kinek van allergiája, és egyetlen **célt** szolgál: a kirándulás megszervezését. Mielőtt megépíted, gondold végig a **szerepeket** és a **hozzáférési jogaikat**:

| Szerep | Mit csinálhat |
|---|---|
| tanuló | látja a programot és a saját befizetését, jelentkezik a kirándulásra |
| szülő | látja a saját gyereke befizetését és allergiáit |
| osztálypénztáros | rögzíti a befizetéseket, látja, ki nem fizetett még |
| tanárnő (adminisztrátor) | módosítja a programot, kiosztja a szerepeket |

A **legkisebb jogosultság elve** érvényes: minden szerep csak azt kapja meg, ami a munkájához kell. A pénztárosnak a befizetések kellenek, nem az allergiák. A tanulónak nem kell látnia, ki nem fizetett. Ha valakinek felesleges plusz jogai vannak, minden hibája vagy ellopott fiókja nagyobb kárt okoz.

A kis appok leggyakoribb lyuka a **mindenkinek szóló hivatkozás**: egy megosztott táblázat a „bárki szerkesztheti, akinél a link van” beállítással. Valaki továbbküldi a linket egy másik osztálynak vagy beteszi egy közösségi csoportba, és hirtelen bárki olvashatja és módosíthatja az allergiákat tartalmazó listát. Konkrét emberek nevével ossz meg, ne linkkel.

És a második kérdés: milyen adatokat érdemes egyáltalán **nyilvántartani**. Az allergiákra a kirándulás vezetőjének szüksége van, a személyi számra senkinek. Amit az app nem gyűjt, az nem is szivároghat ki.

**Próbáld ki!** Válassz egy appot vagy megosztott dokumentumot, amelyet az osztályotok használ. Kinek milyen szerepe van benne? Van valakinek több joga, mint amennyi kell neki?

**Tovább az alkalmazások világában:** → [Az app szerint kevesebbet jársz](#svet-aplikace-z-dat-informace-hu)
