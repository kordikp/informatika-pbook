---
id: expedice-program-1
type: spine
title: "Dílna: první program za 30 minut"
readingTime: 1
standalone: false
teaser: "Thonny je editor Pythonu pro začátečníky, zdarma pro Windows, macOS i Linux."
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
concept: expedice-program-1
conceptTitle: "Dílna: první program za 30 minut"
state: edited
carriers: prose|code
---

**🛠 Dílna** · krok 1 z 5 · [Dvanáct hvězd](#expedice-program)

**Thonny** je editor Pythonu pro začátečníky, zdarma pro Windows, macOS i Linux. Stáhneš ho z [thonny.org](https://thonny.org/), instalaci schvaluje rodič. Když nemůžeš nic instalovat, použij v prohlížeči [Python Tutor](https://pythontutor.com/), bez účtu.

1. **(5 minut)** Spusť Thonny. Nahoře je editor, dole konzole. Do konzole napiš `2 + 3` a Enter. Python odpoví 5.
2. **(10 minut)** Do editoru napiš:
```
jmeno = input("Jak se jmenuješ? ")
dny = int(input("Kolik dní zbývá do Vánoc? "))
print("Ahoj,", jmeno)
print("To je", dny * 24, "hodin.")
```
Ulož jako `advent.py` a spusť klávesou F5. Vidíš vstup, zpracování i výstup.
3. **(5 minut)** Zapni **View → Variables** a spusť program znovu. Sleduj, jak se plní krabičky.
4. **(10 minut)** Spusť ladění: **Ctrl+F5**, pak mačkej **F7**. Thonny ukáže každý malý krok, i to, jak počítá `dny * 24`. Teď schválně smaž `int(` a jednu závorku `)` a zadej 3. Program nespadne, ale vypíše „333333…“. Ve `dny` je teď text, a text krát 24 se zopakuje dvacetčtyřikrát. Takové chybě se říká **logická**: program běží, jen dělá něco jiného, než chceš.

Hotovo máš, když program funguje a umíš ho krokovat.

**Další krok:** [Výzva: teploměr na chatě](#expedice-program-2)
