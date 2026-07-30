#!/usr/bin/env python3
# Generuje content/concept-map.json (vizuální mapa konceptů s layoutem) a
# content/concept-proposals.json (ghost koncepty na testování zájmu)
# z Mapy informatických konceptů Glitch (knowledge-map.yaml).
# Použití: python3 scripts/build-concept-map.py [cesta-k-knowledge-map.yaml]
import sys, json, math, re
try:
    import yaml
except ImportError:
    sys.exit('pip install pyyaml')

SRC = sys.argv[1] if len(sys.argv) > 1 else '../knowledge-map.yaml'
km = yaml.safe_load(open(SRC, encoding='utf-8'))

ORDER = ['digitalni-zaklady', 'informaticke-mysleni', 'programovani', 'data-databaze',
         'umela-inteligence', 'kyberbezpecnost', 'digitalni-obcanstvi', 'tvorba-webu',
         'tvorba-aplikaci', 'tvorba-obsahu', 'herni-vyvoj', 'fyzicky-computing']
CHNUM = {t: i + 1 for i, t in enumerate(ORDER)}
COLORS = {'digitalni-zaklady': '#7C3AED', 'informaticke-mysleni': '#0EA5E9', 'programovani': '#10B981',
          'data-databaze': '#D97706', 'umela-inteligence': '#8B5CF6', 'kyberbezpecnost': '#EF4444',
          'digitalni-obcanstvi': '#EC4899', 'tvorba-webu': '#06B6D4', 'tvorba-aplikaci': '#84CC16',
          'tvorba-obsahu': '#F59E0B', 'herni-vyvoj': '#6366F1', 'fyzicky-computing': '#14B8A6'}

def shortslug(cid, tema):
    return cid[len(tema) + 1:] if cid.startswith(tema + '-') else cid

def our_slug(c):
    if c.get('vrstva') == 'core':
        return f"ch{CHNUM[c['tema']]}-{shortslug(c['id'], c['tema'])}"
    return c['id']

def first_sentence(t, maxlen=150):
    t = re.split(r'(?<=[.!?…])\s', t.strip())[0]
    return (t[:maxlen - 1] + '…') if len(t) > maxlen else t

VERBS = [('vysvětlí', 'Vysvětlil bys'), ('popíše', 'Popsal bys'), ('rozliší', 'Rozlišil bys'),
         ('posoudí', 'Posoudil bys'), ('navrhne', 'Navrhl bys'), ('vytvoří', 'Vytvořil bys'),
         ('porovná', 'Porovnal bys'), ('uvede', 'Uvedl bys'), ('najde', 'Našel bys'),
         ('určí', 'Určil bys'), ('použije', 'Použil bys'), ('sestaví', 'Sestavil bys'),
         ('zhodnotí', 'Zhodnotil bys'), ('vybere', 'Vybral bys'), ('předvede', 'Předvedl bys'),
         ('ověří', 'Ověřil bys'), ('zapíše', 'Zapsal bys'), ('vyjmenuje', 'Vyjmenoval bys')]
def recall_q(c):
    for cil in (c.get('cile') or []):
        t = cil['text'].strip()
        for v, r in VERBS:
            if t.startswith(f'Žák {v} '):
                q = r + ' ' + t[len(f'Žák {v} '):].rstrip('.')
                return q + '?'
    return f"Co je „{c['nazev']}“ a k čemu se ti hodí?"

concepts = km['concepts']
temata = {t['id']: t for t in km['temata']}
id2slug = {c['id']: our_slug(c) for c in concepts}

# ---- layout: 12 clusterů v mřížce 4×3 ----
W, H = 1520, 1080
COLS, ROWS = 4, 3
nodes, prop_list = [], []
for ti, tid in enumerate(ORDER):
    cx = 200 + (ti % COLS) * 375
    cy = 200 + (ti // COLS) * 335
    group = [c for c in concepts if c['tema'] == tid]
    core = [c for c in group if c.get('vrstva') == 'core']
    ghost = [c for c in group if c.get('vrstva') != 'core']
    # core: vnitřní kruh, ghost: vnější kruh
    for i, c in enumerate(core):
        a = 2 * math.pi * i / max(len(core), 1) - math.pi / 2
        r = 0 if len(core) == 1 else 62
        nodes.append(dict(slug=our_slug(c), title=c['nazev'], tema=tid, state='core',
                          x=round(cx + r * math.cos(a)), y=round(cy + r * math.sin(a)),
                          teaser=first_sentence(c['popis'], 160)))
    for i, c in enumerate(ghost):
        a = 2 * math.pi * i / max(len(ghost), 1) - math.pi / 2 + 0.35
        r = 128
        nodes.append(dict(slug=c['id'], title=c['nazev'], tema=tid, state='ghost',
                          x=round(cx + r * math.cos(a)), y=round(cy + r * math.sin(a)),
                          teaser=first_sentence(c['popis'], 160)))
        prop_list.append(dict(slug=c['id'], title=c['nazev'], tema=tid,
                              objective=first_sentence(c['popis'], 170), recallQ=recall_q(c)))

pos = {n['slug']: (n['x'], n['y']) for n in nodes}
edges = []
for c in concepts:
    a = id2slug[c['id']]
    for p in (c.get('prerekvizity') or []):
        if p in id2slug and id2slug[p] in pos and a in pos:
            edges.append(dict(a=id2slug[p], b=a, type='prereq'))
    for s in (c.get('souvisi') or []):
        if s in id2slug and id2slug[s] in pos and a in pos:
            x, y = sorted([a, id2slug[s]])
            edges.append(dict(a=x, b=y, type='souvisi'))
seen = set(); uniq = []
for e in edges:
    k = (e['a'], e['b'], e['type'])
    if k not in seen: seen.add(k); uniq.append(e)
for e in uniq:
    (e['ax'], e['ay']), (e['bx'], e['by']) = pos[e['a']], pos[e['b']]

# sousedi (pro „Kam dál" v sekcích)
neigh = {}
for e in uniq:
    neigh.setdefault(e['a'], set()).add(e['b'])
    neigh.setdefault(e['b'], set()).add(e['a'])
for n in nodes:
    n['rel'] = sorted(neigh.get(n['slug'], []))

out = dict(width=W, height=H,
           temata=[dict(id=t, nazev=temata[t]['nazev'], color=COLORS[t],
                        cx=200 + (i % COLS) * 375, cy=200 + (i // COLS) * 335)
                   for i, t in enumerate(ORDER)],
           nodes=nodes, edges=uniq)
json.dump(out, open('content/concept-map.json', 'w', encoding='utf-8'), ensure_ascii=False)
json.dump(dict(proposals=prop_list), open('content/concept-proposals.json', 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)
print(f'concept-map.json: {len(nodes)} uzlů ({sum(1 for n in nodes if n["state"]=="core")} core, '
      f'{sum(1 for n in nodes if n["state"]=="ghost")} ghost), {len(uniq)} hran '
      f'({sum(1 for e in uniq if e["type"]=="prereq")} prereq, {sum(1 for e in uniq if e["type"]=="souvisi")} souvisí)')
print(f'concept-proposals.json: {len(prop_list)} návrhů')

# ---- ghost kontrakty do concepts.json (pro /api/generate — rozpracování na přání) ----
import copy
try:
    cj = json.load(open('content/concepts.json', encoding='utf-8'))
except FileNotFoundError:
    cj = {'concepts': []}
cj['concepts'] = [c for c in cj['concepts'] if c.get('provenance') != 'ghost']
FORBIDDEN = ['vymyšlené statistiky nebo čísla', 'vymyšlené citace, URL nebo názvy studií',
             'tvrzení, že jediná metoda problém zcela řeší']
gcount = 0
for c in concepts:
    if c.get('vrstva') == 'core':
        continue
    must = [{'point': cil['text']} for cil in (c.get('cile') or [])][:5]
    if not must:
        must = [{'point': first_sentence(c['popis'], 200)}]
    cj['concepts'].append({
        'id': c['id'], 'title': c['nazev'], 'chapter': c['tema'],
        'anchor': None, 'anchorPath': None, 'provenance': 'ghost', 'blocks': [],
        'contract': {
            'objective': first_sentence(c['popis'], 220),
            'mustCover': must,
            'recallQ': recall_q(c),
            'recallA': first_sentence(c['popis'], 180),
            'forbidden': FORBIDDEN,
        }})
    gcount += 1
json.dump(cj, open('content/concepts.json', 'w', encoding='utf-8'), ensure_ascii=False)
print(f'concepts.json: + {gcount} ghost kontraktů (celkem {len(cj["concepts"])})')
