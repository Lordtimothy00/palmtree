import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import { FacebookIcon } from "@/components/icons/social";
import { Logo } from "@/components/logo";
import { services } from "@/lib/data";
import {
  site,
  navigationFooter,
  whatsappLink,
  whatsappMessages,
} from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-700 text-white">
      <div className="texture-rays pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-solar-400/60 to-transparent" aria-hidden="true" />

      <div className="container-page relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr_1fr_1.15fr]">
          {/* Brand */}
          <div>
            <Logo variant="light" size={46} />
            <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-white/60">
              Solar energy installation, quality solar products, batteries,
              inverters and security technology — delivered by a team that
              installs systems across Nigeria every week.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-solar-300">
              <span className="size-1.5 rounded-full bg-solar-400" aria-hidden="true" />
              Nationwide service
            </div>
            <div className="mt-6 flex items-center gap-2.5">
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
                aria-label="Chat with Palmtree on WhatsApp"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-[#25D366]/60 hover:bg-[#25D366]/15 hover:text-[#4ae58a]"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email Palmtree Technology Services"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-solar-400/60 hover:bg-solar-400/15 hover:text-solar-300"
              >
                <Mail className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h2 className="font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-white/65">
              Navigate
            </h2>
            <ul className="mt-5 space-y-3">
              {navigationFooter.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-[14px] text-white/70 transition hover:text-solar-300"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3 opacity-0 transition group-hover:opacity-60" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services">
            <h2 className="font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-white/65">
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-[14px] text-white/70 transition hover:text-solar-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-white/65">
              Get in touch
            </h2>
            <ul className="mt-5 space-y-4 text-[14px]">
              <li>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="flex items-start gap-3 text-white/80 transition hover:text-solar-300"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-solar-400" aria-hidden="true" />
                  <span>{site.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/80 transition hover:text-solar-300"
                >
                  <MessageCircle className="mt-0.5 size-4 shrink-0 text-solar-400" aria-hidden="true" />
                  <span>WhatsApp {site.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 break-all text-white/80 transition hover:text-solar-300"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-solar-400" aria-hidden="true" />
                  <span>{site.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="mt-0.5 size-4 shrink-0 text-solar-400" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  {site.address.line1},<br />
                  {site.address.line2},<br />
                  {site.address.city}, {site.address.state}.
                </address>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <Clock className="mt-0.5 size-4 shrink-0 text-solar-400/80" aria-hidden="true" />
                <span className="text-[13px] leading-relaxed">
                  Mon–Fri 8am–6pm · Sat 9am–4pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-[12.5px] text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>{site.brandAlt} — practical solar training</span>
            <span className="hidden size-1 rounded-full bg-white/25 md:block" aria-hidden="true" />
            <Link href="/contact" className="transition hover:text-solar-300">
              Request a quote
            </Link>
            <span className="hidden size-1 rounded-full bg-white/25 md:block" aria-hidden="true" />
            <span>Serving all 36 states &amp; the FCT</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
