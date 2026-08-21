import { work } from "./site";

/**
 * Timeline from the 2025 personal resume at ~/portfolio/resume.html
 * plus public site / GitHub README. Do not invent extra employers.
 */
export const resume = {
  provenance:
    "Experience and education lines come from Dr Jadav’s 2025 resume.html in the local portfolio site. Public products come from gnaneshwerjadav.com and the GitHub profile README.",
  headline: "AI-driven healthcare product leader",
  location: "London",
  current: {
    organisation: "Akeno Health",
    role: "Founder & Chief Product Officer",
    period: "Jul 2021 – Present",
    summary:
      "Founder & CPO at Akeno Health. Public materials describe HealthTech, EdTech, and AI-enabled systems — turning clinical, research, and learning problems into shipped products.",
  },
  education: [
    {
      credential: "MBA, Healthcare Management",
      source: "University of Kent, UK — 2025 resume.html",
    },
    {
      credential: "PhD, Immunology",
      source: "University of Verona, Italy — 2025 resume.html",
    },
    {
      credential: "MSc, Medical Biotechnology",
      source: "University of Siena, Italy — 2025 resume.html",
    },
    {
      credential: "BPharm, Pharmaceutical Sciences",
      source: "Kakatiya University, India — 2025 resume.html",
    },
  ],
  experience: [
    {
      role: "Founder & Chief Product Officer",
      organisation: "Akeno Health",
      place: "UK",
      period: "Jul 2021 – Present",
      summary:
        "Spearheaded patented AI-powered healthcare platform work; GTM, stakeholder collaborations, and clinical pilot launches across UK & EU (2025 resume.html).",
    },
    {
      role: "Founder & Product Leader",
      organisation: "Accountable Hindustan",
      place: "UK",
      period: "Jan 2025 – Present",
      summary:
        "Civic-tech and career OS integrating healthcare, education, and public policy.",
    },
    {
      role: "Founder & Product Leader",
      organisation: "Mind Mesh AI Solutions Pvt Ltd",
      place: "India",
      period: "Mar 2025 – Present",
      summary:
        "No-code SaaS venture; project-based AI tools for student-led product launches (2025 resume.html).",
    },
    {
      role: "Teacher of Science",
      organisation: "Ashford School",
      place: "UK",
      period: "Feb 2021 – Jan 2025",
      summary:
        "Biology and chemistry curriculum with an inquiry-based approach (2025 resume.html).",
    },
    {
      role: "Postdoctoral Researcher",
      organisation: "Linköping University",
      place: "Sweden",
      period: "Jan 2021 – Dec 2022",
      summary:
        "Platelet GPCR research; presented at Swedish Haematology Congress 2021 (2025 resume.html).",
    },
  ],
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
  selectedWork: work.map((item) => ({
    title: item.title,
    category: item.category,
    summary: item.description,
    href: item.href,
  })),
  notes: [
    "2025 resume.html lists a 2022 UK/EU AI-based Healthcare Management System patent. Product Book manuscripts mention Indian Patent #439306. Do not merge them into one claim.",
    "Some manuscripts use the name Gnaneshwer Singh; treat that as the same author.",
    "Resume.html lists 6+ peer-reviewed papers in immunology, hematology, and infectious diseases — not a numbered bibliography on this site.",
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
  const notes = resume.notes.map((note) => `- ${note}`).join("\n");

  return `
EXPERIENCE / RESUME
${resume.provenance}

Current: ${resume.current.role} at ${resume.current.organisation}, ${resume.location}. ${resume.current.summary}

Experience:
${experience}

Education:
${education}

Selected public work:
${ventures}

Honesty notes:
${notes}
`.trim();
}
