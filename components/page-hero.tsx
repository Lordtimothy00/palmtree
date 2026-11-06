import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  breadcrumb,
  children,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image: string;
  imageAlt: string;
  breadcrumb: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-700">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-900/90 via-transparent to-navy-900/30" />

      <div
        className={cn(
          "container-page relative pb-14 pt-14 md:pb-18 md:pt-20",
          align === "center" && "text-center",
        )}
      >
        <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1.5 text-[11.5px] text-white/60", align === "center" && "justify-center")}>
          <Link href="/" className="transition hover:text-solar-300">
            Home
          </Link>
          <ChevronRight className="size-3" aria-hidden="true" />
          <span className="text-white/75">{breadcrumb}</span>
        </nav>

        <p className={cn("mt-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-solar-300", align === "center" && "justify-center")}>
          <span className="size-1.5 rounded-full bg-solar-400" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1
          className={cn(
            "mt-4 max-w-3xl text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white",
            align === "center" && "mx-auto",
          )}
        >
          {title}
        </h1>
        {intro && (
          <p className={cn("mt-5 max-w-2xl text-[14.5px] leading-relaxed text-white/70 md:text-[16px]", align === "center" && "mx-auto")}>
            {intro}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
