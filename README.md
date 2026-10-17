# Syam Sundar Akina | Portfolio

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS. A clean, minimal single page
with light and dark themes (follows the system setting, with a toggle in the navbar).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you publish

1. **Project links:** each project in `lib/data.ts` accepts `repo` and `demo`. Without `repo`, "Code" opens your GitHub profile; "Live demo" only appears when `demo` is set.
2. **Photo:** `public/syam-illustrated.webp` (hero: illustrated portrait, background removed, black & white with a face spotlight) and `public/og.jpg` (link previews).

## Where things live

| What | File |
| --- | --- |
| All text and content | `lib/data.ts` |
| Colors (light + dark tokens) | `app/globals.css` (`:root` variables) |
| Fonts (Geist, Geist Mono) | `app/layout.tsx` |
| Sections | `components/` (Hero, About, Experience, Projects, Skills, Contact) |
| Scroll fade-in | `components/Reveal.tsx` |

Change the accent color by editing `--accent` in `app/globals.css` (one value for light, one for dark).

## Deploy

Push to GitHub and import the repo on Vercel. No configuration needed.
