/**
 * Skills for /skills and a compact chat digest.
 * Sources: Personal AI Avatar KB §36 (capability names only — no scores)
 * and Gnaneshwer_Detailed_Skills_Projects.docx (practised techniques).
 * Do not invent. Do not render progress bars.
 */

export const skillsProvenance =
  "Capability names from the Personal AI Avatar & Professional Knowledge Base (core skills matrix). Practised techniques from the Detailed Skills & Projects Compendium (June 2025 – August 2026). Listed, not scored.";

/** Avatar KB section 36 — names only. Self-rated Strong/Expert labels are omitted. */
export const skillMatrix = [
  "Product management",
  "AI product management",
  "Product strategy",
  "Product discovery",
  "MVP design",
  "PRD development",
  "Project management",
  "Programme management",
  "Healthcare technology",
  "Digital health",
  "Scientific research",
  "Immunology",
  "Medical biotechnology",
  "Healthcare management",
  "AI / GenAI concepts",
  "Data and analytics",
  "Clinical communication",
  "Stakeholder management",
  "KOL engagement",
  "Entrepreneurship",
  "Teaching",
  "UX / product thinking",
  "Technical architecture literacy",
  "Business strategy",
  "Scientific communication",
  "Leadership",
] as const;

export const skillGroups = [
  {
    title: "Document production",
    items: [
      "Node.js + docx library for multi-chapter manuscripts",
      "python-docx XML stitch, zipfile surgery, relationship-ID remapping",
      "Design tokens, US Letter / A4 layouts, table architecture",
      "QA loop: pandoc word count, LibreOffice PDF, pdftoppm visual check",
    ],
  },
  {
    title: "Python engineering",
    items: [
      "Chapter merge, OxmlElement, tracked-change resolution",
      "openpyxl Excel generation; survey CSV deduplication",
      "Pillow illustration helpers for a children's picture-book dummy",
    ],
  },
  {
    title: "Frontend",
    items: [
      "Vanilla JS SPAs and Next.js 14 TypeScript landings / dashboards",
      "Role-aware CTAs, lightbox, SVG gauges, CSS ticker",
      "Brand systems for DeliverX, Aksh Health, and Fluent Institute",
    ],
  },
  {
    title: "Presentations",
    items: [
      "pptxgenjs decks from Node.js",
      "Investor, principal-outreach, and teacher-training decks for named ventures",
    ],
  },
  {
    title: "Platforms",
    items: [
      "Supabase multi-tenant auth and RLS (Fluent Spec A)",
      "PostgreSQL schemas and human-in-the-loop approval queues",
      "Vercel deploys; LangGraph + FHIR R4 concepts for Aksh Health",
      "Neo4j, Medplum, Mirth Connect — specified in architecture notes, not claimed as live NHS integrations",
    ],
  },
  {
    title: "Product and GTM",
    items: [
      "JTBD, opportunity solution trees, Lean / BMC canvases",
      "RICE, ICE, Kano, MoSCoW, OKRs, PRDs, RACI, RAID",
      "India beachhead and UK entry sequencing as plans — not published results",
    ],
  },
  {
    title: "Clinical and lab",
    items: [
      "EU MDR / DCB 0129 / DSPT / GDPR awareness for HealthTech builds",
      "Human-in-the-loop: no AI auto-write on clinical outputs",
      "PhD immunology (Verona); MST platelet work (Linköping postdoc)",
    ],
  },
  {
    title: "Author craft",
    items: [
      "Evidence-tiered chapters; composite characters; research synthesis",
      "Product Book 2026 manuscripts produced through the document pipeline",
    ],
  },
] as const;

export function skillsPageKnowledge(): string {
  const matrix = skillMatrix.map((item) => `- ${item}`).join("\n");
  const groups = skillGroups
    .map((group) => `${group.title}: ${group.items.join("; ")}`)
    .join("\n");
  return `
SKILLS (/skills) — listed, no progress bars or scores. ${skillsProvenance}

Core matrix:
${matrix}

Practised techniques (skills document):
${groups}
`.trim();
}
