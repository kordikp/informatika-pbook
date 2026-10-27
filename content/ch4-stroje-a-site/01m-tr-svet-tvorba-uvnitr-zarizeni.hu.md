---
id: svet-tvorba-uvnitr-zarizeni-hu
translationOf: svet-tvorba-uvnitr-zarizeni
lang: hu
type: spine
title: "Miért tart sokáig a generálás"
readingTime: 2
standalone: true
teaser: "A weben tíz másodperc alatt megvan az MI-képed. Ha egy hasonló modellt az iskolai laptopon futtatsz, tíz percet vársz. Vagy el sem indul."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Miért tűnik el a nem mentett dokumentum, ha elmegy az áram, a mentett pedig nem?"
recallA: "A nem mentett csak a memóriában létezik, amely áram nélkül felejt. A mentett a tárhelyen van, amely tartósan megőrzi."
lens: tvorba
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: uvnitr-zarizeni
state: edited
highlights:
  - "Processzor, memória, tárhely, perifériák; hardver vs. szoftver"
  - "A memória ideiglenes: a nem mentett munka eltűnik, a megtelt memória lassít"
  - "Az operációs rendszer irányítja az alkalmazásokat és a hardverhez való hozzáférést; eszköz kiválasztása a tulajdonságai alapján"
carriers: prose
---

A weben tíz másodperc alatt megvan az MI-képed. Ha egy hasonló modellt az iskolai laptopon futtatsz, tíz percet vársz. Vagy el sem indul.

Egy kép generálása óriási halom szorzás. A modellnek több milliárd száma van, és minden képhez sokszor összeszorozza őket. A **processzor** okos mindenes, amely egyszerre néhány számítást tud elvégezni. A **grafikus chip** csak egyszerű számításokra képes, de egyszerre több ezerre, és ez ideális az MI-nek. Ezért épülnek az MI-adatközpontok több ezer videókártyára.

A második fék az **operatív memória**. Mielőtt a modell számolni kezd, teljes egészében be kell töltődnie a **tárhelyről** a memóriába, videókártya esetén annak saját memóriájába. Egy képgeneráló modell könnyen több GB. Ha nem fér el, a rendszer ide-oda pakolja az adatokat a tárhely és a memória között, és minden csak vánszorog, vagy a generálás el sem indul. **A tele memória lelassítja** az egész eszközt: hirtelen a böngésző is akadozni kezd. Az operatív memória ráadásul **ideiglenes**. Ha a laptop munka közben elalszik, a félkész kép elvész. Ami a lemezre van mentve, megmarad.

Az **operációs rendszer** dönti el, melyik alkalmazás mennyi memóriát és processzort kap. Ezért amikor fut a generálás, zúg a ventilátor, és akad a zene: több program osztozik a **hardveren**. A hardver a chipek és a memória, amelyeket megfoghatsz. A modell, a szerkesztő és a rendszer **szoftver**, vagyis programok, amelyek rajta futnak.

Az új mobilokban és laptopokban külön MI-chip van. Ez kisebb modelleket közvetlenül az eszközön is futtatni tud: a háttér elmosását videohívásban, feliratokat, egy fotó feljavítását. Ezért amikor **alkotáshoz választasz eszközt**, mást kérdezel, mint a kiselőadások megírásához: mennyi operatív memóriája van, milyen a grafikája, és van-e benne MI-chip.

**Próbáld ki!** Nyisd meg egy számítógépen a feladatkezelőt (Windowson Ctrl+Shift+Esc, Macen a Tevékenységfigyelő), és indíts el egy videót vagy egy játékot. Melyik alkalmazás használja a legtöbb memóriát és processzort?

**Tovább az MI-vel való alkotás világában:** → [Hová kerül a promptod](#svet-tvorba-cloud-a-server-hu)
