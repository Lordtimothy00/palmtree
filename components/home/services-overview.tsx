import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section";
import { ServiceIcon } from "@/components/service-icon";
import { services } from "@/lib/data";

export function ServicesOverview() {
  return (
    <section className="relative overflow-hidden bg-mist py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Solar, storage and security —
                <br className="hidden sm:block" /> delivered end to end.
              </>
            }
            intro="From system design and installation to equipment supply, maintenance and hands-on training. One team for the full life of your solar investment."
            className="max-w-2xl"
          />
          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-forest-700/20 bg-white px-5 py-3 text-[13px] font-semibold text-forest-800 transition hover:border-forest-700/40 hover:shadow-soft"
          >
            All services
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 45} as="article">
              <Link
                href={`/services#${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-400 hover:-translate-y-1 hover:border-forest-700/20 hover:shadow-lift"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-forest-50 text-forest-700 transition-colors duration-300 group-hover:bg-forest-700 group-hover:text-solar-300">
                  <ServiceIcon name={service.icon} className="size-[22px]" />
                </span>
                <h3 className="mt-5 font-display text-[16.5px] font-semibold leading-snug text-navy-700">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-navy-700/65">
                  {service.short}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-forest-700">
                  Learn more
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
