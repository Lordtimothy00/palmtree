"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Search,
  X,
  MessageCircle,
  Check,
  ArrowRight,
  SlidersHorizontal,
  Tag,
} from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { ButtonLink } from "@/components/ui/button";
import { productCategories, products, type Product } from "@/lib/data";
import { site, whatsappLink, productEnquiryMessage } from "@/lib/site";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, string> = {
  "Solar Energy": "01",
  "Inverters & Power Storage": "02",
  "Solar Appliances": "03",
  "Security Technology": "04",
};

export function ProductsCatalogue() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>(
    searchParams.get("category") ?? "All",
  );
  const [active, setActive] = useState<Product | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Deep link: /products?product=solar-panels opens the detail modal.
  useEffect(() => {
    const slug = searchParams.get("product");
    if (!slug) return;
    const match = products.find((p) => p.slug === slug);
    if (match) setActive(match);
  }, [searchParams]);

  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const close = () => {
    setActive(null);
    const params = new URLSearchParams(searchParams.toString());
    params.delete("product");
    const qs = params.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
  };

  const open = (product: Product) => {
    setActive(product);
    const params = new URLSearchParams(searchParams.toString());
    params.set("product", product.slug);
    router.replace(`${pathname}?${params}`, { scroll: false });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const inCategory = category === "All" || p.category === category;
      if (!inCategory) return false;
      if (!q) return true;
      const haystack = [p.name, p.category, p.tagline, p.description, ...p.keywords]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, category]);

  return (
    <div>
      {/* Controls */}
      <div className="sticky top-[72px] z-30 -mx-5 border-b border-line bg-white/92 px-5 py-4 backdrop-blur-xl md:mx-0 md:rounded-2xl md:border md:px-5 md:shadow-soft">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-sm">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-navy-700/35"
              aria-hidden="true"
            />
            <label htmlFor="product-search" className="sr-only">
              Search products
            </label>
            <input
              id="product-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search panels, batteries, cameras…"
              className="h-11 w-full rounded-full border border-line bg-mist/60 pl-11 pr-10 text-[13.5px] text-navy-700 placeholder:text-navy-700/40 transition focus:border-forest-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-forest-700/10"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full text-navy-700/40 transition hover:bg-navy-700/5 hover:text-navy-700"
              >
                <X className="size-3.5" aria-hidden="true" />
              </button>
            )}
          </div>

          <div className="no-scrollbar -mx-1 flex items-center gap-2 overflow-x-auto px-1 lg:flex-wrap lg:justify-end">
            <span className="hidden items-center gap-1.5 pr-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy-700/35 lg:flex">
              <SlidersHorizontal className="size-3.5" aria-hidden="true" />
              Filter
            </span>
            {["All", ...productCategories].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={cn(
                  "shrink-0 rounded-full border px-3.5 py-2 text-[12px] font-semibold transition-all duration-300",
                  category === c
                    ? "border-forest-700 bg-forest-700 text-white"
                    : "border-line bg-white text-navy-700/60 hover:border-forest-700/30 hover:text-forest-700",
                )}
              >
                {c === "All" ? "All products" : c}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-3 text-[11.5px] text-navy-700/45" aria-live="polite">
          Showing {filtered.length} of {products.length} products
          {category !== "All" && ` in ${category}`}
          {query && ` matching “${query}”`}
        </p>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} onOpen={open} />
          ))}
        </div>
      ) : (
        <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-line bg-mist/50 px-6 py-14 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-white text-navy-700/40 shadow-soft">
            <Search className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-display text-[16px] font-semibold text-navy-700">
              No products match that search
            </p>
            <p className="mt-1 text-[13px] text-navy-700/55">
              Try a different term, or ask us directly — we may still be able to
              source what you need.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="rounded-full border border-line bg-white px-4 py-2.5 text-[12.5px] font-semibold text-navy-700/70 transition hover:border-forest-700/30 hover:text-forest-700"
            >
              Clear filters
            </button>
            <ButtonLink
              href={whatsappLink(
                "Hello Palmtree Technology Services. I am looking for a solar product that I could not find on your website. Please advise.",
              )}
              variant="whatsapp"
              size="sm"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Ask on WhatsApp
            </ButtonLink>
          </div>
        </div>
      )}

      {/* Category summary when browsing all */}
      {category === "All" && !query && (
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((c) => {
            const count = products.filter((p) => p.category === c).length;
            return (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setCategory(c);
                  window.scrollTo({ top: 260, behavior: "smooth" });
                }}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-line bg-white p-5 text-left transition hover:border-forest-700/25 hover:shadow-soft"
              >
                <span>
                  <span className="block font-display text-[11px] font-bold tracking-[0.1em] text-solar-500">
                    {categoryIcons[c]}
                  </span>
                  <span className="mt-1 block text-[13.5px] font-semibold text-navy-700">
                    {c}
                  </span>
                  <span className="mt-0.5 block text-[11.5px] text-navy-700/45">
                    {count} products
                  </span>
                </span>
                <ArrowRight className="size-4 shrink-0 text-navy-700/20 transition group-hover:translate-x-0.5 group-hover:text-forest-700" aria-hidden="true" />
              </button>
            );
          })}
        </div>
      )}

      {/* Detail modal */}
      {active && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-navy-900/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-dialog-title"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            ref={dialogRef}
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-[1.75rem] bg-white shadow-lift sm:rounded-[1.75rem]"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close product details"
              className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center rounded-full bg-white/90 text-navy-700/70 shadow-soft backdrop-blur transition hover:bg-white hover:text-navy-700"
            >
              <X className="size-5" aria-hidden="true" />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[4/3] bg-mist md:aspect-auto md:min-h-[420px]">
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-forest-700 backdrop-blur">
                  {active.category}
                </span>
              </div>

              <div className="p-6 md:p-8">
                <h2
                  id="product-dialog-title"
                  className="pr-8 font-display text-[22px] font-semibold leading-tight text-navy-700 md:text-[26px]"
                >
                  {active.name}
                </h2>
                <p className="mt-1.5 text-[13px] font-medium text-forest-700">
                  {active.tagline}
                </p>
                <p className="mt-4 text-[13.5px] leading-relaxed text-navy-700/70">
                  {active.detail}
                </p>

                <div className="mt-5">
                  <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy-700/40">
                    <Tag className="size-3.5" aria-hidden="true" />
                    Key points
                  </p>
                  <ul className="mt-2.5 space-y-2">
                    {active.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-[12.5px] leading-snug text-navy-700/75">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-forest-600" strokeWidth={2.6} aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 rounded-xl bg-mist/80 p-3.5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-navy-700/40">
                    Suited to
                  </p>
                  <p className="mt-1 text-[12.5px] text-navy-700/70">
                    {active.idealFor.join(" · ")}
                  </p>
                </div>

                <p className="mt-4 text-[11px] leading-relaxed text-navy-700/40">
                  Specifications, brands and pricing are confirmed with our team on
                  enquiry. We do not publish unverified product details.
                </p>

                <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                  <ButtonLink
                    href={whatsappLink(
                      productEnquiryMessage(active.name, active.category),
                    )}
                    variant="whatsapp"
                    size="md"
                    className="flex-1"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    Enquire on WhatsApp
                  </ButtonLink>
                  <ButtonLink
                    href={`/contact?product=${encodeURIComponent(active.name)}#quote`}
                    variant="ghost"
                    size="md"
                    className="flex-1"
                  >
                    Request a quote
                  </ButtonLink>
                </div>

                <a
                  href={`tel:${site.phoneTel}`}
                  className="mt-3 block text-center text-[12px] font-medium text-navy-700/45 transition hover:text-forest-700"
                >
                  or call {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
