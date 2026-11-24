// All the words on the site, in one place: headings, paragraphs, buttons, links, navigation, footer,
// form labels and messages, screen-reader labels, page titles and image alt text, plus the facts
// they are built from (phone, address, license, jobs, roles).
//
// Components and pages hold only markup, layout and behaviour; they read every string from here.
// To change copy, edit this file. To change the design, leave this file alone.
//
// Rich text: a paragraph that contains a link is an array of plain strings and { text, href }
// parts, rendered in order by components/Rich.tsx.

export type Link = { label: string; href: string };
export type RichPart = string | { text: string; href: string };
export type Rich = string | RichPart[];

// ---------------------------------------------------------------- facts

const phone = "410-929-9388";
const phoneHref = "tel:+14109299388";
// The office address the forms send to. It is used in mailto: links, never printed on a page.
const email = "eminentonellc@gmail.com";
const street = "Liberty Road";
const district = "Windsor Mill";
const state = "Maryland";
const license = "HCSA-01609";

export const site = {
  name: "Eminent One LLC",
  short: "Eminent One",
  description:
    "Eminent One LLC is a licensed Maryland healthcare staffing agency. We place RNs, LPNs, CNAs, home health aides and other care staff in hospitals, nursing homes, rehab centers, assisted living and home care.",
  phone,
  phoneHref,
  email,
  emailHref: `mailto:${email}`,
  street,
  district,
  state,
  address: `${street}, ${district}`,
  mapsUrl: "https://www.openstreetmap.org/search?query=Liberty%20Road%20Windsor%20Mill%20Maryland",
  license,
  year: 2026,
};

export const mailto = (subject: string) => `mailto:${email}?subject=${encodeURIComponent(subject)}`;

// The main actions, word for word in the nav, the heroes and the closes
export const actions = {
  requestStaff: { label: "Request staff", href: "/employers/#request" },
  applyForWork: { label: "Apply for work", href: "/job-seekers/#apply" },
  callOffice: { label: "Call the office", href: phoneHref },
};

export const roles = [
  { code: "RN", name: "Registered nurses", body: "Assessment, treatment and care coordination in clinical and residential settings." },
  { code: "LPN", name: "Licensed practical nurses", body: "Nursing care and follow-up under the direction of RNs and physicians." },
  { code: "CNA, GNA", name: "Certified nursing assistants", body: "Daily living support and comfort for patients and residents." },
  { code: "HHA", name: "Home health aides", body: "Personal care and support for clients in their own homes." },
  { code: "MA", name: "Medical assistants", body: "Clinical and administrative support in practices and clinics." },
  { code: "PT, OT, SLP", name: "Therapists", body: "Physical, occupational and speech therapy for facilities and clinics." },
  { code: "SW", name: "Social workers", body: "Support, planning and coordination for patients and families." },
  { code: "", name: "Caregivers", body: "Day-to-day care and companionship." },
];

export const jobs = [
  {
    code: "RN",
    title: "Registered Nurse (RN)",
    location: "Owings Mills, MD",
    shift: "Nights, 11:00pm to 7:00am",
    extra: "Shift differential",
  },
  {
    code: "LPN",
    title: "Licensed Practical Nurse (LPN)",
    location: "Owings Mills, MD",
    shift: "Days 6:00am to 2:30pm, or evenings 2:00pm to 10:30pm",
    extra: "",
  },
];

// A job's shift line as shown: "Nights, 11:00pm to 7:00am, shift differential"
export const jobShift = (job: (typeof jobs)[number]) => `${job.shift}${job.extra ? `, ${job.extra.toLowerCase()}` : ""}`;

export const jobCopy = {
  where: "Where",
  shift: "Shift",
  applyShift: (code: string) => `Apply for the ${code} shift`,
  applyJob: (code: string) => `Apply for the ${code} job`,
  applyHref: (code: string) => `/job-seekers/?position=${code}#apply`,
};

export const leaders = [
  { name: "Percy Irefin", title: "Chief Executive Officer" },
  { name: "Janet Irefin", title: "Director" },
];

export const roleOptions = ["RN", "LPN", "CNA or GNA", "HHA", "Medical assistant", "Therapist", "Social worker", "Caregiver", "Other"];

// ---------------------------------------------------------------- photographs
// Every photograph with its alt text. Pages pick one by key; `subject` (per use) is metadata for
// the design checker, not shown.

type Photo = { src: string; srcSet: string; width: number; height: number; alt: string };

const services = (name: string, alt: string): Photo => ({
  src: `/images/services/${name}.jpg`,
  srcSet: `/images/services/${name}-400.jpg 400w, /images/services/${name}.jpg 720w`,
  width: 720,
  height: 720,
  alt,
});
const settingPhoto = (name: string, alt: string): Photo => ({
  src: `/images/settings/${name}.jpg`,
  srcSet: `/images/settings/${name}-600.jpg 600w, /images/settings/${name}.jpg 1200w`,
  width: 1200,
  height: 1000,
  alt,
});
const commons = (id: string, file: "1920" | "1280" | "960", alt: string): Photo => {
  const base = `/assets/img/photo-${id}`;
  if (file === "960") return { src: `${base}-960.jpg`, srcSet: `${base}-500.jpg 500w, ${base}-960.jpg 960w`, width: 960, height: 640, alt };
  const srcSet = `${base}-960.jpg 960w, ${base}-1280.jpg 1280w, ${base}.jpg 1920w`;
  return file === "1920"
    ? { src: `${base}.jpg`, srcSet, width: 1920, height: 1280, alt }
    : { src: `${base}-1280.jpg`, srcSet, width: 1280, height: 853, alt };
};

const ALT = {
  medicine: "A nurse in teal scrubs measuring a dose of liquid medicine onto a spoon",
  supplies: "Two nurses in teal scrubs preparing supplies at a clinic counter by a window",
  notes: "A nurse in scrubs writing notes beside an open laptop",
  onBreak: "A nurse on a break with a phone and a cup of coffee",
  recruitment: "A recruiter in a suit reading a clipboard across a table from a candidate",
  staffing: "A nurse with a tablet talking with a colleague at a nurses' station",
  followUp: "A nurse holding the hand of a woman resting in a hospital bed",
  credentialing: "A hand holding a pen over printed forms on a wooden desk",
  hospitals: "Two nurses in teal scrubs reading a chart in a hospital corridor",
  nursingHomes: "A care worker pouring a hot drink for a woman resting in bed in a nursing home room",
  rehabilitation: "A therapist guiding a patient's arm and hip through a stretch on a treatment table",
  assistedLiving: "Three older residents playing chess over coffee in a bright lounge",
  homeCare: "Two carers settling an older man into bed at home",
};

export const photos = {
  medicineHero: commons("f186239770", "1920", ALT.medicine),
  supplies: {
    src: "/assets/img/photo-f198191936-960.jpg",
    srcSet: "/assets/img/photo-f198191936-500.jpg 500w, /assets/img/photo-f198191936-960.jpg 960w",
    width: 960,
    height: 1438,
    alt: ALT.supplies,
  },
  notes: commons("f191778236", "960", ALT.notes),
  notesWide: commons("f191778236", "1280", ALT.notes),
  notesHero: commons("f191778236", "1920", ALT.notes),
  onBreak: commons("f186239784", "1280", ALT.onBreak),
  onBreakHero: commons("f186239784", "1920", ALT.onBreak),
  recruitment: services("recruitment", ALT.recruitment),
  staffing: services("staffing", ALT.staffing),
  followUp: services("follow-up", ALT.followUp),
  credentialing: services("credentialing", ALT.credentialing),
  hospitals: settingPhoto("hospitals", ALT.hospitals),
  nursingHomes: settingPhoto("nursing-homes", ALT.nursingHomes),
  rehabilitation: settingPhoto("rehabilitation", ALT.rehabilitation),
  assistedLiving: settingPhoto("assisted-living", ALT.assistedLiving),
  homeCare: settingPhoto("home-care", ALT.homeCare),
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
export type PhotoRef = { photo: PhotoKey; subject: string };
export const pic = (ref: PhotoRef) => ({ ...photos[ref.photo], subject: ref.subject });

// ---------------------------------------------------------------- shared interface words

export const ui = {
  skipLink: "Skip to content",
  logoName: "Eminent One",
  logoHomeLabel: "Eminent One, home",
  mainNavLabel: "Main",
  menuButtonLabel: "Menu",
  selectPrompt: "Choose one",
};

export const nav = {
  // the main bar's words, as on the agency's original site
  words: [
    { key: "services", href: "/services/", label: "Staffing Services" },
    { key: "employers", href: "/employers/", label: "For Employers" },
    { key: "careers", href: "/job-seekers/", label: "Careers" },
    { key: "about", href: "/about/", label: "Who We Are" },
    { key: "insights", href: "/resources/", label: "Insights" },
  ] as const,
  // the thin bar above it: the licence on the left, quick links and the phone on the right
  top: {
    licensed: "Maryland Health Care Staff Agency Licensed",
    links: [
      { href: "/job-seekers/#openings", label: "Open Positions" },
      { href: "/employers/#request", label: "Request Staff" },
      { href: "/referrals/", label: "Referrals" },
      { href: "/contact/", label: "Contact Us" },
    ],
  },
  tagline: "People. Care. Opportunities.",
};

export const footer = {
  // the close at the top of the footer, unless a page sets its own
  close: {
    title: "Request staff for your facility",
    line: `Call ${phone} or start online.`,
  },
  // the directory, as on the agency's original site: four link groups and "Get in touch"
  groups: [
    {
      title: "Staffing Services",
      links: [
        { href: "/services/registered-nurses/", label: "Registered Nurses" },
        { href: "/services/#roles", label: "Licensed Practical Nurses" },
        { href: "/services/#roles", label: "Certified Nursing Assistants" },
        { href: "/services/#roles", label: "Home Health Aides" },
        { href: "/services/#roles", label: "Medical Assistants" },
        { href: "/services/#roles", label: "Therapists" },
        { href: "/services/#roles", label: "Social Workers" },
        { href: "/services/#roles", label: "Caregivers" },
      ],
    },
    {
      title: "Careers",
      links: [
        { href: "/job-seekers/#openings", label: "Open Positions" },
        { href: "/job-seekers/#apply", label: "Apply for Work" },
        { href: "/services/registered-nurses/#duties", label: "Registered Nurse Roles" },
      ],
    },
    {
      title: "Who We Are",
      links: [
        { href: "/about/", label: "About Eminent One" },
        { href: "/contact/", label: "Contact" },
      ],
      // a second, smaller group under the first in the same column
      then: { title: "Insights", links: [{ href: "/resources/", label: "Resources" }] },
    },
    {
      title: "For Employers",
      links: [
        { href: "/employers/#request", label: "Request Staff" },
        { href: "/employers/#expect", label: "Employer Services" },
        { href: "/referrals/", label: "Referrals" },
      ],
    },
  ] as { title: string; links: Link[]; then?: { title: string; links: Link[] } }[],
  touch: {
    title: "Get in touch",
    directions: "Get directions",
    quick: [
      { href: "/employers/#request", label: "Request Staff" },
      { href: "/job-seekers/#openings", label: "Open Positions" },
      { href: "/job-seekers/#apply", label: "Apply for Work" },
      { href: "/referrals/", label: "Referrals" },
      { href: "/contact/", label: "Contact Us" },
    ],
  },
  emailLink: "Email the office",
  seeShifts: { label: "See open shifts", href: "/job-seekers/#openings" },
  wordmark: "Eminent One",
  tagline: "People. Care. Opportunities.",
  licensed: "Maryland Health Care Staff Agency Licensed",
  legal: `© ${site.year} Eminent One Group. All rights reserved.`,
};

// ---------------------------------------------------------------- cookie consent banner
// First-visit banner (components/CookieConsent.tsx). The choice is saved in localStorage.

export const cookies = {
  title: "We use cookies",
  line: "Essential cookies keep the site working. With your permission we also use analytics to understand how it is used.",
  accept: "Accept all",
  reject: "Reject non-essential",
  manage: "Manage preferences",
  save: "Save preferences",
  essential: { label: "Essential", line: "Always on. Needed for the site to work." },
  analytics: { label: "Analytics", line: "Helps us see which pages are useful." },
};

// ---------------------------------------------------------------- forms
// Labels, error messages, options and the words around each form. Field order, types and widths
// are set where the form is placed.

const emailError = "Write an email address with an @, like name@example.com.";

export const forms = {
  request: {
    subject: "Staffing request",
    submit: "Request staff",
    note: "The office replies by phone or email.",
    fields: {
      facility: { label: "Facility", error: "Write the name of your facility." },
      name: { label: "Your name", error: "Write the name we should ask for." },
      email: { label: "Email", error: emailError },
      phone: { label: "Phone" },
      role: { label: "Role", error: "Choose the role you need.", options: roleOptions },
      details: { label: "Shift, start date and number of staff" },
    },
  },
  apply: {
    subject: "Job application",
    submit: "Apply for work",
    note: "The office reviews each application and replies by phone or email.",
    fields: {
      name: { label: "Full name", error: "Write your full name." },
      email: { label: "Email", error: emailError },
      phone: { label: "Phone", error: "Write a phone number the office can call." },
      position: { label: "Role", error: "Choose the role you are applying for.", options: roleOptions },
      availability: { label: "Availability", options: ["Full-time", "Part-time", "Per diem", "Live-in"] },
      experience: { label: "Your license and experience" },
    },
  },
  message: {
    subject: "Website message",
    submit: "Send a message",
    note: "The office replies by phone or email.",
    fields: {
      name: { label: "Full name", error: "Write your full name." },
      email: { label: "Email", error: emailError },
      phone: { label: "Phone" },
      about: { label: "You are", options: ["A healthcare facility", "A healthcare professional", "Someone else"] },
      message: { label: "Message", error: "Write what you would like to ask." },
    },
  },
  referral: {
    subject: "Referral",
    submit: "Send a referral",
    note: "The form opens your email app with the referral filled in.",
    fields: {
      name: { label: "Your name", error: "Write your name." },
      email: { label: "Your email", error: emailError },
      referred: { label: "Their name", error: "Write the name of the person or facility." },
      contact: { label: "Their email or phone", error: "Write how we can reach them." },
      type: { label: "They are", options: ["A healthcare facility", "A healthcare professional"] },
      notes: { label: "Notes" },
    },
  },
};

export type FieldCopy = { label: string; error?: string; options?: string[] };
export type FormCopy = { subject: string; submit: string; note: string; fields: Record<string, FieldCopy> };

// ---------------------------------------------------------------- pages

export const pages = {
  layout: {
    title: "Eminent One: healthcare staffing for Maryland facilities",
    titleTemplate: "%s | Eminent One",
    ogDescription: "Nurses and care staff for Maryland hospitals, nursing homes, rehab, assisted living and home care.",
  },

  home: {
    hero: {
      title: "Healthcare staffing in Maryland",
      lead: "We recruit, credential and place nurses and care staff with Maryland facilities.",
      image: { photo: "medicineHero", subject: "nurse giving medicine" } as PhotoRef,
    },
    roles: {
      title: "The roles we place",
      image: { photo: "supplies", subject: "nurses at work" } as PhotoRef,
    },
    steps: {
      title: "From request to first shift in 3 steps",
      items: [
        {
          num: "1",
          title: "Send the role and shift",
          body: "The role, the number of staff, the shift times and the start date.",
          image: { photo: "recruitment", subject: "staffing request" } as PhotoRef,
        },
        {
          num: "2",
          title: "We check every credential",
          body: "We match the candidate to your role and confirm their papers before placement.",
          image: { photo: "notes", subject: "credential checks" } as PhotoRef,
        },
        {
          num: "3",
          title: "Staff report for the shift",
          body: "The professional starts on the agreed date. We call you after the first shift.",
          image: { photo: "staffing", subject: "nurses on shift" } as PhotoRef,
        },
      ],
    },
    settings: {
      title: "Facilities we staff in Maryland",
      lead: "From hospital units to clients’ homes. Choose a row to see the setting.",
      items: [
        { key: "hospitals", name: "Hospitals", body: "Nurses and nursing assistants for hospital units.", photo: "hospitals" as PhotoKey },
        { key: "nursing", name: "Nursing homes", body: "Nurses, CNAs and GNAs for residents' daily care.", photo: "nursingHomes" as PhotoKey },
        { key: "rehab", name: "Rehabilitation centers", body: "Therapists, nurses and aides for rehab patients.", photo: "rehabilitation" as PhotoKey },
        { key: "assisted", name: "Assisted living facilities", body: "Caregivers and CNAs for residents' daily living.", photo: "assistedLiving" as PhotoKey },
        { key: "home", name: "Home care agencies", body: "Home health aides and caregivers for clients at home.", photo: "homeCare" as PhotoKey },
      ],
    },
    checks: {
      sectionLabel: "Credential checks",
      label: "Credential checks",
      // the strong part turns to the accent colour as the statement scrolls past
      before: "Before anyone works a shift in your facility, we confirm their ",
      strong: "license or certification",
      after: ", their employment history and a background check.",
    },
    openings: {
      title: "Open nursing jobs",
      image: { photo: "onBreak", subject: "nurse between shifts" } as PhotoRef,
    },
  },

  services: {
    meta: {
      title: "Medical staffing: the roles we place",
      description:
        "RNs, LPNs, CNAs, home health aides, medical assistants, therapists, social workers and caregivers for Maryland facilities, on temporary, temp-to-perm or permanent terms.",
    },
    hero: {
      title: "Medical staffing for Maryland facilities",
      lead: "We screen and check every candidate before they start, on temporary, temp-to-perm or permanent terms.",
      image: { photo: "followUp", subject: "nurse at a bedside" } as PhotoRef,
    },
    roles: {
      title: "The roles we place",
      lead: "Nurses first, and the care staff who work beside them. Need a role that is not here? Ask the office.",
      images: [
        { photo: "hospitals", subject: "nurses on a ward" },
        { photo: "rehabilitation", subject: "therapist with a patient" },
      ] as PhotoRef[],
    },
    faq: {
      title: "Questions about staffing terms",
      lead: ["Or call the office on ", { text: phone, href: phoneHref }, "."] as Rich,
      items: [
        {
          q: "What is the difference between the terms?",
          a: "Temporary covers a short gap. Temp-to-perm starts as a contract you can turn into a hire. Permanent is a direct hire to your staff.",
        },
        {
          q: "Is every candidate credentialed?",
          a: "Yes. We verify licenses, certifications, employment history and background checks before anyone is placed.",
        },
        {
          q: "Which facilities do you staff?",
          a: "Hospitals, nursing homes, rehabilitation centers, assisted living facilities and home care agencies across Maryland.",
        },
        {
          q: "How do we get started?",
          a: ["Send a ", { text: "staffing request", href: "/employers/#request" }, " with the role, the shift and the start date."],
        },
      ] as { q: string; a: Rich }[],
    },
  },

  registeredNurses: {
    meta: {
      title: "Registered nurse staffing",
      description: "Registered nurses placed by Eminent One LLC in Maryland hospitals, nursing homes, rehab centers, assisted living and home care.",
    },
    hero: {
      title: "Registered nurse staffing in Maryland",
      lead: "RNs for hospitals, nursing homes, rehab centers, assisted living and home care. Duties differ by facility, so we match each nurse to the setting and the shift.",
      image: { photo: "staffing", subject: "nurses on shift" } as PhotoRef,
    },
    duties: {
      title: "What our RNs do on a shift",
      lead: "They monitor patient health, give treatments and medications as planned and keep doctors informed of changes.",
      items: [
        { name: "Assess and plan care", body: "Assess, plan and deliver nursing care to accepted standards." },
        { name: "Give treatments and medications", body: "Give treatments and medications and watch how each patient responds." },
        { name: "Keep the records", body: "Keep detailed records of each patient's progress." },
        { name: "Coordinate the care team", body: "Work with other health professionals and answer patient and family questions." },
      ],
      image: { photo: "nursingHomes", subject: "care in a nursing home" } as PhotoRef,
    },
    close: {
      title: "Request a registered nurse",
      line: "Send the shift and the start date. The office replies by phone or email.",
    },
  },

  employers: {
    meta: {
      title: "Request staff for your facility",
      description: "Request credentialed nurses and care staff for a Maryland facility, on temporary, temp-to-perm or permanent terms.",
    },
    action: { label: "Request staff", href: "#request" } as Link,
    hero: {
      title: "Staffing for Maryland care facilities",
      lead: "We recruit, screen and place healthcare professionals, and handle the credentialing, so each placement meets your facility's requirements.",
      image: { photo: "recruitment", subject: "recruiting interview" } as PhotoRef,
    },
    expect: {
      title: "What follows a staffing request",
      items: [
        { name: "A reply from the office", body: "By phone or email, about the role and the shift." },
        { name: "A match to your requirements", body: "Based on the role, the shift and the facility requirements you give us." },
        { name: "Papers checked before day one", body: "License, work history and background check confirmed before they start." },
        { name: "The terms you choose", body: "Temporary, temp-to-perm or permanent." },
        { name: "A call after the first shift", body: "We check in with you once the placement starts." },
      ],
      image: { photo: "credentialing", subject: "paperwork check" } as PhotoRef,
    },
    request: {
      title: "Send a staffing request",
      lead: [
        "The form opens your email app with the request filled in, addressed to the office. Prefer the phone? Call ",
        { text: phone, href: phoneHref },
        ".",
      ] as Rich,
    },
  },

  jobSeekers: {
    meta: {
      title: "Nursing and care jobs in Maryland",
      description:
        "Apply to work with Eminent One LLC: RN, LPN, CNA, home health aide and other care roles in Maryland facilities, full-time, part-time or per diem.",
    },
    action: { label: "Apply for work", href: "#apply" } as Link,
    seeShifts: { label: "See open shifts", href: "#openings" } as Link,
    hero: {
      title: "Healthcare jobs in Maryland",
      lead: "We place RNs, LPNs, CNAs, home health aides and other care staff with Maryland facilities. Apply once and we match you to shifts that fit your license.",
      image: { photo: "onBreakHero", subject: "nurse between shifts" } as PhotoRef,
    },
    openings: {
      title: "Open shifts in Owings Mills",
      lead: "Apply for a shift, or send one application for any role.",
      image: { photo: "homeCare", subject: "carers at work" } as PhotoRef,
    },
    checks: {
      title: "What we check before your first shift",
      lead: "Have these ready and the office can place you sooner.",
      items: [
        { name: "Your license or certification", body: "Current, and right for the role you apply for." },
        { name: "Your employment history", body: "Where you have worked and in which roles." },
        { name: "A background check", body: "Run before any placement starts." },
      ],
      image: { photo: "notes", subject: "paperwork check" } as PhotoRef,
    },
    apply: {
      title: "Apply for nursing and care work",
      lead: "The form opens your email app with your details filled in. Attach your resume there before you send it.",
      facts: [
        { name: "Terms", value: "Temporary, temp-to-perm, permanent" },
        { name: "Schedules", value: "Full-time, part-time, per diem" },
        { name: "After you start", value: "The office keeps in touch" },
      ],
    },
    close: {
      title: "Apply for nursing and care work",
      line: "One application covers every opening. The office replies by phone or email.",
    },
  },

  about: {
    meta: {
      title: "About Eminent One LLC",
      description: `Eminent One LLC is a Maryland healthcare staffing agency, license ${license}, run by Percy and Janet Irefin.`,
    },
    hero: {
      title: "Care staffing agency in Maryland",
      lead: `Maryland Health Care Staff Agency license ${license}. We place nurses and care staff across the state.`,
      image: { photo: "notesHero", subject: "nurse at a desk" } as PhotoRef,
    },
    agency: {
      title: "Run from Windsor Mill by the Irefins",
      lead: "Facilities come to us for temporary cover, temp-to-perm arrangements and permanent hires. Nurses and caregivers come to us for work that fits their license and schedule.",
      officeLabel: "Office",
      licenseLabel: "License",
      image: { photo: "nursingHomes", subject: "care in a nursing home" } as PhotoRef,
    },
    work: {
      title: "What every placement includes",
      items: [
        {
          title: "Checks credentials first",
          body: "Licenses, certifications, employment history and background checks, before anyone starts.",
          photo: "credentialing" as PhotoKey,
        },
        {
          title: "Matches each person to the setting",
          body: "We place by license, experience and the shift the facility needs.",
          photo: "assistedLiving" as PhotoKey,
        },
        {
          title: "Follows up after the start",
          body: "We stay in contact with the facility and the professional once a placement begins.",
          photo: "followUp" as PhotoKey,
        },
      ],
    },
  },

  resources: {
    meta: {
      title: "Licensing and industry links",
      description: "Licensing, regulatory and industry links for nurses and healthcare facilities, collected by Eminent One LLC.",
    },
    hero: {
      title: "Licensing links for nurses and facilities",
      lead: "The regulators, associations and labor agencies that Maryland nurses and care facilities deal with, in one list.",
      image: { photo: "rehabilitation", subject: "therapist with a patient" } as PhotoRef,
    },
    links: {
      title: "Regulators and associations",
      lead: "Each link opens the organization’s own site.",
      groups: [
        {
          title: "Licensing and regulators",
          links: [
            { name: "Maryland Board of Nursing", body: "Nursing licenses and practice rules in Maryland.", url: "mbon.maryland.gov" },
            { name: "MDH Office of Health Care Quality", body: "Licensing and oversight of facilities and agencies.", url: "health.maryland.gov/ohcq" },
            { name: "National Council of State Boards of Nursing", body: "Nurse licensure across states.", url: "ncsbn.org" },
          ],
        },
        {
          title: "Industry associations",
          links: [
            { name: "American Staffing Association", body: "The trade association for staffing firms.", url: "americanstaffing.net" },
            { name: "American Health Care Association", body: "Long-term and post-acute care providers.", url: "ahcancal.org" },
            { name: "American Public Health Association", body: "Public health news and practice.", url: "apha.org" },
          ],
        },
        {
          title: "Government and labor",
          links: [
            { name: "US Department of Health and Human Services", body: "Federal health policy and programs.", url: "hhs.gov" },
            { name: "US Department of Labor", body: "Employment and wage rules.", url: "dol.gov" },
            { name: "US Bureau of Labor Statistics", body: "Jobs and pay data for healthcare work.", url: "bls.gov" },
          ],
        },
      ],
      image: { photo: "notesWide", subject: "paperwork" } as PhotoRef,
    },
  },

  contact: {
    meta: {
      title: "Contact the office",
      description: `Contact Eminent One LLC, a Maryland healthcare staffing agency on ${street} in ${district}. Call ${phone} or send a message.`,
    },
    action: { label: "Send a message", href: "#message" } as Link,
    hero: {
      title: "Our staffing office in Windsor Mill",
      lead: `Send a message about staff for your facility or work for yourself, or call ${phone}. The office is on ${street} in ${district}.`,
      image: { photo: "staffing", subject: "nurses on shift" } as PhotoRef,
    },
    message: {
      title: "Write to the office",
      lead: "The form opens your email app with your message filled in, addressed to the office.",
      rows: {
        phone: "Phone",
        email: "Email",
        office: "Office",
        area: "We staff",
        areaValue: `Facilities across ${state}`,
      },
    },
  },

  referrals: {
    meta: {
      title: "Refer a nurse or a facility",
      description: "Refer a healthcare professional or a facility to Eminent One LLC. We follow up with them directly.",
    },
    action: { label: "Send a referral", href: "#refer" } as Link,
    hero: {
      title: "Refer a nurse or a facility to us",
      lead: "Give us the details of a nurse who wants work or a facility that needs staff, and the office follows up with them directly.",
      image: { photo: "assistedLiving", subject: "residents in assisted living" } as PhotoRef,
    },
    refer: {
      title: "Who to contact",
      lead: "Tell us who they are, how to reach them and whether they need staff or are looking for work.",
    },
    close: {
      title: "Send a referral",
      line: "Give us their details and the office follows up with them directly.",
    },
  },

  credits: {
    meta: {
      title: "Photograph credits",
      description: "Sources and licenses of the photographs on the Eminent One LLC website.",
    },
    title: "Photograph credits",
    commons: [
      { title: "Nurse with medicine", file: "Nurse_administering_medicine_using_a_spoon_in_a_healthcare_setting_during_the_day.jpg" },
      { title: "Nurse on a break", file: "Nurse_relaxes_on_couch_with_coffee_and_phone,_enjoying_a_brief_break_during_a_busy_shift_in_a_healthcare_facility.jpg" },
      { title: "Nurse taking notes", file: "Nurse_taking_notes_while_working_on_a_laptop_in_a_medical_office.jpg" },
      { title: "Nurses preparing supplies", file: "Nurses_work_in_a_medical_office_preparing_supplies_and_equipment.jpg" },
    ],
    commonsUrl: (file: string) => `https://commons.wikimedia.org/wiki/File:${file}`,
    author: "Shixart1985, ",
    license: { label: "CC BY 2.0", href: "https://creativecommons.org/licenses/by/2.0" },
    viaCommons: "Via Wikimedia Commons.",
    pexels: {
      title: "Facility and office photographs",
      license: { label: "Pexels license", href: "https://www.pexels.com/license/" },
      via: "Via Pexels.",
    },
  },

  notFound: {
    hero: {
      title: "This page is not on our site",
      lead: "The link may be from our old site. Staff requests and job applications are one click away.",
      image: { photo: "homeCare", subject: "carers at work" } as PhotoRef,
    },
  },
};
