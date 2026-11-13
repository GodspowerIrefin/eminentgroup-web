export const site = {
  name: "Eminent One LLC",
  short: "Eminent One",
  tagline: "People. Care. Opportunities.",
  description:
    "Eminent One LLC is a licensed Maryland healthcare staffing agency placing RNs, LPNs, CNAs, HHAs, and other professionals in hospitals, nursing homes, rehab centers, assisted living, and home care.",
  phone: "410-929-9388",
  phoneHref: "tel:4109299388",
  email: "eminentonellc@gmail.com",
  street: "8310 Liberty Rd",
  city: "Windsor Mill, MD 21244",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=8310+Liberty+Rd+Windsor+Mill+MD+21244",
  license: "HCSA-01609",
  licenseLabel: "Maryland Health Care Staff Agency Licensed",
  areas: "Maryland",
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/employers", label: "For Employers" },
  { href: "/job-seekers", label: "For Job Seekers" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export const megaNav = [
  {
    label: "Staffing Services",
    href: "/services",
    items: [
      { label: "Registered Nurses", href: "/services/registered-nurses" },
      { label: "All Roles We Place", href: "/services" },
      { label: "Temporary and Permanent Staffing", href: "/services" },
    ],
  },
  {
    label: "For Employers",
    href: "/employers",
    items: [
      { label: "Request Staff", href: "/employers#request" },
      { label: "Employer Services", href: "/employers" },
      { label: "Referrals", href: "/referrals" },
    ],
  },
  {
    label: "Careers",
    href: "/job-seekers",
    items: [
      { label: "Open Positions", href: "/job-seekers#openings" },
      { label: "Apply for Work", href: "/job-seekers#apply" },
      { label: "Registered Nurse Roles", href: "/job-seekers?role=RN#apply" },
    ],
  },
  {
    label: "Who We Are",
    href: "/about",
    items: [
      { label: "About Eminent One", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Insights",
    href: "/resources",
    items: [{ label: "Resources", href: "/resources" }],
  },
];

export const services = [
  {
    title: "Recruitment and placement",
    body: "We recruit, screen, and place healthcare professionals in hospitals, nursing homes, rehab centers, assisted living facilities, and home care agencies.",
  },
  {
    title: "Credentialing and compliance",
    body: "We verify licenses, certifications, employment history, and background checks on every candidate before placement.",
  },
  {
    title: "Temporary, temp-to-perm, and permanent staffing",
    body: "Short-term coverage, a longer contract, or a permanent hire.",
  },
  {
    title: "Follow-up after placement",
    body: "We stay in contact with the facility and the professional once the placement starts.",
  },
];

export const roles = [
  {
    short: "RN",
    name: "Registered Nurses",
    body: "Assessment, treatment, and care coordination in clinical and residential settings.",
    href: "/services/registered-nurses",
  },
  {
    short: "LPN",
    name: "Licensed Practical Nurses",
    body: "Basic nursing care and follow-up under the direction of RNs and physicians.",
  },
  {
    short: "CNA",
    name: "Certified Nursing Assistants",
    body: "Daily living support and comfort for patients and residents.",
  },
  {
    short: "HHA",
    name: "Home Health Aides",
    body: "Personal care and support for clients in their homes.",
  },
  {
    short: "MA",
    name: "Medical Assistants",
    body: "Clinical and administrative support in practices and clinics.",
  },
  {
    short: "PT · OT · SLP",
    name: "Therapists",
    body: "Rehabilitation and therapy professionals for facilities and clinics.",
  },
  {
    short: "SW",
    name: "Social Workers",
    body: "Support, planning, and coordination for patients and families.",
  },
  {
    short: "CG",
    name: "Caregivers",
    body: "Day-to-day care and companionship.",
  },
];

export const settings = [
  "Hospitals",
  "Nursing homes",
  "Rehabilitation centers",
  "Assisted living facilities",
  "Home care agencies",
];

export const jobs = [
  {
    code: "RN",
    title: "Registered Nurse (RN)",
    location: "Owings Mills, MD",
    shift: "Night shift, 11:00pm to 7:00am",
    extra: "Shift differential",
    pay: "$37–$41",
  },
  {
    code: "LPN",
    title: "Licensed Practical Nurse (LPN)",
    location: "Owings Mills, MD",
    shift: "Day or evening, 6:00am to 2:30pm or 2:00pm to 10:30pm",
    extra: "",
    pay: "$27–$35",
  },
];

export const process = {
  facilities: {
    label: "For facilities",
    cta: { href: "/employers#request", label: "Request staff" },
    steps: [
      { title: "Tell us what you need", body: "Roles, shifts, and start date." },
      {
        title: "We match and verify",
        body: "Licenses, work history, and background checks confirmed.",
      },
      {
        title: "Staff report for the shift",
        body: "We follow up with you after the first shift.",
      },
    ],
  },
  professionals: {
    label: "For professionals",
    cta: { href: "/job-seekers#apply", label: "Apply for work" },
    steps: [
      { title: "Apply online", body: "Tell us your license and availability." },
      {
        title: "We verify your credentials",
        body: "License or certification, work history, and background check.",
      },
      {
        title: "Start working",
        body: "We place you with a facility that fits your license and schedule.",
      },
    ],
  },
};

export const leaders = [
  {
    initials: "PI",
    name: "Percy Irefin",
    title: "Chief Executive Officer",
  },
  {
    initials: "JI",
    name: "Janet Irefin",
    title: "Director",
  },
];

export const roleOptions = [
  "RN",
  "LPN",
  "CNA / GNA",
  "HHA",
  "Medical Assistant",
  "Therapist",
  "Social Worker",
  "Caregiver",
  "Other",
];
