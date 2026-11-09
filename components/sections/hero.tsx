import Image from "next/image";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { site, whatsappLink, whatsappMessages } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="relative isolate scroll-mt-28 overflow-hidden bg-navy-700">
      <Image
        src="/images/company/hero-installation.jpg"
        alt="Palmtree technicians installing solar panels on the roof of a Nigerian home"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[58%_42%]"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/35"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-900/85 via-transparent to-navy-900/25"
        aria-hidden="true"
      />

      <div className="container-page py-20 md:py-28 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-solar-300">
            <span className="size-1.5 rounded-full bg-solar-400" aria-hidden="true" />
            Ibadan · Serving all of Nigeria
          </span>

          <h1 className="mt-6 text-balance text-[clamp(2.15rem,5.4vw,3.9rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-white">
            Reliable Solar Energy.
            <span className="mt-1 block text-solar-400">
              Power Without Limits.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/80 md:text-[17px]">
            Quality solar installations, inverters, batteries and solar products.
            Delivering reliable power solutions across Nigeria.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="#contact" size="lg" className="min-w-40">
              Get a Quote
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                aria-hidden="true"
              />
            </ButtonLink>
            <ButtonLink
              href={whatsappLink(whatsappMessages.general)}
              variant="whatsapp"
              size="lg"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Chat on WhatsApp
            </ButtonLink>
          </div>

          <a
            href={`tel:${site.phoneTel}`}
            className="mt-7 inline-flex items-center gap-2 text-[13.5px] font-medium text-white/75 transition hover:text-solar-300"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
