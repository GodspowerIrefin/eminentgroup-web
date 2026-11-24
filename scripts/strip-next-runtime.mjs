// After `next build` (output: "export"), every page in out/ is complete HTML. No page uses client
// React, and the design kit's scripts (public/assets) change the DOM as they run (the nav sheet, the
// moments), which hydration would fight. So this removes Next's client runtime from each page:
// its <script> tags, the inline RSC payload and the chunk preloads. The CSS links stay.
// It also writes the build's deal as a comment at the top of <body> (the design kit asks for it).
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = fileURLToPath(new URL("../out/", import.meta.url));

const DEAL = `<!-- type: service (site-kind other)
     deal: hero photo (home, job seekers, about), split (inner pages); nav-split; close-type; footer-dark;
     rhythm space; buttons solid; mark: the client's EO logo; palette white-link-blue; type outfit; radius soft
     moments: picture-develops (#roles photograph), word-highlight (#checks statement) -->`;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) { if (entry.name !== "assets") yield* walk(path); }
    else if (entry.name.endsWith(".html")) yield path;
  }
}

let pages = 0;
for await (const file of walk(OUT)) {
  let html = await readFile(file, "utf8");
  html = html
    // Next's own scripts: src under /_next/, the inline payload, and the noModule polyfill
    .replace(/<script[^>]*src="\/_next\/[^"]*"[^>]*><\/script>/g, "")
    .replace(/<script>\(self\.__next_f[\s\S]*?<\/script>/g, "")
    .replace(/<script>self\.__next_f[\s\S]*?<\/script>/g, "")
    .replace(/<script[^>]*noModule[^>]*><\/script>/gi, "")
    .replace(/<link[^>]*rel="preload"[^>]*as="script"[^>]*\/?>/g, "")
    .replace(/<link[^>]*as="script"[^>]*rel="preload"[^>]*\/?>/g, "")
    .replace(/<link[^>]*rel="modulepreload"[^>]*href="\/_next\/[^"]*"[^>]*\/?>/g, "")
    // React preloads every eager image; keep only the hero photograph's (the one with a srcset)
    .replace(/<link rel="preload"(?![^>]*imageSrcSet)[^>]*as="image"[^>]*\/?>/g, "")
    // React's hidden boundary markers and the empty template Next adds for not-found
    .replace(/<!--\$!?-->|<!--\/\$-->/g, "");
  if (!html.includes("<!-- type: service")) html = html.replace(/<body([^>]*)>/, `<body$1>\n${DEAL}\n`);
  await writeFile(file, html);
  pages++;
}
console.log(`strip-next-runtime: ${pages} pages`);
