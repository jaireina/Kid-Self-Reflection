# 🌟 My Self-Reflection App

A fun, kid-friendly self-reflection app built with Next.js. Designed for Oliver (age 7) with pastel tones, emojis, and simple interactions.

## Features

- **Home page** – Browse different self-reflection activities
- **Reflection completion** – Answer questions with single choice, multiple choice, or text input
- **Kid-friendly design** – Pastel colors, emojis, rounded corners, and playful typography

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/page.tsx` – Home page with reflection cards
- `src/app/reflection/[id]/` – Dynamic reflection page with form
- `src/lib/reflections.ts` – Reflection data (questions, sections, options)
- `src/lib/types.ts` – TypeScript types
