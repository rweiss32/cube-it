# קוביאות — Kubiyot

A browser-based Hebrew word game. Players build the longest word they can from 8 random letter tiles that fits the round's category, competing against a CPU opponent over 5 rounds.

Play it at: [rweiss32.github.io/cube-it/](https://rweiss32.github.io/cube-it/)

---

## Running locally

No build step required. Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
npx serve .
# or
python -m http.server 8080
```

The service worker requires HTTPS or `localhost` to register.

---

## Editing word lists

Word lists live in `data/categories.txt` — plain text, one category per line, comma-separated words.

After editing, regenerate `data/categories.js`:

```bash
node tools/convert_lists_tool.js txt2js
```

Or use the visual editor: open `tools/cube-it-words-editor.html` in a browser.

> `data/categories.js` is a generated file — do not edit it directly.

---

## Git hooks

A pre-push hook validates and regenerates `categories.js` before every push. Activate it after cloning:

```bash
git config core.hooksPath .githooks
```

---

## Tools (dev only)

| File | Purpose |
|------|---------|
| `tools/convert_lists_tool.js` | CLI converter between `categories.txt` ↔ `categories.js` |
| `tools/cube-it-words-editor.html` | Visual word list editor |

These are developer utilities and are not part of the game.

---

## Project structure

```
cube-it/
├── index.html              # entire app (HTML + CSS + JS, no build step)
├── sw.js                   # service worker (cache-first PWA)
├── manifest.json           # PWA manifest
├── assets/                 # runtime assets (logo)
├── data/                   # word lists
│   ├── categories.txt      # source of truth — edit this
│   └── categories.js       # generated — do not edit
├── icons/                  # PWA icons
├── tools/                  # dev utilities (not served to players)
├── design/                 # source design files
└── .githooks/              # pre-push validation hook
```
