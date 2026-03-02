# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FixPro landing page — a B2B SaaS lead generation platform for appliance repair masters and service centers in Ukraine. All UI text is in Ukrainian.

## Commands

- `npm run dev` — start dev server (Next.js 16, Turbopack)
- `npm run build` — production build
- `npm run lint` — ESLint (next/core-web-vitals + typescript rules)

## Tech Stack

- **Next.js 16** with App Router, TypeScript, React 19
- **Tailwind CSS v4** via `@tailwindcss/postcss` (no `tailwind.config.js` — uses CSS-based config in `globals.css`)
- **Inter** font with `cyrillic` subset loaded via `next/font/google`
- Path alias: `@/*` maps to `./src/*`

## Architecture

Single-page landing. `src/app/page.tsx` composes all sections in order:

`Header → Hero → Features → VideoSection → HowItWorks → Pricing → Footer`

All section components live in `src/components/`. Only `Header.tsx` is a client component (`"use client"` for mobile menu toggle). Everything else is server-rendered.

## Design System

- **Colors**: `#111` (foreground), `#f7f8fa` (background), `#fff` (cards/white sections), gray-400/500 for secondary text. Accent green `emerald-400/500` only on pricing badges/checkmarks.
- **Typography**: Inter font, `font-extrabold` for headings, tight tracking
- **Layout**: `max-w-7xl` container, `px-6 lg:px-8` horizontal padding
- **Components**: `rounded-full` buttons, `rounded-2xl` cards, `border-gray-100` subtle borders
- **Mobile**: Phone mockup hidden on mobile (`hidden lg:flex`), text-only Hero on small screens
- **Breakpoints**: `sm:`, `md:` (nav visibility), `lg:` (layout shifts), `xl:` (size bumps)

## Business Context

- Masters pay fixed 400 UAH per lead (no subscription)
- Service centers get custom commercial offers via `partners@fixpro.ua`
- No payment processing — pure lead generation
- `VideoSection` currently has a placeholder (no video URL yet)

## Static Assets

- `public/logo.png` — blue shield with wrench (brand logo)
- `public/phone-mockup.png` — 3D iPhone mockup (used in Hero, desktop only)
