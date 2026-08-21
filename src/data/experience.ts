/**
 * Experience — reverse-chronological roles.
 * LinkedIn public page (loginwalled here) lists AMDARI, teaching schools,
 * and Akeno Health. Dates/titles filled from resume.html, dated CV, and the
 * last public LinkedIn scrape. Products nest under roles; they do not compete
 * with Fluent Institute, DeliverX, or Aksh Health (those live in Work).
 */

export type ExperienceProduct = {
  slug: string;
  title: string;
};

export type ExperienceRole = {
  organisation: string;
  role: string;
  place: string;
  period: string;
  summary: string;
  source: string;
  products?: ExperienceProduct[];
  note?: string;
};

export const experience: ExperienceRole[] = [
  {
    organisation: "Independent",
    role: "AI Product & Programme Leader",
    place: "London",
    period: "2025 – Present",
    summary:
      "Public LinkedIn headline: product and programme leader in AI-enabled HealthTech and EdTech, regulated systems. No current employer title with dates was published on LinkedIn.",
    source: "LinkedIn headline; local 2026 work",
    products: [
      { slug: "vigil-modi", title: "Vigil-MODI" },
      { slug: "elevare", title: "Elevare" },
      { slug: "nexus", title: "Nexus" },
      { slug: "woundx", title: "WoundX" },
      { slug: "prism", title: "PRISM" },
      { slug: "clinicease", title: "ClinicEase" },
      { slug: "skill-bridge", title: "Skill-Bridge" },
      { slug: "vitalis", title: "Vitalis" },
      { slug: "methodiq", title: "MethodIQ" },
      { slug: "delivery-intelligence", title: "Delivery Intelligence" },
    ],
    note: "Fluent Institute, DeliverX, and Aksh Health are the featured live products — see Work.",
  },
  {
    organisation: "AMDARI",
    role: "Senior Product & Project Consultant",
    place: "United Kingdom",
    period: "Sep 2025 – Present",
    summary:
      "LinkedIn lists AMDARI as an affiliation. Title and dates were not published on the public profile; they come from the prior personal site. No engagement-fee or “60+ MVP” figures are repeated here.",
    source: "LinkedIn company listing; dates/title from prior personal site",
  },
  {
    organisation: "Mind Mesh AI Solutions Pvt Ltd",
    role: "Founder & Product Leader",
    place: "India",
    period: "Mar 2025 – Present",
    summary:
      "No-code SaaS venture; project-based AI tools for student-led product launches. LinkedIn did not publish this role.",
    source: "resume.html",
  },
  {
    organisation: "Accountable Hindustan",
    role: "Founder & Product Leader",
    place: "UK",
    period: "Jan 2025 – Present",
    summary:
      "Civic-tech tools across healthcare, education, and public policy. Listed on resume.html. This website does not route to an Accountable Hindustan product page.",
    source: "resume.html (prior site listed Jan–Sep 2025)",
  },
  {
    organisation: "Akeno Health",
    role: "Founder & Product Leader",
    place: "UK",
    period: "Jul 2021 – Apr 2025",
    summary:
      "LinkedIn: AI-driven platform for diabetes and chronic disease, integrating records, sensors, diagnostics, and related signals. Dated CV ends the role in Apr 2025 (resume.html said Present).",
    source: "LinkedIn company + Oct 2025 CV",
    products: [{ slug: "akeno-health", title: "Akeno Health" }],
  },
  {
    organisation: "Ashford School",
    role: "Teacher of Science",
    place: "UK",
    period: "Feb 2021 – Jan 2025",
    summary:
      "Biology and chemistry, inquiry-based curriculum. Public LinkedIn also lists Herne Bay High School and Brompton Academy without published titles or dates.",
    source: "resume.html; LinkedIn school names",
  },
];
