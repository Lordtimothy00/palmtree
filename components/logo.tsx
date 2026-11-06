import Image from "next/image";

type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
  /** Height of the lockup in px (icon + wordmark follow proportionally). */
  size?: number;
  showWordmark?: boolean;
  priority?: boolean;
};

/**
 * Brand lockup: palm + sun rising from a sun-disc, in a rounded square badge.
 * Variant "light" is for dark backgrounds.
 */
export function Logo({
  className = "",
  variant = "dark",
  size = 44,
  showWordmark = true,
  priority = false,
}: LogoProps) {
  const isLight = variant === "light";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className="relative shrink-0"
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <Image
          src={isLight ? "/brand/logo-mark-light.svg" : "/brand/logo-mark.svg"}
          alt=""
          width={size}
          height={size}
          priority={priority}
          unoptimized
          className="h-full w-full rounded-[26%]"
        />
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display font-semibold tracking-[-0.03em] ${
              isLight ? "text-white" : "text-navy-700"
            }`}
            style={{ fontSize: size * 0.42 }}
          >
            PALMTREE
          </span>
          <span
            className={`mt-1 font-sans font-medium uppercase tracking-[0.2em] ${
              isLight ? "text-white/60" : "text-forest-700/60"
            }`}
            style={{ fontSize: Math.max(7, size * 0.185) }}
          >
            Technology Services
          </span>
        </span>
      )}
    </span>
  );
}
