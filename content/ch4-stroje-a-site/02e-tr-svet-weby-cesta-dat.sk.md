---
id: svet-weby-cesta-dat-sk
translationOf: svet-weby-cesta-dat
lang: sk
type: spine
title: "Čo sa stane, keď stlačíš Enter"
readingTime: 1
standalone: true
teaser: "Napíšeš nas-kruzok.sk a za pol sekundy vidíš stránku. Medzitým sa tvoj počítač spýtal na cestu, poslal desiatky požiadaviek a dostal stovky balíčkov."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Čo sa stane s balíčkami tvojho videa, keď po ceste vypadne jeden router?"
recallA: "Ostatné routery ich pošlú inou cestou. Internet nemá jeden stred, takže výpadok časti ho nezastaví."
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
  - "Klient a server: požiadavka a odpoveď (web, e-mail, stream)"
  - "Balíčky, IP adresa, DNS prekladá mená na adresy"
  - "Internet nemá jeden stred: obchádzky pri výpadku"
carriers: prose|image
---

Napíšeš nas-kruzok.sk a za pol sekundy vidíš stránku. Medzitým sa tvoj počítač spýtal na cestu, poslal desiatky požiadaviek a dostal stovky balíčkov.

Čo sa počas tej polsekundy stane:

1. **DNS.** Počítač pozná len meno *nas-kruzok.sk*, ale dáta potrebujú **IP adresu**, číslo ako 185.21.4.12. Spýta sa DNS servera, telefónneho zoznamu internetu, a číslo dostane.
2. **Požiadavka.** Prehliadač, **klient**, pošle **serveru** **požiadavku**: *pošli mi úvodnú stránku*. Rečou tej dohody je HTTP.
3. **Balíčky.** Požiadavka aj odpoveď cestujú rozdelené na malé **balíčky**. Každý nesie adresu cieľa a **routery** ho posielajú ďalej, každý o kus bližšie.
4. **Odpoveď.** Server vráti HTML. Prehliadač v ňom nájde odkazy na CSS, skripty a obrázky a o každý súbor pošle ďalšiu požiadavku. Jedna spravodajská stránka je pokojne sto požiadaviek na desať rôznych serverov.
5. **Vykreslenie.** Stránku z došlého materiálu poskladá až tvoj prehliadač.

![Od Enteru k stránke: DNS, požiadavka, odpoveď](images/svet-weby-enter.sk.svg)

Každé kliknutie na odkaz je ďalšia požiadavka a ďalšia **odpoveď**. Balíčky jednej stránky pritom nemusia ísť rovnakou cestou. Keď po ceste vypadne router, ostatné ich pošlú **obchádzkou**. Internet nemá jeden stred, a preto web funguje, aj keď časť siete práve nejde.

Pomalá stránka tak môže mať troch rôznych vinníkov: pomalý server, pomalú sieť alebo slabé zariadenie, ktoré stránku dlho skladá.

**Vyskúšaj to!** Otvor na počítači ľubovoľnú stránku, stlač F12, vyber záložku Sieť (Network) a stránku obnov. Koľko požiadaviek prehliadač poslal? Ktorý súbor bol najväčší?

**Ďalej vo svete webov:** → [Kde býva tvoj web](#svet-weby-cloud-a-server-sk)
