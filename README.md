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

The brand mark is the company's **official logo**, taken from the supplied master
file (`public/brand/source/logo-master.png`): the yellow gear enclosing the CCTV
camera, solar panel, wrench, gear and hard hat, crossed by two green palm leaves,
with the 3D PALMTREE / TECHNOLOGY SERVICES wordmark beneath.

| File | Purpose |
| ---- | ------- |
| `public/brand/logo.png` | Official horizontal lockup (emblem + wordmark), used in the header, footer and training card |
| `public/brand/emblem.png` | The emblem alone (640×608), for dark surfaces where the wordmark cannot go |
| `public/brand/icon-512.png` | Square icon for structured data / PWA |
| `public/brand/apple-touch-icon.png` | 180px opaque iOS icon |
| `public/brand/favicon.ico`, `favicon-256.png`, `favicon-64.png` | Browser tab icons |
| `public/brand/source/logo-master.png` | The supplied master artwork, kept for reference |

**Two lockups, deliberately.** The official wordmark is navy type on a white
backing, so it is only used on light surfaces:

- **Light surfaces** (header, footer plate, training card, Open Graph) → the official
  artwork, `logo.png`, exactly as supplied.
- **Dark surfaces** (navy cards, green CTA bands) → `emblem.png` plus the wordmark
  rebuilt in live text (*PALM* white, *TREE* light green). The supplied wordmark
  cannot be placed on dark: navy-on-navy disappears, and keying out the white
  backing leaves a halo.

Both paths live in `components/logo.tsx`; the light-surface path is the default.

To swap in new artwork, export the lockup and emblem on transparent PNGs, overwrite
`logo.png` / `emblem.png`, and update `LOCKUP_RATIO` / `EMBLEM_RATIO` in
`components/logo.tsx` if the aspect ratios change.

