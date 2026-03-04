# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FixPro landing page — a B2B SaaS lead generation platform for appliance repair masters and service centers in Ukraine. All UI text is in Ukrainian.

## Commands

- `npm run dev` — start dev server (Next.js 16, Turbopack)
- `npm run build` — production build (outputs to `/out` via static export)
- `npm run lint` — ESLint (next/core-web-vitals + typescript rules)

## Tech Stack

- **Next.js 16** with App Router, TypeScript, React 19, `output: "export"` (static HTML)
- **Tailwind CSS v4** via `@tailwindcss/postcss` (no `tailwind.config.js` — uses CSS-based config in `globals.css`)
- **Inter** font with `cyrillic` subset loaded via `next/font/google`
- Path alias: `@/*` maps to `./src/*`
- Deployment: Cloudflare Pages — build command `npm run build`, output dir `out`

## Architecture

Single-page landing. `src/app/page.tsx` composes all sections in order:

`Header → Hero → Features → Categories → VideoSection → HowItWorks → Pricing → FAQ → Footer`

All section components live in `src/components/`. Client components (`"use client"`):
- `Header.tsx` — mobile menu toggle
- `Hero.tsx` — registration form state (phone, city, tech category)
- `FAQ.tsx` — accordion open/close state

`StoreButtons.tsx` is a shared component used in Hero, Pricing, and FAQ — accepts `theme="dark"` (default, white text/icons on dark bg) or `theme="light"` (black text/icons on white bg).

## Design System

- **Colors**: `#111` (foreground), `#f7f8fa` (background), `#fff` (cards/white sections), gray-400/500 for secondary text. Accent green `emerald-400/500` only on pricing badges/checkmarks.
- **Typography**: Inter font, `font-extrabold` for headings, tight tracking
- **Layout**: `max-w-7xl` container, `px-6 lg:px-8` horizontal padding
- **Components**: `rounded-full` buttons, `rounded-2xl` cards, `border-gray-100` subtle borders
- **Mobile**: Phone mockup hidden on mobile (`hidden lg:flex`), form fields stack vertically
- **Breakpoints**: `sm:`, `md:` (nav visibility), `lg:` (layout shifts), `xl:` (size bumps)

## Business Context

- Masters pay fixed 400 UAH per lead (no subscription)
- Service centers get custom commercial offers via `partners@fixpro.ua`
- No payment processing — pure lead generation
- `VideoSection` currently has a placeholder (no video URL yet)
- Hero form collects phone + city + tech category — currently `preventDefault()` only, no backend

## Static Assets

- `public/logo.png` — blue shield with wrench (brand logo)
- `public/phone-mockup.png` — 3D iPhone mockup (used in Hero, desktop only)
- `public/google-play-icon.png` — Google Play icon (black, inverted to white on dark theme via Tailwind `invert`)
- `images.unoptimized: true` in `next.config.ts` — required for static export compatibility
