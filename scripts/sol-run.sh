#!/usr/bin/env bash
# Pošle složitější vizuální práci do OpenAI „sol“ (gpt-5.6-sol).
# Použití:  1) přidej OPENAI_API_KEY=sk-... do pbook/.env
#           2) ./scripts/sol-run.sh comics   — komiksy pro všechny koncepty (63!) nebo:
#              ./scripts/sol-run.sh comics ch5-jak-funguje-generativni-model,ch1-api
#           3) ./scripts/sol-run.sh polish   — přeleští všechny SVG podle sol-plan.json
set -euo pipefail
cd "$(dirname "$0")/.."
set -a; source .env 2>/dev/null || true; set +a
[ -z "${OPENAI_API_KEY:-}" ] && { echo "Chybí OPENAI_API_KEY v .env"; exit 1; }

case "${1:-}" in
  comics)
    if [ -n "${2:-}" ]; then node scripts/generate-comics.js --only "$2" --concurrency 4
    else node scripts/generate-comics.js --all --concurrency 5; fi ;;
  polish)
    # přegeneruj plán, ať obsahuje i nejnovější soubory
    python3 - << 'PY'
import json, glob, os
plan = {os.path.basename(f): {"mode": "restyle", "issues": "Oprav překryvy, min. font 11, paletu, českou typografii; zvyš čitelnost, zachovej všechny informace a české texty."}
        for f in sorted(glob.glob('images/diagram-*.svg') + glob.glob('images/anim-*.svg') + glob.glob('images/comic-*.svg') + ['images/hero-digital.svg'])}
json.dump(plan, open('scripts/sol-plan.json', 'w'), ensure_ascii=False, indent=2)
print('plán:', len(plan), 'souborů')
PY
    node scripts/improve-images.js --plan scripts/sol-plan.json --concurrency 4 ;;
  *) echo "Použití: $0 comics [seznam-konceptů] | polish"; exit 1 ;;
esac
