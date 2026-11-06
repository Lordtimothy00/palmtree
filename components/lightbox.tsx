"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/lib/data";

/**
 * Accessible full-screen lightbox: focus trap-ish, Esc to close,
 * arrow keys to navigate, restores focus to the trigger.
 */
export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: Project[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const next = useCallback(
    () => onIndexChange((index + 1) % items.length),
    [index, items.length, onIndexChange],
  );
  const prev = useCallback(
    () => onIndexChange((index - 1 + items.length) % items.length),
    [index, items.length, onIndexChange],
  );

  useEffect(() => {
    lastFocused.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Tab") {
        // Simple focus containment inside the dialog.
        const focusables = document.querySelectorAll<HTMLElement>(
          "[data-lightbox-focus]",
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      lastFocused.current?.focus?.();
    };
  }, [next, prev, onClose]);

  const project = items[index];
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Project image: ${project.title}`}
      className="fixed inset-0 z-[90] flex flex-col bg-navy-900/95 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/65">
          {index + 1} / {items.length}
        </p>
        <button
          ref={closeRef}
          data-lightbox-focus
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-3 pb-3 sm:px-6">
        <button
          data-lightbox-focus
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-1 z-10 flex size-11 items-center justify-center rounded-full border border-white/20 bg-navy-800/60 text-white transition hover:bg-white/15 sm:left-4"
        >
          <ChevronLeft className="size-6" aria-hidden="true" />
        </button>

        <figure className="flex max-h-full w-full max-w-5xl flex-col items-center">
          <div className="relative max-h-[68vh] w-full overflow-hidden rounded-2xl">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1600}
              height={1100}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="max-h-[68vh] w-full object-contain"
              priority
            />
          </div>
          <figcaption className="mt-5 max-w-2xl text-center">
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-solar-400">
              {project.category}
            </span>
            <h3 className="mt-1.5 font-display text-lg font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-[13px] leading-relaxed text-white/60">
              {project.caption}
            </p>
            <p className="mt-1 text-[12px] text-white/65">{project.location}</p>
          </figcaption>
        </figure>

        <button
          data-lightbox-focus
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-1 z-10 flex size-11 items-center justify-center rounded-full border border-white/20 bg-navy-800/60 text-white transition hover:bg-white/15 sm:right-4"
        >
          <ChevronRight className="size-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
