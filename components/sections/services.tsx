import Image from "next/image";
import {
  ArrowUpRight,
  Cctv,
  Fence,
  GraduationCap,
  MessageCircle,
  Package,
  Sun,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section";
import { services, type Service } from "@/lib/content";
import { cn } from "@/lib/utils";
import { serviceEnquiryMessage, whatsappLink } from "@/lib/site";

const icons: Record<Service["icon"], typeof Sun> = {
  sun: Sun,
  packages: Package,
  cctv: Cctv,
  fence: Fence,
  graduation: GraduationCap,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-mist py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Solar, security and technical services"
            intro="Power, security and training — handled by the same team from first visit to handover."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:[grid-template-columns:repeat(6,minmax(0,1fr))]">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            const isLastOdd =
              i === services.length - 1 && services.length % 2 === 1;
            return (
              <Reveal
                key={service.slug}
                delay={i * 60}
                className={cn(
                  "lg:col-span-2",
                  // Five cards over a 6-track grid: centre the odd last one
                  // instead of leaving it stranded at the start of a new row.
                  isLastOdd &&
                    "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-md lg:col-start-3 lg:max-w-none",
                )}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-700/8 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="zoom-media relative aspect-[4/3] overflow-hidden bg-navy-700">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                      className="object-cover"
                    />
                    <span className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-xl bg-white/95 text-forest-700 shadow-sm backdrop-blur">
                      <Icon className="size-5" strokeWidth={1.9} aria-hidden="true" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-[17px] font-semibold text-navy-700">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-navy-700/70">
                      {service.description}
                    </p>
                    <a
                      href={whatsappLink(serviceEnquiryMessage(service.title))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-forest-700 transition hover:text-forest-600"
                    >
                      Enquire on WhatsApp
                      <ArrowUpRight
                        className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={80}>
          <p className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[13.5px] text-navy-700/65">
            Not sure what your property needs?
            <a
              href={whatsappLink(
                "Hello Palmtree Technology Services. I would like advice on the right solar system for my property.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-forest-700 underline-offset-4 hover:underline"
            >
              <MessageCircle className="size-3.5" aria-hidden="true" />
              Ask us on WhatsApp
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
