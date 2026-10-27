---
id: svet-weby-program
type: spine
title: "Tři jazyky jedné stránky"
readingTime: 1
standalone: true
teaser: "Stránka s tlačítkem, které počítá kliknutí, má pět řádků HTML a pět řádků JavaScriptu. Prohlížeč je přečte doslova, odshora dolů."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Co udělá počítač, když v programu prohodíš dva příkazy, a proč?"
recallA: "Vykoná je v novém pořadí, i když to nedává smysl, protože nic nedomýšlí. Výsledek se proto může změnit."
lang: cs
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
  - "Kód je zápis algoritmu v programovacím jazyce (blokovém i textovém)"
  - "Sekvence: příkazy se vykonávají v pořadí, v jakém jsou zapsané"
  - "Vstup → zpracování → výstup; uživatelské rozhraní je místo, kde je potkáš"
carriers: prose|code
---

Stránka s tlačítkem, které počítá kliknutí, má pět řádků HTML a pět řádků JavaScriptu. Prohlížeč je přečte doslova, odshora dolů.

Web mluví třemi jazyky. **HTML** říká, co na stránce je: nadpis, odstavec, tlačítko. **CSS** říká, jak to vypadá. **JavaScript** říká, co se stane, když něco uděláš. Jen JavaScript je **programovací jazyk**, zápis algoritmu, který prohlížeč vykoná. HTML a CSS stránku jen popisují.

```html
<p>Kliknutí: <span id="pocet">0</span></p>
<button id="klik">Klikni!</button>
<script>
let pocet = 0;
document.getElementById("klik").onclick = function () {
  pocet = pocet + 1;
  document.getElementById("pocet").textContent = pocet;
};
</script>
```

Tady je celý program. **Vstup** je kliknutí, **zpracování** přičte jedničku, **výstup** je nové číslo na stránce. Tlačítko a číslo jsou **uživatelské rozhraní**, místo, kde se člověk s programem potká.

Prohlížeč vykonává příkazy **v pořadí, v jakém jsou zapsané**. Prohoď dva řádky uvnitř funkce a stránka po prvním kliknutí ukáže 0: číslo se vypíše dřív, než se přičte, a pak je pořád o krok pozadu. A když přesuneš `<script>` nad tlačítko, skript ho hledá dřív, než tlačítko na stránce existuje, a nenajde ho. Počítač nedomýšlí, co jsi myslel.

Stejný program jde poskládat i z bloků. Ve Scratchi by to byl blok *když je kliknuto na tuto postavu → změň počet o 1*. **Blokový i textový jazyk** zapisují stejný algoritmus, jen jinou abecedou.

**Zkus to!** Ulož kód do souboru pocitadlo.html a otevři ho v prohlížeči. Pak prohoď dva řádky uvnitř funkce. Co přesně se změní a proč?

**Dál ve světě webů:** → [Rozsypaný čaj](#svet-weby-kodovani)
