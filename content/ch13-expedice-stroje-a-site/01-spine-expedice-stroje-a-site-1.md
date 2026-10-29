---
id: expedice-stroje-a-site-1
type: spine
title: "Kolik adres se vejde do chaty"
readingTime: 1
standalone: false
teaser: "Adresa IPv4 jsou čtyři čísla od 0 do 255, třeba 192.168.1.10."
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
concept: expedice-stroje-a-site-1
conceptTitle: "Kolik adres se vejde do chaty"
state: edited
carriers: prose
---

**🧩 Výzva** · krok 1 z 5 · [Internet na chatě](#expedice-stroje-a-site)

Adresa IPv4 jsou čtyři čísla od 0 do 255, třeba 192.168.1.10. Část adresy určuje **síť** (ulici), zbytek **zařízení** (číslo domu). Kolik čísel patří ulici, říká **maska**. Zápis /24 znamená, že ulici tvoří první tři čísla. Adresy 192.168.1.10 a 192.168.1.77 jsou tedy sousedé ve stejné síti a switch jim balíček doručí přímo. Adresa 192.168.2.5 je jinde a balíček k ní musí přes **router**.

Ondra chce mít v chatě dvě sítě: jednu pro hráče a druhou pro „chytré“ věci (kameru u krmítka a teploměr). Když je oddělí, kamera neuvidí do herních notebooků.

1. Které dvojice jsou ve stejné síti /24?
   - 192.168.1.10 a 192.168.1.200
   - 192.168.1.10 a 192.168.2.10
   - 10.0.0.1 a 10.0.0.254
2. Maska /25 rozdělí poslední číslo na dvě poloviny: 0–127 a 128–255. Jsou 192.168.1.10 a 192.168.1.200 ve stejné síti /25?
3. Kolik zařízení se vejde do sítě /24 a kolik do sítě /25? Pozor: první adresa v síti označuje síť samotnou a poslední je „hlásná trouba“ pro všechny. Žádné zařízení je dostat nemůže.

**Kritérium úspěchu:** všechny tři odpovědi správně, včetně počtu zařízení.

:::reveal 🔑 Řešení
1. Ano. Ne. Ano.
2. Ne: .10 patří do dolní poloviny (0–127), .200 do horní (128–255).
3. 254 a 126. Když zařízení vidí, že cíl je mimo jeho síť, pošle balíček **výchozí bráně**, tedy routeru. Tohle rozhodnutí dělá tvůj mobil při každé zprávě.
:::

**Další krok:** [Dílna: první síť ve Filiu](#expedice-stroje-a-site-2)
