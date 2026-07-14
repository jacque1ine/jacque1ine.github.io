import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (no Node server at runtime).
  output: "export",
  // Served from the root of jacque1ine.github.io — no basePath needed.
  // Trailing slashes keep asset paths stable on Pages' static file server.
  trailingSlash: true,
  images: {
    // Pages can't run Next's image optimizer; we manage sizes ourselves.
    unoptimized: true,
  },
};

export default nextConfig;
