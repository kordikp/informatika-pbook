---
id: svet-hry-cesta-dat-sk
translationOf: svet-hry-cesta-dat
lang: sk
type: spine
title: "Prečo online hra laguje"
readingTime: 1
standalone: true
teaser: "Vystrelíš prvý, ale padneš ty. Hra ťa nepodviedla. Tvoje dáta boli len ešte na ceste."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Čo sa stane s balíčkami tvojho videa, keď po ceste vypadne jeden router?"
recallA: "Ostatné routery ich pošlú inou cestou. Internet nemá jeden stred, takže výpadok časti ho nezastaví."
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
  - "Klient a server: požiadavka a odpoveď (web, e-mail, stream)"
  - "Balíčky, IP adresa, DNS prekladá mená na adresy"
  - "Internet nemá jeden stred: obchádzky pri výpadku"
carriers: prose|image
---

Vystrelíš prvý, ale padneš ty. Hra ťa nepodviedla. Tvoje dáta boli len ešte na ceste.

Online hra je **klient a server**. Tvoj mobil alebo konzola (klient) pošle **požiadavku**: *stlačil som streľbu, stojím tu*. Herný server to vypočíta a pošle **odpoveď** všetkým hráčom: kto koho zasiahol.

![Cesta balíčkov z tvojho mobilu na herný server a späť](images/svet-hry-ping.sk.svg)

Dáta necestujú v kuse. Rozdelia sa na malé **balíčky** a každý nesie **IP adresu** cieľa. Server sa volá napríklad *eu.hra.cz*, ale balíčky potrebujú číslo. Meno na adresu preloží **DNS**, telefónny zoznam internetu. Potom balíčky putujú od **routera** k routeru až k serveru.

Čas tam a späť je **ping**, v milisekundách. 20 ms je skvelé, 200 ms znamená, že vidíš svet o pätinu sekundy neskôr. Preto sa hrá na serveri, ktorý je blízko: v Európe, nie v Austrálii.

Keď po ceste vypadne router, balíčky idú **obchádzkou**. Internet nemá jeden stred, takže hra beží ďalej, len ping na chvíľu vyskočí. A keď sa pár balíčkov stratí úplne, postavy ostatných hráčov sa „teleportujú“: hra chvíľu nevedela, kde sú.

**Vyskúšaj to!** Nájdi vo svojej obľúbenej online hre, kde sa ukazuje ping (často v nastaveniach alebo v rohu obrazovky). Aký máš doma na Wi-Fi a aký na mobilných dátach?

**Ďalej vo svete hier:** → [Skiny zadarmo](#svet-hry-podvod-cili-na-cloveka-sk)
