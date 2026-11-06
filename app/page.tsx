import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { AboutIntro } from "@/components/home/about-intro";
import { ServicesOverview } from "@/components/home/services-overview";
import { FeaturedProducts } from "@/components/home/featured-products";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { TrainingPromo } from "@/components/home/training-promo";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { site, whatsappLink, whatsappMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solar Installation, Solar Products & Training in Nigeria",
  description:
    "Palmtree Technology Services — solar installation company in Ibadan serving all Nigeria. Solar panels, inverters, batteries, solar appliances, CCTV and practical solar training. Get a free quote.",
  alternates: { canonical: "/" },
};

const contactOptions = [
  {
    icon: Phone,
    title: "Call us",
    value: site.phoneDisplay,
    href: `tel:${site.phoneTel}`,
    note: "Mon–Fri 8am–6pm · Sat 9am–4pm",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: site.phoneDisplay,
    href: whatsappLink(whatsappMessages.general),
    note: "Fastest way to reach the team",
  },
  {
    icon: Mail,
    title: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Send drawings, photos or documents",
  },
  {
    icon: MapPin,
    title: "Visit",
    value: `${site.address.line2}, ${site.address.city}`,
    href: "/contact#location",
    note: site.address.line1,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <ServicesOverview />
      <FeaturedProducts />
      <WhyChooseUs />
      <FeaturedProjects />
      <TrainingPromo />
      <CtaBand />

      {/* Contact shortcut */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Get in touch"
            title="Talk to a person, not a form."
            intro="Reach the Palmtree team however is easiest for you — call, WhatsApp, email, or visit our Ibadan office."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactOptions.map((option, i) => (
              <Reveal key={option.title} delay={i * 50}>
                <a
                  href={option.href}
                  {...(option.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-forest-700/25 hover:shadow-soft"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-forest-50 text-forest-700 transition group-hover:bg-forest-700 group-hover:text-solar-300">
                    <option.icon className="size-5" strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-700/40">
                    {option.title}
                  </p>
                  <p className="mt-1 break-words font-display text-[15px] font-semibold text-navy-700">
                    {option.value}
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-navy-700/50">
                    {option.note}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/contact" variant="ghost" size="md">
              Open the contact page
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
