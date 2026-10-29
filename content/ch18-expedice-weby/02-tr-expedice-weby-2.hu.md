---
id: expedice-weby-2-hu
translationOf: expedice-weby-2
lang: hu
type: spine
title: "100 kilobájtos keret"
readingTime: 1
standalone: false
teaser: "Ema terve: | fájl | méret | |---|---| | index.html | 8 kB | | styl.css | 6 kB | | betűtípus az internetről, 2 változat | 2 × 25 kB | | fotó a mobilról | 3,2 MB…"
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-weby-2
conceptTitle: "100 kilobájtos keret"
objective: "Ema terve: | fájl | méret | |---|---| | index.html | 8 kB | | styl.css | 6 kB | | betűtípus az internetről, 2 változat | 2 × 25 kB | | fotó a mobilról | 3,2 MB…"
state: edited
carriers: prose|table
---

**🧩 Kihívás** · 2. lépés / 5 · [Száz kilobájt](#expedice-weby-hu)

**Ema terve:**

| fájl | méret |
|---|---|
| index.html | 8 kB |
| styl.css | 6 kB |
| betűtípus az internetről, 2 változat | 2 × 25 kB |
| fotó a mobilról | 3,2 MB |
| jQuery könyvtár egyetlen gomb miatt | 87 kB |

**Feladat:**
1. Hány kB ez összesen (1 MB-ot számolj 1000 kB-nak)? Hányszorosan lépi túl a keretet?
2. Javasolj módosításokat, hogy az oldal beférjen 100 kB-ba, és majdnem ugyanúgy nézzen ki. Mindegyikhez írd oda, mennyit spórol.
3. Mérd meg a saját oldaladat: F12 → Hálózat (Network) → frissítsd az oldalt. Alul látod, mennyi adat ment át, és hány kérés volt.

**Sikerkritérium:** az összeg legfeljebb 100 kB, és semmilyen tartalom nem tűnt el.

**Ellenőrzés:** összesen 3351 kB, vagyis nagyjából 33,5-szer lépi túl a keretet. Az egyik lehetséges út:
- a betűtípust a rendszer `font-family: system-ui` betűje váltja: 0 kB 50 kB helyett;
- a fotót 800 pixel szélesre kicsinyíted, és WebP-ként vagy 75 körüli minőségű JPG-ként mented: kb. 60 kB 3200 kB helyett;
- a jQueryt öt sor saját JavaScript váltja: kb. 0,3 kB 87 kB helyett.

Az eredmény 74 kB körül van. A legnagyobb megtakarítás szinte mindig a fotó. Az oldal alján lévő fotók `loading="lazy"` jelzést kapnak, és csak akkor töltődnek le, amikor a látogató odagörget.

**Következő lépés:** [Elemezz egy weboldalt, amely húsz éve működik](#expedice-weby-3-hu)
