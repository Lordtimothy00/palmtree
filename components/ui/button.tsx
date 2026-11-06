import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp" | "outlineLight";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-60 active:scale-[0.985] whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-solar-400 text-forest-900 shadow-[0_10px_28px_-12px_rgba(253,203,5,0.85)] hover:bg-solar-300 hover:shadow-[0_16px_34px_-12px_rgba(253,203,5,0.95)] hover:-translate-y-0.5",
  secondary:
    "bg-forest-700 text-white shadow-soft hover:bg-forest-600 hover:-translate-y-0.5",
  ghost:
    "border border-forest-700/20 bg-white/70 text-forest-800 backdrop-blur hover:border-forest-700/40 hover:bg-white hover:-translate-y-0.5",
  outlineLight:
    "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:border-white/60 hover:bg-white/20 hover:-translate-y-0.5",
  whatsapp:
    "bg-[#25D366] text-[#04301a] shadow-[0_10px_28px_-12px_rgba(37,211,102,0.85)] hover:bg-[#3ae07a] hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-[13px]",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-7 text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & ComponentProps<"button">) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  ...props
}: CommonProps & { href: string; external?: boolean } & Omit<
    ComponentProps<"a">,
    "href"
  >) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...props}>
      {children}
    </Link>
  );
}
