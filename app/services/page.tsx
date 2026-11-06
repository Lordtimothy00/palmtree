import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { ServiceIcon } from "@/components/service-icon";
import { services } from "@/lib/data";
import {
  site,
  whatsappLink,
  serviceEnquiryMessage,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Solar Installation Services, Inverters, Batteries & CCTV",
  description:
    "Solar system installation, solar inverter installation, battery supply, solar equipment, CCTV and security, solar maintenance and solar technology training — across Nigeria from Ibadan, Oyo State.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Solar & Technology Services — Palmtree Technology Services",
    description:
      "Solar installation, inverters, batteries, equipment supply, CCTV, maintenance and training across Nigeria.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="Our services"
        title="Solar systems installed properly — and supported afterwards."
        intro="Eight focused services covering design, installation, supply, security technology, maintenance and training. Each one is delivered by our own technical team."
        image="/images/gallery/panel-mounting.jpg"
        imageAlt="Palmtree technician installing solar panels"
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact#quote" size="md">
            Get a free quote
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href={whatsappLink(serviceEnquiryMessage("solar installation"))}
            variant="outlineLight"
            size="md"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Ask on WhatsApp
          </ButtonLink>
        </div>
      </PageHero>

      {/* Quick index */}
      <div className="border-b border-line bg-white">
        <div className="container-page no-scrollbar flex gap-2 overflow-x-auto py-4">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="shrink-0 rounded-full border border-line bg-white px-3.5 py-2 text-[12px] font-medium text-navy-700/65 transition hover:border-forest-700/30 hover:text-forest-700"
            >
              {service.title}
            </a>
          ))}
        </div>
      </div>

      <div className="bg-white">
        {services.map((service, index) => {
          const reversed = index % 2 === 1;
          return (
            <section
              key={service.slug}
              id={service.slug}
              className={`scroll-mt-28 border-b border-line/70 py-16 md:py-24 ${
                index % 2 === 1 ? "bg-mist/60" : "bg-white"
              }`}
            >
              <div className="container-page">
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <Reveal className="relative">
                    <div className="relative aspect-[4/3.2] overflow-hidden rounded-[1.75rem] bg-mist shadow-soft">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 48vw"
                        className="object-cover"
                        loading={index < 2 ? "eager" : "lazy"}
                      />
                    </div>
                    <span className="absolute -bottom-4 left-5 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-forest-700 shadow-soft">
                      <ServiceIcon name={service.icon} className="size-4" />
                      {String(index + 1).padStart(2, "0")} / {services.length}
                    </span>
                  </Reveal>

                  <Reveal delay={70}>
                    <h2 className="text-[clamp(1.5rem,3vw,2.15rem)] font-semibold leading-tight text-navy-700">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-[14.5px] font-medium leading-relaxed text-forest-700">
                      {service.summary}
                    </p>
                    <div className="mt-4 space-y-3 text-[14px] leading-relaxed text-navy-700/70">
                      {service.paragraphs.map((p) => (
                        <p key={p.slice(0, 32)}>{p}</p>
                      ))}
                    </div>

                    <div className="mt-6 rounded-2xl border border-line bg-white p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-700/65">
                        What you get
                      </p>
                      <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-2 text-[12.5px] leading-snug text-navy-700/75"
                          >
                            <Check
                              className="mt-0.5 size-3.5 shrink-0 text-forest-600"
                              strokeWidth={2.6}
                              aria-hidden="true"
                            />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <ButtonLink
                        href={whatsappLink(serviceEnquiryMessage(service.title))}
                        variant="whatsapp"
                        size="md"
                      >
                        <MessageCircle className="size-4" aria-hidden="true" />
                        Enquire on WhatsApp
                      </ButtonLink>
                      <ButtonLink
                        href={`/contact?service=${encodeURIComponent(service.title)}#quote`}
                        variant="ghost"
                        size="md"
                      >
                        Request a quote
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </ButtonLink>
                      {service.slug === "solar-technology-training" && (
                        <Link
                          href="/training"
                          className="text-[12.5px] font-semibold text-forest-700 underline decoration-solar-400 decoration-2 underline-offset-4"
                        >
                          See programmes
                        </Link>
                      )}
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* How it works */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we work"
            title="From first message to handover."
            intro="A straightforward process, so you know what happens at each stage."
            align="center"
          />
          <ol className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Enquiry",
                body: "Call, WhatsApp or send the quote form. Tell us the property and what you want to power.",
              },
              {
                step: "02",
                title: "Assessment",
                body: "We review your load and requirements, and recommend the system and equipment that fits.",
              },
              {
                step: "03",
                title: "Installation",
                body: "Our team mounts, wires, configures and tests the system on site.",
              },
              {
                step: "04",
                title: "Handover & support",
                body: "We walk you through operation and stay reachable for maintenance and support.",
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 60} as="li">
                <div className="relative h-full rounded-2xl border border-line bg-mist/50 p-6">
                  <span className="font-display text-[13px] font-bold tracking-[0.1em] text-solar-500">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-display text-[15.5px] font-semibold text-navy-700">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-navy-700/60">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl bg-mist p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-[13.5px] text-navy-700/70">
              Prefer to speak to someone? Our team is available{" "}
              <span className="font-semibold text-navy-700">Mon–Fri, 8am–6pm</span>.
            </p>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full bg-forest-700 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-forest-600"
            >
              <Phone className="size-4" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
