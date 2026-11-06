import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  PackageCheck,
  MapPinned,
  Sun,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { site, whatsappLink, whatsappMessages } from "@/lib/site";

const trust = [
  {
    icon: ShieldCheck,
    title: "Professional Solar Installation",
    body: "Systems sized, mounted and wired by a team that installs solar every week.",
  },
  {
    icon: PackageCheck,
    title: "Quality Solar Products",
    body: "Panels, inverters, batteries and appliances chosen to work together.",
  },
  {
    icon: MapPinned,
    title: "Nationwide Service",
    body: "Installations and equipment supply across all states in Nigeria.",
  },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-700">
      {/* Background photograph */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-installation.jpg"
          alt="Palmtree technicians installing solar panels on the roof of a Nigerian home"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-transparent to-navy-900/40" />
      </div>

      <div className="container-page relative pb-14 pt-16 md:pb-20 md:pt-24 lg:pb-24 lg:pt-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-solar-300 backdrop-blur">
            <Sun className="size-3.5" aria-hidden="true" />
            Solar energy &amp; technology · Ibadan, Nigeria
          </span>

          <h1 className="mt-6 text-[clamp(2.35rem,6.2vw,4.35rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-white">
            Power Your World.
            <span className="mt-1 block text-solar-400">
              Embrace a Brighter Future.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/75 md:text-[17px]">
            Reliable solar energy solutions, quality solar products and
            professional installations. We bring dependable power solutions to
            homes and businesses across Nigeria.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="/contact#quote" size="lg" className="min-w-44">
              Get a Free Quote
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                aria-hidden="true"
              />
            </ButtonLink>
            <ButtonLink href="/products" variant="outlineLight" size="lg">
              Explore Our Products
            </ButtonLink>
            <ButtonLink
              href={whatsappLink(whatsappMessages.general)}
              variant="whatsapp"
              size="lg"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp Us
            </ButtonLink>
          </div>

          <p className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-white/65">
            <a href={`tel:${site.phoneTel}`} className="transition hover:text-solar-300">
              Call {site.phoneDisplay}
            </a>
            <span className="hidden size-1 rounded-full bg-white/25 sm:block" aria-hidden="true" />
            <span>{site.address.city}, {site.address.state} — serving all of Nigeria</span>
          </p>
        </div>
      </div>

      {/* Trust highlights */}
      <div className="relative border-t border-white/10 bg-navy-900/55 backdrop-blur-md">
        <div className="container-page grid gap-px py-2 sm:grid-cols-3">
          {trust.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 py-6 sm:px-6 sm:first:pl-0 sm:last:pr-0"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-solar-400/25 bg-solar-400/12 text-solar-400">
                <item.icon className="size-5" strokeWidth={1.9} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-[13.5px] font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-white/65">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
