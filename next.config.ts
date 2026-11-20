import type { NextConfig } from "next";

const isStaticExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  // `npm run build:static` produces a fully static site for GitHub Pages.
  // Partial prefetching (PPR) is not compatible with `output: "export"`.
  ...(isStaticExport
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        cacheComponents: false,
        partialPrefetching: false,
      }
    : {
        cacheComponents: true,
        partialPrefetching: true,
      }),

  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
