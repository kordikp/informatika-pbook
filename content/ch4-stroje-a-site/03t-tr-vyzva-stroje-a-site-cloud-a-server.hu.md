---
id: vyzva-stroje-a-site-cloud-a-server-hu
translationOf: vyzva-stroje-a-site-cloud-a-server
lang: hu
type: challenge
title: "Hány évig bírják a fotóid?"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "A fotóid a mobilodon vannak, és van egy másolatod egy külső lemezen a fiókban."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: cloud-a-server
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose
---

A fotóid a mobilodon vannak, és van egy másolatod egy külső lemezen a fiókban. Két másolat, tehát ez biztonsági mentés, nem? Számold ki. Az eredmény talán meglep, mert két egy helyen lévő másolat egyszerre is elveszhet.

<!-- task -->

Becsült kockázatok egy évre:

- **M**: a mobilodat elveszíted vagy összetöröd: 10%.
- **D**: az otthoni külső lemez tönkremegy: 2%.
- **C**: elveszíted a felhőfiókodat (elfelejtett jelszó, letiltás, a szolgáltatás hibája): 1%.
- **H**: otthon tűz, beázás vagy betörés, és minden tönkremegy, ami otthon van, a mobil is: 0,5%.

Négy stratégia: **A** csak mobil. **B** mobil és otthoni lemez. **C** mobil és felhő. **D** mobil, otthoni lemez és felhő.

1. Minden stratégiára számold ki, mekkora a valószínűsége, hogy egy év alatt **az összes** másolatot elveszíted.
2. Váltsd át az eredményeket arra, hogy „hány évente egyszer”, és rendezd sorba a stratégiákat.
3. Magyarázd meg, miért jön ki a B rosszabbnak, mint első ránézésre tűnik.

Az M, D és C kockázatot vedd függetlennek. Ha két független dolognak egyszerre kell bekövetkeznie, a valószínűségeket összeszorzod. A kis összegeket nyugodtan kerekítsd.

**A siker feltétele:** a sorrend D, C, B, A, a számok nagyságrendje helyes, és a 3. pontban ott a magyarázat, miért pusztítja el a tűz mindkét másolatot egyszerre.

<!-- hint -->

A stratégia: akkor veszíted el a fotókat, ha bekövetkezik M vagy H. Ez kb. 10% + 0,5%.

<!-- hint -->

B stratégia: vagy bekövetkezik H (egyszerre mindkét másolatot elpusztítja), vagy bekövetkezik M és mellé D is. A második lehetőséget úgy számolod, hogy 0,1 × 0,02.

<!-- hint -->

A felhő máshol van, így az otthoni tűz nem éri el. A D stratégiában csak akkor veszítesz el mindent, ha (H és C), vagy ha (M és D és C) következik be.

<!-- solution -->

1. **A:** kb. 10,5%. **B:** 0,5% + 0,1 × 0,02 = 0,5% + 0,2% ≈ **0,7%**. **C:** 0,105 × 0,01 ≈ **0,1%**. **D:** 0,005 × 0,01 + 0,1 × 0,02 × 0,01 = 0,005% + 0,002% ≈ **0,007%**.
2. A nagyjából 10 évente egyszer, B kb. 140 évente, C kb. 1 000 évente, D kb. 14 000 évente. Sorrend a legjobbtól: D, C, B, A.
3. A B stratégiában a kockázat nagy részét (0,7%-ból 0,5%-ot) egyetlen esemény, a H adja, amely mindkét másolatot **egyszerre** pusztítja el. Ez ellen nem segít a második másolat ugyanazon a helyen. Ezt hívják **közös hibának**. Ezért érvényes a **3-2-1** szabály: 3 másolat, 2 különböző fajta adathordozón, ebből 1 másik helyen.

<!-- more -->

Igazítsd a kockázatokat magadhoz: tényleg milyen gyakran ejted le a mobilodat? És mi van, ha a felhőcég mindenkinek egyszerre szünteti meg a szolgáltatást? Ez egy újabb közös hiba. Írd be egy táblázatba a saját mentési tervedet, és számold ki. A mérnökök így számolják az adatközpontok ellenálló képességét: ezért vannak a szerverek több épületben és több városban.
