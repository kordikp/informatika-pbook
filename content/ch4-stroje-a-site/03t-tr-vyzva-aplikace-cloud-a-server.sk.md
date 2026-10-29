---
id: vyzva-aplikace-cloud-a-server-sk
translationOf: vyzva-aplikace-cloud-a-server
lang: sk
type: challenge
title: "Offline v autobuse"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "Ema zapíše platbu v autobuse bez signálu, Tomáš v tej istej chvíli inú na Wi-Fi."
voice: universal
parent: svet-aplikace-cloud-a-server-sk
diagram: null
core: false
status: accepted
concept: cloud-a-server
state: edited
lens: aplikace
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Ema zapíše platbu v autobuse bez signálu, Tomáš v tej istej chvíli inú na Wi-Fi. Večer v pokladnici chýba 300 Kč a nikto nič nezmazal.

<!-- task -->

Triedna apka drží na serveri jedno číslo: **stav pokladnice**. Ráno je 1 000 Kč.

- **8:00** Ema sedí v autobuse bez signálu. Ondra jej dá 200 Kč. Jej mobil spočíta 1 000 + 200 a uloží si správu „stav = 1 200“, ktorú odošle neskôr.
- **8:05** Tomáš je online. Jana mu dá 300 Kč. Jeho mobil pošle na server „stav = 1 300“.
- **8:30** Ema chytí signál a mobil pošle „stav = 1 200“. Signál vypadne, mobil si nie je istý, či správa dorazila, a pošle ju ešte raz.

1. Aký stav ukazuje server večer? Koľko peňazí je v skutočnosti v pokladnici?
2. Navrhni, čo má mobil posielať a server ukladať namiesto stavu, aby vyšla správna suma **v akomkoľvek poradí** správ.
3. Tvoj návrh musí vydržať aj to, že tá istá správa dorazí dvakrát.

**Úspech:** tvoj návrh dá 1 500 Kč pre všetkých šesť poradí troch správ (Ema, Tomáš, Ema znova) a vieš vysvetliť prečo.

<!-- hint -->

Server jednoducho prepíše číslo tým, čo prišlo naposledy. Tomu sa hovorí „posledný zápis vyhráva“. Čí zápis prišiel posledný?

<!-- hint -->

Čo keby mobil neposielal výsledok, ale to, čo sa stalo? Sčítanie má jednu skvelú vlastnosť: nezáleží na poradí.

<!-- hint -->

Ako server spozná, že správa „Ondra +200“ dorazila druhýkrát, a nie že Ondra zaplatil znova? Daj každej správe niečo, čo sa nikdy neopakuje.

<!-- solution -->

**1.** Server ukazuje **1 200 Kč**, v pokladnici je 1 500 Kč. Emin neskorý zápis prepísal Tomášov a Janiných 300 Kč z apky zmizlo.

**2.** Mobil posiela **udalosti**, nie stav: „Ondra +200“, „Jana +300“. Server ich ukladá do zoznamu a stav vždy spočíta ako 1 000 + súčet udalostí. Sčítanie nezávisí od poradia: 1 000 + 200 + 300 = 1 000 + 300 + 200 = 1 500.

**3.** Každá udalosť dostane jedinečné **ID**, napríklad „ema-mobil-0017“. Udalosť s rovnakým ID server uloží len raz. Bez ID by dvojité odoslanie dalo 1 700 Kč. Keď opakovanie tej istej správy nič nezmení, hovorí sa tomu **idempotencia**.

Takto fungujú aj skutočné apky na delenie útraty: ukladajú jednotlivé výdavky a saldá z nich počítajú. Súčet je len výsledok, nie dáta.

<!-- more -->

Čo ak Ema platbu **zmaže** a Tomáš ju v tej istej chvíli **opraví** na 250 Kč? Sčítanie už nepomôže. Vymysli pravidlo, ktoré rozhodne, a nájdi situáciu, keď dá zlý výsledok. Na takéto spory existujú dátové štruktúry nazývané CRDT, na ktorých stoja zdieľané editory dokumentov a apky, ktoré fungujú aj offline (heslo „local-first“, anglicky).
