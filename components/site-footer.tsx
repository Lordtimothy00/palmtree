import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FacebookIcon } from "@/components/icons/social";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui/button";
import { fullAddress, navLinks, site, whatsappLink, whatsappMessages } from "@/lib/site";
import { products, services } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-700 text-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-solar-400/60 to-transparent"
        aria-hidden="true"
      />

      <div className="container-page py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <span className="inline-flex rounded-xl bg-white px-4 py-2.5">
              <Logo size={46} />
            </span>
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-white/60">
              Solar installations, inverters, batteries and solar products —
              delivered across Nigeria.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Palmtree Technology Services on Facebook"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-solar-400/60 hover:bg-solar-400/15 hover:text-solar-300"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={whatsappLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Palmtree on WhatsApp"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-[#25D366]/60 hover:bg-[#25D366]/15 hover:text-[#7ef0ad]"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-solar-300">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-white/65 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-7 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-solar-300">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[13.5px] text-white/65 transition hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-7 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-solar-300">
              Products
            </h2>
            <ul className="mt-4 space-y-2.5">
              {products.slice(0, 5).map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-[13.5px] text-white/65 transition hover:text-white"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-[13.5px] font-semibold text-solar-300 transition hover:text-solar-200"
                >
                  All products
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-solar-300">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="flex items-start gap-2.5 text-[13.5px] text-white/70 transition hover:text-white"
                >
                  <Phone className="mt-0.5 size-3.5 shrink-0 text-solar-400" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-2.5 break-all text-[13.5px] text-white/70 transition hover:text-white"
                >
                  <Mail className="mt-0.5 size-3.5 shrink-0 text-solar-400" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-white/60">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-solar-400" aria-hidden="true" />
                {fullAddress}
              </li>
            </ul>
            <ButtonLink
              href={whatsappLink(whatsappMessages.quote)}
              variant="primary"
              size="sm"
              className="mt-5"
            >
              <MessageCircle className="size-3.5" aria-hidden="true" />
              Get a Quote
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-white/45">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-[12px] text-white/45">
            {site.brandAlt} · {site.address.city}, {site.address.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
