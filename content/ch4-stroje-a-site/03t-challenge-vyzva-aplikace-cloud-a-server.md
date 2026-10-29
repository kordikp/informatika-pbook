---
id: vyzva-aplikace-cloud-a-server
type: challenge
title: "Offline v autobuse"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "Ema zapíše platbu v autobuse bez signálu, Tomáš ve stejnou chvíli jinou na Wi-Fi."
voice: universal
parent: svet-aplikace-cloud-a-server
diagram: null
core: false
lang: cs
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

Ema zapíše platbu v autobuse bez signálu, Tomáš ve stejnou chvíli jinou na Wi-Fi. Večer v pokladně chybí 300 Kč a nikdo nic nesmazal.

<!-- task -->

Třídní appka drží na serveru jedno číslo: **stav pokladny**. Ráno je 1 000 Kč.

- **8:00** Ema sedí v autobuse bez signálu. Ondra jí dá 200 Kč. Její mobil spočítá 1 000 + 200 a uloží si zprávu „stav = 1 200“, kterou odešle později.
- **8:05** Tomáš je online. Jana mu dá 300 Kč. Jeho mobil pošle na server „stav = 1 300“.
- **8:30** Ema chytí signál a mobil pošle „stav = 1 200“. Signál vypadne, mobil si není jistý, jestli zpráva dorazila, a pošle ji ještě jednou.

1. Jaký stav ukazuje server večer? Kolik peněz je ve skutečnosti v pokladně?
2. Navrhni, co má mobil posílat a server ukládat místo stavu, aby vyšla správná částka **v jakémkoli pořadí** zpráv.
3. Tvůj návrh musí vydržet i to, že stejná zpráva dorazí dvakrát.

**Úspěch:** tvůj návrh dá 1 500 Kč pro všech šest pořadí tří zpráv (Ema, Tomáš, Ema znovu) a umíš vysvětlit proč.

<!-- hint -->

Server prostě přepíše číslo tím, co přišlo naposledy. Tomu se říká „poslední zápis vyhrává“. Kdo zapisoval poslední?

<!-- hint -->

Co kdyby mobil neposílal výsledek, ale to, co se stalo? Sčítání má jednu skvělou vlastnost: nezáleží na pořadí.

<!-- hint -->

Jak server pozná, že zpráva „Ondra +200“ dorazila podruhé, a ne že Ondra zaplatil znovu? Dej každé zprávě něco, co se nikdy neopakuje.

<!-- solution -->

**1.** Server ukazuje **1 200 Kč**, v pokladně je 1 500 Kč. Emin pozdní zápis přepsal Tomášův a Janiných 300 Kč z appky zmizelo.

**2.** Mobil posílá **události**, ne stav: „Ondra +200“, „Jana +300“. Server je ukládá do seznamu a stav vždy spočítá jako 1 000 + součet událostí. Sčítání nezávisí na pořadí: 1 000 + 200 + 300 = 1 000 + 300 + 200 = 1 500.

**3.** Každá událost dostane jedinečné **ID**, třeba „ema-mobil-0017“. Událost se stejným ID server uloží jen jednou. Bez ID by dvojí odeslání dalo 1 700 Kč. Když opakování stejné zprávy nic nezmění, říká se tomu **idempotence**.

Takhle fungují i skutečné appky na dělení útraty: ukládají jednotlivé výdaje a salda z nich počítají. Součet je jen výsledek, ne data.

<!-- more -->

Co když Ema platbu **smaže** a Tomáš ji ve stejnou chvíli **opraví** na 250 Kč? Sčítání už nepomůže. Vymysli pravidlo, které rozhodne, a najdi situaci, kdy dá špatný výsledek. Na tyhle spory existují datové struktury zvané CRDT, na kterých stojí sdílené editory dokumentů a appky, které fungují i offline (heslo „local-first“, anglicky).
