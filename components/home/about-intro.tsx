import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Sun, Zap, Cctv, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui/section";

const pillars = [
  { icon: Sun, label: "Solar installation" },
  { icon: Zap, label: "Inverters & batteries" },
  { icon: Cctv, label: "CCTV & security" },
  { icon: GraduationCap, label: "Practical training" },
];

export function AboutIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="texture-dots pointer-events-none absolute -right-16 top-10 size-72 opacity-[0.35]" aria-hidden="true" />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.02fr_1fr] lg:gap-16">
        {/* Imagery */}
        <Reveal className="relative">
          <div className="relative aspect-[4/3.4] overflow-hidden rounded-[2rem] bg-mist shadow-soft">
            <Image
              src="/images/about-team.jpg"
              alt="Palmtree Technology Services solar engineering team on site in Ibadan"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-2 w-[58%] max-w-[260px] overflow-hidden rounded-2xl border-4 border-white shadow-lift sm:-right-6">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/about-workshop.jpg"
                alt="Solar workshop with batteries and inverters being tested"
                fill
                sizes="260px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -left-3 top-6 hidden items-center gap-2 rounded-full bg-forest-700 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-lift sm:flex">
            <span className="size-1.5 rounded-full bg-solar-400" aria-hidden="true" />
            Ibadan · Nationwide
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={90}>
          <Eyebrow>About Palmtree</Eyebrow>
          <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.6rem)] font-semibold leading-[1.1] text-navy-700">
            A Nigerian solar company built on
            <span className="text-forest-700"> practical engineering</span>.
          </h2>
          <div className="mt-5 space-y-4 text-[14.5px] leading-relaxed text-navy-700/70 md:text-[15px]">
            <p>
              Palmtree Technology Services is a renewable energy and technology
              company based in Ibadan, Oyo State. We install solar systems, supply
              solar products, batteries and inverters, and deliver security
              technology for homes and businesses.
            </p>
            <p>
              Our work also runs through <strong className="font-semibold text-navy-700">Palmtree Solar Master</strong>,
              our solar technology training initiative — because a system is only as
              good as the person who installs and maintains it.
            </p>
          </div>

          <ul className="mt-7 grid grid-cols-2 gap-3">
            {pillars.map((p) => (
              <li
                key={p.label}
                className="flex items-center gap-2.5 rounded-xl border border-line bg-mist/70 px-3.5 py-3 text-[12.5px] font-medium text-navy-700/80"
              >
                <p.icon className="size-4 shrink-0 text-forest-600" strokeWidth={1.9} aria-hidden="true" />
                {p.label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-[14px] font-semibold text-forest-700 transition hover:text-forest-600"
            >
              More about our company
              <span className="flex size-7 items-center justify-center rounded-full bg-forest-50 transition group-hover:bg-forest-700 group-hover:text-white">
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </span>
            </Link>
            <span className="flex items-center gap-2 text-[12.5px] text-navy-700/60">
              <Check className="size-3.5 text-forest-600" aria-hidden="true" />
              Nationwide service coverage
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
