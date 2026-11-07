import Image from "next/image";

/** Aspect ratio of public/brand/emblem.png (a near-square mark). */
export const EMBLEM_RATIO = 640 / 608;

type LogoProps = {
  className?: string;
  /** "dark" for light backgrounds, "light" for dark backgrounds. */
  variant?: "dark" | "light";
  /** Height of the emblem in px. */
  size?: number;
  showWordmark?: boolean;
  /** Hide the emblem and render the wordmark alone (very small viewports). */
  showEmblem?: boolean;
  priority?: boolean;
  /** Stack the wordmark under the emblem instead of beside it. */
  layout?: "inline" | "stacked";
};

/**
 * Brand lockup: the company's gear-and-palm emblem beside the PALM/TREE wordmark.
 *
 * The emblem is the authentic artwork (extracted from the supplied master logo,
 * now at /brand/emblem.png) so the identity matches the business' existing
 * material. The wordmark is set in live text rather than shipped as a raster so
 * it stays sharp at every size, is selectable, and is readable to search engines
 * and screen readers. Colours follow the original: PALM in navy, TREE in green.
 */
export function Logo({
  className = "",
  variant = "dark",
  size = 44,
  showWordmark = true,
  showEmblem = true,
  priority = false,
  layout = "inline",
}: LogoProps) {
  const isLight = variant === "light";

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
