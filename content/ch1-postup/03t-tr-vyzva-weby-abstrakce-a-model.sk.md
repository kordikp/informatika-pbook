---
id: vyzva-weby-abstrakce-a-model-sk
translationOf: vyzva-weby-abstrakce-a-model
lang: sk
type: challenge
title: "Osnova pre uši"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Web používajú aj nevidiaci ľudia."
voice: universal
parent: svet-weby-abstrakce-a-model-sk
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

Web používajú aj nevidiaci ľudia. Čítačka obrazovky im ho číta nahlas a klávesom H skáču z nadpisu na nadpis, ako ty očami. Tvoj náčrt webu teda nie je len obrázok. Je to osnova, ktorú bude niekto počúvať. Znie dobre?

<!-- task -->

Takto napísal stránku krúžku kamarát:

```
<div class="velky">Krúžok robotiky</div>
<h3>Kedy sa stretávame</h3>
<p>Každý utorok od 15:00. Rozvrh nájdeš <a href="rozvrh.html">tu</a>.</p>
<h1>Fotky z akcií</h1>
<img src="soutez.jpg">
<img src="vlnka.svg">
<h2>Prihláška</h2>
<p style="color:#999999">Povinné polia sú červenou.</p>
<input placeholder="Meno">
<div onclick="odoslat()">Odoslať</div>
```

1. Napíš, čo bude počuť človek, ktorý skáče len po nadpisoch. Prečo to nedáva zmysel?
2. Nájdi aspoň **7 problémov** prístupnosti a ku každému napíš opravu v HTML.
3. Kontrast textu a pozadia sa počíta ako (L1 + 0,05) : (L2 + 0,05), kde L je relatívny jas farby (biela 1, čierna 0) a svetlejšia farba je L1. Sivá #999999 má L = 0,319, sivá #767676 má L = 0,181. Vypočítaj kontrast oboch na bielom pozadí. Ktorá prejde pravidlom WCAG pre bežný text (aspoň 4,5 : 1)?

**Úspech:** osnova h1 → h2 → h2, aspoň 7 správnych opráv a obe čísla kontrastu.

<!-- hint -->

Nadpis je pre čítačku len to, čo je v h1 až h6. Div s veľkým písmom za nadpis nepovažuje, aj keď tak vyzerá.

<!-- hint -->

Pri každom riadku sa pýtaj: Spozná človek bez obrazovky, čo to je? Dostane sa k tomu bez myši, len klávesom Tab? Spozná to aj niekto, kto nerozlišuje farby?

<!-- hint -->

Kontrast: 1,05 : (0,319 + 0,05) a 1,05 : (0,181 + 0,05).

<!-- solution -->

1. Čítačka prečíta: „nadpis úrovne 3, Kedy sa stretávame. Nadpis úrovne 1, Fotky z akcií. Nadpis úrovne 2, Prihláška.“ Názov krúžku úplne chýba a úrovne sú naruby, ako kniha, kde kapitola 1 príde až po podkapitole.
2. Problémy a opravy:
- div „Krúžok robotiky“ → `<h1>`;
- h3 „Kedy sa stretávame“ → `<h2>`;
- h1 „Fotky z akcií“ → `<h2>` (h1 má byť na stránke len jeden);
- odkaz „tu“ → odkaz s textom „Rozvrh krúžku“;
- soutez.jpg bez popisu → `alt="Náš robot na krajskej súťaži"`;
- vlnka.svg je len ozdoba → `alt=""`, aby ju čítačka preskočila;
- informácia len farbou → hviezdička a slovo „povinné“;
- input bez popisku → `<label for="meno">Meno</label>` a `id="meno"`;
- div ako tlačidlo → `<button>Odoslať</button>`, funguje s Tab aj Enter.
3. #999999: 1,05 : 0,369 = **2,85 : 1**, neprejde. #767676: 1,05 : 0,231 = **4,54 : 1**, prejde, ale tesne. Preto je #767676 známa ako najsvetlejšia sivá, ktorú na bielom ešte smieš použiť na text.

<!-- more -->

Zapni si čítačku, ktorú už máš v zariadení: VoiceOver na iPhone a Macu, TalkBack na Androide, Moderátor vo Windows. Zavri oči a skús na svojom webe nájsť rozvrh. Potom prejdi časť o prístupnosti v [MDN Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development) (po anglicky).
