---
id: generativni-model-sk
translationOf: generativni-model
lang: sk
type: spine
title: "Generatívna AI predpovedá"
readingTime: 1
standalone: true
teaser: "Klávesnica v mobile ti ponúka ďalšie slovo skôr, než ho napíšeš. Chatbot robí to isté, len oveľa lepšie. A niekedy si pritom vymýšľa."
voice: universal
parent: null
diagram: anim-generativni-model-sk
core: true
recallQ: "Prečo chatbot niekedy sebaisto napíše nezmysel?"
recallA: "Predpovedá pravdepodobné pokračovanie textu a fakty neoveruje. Veta, ktorá znie pravdepodobne, nemusí byť pravdivá."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: generativni-model
conceptTitle: "Generatívna AI predpovedá"
objective: "Klávesnica v mobile ti ponúka ďalšie slovo skôr, než ho napíšeš. Chatbot robí to isté, len oveľa lepšie. A niekedy si pritom vymýšľa."
mustCover:
  - "Predpoveď ďalšieho slova (tokenu) podľa pravdepodobnosti"
  - "Plynulosť nie je pravdivosť: halucinácie"
  - "To isté pri obrázkoch, hlase a videu (generatívny obraz, deepfake)"
state: core
highlights:
  - "Predpoveď ďalšieho slova (tokenu) podľa pravdepodobnosti"
  - "Plynulosť nie je pravdivosť: halucinácie"
  - "To isté pri obrázkoch, hlase a videu (generatívny obraz, deepfake)"
carriers: prose|animation
---

Klávesnica v mobile ti ponúka ďalšie slovo skôr, než ho napíšeš. Chatbot robí to isté, len oveľa lepšie. A niekedy si pritom vymýšľa.

Jazykový model, napríklad chatbot, sa učil na obrovskom množstve textov. Nenaučil sa z nich fakty ako encyklopédia. Naučil sa, **ktoré slová zvyčajne nasledujú po iných**. Keď mu napíšeš otázku, **odhaduje slovo po slove, čo najskôr príde ďalej**.

Zahraj sa na model. Veta sa začína „Najznámejšia kniha spisovateľa Karola Vrbu z Trnavy sa volá…“. Model ponúka pokračovania podľa pravdepodobnosti: *Tiene* (31 %), *Posledný* (24 %), *Dom* (17 %). Vyberieš Tiene, potom *nad* (42 %), potom *Váhom* (38 %) a nakoniec *a vyšla v roku 1987* (29 %). Vyjde veta: „…sa volá Tiene nad Váhom a vyšla v roku 1987.“ Znie vierohodne. Lenže Karol Vrba z Trnavy je vymyslený.

Každé slovo bolo pravdepodobné, a preto veta znie vierohodne. Nikde však nebol krok „over, či je to pravda“. Tak vznikajú **halucinácie**: plynulé, sebaisté odpovede, ktoré nie sú pravdivé.

Samotný model nič nevyhľadáva. Niektoré chatboty vedia navyše hľadať na webe, o tom je výlet **Vnútri chatbota**. Generátory obrázkov sa tiež učili na obrovskom množstve príkladov, len pracujú inak: začnú od náhodného šumu a krok za krokom ho čistia, až vyjde obrázok podľa zadania. Ani ony nič neoverujú, a tak vedia namaľovať ruku so šiestimi prstami.

**Vyskúšaj to!** Zahraj sa na model: kamarát povie tri slová a ty vždy doplň najpravdepodobnejšie ďalšie. Vznikne plynulá veta, a pritom si nič „nevedel“, len odhadoval. Presne takto vzniká každá odpoveď chatbota, aj tá chybná.

> **Pozor, častý omyl:** „Chatbot vyhľadáva odpovede v databáze.“ Chatbot predpovedá ďalšie slovo podľa toho, čo je pravdepodobné. Preto znie isto, aj keď si vymýšľa.

**Ďalej:** Model nečíta písmená. Text sa mení na čísla a model počíta s číslami, rovnako ako s pixelmi obrázka. → [Všetko sú čísla](#c/kodovani)
