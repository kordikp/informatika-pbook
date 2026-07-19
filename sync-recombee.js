#!/usr/bin/env node
const recombee = require('recombee-api-client');
const fs = require('fs');
const path = require('path');

const DB = process.env.RECOMBEE_DB || 'cvachond-land-free-pbook-kids';
const TOKEN = process.env.RECOMBEE_TOKEN;
if (!TOKEN) { console.error('Set RECOMBEE_TOKEN env var'); process.exit(1); }

const client = new recombee.ApiClient(DB, TOKEN, { region: 'eu-west' });

function parseFM(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return { meta: {}, body: text };
  const meta = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w[\w-]*)\s*:\s*(.*)/);
    if (kv) { let v = kv[2].trim(); if (v==='true') v=true; else if (v==='false') v=false; else if (v==='null') v=null; else if (/^\d+$/.test(v)) v=parseInt(v); else v=v.replace(/^["']|["']$/g,''); meta[kv[1]]=v; }
  }
  return { meta, body: m[2].trim() };
}

async function main() {
  const book = JSON.parse(fs.readFileSync('content/book.json', 'utf8'));
  console.log('Setting up properties...');
  for (const p of [{name:'title',type:'string'},{name:'type',type:'string'},{name:'voice',type:'string'},{name:'chapter',type:'string'},{name:'chapterNum',type:'int'},{name:'chapterTitle',type:'string'},{name:'readingTime',type:'int'},{name:'standalone',type:'boolean'},{name:'teaser',type:'string'},{name:'parent',type:'string'},{name:'body',type:'string'}]) {
    try { await client.send(new recombee.requests.AddItemProperty(p.name, p.type)); console.log('  +', p.name); }
    catch(e) { console.log('  =', p.name, '(exists)'); }
  }
  console.log('\nUploading items...');
  let ok = 0;
  for (const ch of book.chapters) {
    for (const f of ch.files) {
      const { meta, body } = parseFM(fs.readFileSync(path.join('content', ch.directory, f), 'utf8'));
      if (!meta.id) continue;
      try {
        await client.send(new recombee.requests.SetItemValues(meta.id, {
          title: meta.title||'', type: meta.type||'spine', voice: meta.voice||'universal',
          chapter: ch.id, chapterNum: ch.number, chapterTitle: ch.title,
          readingTime: meta.readingTime||3, standalone: meta.standalone||false,
          teaser: meta.teaser||'', parent: meta.parent||'', body: body.substring(0,5000),
        }, { cascadeCreate: true }));
        ok++; process.stdout.write('.');
      } catch(e) { console.log('\n  !', meta.id, e.message||e); }
    }
  }
  console.log('\n\nDone:', ok, 'items uploaded');
}
main().catch(e => console.error('Fatal:', e));
