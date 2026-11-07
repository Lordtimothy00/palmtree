# Palmtree Technology Services — Website

Premium marketing site for **Palmtree Technology Services (Palmtree Solar Master)** — a solar
energy, renewable energy and technology company based in Ibadan, Nigeria, serving all 36 states
and the FCT.

Built with **Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Lucide icons**.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Pages

| Route       | Purpose |
| ----------- | ------- |
| `/`         | Hero, trust highlights, about intro, services, featured products, why choose us, project gallery, training promo, CTA, contact shortcuts |
| `/about`    | Company profile, expertise, approach, coverage |
| `/services` | Eight service sections, each with photography, benefits, WhatsApp and quote CTAs |
| `/products` | Enquiry catalogue with category filters, search, deep-linkable detail modals |
| `/projects` | Masonry gallery with category filtering and a full-screen lightbox |
| `/training` | Palmtree Solar Master programmes and a registration enquiry form |
| `/contact`  | Contact channels, quote form, general enquiry form, office map and directions |

`robots.txt` and `sitemap.xml` are generated from `app/robots.ts` and `app/sitemap.ts`.

## Brand

| Token | Value | Usage |
| ----- | ----- | ----- |
| Forest green | `#075B32` | Dominant brand colour, headers, dark sections |
| Solar yellow | `#FDCB05` | Primary calls to action, accents |
| Navy blue | `#101D45` | Text, contrast sections, footer |
| White | `#FFFFFF` | Surfaces |
| Light background | `#F7F9F5` | Section tint (`mist`) |

Tokens live in `app/globals.css` under `@theme`. Fonts are **Sora** (display) and
**Plus Jakarta Sans** (body), self-hosted through `@fontsource-variable`.

### Logo assets

The mark is the company's **authentic emblem** — the yellow gear enclosing the CCTV
camera, solar panel, wrench, gear and hard hat, crossed by two green palm leaves —
taken from the supplied master logo (`public/brand/source/logo-master.png`) and
keyed to a transparent background.

| File | Purpose |
| ---- | ------- |
| `public/brand/emblem.png` | Transparent emblem (640×608) used in the header, footer and training card |
| `public/brand/icon-512.png` | Square icon for structured data / PWA |
| `public/brand/apple-touch-icon.png` | 180px opaque iOS icon |
| `public/brand/favicon.ico`, `favicon-256.png`, `favicon-64.png` | Browser tab icons |
| `public/brand/source/logo-master.png` | The supplied master artwork, kept for reference |

**The wordmark is set in live text**, not shipped as an image: *PALM* in navy, *TREE*
in forest green, with "TECHNOLOGY SERVICES" beneath, matching the original. Live text
stays razor sharp at every size, is selectable, and is readable by search engines and
screen readers — and it can be reversed to white/light-green on dark surfaces, which
the baked 3D artwork cannot do cleanly.

Sampled wordmark colours from the master file: PALM `#00074C`, TREE `#01740B`. The
site keeps its own WCAG-tuned tokens (`--color-navy-700`, `--color-forest-700`), which
are close enough that the lockup reads as the same brand.

To swap in new artwork, export the emblem on a transparent PNG, overwrite
`emblem.png`, and update `EMBLEM_RATIO` in `components/logo.tsx` if the aspect
changes.

