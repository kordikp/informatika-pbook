---
id: vyzva-weby-abstrakce-a-model
type: challenge
title: "Osnova pro uši"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Web používají i nevidomí lidé."
voice: universal
parent: svet-weby-abstrakce-a-model
diagram: null
core: false
lang: cs
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

Web používají i nevidomí lidé. Čtečka obrazovky jim ho čte nahlas a klávesou H skáčou z nadpisu na nadpis, jako ty očima. Tvůj náčrt webu tedy není jen obrázek. Je to osnova, kterou někdo bude poslouchat. Zní dobře?

<!-- task -->

Takhle napsal stránku kroužku kamarád:

```
<div class="velky">Kroužek robotiky</div>
<h3>Kdy se scházíme</h3>
<p>Každé úterý od 15:00. Rozvrh najdeš <a href="rozvrh.html">zde</a>.</p>
<h1>Fotky z akcí</h1>
<img src="soutez.jpg">
<img src="vlnka.svg">
<h2>Přihláška</h2>
<p style="color:#999999">Povinná pole jsou červeně.</p>
<input placeholder="Jméno">
<div onclick="odeslat()">Odeslat</div>
```

1. Napiš, co uslyší člověk, který skáče jen po nadpisech. Proč to nedává smysl?
2. Najdi aspoň **7 problémů** přístupnosti a ke každému napiš opravu v HTML.
3. Kontrast textu a pozadí se počítá jako (L1 + 0,05) : (L2 + 0,05), kde L je relativní jas barvy (bílá 1, černá 0) a světlejší barva je L1. Šedá #999999 má L = 0,319, šedá #767676 má L = 0,181. Spočítej kontrast obou na bílém pozadí. Která projde pravidlem WCAG pro běžný text (aspoň 4,5 : 1)?

**Úspěch:** osnova h1 → h2 → h2, aspoň 7 správných oprav a obě čísla kontrastu.

<!-- hint -->

Nadpis je pro čtečku jen to, co je v h1 až h6. Div s velkým písmem za nadpis nepovažuje, i když tak vypadá.

<!-- hint -->

U každého řádku se ptej: Pozná člověk bez obrazovky, co to je? Dostane se k tomu bez myši, jen klávesou Tab? Pozná to i někdo, kdo nerozlišuje barvy?

<!-- hint -->

Kontrast: 1,05 : (0,319 + 0,05) a 1,05 : (0,181 + 0,05).

<!-- solution -->

1. Čtečka přečte: „nadpis úrovně 3, Kdy se scházíme. Nadpis úrovně 1, Fotky z akcí. Nadpis úrovně 2, Přihláška.“ Název kroužku chybí úplně a úrovně jsou naruby, jako kniha, kde kapitola 1 přijde až po podkapitole.
2. Problémy a opravy:
- div „Kroužek robotiky“ → `<h1>`;
- h3 „Kdy se scházíme“ → `<h2>`;
- h1 „Fotky z akcí“ → `<h2>` (h1 má být na stránce jen jedno);
- odkaz „zde“ → odkaz s textem „Rozvrh kroužku“;
- soutez.jpg bez popisu → `alt="Náš robot na krajské soutěži"`;
- vlnka.svg je jen ozdoba → `alt=""`, aby ji čtečka přeskočila;
- informace jen barvou → hvězdička a slovo „povinné“;
- input bez popisku → `<label for="jmeno">Jméno</label>` a `id="jmeno"`;
- div jako tlačítko → `<button>Odeslat</button>`, funguje s Tab i Enter.
3. #999999: 1,05 : 0,369 = **2,85 : 1**, neprojde. #767676: 1,05 : 0,231 = **4,54 : 1**, projde, ale těsně. Proto je #767676 známá jako nejsvětlejší šedá, kterou na bílém ještě smíš použít pro text.

<!-- more -->

Zapni si čtečku, kterou už máš v zařízení: VoiceOver na iPhonu a Macu, TalkBack na Androidu, Předčítání ve Windows. Zavři oči a zkus na svém webu najít rozvrh. Pak projdi část o přístupnosti v [MDN Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development) (anglicky).
