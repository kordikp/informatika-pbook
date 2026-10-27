---
id: svet-weby-program-hu
translationOf: svet-weby-program
lang: hu
type: spine
title: "Egy oldal három nyelve"
readingTime: 1
standalone: true
teaser: "Egy oldal, amelyen egy gomb számolja a kattintásokat, öt sor HTML-ből és öt sor JavaScriptből áll. A böngésző szó szerint olvassa őket, fentről lefelé."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Mit csinál a számítógép, ha a programban felcserélsz két parancsot, és miért?"
recallA: "Az új sorrendben hajtja végre őket, akkor is, ha ennek nincs értelme, mert semmit sem gondol hozzá. Ezért az eredmény megváltozhat."
lens: weby
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: code-walkthrough
status: accepted
concept: program
state: edited
highlights:
  - "A kód egy algoritmus leírása programozási nyelven (blokkos és szöveges is)"
  - "Szekvencia: a parancsok abban a sorrendben futnak le, ahogyan le vannak írva"
  - "Bemenet → feldolgozás → kimenet; a felhasználói felület az a hely, ahol találkozol velük"
carriers: prose|code
---

Egy oldal, amelyen egy gomb számolja a kattintásokat, öt sor HTML-ből és öt sor JavaScriptből áll. A böngésző szó szerint olvassa őket, fentről lefelé.

A web három nyelven beszél. A **HTML** megmondja, mi van az oldalon: cím, bekezdés, gomb. A **CSS** megmondja, hogyan néz ki. A **JavaScript** megmondja, mi történik, amikor csinálsz valamit. Csak a JavaScript **programozási nyelv**, egy algoritmus leírása, amelyet a böngésző végrehajt. A HTML és a CSS csak leírja az oldalt.

```html
<p>Kattintások: <span id="szam">0</span></p>
<button id="katt">Kattints!</button>
<script>
let szam = 0;
document.getElementById("katt").onclick = function () {
  szam = szam + 1;
  document.getElementById("szam").textContent = szam;
};
</script>
```

Ez az egész program. A **bemenet** a kattintás, a **feldolgozás** hozzáad egyet, a **kimenet** az új szám az oldalon. A gomb és a szám a **felhasználói felület**, az a hely, ahol az ember találkozik a programmal.

A böngésző **abban a sorrendben** hajtja végre az utasításokat, **ahogyan le vannak írva**. Cserélj meg két sort a függvényen belül, és az első kattintás után az oldal 0-t mutat: a szám előbb íródik ki, mint hogy hozzáadnánk, és onnantól mindig egy lépéssel le van maradva. Ha pedig a `<script>` részt a gomb fölé teszed, a szkript előbb keresi a gombot, mint hogy az létezne az oldalon, és nem találja meg. A számítógép nem találja ki, mire gondoltál.

Ugyanezt a programot blokkokból is össze lehet rakni. A Scratchben ez a *ha erre a szereplőre kattintanak → változtasd a számot 1-gyel* blokk lenne. **A blokkos és a szöveges nyelv** ugyanazt az algoritmust írja le, csak más ábécével.

**Próbáld ki!** Mentsd el a kódot szamlalo.html néven, és nyisd meg a böngészőben. Aztán cserélj meg két sort a függvényen belül. Pontosan mi változik, és miért?

**Tovább a weboldalak világában:** → [A szétesett körte](#svet-weby-kodovani-hu)
