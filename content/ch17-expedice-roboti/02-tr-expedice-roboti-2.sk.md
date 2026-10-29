---
id: expedice-roboti-2-sk
translationOf: expedice-roboti-2
lang: sk
type: spine
title: "Ostrá zákruta a pamäť"
readingTime: 1
standalone: false
teaser: "Čiara zmizla obom senzorom."
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-roboti-2
conceptTitle: "Ostrá zákruta a pamäť"
objective: "Čiara zmizla obom senzorom."
state: edited
carriers: prose
---

**🧩 Výzva** · krok 2 z 5 · [Vozidielko, ktoré nespadne zo stola](#expedice-roboti-sk)

Čiara zmizla obom senzorom. Senzory teraz nevedia nič, ale vozidielko môže vedieť, **kde bola čiara naposledy**.

**Úloha 1: pamäť.** Pridaj premennú `naposledy`. Keď vidí čiaru len ľavý senzor, ulož *vľavo*. Keď len pravý, ulož *vpravo*. Keď nevidí nič, točí sa vozidielko na stranu z pamäte. Kto chce celú tabuľku odvodiť, nájde ju vo výzve „Vozidielko s dvoma očami“ pri dekompozícii.

**Úloha 2: testy vopred.** Napíš päť testov ako *vstup → očakávané správanie*, ešte než ich pustíš:
- rovinka;
- mierna zákruta doľava;
- ostrá zákruta doľava;
- ostrá zákruta doprava;
- križovatka (oba senzory vidia čiaru, potom zase jeden).

Pri každom zapíš, akú šípku čakáš krok po kroku. Potom preklikaj piny v simulátore presne podľa testu.

**Úloha 3: ako rýchlo smieš ísť?** micro:bit prečíta senzory zhruba 50× za sekundu. Čiara je široká 15 mm a vozidielko cez ňu prechádza kolmo. Akou najvyššou rýchlosťou smie ísť, aby čiaru zaručene zachytilo aspoň jedno meranie? A čo sa stane, keď do slučky pridáš blok *pauza 100 ms*?

**Úspech:** všetkých päť testov sedí a výpočet rýchlosti máš aj s jednotkami. Je to rovnaká pasca ako loptička, ktorá preletí pálkou: čo sa stane medzi dvoma meraniami, to robot nevidí.

:::reveal 🔑 Riešenie
Medzi dvoma meraniami smie prejsť najviac šírku čiary, teda 15 mm × 50 = 750 mm za sekundu, zhruba 75 cm/s. S pauzou 100 ms meria najviac 10× za sekundu, a tak už len 15 cm/s.
:::

**Ďalší krok:** [Ako rozmýšľa robotický vysávač](#expedice-roboti-3-sk)
