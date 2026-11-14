import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { getService, serviceSlugs, services } from "@/lib/content";
import { fullAddress, serviceEnquiryMessage, site, whatsappLink } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

/** Pre-render every service page at build time. */
export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };

  const description = `${service.summary} Palmtree Technology Services, Ibadan — serving all of Nigeria.`;

  return {
    title: service.title,
    description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description,
      url: `/services/${service.slug}`,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);
  const enquiryHref = whatsappLink(serviceEnquiryMessage(service.title));

  // Structured data so each service is legible to search engines as a
  // distinct offering rather than an anchor on the home page.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    serviceType: service.title,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phoneTel,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${site.address.line1}, ${site.address.line2}`,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        addressCountry: "NG",
      },
    },
    areaServed: service.nationwide
      ? { "@type": "Country", name: "Nigeria" }
      : { "@type": "City", name: site.address.city },
    url: `${site.url.replace(/\/$/, "")}/services/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-700">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900/95 via-navy-900/85 to-navy-900/45"
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-900/80 via-transparent to-navy-900/20" aria-hidden="true" />

        <div className="container-page py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="text-[12.5px] text-white/65">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition hover:text-white">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services" className="transition hover:text-white">Services</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-white">{service.title}</li>
            </ol>
          </nav>

          <div className="mt-6 max-w-3xl">
            <h1 className="text-balance text-[clamp(2rem,4.6vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/80 md:text-[17px]">
              {service.summary}
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

      {/* Body */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-16">
          <div>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight text-navy-700">
              What the work involves
            </h2>
            <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-navy-700/65">
              Every job is different, but this is the usual order things happen in.
            </p>

            <ol className="mt-8 space-y-6">
              {service.steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 50} as="li">
                  <div className="flex gap-4">
                    <span
                      className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-forest-700 font-display text-[13px] font-semibold text-white"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-[15.5px] font-semibold text-navy-700">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-navy-700/70">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>

            <h2 className="mt-14 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight text-navy-700">
              What this covers
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-navy-700/75">
                  <Check className="mt-0.5 size-4 shrink-0 text-forest-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-navy-700/8 bg-mist p-6 shadow-soft">
              <h2 className="font-display text-[15px] font-semibold text-navy-700">
                Talk to us about {service.title.toLowerCase()}
              </h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-navy-700/65">
                Send a message with what you have in mind and we will tell you what it takes.
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
                  <dt className="font-semibold uppercase tracking-[0.12em] text-[10.5px] text-navy-700/50">
                    Where we work
                  </dt>
                  <dd className="mt-1 text-navy-700/70">
                    {service.nationwide ? "Nationwide — all states in Nigeria" : fullAddress}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-[0.12em] text-[10.5px] text-navy-700/50">
                    Based in
                  </dt>
                  <dd className="mt-1 text-navy-700/70">{fullAddress}</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-[0.12em] text-[10.5px] text-navy-700/50">
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

      {/* Other services */}
      <section className="border-t border-line bg-mist py-16 md:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[clamp(1.4rem,2.8vw,1.9rem)] font-semibold text-navy-700">
              Other services
            </h2>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-forest-700 transition hover:text-forest-600"
            >
              <ArrowLeft className="size-3.5" aria-hidden="true" />
              All services
            </Link>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/services/${other.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-navy-700/8 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest-700/25 hover:shadow-soft"
                >
                  <span className="font-display text-[14.5px] font-semibold text-navy-700 transition group-hover:text-forest-700">
                    {other.title}
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
