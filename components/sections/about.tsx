import Image from "next/image";
import { Check, MapPin, MessageCircle, ShieldCheck, Wrench } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section";
import { site, whatsappLink, whatsappMessages } from "@/lib/site";

const points = [
  {
    icon: Wrench,
    title: "Installation and technical work",
    body: "Panels, inverters and battery banks installed and configured on site.",
  },
  {
    icon: ShieldCheck,
    title: "Equipment you can rely on",
    body: "Solar products, batteries and inverters supplied to match your system.",
  },
  {
    icon: MapPin,
    title: "Nationwide reach",
    body: `Based in ${site.address.city}, serving customers across Nigeria.`,
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-mist py-20 md:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[1.75rem] border border-navy-700/10 shadow-lift">
                <Image
                  src="/images/company/about-shop.jpg"
                  alt="The Palmtree Solar Master shop front with its signboard, and a group of trained installers outside"
                  width={1100}
                  height={1300}
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="h-[380px] w-full object-cover object-[40%_30%] sm:h-[460px] lg:h-[520px]"
                />
              </div>
              <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-navy-700/8 bg-white px-5 py-4 shadow-lift sm:left-8 sm:right-auto sm:max-w-xs">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-forest-700">
                  Also known as
                </p>
                <p className="mt-1 font-display text-[15px] font-semibold text-navy-700">
                  Palmtree Solar Master
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <Eyebrow>About us</Eyebrow>
            <h2 className="mt-4 text-balance text-[clamp(1.75rem,3.6vw,2.6rem)] font-semibold leading-[1.1] text-navy-700">
              Solar energy and technology, done properly
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-navy-700/75 md:text-base">
              Palmtree Technology Services, also known as Palmtree Solar Master,
              specializes in solar energy installation, solar products, batteries
              and inverters. We provide power solutions and technical services to
              customers across Nigeria.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point.title} className="flex gap-4">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-forest-50 text-forest-700">
                    <point.icon className="size-4" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-[14px] font-semibold text-navy-700">
                      {point.title}
                    </p>
                    <p className="mt-0.5 text-[13.5px] leading-relaxed text-navy-700/65">
                      {point.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="#contact" variant="secondary" size="md">
                <Check className="size-4" aria-hidden="true" />
                Request a Quote
              </ButtonLink>
              <ButtonLink
                href={whatsappLink(whatsappMessages.general)}
                variant="outline"
                size="md"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Chat on WhatsApp
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
