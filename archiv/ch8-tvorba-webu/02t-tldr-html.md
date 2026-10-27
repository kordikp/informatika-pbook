---
id: ch8-tldr-html
type: spine
title: "HTML v kostce"
readingTime: 1
standalone: true
teaser: "Nejrychlejší cesta k pochopení, co doopravdy říkáš prohlížeči, když píšeš značky."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Co HTML určuje a proč jde o význam, ne o vzhled?"
recallA: "Značkami určuje strukturu a význam obsahu: co je nadpis, odstavec, obrázek, odkaz. Vzhled řeší až CSS — význam (sémantiku) potřebují prohlížeče, vyhledávače i čtečky pro nevidomé."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: tldr
genre: explainer
concept: ch8-html
state: edited
status: accepted
carriers: prose
---

HTML není programovací, ale **značkovací** jazyk: obyčejný text, kterému značkami (tagy) ve špičatých závorkách řekneš, co je co. Je to **kostra stránky** — určuje, co je nadpis (`h1`–`h6`), odstavec (`p`), obrázek (`img`) nebo odkaz (`a`). Značky většinou fungují v páru, otevírací a zavírací. Stačí poznámkový blok: text uložíš jako `index.html`, otevřeš v prohlížeči a máš webovou stránku.

Podstatné je, že **HTML nepopisuje vzhled, ale význam.** Značka `h1` neříká „velké tučné písmo", říká „hlavní téma stránky" — vzhled řeší až CSS. Významu se říká **sémantika** a čtou ji nejen lidé: vyhledávače podle struktury chápou, o čem stránka je (základ SEO), čtečky pro nevidomé čtou stránku po významech a o tutéž kostru se opírají i AI nástroje. **HTML značkami popisuje význam obsahu — nadpisy, odstavce, obrázky, odkazy; vzhled je práce CSS.**
