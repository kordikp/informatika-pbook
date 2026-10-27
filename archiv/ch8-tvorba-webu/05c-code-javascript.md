---
id: ch8-code-javascript
type: spine
title: "Počítadlo kliknutí: první živý JavaScript"
readingTime: 3
standalone: true
teaser: "Dvě tlačítka, dvě proměnné — a stránka, která si pamatuje tvůj rekord. Rozebereme ji řádek po řádku."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Jak JavaScript udělá ze stránky aplikaci?"
recallA: "Čeká na události (třeba kliknutí) a v reakci upravuje DOM — strom prvků stránky. Prohlížeč každou změnu hned překreslí, bez nového načítání ze serveru."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: code-walkthrough
concept: ch8-interaktivita-javascript
state: edited
status: accepted
carriers: prose|code
---

Malá hra na jedné stránce: klikej na tlačítko co nejrychleji. „Znovu" začne novou sérii, ale rekord zůstane stát. Celé je to jeden soubor:

```html
<p>Kliknutí: <span id="pocet">0</span> | Rekord: <span id="rekord">0</span></p>
<button id="klik">Klikni!</button>
<button id="reset">Znovu</button>

<script>
let pocet = 0;
let rekord = 0;
document.getElementById("klik").onclick = function() {
  pocet = pocet + 1;
  document.getElementById("pocet").textContent = pocet;
  if (pocet > rekord) {
    rekord = pocet;
    document.getElementById("rekord").textContent = rekord;
  }
};
document.getElementById("reset").onclick = function() {
  pocet = 0;
  document.getElementById("pocet").textContent = 0;
};
</script>
```

**HTML nahoře:** odstavec se dvěma `<span>` — cedulky, na kterých svítí čísla. Každá má `id`, jmenovku, podle níž ji JavaScript najde. Pod nimi dvě tlačítka, taky s `id`. Zatím je to mrtvá stránka jako plakát — ožije až skriptem pod ní.

**`let pocet = 0;` a `let rekord = 0;`** — dvě proměnné, přesně jak je znáš z kapitoly o programování. Žijí v paměti stránky, dokud ji nezavřeš.

**`document.getElementById("klik").onclick = function() {…}`** — nejdůležitější řádek. Čti: „najdi prvek s id *klik*, a až na něm nastane událost kliknutí, spusť tuhle funkci." Kód uvnitř se neprovede hned — trpělivě čeká, klidně hodiny, na tvůj klik.

**Uvnitř funkce:** `pocet = pocet + 1` zvýší počítadlo v paměti. Další řádek přepíše `textContent` — text cedulky ve stromu stránky, kterému se říká DOM. V tu chvíli prohlížeč změnu okamžitě překreslí a ty vidíš nové číslo. Žádné načítání ze serveru — všechno se odehrává u tebe.

**`if (pocet > rekord)`** — obyčejná podmínka: rekord se přepíše, v proměnné i na obrazovce, jen ve chvíli, kdy ho opravdu překonáš.

**Druhá funkce dole:** stejný vzorec pro tlačítko *Znovu* — vynuluje `pocet` v paměti i na cedulce, ale na `rekord` nesáhne. Proto rekord přežije každý nový pokus.

Jedna poznámka letmo: zavřením stránky proměnné zmizí, a s nimi i rekord. Kdyby měl přežít do zítřka, dal by se jedním řádkem uložit do **localStorage** — malé trvalé paměti prohlížeče.

A teď odzoomuj: dvě události, dvě proměnné, pár úprav DOMu — a stránka se chová jako aplikace. Gmail ani mapy nedělají nic jiného, jen vzorec **událost → uprav DOM → prohlížeč překreslí** opakují tisíckrát za minutu.
