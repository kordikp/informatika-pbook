---
id: ch5-worked-prompt
type: spine
title: "Pozvánka na akademii: třikrát týž prompt"
readingTime: 2
standalone: true
teaser: "Stejný úkol, tři verze zadání — sleduj, co přesně se ve výstupu AI zlepší s každou iterací."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Co obsahuje dobrý prompt?"
recallA: "Cíl (co přesně chceš), kontext (pro koho, k čemu, co už máš) a formát výstupu. A není to jeden výstřel — výsledek dál upřesňuješ dialogem."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
concept: ch5-prompt-a-promptova-gramotnost
state: edited
status: accepted
carriers: prose|table
---

Máš napsat pozvánku na školní akademii pro rodiče. Necháš si pomoct od AI — a my budeme krok za krokem sledovat, jak se výstup mění se zadáním.

**1. Iterace první: líný prompt.** „Napiš pozvánku na školní akademii." Model poslušně vrátí půl stránky slavnostních frází — a protože datum, místo ani čas nezná, **vymyslí si je**: „…20. června v aule školy…" Nic z toho neplatí. Není to jeho chyba: nedostal kontext, tak střílí naslepo. Výstup k nepoužití.

**2. Iterace druhá: cíl + kontext + formát.**

> „Napiš pozvánku na školní akademii. **Cíl:** pozvat rodiče žáků. **Kontext:** pořádá ji 8.B ve čtvrtek 18. 6. v 17:00 v tělocvičně ZŠ Lipová, vystoupí všechny třídy, vstup zdarma, trvá asi 90 minut. **Formát:** text na nástěnku do 80 slov, česky."

Výstup se promění: správné datum, čas i místo (nic si nevymýšlí — všechno dostal), délka sedí na nástěnku. Jen tón je vedle: „Vážení rodiče, dovolujeme si Vás pozvat…" — na nástěnku moc škrobené.

**3. Iterace třetí: doladění dialogem.** Prompt není jeden výstřel, ale rozhovor. Odpovíš: „Dobré, ale zní to úředně. Přepiš vesele, jednou větou zmiň překvapení na závěr a přidej řádek ‚Přijďte dřív, míst je omezeně.'" Výstup:

> „Přijďte se podívat, co jsme nacvičili! Školní akademie 8.B — čtvrtek 18. 6. v 17:00, tělocvična ZŠ Lipová. Vystoupí všechny třídy, vstup zdarma, za 90 minut jste doma. A na závěr chystáme překvapení… Přijďte dřív, míst je omezeně!"

**4. Srovnej iterace.**

| Iterace | Co jsi dodal | Co se ve výstupu zlepšilo |
|---|---|---|
| líná | nic | nic — údaje si model vymyslel |
| strukturovaná | cíl, kontext, formát | správná fakta, délka, jazyk |
| doladěná | upřesnění v dialogu | tón, důrazy, chybějící detaily |

Jedno nespraví ani nejlepší prompt: **jistotu faktů**. Datum a čas si před vyvěšením zkontroluj sám — umět zadat a umět ověřit jsou dvě různé dovednosti.

**Co sis odnesl:** Dostáváš tak dobré odpovědi, jak dobré je tvoje zadání: cíl + kontext + formát. První odpověď je polotovar, který doladíš dialogem — a fakta ve výstupu vždy ověříš.
