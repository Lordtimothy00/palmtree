import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section";
import { products } from "@/lib/content";
import { productEnquiryMessage, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solar Products",
  description:
    "Solar panels, inverters, lithium and deep-cycle batteries, solar fans, refrigerators, freezers and CCTV cameras — what each is for, explained by Palmtree.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: `Solar Products | ${site.name}`,
    description:
      "Panels, inverters, batteries, appliances and CCTV — what each product is for and how to choose between them.",
    url: "/products",
  },
};

/** Group the catalogue so the index reads as types of product, not a list. */
const groupOrder = ["Solar", "Power", "Storage", "Appliances", "Security"] as const;

const groupIntros: Record<string, string> = {
  Solar: "Where the power is generated.",
  Power: "Where it is converted into something your building can use.",
  Storage: "Where it is held until you need it.",
  Appliances: "What runs on it — the loads worth designing a system around.",
  Security: "Cameras supplied and installed, on their own or alongside solar.",
};

export default function ProductsPage() {
  const groups = groupOrder
    .map((category) => ({
      category,
      intro: groupIntros[category],
      items: products.filter((p) => p.category === category),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <section className="border-b border-line bg-mist">
        <div className="container-page py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="text-[12.5px] text-navy-700/60">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="transition hover:text-forest-700">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-navy-700">
                Products
              </li>
            </ol>
          </nav>

          <div className="mt-6 max-w-3xl">
            <Eyebrow>Products</Eyebrow>
            <h1 className="mt-4 text-balance text-[clamp(2rem,4.6vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-navy-700">
              The equipment we supply, explained
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-navy-700/70 md:text-base">
              A solar system is a set of parts that have to match each other.
              These pages explain what each type is for and who it suits, so you
              can ask better questions before you buy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={whatsappLink(
                  "Hello Palmtree Technology Services. I would like help choosing the right solar products for my system.",
                )}
                variant="whatsapp"
                size="md"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Ask which suits you
              </ButtonLink>
              <ButtonLink href="/#contact" variant="outline" size="md">
                Request a Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {groups.map((group, gi) => (
        <section
          key={group.category}
          className={gi % 2 === 1 ? "bg-mist py-14 md:py-20" : "bg-white py-14 md:py-20"}
          aria-labelledby={`group-${group.category}`}
        >
          <div className="container-page">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h2
                  id={`group-${group.category}`}
                  className="font-display text-[clamp(1.35rem,2.6vw,1.8rem)] font-semibold text-navy-700"
                >
                  {group.category}
                </h2>
                <p className="mt-1 text-[13.5px] text-navy-700/60">{group.intro}</p>
              </div>
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-navy-700/40">
                {group.items.length} {group.items.length === 1 ? "product" : "products"}
              </span>
            </div>

            <ul className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((product, i) => (
                <li key={product.slug}>
                  <Reveal delay={(i % 3) * 50}>
                    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-700/8 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                      <Link
                        href={`/products/${product.slug}`}
                        className="zoom-media relative block aspect-[4/3] overflow-hidden bg-mist"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <Image
                          src={product.image}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                          className="object-cover"
                        />
                      </Link>

                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="font-display text-[15.5px] font-semibold text-navy-700">
                          <Link
                            href={`/products/${product.slug}`}
                            className="transition hover:text-forest-700"
                          >
                            {product.name}
                          </Link>
                        </h3>
                        <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-navy-700/65">
                          {product.summary}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                          <Link
                            href={`/products/${product.slug}`}
                            className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-forest-700 transition hover:text-forest-600"
                          >
                            Read more
                            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                          </Link>
                          <a
                            href={whatsappLink(
                              productEnquiryMessage(product.name, product.category),
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-navy-700/55 transition hover:text-forest-700"
                          >
                            Enquire
                            <ArrowUpRight className="size-3.5" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="border-t border-line bg-white py-12">
        <div className="container-page">
          <p className="text-center text-[13px] leading-relaxed text-navy-700/55">
            Availability and pricing are confirmed on enquiry — we do not list
            prices that may be out of date. Everything here can be supplied on
            its own, or installed for you.
          </p>
        </div>
      </section>
    </>
  );
}
