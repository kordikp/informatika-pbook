---
id: expedice-stroje-a-site-1-hu
translationOf: expedice-stroje-a-site-1
lang: hu
type: spine
title: "Hány cím fér el a hétvégi házban"
readingTime: 2
standalone: false
teaser: "Az IPv4-cím négy szám 0 és 255 között, például 192.168.1.10."
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
concept: expedice-stroje-a-site-1
conceptTitle: "Hány cím fér el a hétvégi házban"
objective: "Az IPv4-cím négy szám 0 és 255 között, például 192.168.1.10."
state: edited
carriers: prose
---

**🧩 Kihívás** · 1. lépés / 5 · [Internet a hétvégi házban](#expedice-stroje-a-site-hu)

Az IPv4-cím négy szám 0 és 255 között, például 192.168.1.10. A cím egyik része a **hálózatot** (az utcát) adja meg, a többi az **eszközt** (a házszámot). Hogy hány szám tartozik az utcához, azt a **maszk** mondja meg. A /24 jelölés azt jelenti, hogy az utcát az első három szám alkotja. A 192.168.1.10 és a 192.168.1.77 tehát szomszédok ugyanabban a hálózatban, és a switch közvetlenül kézbesíti nekik a csomagot. A 192.168.2.5 máshol van, és a csomagnak **routeren** keresztül kell eljutnia hozzá.

Ondra két hálózatot szeretne a hétvégi házban: egyet a játékosoknak, egy másikat az „okos” dolgoknak (az etető melletti kamerának és a hőmérőnek). Ha szétválasztja őket, a kamera nem lát bele a játékra használt laptopokba.

1. Melyik párok vannak ugyanabban a /24-es hálózatban?
   - 192.168.1.10 és 192.168.1.200
   - 192.168.1.10 és 192.168.2.10
   - 10.0.0.1 és 10.0.0.254
2. A /25-ös maszk két félre osztja az utolsó számot: 0–127 és 128–255. Ugyanabban a /25-ös hálózatban van a 192.168.1.10 és a 192.168.1.200?
3. Hány eszköz fér el egy /24-es és hány egy /25-ös hálózatban? Figyelem: a hálózat első címe magát a hálózatot jelöli, az utolsó pedig a „hangosbemondó” mindenkinek. Ezeket egyetlen eszköz sem kaphatja meg.

**A siker feltétele:** mindhárom válasz helyes, az eszközök számával együtt.

:::reveal 🔑 Megoldás
1. Igen. Nem. Igen.
2. Nem: a .10 az alsó félbe tartozik (0–127), a .200 a felsőbe (128–255).
3. 254 és 126. Ha az eszköz látja, hogy a cél a hálózatán kívül van, az **alapértelmezett átjárónak**, vagyis a routernek küldi a csomagot. Ezt a döntést a mobilod minden üzenetnél meghozza.
:::

**Következő lépés:** [Műhely: az első hálózat a Filiusban](#expedice-stroje-a-site-2-hu)
