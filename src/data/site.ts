export const site = {
  name: "Dr Gnaneshwer Jadav",
  navName: "Gnaneshwer Jadav",
  brand: "DrJadav",
  shortName: "GJ",
  role: "AI Product & Programme Leader",
  hero: "I build intelligent products for complex problems.",
  tagline:
    "From immunology labs to regulated digital platforms — HealthTech, EdTech, and AI systems that have to work in the real world.",
  location: "London",
  email: "gnaneshwer.jadav@gmail.com",
  url: "https://gnaneshwerjadav.com",
  github: "https://github.com/gnaneshwer23",
  linkedin: "https://www.linkedin.com/in/gnaneshwer-jadav/",
  credentials: "PhD · MBA · Patent holder",
  defaultTitle: "Gnaneshwer Jadav — AI Product & Programme Leader",
  defaultDescription:
    "AI Product & Programme Leader. I build intelligent products for complex problems across HealthTech, EdTech, and regulated systems. PhD immunology. Based in London.",
} as const;

export const audiences = [
  {
    id: "recruiters",
    label: "Recruiters",
    line: "Scientist-operator who ships: PhD immunology, MBA healthcare, patented product work.",
  },
  {
    id: "healthtech",
    label: "HealthTech & pharma",
    line: "Clinical depth, FHIR / HL7, human-governed AI in regulated environments.",
  },
  {
    id: "founders",
    label: "Founders & investors",
    line: "0→1 platforms with programme discipline — discovery through delivery.",
  },
  {
    id: "leaders",
    label: "Product & tech leaders",
    line: "Decide, then build. AI as an accelerator. Humans stay in the loop.",
  },
] as const;

export const narrative = [
  { id: "science", label: "Science", detail: "Pharmacy, medical biotechnology, immunology PhD." },
  { id: "product", label: "Product", detail: "0→1 HealthTech and EdTech platforms." },
  { id: "ai", label: "AI", detail: "Human-governed agents in regulated workflows." },
  { id: "delivery", label: "Delivery", detail: "Programme leadership from roadmap to rollout." },
  { id: "impact", label: "Impact", detail: "Pilots, patents, and products that leave the lab." },
] as const;

export const focusAreas = [
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
] as const;
