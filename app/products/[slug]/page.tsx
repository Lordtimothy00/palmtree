import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { getProduct, getService, productSlugs, products } from "@/lib/content";
import {
  fullAddress,
  productEnquiryMessage,
  site,
  whatsappLink,
} from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };

  const description = `${product.summary} Supplied and installed by Palmtree Technology Services, Ibadan — serving all of Nigeria.`;

  return {
    title: product.name,
    description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} | ${site.name}`,
      description,
      url: `/products/${product.slug}`,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const service = getService(product.installService);
  const siblings = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  );
  const others = products.filter((p) => p.slug !== product.slug).slice(0, 4);
  const related = siblings.length ? siblings : others;

  const enquiryHref = whatsappLink(
    productEnquiryMessage(product.name, product.category),
  );

  // Product schema. Deliberately no price or availability claims — both are
  // confirmed on enquiry, and a stale price in structured data is worse than
  // none at all.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    category: product.category,
    brand: { "@type": "Brand", name: site.name },
    image: `${site.url.replace(/\/$/, "")}${product.image}`,
    url: `${site.url.replace(/\/$/, "")}/products/${product.slug}`,
    // No `offers` block. Claiming InStock would assert every item is in stock
    // right now, which is not a fact we hold — the site asks visitors to
    // confirm availability on enquiry — and an Offer without a price is
    // invalid for product rich results anyway.
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative isolate overflow-hidden bg-navy-700">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900/95 via-navy-900/85 to-navy-900/45"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-900/80 via-transparent to-navy-900/20"
          aria-hidden="true"
        />

        <div className="container-page py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="text-[12.5px] text-white/65">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition hover:text-white">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/products" className="transition hover:text-white">Products</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-white">{product.name}</li>
            </ol>
          </nav>

          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-solar-300">
              {product.category}
            </span>
            <h1 className="mt-4 text-balance text-[clamp(2rem,4.6vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
              {product.name}
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/80 md:text-[17px]">
              {product.summary}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href={enquiryHref} variant="whatsapp" size="lg">
                <MessageCircle className="size-4" aria-hidden="true" />
                Enquire on WhatsApp
              </ButtonLink>
              <ButtonLink href={`tel:${site.phoneTel}`} variant="outline" size="lg">
                <Phone className="size-4" aria-hidden="true" />
                Call {site.phoneDisplay}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-16">
          <div>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight text-navy-700">
              What it is and what it does
            </h2>
            <div className="mt-5 space-y-4">
              {product.detail.map((para) => (
                <p key={para.slice(0, 24)} className="text-[14.5px] leading-relaxed text-navy-700/75">
                  {para}
                </p>
              ))}
            </div>

            {product.variants && product.variants.length > 0 && (
              <>
                <h2
                  id="types"
                  className="mt-12 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight text-navy-700"
                >
                  Types of {product.name.toLowerCase()}
                </h2>
                {product.variantsIntro && (
                  <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-navy-700/70">
                    {product.variantsIntro}
                  </p>
                )}

                <dl className="mt-7 space-y-3">
                  {product.variants.map((variant, i) => (
                    <div
                      key={variant.label}
                      className="rounded-2xl border border-navy-700/8 bg-white p-5 shadow-soft transition-colors hover:border-forest-700/25"
                    >
                      <dt className="flex items-start gap-3">
                        <span
                          className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-forest-50 text-[11.5px] font-bold text-forest-700"
                          aria-hidden="true"
                        >
                          {i + 1}
                        </span>
                        <span className="font-display text-[15px] font-semibold text-navy-700">
                          {variant.label}
                        </span>
                      </dt>
                      <dd className="mt-2 space-y-2 pl-9">
                        <p className="text-[13.5px] leading-relaxed text-navy-700/75">
                          {variant.summary}
                        </p>
                        <p className="text-[13px] leading-relaxed text-navy-700/60">
                          <span className="font-semibold text-forest-700">
                            Best for:
                          </span>{" "}
                          {variant.suits}
                        </p>
                      </dd>
                    </div>
                  ))}
                </dl>

                {product.aside && (
                  <div className="mt-6 rounded-2xl border-l-[3px] border-solar-400 bg-solar-50/60 p-5">
                    <h3 className="font-display text-[14px] font-semibold text-navy-700">
                      {product.aside.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-navy-700/70">
                      {product.aside.body}
                    </p>
                  </div>
                )}
              </>
            )}

            <h2 className="mt-12 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight text-navy-700">
              It is the right choice when
            </h2>
            <ul className="mt-6 space-y-3">
              {product.chooseBecause.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-[14.5px] text-navy-700/75">
                  <Check className="mt-0.5 size-4 shrink-0 text-forest-600" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            {service && (
              <div className="mt-12 rounded-2xl border border-forest-700/15 bg-forest-50 p-6">
                <h2 className="font-display text-[15.5px] font-semibold text-navy-700">
                  We install this too
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed text-navy-700/70">
                  Buying {product.name.toLowerCase()} is usually part of a bigger
                  job. Our {service.title.toLowerCase()} service covers the
                  installation, so you are not left to find someone to wire it in.
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-forest-700 transition hover:text-forest-600"
                >
                  Read about {service.title.toLowerCase()}
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-navy-700/8 bg-mist p-6 shadow-soft">
              <h2 className="font-display text-[15px] font-semibold text-navy-700">
                Ask about {product.name.toLowerCase()}
              </h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-navy-700/65">
                We confirm current availability and price directly — nothing on
                this site is a stale price list.
              </p>

              <div className="mt-5 flex flex-col gap-2.5">
                <ButtonLink href={enquiryHref} variant="whatsapp" size="md" className="w-full">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WhatsApp
                </ButtonLink>
                <ButtonLink href={`tel:${site.phoneTel}`} variant="secondary" size="md" className="w-full">
                  <Phone className="size-4" aria-hidden="true" />
                  {site.phoneDisplay}
                </ButtonLink>
                <ButtonLink href="/#contact" variant="outline" size="md" className="w-full">
                  Send an enquiry
                  <ArrowRight className="size-4" aria-hidden="true" />
                </ButtonLink>
              </div>

              <dl className="mt-6 space-y-3 border-t border-navy-700/10 pt-5 text-[13px]">
                <div>
                  <dt className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-navy-700/50">
                    Showroom
                  </dt>
                  <dd className="mt-1 text-navy-700/70">{fullAddress}</dd>
                </div>
                <div>
                  <dt className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-navy-700/50">
                    Supply
                  </dt>
                  <dd className="mt-1 text-navy-700/70">Nationwide — all states in Nigeria</dd>
                </div>
                <div>
                  <dt className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-navy-700/50">
                    Opening hours
                  </dt>
                  <dd className="mt-1 space-y-0.5 text-navy-700/70">
                    {site.hours.map((h) => (
                      <span key={h.day} className="block">
                        {h.day}: {h.time}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-line bg-mist py-16 md:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[clamp(1.4rem,2.8vw,1.9rem)] font-semibold text-navy-700">
              {siblings.length ? `More ${product.category.toLowerCase()}` : "Other products"}
            </h2>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-forest-700 transition hover:text-forest-600"
            >
              <ArrowLeft className="size-3.5" aria-hidden="true" />
              All products
            </Link>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/products/${other.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-navy-700/8 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest-700/25 hover:shadow-soft"
                >
                  <span className="font-display text-[14.5px] font-semibold text-navy-700 transition group-hover:text-forest-700">
                    {other.name}
                  </span>
                  <span className="mt-1.5 line-clamp-3 text-[12.5px] leading-relaxed text-navy-700/60">
                    {other.summary}
                  </span>
                  <span className="mt-auto pt-3 text-[12.5px] font-semibold text-forest-700">
                    Read more
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
