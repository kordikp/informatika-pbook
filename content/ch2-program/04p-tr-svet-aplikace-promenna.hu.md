---
id: svet-aplikace-promenna-hu
translationOf: svet-aplikace-promenna
lang: hu
type: spine
title: "Ugyanaz a gomb, háromféle válasz"
readingTime: 1
standalone: true
teaser: "Egy zenei appban a ▶ gombra koppintasz. Egyszer elkezd játszani, máskor megáll, máskor bejelentkezést kér. Az app nem romlott el. Emlékszik, milyen állapotban van."
voice: universal
parent: null
diagram: null
core: false
recallQ: "A pontszám 5. A program végrehajtja: „állítsd a pontszámot 3-ra”, aztán „változtasd meg a pontszámot 2-vel”. Mennyi a pontszám?"
recallA: "5. A beállítás felülírja az értéket 3-ra, a 2-vel változtatás 5-re emeli. A változó csak az utolsó értékét jegyzi meg."
lens: aplikace
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: promenna
state: edited
highlights:
  - "Név és aktuális érték (pontosan egy)"
  - "Állítsd be vs. változtasd meg; az értékadás felülírja a régi értéket"
  - "A változó mint a program állapota (pontszám, életek, mód)"
carriers: prose|code
---

Egy zenei appban a ▶ gombra koppintasz. Egyszer elkezd játszani, máskor megáll, máskor bejelentkezést kér. Az app nem romlott el. Emlékszik, milyen állapotban van.

Az app az állapotát **változókban** tárolja. Mindegyiknek van **neve**, és egy adott pillanatban **pontosan egy értéke**: *bejelentkezve = nem*, *mod = lejátszás*, *dal = 7*. A ▶ gomb megnézi a változókat, és ezek alapján dönt:

```
ha bejelentkezve = nem → mutasd a bejelentkezést
különben ha mod = „lejátszás” → állj meg, állítsd a modot „szünet”-re
különben → játszd le, állítsd a modot „lejátszás”-ra
```

A *mod* változó a **program állapota**. Ugyanaz a bemenet, egy koppintás, és az állapottól függően más művelet.

Az **állítsd be** és a **változtasd meg** két különböző dolog. A *hangerő legyen 5* felülírja az értéket, bármi volt is ott. A *változtasd a hangerőt 1-gyel* hozzáad ahhoz, ami ott van. **Az értékadás felülírja a régi értéket**, a régi eltűnik. Ezért alattomos ez: a webáruház kosarában két darab van, és rákoppintasz a + gombra. Ha a gomb azt csinálja, hogy *darab legyen 1*, ahelyett hogy *változtasd a darabot 1-gyel*, megint csak egy darab van a kosaradban.

Az appok leggyakoribb hibái állapothibák. Kijelentkezés után az app még mindig a nevedet mutatja: a változót nem nullázták le. Egy hívásból visszatérve két dal szól egyszerre: a mód kétszer állítódott be. Ha hibát keresel, először azt kérdezd: milyen értéke volt a változóknak abban a pillanatban?

**Próbáld ki!** Válassz egy appot, amelyet minden nap használsz. Keress legalább három változót, amelyre emlékeznie kell, például a módot, a bejelentkezést vagy az olvasatlan üzenetek számát. Melyik mikor állítódik be, és mikor változik?

**Tovább az alkalmazások világában:** → [App egy táblázatból](#svet-aplikace-tabulka-a-evidence-hu)
