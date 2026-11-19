---
name: Eminent One
description: Editorial design system for a licensed Maryland healthcare staffing agency
colors:
  credential-blue: "#1a4be0"
  credential-blue-deep: "color-mix(in oklab, #1a4be0 86%, #16150f)"
  paper: "#f5f2eb"
  photo-mat: "#e6e0d3"
  ink: "#16150f"
  ink-soft: "#3d3a33"
  hairline: "rgb(22 21 15 / 0.18)"
  night: "#111111"
  forest: "#12332b"
  highlight-on-dark: "#a9bfff"
  on-accent: "#ffffff"
  error: "color-mix(in oklab, #d92d20 72%, #16150f)"
typography:
  display:
    fontFamily: "Fraunces, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(56px, 5.6vw + 12px, 96px)"
    fontWeight: 360
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontVariation: "'opsz' 72"
  headline:
    fontFamily: "Fraunces, Georgia, 'Times New Roman', serif"
    fontSize: "64px"
    fontWeight: 360
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "'opsz' 72"
  title:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.08em"
rounded:
  control: "8px"
  panel: "12px"
  card: "20px"
  mask-phone: "120px"
  mask: "180px"
spacing:
  s-1: "4px"
  s-2: "8px"
  s-3: "12px"
  s-4: "16px"
  s-5: "24px"
  s-6: "32px"
  s-7: "48px"
  s-8: "64px"
  s-9: "96px"
  s-10: "128px"
components:
  button-primary:
    backgroundColor: "{colors.credential-blue}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.credential-blue-deep}"
    textColor: "{colors.on-accent}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "44px"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 12px"
    height: "44px"
  hero-photo-mask:
    backgroundColor: "{colors.photo-mat}"
    rounded: "{rounded.mask}"
  closing-band:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-accent}"
    padding: "72px 0 40px"
---

# Design System: Eminent One

## Overview

**Creative North Star: "The Consultancy Brief"**

The site should read like a premium firm's printed brief: a serif headline set large on warm paper, a thin rule, a few plain sentences, one clear action, and a photograph given real room. Confidence comes from restraint and from facts the reader can check (the license number, the credential checks, the named owners), never from decoration. The visitor is usually a facility manager filling a gap in a schedule, so the page is calm, quick to scan and certain about what to do next.

Density is low and deliberate. Generous margins, asymmetric halves and long horizontal hairlines do the structuring that boxes and cards did before. Rhythm across a page comes from alternating warm paper sections with deep near-black ones, and from photography cropped under large rounded masks. Motion is measured: headlines rise line by line, photographs settle into place, buttons answer in about 200ms, and nothing moves for its own sake.

This system replaces the site's original look (pure white ground, Outfit headlines, kit cards on grey). The home hero is the first section built in it and is the reference for every section that follows; the rest of the site is legacy until it is moved over. The words never change: every visible string lives in `content/content.ts` and is locked by `content-lock.md`.

**Key Characteristics:**
- Warm paper ground (no pure white pages), alternating with near-black sections for rhythm.
- Fraunces display headlines at large sizes against an Outfit body: big size contrast.
- Credential Blue as the only accent, on actions and the focus ring.
- Thin hairline dividers and small uppercase labels instead of boxes.
- Full-bleed photographs under large rounded masks.
- Transform-and-opacity motion only, still under reduced motion.

## Colors

A warm, papery neutral world with one assured blue for action.

### Primary
- **Credential Blue** (#1a4be0): the filled primary button ("Request staff", "Apply for work", the form submits), the keyboard focus ring and any highlighted word. It deepens toward the ink on hover. Its scarcity is the point: on any screen it marks where the visitor acts.

### Neutral
- **Paper** (#f5f2eb): the ground of every light section and the face of secondary buttons and fields. Warm off-white, never pure white.
- **Photo Mat** (#e6e0d3): the colour a photograph's mask shows before the image arrives; also a quiet tonal step on paper.
- **Ink** (#16150f): headlines and body text on paper (about 15:1 on Paper).
- **Soft Ink** (#3d3a33): lead paragraphs under a headline (about 9.5:1 on Paper). Never lighter than this for text people read.
- **Hairline** (rgb(22 21 15 / 0.18)): the thin dividers and rules; the one line weight (1px).
- **Night** (#111111 for the footer, #121210 for full sections): the near-black deep sections: the settings section and the footer.
- **Forest** (#12332b): the deep green sections (the roles and the credential statement), with Paper text (about 12:1). Forest and Night alternate with Paper down the page.
- **Highlight on Dark** (#a9bfff): a light tint of Credential Blue, used only on Forest and Night for the highlighted word and the selected row, where the full blue would be too dark to read.
- **On Accent** (#ffffff): text on Credential Blue and on Night. White is a text colour here, never a page ground.

### Named Rules
**The One Accent Rule.** Credential Blue appears only where the visitor acts or where one word is highlighted. No blue backgrounds, panels, icons or decorative strokes.

**The Paper, Not White Rule.** No section ground is pure white (#ffffff). Light sections are Paper; deep sections are Night.

## Typography

**Display Font:** Fraunces (with Georgia, Times New Roman, serif)
**Body Font:** Outfit (with system-ui, sans-serif)

**Character:** A soft, high-contrast serif with optical sizing, set large and slightly tight, against a clean geometric sans for everything a visitor reads or clicks. The serif carries the editorial voice; the sans keeps forms, buttons and facts plain and legible.

### Hierarchy
- **Display** (Fraunces 360, clamp(56px, 5.6vw + 12px, 96px), line-height 1, optical size held at 72): page heroes only. Set line by line, each line its own reveal mask. On tablet and phone it steps down to clamp(42px, 6vw + 18px, 72px).
- **Headline** (Fraunces 360, up to 64px on desktop, line-height 1.05): section headings, following the brief's 64 to 96px headline range. Not yet built; sections still use the legacy Outfit headline.
- **Title** (Outfit 500, 20px, line-height 1.3): card and list-item titles, form section titles.
- **Body** (Outfit 400, 18px desktop and 17px on phones, line-height 1.6, at most 44 to 65 characters a line): leads, paragraphs and answers.
- **Label** (Outfit 500, 13px, letter-spacing 0.08em, uppercase): small section labels and field captions above a headline or a rule.

### Named Rules
**The Size Contrast Rule.** A headline is at least three times its body text on desktop (96px over 18px in the hero). Middle sizes between 24px and 48px are avoided; contrast comes from the jump, not from many steps.

**The Optical Size Rule.** Fraunces keeps its optical size at 72 even at 96px, so its hairlines stay sturdy enough for a healthcare business rather than turning into fashion-magazine Didone.

## Layout

A 12-column grid inside a centred container at most 1280px wide, with a 24px gutter (12px on phones) and side margins of 80px from 1024px up, 48px on tablets and 24px on phones. The fixed header is 72px tall (56px on phones).

Compositions are asymmetric halves. The text takes the left half (six columns) and a photograph takes the right half, bled to the viewport's right edge rather than stopped at the container. Inside a text column, the headline sits at the top and the lead and actions sit under a hairline near the column's foot, leaving deliberate open space between them.

Sections are as tall as their content. Light sections are padded 72px top and bottom on desktop, 56px on tablets and 44px on phones; the hero alone fills the first screen. Below 1024px a split stacks: the photograph goes across the top under the header (about 42% of the screen's height, 46% on phones), and the words follow beneath it.

Breakpoints: 640px (phone to tablet), 1024px (tablet to desktop), 1280px (wide).

### Named Rules
**The Half and Bleed Rule.** Pair a text half with a photograph that runs to the screen edge. Never centre a short block of text in an empty screen.

## Elevation & Depth

The system is flat. Depth comes from tone (Paper against Night, Photo Mat behind a photograph) and from the masks photographs sit in, not from shadows. Surfaces carry no drop shadow at rest. The brief adds a subtle film-grain texture on deep sections only; it is not yet built.

### Named Rules
**The Flat Paper Rule.** No box-shadow on cards, panels or buttons in new sections. Separation is a hairline, a change of ground, or space.

## Shapes

Controls have gently rounded corners (8px) on buttons and fields. Photographs take large, single-corner masks: the hero image's top-left corner is rounded at up to 180px on desktop (scaling with the viewport from 96px), and its bottom-left at up to 120px on phones, where it spans the full width. Legacy cards use 20px corners and panels 12px. Dividers are straight 1px hairlines. Shapes stay geometric and quiet: no pills except where a control already is one, no blobs, no angled cuts.

### Named Rules
**The One Big Corner Rule.** A masked photograph rounds one corner generously, the corner that faces the text; the other three stay square to the screen edges.

## Components

### Buttons
Sure and plain: a filled blue action beside a quiet outlined one.
- **Shape:** gently rounded (8px), 44px tall, 24px side padding, Outfit 500 at 16px.
- **Primary:** Credential Blue with white text, carrying a small drawn arrow as its last element.
- **Hover / Focus:** the fill deepens toward the ink and the arrow slides a few pixels right (about 150 to 200ms); a 2px Credential Blue focus ring offset by 2px appears at once on keyboard focus. A press nudges it down slightly.
- **Secondary:** Paper face, ink text and a 1px ink outline at 20% strength; on hover the face darkens a step and the outline firms. On phones the secondary in a hero becomes an underlined text link under the full-width primary.

### Inputs / Fields
- **Style:** 44px tall, a 1px ink outline at 20% strength, 8px corners, 16px Outfit text, a visible label above in Outfit 500 at 14px.
- **Focus:** the Credential Blue focus ring.
- **Error:** a 2px Error-coloured border and the reason written under the field in Error colour; the first failed field takes focus.

### Navigation
A fixed 72px bar (56px on phones): four words on the left ("Services" opens a full-width panel of link columns), the EO logo and name centred, the secondary action as a plain word and the primary as a button on the right. On phones it collapses to the logo, the primary button and a menu button opening a full-screen sheet. It is still on a white ground (legacy); under this system it moves to Paper.

### Editorial Hero (signature)
The reference section for the whole system. Paper ground; the Display headline on the left half, revealed line by line; a hairline, then the lead in Soft Ink and the two buttons; the photograph on the right half, bled to the edge under the one big corner, settling in from 1.08 scale. Motion: each headline line slides up from behind its mask over 850ms (cubic-bezier(0.16, 0.84, 0.24, 1)), starting 150ms after load and 120ms apart; the photograph fades and settles over 1200ms; the lead and buttons rise 16px and fade in over 700ms at 560ms. Under reduced motion all of it is simply in place.

### Closing Band and Footer
The page ends on Night: the closing headline, one line and the large primary action, then the link columns, the contact lines and the legal line in white and muted grey. It is the deep section that answers the paper sections above it.

## Do's and Don'ts

### Do:
- **Do** set every light section on Paper (#f5f2eb) and every deep section on Night (#111111).
- **Do** keep Credential Blue (#1a4be0) for actions, the focus ring and one highlighted word, nothing else.
- **Do** set headlines in Fraunces 360 with its optical size held at 72, and body text in Outfit at 17 to 18px.
- **Do** separate content with 1px hairlines (rgb(22 21 15 / 0.18)) and space rather than boxes.
- **Do** reveal headlines line by line behind masks (700 to 900ms, staggered) and let photographs settle from 1.08 to 1, animating only transform and opacity.
- **Do** make every animation stand still and in place under prefers-reduced-motion.
- **Do** keep the EO logo as supplied, in the header and the footer.

### Don't:
- **Don't** change any visible text; copy comes only from `content/content.ts` and is locked by `content-lock.md`.
- **Don't** use pure white (#ffffff) as a page or section ground.
- **Don't** introduce a second accent colour, a gradient on interface elements, or blue used as decoration.
- **Don't** animate width, height, top, left or colour for entrances; only transform and opacity.
- **Don't** add drop shadows to new cards, panels or buttons.
- **Don't** let Fraunces run at full optical size at display sizes; hold it at 72.
