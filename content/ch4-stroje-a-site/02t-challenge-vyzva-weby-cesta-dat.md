---
id: vyzva-weby-cesta-dat
type: challenge
title: "Vodopád půl vteřiny"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Web kroužku má jen pár kilobajtů, a stejně se na mobilu načítá skoro vteřinu."
voice: universal
parent: svet-weby-cesta-dat
diagram: null
core: false
lang: cs
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

Web kroužku má jen pár kilobajtů, a stejně se na mobilu načítá skoro vteřinu. Nezdržují ho velké soubory. Zdržuje ho čekání. Spočítej, kolikrát musí prohlížeč čekat za sebou, a najdi jeden řádek, který čekání zkrátí.

<!-- task -->

**Pravidla modelu:**
- Jedna cesta k serveru a zpátky (RTT, round-trip time) trvá **100 ms**. Server stojí v USA.
- Každý z těchto kroků stojí jednu cestu: zjištění IP adresy (DNS), navázání spojení (TCP), domluva šifrování (TLS, tedy to s v https) a stažení každého souboru.
- Soubory jsou malé, dobu stahování zanedbej.
- Po navázání spojení může prohlížeč žádat o víc souborů najednou, ale jen o ty, o kterých už ví.

**Stránka:** `index.html` odkazuje na `styl.css`, `hra.js` a `foto.jpg`. Ve `styl.css` je odkaz na písmo `pismo.woff2`. Skript `hra.js` po spuštění stáhne `data.json`.

1. Za kolik ms dorazí index.html?
2. Kdy dorazí písmo, tedy kdy se text ukáže ve správném fontu?
3. Kdy dorazí data.json?
4. Server se přestěhuje do Prahy a RTT klesne na 10 ms. Kdy teď dorazí písmo?
5. Server je zase v USA. Do index.html přidáš `<link rel="preload" href="pismo.woff2" as="font">`, který prohlížeči řekne o písmu předem. Kdy písmo dorazí teď?

**Úspěch:** pět správných čísel a jedna věta, co tenhle web zdržuje nejvíc.

<!-- hint -->

Než přijde první bajt HTML, proběhnou za sebou čtyři cesty: DNS, TCP, TLS a samotné HTML.

<!-- hint -->

CSS, JS a fotku chce prohlížeč naráz, protože o nich ví z HTML. O písmu se ale dozví, až přečte CSS. Nakresli si to jako schody: každý schod je jedna cesta.

<!-- hint -->

Spočítej schody na nejdelší řadě a vynásob je RTT.

<!-- solution -->

1. DNS + TCP + TLS + HTML = 4 × 100 = **400 ms**.
2. CSS dorazí v 500 ms a teprve pak se prohlížeč dozví o písmu: **600 ms**.
3. hra.js dorazí v 500 ms, data.json v **600 ms**. Fotka už v 500 ms.
4. Pořád 6 schodů, ale po 10 ms: **60 ms**. Desetkrát blíž znamená desetkrát rychleji.
5. Písmo se teď stahuje spolu s CSS: **500 ms**. Jeden řádek ušetřil 100 ms, šestinu celého času.

Závěr: malý web nezdržuje velikost, ale **počet čekání za sebou** a **vzdálenost serveru**. Proto velké weby zkracují řetězy (preload, CSS vložené přímo do HTML) a dávají kopie souborů na servery blízko lidí (CDN).

<!-- more -->

Otevři F12, záložku Síť (Network), obnov svůj oblíbený web a podívej se na sloupec Waterfall (vodopád). Najdi nejdelší řetěz souborů, kde jeden čeká na druhý. Pak spusť v F12 nástroj Lighthouse a porovnej jeho rady se svým modelem. Kde se model plete, protože soubory nejsou malé?
