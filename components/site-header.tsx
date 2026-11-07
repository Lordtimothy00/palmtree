"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui/button";
import { navLinks, site, whatsappLink, whatsappMessages } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation and lock body scroll while open.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-forest-900 text-white lg:block">
        <div className="container-page flex h-10 items-center justify-between text-[12px]">
          <p className="flex items-center gap-2 text-white/70">
            <span className="size-1.5 rounded-full bg-solar-400" aria-hidden="true" />
            Nationwide solar installation, products and training across Nigeria
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${site.phoneTel}`}
              className="flex items-center gap-2 text-white/80 transition hover:text-solar-300"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-white/80 transition hover:text-solar-300"
            >
              {site.email}
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white/80 transition hover:text-solar-300"
            >
              Facebook
              <ArrowUpRight className="size-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-300",
          scrolled
            ? "border-line bg-white/85 shadow-[0_10px_30px_-24px_rgba(7,91,50,0.7)] backdrop-blur-xl"
            : "border-transparent bg-white/95 backdrop-blur",
        )}
      >
        <div className="container-page flex h-[72px] items-center justify-between gap-4">
          <Link
            href="/"
            aria-label={`${site.name} — home`}
            className="shrink-0 rounded-lg py-1"
          >
            {/* Emblem is hidden on the very smallest screens; the wordmark carries the brand. */}
            <span className="sm:hidden">
              <Logo size={34} priority showEmblem={false} />
            </span>
            <span className="hidden sm:inline-flex">
              <Logo size={40} priority />
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-active={isActive(link.href) ? "true" : "false"}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "nav-link text-[14px] font-medium transition-colors",
                  isActive(link.href)
                    ? "text-forest-700"
                    : "text-navy-700/70 hover:text-forest-700",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink
              href={whatsappLink(whatsappMessages.general)}
              variant="ghost"
              size="sm"
              aria-label="Chat with Palmtree on WhatsApp"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp
            </ButtonLink>
            <ButtonLink href="/contact#quote" size="sm">
              Get a Quote
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                aria-hidden="true"
              />
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Palmtree on WhatsApp"
              className="flex size-10 items-center justify-center rounded-full bg-[#25D366]/12 text-[#128C4B] transition hover:bg-[#25D366]/20"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex size-10 items-center justify-center rounded-full border border-forest-700/15 text-forest-800 transition hover:bg-forest-50"
            >
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          id="mobile-nav"
          className={cn(
            "overflow-hidden border-t border-line bg-white transition-[max-height,opacity] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
            open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav
            aria-label="Mobile"
            className="container-page flex flex-col gap-1 py-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium transition",
                  isActive(link.href)
                    ? "bg-forest-50 text-forest-800"
                    : "text-navy-700/80 hover:bg-mist",
                )}
              >
                {link.label}
                <ArrowUpRight className="size-4 opacity-40" aria-hidden="true" />
              </Link>
            ))}
            <div className="mt-3 grid gap-2.5 border-t border-line pt-4">
              <ButtonLink href="/contact#quote" size="md" className="w-full">
                Get a Free Quote
              </ButtonLink>
              <ButtonLink
                href={whatsappLink(whatsappMessages.general)}
                variant="whatsapp"
                size="md"
                className="w-full"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Chat on WhatsApp
              </ButtonLink>
            </div>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-2 flex items-center justify-center gap-2 py-2 text-sm font-medium text-forest-700"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call {site.phoneDisplay}
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
