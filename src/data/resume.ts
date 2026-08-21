import { flagships } from "./work";
import { skillMatrix } from "./skills";

/**
 * Public profile facts. LinkedIn (https://www.linkedin.com/in/gnaneshwer-jadav/)
 * wins on headline, URL, and any date/title conflict. Local resume.html and
 * Gnaneshwer jadav-Resume.pdf fill gaps LinkedIn did not publish.
 */
export const resume = {
  provenance:
    "Headline, LinkedIn URL, and about line from the public LinkedIn profile (gnaneshwer-jadav). Experience, education years, and skills filled from ~/portfolio/resume.html and Desktop/PM Reforge/Gnaneshwer jadav-Resume.pdf where LinkedIn did not publish dates or titles. Do not invent employers.",
  headline:
    "Product & Programme Leader | AI-Enabled HealthTech & EdTech | Regulated Systems | PhD · MBA · Patent Holder",
  about:
    "I build and deliver regulated AI-enabled digital platforms — from 0→1 products in HealthTech and EdTech.",
  location: "London",
  current: {
    organisation: "Independent",
    role: "Product & programme leader",
    period: "2025 – Present",
    summary:
      "Public LinkedIn headline: product and programme leader in AI-enabled HealthTech and EdTech, regulated systems. LinkedIn did not publish a current employer title with dates. Local 2026 notes describe ongoing Aksh Health work; Akeno Health is listed as Jul 2021 – Apr 2025 on the Oct 2025 CV.",
  },
  education: [
    {
      credential: "MBA, Healthcare Management",
      source: "University of Kent, UK — 2021 (LinkedIn: MBA at Kent University; year from Oct 2025 CV)",
    },
    {
      credential: "PhD, Immunology",
      source: "University of Verona, Italy — 2019 (resume.html + Oct 2025 CV)",
    },
    {
      credential: "MSc, Medical Biotechnology",
      source: "University of Siena, Italy — 2015 (resume.html name; year from Oct 2025 CV, which says Molecular Biology)",
    },
    {
      credential: "BPharm, Pharmaceutical Sciences",
      source: "Kakatiya University, India — resume.html; Biology of Opportunity preface: pharmacy degree in Telangana",
    },
  ],
  experience: [
    {
      role: "Founder & Chief Product Officer",
      organisation: "Akeno Health",
      place: "UK",
      period: "Jul 2021 – Apr 2025",
      summary:
        "LinkedIn describes Akeno Health as an AI-driven platform for diabetes and chronic disease, integrating medical records, sensors, diagnostics, and microbiome data. Oct 2025 CV: founder & product manager, Jul 2021 – Apr 2025; 0→1 clinical-grade predictive SaaS; SUS 82; 93% task completion; federated-learning digital twin patent; £3,000 pre-seed. resume.html used CPO and ‘Present’; the dated CV and a later personal site both end the role in Apr 2025.",
    },
    {
      role: "Founder & Product Leader",
      organisation: "Mind Mesh AI Solutions Pvt Ltd",
      place: "India",
      period: "Mar 2025 – Present",
      summary:
        "No-code SaaS venture; project-based AI tools for student-led product launches (resume.html). LinkedIn did not publish this role.",
    },
    {
      role: "Teacher of Science",
      organisation: "Ashford School",
      place: "UK",
      period: "Feb 2021 – Jan 2025",
      summary:
        "Biology and chemistry curriculum with an inquiry-based approach (resume.html). Public LinkedIn also lists Herne Bay High School and Brompton Academy alongside Ashford School; no titles or dates were published for those two.",
    },
    {
      role: "Postdoctoral Researcher",
      organisation: "Linköping University",
      place: "Sweden",
      period: "Jan 2021 – Dec 2022",
      summary:
        "Platelet GPCR / haemato-immunology research; presented at Swedish Haematology Congress 2021 (resume.html). Oct 2025 CV groups university research 2013–2021; dates above are from resume.html.",
    },
  ],
  skills: skillMatrix,
  focus: [
    {
      title: "HealthTech platforms",
      items: [
        "Regulated healthcare systems",
        "Clinical and operational workflows",
        "Interoperability (FHIR / HL7)",
        "AI-assisted decision support",
      ],
    },
    {
      title: "Research & life sciences",
      items: [
        "Research intelligence and workflow tools",
        "Clinical trials and observational data",
        "Responsible AI in scientific contexts",
      ],
    },
    {
      title: "EdTech & AI product",
      items: [
        "Simulation-based learning",
        "Career-readiness systems",
        "LLM-assisted, human-in-the-loop workflows",
      ],
    },
  ],
  selectedWork: flagships.map((item) => ({
    title: item.title,
    category: item.category,
    summary: item.summary,
    href: item.href ?? `/work/${item.slug}`,
  })),
  notes: [
    "LinkedIn public page was loginwalled in this workspace; headline, about fragment, Akeno company description, Kent MBA, and school names come from the public LinkedIn listing. Full experience dates were not extractable from LinkedIn HTML.",
    "Akeno Health dates: Oct 2025 CV and a later personal site say Jul 2021 – Apr 2025. resume.html said Present. Used the dated end.",
    "Oct 2025 CV lists a granted UK/EU Healthcare Management System patent. Product Book manuscripts mention Indian Patent #439306. Do not merge them into one claim.",
    "Some manuscripts use the name Gnaneshwer Singh; treat that as the same author.",
    "resume.html lists 6+ peer-reviewed papers in immunology, hematology, and infectious diseases — not a numbered bibliography on this site.",
    "AMDARI appears on the public LinkedIn page without a published title or dates — do not list it as employment.",
  ],
} as const;

export function resumeKnowledge(): string {
  const education = resume.education
    .map((item) => `- ${item.credential} (${item.source})`)
    .join("\n");
  const experience = resume.experience
    .map(
      (item) =>
        `- ${item.role}, ${item.organisation} (${item.place}; ${item.period}). ${item.summary}`,
    )
    .join("\n");
  const ventures = resume.selectedWork
    .map((item) => `- ${item.title} (${item.category}): ${item.summary}`)
    .join("\n");
  const skills = resume.skills.map((item) => `- ${item}`).join("\n");
  const notes = resume.notes.map((note) => `- ${note}`).join("\n");

  return `
EXPERIENCE / RESUME
${resume.provenance}

Headline: ${resume.headline}
About: ${resume.about}
Location: ${resume.location}

Current public positioning: ${resume.current.role}. ${resume.current.summary}

Experience:
${experience}

Education:
${education}

Skills:
${skills}

Selected public work:
${ventures}

Honesty notes:
${notes}
`.trim();
}
