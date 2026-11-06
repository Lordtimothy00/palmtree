import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";

const featuredSlugs = [
  "solar-panels",
  "solar-inverters",
  "lithium-batteries",
  "deep-cycle-batteries",
  "solar-lighting",
  "solar-fans",
  "solar-refrigerators",
  "cctv-cameras",
  "solar-security-cameras",
];

export function FeaturedProducts() {
  const featured = featuredSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is (typeof products)[number] => Boolean(p));

  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Featured products"
            title="Quality equipment for real power needs."
            intro="Solar panels, inverters, storage, solar appliances and security technology. Every product is available on enquiry — tell us what you need and we will advise on the right fit."
            className="max-w-2xl"
          />
          <Link
            href="/products"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-forest-700 px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-forest-600"
          >
            Browse the catalogue
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product, i) => (
            <Reveal key={product.slug} delay={(i % 3) * 60}>
              <ProductCard product={product} className="h-full" />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 rounded-2xl border border-dashed border-line bg-mist/60 px-5 py-4 text-center text-[12.5px] leading-relaxed text-navy-700/55">
          This is an enquiry catalogue, not an online store. Availability and pricing
          are confirmed by our team when you enquire.
        </p>
      </div>
    </section>
  );
}
