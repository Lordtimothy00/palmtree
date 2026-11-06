import type { Metadata } from "next";
import { Suspense } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Navigation,
  Check,
  CalendarClock,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { FacebookIcon } from "@/components/icons/social";
import { QuoteFormConnected } from "@/components/forms/quote-form-connected";
import { ContactForm } from "@/components/forms/contact-form";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Eyebrow, SectionHeading } from "@/components/ui/section";
import { site, fullAddress, whatsappLink, whatsappMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Ibadan Office & Nationwide Enquiries",
  description:
    "Contact Palmtree Technology Services: call or WhatsApp 0805 127 0913, email palmtreeng@gmail.com, or visit our office opposite Shafa Petrol Station, Academy–Monatan Road, Ibadan, Oyo State. Serving all of Nigeria.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Palmtree Technology Services",
    description:
      "Call, WhatsApp, email or visit our Ibadan office. Request a free solar consultation.",
    url: "/contact",
  },
};

const channels = [
  {
    icon: Phone,
    label: "Call us",
    value: site.phoneDisplay,
    href: `tel:${site.phoneTel}`,
    note: "Speak to our team directly",
    tone: "green" as const,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: whatsappLink(whatsappMessages.general),
    note: "Send photos and details",
    tone: "whatsapp" as const,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "For drawings and documents",
    tone: "green" as const,
  },
];

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${site.name}`,
    url: `${site.url}/contact`,
    mainEntity: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phoneTel,
      email: site.email,
      url: site.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${site.address.line1}, ${site.address.line2}`,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        addressCountry: "NG",
      },
      areaServed: { "@type": "Country", name: "Nigeria" },
    },
  };

  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get in touch"
        title="Let's talk about the power you actually need."
        intro="Call, WhatsApp, email or visit our Ibadan office. Tell us what you want to power and we will help you plan the right solar solution — anywhere in Nigeria."
        image="/images/about-team.jpg"
        imageAlt="Palmtree Technology Services team ready to help"
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={`tel:${site.phoneTel}`} size="md">
            <Phone className="size-4" aria-hidden="true" />
            Call {site.phoneDisplay}
          </ButtonLink>
          <ButtonLink
            href={whatsappLink(whatsappMessages.general)}
            variant="whatsapp"
            size="md"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Chat on WhatsApp
          </ButtonLink>
        </div>
      </PageHero>

      {/* Channels */}
      <section className="border-b border-line bg-white py-12 md:py-14">
        <div className="container-page grid gap-4 sm:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 50}>
              <a
                href={c.href}
                {...(c.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-forest-700/25 hover:shadow-soft"
              >
                <span
                  className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${
                    c.tone === "whatsapp"
                      ? "bg-[#25D366]/12 text-[#128C4B]"
                      : "bg-forest-50 text-forest-700"
                  }`}
                >
                  <c.icon className="size-5" strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-700/65">
                    {c.label}
                  </span>
                  <span className="mt-1 block break-words font-display text-[15px] font-semibold text-navy-700">
                    {c.value}
                  </span>
                  <span className="mt-0.5 block text-[12px] text-navy-700/60">
                    {c.note}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quote form */}
      <section id="quote" className="scroll-mt-24 bg-mist py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <Eyebrow>Quote request</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.7rem,3.2vw,2.4rem)] font-semibold leading-[1.1] text-navy-700">
              Request a solar consultation.
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-navy-700/70">
              The more you tell us, the more useful our recommendation will be. If
              you are unsure about power requirements, describe the property and the
              appliances instead — that is enough.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "No obligation — a consultation is a conversation, not a sales pitch.",
                "You will hear from us using the phone or WhatsApp number you provide.",
                "Your details are used only to respond to this enquiry.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] text-navy-700/70">
                  <Check className="mt-0.5 size-4 shrink-0 text-forest-600" strokeWidth={2.4} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl border border-forest-700/12 bg-white p-5">
              <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-forest-700">
                <CalendarClock className="size-4" aria-hidden="true" />
                Faster on WhatsApp
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-navy-700/65">
                You can send photos of your roof, your inverter or your appliance
                labels. It helps us respond with something accurate.
              </p>
              <ButtonLink
                href={whatsappLink(whatsappMessages.quote)}
                variant="whatsapp"
                size="sm"
                className="mt-4"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Send your details on WhatsApp
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-white p-6 shadow-soft md:p-8">
            <h3 className="font-display text-[17px] font-semibold text-navy-700">
              Solar quote request
            </h3>
            <p className="mt-1 text-[12.5px] text-navy-700/60">
              Fields marked * are required.
            </p>
            <div className="mt-6">
              <Suspense fallback={<div className="h-[520px] animate-pulse rounded-2xl bg-mist" />}>
                <QuoteFormConnected />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="scroll-mt-24 bg-white py-16 md:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <Eyebrow>Our office</Eyebrow>
              <h2 className="mt-5 text-[clamp(1.6rem,3vw,2.3rem)] font-semibold leading-[1.1] text-navy-700">
                Visit us in Ibadan.
              </h2>
              <p className="mt-4 text-[14.5px] leading-relaxed text-navy-700/70">
                Our office is on Academy–Monatan Road, directly opposite Shafa
                Petrol Station. Come and see equipment in person, or discuss your
                project with the team.
              </p>

              <div className="mt-7 space-y-4">
                <div className="flex items-start gap-3.5 rounded-2xl border border-line bg-mist/60 p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-forest-700 shadow-soft">
                    <MapPin className="size-5" strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-700/65">
                      Office address
                    </p>
                    <address className="mt-1 text-[13.5px] not-italic leading-relaxed text-navy-700/80">
                      {fullAddress}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl border border-line bg-mist/60 p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-forest-700 shadow-soft">
                    <Clock className="size-5" strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-700/65">
                      Opening hours
                    </p>
                    <ul className="mt-1 space-y-0.5 text-[13px] text-navy-700/75">
                      {site.hours.map((h) => (
                        <li key={h.day} className="flex flex-wrap gap-x-2">
                          <span className="font-medium text-navy-700/85">{h.day}</span>
                          <span className="text-navy-700/65">{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl border border-line bg-mist/60 p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-forest-700 shadow-soft">
                    <Navigation className="size-5" strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-700/65">
                      Service area
                    </p>
                    <p className="mt-1 text-[13.5px] text-navy-700/80">
                      {site.serviceArea}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <ButtonLink href={site.mapDirectionsHref} size="md">
                  <Navigation className="size-4" aria-hidden="true" />
                  Get Directions
                </ButtonLink>
                <ButtonLink href={site.facebook} variant="ghost" size="md">
                  <FacebookIcon className="size-4" />
                  Facebook
                </ButtonLink>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-line bg-mist shadow-soft">
              <iframe
                title="Map showing the Palmtree Technology Services office on Academy–Monatan Road, Ibadan"
                src={site.mapEmbedSrc}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full border-0 md:h-full md:min-h-[460px]"
                allowFullScreen
              />
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-[11.5px] leading-relaxed text-navy-700/65">
            Map location centres on Academy–Monatan Road, Ibadan. Older listings for
            this business may show a previous address — please use the address above.
          </p>
        </div>
      </section>

      {/* General contact form */}
      <section className="border-t border-line bg-mist py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="General enquiries"
            title="Send us a message."
            intro="For anything that is not a quote request — product availability, training, support, or partnership enquiries."
            align="center"
          />
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-line bg-white p-6 shadow-soft md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
