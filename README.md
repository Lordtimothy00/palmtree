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

This is a **single-page site**. Everything lives on `/` and the header links
scroll to sections.

| Section | Anchor | Contents |
| ------- | ------ | -------- |
| Hero | `#home` | Headline, description, Get a Quote / Chat on WhatsApp |
| Services | `#services` | Six service cards with photography and WhatsApp enquiry |
| Products | `#products` | Eight product cards, each with a WhatsApp enquiry naming the product |
| About | `#about` | Company description, shop photograph, what we do |
| Contact | `#contact` | Phone, email, address, service area, hours, enquiry form, map |
| Footer | — | Logo, phone, email, Facebook, copyright |

Navigation highlights the section in view and smooth-scrolls to it.
`robots.txt` and `sitemap.xml` are generated from `app/robots.ts` and
`app/sitemap.ts`, and list the single canonical URL.

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

## Business information

All contact details, links and pre-filled WhatsApp messages are centralised in
**`lib/site.ts`**. Change the phone number, address or email there once and it
updates across the whole site, including the structured data.

Content (services, products, projects, programmes) lives in **`lib/data.ts`**.

## Enquiry delivery

Forms post to `POST /api/enquiry`, which validates with Zod, applies a honeypot,
rate-limits per IP and then delivers the enquiry. **A success message is only shown
when a delivery channel actually accepted the message** — otherwise the visitor is
offered WhatsApp and a phone number instead.

Configure delivery with environment variables (see `.env.example`):

| Variable | Required | Purpose |
| -------- | -------- | ------- |
| `RESEND_API_KEY` | Recommended | Sends the enquiry by email via Resend |
| `ENQUIRY_TO_EMAIL` | No | Recipient inbox (defaults to `palmtreeng@gmail.com`) |
| `ENQUIRY_FROM_EMAIL` | No | Verified sender, e.g. `Palmtree Website <enquiries@yourdomain.com>` |
| `ENQUIRY_WEBHOOK_URL` | Alternative | JSON POST to a form service / CRM (Formspree, Make, n8n…) |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical origin used for metadata, sitemap and Open Graph |

Delivery order: **Resend → webhook → local JSONL log** (`data/enquiries.jsonl`, git-ignored).
The local log exists so nothing is lost while credentials are being set up; it is not a
substitute for configuring email before launch.

## WhatsApp

Number `+2348051270913`. Deep links are generated by `whatsappLink()` in `lib/site.ts` with
pre-filled, context-aware messages — product cards include the product name, service
sections include the service name, and training cards include the programme.

## Accessibility & performance

- Skip link, semantic landmarks, visible focus rings everywhere.
- Mobile menu with `aria-expanded`, Escape to close and scroll lock.
- Lightbox is a labelled modal: Escape closes, arrow keys navigate, focus is restored.
- Product modal supports Escape and backdrop dismissal; deep links (`?product=`) are shareable.
- Every animation respects `prefers-reduced-motion`.
- Images are served by `next/image` with responsive `sizes`; fonts are self-hosted.

## Photography note

Almost every photograph on the site is the company's own, supplied directly:

- **Installations** — technicians mounting panels on a rooftop array, and the
  full team working on a residential roof (`hero-installation.jpg`,
  `service-solar-installation.jpg`).
- **Equipment** — inverters, battery banks, tubular batteries, solar home
  systems, fans, refrigerators and freezers, all photographed in the business'
  own showroom.
- **Training** — Palmtree Solar Master cohorts, including one gathered outside
  the shop under the company signboard.
- **The shop** — the Academy–Monatan Road premises and its signboard.

**One exception:** `service-cctv.jpg` and `product-cctv-cameras.jpg` are
AI-generated product shots of a dome security camera. No photograph of the
company's own CCTV installations was supplied, and while the shop signboard
does list CCTV, using a crowd photo for that card would have been misleading.
Replace these two files with real camera installation photos when available —
they are the only non-company images on the site.

## Project structure

```
app/
  layout.tsx            Root layout, metadata, JSON-LD, header/footer
  page.tsx              Home
  about|services|products|projects|training|contact/page.tsx
  api/enquiry/route.ts  Enquiry endpoint
  robots.ts sitemap.ts not-found.tsx
components/
  site-header.tsx site-footer.tsx whatsapp-float.tsx logo.tsx
  product-card.tsx project-gallery.tsx lightbox.tsx page-hero.tsx cta-band.tsx
  forms/                quote, contact, training forms + field primitives
  home/                 home page sections
  ui/                   button, section heading primitives
lib/
  site.ts               Business config + WhatsApp helpers
  data.ts               Services, products, projects, programmes
  validation.ts         Zod schemas
  mailer.ts             Delivery (Resend → webhook → log)
```
