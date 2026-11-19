import type { Metadata, Viewport } from "next";
import { pages, site } from "@/content/content";
import CookieConsent from "@/components/CookieConsent";

// The design kit (public/assets, copied unchanged from the design-taste-frontend skill) draws
// every page: system.css and layout.css for the grid, type and sections, motion.css for hover and
// press, system.js for the nav sheet, forms and moments. site.css holds the little page CSS the
// kit asks for. The :root block is the dealt palette and type, as start.mjs printed it.

export const metadata: Metadata = {
  title: {
    default: pages.layout.title,
    template: pages.layout.titleTemplate,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: pages.layout.title,
    description: pages.layout.ogDescription,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

const ROOT = `:root {
  --p-bg: #ffffff; --p-surface: #f4f4f4; --p-ink: #111111; --p-muted: #6b6b6b;
  --p-accent: #1a4be0; --p-accent-ink: #ffffff; --p-action: #1a4be0; --p-action-ink: #ffffff;
  --p-inv-bg: #111111; --p-inv-surface: #1e1e1e; --p-inv-ink: #ffffff; --p-inv-muted: #9a9a9a;
  --p-inv-accent: #ffffff; --p-inv-accent-ink: #111111; --p-inv-action: #ffffff; --p-inv-action-ink: #111111;
  --font-display: "Fraunces", Georgia, "Times New Roman", serif;
  --font-text: "Outfit", system-ui, sans-serif;
  --display-weight: 360;
  --display-tracking: -0.02em;
  --display-tracking-xl: -0.04em;
}`;

// the hero's entrance and the moments' guard, set before the first paint (motion.md, moments.md)
const ENTER =
  "document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700)";
// scroll reveals (public/reveal.js): hide only when motion is allowed and the observer exists; the timer
// shows everything if reveal.js never runs
const REVEAL =
  "if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('rv');setTimeout(()=>{if(!window.__rvReady)document.documentElement.classList.add('rv-done')},4000)}";
const MOMENTS =
  "document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500)";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-type="service" data-radius="soft" data-buttons="solid" data-motion="">
      <head>
        <meta name="site-kind" content="other" />
        <meta name="page-type" content="service" />
        <meta property="og:image" content="/share.jpg" />
        {/* <link rel="canonical" href="https://<the client's domain>/" /> once the domain is confirmed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@72,360&family=Outfit:wght@400..700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <style dangerouslySetInnerHTML={{ __html: ROOT }} />
        <link rel="stylesheet" href="/site.css" />
        <script dangerouslySetInnerHTML={{ __html: ENTER }} />
        <script dangerouslySetInnerHTML={{ __html: MOMENTS }} />
        <script dangerouslySetInnerHTML={{ __html: REVEAL }} />
        <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
      </head>
      <body>
        {children}
        <CookieConsent />
        <script type="module" src="/assets/system.js"></script>
        <script type="module" src="/assets/motion/motion.js"></script>
        <script type="module" src="/assets/layout/layout.js"></script>
        <script src="/reveal.js" defer></script>
      </body>
    </html>
  );
}
