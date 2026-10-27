---
id: svet-tvorba-ai-se-uci-z-dat
type: spine
title: "Proč je vědec vždycky děda v plášti"
readingTime: 1
standalone: true
teaser: "Zadáš generátoru „vědec v laboratoři“. Čtyři obrázky a čtyřikrát starší muž v bílém plášti s brýlemi. Nikdo mu to nenaprogramoval."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Model na rozpoznávání obličejů trénovaný hlavně na světlé pleti chybuje u tmavé. Proč?"
recallA: "Naučil se vzory z dat, která dostal. Tmavou pleť v nich skoro neviděl, a tak ji rozpoznává hůř. Chyba je v datech."
lang: cs
lens: tvorba
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ai-se-uci-z-dat
state: edited
highlights:
  - "AI = software, který se učí z příkladů, ne z ručně psaných pravidel"
  - "Trénování a testování na nových datech"
  - "Bias: chybějící nebo jednostranná data vedou k chybným nebo nespravedlivým výsledkům"
carriers: prose|image
---

Zadáš generátoru „vědec v laboratoři“. Čtyři obrázky a čtyřikrát starší muž v bílém plášti s brýlemi. Nikdo mu to nenaprogramoval.

Generátor obrázků nikdo neučil pravidly typu „vědec má plášť“. Je to **software, který se učí z příkladů**. Dostal stovky milionů obrázků s popisky z internetu a našel v nich **vzory**: jaké tvary a barvy patří ke slovům *pes*, *západ slunce*, *vědec*. Takovému učení se říká **trénování**.

Co je v datech, to se model naučí. A na internetu je u slova *vědec* hlavně jeden typ fotky: starší muž, plášť, zkumavky. Vědkyň, mladých vědců nebo vědců u počítače je v popiscích méně. Model tak neukazuje svět, jaký je, ale jak byl popsaný na obrázcích. Tomu se říká **bias**: **jednostranná data** vedou k jednostranným výsledkům. U obrázků je z toho klišé. U AI, která třídí přihlášky nebo rozpoznává obličeje, z toho bývá **nespravedlnost**: komu v datech chybí příklady, tomu model rozumí hůř.

![Čtyři vědci z generátoru a co v datech chybělo](images/svet-tvorba-vedec.svg)

Jak se pozná, že se model naučil dobře? **Testováním na nových datech**, na příkladech, které při trénování neviděl. Když zvládá jen to, co už viděl, naučil se nazpaměť. Když to funguje i na nových obrázcích, našel opravdové vzory.

Pro tebe jako tvůrce z toho plyne jeden návyk: všímej si, co generátor vybral **za tebe bez ptaní**. Pohlaví, věk, barvu pleti, prostředí. Když chceš něco jiného než průměr z internetu, řekni to v promptu: *mladá vědkyně u mikroskopu*.

**Zkus to!** Zadej generátoru obrázků tři povolání: „učitel“, „programátor“, „zdravotník“. Co mají výsledky společného? Co si model domyslel bez tvého zadání?

**Dál ve světě tvorby s AI:** → [Šest prstů a nápis z jiné planety](#svet-tvorba-generativni-model)
