---
id: expedice-hry-4
type: spine
title: "🔍 Rozbor: jak skáče Celeste"
readingTime: 1
standalone: false
teaser: "Celeste je slavná plošinovka."
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
concept: expedice-hry-4
conceptTitle: "🔍 Rozbor: jak skáče Celeste"
state: edited
carriers: prose
---

**🔍 Rozbor** · krok 4 z 5 · [Víkend, kdy vznikla hra](#expedice-hry)

**Celeste** je slavná plošinovka. Její původní verze vznikla na fantasy konzoli PICO-8 a autoři později zveřejnili kód hlavní postavy: [Player.cs](https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs) (anglicky, jazyk C#, má tisíce řádků). Číst ho můžeš bez účtu. GitHub má pro účet limit 13 let, ale ke čtení účet nepotřebuješ.

Nemusíš rozumět všemu. Hledej klávesovou zkratkou Ctrl+F tyhle stopy:

1. **`JumpGraceTime = 0.1f`.** To je kojotí čas: 0,1 s po sjetí z hrany ještě jde skočit. Stejné číslo, jaké máš ve výzvě „Skok, který odpouští“.
2. **`VarJumpTime = .2f`.** Proměnlivá výška skoku: dokud držíš tlačítko, nejdéle 0,2 s, postava stoupá dál. Krátký stisk dá malý skok. Najdi, kde se nastavuje `varJumpTimer`.
3. **`StNormal`, `StClimb`, `StDash`.** Stavy postavy. Kolik jich je? Všimni si řádku `StateMachine = new StateMachine(23)`. Postava má 23 stavů, ne čtyři jako ve hře navíc.
4. **`ConsumeBuffer()`.** Paměť stisku. Stisk se „spotřebuje“, aby nezpůsobil dva skoky.

**Úkol rozboru:** nakresli automat jen pro tři stavy: běh (normal), lezení (climb) a úskok (dash). Ke každé šipce napiš, jaká událost ji spustí. Na papíře to stačí. Pak si odpověz: proč má postava tolik malých triků, které hráč nikdy nepostřehne?

**Co si odneseš:** dobré ovládání není fyzika z učebnice. Jsou to malá odpuštění, která dělají hru férovou vůči lidským prstům.

**Další krok:** [🎮 Hra do neděle večer](#expedice-hry-5)
