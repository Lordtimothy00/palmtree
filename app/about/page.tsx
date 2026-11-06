import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPinned,
  Wrench,
  ShieldCheck,
  HeartHandshake,
  ExternalLink,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading, Eyebrow } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { Logo } from "@/components/logo";
import { services } from "@/lib/data";
import { site, fullAddress, whatsappLink, whatsappMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Nigerian Solar Energy & Technology Company",
  description:
    "Palmtree Technology Services is a solar energy and technology company based in Ibadan, Oyo State, serving all of Nigeria with solar installation, inverters, batteries, security technology and practical training.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Palmtree Technology Services",
    description:
      "A Nigerian solar energy and technology company based in Ibadan — solar installation, products, security technology and training nationwide.",
    url: "/about",
  },
};

const expertise = [
  {
    icon: Wrench,
    title: "Installation and technical experience",
    body: "Roof and ground-mount arrays, hybrid inverter systems, battery banks and changeover wiring — installed, tested and handed over with the customer walked through how the system works.",
  },
  {
    icon: ShieldCheck,
    title: "Commitment to quality",
    body: "We specify equipment that suits the job and install it properly: correct cable sizing, protection, earthing and ventilation. Quality is a build standard, not a marketing line.",
  },
  {
    icon: HeartHandshake,
    title: "Our approach",
    body: "Start with the load, not the equipment. We ask what you want to power and for how long, then propose a system that meets it — and tell you honestly if a budget will not stretch that far.",
  },
  {
    icon: MapPinned,
    title: "Nationwide coverage",
    body: "Based in Ibadan, Oyo State, with the capability to deliver and install across all states in Nigeria, and to supply equipment wherever you are.",
  },
];

const values = [
  "Assess before recommending",
  "Explain the system in plain language",
  "Install neatly and safely",
  "Stay reachable after handover",
  "Teach what we practise",
];

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${site.name}`,
    url: `${site.url}/about`,
    mainEntity: {
      "@type": "Organization",
      name: site.name,
      alternateName: site.brandAlt,
      url: site.url,
      email: site.email,
      telephone: site.phoneTel,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${site.address.line1}, ${site.address.line2}`,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        addressCountry: "NG",
      },
    },
  };

  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="Our company"
        title="Solar energy and technology, engineered for Nigerian conditions."
        intro="Palmtree Technology Services installs solar systems, supplies solar products and delivers security technology for homes and businesses — backed by a training initiative that keeps our technical standards sharp."
        image="/images/about-team.jpg"
        imageAlt="Palmtree Technology Services team on a solar installation site"
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact#quote" size="md">
            Request a Quote
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href={whatsappLink(whatsappMessages.general)}
            variant="outlineLight"
            size="md"
          >
            Talk to us on WhatsApp
          </ButtonLink>
        </div>
      </PageHero>

      {/* Introduction */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.7rem,3.4vw,2.5rem)] font-semibold leading-[1.1] text-navy-700">
              A renewable energy company with a workshop, not just a showroom.
            </h2>
            <div className="mt-5 space-y-4 text-[14.5px] leading-relaxed text-navy-700/70 md:text-[15px]">
              <p>
                Palmtree Technology Services is a Nigerian renewable energy and
                technology company based in Ibadan, Oyo State. Our work covers solar
                energy installation, solar products and services, batteries and
                inverters — and extends into electrical and security technology.
              </p>
              <p>
                We work with homeowners who are tired of generator noise, business
                owners who need dependable daytime power, and organisations
                equipping facilities where grid supply cannot be relied on. Every
                project starts with the same question: what do you actually need to
                power?
              </p>
              <p>
                Alongside installation and supply, we run{" "}
                <Link href="/training" className="font-semibold text-forest-700 underline decoration-solar-400 decoration-2 underline-offset-2 hover:text-forest-600">
                  Palmtree Solar Master
                </Link>
                , a practical solar technology training initiative. Teaching keeps
                us current, and it means the people installing your system have
                been taught to explain it.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-line bg-mist/70 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-700/40">
                What we hold ourselves to
              </p>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {values.map((value) => (
                  <li key={value} className="flex items-start gap-2 text-[13px] text-navy-700/75">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-forest-600" strokeWidth={2.5} aria-hidden="true" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80} className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-mist shadow-soft">
              <Image
                src="/images/about-workshop.jpg"
                alt="Inside the Palmtree solar workshop with inverters and batteries"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3.6] overflow-hidden rounded-2xl bg-mist">
                <Image
                  src="/images/gallery/lithium-battery-rack.jpg"
                  alt="Lithium battery rack installed by Palmtree"
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3.6] overflow-hidden rounded-2xl bg-mist">
                <Image
                  src="/images/gallery/panel-mounting.jpg"
                  alt="Technician mounting a solar panel"
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-navy-700 p-5 text-white">
              <span className="rounded-xl bg-white/10 p-2">
                <Logo variant="light" size={38} showWordmark={false} />
              </span>
              <div>
                <p className="font-display text-[14px] font-semibold">
                  Palmtree Technology Services
                </p>
                <p className="mt-0.5 text-[12px] text-white/55">
                  Also known as Palmtree Solar Master
                </p>
              </div>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex items-center gap-1.5 text-[12px] font-medium text-white/60 transition hover:text-solar-300"
              >
                Facebook
                <ExternalLink className="size-3" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-mist py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our expertise"
            title="What we bring to your property."
            intro="Practical experience across the parts of a solar system that decide whether it performs — from the array on the roof to the settings on the inverter."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {expertise.map((item, i) => (
              <Reveal key={item.title} delay={i * 60} as="article">
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-7">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-forest-50 text-forest-700">
                    <item.icon className="size-[22px]" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-[17px] font-semibold text-navy-700">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-navy-700/65">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities / services list */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.7rem,3.4vw,2.4rem)] font-semibold leading-[1.1] text-navy-700">
              One team across energy and technology.
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-navy-700/70">
              Solar systems, storage, appliances and surveillance are increasingly
              installed together. Working with one company keeps the design,
              wiring and support consistent.
            </p>
            <div className="mt-7">
              <ButtonLink href="/services" variant="secondary" size="md">
                Explore our services
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>

          <ul className="divide-y divide-line overflow-hidden rounded-2xl border border-line">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group flex items-center justify-between gap-4 bg-white px-5 py-4 transition hover:bg-mist/70"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-display text-[11px] font-semibold text-forest-400">
                      {String(services.indexOf(service) + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block text-[14px] font-semibold text-navy-700">
                        {service.title}
                      </span>
                      <span className="mt-0.5 block text-[12px] text-navy-700/55">
                        {service.short}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-navy-700/25 transition group-hover:text-forest-700" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Coverage */}
      <section className="bg-mist py-20 md:py-24">
        <div className="container-page">
          <div className="overflow-hidden rounded-[2rem] border border-line bg-white">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <Eyebrow>Service coverage</Eyebrow>
                <h2 className="mt-5 font-display text-[clamp(1.5rem,2.8vw,2.1rem)] font-semibold leading-tight text-navy-700">
                  Based in Ibadan. Working across Nigeria.
                </h2>
                <p className="mt-4 text-[14px] leading-relaxed text-navy-700/65">
                  Our office and workshop are on Academy–Monatan Road in Ibadan, Oyo
                  State. Installation teams travel for projects nationwide, and
                  equipment can be supplied and delivered to any state.
                </p>
                <dl className="mt-7 space-y-4">
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-700/40">
                      Office address
                    </dt>
                    <dd className="mt-1 text-[14px] font-medium text-navy-700">
                      {fullAddress}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-700/40">
                      Service area
                    </dt>
                    <dd className="mt-1 text-[14px] font-medium text-navy-700">
                      {site.serviceArea}
                    </dd>
                  </div>
                </dl>
                <div className="mt-7 flex flex-wrap gap-3">
                  <ButtonLink href="/contact#location" variant="secondary" size="md">
                    Find our office
                  </ButtonLink>
                  <ButtonLink href="/projects" variant="ghost" size="md">
                    See our projects
                  </ButtonLink>
                </div>
              </div>
              <div className="relative min-h-64 bg-navy-700">
                <Image
                  src="/images/cta-installation.jpg"
                  alt="Solar array on a commercial building in Nigeria"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's design the right system for your property."
        body="Tell us what you need to power. We will assess your load and recommend a solution that fits your budget."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
