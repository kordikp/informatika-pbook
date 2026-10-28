---
id: cesta-dat-sk
translationOf: cesta-dat
lang: sk
type: spine
title: "Ako dáta cestujú"
readingTime: 1
standalone: true
teaser: "Pošleš správu kamarátovi, ktorý sedí vedľa teba. Napriek tomu môže letieť cez iný štát. Prečo?"
voice: universal
parent: null
diagram: anim-request-response-sk
core: true
recallQ: "Čo sa stane s balíčkami tvojho videa, keď po ceste vypadne jeden router?"
recallA: "Ostatné routery ich pošlú inou cestou. Internet nemá jeden stred, takže výpadok časti ho nezastaví."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: cesta-dat
conceptTitle: "Ako dáta cestujú"
objective: "Pošleš správu kamarátovi, ktorý sedí vedľa teba. Napriek tomu môže letieť cez iný štát. Prečo?"
mustCover:
  - "Klient a server: požiadavka a odpoveď (web, e-mail, stream)"
  - "Balíčky, IP adresa, DNS prekladá mená na adresy"
  - "Internet nemá jeden stred: obchádzky pri výpadku"
state: core
highlights:
  - "Klient a server: požiadavka a odpoveď (web, e-mail, stream)"
  - "Balíčky, IP adresa, DNS prekladá mená na adresy"
  - "Internet nemá jeden stred: obchádzky pri výpadku"
carriers: prose|animation
---

Pošleš správu kamarátovi, ktorý sedí vedľa teba. Napriek tomu môže letieť cez iný štát. Prečo?

Posielaš fotku do chatu. Neletí priamo do mobilu kamaráta. Ide na **server** chatu a cestou cez sieť **routerov**.

Fotka sa rozdelí na malé **balíčky**. Každý nesie **IP adresu** cieľa, číslo ako 203.0.113.7. Routery balíčky posielajú ďalej, každý možno inou cestou, a v cieli sa znova poskladajú.

Mobil sa najprv opýta **DNS**, telefónneho zoznamu internetu: akú adresu má chat.example? DNS odpovie 203.0.113.7, pretože routery rozumejú len číslam. Fotka potom odíde v šiestich balíčkoch. Jeden ide cez router A a C, iný cez B a D. Keď router A vypadne, balíčky pôjdu cez B a D a fotka aj tak dorazí.

Internet je **sieť sietí** a nemá jeden stred. Keď vypadne router, ostatné pošlú balíčky **obchádzkou**. Stratený balíček sa pošle znova, celá fotka nie.

Tvoj mobil je **klient**: posiela **požiadavku**. Server posiela **odpoveď**. Tak funguje web, e-mail aj stream.

**Wi-Fi** je len posledný kúsok cesty: bezdrôtové spojenie medzi mobilom a routerom doma. Internet je všetko za ním.

**Vyskúšaj to!** Nakresli cestu svojej poslednej správy kamarátovi: tvoj mobil, Wi-Fi router alebo vysielač, internet, server aplikácie a znova späť až k nemu. Koľko zastávok má správa pre niekoho, kto sedí vedľa teba? A kade pôjde, keď vypneš Wi-Fi?

> **Pozor, častý omyl:** „Správa letí priamo z mobilu do mobilu.“ Letí cez router alebo vysielač, internet a server služby. A Wi-Fi nie je internet. Je to len bezdrôtový kúsok cesty k routeru.

**Ďalej:** Na konci cesty stojí server. Je to cudzí počítač, a práve tomu sa hovorí cloud. → [Cloud je cudzí počítač](#c/cloud-a-server)
