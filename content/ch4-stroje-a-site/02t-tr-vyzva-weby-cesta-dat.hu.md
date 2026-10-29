---
id: vyzva-weby-cesta-dat-hu
translationOf: vyzva-weby-cesta-dat
lang: hu
type: challenge
title: "Félmásodperces vízesés"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "A szakkör weboldala csak néhány kilobájt, mégis majdnem egy másodpercig töltődik a mobilon."
voice: universal
parent: svet-weby-cesta-dat-hu
diagram: null
core: false
status: accepted
concept: cesta-dat
state: edited
lens: weby
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose
---

A szakkör weboldala csak néhány kilobájt, mégis majdnem egy másodpercig töltődik a mobilon. Nem a nagy fájlok lassítják. A várakozás lassítja. Számold ki, hányszor kell a böngészőnek egymás után várnia, és keress egy sort, amely lerövidíti a várakozást.

<!-- task -->

**A modell szabályai:**
- Egy út a szerverig és vissza (RTT, round-trip time) **100 ms**. A szerver az USA-ban áll.
- Az alábbi lépések mindegyike egy utat igényel: az IP-cím kiderítése (DNS), a kapcsolat felépítése (TCP), a titkosítás egyeztetése (TLS, vagyis az s a https-ben) és minden egyes fájl letöltése.
- A fájlok kicsik, a letöltés idejét hagyd figyelmen kívül.
- A kapcsolat felépítése után a böngésző egyszerre több fájlt is kérhet, de csak azokat, amelyekről már tud.

**Az oldal:** az `index.html` a `styl.css`-re, a `hra.js`-re és a `foto.jpg`-re hivatkozik. A `styl.css`-ben hivatkozás van a `pismo.woff2` betűtípusra. A `hra.js` szkript elindulás után letölti a `data.json`-t.

1. Hány ms múlva érkezik meg az index.html?
2. Mikor érkezik meg a betűtípus, vagyis mikor jelenik meg a szöveg a helyes betűvel?
3. Mikor érkezik meg a data.json?
4. A szerver Prágába költözik, és az RTT 10 ms-ra csökken. Mikor érkezik most a betűtípus?
5. A szerver megint az USA-ban van. Az index.html-be beírod a `<link rel="preload" href="pismo.woff2" as="font">` sort, amely előre szól a böngészőnek a betűtípusról. Mikor érkezik most a betűtípus?

**Siker:** öt helyes szám és egy mondat arról, mi lassítja ezt a weboldalt a legjobban.

<!-- hint -->

Mielőtt megjön a HTML első bájtja, négy út zajlik le egymás után: DNS, TCP, TLS és maga a HTML.

<!-- hint -->

A CSS-t, a JS-t és a fotót a böngésző egyszerre kéri, mert a HTML-ből tud róluk. A betűtípusról viszont csak akkor értesül, amikor elolvassa a CSS-t. Rajzold le lépcsőként: minden lépcsőfok egy út.

<!-- hint -->

Számold meg a lépcsőfokokat a leghosszabb soron, és szorozd meg őket az RTT-vel.

<!-- solution -->

1. DNS + TCP + TLS + HTML = 4 × 100 = **400 ms**.
2. A CSS 500 ms-nál érkezik, és a böngésző csak ekkor tudja meg, hogy van betűtípus: **600 ms**.
3. A hra.js 500 ms-nál érkezik, a data.json **600 ms**-nál. A fotó már 500 ms-nál megvan.
4. Továbbra is 6 lépcsőfok, de mindegyik 10 ms: **60 ms**. Tízszer közelebb tízszer gyorsabbat jelent.
5. A betűtípus most a CSS-sel együtt töltődik le: **500 ms**. Egyetlen sor 100 ms-ot spórolt, a teljes idő hatodát.

Tanulság: egy kis weboldalt nem a mérete lassít, hanem az **egymás utáni várakozások száma** és a **szerver távolsága**. Ezért a nagy weboldalak lerövidítik a láncokat (preload, közvetlenül a HTML-be írt CSS), és a fájlok másolatait az emberekhez közeli szerverekre teszik (CDN).

<!-- more -->

Nyomd meg az F12-t, nyisd meg a Hálózat (Network) fület, frissítsd a kedvenc weboldaladat, és nézd meg a Waterfall (vízesés) oszlopot. Keresd meg a fájlok leghosszabb láncát, ahol az egyik a másikra vár. Aztán indítsd el az F12-ben a Lighthouse eszközt, és hasonlítsd össze a tanácsait a saját modelleddel. Hol téved a modell, mert a fájlok nem kicsik?
