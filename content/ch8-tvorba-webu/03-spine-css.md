---
id: ch8-css
type: spine
title: "CSS: vzhled a responzivita"
readingTime: 3
standalone: true
teaser: "Stejná kostra, tisíc převleků. CSS rozhoduje, jestli web vypadá jako 1998, nebo jako dnes."
voice: universal
parent: null
diagram: null
core: true
recallQ: "Co dělá CSS a co znamená responzivita?"
recallA: "CSS dává HTML kostře vzhled: barvy, písma, rozvržení (dnes hlavně Flexboxem a Gridem). Responzivita znamená, že se stránka přizpůsobí mobilu i velké obrazovce — dnes povinnost, většina lidí přichází z mobilu."
highlights:
  - "CSS dává stránce vzhled: barvy, písmo, rozvržení."
  - "V tom je ta síla: obsah (HTML) a vzhled (CSS) jsou oddělené."
  - "responzivita — stránka se musí přizpůsobit mobilu i velké obrazovce."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch8-css
state: core
carriers: prose|code
---

Tvoje HTML stránka funguje, ale vypadá… no, jako holá kostra. Times New Roman na bílém pozadí. Přitom stejná kostra může vypadat jako Alza, jako umělecké portfolio, nebo jako neonová herní stránka. Rozdíl dělá jediná věc: **CSS.**

**CSS dává stránce vzhled: barvy, písmo, rozvržení.** Funguje na jednoduchém principu — vybereš značky a řekneš, jak mají vypadat:

```css
h1 {
  color: darkblue;
  font-family: sans-serif;
}
p {
  font-size: 18px;
  line-height: 1.6;
}
```

Čte se to: „všechny `h1` obarvi tmavě modře a piš bezpatkovým písmem." Soubor uložíš jako `styl.css`, v HTML na něj odkážeš — a celá stránka se převlékne najednou. **V tom je ta síla: obsah (HTML) a vzhled (CSS) jsou oddělené.** Jeden web, deset motivů; změna vzhledu bez sahání na obsah. (Vzpomínáš na abstrakci? Tady pracuje pro tebe.)

Druhá supersíla CSS je **rozvržení**: kde co na stránce leží. Moderní nástroje se jmenují **Flexbox** (řadí prvky do řádku či sloupce a umí je zarovnávat a roztahovat) a **Grid** (rozmístí prvky do mřížky jako v novinách). S nimi poskládáš menu vedle loga, karty do třech sloupců, patičku dolů — věci, které byly dřív utrpení, jsou dnes pár řádků.

A třetí věc, dnes nejdůležitější: **responzivita — stránka se musí přizpůsobit mobilu i velké obrazovce.** Většina návštěv webu dnes přichází z telefonu. Responzivní stránka na mobilu přeskládá tři sloupce pod sebe a zvětší tlačítka; neresponzivní nutí uživatele zoomovat a odejít. Technicky to řeší pravidla typu „když je obrazovka užší než…, změň rozvržení" — a právě Flexbox s Gridem se přeskupují nejsnáz.

**Zkus to!** Vezmi svůj `index.html` z minulé sekce a přidej CSS: změň barvu nadpisu, písmo a pozadí stránky. Pak test responzivity jako profík: F12 → ikonka mobilu (zobrazení zařízení) → přepínej velikosti. Co se rozbije? A zkus totéž na svém oblíbeném webu.

> **Věděl/a jsi?** Existuje slavná stránka CSS Zen Garden: jedno jediné HTML, ke kterému designéři z celého světa napsali stovky různých CSS — a pokaždé vznikl úplně jiný web. Lepší důkaz oddělení obsahu a vzhledu neexistuje.

Stránka vypadá k světu — ale zatím jen u tebe v počítači. Čas pustit ji do světa: doména a hosting.
