# Navigation dropdowns, new pages and the original site's copy (`23bb02d`)

Follows `46c6952`. This commit adds dropdown menus to the header, with a page for every menu item. Several pages now carry the text of the agency's original site (eminentonegroup.com) word for word, set in this site's design.

## Header and footer
- **Top bar:** now reads "Licensed Maryland health care staff". The footer's licence line matches it.
- **Header button:** now "Portal". It links to `/contact/` for now (marked TODO in `content/content.ts`) until the portal address is known.
- **Dropdowns:** each nav word has a chevron and opens its list on hover or keyboard focus. In the phone menu the lists show indented under each word.

| Menu | Items |
|---|---|
| Staffing Services | Registered Nurses · All Roles We Place · Temporary and Permanent Staffing |
| For Employers | Request Staff · Employer Services · Referrals |
| Careers | Open Positions · Apply for Work · Registered Nurse Roles |
| Who We Are | About Eminent One · Contact |
| Insights | Resources |

## New pages
- `/services/roles/`: All Roles We Place
- `/services/temporary-and-permanent/`: the three terms as cards, and the three schedules
- `/employers/request-staff/`: the staffing request form
- `/employers/services/`: How it works (tabs) and What follows a staffing request
- `/job-seekers/open-positions/`: the shift tickets and the pre-shift checks
- `/job-seekers/apply/`: the application form. `?position=RN` pre-selects the role.
- `/job-seekers/registered-nurse-roles/`: RN duties and the open shifts

## Copy from the original site (word for word)
- **Registered Nurses** (`/services/registered-nurses/`), sections in order:
  - intro
  - "What RNs do", numbered 01–04
  - "Where we place RNs"
  - Request an RN / RNs: apply for work
  - Other roles
- **All Roles We Place** (`/services/roles/`), from the original `/services` page:
  - hero
  - "How we staff your facility.", four numbered cards
  - "Healthcare professionals we supply.": a role list that switches the detail card beside it (small inline script; without it, every card shows)
  - the two audience cards
  - "Frequently asked questions."
- **Request Staff** (`/employers/request-staff/`), from the original `/employers#request`:
  - "Leave the recruiting to us."
  - "What to expect", numbered 01–05
  - the original nine-field form, with required stars and "Send request"
- **Referrals** (`/referrals/`):
  - "Refer a facility or a healthcare professional."
  - "Refer someone"
  - the original six-field form, with "Send referral"
- **About** (`/about/`), sections in order:
  - "A licensed healthcare staffing agency in Maryland."
  - About us, with the two leaders and four points
  - a cobalt band with the licence line and "Our mission"
  - "What every placement includes.", numbered
  - "The people behind Eminent One."
- These pages close with "Request staff or apply for work." and "Call 410-929-9388 or start online."
- Browser tab titles match the original: Registered Nurses, Medical Staffing, For Employers, Referrals, About Us.

## Home page
- **Facilities section:**
  - less whitespace
  - a new ward photograph, the public-domain `photo-f116782956`
  - the photos now change every 3 seconds on their own, instead of on hover. They pause on hover, when the tab is hidden, or with the pause button, and stay still under reduced motion.
- **Role cards:** the hexagons and initials are removed; the role names are capitalized.
- **Steps:** now photo cards with no number indexes. The heading is "From request to first shift".
- **Job tickets:** the stub reads "Apply".

## Employers page
- New "How it works" section before "What follows a staffing request": two tabs (For facilities, For professionals) with three step cards each. The tabs work with the mouse and the arrow keys (WAI-ARIA tabs).

## Components
- `Heroes.tsx`: `HeroSplit` and `HeroPhoto` take an optional `eyebrow` label above the headline.
- `Blocks.tsx`:
  - `Form` takes number and date fields, a custom select prompt ("Select") and required stars (`FormCopy.prompt`, `FormCopy.star`).
  - `Faq` takes `accordion`, which renders `<details>` rows with a plus/minus button. It is used on All Roles We Place; without it, the kit's always-open FAQ is kept.
  - `RoleCards` and `HowItWorks` are now shared.
- `forms.requestExact` holds the original request form's words; `forms.referral` now matches the original referral form.
- `public/eo.css`: the dropdowns, numbered duty lists, role picker, accordion, About-page people and points, and the eyebrow label.

## Docs
- `content-lock.md`:
  - records the new visible text of every changed page, marking which pages are copied word for word from the original site
  - adds a "Pages opened from the header dropdowns" section
- `README.md` lists the new pages. `DESIGN.md` is updated for the header and the new sections.

## Open items
- The Portal link address.
- The About page shows licence number HCSA-01609 twice, as the original does.
- Two forms are longer than the kit's six-field rule because the original forms are: Request Staff (nine fields) and Referrals.
- The home design gate has two open `button-styles` findings: the dark Portal button next to the cobalt buttons.

---

# Major content and design changes (`46c6952`)

Follows `846fed0` (the "Shift Record" redesign). This commit applies the client's review on top of it: a header and footer matching the agency's original site, role cards, simpler job tickets, smaller display type, and no pay shown anywhere for now.

## Header
- Rebuilt in two rows, as on the original site:
  - **Top bar:** "Maryland Health Care Staff Agency Licensed" on the left; Open Positions, Request Staff, Referrals, Contact Us and the phone number on the right.
  - **Main bar:** the EO mark with "EMINENT ONE" and "People. Care. Opportunities."; five links (Staffing Services, For Employers, Careers, Who We Are, Insights); a dark "Request staff" button.
- The top bar slides away on scroll and the main bar stays fixed (small inline script in `app/layout.tsx`).
- Removed the Services dropdown and the "Apply for work" word from the bar.
- Below 1024px: logo, button and menu only; the links move to the full-screen sheet.

## Home page
- **Hero:** removed the round badge on the photo and the sentence "State license HCSA-01609."
- **Roles:** the heading is now "The roles we place" (was "The 8 roles we place"). The list with a detail panel is now eight cards, two across, each with a hexagon icon, the role name, its codes and its one-line description.
- **Open nursing jobs:**
  - Removed the line under the heading and the pay.
  - The blue stub on each ticket is now the "Apply for the … job" link.
  - The two tickets fill the column beside the photos. On phones the stub becomes a full-width 44px bar.
- **Display type:** 25px smaller than in `846fed0` (hero, inner heroes, closing headline, credential sentence, section headings), with minimum sizes on phones. Step numbers were reduced to match.

## Careers page
- The job tickets use the same design as the home page, with Where and Shift facts and the apply stub. This also fixes the broken layout caused by the shared `#openings` id.
- Removed the photo from the open-shifts section; the two tickets sit side by side.
- Intro now reads "Apply for a shift, or send one application for any role."

## Pay
- Removed every pay amount and the "Pay" label from `content/content.ts` and the components. Rates will be added back later: per job, in `jobs`.

## Closing call and footer (every page)
- **Closing line:** now "Call 410-929-9388 or start online." (default close). The button sits under it, and the headline wraps on two balanced lines.
- **Footer links**, rebuilt from the original site:
  - Staffing Services (eight roles), Careers, Who We Are with Insights, For Employers.
  - Get in touch: address, phone, email, Get directions, plus five quick links.
  - A bottom row with the logo, tagline, licence line and "© 2026 Eminent One Group. All rights reserved."
- Removed the contact cards above the footer and the "Photographs via Wikimedia Commons and Pexels" line.

## Docs
- `DESIGN.md`, `README.md` and `content-lock.md` were updated to match: the new header and footer, the role cards, the tickets, the type sizes, the new reading order and the wording changes.

## Checks
- `npm run build` succeeds (13 pages).
- Checked in screenshots at 1440, 1024, 820 and 390px wide.
- Design gate (`design-taste-frontend`) on the home page: **OPEN, 3 FAILs**, all from the header as the client specified it:
  - `button-styles` (two findings): the header's dark "Request staff" differs from the blue "Request staff" buttons elsewhere.
  - `action-repeat`: "Request Staff" shows three times on the first screen (top-bar link, header button, hero button).

  Fixing them means making the header button blue and dropping the top bar's "Request Staff" link. That is the client's call.
- Waivers in `.taste-skill/waivers.json`:
  - the client's own headings ("The roles we place" and the locked step titles)
  - the real office phone number, in two findings
  - the blue "Maryland" line in the hero headline
- The lint error in `components/CookieConsent.tsx` predates this commit.

## Follow-ups
- **Photo credits:** four stand-in photos in `public/assets/img/` are Wikimedia Commons images under CC BY 2.0, which requires credit. With the footer credit line removed, nothing links to `/credits/`. Either replace those photos (Pexels or the agency's own) or restore a credits link.
- **Licence number** still shows on the About page.
- **Pay rates** to add when confirmed.
- **Header:** decide on the open gate FAILs (keep the dark button and repeated link, or change them).
