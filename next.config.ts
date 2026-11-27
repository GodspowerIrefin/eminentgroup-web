import type { NextConfig } from "next";

// The site is exported as static HTML (out/). Each page is plain HTML plus the design kit's
// scripts in public/assets; scripts/strip-next-runtime.mjs removes Next's client runtime after
// the build, since no page uses client React. Redirects from the old .html URLs live in vercel.json.
const nextConfig: NextConfig = {
  agentRules: false,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: { root: __dirname },
};

export default nextConfig;
