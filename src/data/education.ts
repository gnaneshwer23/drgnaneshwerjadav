/**
 * Education — kept separate from work. Verified dates only.
 * Postdoctoral research lives here, not in the experience timeline.
 */

export type EducationItem = {
  credential: string;
  field: string;
  place: string;
  period: string;
  body: string;
  source: string;
};

export const education: EducationItem[] = [
  {
    credential: "Postdoctoral researcher",
    field: "Haemato-immunology",
    place: "Linköping University, Sweden",
    period: "Jan 2021 – Dec 2022",
    body: "Platelet GPCR research; presented at the Swedish Haematology Congress 2021.",
    source: "resume.html",
  },
  {
    credential: "Postdoctoral researcher",
    field: "Immunology & infectious diseases",
    place: "University of Verona, Italy",
    period: "Jan 2020 – Dec 2020",
    body: "Translational immunology after the doctorate. Dates from the prior personal site; not a separate line on resume.html.",
    source: "Prior personal site",
  },
  {
    credential: "MBA",
    field: "Healthcare Management",
    place: "University of Kent, UK",
    period: "2021",
    body: "Healthcare administration and delivery in regulated environments. LinkedIn: MBA at Kent; year from the dated CV. Prior site listed Jan 2020 – Oct 2021.",
    source: "LinkedIn (Kent MBA); year from Oct 2025 CV",
  },
  {
    credential: "PhD",
    field: "Immunology",
    place: "University of Verona, Italy",
    period: "2016 – 2019",
    body: "CD4+/CD8+CD28null T cells, HCMV, and systemic sclerosis. Conference presentations and peer-reviewed work.",
    source: "resume.html + Oct 2025 CV",
  },
  {
    credential: "MSc",
    field: "Medical Biotechnology",
    place: "University of Siena, Italy",
    period: "2013 – 2015",
    body: "Advanced biomedical training. Dated CV lists the year; one CV variant says Molecular Biology — this site uses the resume.html degree name.",
    source: "resume.html; years from Oct 2025 CV",
  },
  {
    credential: "BPharm",
    field: "Pharmaceutical Sciences",
    place: "Kakatiya University, India",
    period: "2008 – 2012",
    body: "Drug development, pharmacology, and quality systems. Years from the prior personal site; degree from resume.html.",
    source: "resume.html; years from prior personal site",
  },
];
