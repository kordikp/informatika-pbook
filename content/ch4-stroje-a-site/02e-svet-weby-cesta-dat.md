---
id: svet-weby-cesta-dat
type: spine
title: "Co se stane, když zmáčkneš Enter"
readingTime: 1
standalone: true
teaser: "Napíšeš nas-krouzek.cz a za půl vteřiny vidíš stránku. Mezitím se tvůj počítač zeptal na cestu, poslal desítky požadavků a dostal stovky balíčků."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Co se stane s balíčky tvého videa, když po cestě vypadne jeden router?"
recallA: "Ostatní routery je pošlou jinou cestou. Internet nemá jeden střed, takže výpadek části ho nezastaví."
lang: cs
lens: weby
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: cesta-dat
state: edited
highlights:
  - "Klient a server: požadavek a odpověď (web, e-mail, stream)"
  - "Balíčky, IP adresa, DNS překládá jména na adresy"
  - "Internet nemá jeden střed: objížďky při výpadku"
carriers: prose|image
---

Napíšeš nas-krouzek.cz a za půl vteřiny vidíš stránku. Mezitím se tvůj počítač zeptal na cestu, poslal desítky požadavků a dostal stovky balíčků.

Co se během té půlvteřiny stane:

1. **DNS.** Počítač zná jen jméno *nas-krouzek.cz*, ale data potřebují **IP adresu**, číslo jako 185.21.4.12. Zeptá se DNS serveru, telefonního seznamu internetu, a číslo dostane.
2. **Požadavek.** Prohlížeč, **klient**, pošle **serveru** **požadavek**: *pošli mi úvodní stránku*. Řečí té domluvy je HTTP.
3. **Balíčky.** Požadavek i odpověď cestují rozdělené na malé **balíčky**. Každý nese adresu cíle a **routery** ho posílají dál, každý o kus blíž.
4. **Odpověď.** Server vrátí HTML. Prohlížeč v něm najde odkazy na CSS, skripty a obrázky a o každý soubor pošle další požadavek. Jedna zpravodajská stránka je klidně sto požadavků na deset různých serverů.
5. **Vykreslení.** Stránku z došlého materiálu poskládá až tvůj prohlížeč.

![Od Enteru ke stránce: DNS, požadavek, odpověď](images/svet-weby-enter.svg)

Každé kliknutí na odkaz je další požadavek a další **odpověď**. Balíčky jedné stránky přitom nemusí jet stejnou cestou. Když po cestě vypadne router, ostatní je pošlou **objížďkou**. Internet nemá jeden střed, a proto web funguje, i když část sítě zrovna nejede.

Pomalá stránka tak může mít tři různé viníky: pomalý server, pomalou síť, nebo slabé zařízení, které stránku dlouho skládá.

**Zkus to!** Otevři na počítači libovolnou stránku, zmáčkni F12, vyber záložku Síť (Network) a stránku obnov. Kolik požadavků prohlížeč poslal? Který soubor byl největší?

**Dál ve světě webů:** → [Kde bydlí tvůj web](#svet-weby-cloud-a-server)
