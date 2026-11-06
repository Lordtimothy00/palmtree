import type { SVGProps } from "react";

/** Brand glyphs are not part of lucide v1, so they live here as inline SVGs. */
export function FacebookIcon({
  className = "size-4",
  ...props
}: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.87.24-1.46 1.49-1.46H16.6V4.45A20.9 20.9 0 0 0 14.3 4.3c-2.28 0-3.84 1.39-3.84 3.95V10.5H7.9v3h2.56V21h3.04Z" />
    </svg>
  );
}

export function WhatsAppIcon({
  className = "size-4",
  ...props
}: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.86.5 3.6 1.4 5.1L2 22l5.2-1.55a9.8 9.8 0 0 0 4.84 1.27h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2Zm5.75 13.9c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.03.24-3.47-.72-2.94-1.16-4.8-4.2-4.95-4.4-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.4.26-.3.58-.37.77-.37l.56.01c.18 0 .42-.07.65.5.24.58.82 2 .9 2.14.07.15.12.32.02.51-.1.2-.15.32-.3.5l-.44.5c-.15.15-.3.32-.13.62.17.3.75 1.24 1.6 2 1.1.98 2.03 1.29 2.32 1.43.3.15.47.13.64-.08.17-.2.73-.85.93-1.14.2-.29.4-.24.67-.15.27.1 1.7.8 1.99.95.29.15.48.22.55.34.07.13.07.75-.17 1.43Z" />
    </svg>
  );
}
