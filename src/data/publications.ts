export type Publication = {
  year: string;
  title: string;
  venue: string;
  href?: string;
  note?: string;
};

/** Independently checkable or explicitly listed on resume.html. Do not pad. */
export const publications: Publication[] = [
  {
    year: "2021",
    title:
      "Identification of a Novel Serological Marker in Seronegative Rheumatoid Arthritis Using the Peptide Library Approach",
    venue: "Frontiers in Immunology",
    href: "https://doi.org/10.3389/fimmu.2021.753400",
    note: "Co-author, University of Verona group.",
  },
  {
    year: "2020",
    title:
      "CD4/CD8 CD28 null cells and HCMV in the pathogenesis of Systemic Sclerosis (SSc)",
    venue: "Immunological Disorders and Immunotherapy / related conference record",
    href: "https://archives-inflammation.imedpub.com/articles/cd8-cd28-null-cells-and-hcmv-in-the-pathogenesis-of-systemic-sclerosis-ssc.php?aid=47093",
    note: "PhD research topic at Verona; public conference/article record.",
  },
  {
    year: "2017",
    title: "Role of the human cytomegalovirus in systemic sclerosis",
    venue: "Journal of Clinical & Cellular Immunology (as listed on the public scholarly profile)",
    note: "Listed on the public author profile. Full text not re-hosted here.",
  },
];

export const publicationNotes = [
  "resume.html: 6+ peer-reviewed papers in immunology, hematology, and infectious diseases — not a numbered bibliography on disk.",
  "Public scholarly listing: 4 works, 32 citations, h-index 2 (as indexed on the LinkedIn/author card). That is the conservative public count.",
  "A prior personal site said 8+. This site does not inflate. Titles above are the ones independently found.",
  "Conference talks named on resume.html: Swedish Haematology Congress, SIICA, Immuno-Oncology Symposium.",
] as const;

export const patentPublic = {
  title: "AI-based Healthcare Management System",
  year: "2022",
  jurisdiction: "UK / EU",
  status: "Granted — as stated on resume.html and the Oct 2025 CV",
  framing:
    "High-level: a federated, privacy-preserving architecture for healthcare data and clinical decision support across institutions. No claims chart, no confidential specification, no unpublished algorithms.",
} as const;
