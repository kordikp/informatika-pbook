# Výstup pro TAČR a pilot ve školách

**Stav: NÁVRH** · Pavel Kordík · 2026-10-30
> **[V]** ověřeno (se zdrojem) · **[A]** předpoklad · **[?]** otevřené rozhodnutí

## 1. Co je výstup

**Modul pro samovzdělávání „Jak funguje digitální svět“.** Interaktivní kniha z informatiky a AI
pro 11–15 let ve čtyřech jazycích. Běží v prohlížeči i bez sítě a nevyžaduje registraci.

- Cestu si volí žák: svět, který ho baví, a co chce umět.
- Kniha přizpůsobuje podání jeho výsledkům.
- Pochopení ověřuje AI zkoušející. Když odpověď ještě není úplná, položí jednu naváděcí otázku
  (sokratovsky) a odpověď neprozradí.
- Skupinové úkoly (skládačka): každé místo v týmu má jinou kartu a tým odpovídá drakovi společně.
  Učitel nastaví počet dětí a AI asistentů. Asistent zná jen svou kartu a odpověď za děti nenapíše.
- Profil ukazuje mapu všech 24 jader: přečteno, ověřeno, udrženo.
- Učitel dostane plán hodiny, odkazy a QR kódy na mise a skupinové úkoly.

Navrhovaný druh výsledku: **R – software** **[?]** (alternativa O – ostatní). Ověřit v zadávací
dokumentaci programu a ve smlouvě projektu: číslo projektu, příjemce, vlastníka výsledku a licenci.

## 2. Co je hotové a dá se doložit  **[V]**

| Co | Doklad |
|---|---|
| Veřejná verze | https://informatika-pbook.vercel.app, engine 7.8.0, SW v92 (2026-10-30) |
| Obsah | 6 kapitol a 24 jader, 6 světů, projekt Tvůrce, 12 expedic, 25 misí s bossem, 6 skupinových úkolů s AI asistenty, 42 výzev a 36 her navíc (`scripts/build-ucitel.mjs`) |
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
- [ ] **doklad o ověření v praxi**: zpráva z pilotu (§4) a vyjádření učitelů, kteří v dotazníku
      povolili citaci;
- [ ] uživatelská dokumentace: pro žáky je v knize, pro učitele `/ucitel`.

## 4. Pilot ve školách: lehká verze

**Princip:** tým AI dětem pošle jednu pozvánku a jednu připomínku do své sítě učitelů. Zbytek běží
bez něj. Učitel použije knihu, kdy se to hodí, a po hodině vyplní krátký dotazník. Výsledky se
vyhodnotí z dat o interakcích, která kniha už dnes sbírá.

Oproti první verzi návrhu odpadá výběr škol, vstupní a výstupní test, rozhovory s učiteli a ruční
kontrola vzorku hodnocení bosse.

**Jak to proběhne**

1. AI dětem rozešle pozvánku (newsletter, komunita Kurikula AI). Text připravíme my. Kontakt pro
   dotazy učitelů je Pavel.
2. Učitel otevře `/ucitel`, vybere kapitolu, misi nebo skupinový úkol a dostane odkaz a QR kód
   s **kódem třídy**. Kód vznikne automaticky, je náhodný a neobsahuje jméno školy.
3. Knihu použije v 1–3 hodinách kdykoli v období pilotu. Příprava navíc ani test nejsou potřeba.
4. Po hodině `/ucitel` nabídne **dotazník** (6 otázek, asi 3 minuty). Je svázaný s kódem třídy,
   takže odpovědi jdou spárovat s daty z hodiny.
5. Žák u hodnocení bosse může jedním klepnutím říct, jestli bylo férové (👍/👎). Nic nepíše.
6. Po třech týdnech AI dětem pošle připomínku. Na konci pilotu skript vyrobí zprávu.

**Co měříme a odkud**

| Otázka pilotu | Data | Práce navíc |
|---|---|---|
| Pracují žáci s knihou a dostanou se k jádrům? | log podle kódu třídy: počet zařízení, přečtená a ověřená jádra, dokončené mise a skupinové úkoly, návraty v dalších dnech | žádná |
| Učí se? | podíl jader, která žák obhájil u bosse, a jader udržených při opakování po týdnu (náhrada testu) | žádná |
| Je boss férový? | kola dialogu do průchodu (`boss_graded`), palec žáka u hodnocení, otázka v dotazníku učitele | 1 klepnutí žáka |
| Zapojí učitel knihu bez přípravy? | dotazník; zda se kód třídy vrací v dalších hodinách | 3 minuty učitele |
| Kolik stojí provoz na žáka? | počet volání modelu z logu × cena za volání | žádná |

**Dotazník pro učitele** (návrh)

1. Jak třída s knihou pracovala? (v hodině celá třída · skupinové úkoly · doma · jinak) a kolik hodin
2. Jak snadné bylo knihu v hodině použít? (1–5)
3. Byla hodnocení bosse férová? (1–5); volitelně příklad, kdy nebyla
4. Co žáky bavilo a co nefungovalo? (text)
5. Použijete knihu znovu? (ano · spíš ano · spíš ne · ne)
6. Smíme vaši odpověď citovat ve zprávě pro TAČR? (ne · anonymně · se jménem školy); volitelně
   e-mail pro další kontakt

Odpověď na otázku 6 dává **vyjádření škol** pro doklad o ověření v praxi.

**Kritéria úspěchu** (návrh)

- Knihu použije aspoň 10 tříd z aspoň 5 škol.
- V polovině tříd projde aspoň 60 % zařízení aspoň jedním bossem.
- Aspoň 80 % palců u hodnocení bosse je nahoru.
- Aspoň 70 % učitelů odpoví „ano“ nebo „spíš ano“ na otázku 5.

**Data a etika**

- Žádné účty ani jména. Kód třídy je náhodný a škola v datech není, pokud ji učitel neuvede
  v dotazníku.
- Do logu jde jen to, co kniha zaznamenává dnes (přečteno, ověřeno, mise, výsledek bosse). Texty
  odpovědí žáků se neukládají. K hodnocení je ale kniha posílá poskytovateli modelu (OpenAI).
- Na `/ucitel` bude krátká informace pro rodiče, kterou může učitel přeposlat. **[?]** Ověřit
  s pověřencem AI dětem, jestli stačí informace, nebo je potřeba souhlas.

**Co je potřeba postavit** (asi 1–2 dny, bez práce týmu AI dětem)

1. Kód třídy: vznikne na `/ucitel`, jde v odkazech a QR kódech, zařízení žáka si ho pamatuje
   a přidá ho ke každému řádku logu (`classCode`).
2. Dotazník na `/ucitel`. Odpovědi se ukládají přes `/api/log` jako `teacher_survey`; e-mail jako
   neveřejný `contact`, jak to kniha dělá už dnes.
3. Palec u hodnocení bosse (`boss_fair`).
4. Skript `pilot-report`: souhrn za třídy i celek, spárovaný s dotazníky.
5. Texty pozvánky, připomínky a informace pro rodiče.

**Předpoklad:** pilot běží až na doméně AI dětem. Postup žáka je v prohlížeči vázaný na adresu,
takže přepnutí v průběhu pilotu by data rozdělilo.

**Harmonogram** (návrh)

| Kdy | Co | Kdo |
|---|---|---|
| 11/2026 | body 1–5, nasazení na doméně AI dětem | Pavel; nasazení AI dětem |
| 12/2026 | pozvánka do sítě učitelů | AI dětem (1 e-mail) |
| 1–3/2027 | pilot, učitelé kdykoli; připomínka v polovině | AI dětem (1 e-mail) |
| 4/2027 | zpráva ze skriptu a dotazníků (podklad pro výstup) | Pavel |

## 5. Náklady na provoz

- **Hosting:** Vercel (statický web a funkce).
- **AI zkoušející:** jedno volání modelu na kontrolu a jedno na každou repliku v dialogu. Náklad
  na žáka = počet volání z logů (`boss_graded`) × cena za volání. Změřit v pilotu. **[A]**
- **Recombee:** bezplatný účet. Bez něj kniha doporučuje lokálně v prohlížeči.

## 6. Rozhodnout

| | Otázka | Kdo |
|---|---|---|
| D1 | Číslo projektu, druh výsledku a vlastník | Pavel |
| D2 | Kam poslat pozvánku (newsletter, komunita Kurikula AI) | AI dětem |
| D3 | Pilot anonymně, nebo s účty Tiny (podle stavu integrace) | Pavel + tým Tiny |
| D4 | Stačí pro rodiče informace, nebo je potřeba souhlas | pověřenec AI dětem |
