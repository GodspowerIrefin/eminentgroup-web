---
name: Eminent One
description: "The Shift Record": the design system of a licensed Maryland healthcare staffing agency
colors:
  cobalt: "#2338d1"
  cobalt-deep: "#1a2a9e"
  sky: "#a9b6ff"
  paper: "#f4f1ea"
  paper-2: "#ebe6db"
  ticket: "#fffdf8"
  ink: "#101225"
  ink-soft: "#3a3c4d"
  muted: "#5b5d6b"
  night: "#0b1030"
  night-2: "#141a44"
  on-dark: "#f4f1ea"
  on-dark-soft: "#c9cbe0"
  hairline: "rgb(16 18 37 / 0.14)"
  hairline-dark: "rgb(244 241 234 / 0.14)"
typography:
  display:
    fontFamily: "Gloock, Georgia, 'Times New Roman', serif"
    fontSize: "max(36px, calc(clamp(48px, min(10vw, 19svh), 150px) - 25px))"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Gloock, Georgia, 'Times New Roman', serif"
    fontSize: "max(28px, calc(clamp(40px, 3.2vw + 18px, 76px) - 25px))"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  close:
    fontFamily: "Gloock, Georgia, 'Times New Roman', serif"
    fontSize: "max(36px, min(84px, calc(clamp(52px, 8.4vw, 128px) - 25px)))"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  entry:
    fontFamily: "Gloock, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(22px, 0.9vw + 14px, 30px)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  body:
    fontFamily: "'Public Sans', system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'IBM Plex Mono', ui-monospace, monospace"
    fontSize: "12.5px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.06em"
rounded:
  control: "2px"
  photo-cut: "clamp(44px, 6vw, 112px)"
  photo-cut-small: "clamp(28px, 3vw, 48px)"
  circle: "50%"
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
  section-top: "120px"
  section-bottom: "72px"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "#ffffff"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.night}"
    textColor: "#ffffff"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "44px"
  photo-frame:
    backgroundColor: "{colors.paper-2}"
    rounded: "{rounded.photo-cut}"
  shift-ticket:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.ink}"
  closing-band:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-dark}"
---

# Design System: Eminent One

## Overview

**Creative North Star: "The Shift Record"**

A staffing agency's world is the shift, the chart and the credential, so the site is set like a well-kept record: warm chart paper, ink, the cobalt of the EO logo as the only accent, and deep "night shift" navy sections between the day ones. Every photograph sits in a frame cut from the EO hexagon. Facts (role codes, shift times, numbers, labels) are set in a mono, like entries on a chart. Headlines are set very large in a sturdy, high-contrast serif.

The home page follows the client's reference structure (a dark hero; a list beside a light panel; a statement beside a photograph; the role cards beside a photograph; dark rows; a tile grid; contact entries over the footer). Each home section is exactly one full screen on a desktop and one or two on a phone, composed as a spread: big type on one side, a tall photograph or the role list on the other.

The words never change: every visible string lives in `content/content.ts` and is recorded in `content-lock.md`. The reference's hero stats, logo strip and testimonials are left out because the agency has given no such figures, partners or reviews; they can be added when it does.

**Key Characteristics:**
- Paper (day) and night-navy (night) grounds alternating down the page, with one cobalt band.
- Gloock set very large for headlines and list entries; Public Sans for reading; IBM Plex Mono for labels and facts.
- The chamfered frame: two opposite corners of every photograph cut at the EO hexagon's angle.
- Cobalt only on actions, the highlighted word and the chosen row.
- Flat: no shadows, square controls; separation by ground, hairline and air.
- Motion: the hero enters once; two dealt moments; hover answers. Nothing reveals on scroll.

## Colors

A paper-and-ink record with the logo's cobalt for action and a deep navy for the night sections.

### Primary
- **Cobalt** (#2338d1): the EO logo's blue. Every "Request staff" button (one look everywhere, the header included), the text links, the chosen row's arrow, the entry bar above each h2, the ticket stubs and the one cobalt band (#checks). White text on it is about 6.5:1.
- **Sky** (#a9b6ff): cobalt lightened, for marks on navy only (the hero's third headline line, step numbers, footer column titles, contact icons), where cobalt itself would be too dark to read.

### Neutral
- **Paper** (#f4f1ea): the day ground and the header. Never pure white.
- **Paper 2** (#ebe6db): the light panel that holds the facility photograph; the fill a photograph shows before it loads.
- **Ink** (#101225): headlines and text on paper.
- **Soft Ink** (#3a3c4d): leads and paragraphs under a headline.
- **Muted** (#5b5d6b): rows not chosen, mono labels on paper.
- **Night** (#0b1030) and **Night 2** (#141a44): the night ground (the hero, #steps, the close and footer) and its raised surface.
- **On dark** (#f4f1ea) and **On dark soft** (#c9cbe0): text on night.

### Named Rules
**The One Accent Rule.** Cobalt marks where the visitor acts or what is chosen. Sky stands in for it on navy. No other hue.

**The Paper, Not White Rule.** No section ground is pure white. The ticket face (#fffdf8) is the only near-white, inside a ticket.

## Typography

**Display Font:** Gloock (with Georgia, serif). One weight (400).
**Body Font:** Public Sans (with system-ui), the US government's typeface: civic and plain, right for a state-licensed agency.
**Mono Font:** IBM Plex Mono, for labels, role codes, shift times and the legal line.

### Hierarchy
- **Display** (Gloock 400, up to 125px on the home hero, line-height 0.92, tracking -0.035em): the h1, three lines with the third in sky or cobalt. Inner heroes up to 99px. Never under 36px (home) or 32px (inner) on a phone.
- **Close** (Gloock, up to 84px, at least 36px, line-height 0.9, two balanced lines at most 11ch wide): "Request staff for your facility" across the close.
- **Headline** (Gloock, up to 51px; 63px on inner pages; at least 28px): every h2, over a 40x4px cobalt entry bar that sits in the section's top padding.
- **Entry** (Gloock, 22-34px): list names (facilities, roles, leaders, checks), step and ticket titles, the services detail name, FAQ questions, contact values.
- **Body** (Public Sans 400, 18px, 17px on phones, line-height 1.6): leads and paragraphs; 15px for row descriptions.
- **Label** (Plex Mono 500, 12.5px, uppercase, tracking 0.06em): section labels, field labels, role codes, ticket fact labels.

### Named Rules
**The Big Type Rule.** The client chose the large type: headlines stay large, and other pieces fit around them. Every display size was then taken down 25px at the client's request (10px, then 15px more: `calc(... - 25px)` in `public/eo.css`), with floors on a phone so no headline falls to body size. The step numbers came down with them (34px at most) so each heading still reads first.

**One h3 Size.** Every h3 on a page shares one size, so the hierarchy reads by level.

## Layout

A 12-column grid in a container at most 1280px wide, 24px gutter (12px on phones), side margins of 80px from 1024px up, 48px on tablets and 24px on phones. The header is 72px (56px on phones).

**Spreads.** A home split puts its words on columns 1-7 and its picture on columns 8-12, so every split shares one column line (x 841 at 1440). Photographs stay inside the container's lines; nothing bleeds to the screen edge. A split's columns are top-aligned: headings use `text-box: trim-start cap alphabetic` so their capitals start on the photograph's top line.

**Screens.** On the home page every section is exactly one screen at desktop (`--padt` 120px, `--padb` 72px) and one or two on a phone (`--hm`), filled with content, not air. Inner pages keep sections as tall as their content, except the hero (one screen) and the close.

**Stacking.** Below 1024px a split stacks, words first, and each photograph takes a height of its own; the hero's photograph moves across the top under the header.

### Named Rules
**The Shared Line Rule.** Every split on a page starts its right column on the same grid line.

**The Inside-the-Lines Rule.** Text starts on the container's left line or the shared split line; photographs end on the container's right line.

## Elevation & Depth

Flat. Depth comes from ground (paper against navy against cobalt), the light panel behind the facility photograph, and the chamfered cut. No shadows on cards, buttons or photographs.

## Shapes

- **Controls:** 2px corners: square, sure buttons and fields.
- **The chamfered frame:** a photograph clips its top-left and bottom-right corners at 45 degrees (`clip-path`), 44-112px on large frames and 28-48px on small ones. The facility panel, the forms and the inner heroes' photo bands use the same cut.
- **Circles:** only for the row arrows.
- **The EO hexagon:** in the logo only.

## Components

### Buttons
- **Primary:** cobalt, white text, 44px, 2px corners, a drawn arrow last. On hover a night fill slides in from the left (260ms) and the arrow moves; a press nudges it down. The same look in the header, the hero and the close.
- **Secondary:** transparent with a 1px outline at 32% (paper on navy), ink text. Only the hero's "Apply for work" uses it on the home page; other second actions are text links ("Roles we place", "See open shifts").

### Navigation
Two rows, as on the agency's original site. A 40px top bar (from 1024px): "Licensed Maryland health care staff" on the left; Open Positions, Request Staff, Referrals, Contact Us and the phone in bold on the right. An 88px main bar: the EO mark with "EMINENT ONE" (letter-spaced, deep cobalt) and "People. Care. Opportunities." on the left; Staffing Services, For Employers, Careers, Who We Are and Insights; then a dark "Portal" button (the portal's address is still to come; it points at /contact/ for now). On scroll the top bar slides away and the main bar stays. Below 1024px: the mark and name, "Portal" and the menu button; the words move to a full-screen sheet.

### Hero (home: dark)
Night ground. The h1 on columns 1-7 with its third line in sky; under a rule, the lead and the two buttons. The photograph fills columns 8-12 from the header to the foot in the chamfered frame. Enters once: lines rise, the photograph settles from 1.12. (The reference's round badge was tried and removed at the client's request.)

### Hero (inner pages: band)
Paper. The h1 across the page (up to 99px), a ruled row with the lead (columns 1-6) and the buttons (7-12), and the photograph as a wide band in the chamfered frame. On Careers and About the band sits over the words.

### Facility slideshow (#settings)
The five facility rows sit right under the intro; beside them, in the light panel, the five photographs change on their own every 3 seconds (a cross-fade with a slow 1.08 to 1 zoom), and the row on show darkens, fills its arrow with cobalt and draws a 2px cobalt line under itself over the 3 seconds. A row's click (or Enter, Space) jumps to it. It pauses under the pointer, in a hidden tab and with its round pause button on the photograph; under reduced motion it waits paused until the button starts it.

### Statement beside a photograph (#checks)
The cobalt band: the mono label, then the credential sentence at up to 51px (20px on a phone), its words lighting from 42% to full white as it crosses the screen (the word-highlight moment). The photograph sits on columns 8-12.

### Role cards (#roles)
"The roles we place" over eight cards, two across on columns 1-7, beside the photograph (the picture-develops moment) on columns 8-12. Each card: a paper-white face (#fffdf8) with a hairline edge and the chamfered cut; the role name in Gloock, shown in title case; the role's line in 14px. No icon and no codes (removed at the client's request). Hover draws a 3px cobalt line along the top. One column on a phone.

### Step cards (#steps)
Night ground; the heading over three cards, side by side (one column below 1024px), in the role cards' face (#fffdf8, chamfered cut). Each card: the step's photograph across the top at one height for all three; a 52px cobalt disc with a line icon (send, a shield with a tick, a calendar with a tick) overlapping the photograph's bottom edge; the title in Gloock; the line in 15px. No step numbers (client request). The photograph zooms 1.03 inside its frame on hover.

### Shift tickets (#openings)
"Open nursing jobs" over two tickets that share the column's height, beside two stacked photographs. Each ticket is an open entry over a 2px ink rule: the job title in Gloock and the shift in mono on the left; on the right, torn off along a dashed perforation, a cobalt stub that is the link to apply ("Apply for the RN job"), its words at the top and an arrow at the foot. On hover the stub fills with night from the bottom and the arrow moves. No pay is shown anywhere for now (the client will add it later). On Careers the two tickets sit side by side with labelled Where and Shift facts; on a phone each ticket's stub becomes a full-width 44px bar under it.

### Close and footer
Night. The call across the page, its line ("Call 410-929-9388 or start online." by default) and the button under it on the left line. Then the directory, as on the agency's original site: Staffing Services (the eight roles), Careers, Who We Are (with Insights under it), For Employers, and Get in touch (the street and district, the phone in bold, "Email the office", "Get directions", then a rule and five quick links in bold). Column titles in Public Sans 600 on paper white, links in On dark soft. On a phone the groups sit two across and "Get in touch" runs the full width. The base row: the white EO mark with "EMINENT ONE" letter-spaced and "People. Care. Opportunities." on the left; "Licensed Maryland health care staff" (as in the top bar) and the copyright on the right. No photo credit line (removed at the client's request).

## Motion

- The hero enters once on load (`data-enter`, CSS); under reduced motion everything stands still.
- Two dealt moments: **picture-develops** on the roles photograph and **word-highlight** on the credential sentence.
- Hover: buttons fill and their arrows slide, links underline, rows darken, step photographs zoom 1.03 inside their frame.
- No scroll reveals: `public/reveal.js` is no longer loaded (it broke the kit's one-screen rule). DESIGN-BRIEF.md asked for them; the file is kept so they can return.

## Do's and Don'ts

### Do:
- **Do** take every word from `content/content.ts` and record a change of reading order in `content-lock.md`.
- **Do** set headlines in Gloock as large as the section allows.
- **Do** cut every photograph with the chamfered frame and keep it inside the container's lines.
- **Do** draw "Request staff" the same way everywhere: cobalt fill.
- **Do** start every split's right column on the shared line (column 8 on the home page).
- **Do** keep each home section exactly one screen on a desktop.

### Don't:
- **Don't** invent figures, partners, reviews or quotes to fill a reference layout.
- **Don't** add a second accent hue, a gradient or a shadow.
- **Don't** bleed a photograph to the screen edge or put text over one.
- **Don't** reveal sections, cards or headings on scroll.
- **Don't** edit the design kit's files in `public/assets/`; page CSS goes in `public/eo.css`.
