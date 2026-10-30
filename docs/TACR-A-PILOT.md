# Výstup pro TAČR a pilot ve školách

**Stav: NÁVRH** · Pavel Kordík · 2026-10-30
> **[V]** ověřeno (se zdrojem) · **[A]** předpoklad · **[?]** otevřené rozhodnutí

## 1. Co je výstup

**Modul pro samovzdělávání „Jak funguje digitální svět“.** Interaktivní kniha z informatiky a AI
pro 11–15 let ve čtyřech jazycích. Běží v prohlížeči i bez sítě a nevyžaduje registraci.

- Žák si sám volí cestu (svět, který ho baví, a co chce umět).
- Kniha přizpůsobuje podání jeho výsledkům.
- Pochopení ověřuje AI zkoušející. Když odpověď ještě není úplná, položí jednu naváděcí otázku
  (sokratovsky) a odpověď neprozradí.
- Učitel dostane plán hodiny, odkazy a QR kódy na mise.

Navrhovaný druh výsledku: **R – software** **[?]** (alternativa O – ostatní). Ověřit v zadávací
dokumentaci programu a ve smlouvě projektu: číslo projektu, příjemce, vlastníka výsledku a licenci.

## 2. Co je hotové a dá se doložit  **[V]**

| Co | Doklad |
|---|---|
| Veřejná verze | https://informatika-pbook.vercel.app, engine 7.7.2, SW v87 (2026-10-30) |
| Obsah | 6 kapitol a 24 jader, 6 světů, projekt Tvůrce, 12 expedic, 25 misí s bossem, 42 výzev a 36 her navíc (`scripts/build-ucitel.mjs`) |
| Jazyky | čeština, angličtina, slovenština, maďarština; v každém jazyce otestováno i offline |
| Pro učitele | https://informatika-pbook.vercel.app/ucitel (plán hodiny, odkazy, QR) |
| Provoz | `/api/log?stats=1` k 2026-10-30: 164 čtenářů celkem, 101 za 30 dní, 53 za 7 dní |
| Kvalita AI zkoušejícího | sada 37 dětských odpovědí (31 česky, po 2 en/sk/hu; férovost, žádné slovíčkaření, bez rodu) a 5 sokratovských dialogů; vše prošlo s modelem `gpt-5.6-terra` |
| Zdrojový kód | `AI-detem/informatika-pbook`, engine `kordikp/recsys-pbook`; obsah CC BY-NC-SA 4.0, kód MIT |
| Technická dokumentace | [DEPLOY.md](DEPLOY.md), [tiny-integration/REQUIREMENTS.md](tiny-integration/REQUIREMENTS.md) |

## 3. Co ještě výstup potřebuje  **[A]**

Ověřit podle metodiky hodnocení výsledků a pravidel programu. Obvykle se u softwaru dokládá:

- [ ] popis a technické parametry (tento dokument a DEPLOY.md);
- [ ] ekonomické parametry: náklady na provoz na jednoho žáka (spočítat z pilotu, viz §5) a cena
      nasazení pro další školu;
- [ ] umístění (URL) a verze, vlastník a licence;
- [ ] **doklad o ověření v praxi**: zpráva z pilotu (§4) a vyjádření zapojených škol;
- [ ] uživatelská dokumentace: pro žáky je v knize, pro učitele `/ucitel`.

## 4. Pilot ve školách: návrh

**Otázky pilotu**

1. Zvládne žák s knihou samostatně pracovat a naučí se něco? (vstupní a výstupní test)
2. Je boss férový a pomáhá? (kolik kol dialogu žák potřebuje a ruční kontrola vzorku hodnocení)
3. Zapojí učitel knihu do výuky bez přípravy navíc? (rozhovor)

**Rozsah:** 3–5 tříd 8. ročníku ve 2–3 školách. Ideálně jedna škola slovenská nebo maďarská,
aby se ověřila i jiná jazyková verze. Pilot trvá 2–4 týdny.

**Průběh**

1. Úvodní hodina (45 min) podle plánu z `/ucitel`: start, první kapitola, první mise.
2. 2–3 týdny samostudia doma nebo v hodině. Učitel zadává mise přes QR kódy.
3. Závěrečná hodina: mise s bossem, výstupní test, krátký dotazník pro žáky, 30min rozhovor
   s učitelem.

**Měření**

| Co | Jak |
|---|---|
| Přírůstek znalostí | vstupní a výstupní test, 12 otázek k jádrům (z kontrolních karet knihy) **[?]** |
| Postup v knize | anonymní logy: přečtená a ověřená jádra, mise, čas, kola dialogu s bossem do průchodu |
| Férovost bosse | učitel nebo autor ručně posoudí vzorek 50 hodnocení |
| Zkušenost | žáci: 5 otázek se smajlíky a jedna otevřená; učitel: rozhovor |

**Kritéria úspěchu** (návrh)

- Aspoň 70 % žáků dokončí aspoň jednu kapitolu.
- Boss pustí do tří kol aspoň 80 % odpovědí, které učitel považuje za správné.
- Ve výstupním testu je měřitelný přírůstek.
- Učitel by knihu použil znovu.

**Data a etika**

- Bez účtů: anonymní režim, jak kniha funguje dnes. S účty Tiny až po fázi 1 integrace.
- Souhlas školy a informace pro zákonné zástupce. **[?]** Připravit šablonu.
- Odpovědi pro bosse posílá kniha poskytovateli modelu (OpenAI) k hodnocení. Informace pro
  rodiče to musí uvést.
- **Chybí:** pseudonymní kód třídy v logu (`/api/log`). Dnes ho má jen galerie ve studiu
  (`?group=`). Jde o malou úpravu enginu, kterou je potřeba udělat před pilotem.

**Harmonogram** (návrh)

| Kdy | Co |
|---|---|
| 11–12/2026 | výběr škol, souhlasy, test, kód třídy v logu |
| 1–3/2027 | pilot |
| 4/2027 | vyhodnocení a zpráva (podklad pro výstup) |

## 5. Náklady na provoz

- **Hosting:** Vercel (statický web a funkce).
- **AI zkoušející:** jedno volání modelu na kontrolu a jedno na každou repliku v dialogu. Náklad
  na žáka = počet volání z logů (`boss_graded`) × cena za volání. Změřit v pilotu. **[A]**
- **Recombee:** bezplatný účet. Bez něj kniha doporučuje lokálně v prohlížeči.

## 6. Rozhodnout

| | Otázka | Kdo |
|---|---|---|
| D1 | Číslo projektu, druh výsledku a vlastník | Pavel |
| D2 | Které školy a třídy | AI dětem |
| D3 | Pilot anonymně, nebo s účty Tiny (podle stavu integrace) | Pavel + tým Tiny |
| D4 | Kdo dělá rozhovory a ruční kontrolu vzorku | AI dětem |
