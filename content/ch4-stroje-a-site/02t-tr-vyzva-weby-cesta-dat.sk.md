---
id: vyzva-weby-cesta-dat-sk
translationOf: vyzva-weby-cesta-dat
lang: sk
type: challenge
title: "Vodopád pol sekundy"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Web krúžku má len pár kilobajtov, a aj tak sa na mobile načítava skoro sekundu."
voice: universal
parent: svet-weby-cesta-dat-sk
diagram: null
core: false
status: accepted
concept: cesta-dat
state: edited
lens: weby
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Web krúžku má len pár kilobajtov, a aj tak sa na mobile načítava skoro sekundu. Nezdržiavajú ho veľké súbory. Zdržiava ho čakanie. Spočítaj, koľkokrát musí prehliadač čakať za sebou, a nájdi jeden riadok, ktorý čakanie skráti.

<!-- task -->

**Pravidlá modelu:**
- Jedna cesta k serveru a späť (RTT, round-trip time) trvá **100 ms**. Server stojí v USA.
- Každý z týchto krokov stojí jednu cestu: zistenie IP adresy (DNS), nadviazanie spojenia (TCP), dohoda o šifrovaní (TLS, teda to s v https) a stiahnutie každého súboru.
- Súbory sú malé, čas sťahovania zanedbaj.
- Po nadviazaní spojenia môže prehliadač žiadať o viac súborov naraz, ale len o tie, o ktorých už vie.

**Stránka:** `index.html` odkazuje na `styl.css`, `hra.js` a `foto.jpg`. V `styl.css` je odkaz na písmo `pismo.woff2`. Skript `hra.js` po spustení stiahne `data.json`.

1. Za koľko ms dorazí index.html?
2. Kedy dorazí písmo, teda kedy sa text ukáže v správnom fonte?
3. Kedy dorazí data.json?
4. Server sa presťahuje do Prahy a RTT klesne na 10 ms. Kedy teraz dorazí písmo?
5. Server je zase v USA. Do index.html pridáš `<link rel="preload" href="pismo.woff2" as="font">`, ktorý prehliadaču povie o písme vopred. Kedy písmo dorazí teraz?

**Úspech:** päť správnych čísel a jedna veta, čo tento web zdržiava najviac.

<!-- hint -->

Kým príde prvý bajt HTML, prebehnú za sebou štyri cesty: DNS, TCP, TLS a samotné HTML.

<!-- hint -->

CSS, JS a fotku chce prehliadač naraz, lebo o nich vie z HTML. O písme sa však dozvie, až keď prečíta CSS. Nakresli si to ako schody: každý schod je jedna cesta.

<!-- hint -->

Spočítaj schody v najdlhšom rade a vynásob ich RTT.

<!-- solution -->

1. DNS + TCP + TLS + HTML = 4 × 100 = **400 ms**.
2. CSS dorazí v 500 ms a až potom sa prehliadač dozvie o písme: **600 ms**.
3. hra.js dorazí v 500 ms, data.json v **600 ms**. Fotka už v 500 ms.
4. Stále 6 schodov, ale po 10 ms: **60 ms**. Desaťkrát bližšie znamená desaťkrát rýchlejšie.
5. Písmo sa teraz sťahuje spolu s CSS: **500 ms**. Jeden riadok ušetril 100 ms, šestinu celého času.

Záver: malý web nezdržiava veľkosť, ale **počet čakaní za sebou** a **vzdialenosť servera**. Preto veľké weby skracujú reťaze (preload, CSS vložené priamo do HTML) a dávajú kópie súborov na servery blízko ľudí (CDN).

<!-- more -->

Otvor F12, záložku Sieť (Network), obnov svoj obľúbený web a pozri sa na stĺpec Waterfall (vodopád). Nájdi najdlhšiu reťaz súborov, kde jeden čaká na druhý. Potom spusti v F12 nástroj Lighthouse a porovnaj jeho rady so svojím modelom. Kde sa model mýli, lebo súbory nie sú malé?
