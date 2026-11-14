import type { NextConfig } from "next";

/**
 * Origins allowed to request Next.js dev resources (HMR, dev assets).
 *
 * The hosted preview embeds this app under a per-sandbox host such as
 * `https://3000-abc123.e2b.app`. Without these entries Next.js blocks the
 * preview host from fetching /_next/hmr, which breaks hot reload and leaves
 * the preview stuck.
 */
const devOrigins = [
  "*.e2b.app",
  "localhost:3000",
  "127.0.0.1:3000",
  ...(process.env.ALLOWED_DEV_ORIGINS?.split(",").map((o) => o.trim()) ?? []),
].filter(Boolean);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  allowedDevOrigins: devOrigins,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    // Lithium and tubular batteries were separate product cards. They are now
    // two of the three types on /products/batteries, so the old URLs are
    // permanent redirects rather than 404s — they have been shared and indexed.
    return [
      {
        source: "/products/lithium-batteries",
        destination: "/products/batteries",
        permanent: true,
      },
      {
        source: "/products/deep-cycle-batteries",
        destination: "/products/batteries",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // NOTE: X-Frame-Options is intentionally omitted. The hosted preview
          // renders this site inside an iframe on a different origin, and
          // SAMEORIGIN/DENY would block the preview from displaying at all.
          // Add `frame-ancestors` via CSP if framing must be restricted later.
        ],
      },
    ];
  },
};

export default nextConfig;
