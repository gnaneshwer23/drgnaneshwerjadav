export const site = {
  name: "Dr Gnaneshwer Jadav",
  shortName: "GJ",
  role: "Product & project leader",
  tagline:
    "I turn complex clinical, research, and learning problems into shipped products — in HealthTech, EdTech, and AI-enabled systems.",
  location: "London",
  email: "gnaneshwer.jadav@gmail.com",
  url: "https://gnaneshwerjadav.com",
  github: "https://github.com/gnaneshwer23",
  linkedin: "https://www.linkedin.com/in/gnaneshwer-jadav-healthcare/",
  company: "Akeno Health",
} as const;

export const work = [
  {
    number: "01",
    title: "Accountable Hindustan",
    category: "EdTech · Workforce",
    description:
      "A career operating system for converting education into employability, skills into trust, and potential into mobility.",
    href: "/accountable-hindustan",
    external: false,
  },
  {
    number: "02",
    title: "Aksh Health",
    category: "HealthTech · Clinical",
    description:
      "UK–India healthcare platforms spanning clinical workflow, regulated operations, and AI-assisted decision support.",
    href: "https://akshhealth.com",
    external: true,
  },
  {
    number: "03",
    title: "Fluent Institute",
    category: "EdTech · Learning",
    description:
      "Simulation-based learning and career-readiness programmes designed around real capability, not certificates.",
    href: "https://fluent.institute",
    external: true,
  },
  {
    number: "04",
    title: "DeliverX",
    category: "Product · Operations",
    description:
      "Project and delivery systems for turning narrative intent into mapped, accountable execution.",
    href: "https://www.deliverx.dev",
    external: true,
  },
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
