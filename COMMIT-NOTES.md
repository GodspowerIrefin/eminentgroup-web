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
