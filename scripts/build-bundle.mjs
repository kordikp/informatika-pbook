#!/usr/bin/env node
// Content bundle: the reader's whole book in ONE request instead of one per file.
//
//   node scripts/build-bundle.mjs [book-dir]       (Vercel runs it as the buildCommand)
//
// Writes content/bundle.<lang>.json for every language of the book (CONFIG.book.languages,
// else CONFIG.book.lang): { files: { "<chapter dir>/<file>": "<markdown>" } } with every file
// of book.json. Other languages' translations are cut down to the frontmatter the language
// filter reads (id, translationOf, lang, status), so a Czech reader does not download the
// English book. The engine (loadAllContent) fetches content/bundle.<LANG>.json and falls back
// to single files for anything the bundle lacks — no bundle (local serve) means the old way.
//
// The bundles are build output: git-ignored, rebuilt on every deploy, never edited by hand.
// A stale bundle would serve stale text, so a local server must rebuild it after content edits.
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const ROOT = path.resolve(process.argv[2] || '.');
const { CONFIG } = await import(pathToFileURL(path.join(ROOT, 'js/config.js')).href);
const contentDir = path.join(ROOT, CONFIG.book.contentDir || 'content');
const book = JSON.parse(fs.readFileSync(path.join(ROOT, CONFIG.book.bookIndex || 'content/book.json'), 'utf8'));
const langs = CONFIG.book.languages || [CONFIG.book.lang || 'en'];
const KEEP = new Set(['id', 'translationOf', 'lang', 'status']);

const files = [];   // [path in bundle, text, lang of a translation or null]
for (const ch of book.chapters || []) for (const f of ch.files || []) {
  const rel = `${ch.directory}/${f}`;
  let text;
  try { text = fs.readFileSync(path.join(contentDir, rel), 'utf8'); } catch (e) { continue; }   // the engine fetches it (and flags the miss)
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const tr = fm && /^translationOf:/m.test(fm[1]) ? (fm[1].match(/^lang:\s*['"]?([\w-]+)/m) || [])[1] || null : null;
  files.push([rel, text, tr, fm && fm[1]]);
}

for (const lang of langs) {
  const out = {};
  for (const [rel, text, tr, fm] of files) {
    out[rel] = !tr || tr === lang ? text
      : `---\n${fm.split(/\r?\n/).filter(l => KEEP.has((l.match(/^(\w+):/) || [])[1])).join('\n')}\n---\n`;
  }
  const dest = path.join(contentDir, `bundle.${lang}.json`);
  fs.writeFileSync(dest, JSON.stringify({ files: out }));
  console.log(`→ ${path.relative(ROOT, dest)}  ${Object.keys(out).length} files, ${(fs.statSync(dest).size / 1024).toFixed(0)} kB`);
}
