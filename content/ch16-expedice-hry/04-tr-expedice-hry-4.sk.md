---
id: expedice-hry-4-sk
translationOf: expedice-hry-4
lang: sk
type: spine
title: "🔍 Rozbor: ako skáče Celeste"
readingTime: 1
standalone: false
teaser: "Celeste je slávna plošinovka."
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
concept: expedice-hry-4
conceptTitle: "🔍 Rozbor: ako skáče Celeste"
objective: "Celeste je slávna plošinovka."
state: edited
carriers: prose
---

**🔍 Rozbor** · krok 4 z 5 · [Víkend, keď vznikla hra](#expedice-hry-sk)

**Celeste** je slávna plošinovka. Jej pôvodná verzia vznikla na fantasy konzole PICO-8 a autori neskôr zverejnili kód hlavnej postavy: [Player.cs](https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs) (po anglicky, jazyk C#, má tisíce riadkov). Čítať ho môžeš bez účtu. GitHub má pre účet limit 13 rokov, ale na čítanie účet nepotrebuješ.

Nemusíš rozumieť všetkému. Hľadaj klávesovou skratkou Ctrl+F tieto stopy:

1. **`JumpGraceTime = 0.1f`.** To je kojotí čas: 0,1 s po zídení z hrany sa ešte dá skočiť. Rovnaké číslo, aké máš vo výzve „Skok, ktorý odpúšťa“.
2. **`VarJumpTime = .2f`.** Premenlivá výška skoku: kým držíš tlačidlo, najdlhšie 0,2 s, postava stúpa ďalej. Krátke stlačenie dá malý skok. Nájdi, kde sa nastavuje `varJumpTimer`.
3. **`StNormal`, `StClimb`, `StDash`.** Stavy postavy. Koľko ich je? Všimni si riadok `StateMachine = new StateMachine(23)`. Postava má 23 stavov, nie štyri ako v hre navyše.
4. **`ConsumeBuffer()`.** Pamäť stlačenia. Stlačenie sa „spotrebuje“, aby nespôsobilo dva skoky.

**Úloha rozboru:** nakresli automat len pre tri stavy: beh (normal), lezenie (climb) a úskok (dash). Ku každej šípke napíš, aká udalosť ju spustí. Na papieri to stačí. Potom si odpovedz: prečo má postava toľko malých trikov, ktoré hráč nikdy nepostrehne?

**Čo si odnesieš:** dobré ovládanie nie je fyzika z učebnice. Sú to malé odpustenia, ktoré robia hru férovou voči ľudským prstom.

**Ďalší krok:** [🎮 Hra do nedele večer](#expedice-hry-5-sk)
