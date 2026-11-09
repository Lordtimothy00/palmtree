"use client";

import { useCallback, useEffect, useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui/button";
import { navLinks, site, whatsappLink, whatsappMessages } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Escape dismisses the mobile sheet. The sheet is part of the page flow, not
  // an overlay, so body scroll is deliberately left alone — locking it would
  // trap anyone on a short screen who opened the menu by accident.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-navy-700/10 bg-white/95 backdrop-blur-md"
          : "bg-white"
      }`}
    >
      <div className="container-page flex h-[76px] items-center justify-between gap-4 md:h-[92px]">
        <a
          href="#home"
          aria-label={`${site.name} — back to top`}
          className="shrink-0 rounded-lg py-1"
          onClick={close}
        >
          {/* The tall lockup and the taller header row switch on together at md,
              so the logo never crowds a 76px row. */}
          <span className="md:hidden">
            <Logo size={40} priority />
          </span>
          <span className="hidden md:inline-flex">
            <Logo size={58} priority />
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-lg px-3.5 py-2 text-[14px] font-medium transition-colors ${
                  isActive
                    ? "text-forest-700"
                    : "text-navy-700/75 hover:text-forest-700"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-solar-400 transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={whatsappLink(whatsappMessages.quote)}
            variant="whatsapp"
            size="md"
            className="hidden sm:inline-flex"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Get a Quote
          </ButtonLink>
          <a
            href={`tel:${site.phoneTel}`}
            aria-label={`Call ${site.phoneDisplay}`}
            className="flex size-10 items-center justify-center rounded-xl border border-navy-700/12 text-navy-700 transition hover:border-forest-700/30 hover:text-forest-700 sm:hidden"
          >
            <Phone className="size-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center rounded-xl border border-navy-700/12 text-navy-700 transition hover:border-forest-700/30 hover:text-forest-700 lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-navy-700/10 bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="container-page flex flex-col py-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="rounded-xl px-3 py-3.5 text-[15px] font-medium text-navy-700 transition hover:bg-mist hover:text-forest-700"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2 pb-2">
            <ButtonLink
              href={whatsappLink(whatsappMessages.quote)}
              variant="whatsapp"
              size="md"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp
            </ButtonLink>
            <ButtonLink href={`tel:${site.phoneTel}`} variant="outline" size="md">
              <Phone className="size-4" aria-hidden="true" />
              Call Us
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
