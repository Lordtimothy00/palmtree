import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section";
import { fullAddress, site, whatsappLink, whatsappMessages } from "@/lib/site";

const channels = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: site.phoneDisplay,
    href: `tel:${site.phoneTel}`,
    hint: "Tap to call",
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    hint: "Tap to email",
  },
  {
    icon: MapPin,
    label: "Address",
    value: fullAddress,
    href: site.mapDirectionsHref,
    hint: "Get directions",
  },
  {
    icon: Navigation,
    label: "Service area",
    value: site.serviceArea,
    href: site.mapDirectionsHref,
    hint: "Nationwide coverage",
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Tell us what you need power for"
            intro="Send a message, call, or message us on WhatsApp. We will come back to you with honest advice on what your budget can achieve."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          {/* Details */}
          <Reveal>
            <div className="flex flex-col gap-3">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  {...(channel.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-start gap-4 rounded-2xl border border-navy-700/8 bg-mist/60 p-4 transition-all duration-200 hover:border-forest-700/25 hover:bg-white hover:shadow-soft"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-forest-700 shadow-sm transition group-hover:bg-forest-700 group-hover:text-white">
                    <channel.icon className="size-4.5" strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10.5px] font-semibold uppercase tracking-[0.14em] text-navy-700/55">
                      {channel.label}
                    </span>
                    <span className="mt-0.5 block text-[14px] font-medium leading-relaxed text-navy-700">
                      {channel.value}
                    </span>
                    <span className="mt-0.5 block text-[11.5px] text-forest-700/70">
                      {channel.hint}
                    </span>
                  </span>
                </a>
              ))}

              <div className="mt-2 flex flex-wrap gap-2.5">
                <ButtonLink
                  href={whatsappLink(whatsappMessages.general)}
                  variant="whatsapp"
                  size="md"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Chat on WhatsApp
                </ButtonLink>
                <ButtonLink href={`tel:${site.phoneTel}`} variant="secondary" size="md">
                  <Phone className="size-4" aria-hidden="true" />
                  Call Us
                </ButtonLink>
              </div>

              <div className="mt-4 rounded-2xl border border-navy-700/8 bg-white p-4">
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-700/55">
                  <Clock className="size-3.5" aria-hidden="true" />
                  Opening hours
                </p>
                <dl className="mt-2.5 space-y-1.5">
                  {site.hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-4 text-[13px]">
                      <dt className="text-navy-700/65">{h.day}</dt>
                      <dd className="font-medium text-navy-700">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={70}>
            <div className="rounded-3xl border border-navy-700/8 bg-mist/50 p-6 shadow-soft sm:p-8">
              <h3 className="font-display text-lg font-semibold text-navy-700">
                Send an enquiry
              </h3>
              <p className="mb-6 mt-1 text-[13px] text-navy-700/65">
                Fields marked <span className="text-forest-600">*</span> are required.
              </p>
              <EnquiryForm />
            </div>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal delay={80}>
          <div className="mt-14 overflow-hidden rounded-3xl border border-navy-700/10 shadow-soft">
            <iframe
              title={`Map showing ${site.name} on ${site.address.line2}, ${site.address.city}`}
              src={site.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full border-0 md:h-[400px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
