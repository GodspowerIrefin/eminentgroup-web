# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: healthcare facilities that need staff.** Hospitals, nursing homes, rehabilitation centers, assisted living facilities and home care agencies in Maryland. The person visiting is filling a gap in their schedule: they need a role covered (RN, LPN, CNA/GNA, home health aide and others), for given shifts and a start date, by someone whose credentials they can trust. Their job on the site is to send a staffing request or call the office.
- **Secondary: nurses and care workers looking for work.** RNs, LPNs, CNAs/GNAs, home health aides, medical assistants, therapists, social workers and caregivers. They want shifts that fit their license and schedule; their job on the site is to see open shifts and send one application.
- **Also served:** people referring a facility or a professional (the referrals form).

## Product Purpose

Eminent One LLC is a licensed Maryland healthcare staffing agency. It recruits, credentials and places nurses and care staff with Maryland facilities on temporary, temp-to-perm or permanent terms. The website exists to turn a facility's need into a staffing request (the main action, "Request staff") and, second, to turn a qualified professional into an applicant ("Apply for work"). Success is requests and applications reaching the office.

## Positioning

What Eminent One can truthfully claim, confirmed by the owner:

- **Verified credentials:** license or certification, employment history and a background check are confirmed before anyone works a shift.
- **Follow-up after placement:** the office calls the facility after the first shift and stays in touch with the professional.
- **Local, family-run office:** run by Percy Irefin (Chief Executive Officer) and Janet Irefin (Director) from Liberty Road, Windsor Mill; a small Maryland team, not a national chain.
- **Flexible terms:** temporary, temp-to-perm or permanent placements; full-time, part-time or per diem schedules.
- Licensed as a Maryland Health Care Staff Agency, license HCSA-01609.

## Operating Context

- A facility sends a staffing request (role, number of staff, shift times, start date, terms), or calls the office. The office replies by phone or email, matches and verifies a candidate, and the professional reports for the shift.
- A professional applies once (role, availability, license and experience); the office reviews it and contacts them about openings. Resumes are attached by email.
- Current openings: RN and LPN shifts in Owings Mills, MD, with hourly pay ranges (in `content/content.ts`).

## Capabilities and Constraints

- Static website: Next.js exported to static HTML (`out/`), Next's client runtime stripped after build; deployed on Vercel. Pages: home, services, registered nurses, employers, job seekers, about, resources, contact, referrals, photograph credits, 404.
- Every visible word lives in `content/content.ts`; `content-lock.md` is the locked record of the current copy. Redesign work changes styles, layout and animation only, never the text.
- Forms (staffing request, job application, message, referral) open the visitor's email app addressed to the office. They are not connected to a form service yet. **Undecided:** which form service, if any, to connect.
- Contacts: office phone 410-929-9388; address shown as street and district only (Liberty Road, Windsor Mill); the office email is used in links but not printed. **Undecided:** the site's canonical domain.

## Brand Commitments

- Name: Eminent One LLC ("Eminent One").
- Logo: the EO hexagon mark (`public/images/eo-mark.png`, white version `eo-mark-white.png`); keep it.
- Copy: locked as above. The voice is plain and factual: names, counts, places, no adjectives about the agency itself.
- The owner supplied `DESIGN-BRIEF.md` as the binding visual brief for the redesign; it is recorded here by reference, and visual decisions follow it.

## Evidence on Hand

- The license number, the services, the roles placed, the facility types served, the two leaders' names and titles, and the current openings with pay.
- **No testimonials, client names, logos, statistics, years in business or placement counts exist.** Future work must not invent or imply any of them.
- **Photographs are stand-ins:** four Wikimedia Commons frames (CC BY 2.0, credited on `/credits/`) and Pexels stock. The agency has no photographs of its own team or office yet, and no portraits of its leaders.

## Product Principles

1. **Facilities first, job seekers close behind.** Every page should make "Request staff" easy to find; "Apply for work" stays one step away.
2. **Trust through checkable facts.** The license number, the verification steps and the follow-up do the persuading; no claim the agency cannot back.
3. **Small and local is the point.** Present the agency as a named Maryland team, not a faceless network.
4. **The words are fixed; the experience is not.** Copy changes go through `content/content.ts`; design work leaves it alone.
