// Stránka Pro učitele (ucitel.html): hodina z kapitoly, mikromise, projekt ve světě, skupinový úkol, tvůrčí úkol
// s kódem třídy a certifikát. Všechno jsou odkazy do knihy, které engine už umí (#mission-…,
// #mise-…, #tym-…, #autor-…, #trida-…); žádné účty, postup zůstává v zařízení žáka. Stránka mluví jazykem
// knihy (?lang=, jinak poslední volba čtenáře) a v tom jazyce se kniha žákům i otevře.
// Každý odkaz nese náhodný kód třídy (&trida=…): engine ho uloží v zařízení žáka a přidá ke každému
// řádku logu, takže pilot ve školách jde vyhodnotit po třídách (docs/TACR-A-PILOT.md §4).
// Data skládá scripts/build-ucitel.mjs do content/ucitel.json.
import { CONFIG } from './config.js';
import { LANG, LANGS, setLang } from './i18n.js';
import { qrSvg } from './qr.js';

const L = LANGS.includes(LANG) ? LANG : LANGS[0];   // ?lang=qps (pseudo-jazyk enginu) tu nic nepřekládá

const S = {
  h1: { cs: 'Pro učitele', en: 'For teachers', sk: 'Pre učiteľov', hu: 'Tanároknak' },
  back: { cs: '← Do knihy', en: '← Back to the book', sk: '← Do knihy', hu: '← Vissza a könyvhöz' },
  langs: { cs: 'Jazyk', en: 'Language', sk: 'Jazyk', hu: 'Nyelv' },
  desc: {
    cs: 'Jak učit s knihou {0}: plán hodiny z kapitoly, mikromise, projekty ve světech, tvůrčí úkol s kódem třídy a certifikát.',
    en: 'How to teach with the book {0}: a lesson plan per chapter, micro-missions, projects in worlds, a creative task with a class code, and the certificate.',
    sk: 'Ako učiť s knihou {0}: plán hodiny z kapitoly, mikromisie, projekty vo svetoch, tvorivá úloha s kódom triedy a certifikát.',
    hu: 'Hogyan tanítson a „{0}” című könyvvel:óravázlat fejezetenként, miniküldetések, projektek a világokban, alkotó feladat osztálykóddal és tanúsítvány.',
  },
  lede: {
    cs: 'Šest kapitol po čtyřech jádrech, šest světů s projekty a certifikát, který vydává AI dětem. Žádné účty ani administrace: každý odkaz na této stránce otevře žákům knihu rovnou na správném místě a v jazyce, ve kterém je tato stránka. Postup zůstává v zařízení žáka.',
    en: 'Six chapters of four core concepts each, six worlds with projects, and a certificate issued by AI dětem. No accounts, no admin: every link on this page opens the book for your pupils at the right place, in the language of this page. Progress stays on each pupil’s device.',
    sk: 'Šesť kapitol po štyroch jadrách, šesť svetov s projektmi a certifikát, ktorý vydáva AI dětem. Žiadne účty ani administrácia: každý odkaz na tejto stránke otvorí žiakom knihu rovno na správnom mieste a v jazyku, v ktorom je táto stránka. Postup zostáva v zariadení žiaka.',
    hu: 'Hat fejezet, mindegyikben négy alapfogalom, hat világ projektekkel és az AI dětem által kiadott tanúsítvány. Nincs fiók és nincs adminisztráció: az oldal minden linkje a megfelelő helyen és ennek az oldalnak a nyelvén nyitja meg a könyvet a diákoknak. A haladás a diák eszközén marad.',
  },
  navKap: { cs: 'Hodina z kapitoly', en: 'A lesson from a chapter', sk: 'Hodina z kapitoly', hu: 'Óra egy fejezetből' },
  navMini: { cs: 'Mikromise', en: 'Micro-mission', sk: 'Mikromisia', hu: 'Miniküldetés' },
  navSvet: { cs: 'Projekt ve světě', en: 'A project in a world', sk: 'Projekt vo svete', hu: 'Projekt egy világban' },
  navTvorba: { cs: 'Tvůrčí úkol', en: 'Creative task', sk: 'Tvorivá úloha', hu: 'Alkotó feladat' },
  navCert: { cs: 'Certifikát', en: 'Certificate', sk: 'Certifikát', hu: 'Tanúsítvány' },

  kapIntro: {
    cs: 'Jedna kapitola se vejde do jedné vyučovací hodiny. Vyberte kapitolu, promítněte QR kód nebo pošlete odkaz: žákům se otevře mise kapitoly se čtyřmi jádry a bossem na konci.',
    en: 'One chapter fits into one lesson. Pick a chapter, put the QR code on the projector or send the link: your pupils get the chapter’s mission with four core concepts and a boss at the end.',
    sk: 'Jedna kapitola sa zmestí do jednej vyučovacej hodiny. Vyberte kapitolu, premietnite QR kód alebo pošlite odkaz: žiakom sa otvorí misia kapitoly so štyrmi jadrami a bossom na konci.',
    hu: 'Egy fejezet belefér egy tanórába. Válasszon fejezetet, vetítse ki a QR-kódot vagy küldje el a linket: a diákoknak megnyílik a fejezet küldetése négy alapfogalommal és a végén egy főellenséggel.',
  },
  chapterN: { cs: '{0}. kapitola', en: 'Chapter {0}', sk: '{0}. kapitola', hu: '{0}. fejezet' },
  pIntro: { cs: 'Úvod', en: 'Opening', sk: 'Úvod', hu: 'Bevezetés' },
  pIntroT: {
    cs: 'Položte třídě otázku kapitoly a nechte žáky tipovat: „{0}“',
    en: 'Ask the class the chapter’s question and let pupils guess: “{0}”',
    sk: 'Položte triede otázku kapitoly a nechajte žiakov tipovať: „{0}“',
    hu: 'Tegye fel az osztálynak a fejezet kérdését, és hagyja, hogy a diákok tippeljenek: „{0}”',
  },
  pCores: { cs: 'Čtyři jádra', en: 'Four core concepts', sk: 'Štyri jadrá', hu: 'Négy alapfogalom' },
  pCoresT: {
    cs: 'Žáci projdou misi krok po kroku. Každé jádro má krátký výklad, úkol „Zkus to!“, častý omyl a kontrolní otázku, většina i minihru. Po každém jádru se zastavte u jedné otázky ze třídy.',
    en: 'Pupils go through the mission step by step. Each core concept has a short explanation, a “Try it!” task, a common mistake and a check question, and most have a mini-game. After each one, stop for one question from the class.',
    sk: 'Žiaci prejdú misiu krok za krokom. Každé jadro má krátky výklad, úlohu „Vyskúšaj to!“, častý omyl a kontrolnú otázku, väčšina aj minihru. Po každom jadre sa zastavte pri jednej otázke z triedy.',
    hu: 'A diákok lépésről lépésre haladnak a küldetésben. Minden alapfogalomhoz tartozik rövid magyarázat, „Próbáld ki!” feladat, gyakori tévedés és ellenőrző kérdés, a legtöbbhöz minijáték is. Mindegyik után álljanak meg egy kérdésnél az osztályból.',
  },
  read: { cs: 'čtení {0} min', en: '{0} min read', sk: 'čítanie {0} min', hu: '{0} perc olvasás' },
  pBoss: { cs: 'Boss', en: 'Boss', sk: 'Boss', hu: 'Főellenség' },
  pBossT: {
    cs: 'Žáci odpoví vlastními slovy na otázku bosse. Kniha odpověď vyhodnotí a napoví, co chybí. Pár dobrých odpovědí nechte přečíst nahlas:',
    en: 'Pupils answer the boss question in their own words. The book assesses the answer and hints at what is missing. Have a few good answers read aloud:',
    sk: 'Žiaci odpovedia vlastnými slovami na otázku bossa. Kniha odpoveď vyhodnotí a napovie, čo chýba. Pár dobrých odpovedí nechajte prečítať nahlas:',
    hu: 'A diákok saját szavaikkal válaszolnak a főellenség kérdésére. A könyv értékeli a választ, és súg, mi hiányzik belőle. Néhány jó választ olvassanak fel hangosan:',
  },
  pEnd: { cs: 'Závěr', en: 'Wrap-up', sk: 'Záver', hu: 'Lezárás' },
  pEndT: {
    cs: 'Odměna: „{0}“. Kdo chce víc, pokračuje doma ve světě, který ho baví: stejná jádra najde ve hrách, na webech, u robotů i na sociálních sítích.',
    en: 'Reward: “{0}”. Pupils who want more carry on at home in a world they enjoy: the same core concepts in games, websites, robots and social media.',
    sk: 'Odmena: „{0}“. Kto chce viac, pokračuje doma vo svete, ktorý ho baví: rovnaké jadrá nájde v hrách, na weboch, pri robotoch aj na sociálnych sieťach.',
    hu: 'Jutalom: „{0}”. Aki többet szeretne, otthon folytatja egy őt érdeklő világban: ugyanazok az alapfogalmak a játékokban, a weboldalakon, a robotoknál és a közösségi médiában.',
  },

  linkFor: { cs: 'Odkaz pro žáky', en: 'Link for pupils', sk: 'Odkaz pre žiakov', hu: 'Link a diákoknak' },
  copy: { cs: 'Kopírovat', en: 'Copy', sk: 'Kopírovať', hu: 'Másolás' },
  copied: { cs: 'Zkopírováno ✓', en: 'Copied ✓', sk: 'Skopírované ✓', hu: 'Kimásolva ✓' },
  qr: { cs: 'QR na projektor', en: 'QR for the projector', sk: 'QR na projektor', hu: 'QR a kivetítőre' },
  open: { cs: 'Otevřít', en: 'Open', sk: 'Otvoriť', hu: 'Megnyitás' },
  close: { cs: 'Zavřít', en: 'Close', sk: 'Zavrieť', hu: 'Bezárás' },
  scan: { cs: 'Naskenuj telefonem nebo tabletem', en: 'Scan with a phone or tablet', sk: 'Naskenuj telefónom alebo tabletom', hu: 'Olvasd be telefonnal vagy táblagéppel' },
  qrLong: {
    cs: 'Odkaz je na QR kód moc dlouhý. Pošlete ho žákům, kam jim posíláte úkoly, nebo vyberte méně jader.',
    en: 'This link is too long for a QR code. Send it to your pupils wherever you send them homework, or pick fewer core concepts.',
    sk: 'Odkaz je na QR kód pridlhý. Pošlite ho žiakom tam, kam im posielate úlohy, alebo vyberte menej jadier.',
    hu: 'Ez a link túl hosszú egy QR-kódhoz. Küldje el a diákoknak oda, ahová a feladatokat szokta, vagy válasszon kevesebb alapfogalmat.',
  },

  miniH: { cs: 'Mikromise na opakování', en: 'A micro-mission for revision', sk: 'Mikromisia na opakovanie', hu: 'Miniküldetés ismétléshez' },
  miniIntro: {
    cs: 'Zaškrtněte 1 až 12 jader z libovolných kapitol. Žáci je projdou v podání, které jim sedne, a na konci bossovi vysvětlí, jak spolu souvisí. Hodí se na opakování před testem.',
    en: 'Tick 1 to 12 core concepts from any chapters. Pupils work through them in whichever telling suits them and, at the end, explain to the boss how they fit together. Good for revision before a test.',
    sk: 'Zaškrtnite 1 až 12 jadier z ľubovoľných kapitol. Žiaci ich prejdú v podaní, ktoré im sedí, a na konci bossovi vysvetlia, ako spolu súvisia. Hodí sa na opakovanie pred testom.',
    hu: 'Jelöljön ki 1–12 alapfogalmat bármelyik fejezetből. A diákok a nekik megfelelő változatban haladnak végig rajtuk, a végén pedig elmagyarázzák a főellenségnek, hogyan függenek össze. Dolgozat előtti ismétléshez jó.',
  },
  miniName: { cs: 'Název mise (nepovinné)', en: 'Mission name (optional)', sk: 'Názov misie (nepovinné)', hu: 'A küldetés neve (nem kötelező)' },
  miniPh: { cs: 'Opakování před testem', en: 'Revision before the test', sk: 'Opakovanie pred testom', hu: 'Ismétlés dolgozat előtt' },
  miniCount: { cs: 'Vybráno {0} z 12', en: '{0} of 12 selected', sk: 'Vybraté {0} z 12', hu: '{0} / 12 kiválasztva' },
  miniEmpty: {
    cs: 'Vyberte aspoň jedno jádro a odkaz se objeví tady.', en: 'Pick at least one core concept and the link appears here.',
    sk: 'Vyberte aspoň jedno jadro a odkaz sa objaví tu.', hu: 'Válasszon legalább egy alapfogalmat, és itt megjelenik a link.',
  },

  svetIntro: {
    cs: 'Každý svět projde jádra na tématu, které děti znají ze života, a skončí projektovým úkolem: žák popíše, co postaví a jak. Mise světa se počítá do certifikátu {0}. Hodí se na projektový den nebo jako domácí práce na několik dní.',
    en: 'Each world goes through the core concepts on a topic children know from everyday life and ends with a project task: the pupil describes what they will build and how. A world mission counts towards the {0} certificate. Good for a project day or as homework over a few days.',
    sk: 'Každý svet prejde jadrá na téme, ktorú deti poznajú zo života, a skončí projektovou úlohou: žiak opíše, čo postaví a ako. Misia sveta sa počíta do certifikátu {0}. Hodí sa na projektový deň alebo ako domáca práca na niekoľko dní.',
    hu: 'Minden világ egy, a gyerekek által a mindennapokból ismert témán megy végig az alapfogalmakon, és projektfeladattal zárul: a diák leírja, mit és hogyan fog megépíteni. A világ küldetése beszámít a {0} tanúsítványba. Projektnapra vagy néhány napos házi feladatnak is jó.',
  },
  steps: { cs: '{0} kroků', en: '{0} steps', sk: '{0} krokov', hu: '{0} lépés' },
  advanced: { cs: 'pokročilé', en: 'advanced', sk: 'pokročilé', hu: 'haladó' },
  task: { cs: 'Projektový úkol na konci:', en: 'Project task at the end:', sk: 'Projektová úloha na konci:', hu: 'Projektfeladat a végén:' },
  worldPage: { cs: 'Rozcestník světa', en: 'The world’s start page', sk: 'Rozcestník sveta', hu: 'A világ nyitóoldala' },
  tvurceNote: {
    cs: 'Pokročilý projekt napříč světy. Jeho boss je podmínkou certifikátu {0}.',
    en: 'An advanced project across several worlds. Beating its boss is required for the {0} certificate.',
    sk: 'Pokročilý projekt naprieč svetmi. Jeho boss je podmienkou certifikátu {0}.',
    hu: 'Haladó projekt több világon át. A főellenségének legyőzése a {0} tanúsítvány feltétele.',
  },

  navNadani: { cs: 'Pro nadané', en: 'For gifted pupils', sk: 'Pre nadaných', hu: 'Tehetségeseknek' },
  nadH: { cs: 'Pro nadané: výzvy a expedice', en: 'For gifted pupils: challenges and expeditions', sk: 'Pre nadaných: výzvy a expedície', hu: 'Tehetségeseknek: kihívások és expedíciók' },
  nadIntro: {
    cs: 'Pro žáky, kterým kniha nestačí. U jader je {0} výzev navíc a {1} her navíc: těžší úlohy na jeden večer s nápovědami a řešením. Dvanáct expedic vede ještě dál, ke skutečným nástrojům, soutěžím a komunitám. Nic z toho se nepočítá do certifikátu a nic se nezamyká: je to nabídka pro ty, koho téma chytlo.',
    en: 'For pupils who find the book is not enough. Next to the core concepts there are {0} extra challenges and {1} extra games: harder one-evening tasks with hints and a solution. Twelve expeditions go further still, to real tools, contests and communities. None of it counts toward the certificate and nothing is locked: it is an offer for those the topic has caught.',
    sk: 'Pre žiakov, ktorým kniha nestačí. Pri jadrách je {0} výziev navyše a {1} hier navyše: ťažšie úlohy na jeden večer s nápoveďami a riešením. Dvanásť expedícií vedie ešte ďalej, k skutočným nástrojom, súťažiam a komunitám. Nič z toho sa nepočíta do certifikátu a nič sa nezamyká: je to ponuka pre tých, koho téma chytila.',
    hu: 'Azoknak a diákoknak, akiknek a könyv nem elég. Az alapfogalmak mellett {0} extra kihívás és {1} extra játék van: nehezebb feladatok egy estére, súgóval és megoldással. Tizenkét expedíció még tovább visz, valódi eszközökhöz, versenyekhez és közösségekhez. Ebből semmi sem számít bele a tanúsítványba, és semmi sincs lezárva: ajánlat azoknak, akiket megfogott a téma.',
  },
  nadHow: { cs: 'Jak s expedicemi pracovat', en: 'How to work with the expeditions', sk: 'Ako s expedíciami pracovať', hu: 'Hogyan dolgozzon az expedíciókkal' },
  nadHow1: {
    cs: 'Nabídněte expedici žákovi, který má hotová jádra její kapitoly nebo jejího světa. Expedice je na několik večerů, doma nebo v kroužku.',
    en: 'Offer an expedition to a pupil who has finished the core concepts of its chapter or world. An expedition takes a few evenings, at home or in a club.',
    sk: 'Ponúknite expedíciu žiakovi, ktorý má hotové jadrá jej kapitoly alebo jej sveta. Expedícia je na niekoľko večerov, doma alebo v krúžku.',
    hu: 'Ajánljon fel egy expedíciót annak a diáknak, aki már végzett a hozzá tartozó fejezet vagy világ alapfogalmaival. Egy expedíció néhány estét vesz igénybe, otthon vagy szakkörön.',
  },
  nadHow2: {
    cs: 'Každá má pět kroků: 🧩 výzvu, 🛠 dílnu se skutečným nástrojem, 🔍 rozbor, 👥 partu (soutěž nebo komunitu) a 🚀 vlastní projekt. Tři odbočky jdou do hloubky podle zájmu.',
    en: 'Each one has five steps: 🧩 a challenge, 🛠 a workshop with a real tool, 🔍 a look inside, 👥 a crew (a contest or a community) and 🚀 a project of their own. Three side trips go deeper, as interest takes them.',
    sk: 'Každá má päť krokov: 🧩 výzvu, 🛠 dielňu so skutočným nástrojom, 🔍 rozbor, 👥 partiu (súťaž alebo komunitu) a 🚀 vlastný projekt. Tri odbočky idú do hĺbky podľa záujmu.',
    hu: 'Mindegyiknek öt lépése van: 🧩 kihívás, 🛠 műhely valódi eszközzel, 🔍 elemzés, 👥 csapat (verseny vagy közösség) és 🚀 saját projekt. Három kitérő mélyebbre visz, érdeklődés szerint.',
  },
  nadHow3: {
    cs: 'Na konci čeká závěrečná zkouška: žák vlastními slovy popíše svůj plán a AI ho posoudí podle bodů zadání. Plán je dobrý podklad pro rozhovor s vámi.',
    en: 'At the end comes the final test: the pupil describes their plan in their own words and the AI assesses it against the points of the task. The plan is a good starting point for a talk with you.',
    sk: 'Na konci čaká záverečná skúška: žiak vlastnými slovami opíše svoj plán a AI ho posúdi podľa bodov zadania. Plán je dobrý podklad na rozhovor s vami.',
    hu: 'A végén záróvizsga vár: a diák saját szavaival leírja a tervét, a MI pedig a feladat pontjai alapján értékeli. A terv jó kiindulópont egy beszélgetéshez Önnel.',
  },
  nadHow4: {
    cs: 'Krok Parta a rozcestník vedou na weby mimo knihu. Před prvním přihlášením projděte se žákem stránku {0}: deset pravidel a věk, od kterého služby nechtějí souhlas rodiče.',
    en: 'The crew step and the signpost lead to websites outside the book. Before the first sign-up, go through the page {0} with the pupil: ten rules and the age from which services no longer ask for a parent’s consent.',
    sk: 'Krok Partia a rozcestník vedú na weby mimo knihy. Pred prvým prihlásením prejdite so žiakom stránku {0}: desať pravidiel a vek, od ktorého služby nechcú súhlas rodiča.',
    hu: 'A csapat lépés és az útmutató a könyvön kívüli oldalakra vezet. Az első regisztráció előtt nézze át a diákkal a(z) {0} oldalt: tíz szabály, és hogy hány éves kortól nem kérnek a szolgáltatások szülői hozzájárulást.',
  },
  safetyPage: { cs: 'Bezpečně v komunitách', en: 'Safe in communities', sk: 'Bezpečne v komunitách', hu: 'Biztonságban a közösségekben' },
  expCh: { cs: 'Kapitola {0}', en: 'Chapter {0}', sk: 'Kapitola {0}', hu: '{0} fejezet' },
  expGoal: { cs: 'Cíl:', en: 'Goal:', sk: 'Cieľ:', hu: 'Cél:' },
  expBranches: { cs: 'Odbočky:', en: 'Side trips:', sk: 'Odbočky:', hu: 'Kitérők:' },
  expExam: { cs: 'Závěrečná zkouška:', en: 'Final test:', sk: 'Záverečná skúška:', hu: 'Záróvizsga:' },
  expBase: { cs: 'Základna expedice v knize', en: 'The expedition’s page in the book', sk: 'Základňa expedície v knihe', hu: 'Az expedíció oldala a könyvben' },
  expGuide: { cs: 'Rozcestník: nástroje a komunity', en: 'Signpost: tools and communities', sk: 'Rozcestník: nástroje a komunity', hu: 'Útmutató: eszközök és közösségek' },
  expAll: { cs: 'Všechny expedice v knize', en: 'All expeditions in the book', sk: 'Všetky expedície v knihe', hu: 'Az összes expedíció a könyvben' },

  tvH: { cs: 'Tvůrčí úkol s kódem třídy', en: 'A creative task with a class code', sk: 'Tvorivá úloha s kódom triedy', hu: 'Alkotó feladat osztálykóddal' },
  tvIntro: {
    cs: 'Žáci napíšou vlastní podání jádra: vysvětlení, příběh, komiks… Studio jim ukáže, co musí podání pokrýt, a AI kouč jim pomůže ho vylepšit.',
    en: 'Pupils write their own telling of a core concept: an explanation, a story, a comic… The studio shows what the telling has to cover, and an AI coach helps them improve it.',
    sk: 'Žiaci napíšu vlastné podanie jadra: vysvetlenie, príbeh, komiks… Štúdio im ukáže, čo musí podanie pokryť, a AI kouč im ho pomôže vylepšiť.',
    hu: 'A diákok megírják egy alapfogalom saját változatát: magyarázatot, történetet, képregényt… A stúdió megmutatja, mit kell lefednie a változatnak, egy MI-coach pedig segít jobbá tenni.',
  },
  core: { cs: 'Jádro', en: 'Core concept', sk: 'Jadro', hu: 'Alapfogalom' },
  code: { cs: 'Kód třídy', en: 'Class code', sk: 'Kód triedy', hu: 'Osztálykód' },
  codeHint: {
    cs: '4–16 znaků: malá písmena bez diakritiky, číslice a pomlčka, třeba 8b-2026', en: '4–16 characters: lowercase letters, digits and dashes, e.g. 8b-2026',
    sk: '4–16 znakov: malé písmená bez diakritiky, číslice a pomlčka, napríklad 8b-2026', hu: '4–16 karakter: ékezet nélküli kisbetűk, számjegyek és kötőjel, például 8b-2026',
  },
  codeBad: {
    cs: 'Kód musí mít 4–16 znaků a jen malá písmena bez diakritiky, číslice a pomlčky.', en: 'The code needs 4–16 characters: only lowercase letters, digits and dashes.',
    sk: 'Kód musí mať 4–16 znakov a iba malé písmená bez diakritiky, číslice a pomlčky.', hu: 'A kód 4–16 karakterből állhat: csak ékezet nélküli kisbetű, számjegy és kötőjel.',
  },
  tvPupils: { cs: 'Odkaz pro žáky: napsat vlastní podání', en: 'Link for pupils: write your own telling', sk: 'Odkaz pre žiakov: napísať vlastné podanie', hu: 'Link a diákoknak: saját változat írása' },
  tvGallery: { cs: 'Galerie třídy: pro vás, na projektor', en: 'Class gallery: for you, on the projector', sk: 'Galéria triedy: pre vás, na projektor', hu: 'Osztálygaléria: Önnek, a kivetítőre' },
  tvNote: {
    cs: 'Kód třídy si kniha vezme z vašeho odkazu a při sdílení podání ho žákům sama předvyplní. Podání sdílená s kódem vidí jen vaše třída. V galerii je promítnete tlačítkem ▶ Prezentovat, třída hlasuje ❤️ a vy nejlepší doporučíte ⭐ redakci do společné knihy.',
    en: 'The book takes the class code from your link and fills it in for pupils when they share a telling. Tellings shared with the code are visible to your class only. In the gallery you show them with ▶ Present, the class votes ❤️, and you recommend the best one ⭐ to the editors for the shared book.',
    sk: 'Kód triedy si kniha vezme z vášho odkazu a pri zdieľaní podania ho žiakom sama predvyplní. Podania zdieľané s kódom vidí iba vaša trieda. V galérii ich premietnete tlačidlom ▶ Prezentovať, trieda hlasuje ❤️ a vy najlepšie odporučíte ⭐ redakcii do spoločnej knihy.',
    hu: 'A könyv a linkjéből veszi az osztálykódot, és megosztáskor kitölti a diákoknak. A kóddal megosztott változatokat csak az Ön osztálya látja. A galériában a ▶ Bemutatás gombbal vetíti ki őket, az osztály ❤️-tel szavaz, Ön pedig a legjobbat ⭐-gal ajánlja a szerkesztőknek a közös könyvbe.',
  },

  certIntro: {
    cs: 'Certifikát vydává AI dětem. Žák ho najde v záložce Ty, kde také vidí, co mu ke kterému stupni chybí, a může si ho vytisknout. Kniha nikoho nehoní, nemá série ani odpočty: pod jádry jen ukazuje, co k dalšímu stupni chybí, a po čtyřech jádrech za jedno sezení nabídne dobré místo na pauzu.',
    en: 'The certificate is issued by AI dětem. Pupils find it in the You tab, where they also see what is still missing for each level, and they can print it. The book doesn’t push anyone, with no streaks or countdowns: under the core concepts it just shows what the next level still needs, and after four core concepts in one sitting it suggests a good place to stop.',
    sk: 'Certifikát vydáva AI dětem. Žiak ho nájde v záložke Ty, kde tiež vidí, čo mu ku ktorému stupňu chýba, a môže si ho vytlačiť. Kniha nikoho nenaháňa, nemá série ani odpočty: pod jadrami len ukazuje, čo k ďalšiemu stupňu chýba, a po štyroch jadrách za jedno sedenie ponúkne dobré miesto na prestávku.',
    hu: 'A tanúsítványt az AI dětem adja ki. A diák a Te fülön találja meg, ott azt is látja, mi hiányzik még az egyes szintekhez, és ki is nyomtathatja. A könyv senkit sem hajt, nincsenek sorozatok vagy visszaszámlálások: az alapfogalmak alatt csak azt mutatja, mi kell még a következő szinthez, és egy ülésben négy alapfogalom után jó pontot ajánl a szünetre.',
  },
  tierF: {
    cs: 'Všech 24 jader prošlých (přečtených, nebo ověřených tlačítkem „Už to znám“) a 6 misí kapitol s poraženým bossem.',
    en: 'All 24 core concepts done (read, or checked with the “I know this” button) and the 6 chapter missions with the boss beaten.',
    sk: 'Všetkých 24 jadier prejdených (prečítaných alebo overených tlačidlom „Už to poznám“) a 6 misií kapitol s porazeným bossom.',
    hu: 'Mind a 24 alapfogalom kész (elolvasva, vagy az „Ezt már tudom” gombbal ellenőrizve) és a 6 fejezetküldetés legyőzött főellenséggel.',
  },
  tierP: {
    cs: 'Navíc porozumění všem jádrům ověřené rychlou kontrolou, opakováním nebo hrou a jeden projekt ve světě s poraženým bossem.',
    en: 'Plus understanding of every core concept checked by a quick check, a recall or a game, and one world project with the boss beaten.',
    sk: 'Navyše porozumenie všetkým jadrám overené rýchlou kontrolou, opakovaním alebo hrou a jeden projekt vo svete s porazeným bossom.',
    hu: 'Ezen felül minden alapfogalom megértése igazolva gyors ellenőrzéssel, ismétléssel vagy játékkal, és egy világprojekt legyőzött főellenséggel.',
  },
  tierG: {
    cs: 'Navíc poražený boss závěrečného projektu „{0}“ a všechna jádra udržená: kartička k opakování zodpovězená správně i s odstupem aspoň dvou dnů.',
    en: 'Plus the boss of the final project “{0}” beaten and every core concept kept: its recall card answered correctly again after a gap of at least two days.',
    sk: 'Navyše porazený boss záverečného projektu „{0}“ a všetky jadrá udržané: kartička na opakovanie zodpovedaná správne aj s odstupom aspoň dvoch dní.',
    hu: 'Ezen felül legyőzött főellenség a „{0}” záróprojektben, és minden alapfogalom megtartva: az ismétlőkártyára legalább kétnapos szünet után is helyes a válasz.',
  },
  navTym: { cs: 'Skupinový úkol', en: 'Group task', sk: 'Skupinová úloha', hu: 'Csoportfeladat' },
  tymH: { cs: 'Skupinové úkoly s AI asistenty', en: 'Group tasks with AI assistants', sk: 'Skupinové úlohy s AI asistentmi', hu: 'Csoportfeladatok AI-asszisztensekkel' },
  tymIntro: {
    cs: 'Skládačka: v týmu má každé místo kartu s jiným kouskem informací a tým je musí dát dohromady, aby odpověděl drakovi. Místa v týmu můžou obsadit AI asistenti. Každý zná jen svou kartu, na otázky dětí odpovídá a odpověď za ně nenapíše. Kód na konci započítá úkol všem v týmu.',
    en: 'A jigsaw: each seat in the team holds a card with a different piece of information, and the team has to put the pieces together to answer the dragon. AI assistants can take seats. Each one knows only its own card, answers the children’s questions and never writes the answer for them. A code at the end counts the task for everyone in the team.',
    sk: 'Skladačka: v tíme má každé miesto kartu s iným kúskom informácií a tím ich musí dať dokopy, aby odpovedal drakovi. Miesta v tíme môžu obsadiť AI asistenti. Každý pozná len svoju kartu, na otázky detí odpovedá a odpoveď za ne nenapíše. Kód na konci započíta úlohu všetkým v tíme.',
    hu: 'Kirakós: a csapatban minden helyhez más információdarabot tartalmazó kártya tartozik, és a csapatnak össze kell raknia a darabokat, hogy válaszoljon a sárkánynak. A helyeket AI-asszisztensek is elfoglalhatják. Mindegyik csak a saját kártyáját ismeri, válaszol a gyerekek kérdéseire, de a választ nem írja meg helyettük. A végén kapott kód a csapat minden tagjának beszámítja a feladatot.',
  },
  tymKids: { cs: 'Dětí v týmu', en: 'Children per team', sk: 'Detí v tíme', hu: 'Gyerekek a csapatban' },
  tymAi: { cs: 'AI asistentů', en: 'AI assistants', sk: 'AI asistentov', hu: 'AI-asszisztensek' },
  tymSize: { cs: 'Tým má 2 až 4 členy.', en: 'A team has 2 to 4 members.', sk: 'Tím má 2 až 4 členov.', hu: 'Egy csapat 2–4 tagú.' },
  tymWho: { cs: 'Kdo má jakou kartu', en: 'Who holds which card', sk: 'Kto má akú kartu', hu: 'Kinél melyik kártya van' },
  tymChild: { cs: 'Dítě {0}', en: 'Child {0}', sk: 'Dieťa {0}', hu: '{0}. gyerek' },
  tymBot: { cs: '🤖 AI asistent {0}', en: '🤖 AI assistant {0}', sk: '🤖 AI asistent {0}', hu: '🤖 {0}. AI-asszisztens' },
  tymHow: { cs: 'Jak na to', en: 'How it works', sk: 'Ako na to', hu: 'Hogyan működik' },
  tymHow1: {
    cs: 'Rozdělte třídu do týmů po {0}. Každé dítě otevře odkaz nebo QR kód na svém zařízení.',
    en: 'Split the class into teams of {0}. Each child opens the link or QR code on their own device.',
    sk: 'Rozdeľte triedu do tímov po {0}. Každé dieťa otvorí odkaz alebo QR kód na svojom zariadení.',
    hu: 'Ossza a osztályt {0} fős csapatokra. Minden gyerek a saját eszközén nyitja meg a linket vagy a QR-kódot.',
  },
  tymHow1solo: {
    cs: 'Každé dítě pracuje samo se svými AI asistenty: otevře odkaz nebo QR kód na svém zařízení.',
    en: 'Each child works alone with their AI assistants: they open the link or QR code on their own device.',
    sk: 'Každé dieťa pracuje samo so svojimi AI asistentmi: otvorí odkaz alebo QR kód na svojom zariadení.',
    hu: 'Minden gyerek egyedül dolgozik a saját AI-asszisztenseivel: a saját eszközén nyitja meg a linket vagy a QR-kódot.',
  },
  tymHow2: {
    cs: 'Děti se v týmu domluví, kdo má jaké číslo. Kartu nikdo jen neukazuje: každé dítě ostatním vlastními slovy řekne, co na ní je.',
    en: 'The children agree who is which number. Nobody just shows a card: each child tells the others in their own words what it says.',
    sk: 'Deti sa v tíme dohodnú, kto má aké číslo. Kartu nikto len neukazuje: každé dieťa ostatným vlastnými slovami povie, čo na nej je.',
    hu: 'A gyerekek megbeszélik, ki melyik szám. A kártyát senki nem csak megmutatja: mindenki a saját szavaival mondja el a többieknek, mi áll rajta.',
  },
  tymHow3: {
    cs: 'AI asistentů se děti ptají přímo v knize. Asistent prozradí jen to, co má na kartě; bez připojení ukáže kartu celou.',
    en: 'The children ask the AI assistants right in the book. An assistant tells only what is on its card; without a connection it shows its whole card.',
    sk: 'AI asistentov sa deti pýtajú priamo v knihe. Asistent prezradí len to, čo má na karte; bez pripojenia ukáže kartu celú.',
    hu: 'Az AI-asszisztenseket a gyerekek közvetlenül a könyvben kérdezik. Az asszisztens csak azt árulja el, ami a kártyáján áll; kapcsolat nélkül megmutatja a teljes kártyát.',
  },
  tymHow4: {
    cs: 'Tým napíše jednu společnou odpověď a jedno dítě ji pošle drakovi. Když odpověď ještě není úplná, drak položí naváděcí otázku. Po úspěchu se ukáže kód, který ostatní zadají u sebe.',
    en: 'The team writes one answer together and one child sends it to the dragon. If it is not complete yet, the dragon asks a guiding question. After a pass a code appears, and the others type it in on their devices.',
    sk: 'Tím napíše jednu spoločnú odpoveď a jedno dieťa ju pošle drakovi. Keď odpoveď ešte nie je úplná, drak položí navádzajúcu otázku. Po úspechu sa ukáže kód, ktorý ostatní zadajú u seba.',
    hu: 'A csapat egy közös választ ír, és egy gyerek elküldi a sárkánynak. Ha a válasz még nem teljes, a sárkány rávezető kérdést tesz fel. Siker után megjelenik egy kód, amelyet a többiek beírnak a saját eszközükön.',
  },
  tymHow4solo: {
    cs: 'Dítě dá kousky dohromady a pošle odpověď drakovi. Když ještě není úplná, drak položí naváděcí otázku.',
    en: 'The child puts the pieces together and sends the answer to the dragon. If it is not complete yet, the dragon asks a guiding question.',
    sk: 'Dieťa dá kúsky dokopy a pošle odpoveď drakovi. Keď ešte nie je úplná, drak položí navádzajúcu otázku.',
    hu: 'A gyerek összerakja a darabokat, és elküldi a választ a sárkánynak. Ha még nem teljes, a sárkány rávezető kérdést tesz fel.',
  },
  tymNote: {
    cs: 'Otázky pro AI asistenty i odpověď pro draka posílá kniha k vyhodnocení poskytovateli AI modelu, stejně jako u misí. Upozorněte děti, ať do nich nepíšou jména ani osobní údaje.',
    en: 'As with missions, the book sends the questions for the AI assistants and the answer for the dragon to the AI model provider. Remind the children not to write names or personal details in them.',
    sk: 'Otázky pre AI asistentov aj odpoveď pre draka posiela kniha na vyhodnotenie poskytovateľovi AI modelu, rovnako ako pri misiách. Upozornite deti, nech do nich nepíšu mená ani osobné údaje.',
    hu: 'A küldetésekhez hasonlóan a könyv az AI-asszisztenseknek szóló kérdéseket és a sárkánynak szóló választ is elküldi az AI-modell szolgáltatójának. Figyelmeztesse a gyerekeket, hogy ne írjanak bele neveket vagy személyes adatokat.',
  },
  // ---------- kód třídy, dotazník po hodině, informace pro rodiče (pilot ve školách) ----------
  trIntro: {
    cs: 'Odkazy a QR kódy na této stránce nesou kód vaší třídy. Kniha si ho v zařízení žáka zapamatuje: v galerii třídy pak uvidíte práce své třídy a záznamy o práci s knihou (bez jmen) půjde vyhodnotit po třídách. Pro každou třídu použijte jiný kód.',
    en: 'The links and QR codes on this page carry your class code. The book remembers it on each pupil’s device: the class gallery then shows your class’s work, and the records of work with the book (no names) can be evaluated class by class. Use a different code for each class.',
    sk: 'Odkazy a QR kódy na tejto stránke nesú kód vašej triedy. Kniha si ho v zariadení žiaka zapamätá: v galérii triedy potom uvidíte práce svojej triedy a záznamy o práci s knihou (bez mien) bude možné vyhodnotiť po triedach. Pre každú triedu použite iný kód.',
    hu: 'Az oldal linkjei és QR-kódjai tartalmazzák az osztály kódját. A könyv megjegyzi a diák eszközén: az osztálygalériában így az Ön osztályának munkái jelennek meg, a könyvvel végzett munka adatai (nevek nélkül) pedig osztályonként értékelhetők. Minden osztálynak más kódot használjon.',
  },
  trWhich: { cs: 'Třída', en: 'Class', sk: 'Trieda', hu: 'Osztály' },
  trNote: { cs: 'Poznámka jen pro vás', en: 'A note just for you', sk: 'Poznámka len pre vás', hu: 'Megjegyzés csak Önnek' },
  trNotePh: { cs: 'např. 7.B, úterý', en: 'e.g. 7B, Tuesdays', sk: 'napr. 7.B, utorok', hu: 'pl. 7.B, kedd' },
  trNoteHint: {
    cs: 'Zůstane jen v tomto prohlížeči, nikam se neposílá.', en: 'Stays in this browser only and is never sent anywhere.',
    sk: 'Zostane len v tomto prehliadači, nikam sa neposiela.', hu: 'Csak ebben a böngészőben marad, sehová nem küldjük el.',
  },
  trRandom: {
    cs: 'Kód je náhodný a neprozrazuje školu ani žáky.', en: 'The code is random and reveals neither the school nor the pupils.',
    sk: 'Kód je náhodný a neprezrádza školu ani žiakov.', hu: 'A kód véletlenszerű, sem az iskolát, sem a diákokat nem árulja el.',
  },
  trNew: { cs: '+ Další třída', en: '+ Another class', sk: '+ Ďalšia trieda', hu: '+ Újabb osztály' },
  trHave: { cs: 'Mám kód z jiného počítače', en: 'I have a code from another computer', sk: 'Mám kód z iného počítača', hu: 'Van kódom egy másik gépről' },
  trUse: { cs: 'Použít', en: 'Use', sk: 'Použiť', hu: 'Használat' },

  navDot: { cs: 'Dotazník po hodině', en: 'After-lesson survey', sk: 'Dotazník po hodine', hu: 'Kérdőív az óra után' },
  dotIntro: {
    cs: 'Po hodině s knihou prosíme o šest odpovědí, zaberou asi 3 minuty. Podle kódu třídy {0} se odpověď spáruje se záznamy z hodiny. Pomůže nám knihu vylepšit a doložit, jak funguje ve školách.',
    en: 'After a lesson with the book, please answer six questions; it takes about 3 minutes. The class code {0} pairs your answer with the records from the lesson. It helps us improve the book and show how it works in schools.',
    sk: 'Po hodine s knihou prosíme o šesť odpovedí, zaberú asi 3 minúty. Podľa kódu triedy {0} sa odpoveď spáruje so záznamami z hodiny. Pomôže nám knihu vylepšiť a doložiť, ako funguje v školách.',
    hu: 'A könyvvel tartott óra után kérjük, válaszoljon hat kérdésre, kb. 3 percet vesz igénybe. Az osztálykód ({0}) alapján a válaszát összekapcsoljuk az óra adataival. Ez segít jobbá tenni a könyvet, és megmutatni, hogyan működik az iskolákban.',
  },
  dotOther: {
    cs: 'Dotazník je za třídu vybranou nahoře v části Kód třídy.', en: 'The survey is for the class selected above under Class code.',
    sk: 'Dotazník je za triedu vybranú hore v časti Kód triedy.', hu: 'A kérdőív a fent, az Osztálykód résznél kiválasztott osztályra vonatkozik.',
  },
  q1: { cs: '1. Jak třída s knihou pracovala?', en: '1. How did the class work with the book?', sk: '1. Ako trieda s knihou pracovala?', hu: '1. Hogyan dolgozott az osztály a könyvvel?' },
  q1class: { cs: 'v hodině celá třída', en: 'the whole class in a lesson', sk: 'v hodine celá trieda', hu: 'az egész osztály órán' },
  q1groups: { cs: 'skupinové úkoly', en: 'group tasks', sk: 'skupinové úlohy', hu: 'csoportos feladatok' },
  q1home: { cs: 'doma', en: 'at home', sk: 'doma', hu: 'otthon' },
  q1other: { cs: 'jinak:', en: 'other:', sk: 'inak:', hu: 'másképp:' },
  q1n: { cs: 'Počet vyučovacích hodin s knihou', en: 'Number of lessons with the book', sk: 'Počet vyučovacích hodín s knihou', hu: 'A könyvvel tartott tanórák száma' },
  q2: { cs: '2. Jak snadné bylo knihu v hodině použít?', en: '2. How easy was it to use the book in a lesson?', sk: '2. Aké ľahké bolo použiť knihu v hodine?', hu: '2. Mennyire volt könnyű órán használni a könyvet?' },
  q2lo: { cs: 'velmi obtížné', en: 'very hard', sk: 'veľmi ťažké', hu: 'nagyon nehéz' },
  q2hi: { cs: 'velmi snadné', en: 'very easy', sk: 'veľmi ľahké', hu: 'nagyon könnyű' },
  q3: { cs: '3. Byla hodnocení bosse férová?', en: '3. Were the boss’s assessments fair?', sk: '3. Boli hodnotenia bossa férové?', hu: '3. Igazságosak voltak a főellenség értékelései?' },
  q3lo: { cs: 'vůbec ne', en: 'not at all', sk: 'vôbec nie', hu: 'egyáltalán nem' },
  q3hi: { cs: 'úplně', en: 'completely', sk: 'úplne', hu: 'teljesen' },
  q3ex: { cs: 'Příklad, kdy férové nebylo (nepovinné)', en: 'An example of when it was not fair (optional)', sk: 'Príklad, kedy férové nebolo (nepovinné)', hu: 'Példa, amikor nem volt igazságos (nem kötelező)' },
  q4: { cs: '4. Co žáky bavilo a co nefungovalo?', en: '4. What did pupils enjoy, and what did not work?', sk: '4. Čo žiakov bavilo a čo nefungovalo?', hu: '4. Mit élveztek a diákok, és mi nem működött?' },
  q5: { cs: '5. Použijete knihu znovu?', en: '5. Will you use the book again?', sk: '5. Použijete knihu znova?', hu: '5. Használni fogja újra a könyvet?' },
  aYes: { cs: 'ano', en: 'yes', sk: 'áno', hu: 'igen' },
  aRYes: { cs: 'spíš ano', en: 'probably yes', sk: 'skôr áno', hu: 'inkább igen' },
  aRNo: { cs: 'spíš ne', en: 'probably not', sk: 'skôr nie', hu: 'inkább nem' },
  aNo: { cs: 'ne', en: 'no', sk: 'nie', hu: 'nem' },
  q6: { cs: '6. Smíme vaši odpověď citovat ve zprávě pro TAČR?', en: '6. May we quote your answer in our report to the funder (TAČR)?', sk: '6. Smieme vašu odpoveď citovať v správe pre TAČR?', hu: '6. Idézhetjük a válaszát a támogatónak (TAČR) szóló jelentésben?' },
  q6no: { cs: 'ne', en: 'no', sk: 'nie', hu: 'nem' },
  q6anon: { cs: 'anonymně', en: 'anonymously', sk: 'anonymne', hu: 'névtelenül' },
  q6school: { cs: 'se jménem školy', en: 'with the school’s name', sk: 's menom školy', hu: 'az iskola nevével' },
  qSchool: { cs: 'Škola (nepovinné)', en: 'School (optional)', sk: 'Škola (nepovinné)', hu: 'Iskola (nem kötelező)' },
  qSchoolHint: {
    cs: 'Pomůže spočítat, z kolika škol odpovědi jsou. Zveřejníme ji jen se souhlasem v otázce 6.', en: 'Helps us count how many schools the answers come from. We publish it only with your consent in question 6.',
    sk: 'Pomôže spočítať, z koľkých škôl odpovede sú. Zverejníme ju len so súhlasom v otázke 6.', hu: 'Segít megszámolni, hány iskolából érkeznek a válaszok. Csak a 6. kérdésben adott hozzájárulással tesszük közzé.',
  },
  qMail: { cs: 'E-mail pro další kontakt (nepovinné)', en: 'E-mail for further contact (optional)', sk: 'E-mail pre ďalší kontakt (nepovinné)', hu: 'E-mail a további kapcsolattartáshoz (nem kötelező)' },
  qMailHint: {
    cs: 'Uloží se zvlášť a neveřejně. Použijeme ho jen k domluvě o knize.', en: 'Stored separately and privately. We use it only to talk with you about the book.',
    sk: 'Uloží sa zvlášť a neverejne. Použijeme ho len na dohodu o knihe.', hu: 'Külön és nem nyilvánosan tároljuk. Csak a könyvvel kapcsolatos egyeztetésre használjuk.',
  },
  send: { cs: 'Odeslat', en: 'Send', sk: 'Odoslať', hu: 'Küldés' },
  sending: { cs: 'Odesílá se…', en: 'Sending…', sk: 'Odosiela sa…', hu: 'Küldés…' },
  dotOk: { cs: 'Děkujeme! Odpověď je odeslaná.', en: 'Thank you! Your answer has been sent.', sk: 'Ďakujeme! Odpoveď je odoslaná.', hu: 'Köszönjük! A válaszát elküldtük.' },
  dotErr: {
    cs: 'Odeslání se nepovedlo. Zkontrolujte připojení a zkuste to znovu.', en: 'Sending failed. Check your connection and try again.',
    sk: 'Odoslanie sa nepodarilo. Skontrolujte pripojenie a skúste to znova.', hu: 'A küldés nem sikerült. Ellenőrizze a kapcsolatot, és próbálja újra.',
  },
  dotNeed: { cs: 'Vyplňte prosím aspoň otázky 2, 3 a 5.', en: 'Please answer at least questions 2, 3 and 5.', sk: 'Vyplňte, prosím, aspoň otázky 2, 3 a 5.', hu: 'Kérjük, legalább a 2., 3. és 5. kérdésre válaszoljon.' },
  dotSent: {
    cs: 'Za třídu {0} je dotazník odeslaný ({1}). Po další hodině můžete poslat další.', en: 'The survey for class {0} has been sent ({1}). You can send another one after the next lesson.',
    sk: 'Za triedu {0} je dotazník odoslaný ({1}). Po ďalšej hodine môžete poslať ďalší.', hu: 'A(z) {0} osztály kérdőíve elküldve ({1}). A következő óra után újat is küldhet.',
  },

  navRodice: { cs: 'Pro rodiče', en: 'For parents', sk: 'Pre rodičov', hu: 'Szülőknek' },
  rodIntro: {
    cs: 'Krátká informace o knize a o datech, kterou můžete poslat rodičům nebo vložit do školního systému. Doplňte podpis.',
    en: 'A short note about the book and the data that you can send to parents or post in the school system. Add your signature.',
    sk: 'Krátka informácia o knihe a o údajoch, ktorú môžete poslať rodičom alebo vložiť do školského systému. Doplňte podpis.',
    hu: 'Rövid tájékoztató a könyvről és az adatokról, amelyet elküldhet a szülőknek, vagy feltehet az iskolai rendszerbe. Egészítse ki az aláírásával.',
  },
  rodText: {
    cs: `Vážení rodiče,

ve výuce používáme interaktivní knihu „{0}“ od AI dětem: {1}

Kniha běží v prohlížeči a nepotřebuje účet, jméno ani e-mail. Postup se ukládá jen v zařízení, na kterém dítě pracuje.

Kniha posílá záznamy o práci bez jmen: které části byly otevřené a jak dopadly kontrolní otázky a hodnocení na konci mise. Záznamy nesou náhodné číslo zařízení a náhodný kód třídy, aby šly výsledky vyhodnotit po třídách. Školu ani osobní údaje neobsahují. AI dětem podle nich knihu zlepšuje a ověřuje, jak funguje ve školách.

Odpovědi, které dítě napíše AI zkoušejícímu, kniha neukládá. Kvůli hodnocení je ale posílá poskytovateli jazykového modelu (OpenAI). Děti proto do odpovědí nepíšou jména ani jiné osobní údaje. Text kniha uloží, jen když ho dítě výslovně pošle autorům (zpětná vazba, sdílené vlastní podání).

S dotazy se můžete obrátit na mě nebo na AI dětem (aidetem.cz).

[podpis]`,
    en: `Dear parents,

In class we use the interactive book “{0}” by AI dětem: {1}

The book runs in the browser and needs no account, name or e-mail address. Progress is saved only on the device the child works on.

The book sends records of work without names: which parts were opened and how the check questions and the end-of-mission assessments turned out. The records carry a random device number and a random class code, so that results can be evaluated class by class. They contain no school and no personal data. AI dětem uses them to improve the book and to check how it works in schools.

The book does not store the answers a child writes to the AI examiner. To assess them, however, it sends them to the language model provider (OpenAI). Children therefore do not write names or other personal details in their answers. The book stores a text only when the child explicitly sends it to the authors (feedback, a shared telling of their own).

If you have any questions, please contact me or AI dětem (aidetem.cz).

[signature]`,
    sk: `Vážení rodičia,

vo výučbe používame interaktívnu knihu „{0}“ od AI dětem: {1}

Kniha beží v prehliadači a nepotrebuje účet, meno ani e-mail. Postup sa ukladá len v zariadení, na ktorom dieťa pracuje.

Kniha posiela záznamy o práci bez mien: ktoré časti boli otvorené a ako dopadli kontrolné otázky a hodnotenie na konci misie. Záznamy nesú náhodné číslo zariadenia a náhodný kód triedy, aby sa výsledky dali vyhodnotiť po triedach. Školu ani osobné údaje neobsahujú. AI dětem podľa nich knihu zlepšuje a overuje, ako funguje v školách.

Odpovede, ktoré dieťa napíše AI skúšajúcemu, kniha neukladá. Kvôli hodnoteniu ich však posiela poskytovateľovi jazykového modelu (OpenAI). Deti preto do odpovedí nepíšu mená ani iné osobné údaje. Text kniha uloží, len keď ho dieťa výslovne pošle autorom (spätná väzba, zdieľané vlastné podanie).

S otázkami sa môžete obrátiť na mňa alebo na AI dětem (aidetem.cz).

[podpis]`,
    hu: `Kedves Szülők!

Az órákon a(z) AI dětem „{0}” című interaktív könyvét használjuk: {1}

A könyv böngészőben fut, és nem kell hozzá fiók, név vagy e-mail-cím. A haladás csak azon az eszközön tárolódik, amelyen a gyerek dolgozik.

A könyv név nélküli adatokat küld a munkáról: mely részek voltak megnyitva, és hogyan sikerültek az ellenőrző kérdések és a küldetések végi értékelések. Az adatokhoz egy véletlenszerű eszközazonosító és egy véletlenszerű osztálykód tartozik, hogy az eredményeket osztályonként lehessen értékelni. Iskolát és személyes adatot nem tartalmaznak. Az AI dětem ezek alapján fejleszti a könyvet, és vizsgálja, hogyan működik az iskolákban.

A könyv nem tárolja azokat a válaszokat, amelyeket a gyerek az MI-vizsgáztatónak ír. Az értékeléshez azonban elküldi őket a nyelvi modell szolgáltatójának (OpenAI). A gyerekek ezért nem írnak a válaszaikba neveket vagy más személyes adatot. A könyv csak akkor tárol szöveget, ha a gyerek kifejezetten elküldi a szerzőknek (visszajelzés, megosztott saját változat).

Kérdéseivel forduljon hozzám vagy az AI dětem szervezethez (aidetem.cz).

[aláírás]`,
  },

  credits: { cs: 'Knihu i certifikát vydává <a href="https://aidetem.cz" target="_blank" rel="noopener">AI dětem</a>.' },
  loadErr: {
    cs: 'Data pro učitele se nepodařilo načíst. Zkuste stránku obnovit.', en: 'Could not load the teacher data. Try reloading the page.',
    sk: 'Údaje pre učiteľov sa nepodarilo načítať. Skúste stránku obnoviť.', hu: 'Nem sikerült betölteni a tanári adatokat. Próbálja újratölteni az oldalt.',
  },
};

const t = (k, ...a) => a.reduce((s, x, i) => s.replaceAll(`{${i}}`, x), S[k]?.[L] ?? S[k]?.cs ?? k);
const loc = v => (v && typeof v === 'object' ? v[L] ?? v[CONFIG.book.lang] ?? Object.values(v)[0] : v || '');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const odkaz = hash => `${location.origin}/?lang=${L}${KOD.test(stav.kod || '') ? '&trida=' + stav.kod : ''}#${hash}`;
// stejné kódování, jaké čte engine v loadCustomMission (base64url z UTF-8)
const b64u = s => btoa(unescape(encodeURIComponent(s))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const vejdeSeDoQR = url => { try { qrSvg(url); return true; } catch (e) { return false; } };
const bezHry = s => s.replace(/^[^:]+:\s*/, '');   // „Hra: Algoritmus: uvař čaj“ → „Algoritmus: uvař čaj“
const KOD = /^[a-z0-9-]{4,16}$/;

// co si učitel vybral (kapitola, svět, kód třídy…): jen pohodlí v tomto prohlížeči
let stav = {};
try { stav = JSON.parse(localStorage.getItem('pbook-ucitel') || '{}') || {}; } catch (e) {}
const uloz = () => { try { localStorage.setItem('pbook-ucitel', JSON.stringify(stav)); } catch (e) {} };

// Třídy učitele: náhodný kód (bez 0/o, 1/l/i, ať jde opsat z tabule) a poznámka, která zůstává jen
// v tomto prohlížeči. Starší ručně zadaný kód (tvůrčí úkol) se stane první třídou.
const ZNAKY = 'abcdefghjkmnpqrstuvwxyz23456789';
const nahodne = n => { const b = new Uint8Array(n); crypto.getRandomValues(b); return [...b].map(x => ZNAKY[x % ZNAKY.length]).join(''); };
function tridy() {
  stav.tridy = (Array.isArray(stav.tridy) ? stav.tridy : []).filter(x => x && KOD.test(x.kod));
  if (KOD.test(stav.kod || '') && !stav.tridy.some(x => x.kod === stav.kod)) stav.tridy.unshift({ kod: stav.kod, pozn: '' });
  if (!stav.tridy.length) stav.tridy.push({ kod: nahodne(6), pozn: '' });
  if (!stav.tridy.some(x => x.kod === stav.kod)) stav.kod = stav.tridy[0].kod;
  uloz();
  return stav.tridy;
}
const trida = () => stav.tridy.find(x => x.kod === stav.kod);
const popisTridy = x => `${x.kod}${x.pozn ? ' · ' + x.pozn : ''}`;
// kdo dotazník posílá: id čtenáře z tohoto prohlížeče (report ho pak nepočítá jako zařízení žáka)
const ucitelId = () => {
  try { const u = localStorage.getItem('pbook-uid'); if (u) return u; } catch (e) {}
  if (!stav.uid) { stav.uid = 'teacher-' + nahodne(12); uloz(); }
  return stav.uid;
};

function odkazBox(url, nazev, popisek = t('linkFor')) {
  const qr = vejdeSeDoQR(url);
  return `<div class="uc-link">
    <label class="uc-label">${esc(popisek)}<input class="uc-url" readonly value="${esc(url)}"></label>
    <div class="uc-btns">
      <button class="uc-btn" type="button" data-copy="${esc(url)}">${t('copy')}</button>
      ${qr ? `<button class="uc-btn sec" type="button" data-qr="${esc(url)}" data-title="${esc(nazev)}">${t('qr')}</button>` : ''}
      <a class="uc-btn sec" href="${esc(url)}" target="_blank" rel="noopener">${t('open')} ↗</a>
    </div>
    ${qr ? '' : `<p class="uc-muted">${t('qrLong')}</p>`}
  </div>`;
}

function ukazQR(url, nazev) {
  const d = document.createElement('div');
  d.className = 'uc-qr-full';
  d.setAttribute('role', 'dialog');
  d.setAttribute('aria-modal', 'true');
  d.setAttribute('aria-label', nazev);
  d.innerHTML = `<div class="uc-qr-card">
    <button class="uc-x" type="button" aria-label="${t('close')}">✕</button>
    <h2>${esc(nazev)}</h2>
    <div class="uc-qr-img">${qrSvg(url, 10, 4)}</div>
    <p class="uc-qr-scan">${t('scan')}</p>
    <p class="uc-qr-url">${esc(url.replace(/^https?:\/\//, ''))}</p>
  </div>`;
  const zavri = () => { d.remove(); document.removeEventListener('keydown', klavesa); };
  const klavesa = e => { if (e.key === 'Escape') zavri(); };
  d.addEventListener('click', e => { if (e.target === d || e.target.closest('.uc-x')) zavri(); });
  document.addEventListener('keydown', klavesa);
  document.body.appendChild(d);
  d.querySelector('.uc-x').focus();
}

// ---------- hodina z kapitoly ----------
function planKapitoly(k) {
  const m = k.mission;
  if (!m) return '';
  return `<div class="uc-card">
    <div class="uc-head"><span class="uc-ico" aria-hidden="true">${m.icon}</span><div>
      <div class="uc-kicker">${t('chapterN', k.n)} · ${esc(loc(k.title))}</div>
      <h3>${esc(loc(m.title))}</h3>
      <p>${esc(loc(m.story))}</p>
    </div></div>
    <ol class="uc-plan">
      <li><span class="uc-min">5 min</span><div><b>${t('pIntro')}</b> ${t('pIntroT', esc(loc(k.subtitle) || loc(m.goal)))}</div></li>
      <li><span class="uc-min">4 × 7 min</span><div><b>${t('pCores')}</b> ${t('pCoresT')}
        <ul class="uc-cores">${k.cores.map(c => `<li><b>${esc(loc(c.title))}</b> <span>${esc(loc(c.teaser))}</span>
          <small>${t('read', loc(c.min))}${c.game ? ` · 🎮 ${esc(bezHry(loc(c.game.title)))}` : ''}</small></li>`).join('')}</ul></div></li>
      <li><span class="uc-min">8 min</span><div><b>${t('pBoss')}</b> ${t('pBossT')}<blockquote>${esc(loc(m.boss))}</blockquote></div></li>
      <li><span class="uc-min">4 min</span><div><b>${t('pEnd')}</b> ${t('pEndT', esc(loc(m.reward)))}</div></li>
    </ol>
    ${odkazBox(odkaz('mission-' + m.id), loc(m.title))}
  </div>`;
}

function kapitoly(D) {
  const el = document.getElementById('ucKap');
  const vyber = D.chapters.find(k => k.id === stav.kapitola) || D.chapters[0];
  el.innerHTML = `<div class="uc-chips" role="group" aria-label="${t('navKap')}">${D.chapters.map(k =>
      `<button type="button" class="uc-chip" data-kap="${esc(k.id)}" aria-pressed="${k === vyber}">${k.n}. ${esc(loc(k.title))}</button>`).join('')}</div>
    ${planKapitoly(vyber)}`;
  el.querySelectorAll('[data-kap]').forEach(b => b.onclick = () => { stav.kapitola = b.dataset.kap; uloz(); kapitoly(D); });
}

// ---------- mikromise ----------
let obnovMini = null;   // nový kód třídy jen přepíše odkaz, výběr jader zůstane
function mikromise(D) {
  const el = document.getElementById('ucMini');
  const vybrane = new Set((stav.mise || []).filter(id => D.chapters.some(k => k.cores.some(c => c.id === id))));
  el.innerHTML = `<label class="uc-label">${t('miniName')}<input class="uc-input" id="ucMiniName" maxlength="60" placeholder="${esc(t('miniPh'))}" value="${esc(stav.miseNazev || '')}"></label>
    <div class="uc-groups">${D.chapters.map(k => `<fieldset class="uc-group"><legend>${k.n}. ${esc(loc(k.title))}</legend>
      ${k.cores.map(c => `<label class="uc-check"><input type="checkbox" value="${esc(c.id)}"${vybrane.has(c.id) ? ' checked' : ''}> ${esc(loc(c.title))}</label>`).join('')}
    </fieldset>`).join('')}</div>
    <p class="uc-muted" id="ucMiniCount" aria-live="polite"></p>
    <div id="ucMiniOut"></div>`;
  const obnov = () => {
    const ids = [...el.querySelectorAll('input[type=checkbox]:checked')].map(x => x.value);
    el.querySelectorAll('input[type=checkbox]').forEach(x => { x.disabled = !x.checked && ids.length >= 12; });
    const nazev = el.querySelector('#ucMiniName').value.trim();
    stav.mise = ids; stav.miseNazev = nazev; uloz();
    el.querySelector('#ucMiniCount').textContent = t('miniCount', ids.length);
    const payload = nazev ? { t: nazev, c: ids } : { c: ids };
    el.querySelector('#ucMiniOut').innerHTML = ids.length
      ? odkazBox(odkaz('mise-' + b64u(JSON.stringify(payload))), nazev || t('navMini'))
      : `<p class="uc-muted">${t('miniEmpty')}</p>`;
  };
  el.addEventListener('change', obnov);
  el.querySelector('#ucMiniName').addEventListener('input', obnov);
  obnovMini = obnov;
  obnov();
}

// ---------- projekt ve světě ----------
function svety(D) {
  const el = document.getElementById('ucSvet');
  const karty = [...D.worlds.map(w => ({ id: w.id, name: loc(w.name), block: w.block, m: w.mission })),
    ...(D.project ? [{ id: D.project.id, name: loc(D.project.title), m: D.project, projekt: true }] : [])];
  const vyber = karty.find(k => k.id === stav.svet) || karty[0];
  const mistr = loc(CONFIG.certificate?.tiers?.guru?.title) || 'Mistr';
  el.innerHTML = `<div class="uc-worlds" role="group" aria-label="${t('navSvet')}">${karty.map(k =>
      `<button type="button" class="uc-world" data-svet="${esc(k.id)}" aria-pressed="${k === vyber}">
        <span class="uc-ico" aria-hidden="true">${k.m.icon}</span>
        <span class="uc-world-name">${esc(k.projekt ? loc(k.m.title) : k.name)}</span>
        <small>${k.projekt ? t('advanced') + ' · ' : esc(loc(k.m.title)) + ' · '}${t('steps', k.m.steps)}</small>
      </button>`).join('')}</div>
    <div class="uc-card">
      <div class="uc-head"><span class="uc-ico" aria-hidden="true">${vyber.m.icon}</span><div>
        <div class="uc-kicker">${esc(vyber.projekt ? t('advanced') : vyber.name)} · ${t('steps', vyber.m.steps)}</div>
        <h3>${esc(loc(vyber.m.title))}</h3>
        <p>${esc(loc(vyber.m.story))}</p>
        ${vyber.projekt ? `<p class="uc-note">${t('tvurceNote', esc(mistr))}</p>` : ''}
      </div></div>
      <p><b>${t('task')}</b></p><blockquote>${esc(loc(vyber.m.boss))}</blockquote>
      ${odkazBox(odkaz('mission-' + vyber.m.id), loc(vyber.m.title))}
      ${vyber.block ? `<p class="uc-muted"><a href="${esc(odkaz(vyber.block))}" target="_blank" rel="noopener">${t('worldPage')} ↗</a></p>` : ''}
    </div>`;
  el.querySelectorAll('[data-svet]').forEach(b => b.onclick = () => { stav.svet = b.dataset.svet; uloz(); svety(D); });
}

// ---------- skupinové úkoly: skládačka s AI asistenty ----------
// Karta i patří členovi i % velikost týmu; děti jsou členové 1…k, asistenti za nimi (js/teams.js v knize).
const VELIKOST = (k, a) => k >= 1 && k <= 4 && a >= 0 && a <= 3 && k + a >= 2 && k + a <= 4;
function skupiny(D) {
  const el = document.getElementById('ucTym');
  const vyber = D.teams.find(x => x.id === stav.tym) || D.teams[0];
  let k = +stav.tymK || 2, a = stav.tymA == null ? 1 : +stav.tymA;
  if (!VELIKOST(k, a)) { k = 2; a = 1; }
  const n = k + a, P = 'ABCD';
  const karty = m => [0, 1, 2, 3].filter(i => i % n === m).map(i => `${P[i]} ${esc(loc(vyber.cards[i]))}`).join(', ');
  const kdo = [...Array.from({ length: k }, (_, m) => `<li><b>${t('tymChild', m + 1)}</b>: ${karty(m)}</li>`),
    ...Array.from({ length: a }, (_, j) => `<li><b>${t('tymBot', j + 1)}</b>: ${karty(k + j)}</li>`)].join('');
  const cisla = (pole, co, hodnota, ok) => `<div class="uc-chips" role="group" aria-label="${t(co === 'k' ? 'tymKids' : 'tymAi')}">${pole.map(x =>
    `<button type="button" class="uc-chip" data-${co}="${x}" aria-pressed="${x === hodnota}"${ok(x) ? '' : ' disabled'}>${x}</button>`).join('')}</div>`;
  el.innerHTML = `<div class="uc-worlds" role="group" aria-label="${t('navTym')}">${D.teams.map(x =>
      `<button type="button" class="uc-world" data-tym="${esc(x.id)}" aria-pressed="${x === vyber}">
        <span class="uc-ico" aria-hidden="true">${x.icon}</span>
        <span class="uc-world-name">${esc(loc(x.title))}</span>
        <small>${esc(loc(x.chapter))}</small>
      </button>`).join('')}</div>
    <div class="uc-card">
      <div class="uc-head"><span class="uc-ico" aria-hidden="true">${vyber.icon}</span><div>
        <div class="uc-kicker">${esc(loc(vyber.chapter))}</div>
        <h3>${esc(loc(vyber.title))}</h3>
        <p>${esc(loc(vyber.story))}</p>
      </div></div>
      <p><b>${t('tymQ')}</b></p><blockquote>${esc(loc(vyber.boss))}</blockquote>
      <div class="uc-row">
        <div class="uc-label">${t('tymKids')}${cisla([1, 2, 3, 4], 'k', k, () => true)}</div>
        <div class="uc-label">${t('tymAi')}${cisla([0, 1, 2, 3], 'a', a, x => VELIKOST(k, x))}</div>
      </div>
      <p class="uc-muted">${t('tymSize')}</p>
      <p><b>${t('tymWho')}</b></p><ul class="uc-how">${kdo}</ul>
      ${odkazBox(odkaz(`tym-${vyber.id}~${k}~${a}`), loc(vyber.title))}
      <h3 class="uc-sub">${t('tymHow')}</h3>
      <ol class="uc-how"><li>${k > 1 ? t('tymHow1', n) : t('tymHow1solo')}</li>${k > 1 ? `<li>${t('tymHow2')}</li>` : ''}${a ? `<li>${t('tymHow3')}</li>` : ''}<li>${k > 1 ? t('tymHow4') : t('tymHow4solo')}</li></ol>
      <p class="uc-note">${t('tymNote')}</p>
    </div>`;
  el.querySelectorAll('[data-tym]').forEach(b => b.onclick = () => { stav.tym = b.dataset.tym; uloz(); skupiny(D); });
  el.querySelectorAll('[data-k]').forEach(b => b.onclick = () => {
    const nk = +b.dataset.k;
    stav.tymK = nk; stav.tymA = VELIKOST(nk, a) ? a : nk === 1 ? 1 : Math.min(a, 4 - nk); uloz(); skupiny(D);
  });
  el.querySelectorAll('[data-a]').forEach(b => b.onclick = () => { stav.tymK = k; stav.tymA = +b.dataset.a; uloz(); skupiny(D); });
}

// ---------- pro nadané: výzvy, hry a expedice navíc ----------
function nadani(D) {
  const N = D.gifted, el = document.getElementById('ucNadani');
  const vyber = N.expeditions.find(x => x.id === stav.expedice) || N.expeditions[0];
  const smer = x => (x.world ? loc(x.dir) : t('expCh', loc(x.dir)));
  const bezpeci = N.safety ? `<a href="${esc(odkaz(N.safety))}" target="_blank" rel="noopener">${t('safetyPage')}</a>` : esc(t('safetyPage'));
  el.innerHTML = `<h3 class="uc-sub">${t('nadHow')}</h3>
    <ul class="uc-how"><li>${t('nadHow1')}</li><li>${t('nadHow2')}</li><li>${t('nadHow3')}</li><li>${t('nadHow4', bezpeci)}</li></ul>
    <div class="uc-worlds" role="group" aria-label="${t('navNadani')}">${N.expeditions.map(x =>
      `<button type="button" class="uc-world" data-exp="${esc(x.id)}" aria-pressed="${x === vyber}">
        <span class="uc-ico" aria-hidden="true">${x.icon}</span>
        <span class="uc-world-name">${esc(loc(x.title))}</span>
        <small>${esc(smer(x))}</small>
      </button>`).join('')}</div>
    <div class="uc-card">
      <div class="uc-head"><span class="uc-ico" aria-hidden="true">${vyber.icon}</span><div>
        <div class="uc-kicker">${esc(smer(vyber))} · ${t('steps', vyber.steps)}</div>
        <h3>${esc(loc(vyber.title))}</h3>
        <p>${esc(loc(vyber.story))}</p>
      </div></div>
      <p><b>${t('expGoal')}</b> ${esc(loc(vyber.goal))}</p>
      ${vyber.branches.length ? `<p><b>${t('expBranches')}</b> ${vyber.branches.map(b => esc(loc(b))).join(' · ')}</p>` : ''}
      <p><b>${t('expExam')}</b></p><blockquote>${esc(loc(vyber.boss))}</blockquote>
      ${odkazBox(odkaz('mission-' + vyber.id), loc(vyber.title))}
      <p class="uc-muted">${[vyber.block && `<a href="${esc(odkaz(vyber.block))}" target="_blank" rel="noopener">${t('expBase')} ↗</a>`,
        vyber.guide && `<a href="${esc(odkaz(vyber.guide))}" target="_blank" rel="noopener">${t('expGuide')} ↗</a>`,
        N.hub && `<a href="${esc(odkaz(N.hub))}" target="_blank" rel="noopener">${t('expAll')} ↗</a>`].filter(Boolean).join(' · ')}</p>
    </div>`;
  el.querySelectorAll('[data-exp]').forEach(b => b.onclick = () => { stav.expedice = b.dataset.exp; uloz(); nadani(D); });
}

// ---------- tvůrčí úkol s kódem třídy ----------
function tvorba(D) {
  const el = document.getElementById('ucTvorba');
  const jadra = D.chapters.flatMap(k => k.cores);
  const jadro = jadra.find(c => c.id === stav.tvorbaJadro) || jadra[0];
  el.innerHTML = `<label class="uc-label">${t('core')}<select class="uc-input" id="ucTvJadro">${D.chapters.map(k => `<optgroup label="${k.n}. ${esc(loc(k.title))}">
        ${k.cores.map(c => `<option value="${esc(c.id)}"${c === jadro ? ' selected' : ''}>${esc(loc(c.title))}</option>`).join('')}</optgroup>`).join('')}</select></label>
    <div id="ucTvOut"></div>
    <p class="uc-note">${t('tvNote')}</p>`;
  const obnov = () => {
    const id = el.querySelector('#ucTvJadro').value;
    stav.tvorbaJadro = id; uloz();
    const c = jadra.find(x => x.id === id);
    el.querySelector('#ucTvOut').innerHTML = odkazBox(odkaz('autor-' + id), loc(c.title), t('tvPupils'))
      + odkazBox(odkaz('trida-' + stav.kod), `${t('code')}: ${stav.kod}`, t('tvGallery'));
  };
  el.querySelector('#ucTvJadro').addEventListener('change', obnov);
  obnov();
}

// ---------- kód třídy ----------
function kodTridy(prekresli) {
  const el = document.getElementById('ucTrida');
  const vsechny = tridy(), ta = trida();
  el.innerHTML = `<div class="uc-card uc-class">
      <div class="uc-class-code"><span>${t('code')}</span><b>${esc(ta.kod)}</b><small class="uc-muted">${t('trRandom')}</small></div>
      <div class="uc-row">
        <label class="uc-label">${t('trWhich')}<select class="uc-input" id="ucTrSel">${vsechny.map(x =>
          `<option value="${esc(x.kod)}"${x === ta ? ' selected' : ''}>${esc(popisTridy(x))}</option>`).join('')}</select></label>
        <label class="uc-label">${t('trNote')}<input class="uc-input" id="ucTrPozn" maxlength="40" autocomplete="off" placeholder="${esc(t('trNotePh'))}" value="${esc(ta.pozn || '')}" aria-describedby="ucTrPoznHint">
          <small class="uc-muted" id="ucTrPoznHint">${t('trNoteHint')}</small></label>
      </div>
      <div class="uc-btns">
        <button type="button" class="uc-btn sec" id="ucTrNova">${t('trNew')}</button>
        <button type="button" class="uc-btn sec" id="ucTrMam" aria-expanded="false" aria-controls="ucTrVlastni">${t('trHave')}</button>
      </div>
      <div id="ucTrVlastni" class="uc-own" hidden>
        <label class="uc-label">${t('code')}<input class="uc-input" id="ucTrKod" maxlength="16" autocomplete="off" spellcheck="false" placeholder="k7m2qx" aria-describedby="ucTrKodHint">
          <small class="uc-muted" id="ucTrKodHint">${t('codeHint')}</small></label>
        <div class="uc-btns"><button type="button" class="uc-btn" id="ucTrPouzij">${t('trUse')}</button></div>
        <p class="uc-muted" id="ucTrChyba" role="alert"></p>
      </div>
    </div>`;
  const prepni = kod => { stav.kod = kod; uloz(); kodTridy(prekresli); prekresli(); };
  el.querySelector('#ucTrSel').onchange = e => prepni(e.target.value);
  el.querySelector('#ucTrPozn').oninput = e => {
    ta.pozn = e.target.value.slice(0, 40); uloz();
    const o = el.querySelector('#ucTrSel').selectedOptions[0];
    if (o) o.textContent = popisTridy(ta);
    dotaznikTrida();
  };
  el.querySelector('#ucTrNova').onclick = () => {
    const kod = nahodne(6);
    stav.tridy.push({ kod, pozn: '' });
    prepni(kod);
    document.getElementById('ucTrPozn')?.focus();
  };
  el.querySelector('#ucTrMam').onclick = e => {
    const v = el.querySelector('#ucTrVlastni');
    v.hidden = !v.hidden;
    e.currentTarget.setAttribute('aria-expanded', String(!v.hidden));
    if (!v.hidden) el.querySelector('#ucTrKod').focus();
  };
  const pouzij = () => {
    const kod = el.querySelector('#ucTrKod').value.trim().toLowerCase();
    if (!KOD.test(kod)) { el.querySelector('#ucTrChyba').textContent = t('codeBad'); return; }
    if (!stav.tridy.some(x => x.kod === kod)) stav.tridy.push({ kod, pozn: '' });
    prepni(kod);
  };
  el.querySelector('#ucTrPouzij').onclick = pouzij;
  el.querySelector('#ucTrKod').onkeydown = e => { if (e.key === 'Enter') pouzij(); };
}

// ---------- dotazník po hodině ----------
// Odpovědi jdou do /api/log jako 'teacher_survey' (neveřejný řádek, api/log.js ho ořeže na pevná pole),
// e-mail zvlášť jako neveřejný 'contact'. scripts/pilot-report.mjs je spáruje s logem podle kódu třídy.
function dotaznikTrida() {
  const el = document.getElementById('ucDotIntro');
  if (!el) return;
  const ta = trida(), kdy = stav.dotaznik?.[ta.kod];
  el.innerHTML = `${t('dotIntro', `<b>${esc(popisTridy(ta))}</b>`)} <span class="uc-muted">${t('dotOther')}</span>`
    + (kdy ? `<span class="uc-note uc-block">${t('dotSent', esc(ta.kod), esc(new Date(kdy).toLocaleDateString(L)))}</span>` : '');
}
function dotaznik() {
  const el = document.getElementById('ucDot');
  const volba = (typ, jmeno, hodnota, popis) => `<label class="uc-check"><input type="${typ}" name="${jmeno}" value="${hodnota}"> ${popis}</label>`;
  const skala = (jmeno, lo, hi) => `<div class="uc-scale">${[1, 2, 3, 4, 5].map(n =>
      `<label><input type="radio" name="${jmeno}" value="${n}"><span>${n}</span></label>`).join('')}</div>
    <div class="uc-scale-ends"><span>1 = ${lo}</span><span>5 = ${hi}</span></div>`;
  el.innerHTML = `<form class="uc-card uc-form" id="ucDotForm" novalidate>
    <fieldset><legend>${t('q1')}</legend>
      <div class="uc-opts">${['class', 'groups', 'home', 'other'].map(v => volba('checkbox', 'how', v, t('q1' + v))).join('')}</div>
      <input class="uc-input" name="howOther" maxlength="200" aria-label="${esc(t('q1other'))}">
      <label class="uc-label">${t('q1n')}<input class="uc-input uc-num" type="number" name="lessons" min="0" max="40" inputmode="numeric"></label>
    </fieldset>
    <fieldset><legend>${t('q2')}</legend>${skala('ease', t('q2lo'), t('q2hi'))}</fieldset>
    <fieldset><legend>${t('q3')}</legend>${skala('fair', t('q3lo'), t('q3hi'))}
      <label class="uc-label">${t('q3ex')}<textarea class="uc-input" name="unfairExample" rows="2" maxlength="1000"></textarea></label>
    </fieldset>
    <fieldset><legend>${t('q4')}</legend><textarea class="uc-input" name="liked" rows="3" maxlength="1500" aria-label="${esc(t('q4'))}"></textarea></fieldset>
    <fieldset><legend>${t('q5')}</legend>
      <div class="uc-opts">${[['yes', 'aYes'], ['rather-yes', 'aRYes'], ['rather-no', 'aRNo'], ['no', 'aNo']].map(([v, k]) => volba('radio', 'again', v, t(k))).join('')}</div>
    </fieldset>
    <fieldset><legend>${t('q6')}</legend>
      <div class="uc-opts">${[['no', 'q6no'], ['anon', 'q6anon'], ['school', 'q6school']].map(([v, k]) => volba('radio', 'quote', v, t(k))).join('')}</div>
      <label class="uc-label">${t('qSchool')}<input class="uc-input" name="school" maxlength="120" autocomplete="organization" aria-describedby="ucDotSchoolHint">
        <small class="uc-muted" id="ucDotSchoolHint">${t('qSchoolHint')}</small></label>
      <label class="uc-label">${t('qMail')}<input class="uc-input" type="email" name="email" maxlength="160" autocomplete="email" aria-describedby="ucDotMailHint">
        <small class="uc-muted" id="ucDotMailHint">${t('qMailHint')}</small></label>
    </fieldset>
    <p class="uc-msg" id="ucDotMsg" role="status" aria-live="polite"></p>
    <div class="uc-btns"><button class="uc-btn" type="submit" id="ucDotSend">${t('send')}</button></div>
  </form>`;
  const form = el.querySelector('form'), msg = el.querySelector('#ucDotMsg'), btn = el.querySelector('#ucDotSend');
  form.onsubmit = async e => {
    e.preventDefault();
    const f = new FormData(form);
    if (!f.get('ease') || !f.get('fair') || !f.get('again')) { msg.textContent = t('dotNeed'); return; }
    const kod = stav.kod, kdo = ucitelId();
    const poslat = telo => fetch('/api/log', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(telo) });
    btn.disabled = true; btn.textContent = t('sending'); msg.textContent = '';
    try {
      const res = await poslat({ type: 'teacher_survey', userId: kdo, book: CONFIG.book?.slug, data: {
        classCode: kod, lang: L, how: f.getAll('how'), howOther: f.get('howOther') || '', lessons: f.get('lessons') || 0,
        ease: f.get('ease'), fair: f.get('fair'), unfairExample: f.get('unfairExample') || '', liked: f.get('liked') || '',
        again: f.get('again'), quote: f.get('quote') || 'no', school: f.get('school') || '' } });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const mail = String(f.get('email') || '').trim();
      if (mail) await poslat({ type: 'contact', userId: kdo, data: { contact: mail, topic: 'pilot', page: '/ucitel', lang: L,
        message: `Pilot ve školách: souhlas s dalším kontaktem (kód třídy ${kod}).` } }).catch(() => {});
      stav.dotaznik = { ...(stav.dotaznik || {}), [kod]: new Date().toISOString().slice(0, 10) }; uloz();
      form.reset();
      msg.textContent = t('dotOk');
      dotaznikTrida();
    } catch (err) { msg.textContent = t('dotErr'); }
    finally { btn.disabled = false; btn.textContent = t('send'); }
  };
  dotaznikTrida();
}

// ---------- informace pro rodiče ----------
function rodice() {
  const text = t('rodText', loc(CONFIG.book.title), location.origin + '/');
  document.getElementById('ucRod').innerHTML = `<textarea class="uc-input uc-letter" readonly rows="16" aria-label="${esc(t('navRodice'))}">${esc(text)}</textarea>
    <div class="uc-btns"><button class="uc-btn" type="button" data-copy="${esc(text)}">${t('copy')}</button></div>`;
}

// ---------- certifikát ----------
function certifikat(D) {
  const tier = id => loc(CONFIG.certificate?.tiers?.[id]?.title) || id;
  document.getElementById('ucCert').innerHTML = `<ul class="uc-tiers">
    <li><span aria-hidden="true">🥉</span><div><b>${esc(tier('foundations'))}</b> ${t('tierF')}</div></li>
    <li><span aria-hidden="true">🥈</span><div><b>${esc(tier('practitioner'))}</b> ${t('tierP')}</div></li>
    <li><span aria-hidden="true">🥇</span><div><b>${esc(tier('guru'))}</b> ${t('tierG', esc(loc(D.project?.title)))}</div></li>
  </ul>`;
}

// ---------- stránka ----------
async function start() {
  const kniha = loc(CONFIG.book.title);
  document.documentElement.lang = L;
  document.title = `${t('h1')} · ${kniha}`;
  document.querySelector('meta[name=description]')?.setAttribute('content', t('desc', kniha));
  const brand = document.getElementById('ucBrand');
  brand.textContent = kniha;
  brand.href = `./?lang=${L}`;
  const langs = document.getElementById('ucLangs');
  langs.setAttribute('aria-label', t('langs'));
  langs.innerHTML = LANGS.map(l => `<button type="button" class="uc-lang" data-lang="${l}" aria-pressed="${l === L}">${l.toUpperCase()}</button>`).join('');
  langs.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => { if (b.dataset.lang !== L) setLang(b.dataset.lang); });
  document.getElementById('ucFoot').innerHTML = `<p>${(L === 'cs' ? S.credits.cs : CONFIG.strings?.[L]?.['credits-made']) || S.credits.cs}</p>
    <p><a href="./?lang=${L}">${t('back')}</a></p>`;

  const main = document.getElementById('uc');
  let D;
  try { D = await (await fetch('content/ucitel.json', { cache: 'no-cache' })).json(); }
  catch (e) { main.innerHTML = `<p class="uc-muted">${t('loadErr')}</p>`; return; }
  const resitel = loc(CONFIG.certificate?.tiers?.practitioner?.title) || 'Řešitel';
  main.innerHTML = `<h1>${t('h1')}</h1>
    <p class="uc-lede">${t('lede')}</p>
    <nav class="uc-nav"><a href="#trida">${t('code')}</a><a href="#kapitola">${t('navKap')}</a><a href="#mikromise">${t('navMini')}</a><a href="#svety">${t('navSvet')}</a>${D.teams?.length ? `<a href="#skupiny">${t('navTym')}</a>` : ''}${D.gifted ? `<a href="#nadani">${t('navNadani')}</a>` : ''}<a href="#tvorba">${t('navTvorba')}</a><a href="#certifikat">${t('navCert')}</a><a href="#dotaznik">${t('navDot')}</a><a href="#rodice">${t('navRodice')}</a></nav>
    <section id="trida"><h2>${t('code')}</h2><p>${t('trIntro')}</p><div id="ucTrida"></div></section>
    <section id="kapitola"><h2>${t('navKap')}</h2><p>${t('kapIntro')}</p><div id="ucKap"></div></section>
    <section id="mikromise"><h2>${t('miniH')}</h2><p>${t('miniIntro')}</p><div id="ucMini"></div></section>
    <section id="svety"><h2>${t('navSvet')}</h2><p>${t('svetIntro', esc(resitel))}</p><div id="ucSvet"></div></section>
    ${D.teams?.length ? `<section id="skupiny"><h2>${t('tymH')}</h2><p>${t('tymIntro')}</p><div id="ucTym"></div></section>` : ''}
    ${D.gifted ? `<section id="nadani"><h2>${t('nadH')}</h2><p>${t('nadIntro', D.gifted.challenges, D.gifted.games)}</p><div id="ucNadani"></div></section>` : ''}
    <section id="tvorba"><h2>${t('tvH')}</h2><p>${t('tvIntro')}</p><div id="ucTvorba"></div></section>
    <section id="certifikat"><h2>${t('navCert')}</h2><p>${t('certIntro')}</p><div id="ucCert"></div></section>
    <section id="dotaznik"><h2>${t('navDot')}</h2><p id="ucDotIntro"></p><div id="ucDot"></div></section>
    <section id="rodice"><h2>${t('navRodice')}</h2><p>${t('rodIntro')}</p><div id="ucRod"></div></section>`;
  // nový kód třídy přepíše všechny odkazy a QR; vyplněný dotazník zůstane
  const odkazy = () => { kapitoly(D); obnovMini?.(); svety(D); if (D.teams?.length) skupiny(D); if (D.gifted) nadani(D); tvorba(D); dotaznikTrida(); };
  kodTridy(odkazy);
  kapitoly(D); mikromise(D); svety(D); if (D.teams?.length) skupiny(D); if (D.gifted) nadani(D); tvorba(D); certifikat(D);
  dotaznik(); rodice();

  // kopírování a QR pro všechny odkazy na stránce
  main.addEventListener('click', async e => {
    const c = e.target.closest('[data-copy]');
    if (c) {
      try { await navigator.clipboard.writeText(c.dataset.copy); }
      catch (err) { const i = c.closest('.uc-link')?.querySelector('input'); i?.select(); document.execCommand?.('copy'); }
      const puvodni = c.textContent; c.textContent = t('copied'); setTimeout(() => { c.textContent = puvodni; }, 1600);
      return;
    }
    const q = e.target.closest('[data-qr]');
    if (q) ukazQR(q.dataset.qr, q.dataset.title);
  });
  main.addEventListener('focusin', e => { if (e.target.classList?.contains('uc-url')) e.target.select(); });
  if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
}

start();
