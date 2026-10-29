---
id: vyzva-weby-abstrakce-a-model-hu
translationOf: vyzva-weby-abstrakce-a-model
lang: hu
type: challenge
title: "Vázlat a fülnek"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "A weboldalakat vak emberek is használják."
voice: universal
parent: svet-weby-abstrakce-a-model-hu
diagram: null
core: false
status: accepted
concept: abstrakce-a-model
state: edited
lens: weby
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|code
---

A weboldalakat vak emberek is használják. A képernyőolvasó felolvassa nekik az oldalt, és a H billentyűvel címsorról címsorra ugranak, ahogy te a szemeddel. A weboldalad vázlata tehát nem csak kép. Ez egy vázlat, amelyet valaki hallgatni fog. Jól hangzik?

<!-- task -->

Így írta meg egy barátod a szakkör oldalát:

```
<div class="velky">Robotikaszakkör</div>
<h3>Mikor találkozunk</h3>
<p>Minden kedden 15:00-tól. Az órarendet <a href="rozvrh.html">itt</a> találod.</p>
<h1>Fotók a programokról</h1>
<img src="soutez.jpg">
<img src="vlnka.svg">
<h2>Jelentkezés</h2>
<p style="color:#999999">A kötelező mezők pirosak.</p>
<input placeholder="Név">
<div onclick="odeslat()">Küldés</div>
```

1. Írd le, mit hall az, aki csak a címsorok között ugrál. Miért nincs ennek értelme?
2. Találj legalább **7 akadálymentességi hibát**, és mindegyikhez írd le a javítást HTML-ben.
3. A szöveg és a háttér kontrasztját így számoljuk: (L1 + 0,05) : (L2 + 0,05), ahol L a szín relatív fényessége (fehér 1, fekete 0), és a világosabb szín az L1. A #999999 szürke L értéke 0,319, a #767676 szürkéé 0,181. Számold ki mindkettő kontrasztját fehér háttéren. Melyik megy át a WCAG szabályán a normál szövegre (legalább 4,5 : 1)?

**Siker:** h1 → h2 → h2 vázlat, legalább 7 helyes javítás és mindkét kontrasztszám.

<!-- hint -->

A képernyőolvasó számára címsor csak az, ami h1–h6 között van. A nagy betűs divet nem tekinti címsornak, még ha annak is látszik.

<!-- hint -->

Minden sornál kérdezd meg: Felismeri-e képernyő nélkül is valaki, hogy mi ez? Eljut-e hozzá egér nélkül, csak a Tab billentyűvel? Felismeri-e az is, aki nem különbözteti meg a színeket?

<!-- hint -->

Kontraszt: 1,05 : (0,319 + 0,05) és 1,05 : (0,181 + 0,05).

<!-- solution -->

1. A képernyőolvasó ezt olvassa fel: „3. szintű címsor, Mikor találkozunk. 1. szintű címsor, Fotók a programokról. 2. szintű címsor, Jelentkezés.” A szakkör neve teljesen hiányzik, és a szintek fordítva vannak, mint egy könyvben, ahol az 1. fejezet csak az alfejezet után jön.
2. Hibák és javítások:
- a „Robotikaszakkör” div → `<h1>`;
- a „Mikor találkozunk” h3 → `<h2>`;
- a „Fotók a programokról” h1 → `<h2>` (h1-ből egy oldalon csak egy legyen);
- az „itt” link → „A szakkör órarendje” szövegű link;
- a soutez.jpg leírás nélkül → `alt="A robotunk a megyei versenyen"`;
- a vlnka.svg csak díszítés → `alt=""`, hogy a képernyőolvasó átugorja;
- információ csak színnel → csillag és a „kötelező” szó;
- felirat nélküli input → `<label for="jmeno">Név</label>` és `id="jmeno"`;
- div gombként → `<button>Küldés</button>`, működik Tabbal és Enterrel is.
3. #999999: 1,05 : 0,369 = **2,85 : 1**, nem megy át. #767676: 1,05 : 0,231 = **4,54 : 1**, átmegy, de éppen csak. Ezért ismert a #767676 úgy, mint a legvilágosabb szürke, amelyet fehér háttéren még szabad szövegre használni.

<!-- more -->

Kapcsold be a képernyőolvasót, amely már megvan az eszközödön: VoiceOver iPhone-on és Macen, TalkBack Androidon, Narrátor Windowson. Csukd be a szemed, és próbáld megtalálni az órarendet a saját weboldaladon. Aztán nézd át az akadálymentességről szóló részt az [MDN Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development) oldalon (angolul).
