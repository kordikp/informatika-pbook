---
id: svet-weby-program-sk
translationOf: svet-weby-program
lang: sk
type: spine
title: "Tri jazyky jednej stránky"
readingTime: 1
standalone: true
teaser: "Stránka s tlačidlom, ktoré počíta kliknutia, má päť riadkov HTML a päť riadkov JavaScriptu. Prehliadač ich prečíta doslova, zhora nadol."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Čo urobí počítač, keď v programe prehodíš dva príkazy, a prečo?"
recallA: "Vykoná ich v novom poradí, aj keď to nedáva zmysel, pretože nič nedomýšľa. Výsledok sa preto môže zmeniť."
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
  - "Kód je zápis algoritmu v programovacom jazyku (blokovom aj textovom)"
  - "Sekvencia: príkazy sa vykonávajú v poradí, v akom sú zapísané"
  - "Vstup → spracovanie → výstup; používateľské rozhranie je miesto, kde ich stretneš"
carriers: prose|code
---

Stránka s tlačidlom, ktoré počíta kliknutia, má päť riadkov HTML a päť riadkov JavaScriptu. Prehliadač ich prečíta doslova, zhora nadol.

Web hovorí tromi jazykmi. **HTML** hovorí, čo na stránke je: nadpis, odsek, tlačidlo. **CSS** hovorí, ako to vyzerá. **JavaScript** hovorí, čo sa stane, keď niečo urobíš. Len JavaScript je **programovací jazyk**, zápis algoritmu, ktorý prehliadač vykoná. HTML a CSS stránku iba opisujú.

```html
<p>Kliknutia: <span id="pocet">0</span></p>
<button id="klik">Klikni!</button>
<script>
let pocet = 0;
document.getElementById("klik").onclick = function () {
  pocet = pocet + 1;
  document.getElementById("pocet").textContent = pocet;
};
</script>
```

Tu je celý program. **Vstup** je kliknutie, **spracovanie** pripočíta jednotku, **výstup** je nové číslo na stránke. Tlačidlo a číslo sú **používateľské rozhranie**, miesto, kde sa človek s programom stretne.

Prehliadač vykonáva príkazy **v poradí, v akom sú zapísané**. Vymeň dva riadky vnútri funkcie a stránka po prvom kliknutí ukáže 0: číslo sa vypíše skôr, než sa pripočíta, a potom je stále o krok pozadu. A keď presunieš `<script>` nad tlačidlo, skript ho hľadá skôr, než tlačidlo na stránke existuje, a nenájde ho. Počítač nedomýšľa, čo si myslel.

Rovnaký program sa dá poskladať aj z blokov. V Scratchi by to bol blok *keď klikneš na túto postavu → zmeň počet o 1*. **Blokový aj textový jazyk** zapisujú rovnaký algoritmus, len inou abecedou.

**Vyskúšaj to!** Ulož kód do súboru pocitadlo.html a otvor ho v prehliadači. Potom vymeň dva riadky vnútri funkcie. Čo presne sa zmení a prečo?

**Ďalej vo svete webov:** → [Rozsypaný čaj](#svet-weby-kodovani-sk)
