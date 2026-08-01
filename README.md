# amn Practice Portal — package (1 Aug 2026, build 24 — the Pages deployment build)

ONE file, one app: `amn_pmp.html` contains BOTH the desktop portal AND the
phone app (renders below 640px). No forks, no per-platform files — a fix made
once benefits both. The five PWA-asset filenames are referenced verbatim from
the HTML head and manifest, so never rename them.

Keep the HTML under ~880KB: past that it stops previewing in the Claude app.
Production is 770KB and the demo 828KB after the Round-26 audit.

## Files
- amn_pmp.html          production — the portal + the phone app in one file
- amn_pmp_demo.html     matching demo (persona switcher; open on a phone to try mobile)
- build_demo.py         regenerates the demo (needs previous demo saved as demo-old.html)
- claude_handover.md    attach to every Claude session — DO NOT publish to the public repo
- retired_import_seeds.js   the one-time import SEED DATA (real contacts/history)
                            — NOT loaded, DO NOT publish
- retired_import_tools.js   the one-time import MACHINERY, removed from the HTML
                            at Round 26 — NOT loaded, DO NOT publish
- manifest.webmanifest, sw.js, icon-192.png, icon-512.png, apple-touch-icon.png
  — PWA installability files; sit next to amn_pmp.html on GitHub Pages;
    harmlessly ignored when the HTML is opened as a plain file

## Before making the repo public (the Pages cutover)
Move OUT of the repo folder: claude_handover.md, retired_import_seeds.js,
retired_import_tools.js, build_demo.py, amn_pmp_demo.html, any add_round*.py.
Also lowercase "AMN Portal" in manifest.webmanifest if present.

## Starting a session
Attach amn_pmp.html + amn_pmp_demo.html + build_demo.py + claude_handover.md.
Say what you want changed; the handover's SESSION PLAN covers the rest.
