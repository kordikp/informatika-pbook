---
id: cesta-dat
type: spine
title: "Jak data cestují"
readingTime: 1
standalone: true
teaser: "Pošleš zprávu kamarádovi, který sedí vedle tebe. Přesto může letět přes jiný stát. Proč?"
voice: universal
parent: null
diagram: anim-request-response
core: true
recallQ: "Co se stane s balíčky tvého videa, když po cestě vypadne jeden router?"
recallA: "Ostatní routery je pošlou jinou cestou. Internet nemá jeden střed, takže výpadek části ho nezastaví."
lang: cs
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: cesta-dat
conceptTitle: "Jak data cestují"
state: core
highlights:
  - "Klient a server: požadavek a odpověď (web, e-mail, stream)"
  - "Balíčky, IP adresa, DNS překládá jména na adresy"
  - "Internet nemá jeden střed: objížďky při výpadku"
carriers: prose|animation
---

Pošleš zprávu kamarádovi, který sedí vedle tebe. Přesto může letět přes jiný stát. Proč?

Posíláš fotku do chatu. Neletí přímo do mobilu kamaráda. Jde na **server** chatu a cestou přes síť **routerů**.

Fotka se rozdělí na malé **balíčky**. Každý nese **IP adresu** cíle, číslo jako 203.0.113.7. Routery balíčky posílají dál, každý třeba jinou cestou, a v cíli se zase složí.

Mobil se nejdřív zeptá **DNS**, telefonního seznamu internetu: jakou adresu má chat.example? DNS odpoví 203.0.113.7, protože routery rozumějí jen číslům. Fotka pak odjede v šesti balíčcích. Jeden jede přes router A a C, jiný přes B a D. Když router A vypadne, balíčky pojedou přes B a D a fotka dorazí stejně.

⟦obr: images/proklik-cesta-dat.svg⟧

Internet je **síť sítí** a nemá jeden střed. Když vypadne router, ostatní pošlou balíčky **objížďkou**. Ztracený balíček se pošle znovu a celá fotka ne.

Tvůj mobil je **klient**: posílá **požadavek**. Server posílá **odpověď**. Tak funguje web, e-mail i stream.

**Wi-Fi** je jen poslední kousek cesty: bezdrátové spojení mezi mobilem a routerem doma. Internet je všechno za ním.

**Zkus to!** Nakresli cestu své poslední zprávy kamarádovi: tvůj mobil, Wi-Fi router nebo vysílač, internet, server aplikace a zase zpátky až k němu. Kolik zastávek má zpráva pro někoho, kdo sedí vedle tebe? A kudy půjde, když vypneš Wi-Fi?

> **Pozor, častý omyl:** „Zpráva letí přímo z mobilu do mobilu.“ Letí přes router nebo vysílač, internet a server služby. A Wi-Fi není internet. Je to jen bezdrátový kousek cesty k routeru.

**Dál:** Na konci cesty stojí server. Je to cizí počítač, a právě tomu se říká cloud. → [Cloud je cizí počítač](#c/cloud-a-server)
