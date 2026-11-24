# eminentgroup-web

Website for Eminent One LLC, a licensed Maryland healthcare staffing agency (Maryland Health Care Staff Agency license HCSA-01609).

Built with Next.js and TypeScript, exported as static HTML.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # next build (static export to out/), then scripts/strip-next-runtime.mjs
npm start          # serves out/ locally
```

Every page is plain HTML: `scripts/strip-next-runtime.mjs` removes Next's client JavaScript after the
build, because no page uses client React. (It reads `out/` with `fileURLToPath`, so a project path
with spaces works.) Internal links are plain `<a>` tags (full page loads).
Redirects from the old `.html` URLs are in `vercel.json`.

## How the pages are drawn

The design system is **"The Shift Record"**, described in full in `DESIGN.md`: paper and night-navy
grounds, the EO logo's cobalt as the one accent, Gloock headlines set very large, Public Sans for
reading, IBM Plex Mono for labels, and every photograph in a frame cut from the EO hexagon.

Styles load in this order (`app/layout.tsx`):

1. `public/assets/`: the design kit, copied unchanged from the `design-taste-frontend` skill
   (`system.css` for the grid, type, sections and forms; `ui/cards.css`; `motion/motion.css` for
   hover and press; `layout/layout.css` for the heroes). Do not edit these files.
2. The `:root` block in `app/layout.tsx`: the palette and the three fonts.
3. `public/site.css`: the older page CSS (logo sizing, forms panel, cookie banner, tablet fixes).
4. `public/eo.css`: the Shift Record layer. Grounds (`.tone-paper`, `.tone-night`, `.tone-cobalt`),
   type, buttons, the chamfered frame (`.eo-cut`), every hero, and the home page's sections. New
   design work goes here.

Scripts: `assets/system.js` runs the nav sheet, the forms and the `data-peek` lists (a row swaps a
photograph or a block of text); `assets/motion/motion.js` the hover layer; `assets/moments/` the two
dealt moments (picture-develops, word-highlight). `public/reveal.js` (scroll reveals) is kept but no
longer loaded.

### Components

- `components/Header.tsx`: the fixed header (the kit's nav--centre): the logo on the left, the four
  words centred, "Apply for work" and "Request staff" on the right. Below 1024px: logo, main
  button, menu.
- `components/Heroes.tsx`: `HeroDark` (home: night ground, the photograph on the right) and `HeroSplit` / `HeroPhoto` (inner pages: both render the band hero, the headline across
  the page with the photograph as a wide band under or over it). `HeroCover` and `HeroEditorial`
  are earlier versions, no longer used.
- `components/Blocks.tsx`: `Tickets` (the open jobs as shift tickets), `JobCards` (the same jobs as
  cards, on Careers), `RoleWall` (the role codes as a grid, no longer used on the home page), `Faq`
  and `Form` (the booking-form recipe; opens the visitor's mail app).
- `components/Closing.tsx`: the close on every page: the call, its line and the button, then the
  footer directory as on the agency's original site (four link groups and "Get in touch" with quick
  links), the logo with its tagline, and the licence and copyright lines.

### The home page

`app/page.tsx` follows the client's reference structure, one full screen per section on a desktop:
a dark hero; `#settings`, the facility list beside a light panel; `#checks`, the
credential statement on the cobalt band beside a photograph; `#roles`, the role cards beside a
photograph; `#steps`, dark rows; `#openings`, the shift
tickets beside two photographs; then the close. Splits put their words on columns 1-7 and their
picture on 8-12.

### Design checks

The page was built and checked with the `design-taste-frontend` skill. Its finish gate runs on the
built home page:

```bash
npm run build
node .claude/skills/design-taste-frontend/scripts/gate.mjs --start out/index.html --root out --kind service --category "healthcare staffing" --primary "Request staff"
node .claude/skills/design-taste-frontend/scripts/gate.mjs out/index.html
```

The five waivers in `.taste-skill/waivers.json` cover the office's real phone number (two
findings), the cobalt line of the hero headline, the client's own headings ("The roles we place"
and the locked step titles) and the large credential sentence read as a heading. Each has its reason.

## Content

Every word on the site lives in `content/content.ts`: headings, paragraphs, buttons, links,
navigation, footer, form labels and error messages, screen-reader labels, page titles and
descriptions, image alt text, and the facts they are built from (phone, address, license, open
jobs, roles). Components and pages hold only markup, layout and behaviour and read their words
from that file, so copy changes happen there and design changes happen everywhere else.

A paragraph that contains a link is written as an array of strings and `{ text, href }` parts
(rendered by `components/Rich.tsx`).

The forms open the visitor's email app, addressed to the office. They are not connected to a form
service yet.

## Photographs

All photographs are stand-ins until the agency's own are shot:

- `public/assets/img/`: four frames by Shixart1985 from Wikimedia Commons (CC BY 2.0, credited on
  the /credits/ page; the footer link to it was removed at the client's request).
- `public/images/services/` and `public/images/settings/`: Pexels photographs (Pexels license).
  The `-400` and `-600` files are smaller copies for phones.
