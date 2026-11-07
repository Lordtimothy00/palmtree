import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { site, fullAddress } from "@/lib/site";

const titleDefault = `${site.name} | Solar Installation, Products & Training in Nigeria`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: titleDefault,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "solar installation in Nigeria",
    "solar panels in Nigeria",
    "solar inverter installation",
    "solar batteries",
    "solar energy solutions",
    "solar installation company in Ibadan",
    "solar technology training in Nigeria",
    "solar company Oyo State",
    "buy solar inverter Ibadan",
    "CCTV installation Ibadan",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: titleDefault,
    description: site.description,
    images: [
      {
        url: "/images/og/palmtree-og.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} — solar installation and training in Nigeria`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description: site.description,
    images: ["/images/og/palmtree-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Solar Energy",
  icons: {
    icon: [
      { url: "/brand/favicon.ico", sizes: "any" },
      { url: "/brand/favicon-64.png", type: "image/png", sizes: "64x64" },
    ],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#075B32",
  width: "device-width",
  initialScale: 1,
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Electrician"],
  name: site.name,
  alternateName: site.brandAlt,
  description: site.description,
  url: site.url,
  telephone: site.phoneTel,
  email: site.email,
  image: `${site.url}/images/og/palmtree-og.jpg`,
  logo: `${site.url}/brand/icon-512.png`,
  sameAs: [site.facebook],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    addressCountry: "NG",
  },
  areaServed: { "@type": "Country", name: "Nigeria" },
  knowsAbout: [
    "Solar installation",
    "Solar inverters",
    "Solar batteries",
    "CCTV installation",
    "Solar technology training",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "16:00",
    },
  ],
  slogan: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG">
      <body className="min-h-dvh bg-white antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest-700 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          // Business facts only — no invented ratings, awards or figures.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
        <span className="sr-only">{fullAddress}</span>
      </body>
    </html>
  );
}
