---
id: expedice-bezpeci-1-hu
translationOf: expedice-bezpeci-1
lang: hu
type: spine
title: "Három réteg"
readingTime: 1
standalone: false
teaser: "Itt az üzenet: 43 44 56 43 4F 52 7B 55 48 57 48 4A 48 56 2D 59 44 55 7D Első ránézésre zaj."
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
concept: expedice-bezpeci-1
conceptTitle: "Három réteg"
objective: "Itt az üzenet: 43 44 56 43 4F 52 7B 55 48 57 48 4A 48 56 2D 59 44 55 7D Első ránézésre zaj."
state: edited
carriers: prose
---

**🧩 Kihívás** · 1. lépés / 5 · [Zászló hadművelet](#expedice-bezpeci-hu)

Itt az üzenet:

`43 44 56 43 4F 52 7B 55 48 57 48 4A 48 56 2D 59 44 55 7D`

Első ránézésre zaj. Valójában két réteg, egyik a másikon, és te sorban lehámozod őket.

**1. réteg: tizenhatos számrendszer (hex).** A számítógép a betűket számként tárolja az **ASCII** táblázat szerint. Az A betű száma 65, a B-é 66, és így tovább egészen a Z-ig, amelynek a száma 90. A programozók ezeket a számokat szívesen írják tizenhatos számrendszerben: 0–9-ig számolnak, aztán A–F (A = 10, …, F = 15). A `41` pár jelentése 4 · 16 + 1 = 65, vagyis A.

**2. réteg: Caesar.** Amikor a számokat betűkké alakítod, olyan szöveget kapsz, aminek még nincs értelme. De tudod, hogyan kell kezdődnie.

**Feladat:** találd meg a zászlót. Aztán válaszolj: miért segített annyit a második réteg megfejtésénél, hogy ismered az üzenet elejét?

**Tippek:** a `41`–`5A` értékek az A–Z betűk. A `7B` és a `7D` kapcsos zárójel, a `2D` kötőjel. Számold ki, hány hellyel van eltolva az első betű a Z-hez képest.

:::reveal 🔑 Megoldás
A zászló: **ZASZLO{RETEGES-VAR}**. A hexből CDVCOR{UHWHJHV-YDU} jött ki, és a 3 hellyel visszafelé tolt Caesar visszaalakította (C → Z, D → A…). Az eleje ismerete óriási előny: a kriptoanalitikusok ezt **ismert nyílt szövegnek** hívják, és épp ennek köszönhetően törték fel a német rejtjeleket a második világháborúban. És figyeld meg: **sem a hex, sem a Caesar nem védelem**. A hex csak másfajta leírás, bárki elolvassa. Az igazi titkosításhoz titkos kulcs kell, amelyet nem lehet kitalálni. Papíron sokáig tartott. A következő lépésben egy perc alatt megoldod.
:::

**Következő lépés:** [A CyberChef konyhája](#expedice-bezpeci-2-hu)
