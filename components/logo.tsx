import Image from "next/image";

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
 * Brand lockup: the company's gear-and-palm emblem above/beside the
 * PALM/TREE wordmark.
 *
 * The emblem is the authentic artwork (extracted from the supplied logo file,
 * now at /brand/emblem.png) so the identity matches the business' existing
 * material. Wordmark colours follow the original: PALM in navy, TREE in green.
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
  const emblemWidth = Math.round((size * 822) / 479); // source aspect ratio

  return (
    <span
      className={`inline-flex items-center gap-2.5 ${
        layout === "stacked" ? "flex-col gap-1.5" : ""
      } ${className}`}
    >
      {showEmblem && (
      <Image
        src="/brand/emblem.png"
        alt={showWordmark ? "" : "Palmtree Technology Services"}
        width={emblemWidth}
        height={size}
        priority={priority}
        className="shrink-0 object-contain"
        style={{ height: "auto", width: "auto", maxHeight: size }}
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
            style={{ fontSize: Math.max(14, size * 0.34) }}
          >
            <span className={isLight ? "text-white" : "text-navy-700"}>PALM</span>
            <span className={isLight ? "text-forest-300" : "text-forest-700"}>
              TREE
            </span>
          </span>
          <span
            className={`mt-[3px] font-sans font-semibold uppercase tracking-[0.14em] ${
              isLight ? "text-white/70" : "text-navy-700/65"
            }`}
            style={{ fontSize: Math.max(6.5, size * 0.155) }}
          >
            Technology Services
          </span>
        </span>
      )}
    </span>
  );
}
