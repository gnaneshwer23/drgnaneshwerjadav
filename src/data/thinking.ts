export type ThinkPiece = {
  slug: string;
  date: string;
  title: string;
  dek: string;
  body: string[];
  related?: string;
};

/** Manual notes. Not a LinkedIn scrape. */
export const thinking: ThinkPiece[] = [
  {
    slug: "governance-enabled-the-build",
    date: "2026-04",
    title: "Governance enabled the build. It did not block it.",
    dek: "On Vigil-MODI: AI assists reviewers. It never replaces them.",
    related: "/work/vigil-modi",
    body: [
      "Regulatory work fails in two directions. One is theatre: binders, delays, and a process nobody can explain. The other is reckless automation: a model that writes the decision and a human who rubber-stamps it.",
      "Vigil-MODI was framed the other way. Modular Orchestrated Digital Intelligence — privacy-first anonymisation, document intelligence, regulation-as-code, FHIR-native architecture — with a person still accountable for the call. That is not a slogan. It is the product constraint.",
      "If you are building in CDSCO, MHRA, or NHS-adjacent environments, the interesting question is not “can the model summarise this file?” It is “what does the reviewer still own when the summary is good?”",
    ],
  },
  {
    slug: "decide-then-build",
    date: "2026",
    title: "When building is cheap, the decision is the product.",
    dek: "From Decide Then Build — the operating sequence for the AI era.",
    related: "/frameworks",
    body: [
      "AI made execution cheap without making deciding easy. Teams can now generate interfaces, agents, and decks in an afternoon. The failure mode moved upstream: shipping the wrong thing, faster.",
      "Decide Then Build is the sequence I use on HealthTech and EdTech work. Name the decision. Name the constraint (clinical, regulatory, ethical). Then build the smallest artefact that would change that decision. Not a pitch. A working loop.",
      "The books on the shelf walk the same argument through real ventures. They go live when a Gumroad URL is published — not before.",
    ],
  },
  {
    slug: "practice-not-certificates",
    date: "2025-11",
    title: "Practice the job. Stop collecting certificates.",
    dek: "Why Elevare is a simulation-first readiness product, not another content library.",
    related: "/work/elevare",
    body: [
      "Most career products still sell inventory: modules, badges, a PDF at the end. Hiring managers hire for demonstrated judgement under pressure.",
      "Elevare is being tested in public as a personalised accelerator — AI-guided workflows and role-specific simulations. The hypothesis is simple: lower the effort to practise the actual work.",
      "Until there is a published outcome study, treat that as a product thesis, not a measured lift. The A/B test is the evidence that it is real work, not a mock.",
    ],
  },
];

export function thinkBySlug(slug: string): ThinkPiece | undefined {
  return thinking.find((item) => item.slug === slug);
}
