import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  turbopack: { root: __dirname },
  async redirects() {
    const map: Record<string, string> = {
      "/index.html": "/",
      "/About.html": "/about",
      "/Services.html": "/services",
      "/RegisteredNurse.html": "/services/registered-nurses",
      "/Employers.html": "/employers",
      "/JobSeekers.html": "/job-seekers",
      "/Resources.html": "/resources",
      "/Contact.html": "/contact",
      "/Referrals.html": "/referrals",
    };
    return Object.entries(map).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
