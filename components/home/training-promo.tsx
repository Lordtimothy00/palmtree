import Image from "next/image";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui/section";
import { whatsappLink, whatsappMessages } from "@/lib/site";

const points = [
  "Hands-on work with panels, inverters and batteries",
  "System sizing, safety and commissioning explained",
  "Training for beginners and practising technicians",
  "Programmes confirmed directly by our team",
];

export function TrainingPromo() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <Eyebrow>Palmtree Solar Master</Eyebrow>
          <h2 className="mt-5 text-[clamp(1.8rem,3.6vw,2.7rem)] font-semibold leading-[1.08] text-navy-700">
            Learn. Build. Become a
            <span className="text-forest-700"> Solar Energy Professional.</span>
          </h2>
          <p className="mt-5 text-[14.5px] leading-relaxed text-navy-700/70 md:text-[15px]">
            Palmtree Solar Master is our solar technology training initiative. We
            teach the practical side of solar — how systems are sized, wired,
            configured and maintained — using the same components we install on
            site.
          </p>

          <ul className="mt-7 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[13.5px] text-navy-700/75">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-700">
                  <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/training" size="lg">
              Explore Training Programmes
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href={whatsappLink(whatsappMessages.training)}
              variant="ghost"
              size="lg"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Ask about training
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={80} className="order-1 lg:order-2">
          <div className="relative">
            <div className="relative aspect-[4/3.1] overflow-hidden rounded-[2rem] bg-mist shadow-soft">
              <Image
                src="/images/training/training-workshop.jpg"
                alt="Trainees at a Palmtree Solar Master practical workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 flex items-center justify-between gap-4 rounded-2xl bg-forest-700 px-5 py-4 text-white shadow-lift sm:left-8 sm:right-8">
              <div>
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-solar-300">
                  Training initiative
                </p>
                <p className="mt-0.5 font-display text-[15px] font-semibold">
                  Palmtree Solar Master
                </p>
              </div>
              <Image
                src="/brand/logo-mark-light.svg"
                alt=""
                width={40}
                height={40}
                unoptimized
                className="size-10 shrink-0 rounded-xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
