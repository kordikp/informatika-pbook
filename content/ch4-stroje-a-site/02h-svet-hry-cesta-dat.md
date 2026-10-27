---
id: svet-hry-cesta-dat
type: spine
title: "Proč online hra laguje"
readingTime: 1
standalone: true
teaser: "Vystřelíš první, ale padneš ty. Hra tě nepodvedla. Tvoje data byla jen ještě na cestě."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Co se stane s balíčky tvého videa, když po cestě vypadne jeden router?"
recallA: "Ostatní routery je pošlou jinou cestou. Internet nemá jeden střed, takže výpadek části ho nezastaví."
lang: cs
lens: hry
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

Vystřelíš první, ale padneš ty. Hra tě nepodvedla. Tvoje data byla jen ještě na cestě.

Online hra je **klient a server**. Tvůj mobil nebo konzole (klient) pošle **požadavek**: *stiskl jsem střelbu, stojím tady*. Herní server to spočítá a pošle **odpověď** všem hráčům: kdo koho zasáhl.

![Cesta balíčků z tvého mobilu na herní server a zpět](images/svet-hry-ping.svg)

Data necestují v kuse. Rozdělí se na malé **balíčky** a každý nese **IP adresu** cíle. Server se jmenuje třeba *eu.hra.cz*, ale balíčky potřebují číslo. Jméno na adresu přeloží **DNS**, telefonní seznam internetu. Pak balíčky putují od **routeru** k routeru až k serveru.

Čas tam a zpátky je **ping**, v milisekundách. 20 ms je skvělé, 200 ms znamená, že vidíš svět o pětinu sekundy pozdě. Proto se hraje na serveru, který je blízko: v Evropě, ne v Austrálii.

Když po cestě vypadne router, balíčky jedou **objížďkou**. Internet nemá jeden střed, takže hra běží dál, jen ping na chvíli vyskočí. A když se pár balíčků ztratí úplně, postavy ostatních hráčů se „teleportují“: hra chvíli nevěděla, kde jsou.

**Zkus to!** Najdi ve své oblíbené online hře, kde se ukazuje ping (často v nastavení nebo v rohu obrazovky). Jaký máš doma na Wi-Fi a jaký na mobilních datech?

**Dál ve světě her:** → [Skiny zdarma](#svet-hry-podvod-cili-na-cloveka)
