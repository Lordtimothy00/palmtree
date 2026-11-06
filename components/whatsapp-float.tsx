"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { site, whatsappLink, whatsappMessages } from "@/lib/site";

export function WhatsAppFloat() {
  const [showTip, setShowTip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowTip(true), 2600);
    return () => clearTimeout(t);
  }, []);

  const open = showTip && !dismissed;

  return (
    <div className="fixed bottom-5 right-4 z-40 flex items-end gap-2 sm:bottom-6 sm:right-6">
      {open && (
        <div className="relative mb-1 max-w-[218px] rounded-2xl rounded-br-md border border-line bg-white p-3.5 pr-8 shadow-lift">
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss WhatsApp prompt"
            className="absolute right-1.5 top-1.5 flex size-6 items-center justify-center rounded-full text-navy-700/40 transition hover:bg-mist hover:text-navy-700"
          >
            <X className="size-3.5" aria-hidden="true" />
          </button>
          <p className="text-[12.5px] font-semibold text-navy-700">
            Need a solar quote?
          </p>
          <p className="mt-0.5 text-[12px] leading-snug text-navy-700/60">
            Chat with our team on WhatsApp — we reply during business hours.
          </p>
        </div>
      )}
      <a
        href={whatsappLink(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${site.name} on WhatsApp on ${site.phoneDisplay}`}
        className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_34px_-10px_rgba(37,211,102,0.85)] transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        <span
          className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.8s] motion-reduce:hidden"
          aria-hidden="true"
        />
        <MessageCircle className="relative size-6" aria-hidden="true" />
      </a>
    </div>
  );
}
