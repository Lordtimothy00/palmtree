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

The home page carries the whole pitch on one screen-scroll, and each service
has its own page underneath it.

| Page | URL | Contents |
| ---- | --- | -------- |
| Home | `/` | Hero, services, products, about, contact |
| Services index | `/services` | The five services, each summary linking to its page |
| Service detail | `/services/<slug>` | What the work involves, what it covers, enquiry |
| Products index | `/products` | All products, grouped by type |
| Product detail | `/products/<slug>` | What it is, its types, who it suits, install link, enquiry |

Service and product pages are pre-rendered at build time from `lib/content.ts`
via `generateStaticParams`, so adding one means adding a single object to the
`services` or `products` array — the index, detail page, sitemap, footer and
header all pick it up.

A product **or service** page can carry a `variants` array, which renders as a numbered
"Types of …" section — used on `/products/inverters` (five kinds) and
`/products/batteries` (tubular, sealed lead-acid, lithium) and
`/products/charge-controllers` (PWM, MPPT) and `/products/cctv-cameras` (dome,
bullet, PTZ, analog, IP) and `/products/solar-panels` (monocrystalline,
polycrystalline, thin film, roof-mounted, ground-mounted) and
`/products/solar-fans` (standing, ceiling, table/rechargeable, wall-mounted,
exhaust). On the service side, `/services/electric-fence-wire` uses the same
mechanism for energiser and mounting types. Variants can each
carry their own photo. Battery types deliberately are **not** separate product
cards or pages; they are types within one page, and the old
`/products/lithium-batteries` and `/products/deep-cycle-batteries` URLs
permanent-redirect to `/products/batteries`.

There are no prices, stock figures or specifications on any product page. The
product structured data deliberately omits an `offers` block: claiming
`InStock` would assert every item is available right now, and a price-less
`Offer` is invalid for rich results anyway.

| Home section | Anchor | Contents |
| ------------ | ------ | -------- |
| Hero | `#home` | Headline, description, Get a Quote / Chat on WhatsApp |
| Services | — | Five service cards, each linking to its own page |
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

Content — the service list, product list and every image caption — lives in
**`lib/content.ts`**. The enquiry form's "What do you need?" options in
`components/forms/enquiry-form.tsx` mirror the service list, so update both together.

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

The JSONL log is a **development-only** convenience. In production it is disabled, because
serverless hosts such as Vercel have a read-only filesystem and discard `/tmp` between
invocations — writing there and returning success would tell the visitor their message
arrived while the enquiry quietly vanished. With no channel configured, a production
deployment fails closed: the API returns `502` and the form points the visitor to WhatsApp
and the phone number. **Set `RESEND_API_KEY` (or `ENQUIRY_WEBHOOK_URL`) before launch** so
enquiries reach `palmtreeng@gmail.com`.

## Deployment

Hosted on Vercel as the project `palmtree`, building from the `main` branch.

1. Import `Lordtimothy00/palmtree` at [vercel.com/new](https://vercel.com/new) (the GitHub
   integration must be installed on the Vercel account first).
2. Framework preset **Next.js**, no build or output overrides needed.
3. Add `NEXT_PUBLIC_SITE_URL` pointing at the live domain, plus `RESEND_API_KEY` and
   `ENQUIRY_FROM_EMAIL` for form delivery.
4. Point the domain at Vercel once DNS is ready.

`/` , `/robots.txt` and `/sitemap.xml` are static; `/api/enquiry` is the only server
function.

## WhatsApp

Number `+2348024346515`. Deep links are generated by `whatsappLink()` in `lib/site.ts` with
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
- **Electric fence** — a fence run on ceramic insulators above a perimeter
  wall, with a DANGER ELECTRIC FENCE sign (`service-electric-fence-wire.jpg`).
- **The shop** — the Academy–Monatan Road premises and its signboard.

**Two exceptions, both generated:** `service-cctv.jpg` and
`product-cctv-cameras.jpg` are AI-generated studio shots of a dome security
camera. No photograph of the company's own CCTV installations was supplied, and
an unrelated photo would have misrepresented the work.

They are presentation images, not photographs of Palmtree's own jobs, and are
deliberately styled as neutral studio product shots rather than site
photographs so nobody mistakes them for a completed installation. Replace them
with real photos when available and point the service's `image` at the new file
in `lib/content.ts`.

## Project structure

```
app/
  layout.tsx            Root layout, metadata, JSON-LD, header/footer
  page.tsx              Home — all the home sections
  services/page.tsx     Services index
  services/[slug]/      One page per service, pre-rendered
  products/page.tsx     Products index, grouped by category
  products/[slug]/      One page per product, pre-rendered
  api/enquiry/route.ts  Enquiry endpoint
  robots.ts sitemap.ts not-found.tsx globals.css
components/
  site-header.tsx site-footer.tsx whatsapp-float.tsx logo.tsx reveal.tsx
  sections/             hero, services, products, about, contact
  forms/                enquiry-form + field primitives
  ui/                   button, section heading primitives
  icons/                social icons
lib/
  site.ts               Business config + WhatsApp helpers
  content.ts            Services, products and image captions
  validation.ts         Zod schemas
  mailer.ts             Resend / webhook / dev-log delivery
public/
  brand/                Logo, favicons, app icons
  images/company/       The company's own photographs
  images/og/            Social preview image
```
