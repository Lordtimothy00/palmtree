import Image from "next/image";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { site, whatsappLink, whatsappMessages } from "@/lib/site";

export function CtaBand({
  title = "Ready to Enjoy Reliable Power?",
  body = "Let's help you find the right solar solution for your home or business.",
  image = "/images/cta-installation.jpg",
}: {
  title?: string;
  body?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-800">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover object-center opacity-45"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-900 via-forest-900/90 to-forest-800/60" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_20%,rgba(253,203,5,0.2),transparent_55%)]" />

      <div className="container-page relative py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-solar-300">
            Let&apos;s talk power
          </p>
          <h2 className="mt-4 text-[clamp(1.8rem,4vw,2.9rem)] font-semibold leading-[1.08] text-white">
            {title}
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/70">
            {body}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="/contact#quote" size="lg">
              Request a Quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href={whatsappLink(whatsappMessages.quote)}
              variant="whatsapp"
              size="lg"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Chat on WhatsApp
            </ButtonLink>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex h-14 items-center gap-2 px-2 text-[14px] font-semibold text-white/75 transition hover:text-solar-300"
            >
              <Phone className="size-4" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
