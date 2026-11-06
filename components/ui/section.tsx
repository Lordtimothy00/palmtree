import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em]",
        tone === "dark"
          ? "border-forest-700/15 bg-forest-50 text-forest-700"
          : "border-white/20 bg-white/10 text-solar-300 backdrop-blur",
        className,
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          tone === "dark" ? "bg-solar-400" : "bg-solar-400",
        )}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "center" && "mx-auto max-w-2xl",
        className,
      )}
    >
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "text-balance text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.08] font-semibold",
          tone === "light" ? "text-white" : "text-navy-700",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "max-w-2xl text-[15px] leading-relaxed md:text-base",
            tone === "light" ? "text-white/70" : "text-navy-700/70",
          )}
        >
          {intro}
        </p>
      )}
      {children}
    </div>
  );
}

export function Rule({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <div
      className={cn(
        "h-px w-full",
        tone === "dark"
          ? "bg-gradient-to-r from-forest-700/20 via-forest-700/10 to-transparent"
          : "bg-gradient-to-r from-white/25 via-white/10 to-transparent",
      )}
    />
  );
}
