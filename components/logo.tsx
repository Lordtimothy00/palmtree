import Image from "next/image";

/** Aspect ratio of public/brand/emblem.png (the near-square mark alone). */
export const EMBLEM_RATIO = 640 / 608;

/** Aspect ratio of public/brand/logo.png (the official horizontal lockup). */
export const LOCKUP_RATIO = 1100 / 320;

type LogoProps = {
  className?: string;
  /** "dark" for light backgrounds, "light" for dark backgrounds. */
  variant?: "dark" | "light";
  /** Height of the logo in px. */
  size?: number;
  showWordmark?: boolean;
  /** Hide the emblem and render the wordmark alone (very small viewports). */
  showEmblem?: boolean;
  priority?: boolean;
  /** Stack the wordmark under the emblem instead of beside it. */
  layout?: "inline" | "stacked";
};

/**
 * Brand lockup.
 *
 * On light surfaces this renders the company's official logo artwork exactly as
 * supplied — emblem plus the 3D PALMTREE / TECHNOLOGY SERVICES wordmark — so the
 * header matches the business' existing identity.
 *
 * The wordmark in that artwork is navy and white-backed, so it cannot be placed
 * on dark surfaces: it would disappear into the navy, and knocking the white out
 * leaves a halo. Dark surfaces therefore get the plain emblem plus the wordmark
 * rebuilt in live text, which reverses cleanly and stays sharp at any size.
 */
export function Logo({
  className = "",
  variant = "dark",
  size = 42,
  showWordmark = true,
  showEmblem = true,
  priority = false,
  layout = "inline",
}: LogoProps) {
  const isLight = variant === "light";

  // Official artwork on light backgrounds.
  if (!isLight && showEmblem && showWordmark && layout === "inline") {
    return (
      <Image
        src="/brand/logo.png"
        alt="Palmtree Technology Services"
        width={Math.round(size * LOCKUP_RATIO)}
        height={size}
        priority={priority}
        className={`shrink-0 object-contain ${className}`}
      />
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2.5 ${
        layout === "stacked" ? "flex-col gap-2" : ""
      } ${className}`}
    >
      {showEmblem && (
        <Image
          src="/brand/emblem.png"
          alt={showWordmark ? "" : "Palmtree Technology Services"}
          width={Math.round(size * EMBLEM_RATIO)}
          height={size}
          priority={priority}
          className="shrink-0 object-contain"
          aria-hidden={showWordmark ? true : undefined}
        />
      )}
      {showWordmark && (
        <span
          className={`flex flex-col justify-center leading-none ${
            layout === "stacked" ? "items-center" : ""
          }`}
        >
          <span
            className="font-display font-extrabold tracking-[-0.02em]"
            style={{ fontSize: Math.max(15, size * 0.42) }}
          >
            <span className={isLight ? "text-white" : "text-navy-700"}>PALM</span>
            <span className={isLight ? "text-forest-300" : "text-forest-700"}>
              TREE
            </span>
          </span>
          <span
            className={`mt-[3px] font-sans font-semibold uppercase ${
              isLight ? "text-white/70" : "text-navy-700/70"
            }`}
            style={{
              fontSize: Math.max(7.5, size * 0.185),
              letterSpacing: "0.11em",
            }}
          >
            Technology Services
          </span>
        </span>
      )}
    </span>
  );
}
