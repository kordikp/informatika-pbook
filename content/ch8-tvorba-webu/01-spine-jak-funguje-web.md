---
id: ch8-jak-funguje-web
type: spine
title: "Jak funguje web"
readingTime: 2
standalone: true
teaser: "Enter. A za zlomek vteřiny stránka. Co všechno se mezitím stihlo stát?"
voice: universal
parent: null
diagram: anim-request-response
core: true
recallQ: "Co se děje mezi prohlížečem a serverem při načtení stránky?"
recallA: "Prohlížeč (klient) pošle přes protokol HTTP požadavek serveru, kde stránka „bydlí“; server vrátí obsah (HTML, CSS, obrázky) a prohlížeč z něj stránku vykreslí. Web je nekonečná výměna požadavek–odpověď."
highlights:
  - "to, co se teď naučíš, můžeš do týdne mít venku — vlastní stránku, kterou si otevře kamarád na druhém konci města."
  - "Prohlížeč (klient) pošle požadavek"
  - "Server — počítač, kde stránka „bydlí“ — požadavek přijme"
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch8-jak-funguje-web
state: core
carriers: prose|animation
---

Tuhle kapitolu začneme tím nejlepším, co web nabízí: **to, co se teď naučíš, můžeš do týdne mít venku — vlastní stránku, kterou si otevře kamarád na druhém konci města.** Ale nejdřív pochopme, co se vlastně stane, když se stránka „načte".

Napíšeš adresu a zmáčkneš Enter. Spustí se výměna, kterou už znáš z první kapitoly — **klient a server** — jen teď v hlavní roli:

1. **Prohlížeč (klient) pošle požadavek:** „Pošli mi stránku wikipedia.org." Posílá ho **protokolem HTTP** — domluveným jazykem webu, který přesně určuje, jak žádost a odpověď vypadají. (To „https://" na začátku adresy je on; S znamená šifrovaně.)
2. **Server — počítač, kde stránka „bydlí" — požadavek přijme** a připraví odpověď: soubory stránky.
3. **Server pošle obsah zpátky:** HTML (strukturu), CSS (vzhled), obrázky, skripty. O těch prvních dvou budou další sekce.
4. **Prohlížeč z toho stránku vykreslí.** Server posílá jen „stavební materiál" — samotné sestavení obrazu, který vidíš, je práce tvého prohlížeče, na tvém zařízení.

**Celý web je tahle nekonečná výměna požadavek–odpověď.** Každé kliknutí na odkaz = nový požadavek. Každý obrázek na stránce = samostatný požadavek. Otevření jedné zpravodajské stránky klidně znamená desítky požadavků na několik serverů (reklamy a měření si posílají svoje — vzpomeň na kapitolu o datech).

Kdo dělá co? **Server:** uchovává soubory, posílá je, u větších webů skládá obsah na míru (tvůj feed). **Klient:** ptá se, vykresluje, reaguje na tvoje kliknutí. Až budeš příště čekat na načtení, už víš, kde se hledá viník: pomalý server, pomalá síť, nebo slabé zařízení — tři různé věci.

**Zkus to!** Otevři na počítači libovolnou stránku a stiskni F12 (vývojářské nástroje) → záložka Síť/Network → obnov stránku. Sleduj vodopád požadavků: kolik jich je? Které soubory jsou největší? Právě koukáš na požadavek–odpověď v přímém přenosu.

> **Věděl/a jsi?** Web vynalezl fyzik Tim Berners-Lee v CERN v roce 1989 — a první web světa (info.cern.ch) si můžeš otevřít dodnes. HTTP, HTML i adresy URL jsou jeho dílo; internet (síť) existoval už dřív, web je služba, která na něm běží.

Server ti posílá HTML, CSS a JavaScript — strukturu, vzhled a chování. Pojďme se je naučit psát, pěkně po vrstvách. Začínáme kostrou: HTML.
