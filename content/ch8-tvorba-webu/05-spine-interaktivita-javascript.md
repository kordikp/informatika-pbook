---
id: ch8-interaktivita-javascript
type: spine
title: "JavaScript: stránka ožívá"
readingTime: 3
standalone: true
teaser: "Klikneš — a stránka odpoví. Třetí vrstva webu dělá z plakátu aplikaci."
voice: universal
parent: null
diagram: null
core: true
recallQ: "Jak JavaScript oživuje stránku?"
recallA: "Reaguje na události (kliknutí, psaní) a za běhu upravuje strukturu stránky — DOM. Prohlížeč změny hned překreslí, takže se web chová jako aplikace, ne statický dokument."
highlights:
  - "JavaScript stránku oživí: reaguje na kliknutí, mění obsah, počítá."
  - "JavaScript tenhle strom za běhu přestavuje"
  - "Události + úpravy DOM = každá webová aplikace na světě."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch8-interaktivita-javascript
state: core
carriers: prose|code
---

HTML je kostra, CSS je oblečení — ale stránka pořád jen stojí a vypadá. Zkus na ni kliknout: nic. Třetí vrstva webu jí dá nervy a svaly. **JavaScript stránku oživí: reaguje na kliknutí, mění obsah, počítá.**

Tady je celé kouzlo na šesti řádcích. Tlačítko, které po kliknutí změní text:

```html
<p id="pozdrav">Ahoj!</p>
<button id="tlacitko">Klikni</button>

<script>
document.getElementById("tlacitko").onclick = function() {
  document.getElementById("pozdrav").textContent = "Vítej na mém webu! 🎉";
};
</script>
```

Přečtěme si to lidsky: „Najdi prvek s id *tlacitko*. Když na něj někdo klikne, najdi prvek *pozdrav* a přepiš mu text." A je to — stránka poprvé **odpověděla** na tvůj podnět.

Jak to funguje uvnitř? Prohlížeč si načtenou stránku drží v paměti jako strom prvků — říká se mu **DOM** (Document Object Model): html má v sobě body, body odstavce, odstavce text. **JavaScript tenhle strom za běhu přestavuje** — mění texty, přidává prvky, schovává je, přebarvuje — a prohlížeč každou změnu okamžitě překreslí. Žádné nové načítání ze serveru: změna se děje u tebe, v klientovi.

Druhá polovina příběhu jsou **události**: kliknutí, napsání znaku, posunutí stránky, uplynutí času. JavaScript čeká na události a spouští na ně své funkce — poznáváš? Je to stejný princip „když se stane X, udělej Y", který znáš z podmínek v programování a který potkáš u micro:bitu i ve hrách. **Události + úpravy DOM = každá webová aplikace na světě.** Gmail, mapy, tahle kniha — všechno je nakonec tenhle vzorec, mnohotisíckrát opakovaný.

**Zkus to!** Přidej kód z ukázky do svého webu a rozšiř ho: druhé tlačítko, které změní barvu pozadí (`document.body.style.background = "black"`). Pak počítadlo kliknutí — budeš potřebovat proměnnou. Všechno, co ses naučil v kapitole o programování, tady najednou pracuje na obrazovce.

> **Věděl/a jsi?** JavaScript vznikl v roce 1995 za pouhých deset dní a s Javou má společné jen jméno (marketingový tah té doby). Dnes je to nejrozšířenější programovací jazyk světa — běží v každém prohlížeči na planetě.

Tři vrstvy máš kompletní: struktura, vzhled, chování. V další kapitole uděláš krok od stránek k aplikacím — a poznáš, jak se dnes staví s pomocí AI.
