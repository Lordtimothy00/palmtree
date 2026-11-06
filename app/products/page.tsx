import type { Metadata } from "next";
import { Suspense } from "react";
import { ArrowRight, MessageCircle, PackageCheck, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ProductsCatalogue } from "@/components/products-catalogue";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { products } from "@/lib/data";
import { site, whatsappLink, whatsappMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solar Panels, Inverters, Batteries & CCTV Products",
  description:
    "Browse solar panels, solar inverters, lithium and deep-cycle batteries, solar lighting, solar fans, solar refrigerators, CCTV cameras and solar security cameras. Enquire on WhatsApp for availability and pricing.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Solar Products Catalogue — Palmtree Technology Services",
    description:
      "Solar panels, inverters, batteries, solar appliances and security technology supplied across Nigeria.",
    url: "/products",
  },
};

const assurances = [
  {
    icon: PackageCheck,
    title: "Enquiry-based catalogue",
    body: "Every product is supplied on enquiry so we can confirm availability and advise on compatibility first.",
  },
  {
    icon: ShieldCheck,
    title: "Equipment that matches",
    body: "We help you choose components that work together — not just the cheapest item on the shelf.",
  },
];

export default function ProductsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Solar products catalogue",
    url: `${site.url}/products`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: `${site.url}/products?product=${p.slug}`,
      })),
    },
  };

  return (
    <>
      <PageHero
        breadcrumb="Products"
        eyebrow="Product catalogue"
        title="Solar energy, power storage, appliances and security technology."
        intro="Panels, inverters, batteries and the appliances and cameras that complete a system. Filter by category, search the catalogue, and enquire on WhatsApp with the product name already filled in."
        image="/images/products/solar-panels.jpg"
        imageAlt="Solar panels supplied by Palmtree Technology Services"
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink
            href={whatsappLink(whatsappMessages.products)}
            variant="whatsapp"
            size="md"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Enquire about a product
          </ButtonLink>
          <ButtonLink href="/contact#quote" variant="outlineLight" size="md">
            Request a quote
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </PageHero>

      <section className="bg-white py-12 md:py-16">
        <div className="container-page">
          <Suspense
            fallback={
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-80 animate-pulse rounded-3xl border border-line bg-mist"
                  />
                ))}
              </div>
            }
          >
            <ProductsCatalogue />
          </Suspense>
        </div>
      </section>

      <section className="bg-mist py-16 md:py-20">
        <div className="container-page grid gap-4 sm:grid-cols-2">
          {assurances.map((a) => (
            <div key={a.title} className="rounded-2xl border border-line bg-white p-7">
              <span className="flex size-11 items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                <a.icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-display text-[16px] font-semibold text-navy-700">
                {a.title}
              </h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-navy-700/65">
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Not sure which product you need?"
        body="Tell us what you want to power and we will recommend the right equipment — no guesswork, no overselling."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
