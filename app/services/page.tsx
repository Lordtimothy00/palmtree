import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section";
import { services } from "@/lib/content";
import { serviceEnquiryMessage, site, whatsappLink } from "@/lib/site";

const title = "Our Services";

export const metadata: Metadata = {
  title,
  description:
    "Solar installation, sales of solar products, CCTV, electric fence wire and practical training — what each Palmtree service involves and how to book it.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: `${title} | ${site.name}`,
    description:
      "Solar installation, sales of solar products, CCTV, electric fence wire and training — explained service by service.",
    url: "/services",
  },
};

export default function ServicesPage() {
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
                Services
              </li>
            </ol>
          </nav>

          <div className="mt-6 max-w-3xl">
            <Eyebrow>What we do</Eyebrow>
            <h1 className="mt-4 text-balance text-[clamp(2rem,4.6vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-navy-700">
              Five services, explained in full
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-navy-700/70 md:text-base">
              Each one has its own page covering what the work involves, what it
              includes and how to get started. If you are not sure which one you
              need, message us and we will point you the right way.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={whatsappLink(serviceEnquiryMessage("services"))} variant="whatsapp" size="md">
                <MessageCircle className="size-4" aria-hidden="true" />
                Ask on WhatsApp
              </ButtonLink>
              <ButtonLink href="/#contact" variant="outline" size="md">
                Request a Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-page">
          <ul className="grid gap-6 md:gap-8">
            {services.map((service, i) => (
              <li key={service.slug}>
                <Reveal delay={i * 50}>
                  <article className="group grid overflow-hidden rounded-3xl border border-navy-700/8 bg-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift md:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
                    <Link
                      href={`/services/${service.slug}`}
                      className="zoom-media relative block aspect-[4/3] overflow-hidden bg-navy-700 md:aspect-auto md:h-full"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <Image
                        src={service.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 92vw, 340px"
                        className="object-cover"
                      />
                    </Link>

                    <div className="flex flex-col p-6 md:p-8">
                      <h2 className="font-display text-[19px] font-semibold text-navy-700">
                        <Link
                          href={`/services/${service.slug}`}
                          className="transition hover:text-forest-700"
                        >
                          {service.title}
                        </Link>
                      </h2>
                      <p className="mt-2.5 text-[14px] leading-relaxed text-navy-700/70">
                        {service.summary}
                      </p>

                      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-forest-700 transition hover:text-forest-600"
                        >
                          Read about {service.title.toLowerCase()}
                          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                        </Link>
                        <a
                          href={whatsappLink(serviceEnquiryMessage(service.title))}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-navy-700/60 transition hover:text-forest-700"
                        >
                          Enquire on WhatsApp
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
    </>
  );
}
