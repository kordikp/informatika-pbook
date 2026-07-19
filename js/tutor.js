// TutorEngine — Mock implementation with LLM-ready interface
// Architecture: TutorEngine.generateResponse(message, context) → response
// MockTutorEngine: keyword search + kid-friendly templates + author escalation
// LLMTutorEngine: future drop-in replacement via Netlify function → Claude API

export class MockTutorEngine {
  constructor() {
    this._usedBlocks = new Set(); // avoid repeating same blocks in a conversation
  }

  resetConversation() {
    this._usedBlocks.clear();
  }

  generateResponse(message, context) {
    const { allBlocks, topicIndex, currentBlockId, currentChapterId, userProfile } = context;
    const q = message.toLowerCase().trim();

    // Detect question type
    const qType = this._detectQuestionType(q);

    // Score blocks with context awareness
    const scored = allBlocks.map(b => {
      let score = 0;
      const title = (b.meta.title || '').toLowerCase();
      const body = (b.body || '').toLowerCase();
      const words = q.split(/\s+/).filter(w => w.length >= 3);

      for (const word of words) {
        if (title.includes(word)) score += 5;
        if (body.includes(word)) score += 1;
      }

      // Boost current chapter content 3x
      if (currentChapterId && b._chapter === currentChapterId) score *= 3;
      // Boost current block's related content
      if (currentBlockId && b.meta.parent === currentBlockId) score *= 2;
      // Penalize already-shown blocks
      if (this._usedBlocks.has(b.meta.id)) score *= 0.3;

      return { block: b, score };
    }).filter(s => s.score > 0).sort((a, b) => b.score - a.score).slice(0, 4);

    // Find matching topics
    const matchTopics = Object.keys(topicIndex || {}).filter(t =>
      t.toLowerCase().includes(q) || q.includes(t.toLowerCase().split(' ')[0])
    );

    // Calculate confidence
    const topScore = scored[0]?.score || 0;
    const confidence = Math.min(1, topScore / 15); // normalize: 15+ = high confidence

    // Track used blocks
    scored.forEach(s => this._usedBlocks.add(s.block.meta.id));

    // Build response
    const blocks = scored.map(s => ({
      id: s.block.meta.id,
      title: s.block.meta.title,
      chapter: s.block.meta._chapterNum,
      score: s.score
    }));

    if (confidence < 0.1) {
      return {
        text: this._noMatchResponse(),
        blocks: [],
        followUp: 'Zkus se zeptat na algoritmy, AI, programování nebo třeba na to, jak funguje internet!',
        confidence: 0,
        canEscalate: true
      };
    }

    const top = scored[0].block;
    const teaser = top.meta.teaser || (top.body || '').substring(0, 180).replace(/[#*_\[\]]/g, '').trim();

    let text = this._openingLine(qType, confidence);
    text += `<b>${top.meta.title}</b> (kapitola ${top.meta._chapterNum}) je přesně o tomhle! `;
    text += `${teaser}... `;
    text += `<br><br><a href="#" onclick="event.preventDefault();app.openBlock('${top.meta.id}')">Přečíst tuto sekci &rarr;</a>`;

    if (scored.length > 1) {
      text += '<br><br>Mohlo by tě zajímat i:';
      scored.slice(1, 3).forEach(s => {
        text += `<br>&bull; <a href="#" onclick="event.preventDefault();app.openBlock('${s.block.meta.id}')">${s.block.meta.title}</a> (kap. ${s.block.meta._chapterNum})`;
      });
    }

    if (matchTopics.length > 0) {
      text += '<br><br>Související témata: ';
      text += matchTopics.slice(0, 3).map(t =>
        `<a href="#" onclick="event.preventDefault();app.showTopic('${t}')">${t}</a>`
      ).join(' &middot; ');
    }

    const followUp = this._socraticFollowUp(qType, top);

    return { text, blocks, followUp, confidence, canEscalate: confidence < 0.3 };
  }

  _detectQuestionType(q) {
    if (/^(why|how come|what makes|proč|jak to, že|čím to)/.test(q)) return 'why';
    if (/^(how|jak |jak se|jak si|jak na)/.test(q)) return 'how';
    if (/^(what if|what would|imagine|co kdyby|co by se stalo|představ si)/.test(q)) return 'whatif';
    if (/^(what is|what are|what's|define|explain|co je|co jsou|co znamená|vysvětli)/.test(q)) return 'what';
    if (/^(can you|could you|tell me|show me|můžeš|mohl bys|řekni mi|ukaž mi)/.test(q)) return 'request';
    return 'general';
  }

  _openingLine(qType, confidence) {
    const lines = {
      why: ["Skvělá otázka! O tomhle se v knize píše. ", "Přesně na tohle se ptají i skuteční informatici! ", "Přemýšlíš jako inženýr! "],
      how: ["Ukážu ti to — v knize je to hezky vysvětlené. ", "Dobrá otázka! Funguje to takhle: ", "Rozložme si to na kroky: "],
      whatif: ["Ó, myšlenkové experimenty! Ty má kniha ráda. ", "Zajímavé! Nad tímhle přemýšlejí i profíci. ", "Pojďme tu myšlenku prozkoumat! "],
      what: ["Dobrá otázka! Mrknu, co o tom je v knize. ", "Tady je, co to znamená: ", "Kniha to vysvětluje takhle: "],
      request: ["Jasně! Najdu ti tu správnou sekci. ", "Jdu na to! ", "Rád pomůžu — od toho tady jsem! "],
      general: ["Mrknu do knihy! ", "Zajímavá otázka! ", "Tady je, co jsem našel: "]
    };
    const options = lines[qType] || lines.general;
    return options[Math.floor(Math.random() * options.length)];
  }

  _socraticFollowUp(qType, topBlock) {
    const followUps = {
      why: [
        'Napadá tě příklad ze života, kde na tomhle záleží?',
        'Co myslíš, že by se stalo, kdybychom to udělali obráceně?',
        'Proč to podle tebe inženýři navrhli právě takhle?'
      ],
      how: [
        'Dokázal bys ten postup jednoduše vysvětlit kamarádovi?',
        'Která část je podle tebe pro počítač nejtěžší?',
        'Napadá tě situace, kdy by tenhle postup selhal?'
      ],
      whatif: [
        'Jaké důkazy bys potřeboval, abys tu myšlenku otestoval?',
        'Jak bys navrhl experiment, který to zjistí?',
        'Jaké nevýhody by ten přístup mohl mít?'
      ],
      what: [
        'Napadá tě běžný příklad z každodenního života?',
        'V čem se to liší od toho, co jsi čekal?',
        'Co tě na tomhle konceptu nejvíc překvapilo?'
      ],
      general: [
        'Co tě na tomhle tématu zajímá nejvíc?',
        'Chceš zkusit praktické aktivity k tomuhle tématu?',
        'Zkus to, co ses naučil, někomu vysvětlit — krásně se to tím upevní!'
      ]
    };
    const options = followUps[qType] || followUps.general;
    return options[Math.floor(Math.random() * options.length)];
  }

  _noMatchResponse() {
    const responses = [
      "Hmm, o tomhle v knize nic není! Nejlíp umím vysvětlovat informatiku. Zkus se zeptat třeba <b>jak funguje internet</b>, <b>co je algoritmus</b> nebo <b>proč AI halucinuje</b>!",
      "Tohle je mimo záběr knihy! Rád ale pomůžu s tématy jako <b>hesla a phishing</b>, <b>tvorba webu</b> nebo <b>jak se AI učí z dat</b>. Anebo napiš skutečnému Pavlovi!",
      "Tohle jsem v knize nenašel. Kniha se věnuje <b>algoritmům</b>, <b>AI</b>, <b>datům</b>, <b>bezpečnosti</b> a <b>tvorbě webů, appek i her</b> — zeptej se na cokoli z toho!"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Generate suggested questions based on current block content
  getSuggestedQuestions(block) {
    if (!block) return [];
    const body = (block.body || '').toLowerCase();
    const title = block.meta?.title || '';
    const questions = [];

    if (body.includes('algoritm')) questions.push('Čím se liší algoritmus od obyčejného návodu?');
    if (body.includes('proměnn')) questions.push('K čemu jsou v programu proměnné?');
    if (body.includes('cloud')) questions.push('Kde doopravdy leží data uložená v cloudu?');
    if (body.includes('bublin') || body.includes('feed')) questions.push('Jak se dostanu ze své informační bubliny?');
    if (body.includes('laděn') || body.includes('testov')) questions.push('Jak se hledá chyba v programu?');
    if (body.includes('soukrom') || body.includes('data')) questions.push('Jaká data o mně appky sbírají?');
    if (body.includes('heslo') || body.includes('phishing')) questions.push('Jak poznám podvodnou zprávu?');
    if (body.includes('html') || body.includes('css')) questions.push('Jak spolu souvisí HTML, CSS a JavaScript?');
    if (body.includes('bias') || body.includes('férov')) questions.push('Může být AI nespravedlivá?');
    if (body.includes('autoplay') || body.includes('scrollov')) questions.push('Proč je tak těžké přestat scrollovat?');
    if (body.includes('generativn') || body.includes('halucin')) questions.push('Proč si AI občas vymýšlí?');
    if (body.includes('doporuč')) questions.push('Podle čeho mi TikTok vybírá videa?');

    // Fallback
    if (questions.length === 0) {
      questions.push(`Jaká je hlavní myšlenka sekce „${title}“?`);
      questions.push(`Proč je tohle téma důležité?`);
    }

    return questions.slice(0, 3);
  }
}

// Conversation manager — persists chat history
export class ConversationManager {
  constructor() {
    this.conversations = [];
    this.authorMessages = [];
    this.load();
  }

  load() {
    try {
      const data = JSON.parse(localStorage.getItem('pbook-conversations') || '{}');
      this.conversations = data.conversations || [];
      this.authorMessages = data.authorMessages || [];
    } catch (e) {}
  }

  save() {
    try {
      // Keep last 20 conversations
      const recent = this.conversations.slice(-20);
      localStorage.setItem('pbook-conversations', JSON.stringify({
        conversations: recent,
        authorMessages: this.authorMessages
      }));
    } catch (e) {}
  }

  getOrCreateConversation(blockId, chapterId) {
    // Find recent active conversation for this context
    const recent = this.conversations.find(c =>
      c.status === 'active' &&
      c.context.blockId === blockId &&
      Date.now() - c.startedAt < 30 * 60 * 1000 // within 30 min
    );
    if (recent) return recent;

    const conv = {
      id: 'conv-' + Date.now(),
      startedAt: Date.now(),
      context: { blockId, chapterId },
      messages: [],
      status: 'active'
    };
    this.conversations.push(conv);
    this.save();
    return conv;
  }

  addMessage(convId, role, text, extra = {}) {
    const conv = this.conversations.find(c => c.id === convId);
    if (!conv) return;
    conv.messages.push({ role, text, timestamp: Date.now(), ...extra });
    this.save();
  }

  escalateToAuthor(convId, question, blockId, readerProfile) {
    const msg = {
      id: 'msg-' + Date.now(),
      conversationId: convId,
      blockId,
      question,
      readerProfile: {
        level: readerProfile.level,
        xp: readerProfile.xp,
        readCount: readerProfile.readBlocks?.size || 0
      },
      status: 'pending',
      createdAt: Date.now()
    };
    this.authorMessages.push(msg);

    const conv = this.conversations.find(c => c.id === convId);
    if (conv) conv.status = 'escalated';

    this.save();
    return msg;
  }

  getAuthorMessageCount() {
    return this.authorMessages.filter(m => m.status === 'pending').length;
  }
}
