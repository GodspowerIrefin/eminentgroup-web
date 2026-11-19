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
build, because no page uses client React. Internal links are plain `<a>` tags (full page loads).
Redirects from the old `.html` URLs are in `vercel.json`.

## How the pages are drawn

The layout, type, buttons, forms, navigation sheet and motion come from the design kit in
`public/assets/` (copied unchanged from the `design-taste-frontend` skill). Do not edit those files;
page-specific CSS lives in `public/site.css`. The palette and font are the `:root` block in
`app/layout.tsx`.

Sections after the hero are as tall as their content (`public/site.css`, "spacing").

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

- `public/assets/img/`: four frames by Shixart1985 from Wikimedia Commons (CC BY 2.0, credited in
  the footer).
- `public/images/services/` and `public/images/settings/`: Pexels photographs (Pexels license).
  The `-400` and `-600` files are smaller copies for phones.
