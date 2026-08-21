import type { EvidenceKind } from "./evidence";

export type WorkStatus = "SHIPPED" | "PILOT" | "IN_DEVELOPMENT" | "LIBRARY";

export type WorkDomain = "HealthTech" | "EdTech" | "Delivery" | "Regulatory";

export type EvidenceBadge = {
  kind: EvidenceKind;
  label: string;
};

export type CaseBlock = {
  heading: string;
  body: string;
};

export type WorkItem = {
  number: string;
  slug: string;
  title: string;
  domain: WorkDomain;
  category: string;
  flagship: boolean;
  status: WorkStatus;
  role: string;
  summary: string;
  problem: string;
  approach: string;
  system: string;
  outcome: string;
  note?: string;
  href?: string;
  github?: string;
  badges: EvidenceBadge[];
  sections?: CaseBlock[];
};

export const work: WorkItem[] = [
  {
    number: "01",
    slug: "vigil-modi",
    title: "Vigil-MODI",
    domain: "Regulatory",
    category: "Regulatory AI · Digital health",
    flagship: false,
    status: "SHIPPED",
    role: "Programme lead",
    summary:
      "AI-assisted regulatory operating system for CDSCO and India’s digital health ecosystem (NDHM/ABDM), framed as a full lifecycle programme — not a concept demo.",
    problem:
      "Regulatory workflows stay manual, slow, and document-heavy. Adopting AI raises real concerns around compliance, safety, and trust.",
    approach:
      "MODI — Modular Orchestrated Digital Intelligence — applied as privacy-first anonymisation, AI-assisted document intelligence, regulation-as-code, and a FHIR-native, human-governed architecture. AI assists reviewers; it does not replace them.",
    system:
      "Human-governed review loop: intake, anonymisation, completeness checks, summarisation, and decision support under existing regulatory process.",
    outcome:
      "Publicly described as a delivered programme for CDSCO-aligned digital health oversight. Quantitative cycle-time claims from a prior personal site are not repeated here as measured proof.",
    note: "No confidential IP, model weights, or unpublished regulatory artefacts are disclosed.",
    github: "https://github.com/gnaneshwer23/modi",
    badges: [
      { kind: "ROLE", label: "Programme lead" },
      { kind: "EVIDENCE", label: "LinkedIn, Apr 2026" },
      { kind: "SCALE", label: "CDSCO / NDHM–ABDM context" },
      { kind: "OUTCOME", label: "Full lifecycle programme" },
    ],
  },
  {
    number: "02",
    slug: "aksh-health",
    title: "Aksh Health",
    domain: "HealthTech",
    category: "HealthTech · Clinical workflow",
    flagship: true,
    status: "IN_DEVELOPMENT",
    role: "Product & programme leader",
    summary:
      "UK–India healthcare platforms: an on-premise AI layer between hospital data systems (HL7 / FHIR) and clinicians — parsing, enriching, and summarising without sending PHI to the public cloud.",
    problem:
      "Clinicians inherit fragmented feeds. Cloud LLM APIs are a poor fit where special-category health data must stay on site.",
    approach:
      "On-premise ingestion (HL7 v2 / FHIR R4), local inference, and an audit trail designed against GDPR Article 9 and NHS DSP Toolkit constraints. Local 2026 notes record architecture decisions in progress — not a finished rollout.",
    system:
      "HL7 ingestion, FHIR as system of record for trial/status artefacts, on-prem summarisation, clinician-facing output. Budget, headcount, and uptime figures published elsewhere are targets, not results.",
    outcome:
      "Active build. Public site: akshhealth.com. No independently measured clinical outcome is claimed on this page.",
    href: "https://akshhealth.com",
    github: "https://github.com/gnaneshwer23/aksh-health",
    badges: [
      { kind: "ROLE", label: "Product & programme leader" },
      { kind: "TARGET", label: "In development, 2026" },
      { kind: "EVIDENCE", label: "Local architecture log + GitHub" },
      { kind: "SCALE", label: "UK–India clinical systems" },
    ],
  },
  {
    number: "03",
    slug: "akeno-health",
    title: "Akeno Health",
    domain: "HealthTech",
    category: "HealthTech · Chronic care",
    flagship: false,
    status: "PILOT",
    role: "Founder & product leader",
    summary:
      "AI-driven platform for diabetes and chronic disease: medical records, sensors, diagnostics, and related signals assembled into a patient profile for monitoring, planning, and clinician collaboration.",
    problem:
      "Chronic-disease management is fragmented across records, devices, and sites of care — with little shared context for the treating team.",
    approach:
      "0→1 clinical-grade B2B product from concept through pilot. LinkedIn describes the platform; the dated CV places the role Jul 2021 – Apr 2025.",
    system:
      "Patient profile, care-team collaboration, and a federated architecture covered at a high level by a granted UK/EU healthcare management system patent. Implementation details that would disclose IP are omitted.",
    outcome:
      "CV: 7-person cross-functional team; SUS 82 and 93% task completion after 120+ hours of usability testing; two private pilot clinics; 600+ patient encounters; £3,000 pre-seed. These are self-reported CV figures, not third-party audited KPIs.",
    github: "https://github.com/gnaneshwer23/akenohealth",
    badges: [
      { kind: "ROLE", label: "Founder & product leader" },
      { kind: "TEAM", label: "7-person cross-functional · CV" },
      { kind: "OUTCOME", label: "SUS 82 · 93% task completion" },
      { kind: "SCALE", label: "2 pilot clinics · 600+ encounters" },
      { kind: "EVIDENCE", label: "LinkedIn + Oct 2025 CV" },
    ],
  },
  {
    number: "04",
    slug: "elevare",
    title: "Elevare",
    domain: "EdTech",
    category: "EdTech · Career readiness",
    flagship: false,
    status: "IN_DEVELOPMENT",
    role: "Product leader",
    summary:
      "Personalised career acceleration: AI-guided readiness workflows and role-specific simulation so product learners practise the job, not just collect certificates.",
    problem:
      "Career-prep products over-index on content and under-index on realistic practice under time pressure.",
    approach:
      "Public LinkedIn (Nov 2025) describes a live A/B test on the product. Local Elevare work and GitHub repos document the build. Readiness-lift percentages from a prior personal site are not used as measured proof.",
    system:
      "Guided onboarding, skills intelligence, and simulation-first practice loops. Human review remains in the loop for coaching quality.",
    outcome:
      "In public test. No independently measured learner-outcome study is published here.",
    github: "https://github.com/gnaneshwer23/elevare-akshu",
    badges: [
      { kind: "ROLE", label: "Product leader" },
      { kind: "TARGET", label: "Public A/B test" },
      { kind: "EVIDENCE", label: "LinkedIn, Nov 2025" },
      { kind: "SCALE", label: "Product learners / PM tracks" },
    ],
  },
  {
    number: "05",
    slug: "nexus",
    title: "Nexus",
    domain: "HealthTech",
    category: "HealthTech · Interoperability",
    flagship: false,
    status: "LIBRARY",
    role: "Architecture & programme",
    summary:
      "Hospital interoperability work: HL7 v2 to FHIR R4 backbone, described on the prior personal site as a multi-channel integration programme.",
    problem:
      "Legacy HL7 v2 estates do not speak FHIR without a governed translation layer.",
    approach:
      "Integration-engine channels across HL7 families, with FHIR as the modern contract. Specific budget and audit figures from the prior site are not restated as independently verified outcomes.",
    system:
      "HL7 v2 families → FHIR R4 resources; clinical NLP as an optional de-identification path.",
    outcome:
      "Documented as a completed interoperability programme on the prior personal site. Treat quantitative claims there as self-reported until independently evidenced.",
    badges: [
      { kind: "ROLE", label: "Architecture & programme" },
      { kind: "EVIDENCE", label: "Prior personal site" },
      { kind: "SCALE", label: "Hospital integration estate" },
    ],
  },
  {
    number: "06",
    slug: "woundx",
    title: "WoundX",
    domain: "HealthTech",
    category: "HealthTech · Transitions of care",
    flagship: false,
    status: "LIBRARY",
    role: "Technical programme",
    summary:
      "Hospital-to-SNF transition concept: wound intelligence and FHIR-compliant referral bundles, recorded on the prior personal site.",
    problem:
      "Discharge delays when referral packs are incomplete and wound progress is poorly evidenced.",
    approach:
      "Completeness scoring, wound-progression views, and FHIR Composition / DocumentReference bundles.",
    system:
      "Referral completeness, acceptance prediction, and clinician-facing wound panel.",
    outcome:
      "Library entry from the prior personal site. No independent outcome study is cited here.",
    badges: [
      { kind: "ROLE", label: "Technical programme" },
      { kind: "EVIDENCE", label: "Prior personal site" },
      { kind: "TARGET", label: "Operational design" },
    ],
  },
  {
    number: "07",
    slug: "prism",
    title: "PRISM",
    domain: "HealthTech",
    category: "HealthTech · Trial ops",
    flagship: false,
    status: "IN_DEVELOPMENT",
    role: "Product lead",
    summary:
      "Protocol-to-patient intelligence: ingest trial documents into structured eligibility with criterion-level explainability.",
    problem:
      "Screening still depends on reading PDFs and tribal knowledge — slow, and hard to audit.",
    approach:
      "Structured eligibility schemas and a matching engine that can show why a patient matches or fails a criterion.",
    system:
      "Document ingest → criteria graph → explainable match. GitHub: prism.",
    outcome:
      "In development. Pilot-team targets from a prior site are labelled TARGET, not results.",
    github: "https://github.com/gnaneshwer23/prism",
    badges: [
      { kind: "ROLE", label: "Product lead" },
      { kind: "TARGET", label: "Pilot outreach" },
      { kind: "EVIDENCE", label: "GitHub + prior site" },
    ],
  },
  {
    number: "08",
    slug: "clinicease",
    title: "ClinicEase",
    domain: "HealthTech",
    category: "HealthTech · Clinical workflow",
    flagship: false,
    status: "LIBRARY",
    role: "Project manager",
    summary:
      "Deterministic-first clinic workflow: fast encounter start, WhatsApp continuity, one-page summaries. Recorded on the prior personal site.",
    problem:
      "Encounter setup and follow-up still cost minutes clinicians do not have.",
    approach:
      "Lean internal model, doctor-approved snapshots, messaging continuity without a second patient app. FHIR as export, not the core loop.",
    system:
      "Encounter initiation, immutable summary, WhatsApp Business follow-up.",
    outcome:
      "Library entry. Sub-minute encounter claims from the prior site are not independently verified here.",
    badges: [
      { kind: "ROLE", label: "Project manager" },
      { kind: "EVIDENCE", label: "Prior personal site" },
    ],
  },
  {
    number: "09",
    slug: "skill-bridge",
    title: "Skill-Bridge",
    domain: "EdTech",
    category: "EdTech · Learning platform",
    flagship: false,
    status: "LIBRARY",
    role: "Programme",
    summary:
      "Multilingual, mentor-led learning platform work. GitHub holds Skill-Bridge / Global Skill Bridge repos; learner-count headlines from a prior site are not used as proof.",
    problem:
      "Scale learning without collapsing into content dumps.",
    approach:
      "Structured courses, quizzes, and assistant loops with human mentors in the system.",
    system:
      "LMS patterns: tracking, assessment, certificates. Repos: skillbridge-connect, globalskillbridge.",
    outcome:
      "Public prototypes. 12,000+ learner figures from a prior site are omitted from this page’s proof.",
    github: "https://github.com/gnaneshwer23/skillbridge-connect",
    badges: [
      { kind: "ROLE", label: "Programme" },
      { kind: "EVIDENCE", label: "GitHub" },
      { kind: "TARGET", label: "Learner metrics unpublished here" },
    ],
  },
  {
    number: "10",
    slug: "vitalis",
    title: "Vitalis",
    domain: "HealthTech",
    category: "HealthTech · Remote monitoring",
    flagship: false,
    status: "LIBRARY",
    role: "Product leader",
    summary:
      "Digital-twin / remote-monitoring concept: fragmented EHR data toward explainable alerts and clinician summaries.",
    problem:
      "RPM noise without a coherent patient model.",
    approach:
      "Twin core over FHIR resources; explainable alerts for labs and interactions.",
    system:
      "Ingest → twin → alert → clinician summary. GitHub: vitalis-ai-tech.",
    outcome:
      "Library / prototype. No independently measured RPM outcome is claimed.",
    github: "https://github.com/gnaneshwer23/vitalis-ai-tech",
    badges: [
      { kind: "ROLE", label: "Product leader" },
      { kind: "EVIDENCE", label: "GitHub + prior site" },
    ],
  },
  {
    number: "11",
    slug: "methodiq",
    title: "MethodIQ",
    domain: "HealthTech",
    category: "HealthTech · Research ops",
    flagship: false,
    status: "IN_DEVELOPMENT",
    role: "Technical programme",
    summary:
      "Research-ops workspace for feasibility, protocol parsing, and screening support.",
    problem:
      "Trial methods live in documents; teams re-derive them by hand.",
    approach:
      "Source ingest, method extraction, and a workspace for runs — GitHub: method-iq.",
    system:
      "Sources, methods, runs. Pilot outreach noted on the prior site as in progress.",
    outcome:
      "In development. No published trial-acceleration metric.",
    github: "https://github.com/gnaneshwer23/method-iq",
    badges: [
      { kind: "ROLE", label: "Technical programme" },
      { kind: "TARGET", label: "Pilot outreach" },
      { kind: "EVIDENCE", label: "GitHub" },
    ],
  },
  {
    number: "12",
    slug: "fluent-institute",
    title: "Fluent Institute",
    domain: "EdTech",
    category: "EdTech · Learning",
    flagship: true,
    status: "SHIPPED",
    role: "Product",
    summary:
      "Simulation-based learning and career-readiness programmes designed around demonstrated capability, not certificates.",
    problem:
      "Credentials without practice do not transfer to the job.",
    approach:
      "Simulation-first programmes. Public site: fluent.institute. Local Desktop archive and GitHub fluent / fluent-institute repos.",
    system:
      "Practice loops, assessment, and readiness pathways.",
    outcome:
      "Public institute site. No independently audited learner-outcome study is cited here.",
    href: "https://fluent.institute",
    github: "https://github.com/gnaneshwer23/fluent-institute",
    badges: [
      { kind: "ROLE", label: "Product" },
      { kind: "EVIDENCE", label: "Live site + GitHub" },
    ],
  },
  {
    number: "13",
    slug: "deliverx",
    title: "DeliverX",
    domain: "Delivery",
    category: "Product · Operations",
    flagship: true,
    status: "SHIPPED",
    role: "Product",
    summary:
      "Project and delivery systems for turning narrative intent into mapped, accountable execution.",
    problem:
      "Delivery theatre — status without a decision graph.",
    approach:
      "Role-aware delivery intelligence. Public site: deliverx.dev. Local Desktop documentation packs.",
    system:
      "Work mapping, role views, and AI-assisted delivery briefs with humans deciding.",
    outcome:
      "Public product site. No independently verified throughput metric is claimed.",
    href: "https://www.deliverx.dev",
    badges: [
      { kind: "ROLE", label: "Product" },
      { kind: "EVIDENCE", label: "Live site + local docs" },
    ],
  },
  {
    number: "14",
    slug: "delivery-intelligence",
    title: "Delivery Intelligence",
    domain: "Delivery",
    category: "Ops · AI",
    flagship: false,
    status: "LIBRARY",
    role: "Product",
    summary:
      "Execution-intelligence work: AI-assisted tracking and reporting for delivery teams. Local Desktop archives (delivery intel / delivery intelligence).",
    problem:
      "Manual tracking and reporting eat the week and still miss the decision.",
    approach:
      "Assist, don’t replace: surfaces for status, risk, and next action.",
    system:
      "Delivery operating layer alongside DeliverX thinking.",
    outcome:
      "Local product work. Engagement-fee figures from a prior site are omitted.",
    badges: [
      { kind: "ROLE", label: "Product" },
      { kind: "EVIDENCE", label: "Local Desktop archives" },
    ],
  },
];

export const FLAGSHIP_SLUGS = [
  "fluent-institute",
  "deliverx",
  "aksh-health",
] as const;

export function workBySlug(slug: string): WorkItem | undefined {
  return work.find((item) => item.slug === slug);
}

export const flagships = FLAGSHIP_SLUGS.map((slug) => {
  const item = workBySlug(slug);
  if (!item) throw new Error(`Missing flagship: ${slug}`);
  return item;
});

export const library = work.filter((item) => !item.flagship);

export const workDomains: Array<WorkDomain | "All"> = [
  "All",
  "HealthTech",
  "EdTech",
  "Regulatory",
  "Delivery",
];
