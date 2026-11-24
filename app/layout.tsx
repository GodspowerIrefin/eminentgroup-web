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
  themeColor: "#f4f1ea",
};

const ROOT = `:root {
  --p-bg: #f4f1ea; --p-surface: #ebe6db; --p-ink: #101225; --p-muted: #5b5d6b;
  --p-accent: #2338d1; --p-accent-ink: #ffffff; --p-action: #2338d1; --p-action-ink: #ffffff;
  --p-inv-bg: #0b1030; --p-inv-surface: #151b42; --p-inv-ink: #f4f1ea; --p-inv-muted: #a7acc6;
  --p-inv-accent: #f4f1ea; --p-inv-accent-ink: #0b1030; --p-inv-action: #f4f1ea; --p-inv-action-ink: #0b1030;
  --font-display: "Gloock", Georgia, "Times New Roman", serif;
  --font-text: "Public Sans", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --display-weight: 400;
  --display-tracking: -0.015em;
  --display-tracking-xl: -0.03em;
}`;

// the hero's entrance and the moments' guard, set before the first paint (motion.md, moments.md)
const ENTER =
  "document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700)";
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
        <link href="https://fonts.googleapis.com/css2?family=Gloock&family=IBM+Plex+Mono:wght@400;500&family=Public+Sans:wght@400..700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <style dangerouslySetInnerHTML={{ __html: ROOT }} />
        <link rel="stylesheet" href="/site.css" />
        <link rel="stylesheet" href="/eo.css" />
        <script dangerouslySetInnerHTML={{ __html: ENTER }} />
        <script dangerouslySetInnerHTML={{ __html: MOMENTS }} />
        <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
      </head>
      <body>
        {children}
        <CookieConsent />
        <script type="module" src="/assets/system.js"></script>
        <script type="module" src="/assets/motion/motion.js"></script>
        <script type="module" src="/assets/layout/layout.js"></script>
      </body>
    </html>
  );
}
