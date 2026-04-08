# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal CV/portfolio website for Rafał Gołąb (DevOps & Cloud Architect). Built with Next.js 14, TypeScript, and Tailwind CSS. Configured for static export (`output: "export"` in next.config.js) for GitHub Pages deployment.

## Commands

```bash
bun install        # Install dependencies
bun run dev        # Dev server at localhost:3000
bun run build      # Production build (static export)
bun run lint       # ESLint
```

## Architecture

Single-page app with section-based layout. All sections render on `app/page.tsx`.

- **Content data**: `data/profile.ts` — single source of truth for all profile content (experience, skills, projects, education, certifications)
- **Sections**: `components/sections/` — each section is a standalone component (hero, skills, services, experience, projects, certifications, education, contact)
- **Layout shell**: `app/layout.tsx` wraps everything with Navigation, Footer, CookieConsent, and ThemeProvider (next-themes, dark mode default)
- **Contact form**: submits to an external n8n webhook endpoint

## Key Details

- Uses `bun` as package manager (not npm/yarn)
- Static export mode — no server-side features (API routes, SSR, ISR)
- Dark/light theme via `next-themes` with class strategy (`darkMode: "class"` in Tailwind)
- Primary font: Plus Jakarta Sans (`--font-jakarta`)
- Custom color palette: indigo primary + dark surfaces defined in `tailwind.config.ts`
- Path alias `@/` maps to project root

## Git Commits

- Use simple one-liner conventional commits (e.g. `feat: add dark mode support`)
- No co-authored-by footers, no multi-line descriptions
- Match the style of existing commits in the repo
