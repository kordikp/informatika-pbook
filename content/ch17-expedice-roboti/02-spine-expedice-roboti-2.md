---
id: expedice-roboti-2
type: spine
title: "Ostrá zatáčka a paměť"
readingTime: 1
standalone: false
teaser: "Čára zmizela oběma senzorům."
voice: universal
parent: null
diagram: null
core: false
lang: cs
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-roboti-2
conceptTitle: "Ostrá zatáčka a paměť"
state: edited
carriers: prose
---

**🧩 Výzva** · krok 2 z 5 · [Vozítko, které nespadne ze stolu](#expedice-roboti)

Čára zmizela oběma senzorům. Senzory teď nevědí nic, ale vozítko může vědět, **kde byla čára naposledy**.

**Úkol 1: paměť.** Přidej proměnnou `naposled`. Když vidí čáru jen levý senzor, ulož *vlevo*. Když jen pravý, ulož *vpravo*. Když nevidí nic, točí se vozítko na stranu z paměti. Kdo chce celou tabulku odvodit, najde ji ve výzvě „Vozítko se dvěma očima“ u dekompozice.

**Úkol 2: testy předem.** Napiš pět testů jako *vstup → očekávané chování*, ještě než je pustíš:
- rovinka;
- mírná zatáčka doleva;
- ostrá zatáčka doleva;
- ostrá zatáčka doprava;
- křižovatka (oba senzory vidí čáru, pak zase jeden).

U každého zapiš, jakou šipku čekáš krok po kroku. Pak proklikej piny v simulátoru přesně podle testu.

**Úkol 3: jak rychle smíš jet?** micro:bit přečte senzory zhruba 50× za vteřinu. Čára je široká 15 mm a vozítko přes ni přejíždí kolmo. Jakou nejvyšší rychlostí smí jet, aby čáru zaručeně zachytilo aspoň jedno měření? A co se stane, když do smyčky přidáš blok *pauza 100 ms*?

**Úspěch:** všech pět testů sedí a výpočet rychlosti máš i s jednotkami. Je to stejná past jako míček, který proletí pálkou: co se stane mezi dvěma měřeními, to robot nevidí.

:::reveal 🔑 Řešení
Mezi dvěma měřeními smí ujet nejvýš šířku čáry, tedy 15 mm × 50 = 750 mm za vteřinu, zhruba 75 cm/s. S pauzou 100 ms měří nejvýš 10× za vteřinu, a tak už jen 15 cm/s.
:::

**Další krok:** [Jak přemýšlí robotický vysavač](#expedice-roboti-3)
