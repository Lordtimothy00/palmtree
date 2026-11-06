import Image from "next/image";
import {
  Cpu,
  HardHat,
  BadgeCheck,
  BookOpenCheck,
  HeartHandshake,
  MapPinned,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui/section";

const reasons = [
  {
    icon: Cpu,
    title: "Solar technology expertise",
    body: "System sizing, inverter configuration and battery planning handled by people who work with these systems every day.",
  },
  {
    icon: HardHat,
    title: "Professional installation",
    body: "Clean mounting, protected wiring, proper earthing and a system you can actually maintain.",
  },
  {
    icon: BadgeCheck,
    title: "Quality equipment",
    body: "Panels, inverters and batteries selected for compatibility and dependable service, not just the lowest price.",
  },
  {
    icon: BookOpenCheck,
    title: "Practical technical knowledge",
    body: "We train installers through Palmtree Solar Master — teaching sharpens the way we install.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-focused solutions",
    body: "You hear what your budget can realistically power before anything is ordered.",
  },
  {
    icon: MapPinned,
    title: "Coverage across Nigeria",
    body: "Based in Ibadan and serving homes, businesses and organisations in all states.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy-700 py-20 text-white md:py-28">
      <div className="texture-rays pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="texture-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="container-page relative">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow tone="light">Why choose Palmtree</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.8rem,3.6vw,2.75rem)] font-semibold leading-[1.08] text-white">
              Dependable power is an
              <span className="text-solar-400"> engineering decision</span>, not a
              purchase.
            </h2>
            <p className="mt-5 text-[14.5px] leading-relaxed text-white/65">
              A solar system that disappoints is usually the result of guesswork at
              the design stage. We assess, explain and install — so the system you
              pay for is the system your property actually needs.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/gallery/commercial-rooftop.jpg"
                  alt="Commercial solar array installed by Palmtree Technology Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 36vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-4 text-[12px] font-medium text-white/80">
                  Commercial rooftop installation — Ibadan, Oyo State
                </p>
              </div>
            </div>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} as="li" delay={i * 50} className="bg-navy-700">
                <div className="flex h-full flex-col gap-3 p-6 transition-colors duration-300 hover:bg-navy-600/40">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-solar-400/12 text-solar-400">
                    <reason.icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-[15px] font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-white/65">
                    {reason.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
