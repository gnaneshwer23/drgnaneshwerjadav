/**
 * Evidence inventory — claims used on this site.
 *
 * MEASURED: stated on CV, LinkedIn, live product, or independently checkable.
 * TARGET / IN DEVELOPMENT: labelled as such in UI; never presented as shipped outcomes.
 * OMITTED: not independently corroborated; do not invent or headline.
 */

export type EvidenceKind =
  | "ROLE"
  | "TEAM"
  | "OUTCOME"
  | "TARGET"
  | "SCALE"
  | "EVIDENCE";

export type ClaimStatus = "MEASURED" | "TARGET" | "IN_DEVELOPMENT";

export type ProofItem = {
  value: string;
  label: string;
  status: ClaimStatus;
  source: string;
};

/** Home proof strip — defensible only. */
export const proofStrip: ProofItem[] = [
  {
    value: "PhD",
    label: "Immunology · University of Verona, 2019",
    status: "MEASURED",
    source: "resume.html, Oct 2025 CV, LinkedIn credentials",
  },
  {
    value: "MBA",
    label: "Healthcare Management · University of Kent, 2021",
    status: "MEASURED",
    source: "LinkedIn (Kent MBA); year from Oct 2025 CV",
  },
  {
    value: "Patent",
    label: "UK/EU healthcare management system",
    status: "MEASURED",
    source: "resume.html (2022, UK/EU); Oct 2025 CV (granted)",
  },
  {
    value: "600+",
    label: "Clinical encounters · Akeno pilot clinics",
    status: "MEASURED",
    source: "Oct 2025 CV; prior personal site",
  },
  {
    value: "London",
    label: "HealthTech · EdTech · regulated AI",
    status: "MEASURED",
    source: "Public LinkedIn; live site",
  },
];

export const omittedClaims = [
  "60+ MVPs / products delivered — prior personal site only; not on CV or LinkedIn",
  "22–27% operational efficiency / 22–75% measured gains — prior site, no method published",
  "Aksh Health $8.5M programme, 5→50 engineers, $3M seed, 99.9% uptime — TARGET, not shipped",
  "Akeno DDI F1 > 0.85, 500-case study, 135-language reach — TARGET / IN DEVELOPMENT",
  "Vigil 40–60% faster review and 98.5% PII redaction — prior site only; LinkedIn describes the programme without those figures",
  "Skill-Bridge 12,000+ learners / 65% active rate — prior site only; not used as a headline metric",
  "8+ peer-reviewed papers — resume.html says 6+; independently confirmed works are listed on /research; do not inflate",
  "Indian Patent #439306 — manuscript mention only; not independently verified; not merged with the UK/EU patent",
  "AMDARI as current employer — LinkedIn public listing had no title or dates; not listed as employment",
  "FlowPilot — not found in current site, GitHub, CVs, or local docs",
  "€50M Smart City Waste-to-Energy and similar AMDARI engagement values — prior site only, omitted from proof",
] as const;
