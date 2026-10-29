---
id: vyzva-postup-dekompozice
type: challenge
title: "Game jam: kolik lidí ještě pomůže?"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "Na víkendovém game jamu máte postavit hru."
voice: universal
parent: null
diagram: null
core: false
lang: cs
status: accepted
concept: dekompozice
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|table
---

Na víkendovém game jamu máte postavit hru. Tomáš říká: „Čím víc nás bude, tím dřív to bude.“ Je to pravda? A od kolika lidí už ne?

<!-- task -->

Hra se skládá ze sedmi úkolů. Každý úkol dělá **vždy jeden člověk od začátku do konce**, nejde ho rozdělit.

| Úkol | Hodin | Musí být hotové dřív |
|---|---|---|
| N Nápad | 1 | nic |
| S Scénář | 3 | N |
| G Grafika | 4 | N |
| K Kód pohybu | 2 | N |
| L Levely | 3 | S, K |
| Z Zvuky | 2 | S |
| T Testování | 2 | G, L, Z |

1. Za kolik hodin to udělá **jeden člověk**?
2. Za kolik hodin to nejrychleji udělají **tři lidé**? Napiš rozvrh: kdo dělá co a od kolika do kolika.
3. Za kolik hodin to nejrychleji udělají **dva lidé**? Napiš rozvrh a **dokaž**, že rychleji to nejde.
4. Proč už **čtvrtý člověk** nic nezrychlí?

**Kritérium úspěchu:** čtyři čísla, dva rozvrhy, které dodržují závislosti, a zdůvodnění u bodu 3 a 4.

<!-- hint -->

Nakresli si úkoly jako graf: šipka vede od úkolu, který musí být hotový dřív. Najdi nejdelší řetěz šipek, sečti jeho hodiny.

<!-- hint -->

Testování musí být až úplně na konci a trvá 2 hodiny. Všechno ostatní musí být hotové před ním.

<!-- hint -->

U dvou lidí: na Nápadu pracuje jen jeden, druhý čeká. Kolik hodin práce zbývá před Testováním a kolik to dělá na jednoho? Pak zkus, jestli se práce dá rozdělit úplně bez čekání.

<!-- solution -->

1. **17 hodin**, prostý součet.
2. **9 hodin.** Rozvrh: 0–1 N. Člověk 1: S 1–4, L 4–7. Člověk 2: K 1–3, Z 4–6. Člověk 3: G 1–5. T 7–9. Rychleji to nejde, protože řetěz **N → S → L → T** trvá 1 + 3 + 3 + 2 = 9 hodin. To je **kritická cesta**.
3. **11 hodin.** Rozvrh: Člověk 1: N 0–1, S 1–4, L 4–7, Z 7–9. Člověk 2: K 1–3, G 3–7. T 9–11. **Důkaz:** před T je 15 hodin práce. V první hodině pracuje jen jeden, takže zbylých 14 hodin by se muselo rozdělit 7 + 7 úplně bez čekání a T by začalo v 8. Rozdělit 14 na 7 + 7 jde jen dvěma způsoby: {S, G} a {K, L, Z}, nebo {G, L} a {S, K, Z}. V prvním čeká druhý člověk na Scénář, než může začít Levely nebo Zvuky. Ve druhém nejdou Levely začít dřív než v 6, protože S i K dělá ten druhý. V obou případech T začne nejdřív v 9.
4. Kritická cesta trvá 9 hodin a tři lidé ji už stihnou. Čtvrtý člověk by jen čekal.

<!-- more -->

Takhle plánují stavbaři i filmaři: metoda kritické cesty. Přidej do tabulky úkol „Menu hry“ (2 hodiny, závisí na G) a zjisti, jestli se kritická cesta změní. Pak naplánuj skutečný víkendový projekt s kamarády a porovnej plán se skutečností.
