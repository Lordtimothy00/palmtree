import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  MessageCircle,
  Phone,
  Wrench,
  BookOpen,
  Users,
  ClipboardCheck,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading, Eyebrow } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { ServiceIcon } from "@/components/service-icon";
import { TrainingForm } from "@/components/forms/training-form";
import { Logo } from "@/components/logo";
import { programmes } from "@/lib/data";
import { site, whatsappLink, trainingEnquiryMessage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solar Technology Training — Palmtree Solar Master",
  description:
    "Practical solar technology training in Nigeria with Palmtree Solar Master: solar system installation, inverter and battery training, solar electrical systems, CCTV installation and hands-on workshops. Register your interest.",
  alternates: { canonical: "/training" },
  openGraph: {
    title: "Palmtree Solar Master — Solar Technology Training",
    description:
      "Learn. Build. Become a solar energy professional. Practical solar training from Palmtree Technology Services.",
    url: "/training",
  },
};

const approach = [
  {
    icon: Wrench,
    title: "Practical first",
    body: "You work with panels, inverters, batteries and wiring — not only slides. Learning happens at the bench and on site.",
  },
  {
    icon: ClipboardCheck,
    title: "Explained, not memorised",
    body: "We teach why a system is sized and configured the way it is, so you can handle a different property next time.",
  },
  {
    icon: Users,
    title: "Taught by installers",
    body: "Sessions are led by people who install systems through the week, so questions get real answers.",
  },
  {
    icon: BookOpen,
    title: "Details confirmed upfront",
    body: "Dates, fees and any certification are confirmed by our team before you commit or pay anything.",
  },
];

export default function TrainingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: `${site.brandAlt} — ${site.name}`,
    description:
      "Practical solar technology training initiative of Palmtree Technology Services, covering solar installation, inverters and batteries, solar electrical systems, CCTV and hands-on workshops.",
    url: `${site.url}/training`,
    parentOrganization: { "@type": "Organization", name: site.name, url: site.url },
    telephone: site.phoneTel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      addressCountry: "NG",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Solar training programmes",
      itemListElement: programmes.map((p) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Course", name: p.title, description: p.summary },
      })),
    },
  };

  return (
    <>
      <PageHero
        breadcrumb="Training"
        eyebrow="Palmtree Solar Master"
        title="Learn. Build. Become a Solar Energy Professional."
        intro="Practical solar technology training for people who want to install, maintain and grow in the solar industry — taught by a team that installs systems across Nigeria."
        image="/images/training/training-workshop.jpg"
        imageAlt="Trainees at a Palmtree Solar Master practical workshop"
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#register" size="md">
            Register your interest
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href={whatsappLink(
              trainingEnquiryMessage("solar technology training programme"),
            )}
            variant="whatsapp"
            size="md"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Register on WhatsApp
          </ButtonLink>
        </div>
      </PageHero>

      {/* Intro */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <Eyebrow>The initiative</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.7rem,3.4vw,2.5rem)] font-semibold leading-[1.1] text-navy-700">
              Training that produces installers, not spectators.
            </h2>
            <div className="mt-5 space-y-4 text-[14.5px] leading-relaxed text-navy-700/70 md:text-[15px]">
              <p>
                Palmtree Solar Master is the training arm of Palmtree Technology
                Services. It grew out of a simple observation: too many solar
                systems underperform because they were installed by people who were
                never properly taught.
              </p>
              <p>
                Our programmes are built around real components and real
                installations. Trainees work with panels, charge controllers,
                inverters, batteries and wiring, and learn to size a system, install
                it safely and explain it to a customer.
              </p>
              <p>
                You do not need a technical background to start. Programmes range
                from foundation sessions for beginners to technical training for
                practising technicians.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-line bg-mist/70 p-5">
              <Logo size={44} />
              <div className="text-[12.5px] leading-relaxed text-navy-700/65">
                Training delivered from our Ibadan workshop.
                <br />
                <span className="font-medium text-navy-700">
                  Enquiries nationwide — call {site.phoneDisplay}.
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80} className="grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-mist sm:mt-8">
              <Image
                src="/images/training/trainees-on-site.jpg"
                alt="Trainees observing a live solar installation"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-mist">
              <Image
                src="/images/training/training-demonstration.jpg"
                alt="Instructor demonstrating inverter configuration"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Programmes */}
      <section id="programmes" className="scroll-mt-24 bg-mist py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Programmes"
            title="Five programme areas."
            intro="Each programme is practical in focus. Ask our team which one fits your current level and goal."
            align="center"
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {programmes.map((programme, i) => (
              <Reveal key={programme.slug} delay={i * 55} as="article">
                <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-shadow duration-300 hover:shadow-soft">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-forest-50 text-forest-700">
                      <ServiceIcon name={programme.icon} className="size-[22px]" />
                    </span>
                    <span className="rounded-full border border-solar-400/40 bg-solar-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-solar-600">
                      {programme.level}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-[19px] font-semibold leading-snug text-navy-700">
                    {programme.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-navy-700/65">
                    {programme.description}
                  </p>

                  <div className="mt-5 rounded-xl bg-mist/70 p-4">
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-navy-700/65">
                      What you will learn
                    </p>
                    <ul className="mt-2.5 space-y-1.5">
                      {programme.learn.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-[12.5px] leading-snug text-navy-700/75"
                        >
                          <Check
                            className="mt-0.5 size-3.5 shrink-0 text-forest-600"
                            strokeWidth={2.6}
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-4 text-[12px] leading-relaxed text-navy-700/65">
                    <span className="font-semibold text-navy-700/70">Best for:</span>{" "}
                    {programme.bestFor}
                  </p>

                  <div className="mt-auto pt-5">
                    <ButtonLink
                      href={whatsappLink(trainingEnquiryMessage(programme.title))}
                      variant="whatsapp"
                      size="sm"
                      className="w-full sm:w-auto"
                    >
                      <MessageCircle className="size-4" aria-hidden="true" />
                      Enquire about this programme
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={280} as="article">
              <div className="flex h-full flex-col justify-between rounded-3xl bg-forest-800 p-7 text-white">
                <div>
                  <Eyebrow tone="light">Not sure where to start?</Eyebrow>
                  <h3 className="mt-4 font-display text-[19px] font-semibold leading-snug">
                    Tell us your goal and we will point you to the right programme.
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/65">
                    Whether you are changing careers, adding solar to an existing
                    electrical business, or formalising years of hands-on work, a
                    short conversation is the fastest route.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  <ButtonLink href="#register" size="sm">
                    Register interest
                  </ButtonLink>
                  <ButtonLink href={`tel:${site.phoneTel}`} variant="outlineLight" size="sm">
                    <Phone className="size-4" aria-hidden="true" />
                    Call us
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </div>

          <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-dashed border-forest-700/20 bg-white/60 px-5 py-4 text-center text-[12px] leading-relaxed text-navy-700/65">
            Programme dates, fees, duration and certification are confirmed directly
            by our team. We do not publish unconfirmed schedules or costs on this
            page.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="How training works"
            title="Practical, explained, and led by installers."
            align="center"
          />
          <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((item, i) => (
              <Reveal key={item.title} delay={i * 55}>
                <div className="h-full rounded-2xl border border-line bg-mist/40 p-6">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-white text-forest-700 shadow-soft">
                    <item.icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-[14.5px] font-semibold text-navy-700">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-navy-700/60">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Register */}
      <section id="register" className="scroll-mt-24 bg-mist py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Eyebrow>Registration</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.7rem,3.2vw,2.4rem)] font-semibold leading-[1.1] text-navy-700">
              Register your interest.
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-navy-700/70">
              Send us your details and the programme you are interested in. Our
              training team will contact you with the current schedule, requirements
              and fees.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "No payment is required to register interest.",
                "Dates and fees are confirmed before any commitment.",
                "Ask about group or in-house training for your team.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] text-navy-700/70">
                  <Check className="mt-0.5 size-4 shrink-0 text-forest-600" strokeWidth={2.4} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl border border-line bg-white p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-700/65">
                Prefer WhatsApp?
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-navy-700/65">
                Message us on {site.phoneDisplay} and our team will send the
                programme details directly.
              </p>
              <ButtonLink
                href={whatsappLink(
                  trainingEnquiryMessage("Palmtree Solar Master training"),
                )}
                variant="whatsapp"
                size="sm"
                className="mt-4"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Register on WhatsApp
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-white p-6 shadow-soft md:p-8">
            <TrainingForm />
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
