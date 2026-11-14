import { ArrowRight, MessageCircle, Phone, Sun } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { navLinks, site, whatsappLink, whatsappMessages } from "@/lib/site";

export const metadata = {
  title: "Page not found",
  description: "The page you were looking for is not here.",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-700">
      <div className="texture-rays pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-page relative py-24 text-center md:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-solar-300">
          <Sun className="size-3.5" aria-hidden="true" />
          404 — not found
        </span>
        <h1 className="mx-auto mt-6 max-w-2xl text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-[1.05] text-white">
          This page has gone off-grid.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[14.5px] leading-relaxed text-white/65">
          The page you were looking for does not exist or has moved. Try one of
          the sections below, or message us and we will point you in the right
          direction.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" size="md">
            Back to home
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href={whatsappLink(whatsappMessages.general)}
            variant="whatsapp"
            size="md"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp us
          </ButtonLink>
        </div>

        {/* Plain anchors: the site is one page, so these are in-page jumps. */}
        <div className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`/${link.href}`}
              className="text-[13px] font-medium text-white/60 transition hover:text-solar-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={`tel:${site.phoneTel}`}
          className="mt-10 inline-flex items-center gap-2 text-[13px] font-semibold text-white/70 transition hover:text-solar-300"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call {site.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
