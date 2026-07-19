---
id: ch8-html
type: spine
title: "HTML: kostra stránky"
readingTime: 3
standalone: true
teaser: "Pár značek v obyčejném textáku — a máš svou první webovku. Doslova dnes."
voice: universal
parent: null
diagram: tri-vrstvy-webu
core: true
recallQ: "Co určuje HTML a proč jde o význam, ne o vzhled?"
recallA: "HTML značkami určuje strukturu a význam obsahu: co je nadpis, odstavec, obrázek, odkaz. Vzhled řeší až CSS — sémantika (význam) slouží prohlížečům, vyhledávačům i čtečkám pro nevidomé."
highlights:
  - "HTML je kostra stránky — určuje, co je nadpis, odstavec, obrázek nebo odkaz."
  - "HTML nepopisuje vzhled, ale význam."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch8-html
state: core
carriers: prose|diagram|code
---

Slibovaná chvíle: přestáváš web číst a začínáš ho psát. Budeš potřebovat jen poznámkový blok a prohlížeč — nic víc. HTML totiž není programovací jazyk, ale **značkovací**: obyčejný text, kterému značkami řekneš, co je co.

**HTML je kostra stránky — určuje, co je nadpis, odstavec, obrázek nebo odkaz.** Značky (tagy) se píší do špičatých závorek a většinou fungují v páru — otevírací a zavírací:

```html
<h1>Můj první web</h1>
<p>Ahoj! Tohle je odstavec o mně a mém psovi.</p>
<img src="pes.jpg" alt="Můj pes Rek">
<a href="https://mapy.cz">Kde bydlím</a>
```

`h1` = hlavní nadpis (h2, h3… jsou podnadpisy), `p` = odstavec, `img` = obrázek, `a` = odkaz. Ulož tohle jako `index.html`, otevři v prohlížeči — a máš webovou stránku. Vážně, je to celé.

Teď to důležité, co odlišuje toho, kdo HTML chápe, od toho, kdo ho jen opisuje: **HTML nepopisuje vzhled, ale význam.** Značka `h1` neříká „velké tučné písmo" — říká „tohle je hlavní téma stránky". Že to prohlížeč zobrazí velce, je jen výchozí kosmetika, kterou příště přebarví CSS. Významu se říká **sémantika** a stojí za to ji dodržovat, protože tvůj kód nečtou jen lidé:

- **Vyhledávače** podle nadpisů a struktury chápou, o čem stránka je (základ SEO).
- **Čtečky pro nevidomé** čtou stránku po významech: „nadpis první úrovně, odstavec, odkaz". Stránka z čistých „udělej to velké" značek je pro ně bludiště.
- **AI nástroje**, které dnes weby čtou a generují, se opírají o tutéž strukturu.

Proto: nadpis je `h1`–`h6`, ne ztučněný text. Seznam je `ul`/`li`, ne odstavce s pomlčkami. Význam nejdřív, vzhled potom.

**Zkus to!** Vytvoř `index.html` o svém koníčku: jeden `h1`, dva `h2`, pár odstavců, obrázek a odkaz na oblíbený web. Pak si zobraz zdrojový kód libovolné velké stránky (Ctrl+U) — poznáváš značky? (Je jich tam víc, ale kostra je stejná jako ta tvoje.)

> **Věděl/a jsi?** První verze HTML z roku 1991 měla jen kolem 18 značek — a většina z nich (nadpisy, odstavce, odkazy) funguje dodnes. Odkaz `<a>` je přitom celý trik, který dělá z textů „síť": web bez odkazů by byl jen hromada dokumentů.

Kostru máš. Jenže stránka vypadá jako dokument z minulého století — čas obléknout ji. Přichází CSS.
