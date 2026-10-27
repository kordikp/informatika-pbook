---
id: svet-tvorba-generativni-model
type: spine
title: "Šest prstů a nápis z jiné planety"
readingTime: 1
standalone: true
teaser: "Kamarád zadá „pes“ a dostane obrázek jako z učebnice. Ty zadáš „štěně retrívra skáče do kaluže, západ slunce, záběr zblízka“ a máš plakát. Stejný nástroj, rozdíl je jen ve slovech."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Proč chatbot někdy sebejistě napíše nesmysl?"
recallA: "Předpovídá pravděpodobné pokračování textu a fakta neověřuje. Věta, která zní pravděpodobně, nemusí být pravdivá."
lang: cs
lens: tvorba
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: generativni-model
state: edited
highlights:
  - "Předpověď dalšího slova (tokenu) podle pravděpodobnosti"
  - "Plynulost není pravdivost: halucinace"
  - "Totéž u obrázků, hlasu a videa (generativní obraz, deepfake)"
carriers: prose|table
---

Kamarád zadá „pes“ a dostane obrázek jako z učebnice. Ty zadáš „štěně retrívra skáče do kaluže, západ slunce, záběr zblízka“ a máš plakát. Stejný nástroj, rozdíl je jen ve slovech.

Generátor ti nečte myšlenky, čte jen slova, která mu dáš. A dělá s nimi to, co chatbot s textem: **předpovídá**. Chatbot odhaduje další slovo (**token**) podle **pravděpodobnosti**. Generátor obrázků tvoří obraz, který k tvému popisu *nejspíš* patří. Mnoho generátorů začne od šumu a krok za krokem ho mění na obrázek. Nehledají hotový obrázek v databázi, tvoří nový.

Proto pomáhá popsat víc. Co do **promptu** patří:

| Parametr | Příklady |
|---|---|
| styl | fotka, akvarel, pixel art |
| nálada | veselá, tajemná, klidná |
| světlo | západ slunce, neon, měkké denní |
| záběr | zblízka, z výšky, široký |

Napoprvé to skoro nikdy nesedne. Trik: **měň jen jednu věc**. Přepíšeš *západ slunce* na *neon* a uvidíš, co to slovo ovládá.

Pak přijde kontrola, protože **plynulost není pravdivost**. Obrázek vypadá skvěle, a postava má šest prstů, nápis na tričku je změť písmen, která jen vypadají jako písmo, a hodiny na zdi mají třináct čísel. Model ví, co na obrázcích *obvykle bývá*, ne jak věci opravdu fungují. U textu se tomu říká **halucinace**: sebejistě napsaný nesmysl. U obrazu je to totéž.

Stejný princip tvoří i **hlas** a **video**. Pár minut nahrávky stačí, aby model mluvil hlasem tvého učitele. Video, ve kterém známý člověk říká, co nikdy neřekl, je **deepfake**. Vypadá skutečně, protože je pravděpodobné. Ne proto, že je pravdivé.

**Zkus to!** Vezmi nudný prompt „kočka“ a přepiš ho tak, aby měl aspoň tři parametry z tabulky. Máš-li po ruce generátor, zadej obě verze a najdi tři rozdíly. Pak na obrázcích najdi jednu chybu, kterou by člověk neudělal.

**Dál ve světě tvorby s AI:** → [Kdo uvidí tvoje video](#svet-tvorba-doporucovac)
