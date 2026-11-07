import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  PackageCheck,
  MapPinned,
  Sun,
  BadgeCheck,
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
      <div
        className="texture-grid pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-solar-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-52 -left-40 size-[30rem] rounded-full bg-forest-500/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative pb-12 pt-14 md:pb-16 md:pt-20 xl:pb-20 xl:pt-24">
        <div className="grid items-center gap-12 xl:grid-cols-[1.02fr_0.98fr] xl:gap-16">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-solar-300">
              <Sun className="size-3.5" aria-hidden="true" />
              Solar energy &amp; technology · Ibadan, Nigeria
            </span>

            <h1 className="mt-6 text-balance text-[clamp(1.85rem,7.6vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-white">
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
              <a
                href={`tel:${site.phoneTel}`}
                className="transition hover:text-solar-300"
              >
                Call {site.phoneDisplay}
              </a>
              <span
                className="hidden size-1 rounded-full bg-white/25 sm:block"
                aria-hidden="true"
              />
              <span>
                {site.address.city}, {site.address.state} — serving all of Nigeria
              </span>
            </p>
          </div>

          {/* Company photograph */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 shadow-lift">
              <Image
                src="/images/company/rooftop-installation-team.jpg"
                alt="A Palmtree technician in a hard hat and branded hi-vis vest mounting solar panels on a rooftop array"
                width={960}
                height={1280}
                priority
                sizes="(max-width: 1279px) 92vw, 46vw"
                className="h-[340px] w-full object-cover object-[62%_42%] sm:h-[420px] xl:h-[510px]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-2.5 rounded-xl border border-white/20 bg-navy-900/70 px-3.5 py-2.5 text-white backdrop-blur-md sm:inset-x-5 sm:bottom-5">
                <BadgeCheck
                  className="size-4 shrink-0 text-solar-400"
                  aria-hidden="true"
                />
                <p className="text-[12px] font-medium leading-snug">
                  Our team on a rooftop installation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust highlights */}
      <div className="relative border-t border-white/10 bg-navy-900/55">
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
