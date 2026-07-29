# GymFox

Online store for gym accessories — a frontend-only school project built as part of the Computer Programming program at La Cité collégiale.

> **Note:** This project is strictly frontend (no backend). Product data is stored locally in JSON and the cart runs entirely client-side.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)

---

## Overview

GymFox simulates an online store specializing in gym accessories (lifting straps, dumbbells, grip gloves, resistance bands). The site focuses on a polished user experience with PWA installation, category filtering, product variants, and a contact form.

---

## Features

- **Product catalog** — 4 products with variants (color, weight), category filtering, and dynamic detail pages (`/produits/[slug]`)
- **Shopping cart** — Client-side add, remove, and item management
- **Bilingual (FR/EN)** — French and English via `react-i18next` with separate translation files by namespace (`common`, `header`, `home`) — currently applied to the navbar and hero section
- **Dark / light theme** — Toggle via a React Context `ThemeProvider` — currently applied to the navbar and hero section
- **PWA** — Manifest, 512×512 icons, custom install banner with a 24-hour cooldown after dismissal
- **Contact form** — Validation with `react-hook-form`, submission via EmailJS
- **Performance optimization** — Compressed WebP images, lazy loading, `next/image` with `priority` on the hero

---

## Tech Stack

| Category     | Technology                         |
| ------------ | ---------------------------------- |
| Framework    | Next.js 16 (App Router)            |
| Language     | TypeScript 5                       |
| UI           | Tailwind CSS 4                     |
| Icons        | Lucide React, React Icons          |
| Forms        | React Hook Form + EmailJS          |
| i18n         | i18next + react-i18next            |
| Optimization | Sharp (images), WebP, lazy loading |

---

## Project Structure

```
src/
├── app/                         # Routes (App Router)
│   ├── page.tsx                 # Home
│   ├── produits/
│   │   ├── page.tsx             # Product listing
│   │   └── [slug]/page.tsx      # Product detail (dynamic)
│   ├── panier/page.tsx          # Cart
│   ├── a-propos/page.tsx        # About
│   └── contact/page.tsx         # Contact
├── components/
│   ├── home/                    # Hero, Categories, ProductList
│   ├── header/                  # Header, Navbar
│   ├── footer/                  # Footer
│   ├── common/                  # Button, Logo, ProductCard
│   ├── productDetail/           # Product detail page
│   ├── cart/                    # Cart
│   ├── contact/                 # Form (React Hook Form)
│   ├── a-propos/                # About section
│   ├── produits/                # Catalog page
│   └── InstallPrompt.tsx        # PWA install banner
├── providers/
│   ├── ThemeProvider.tsx         # Dark/light theme context
│   └── InstalledDateProvider.tsx # PWA banner cooldown
├── locales/
│   ├── fr/                      # French translations
│   └── en/                      # English translations
└── utils/
    ├── products.json             # Product data (mock)
    ├── cartItems.json            # Cart structure
    └── navItems.json             # Navigation links
```

---

## Getting Started

```bash
git clone https://github.com/GeFy9999/GymFox-app.git
cd GymFox-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Static Build

```bash
npm run build
```

---

## Academic Context

This project was built as a frontend exercise for a web development course. The goal was to create a complete e-commerce interface without a backend, putting into practice:

- Component-based architecture with React and Next.js (App Router)
- Dynamic routing with `generateStaticParams`
- State management via React Context (theme, cart)
- Client-side internationalization
- Performance best practices (WebP, lazy loading, Lighthouse)
- PWA configuration (manifest, icons, install prompt)

---

## Author

Built by **Zach** — Computer Programming student at La Cité collégiale.
