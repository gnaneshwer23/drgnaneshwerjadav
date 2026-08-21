import { education } from "./education";
import { experience } from "./experience";
import { resume } from "./resume";
import { flagships, library } from "./work";

const statusLabel: Record<string, string> = {
  SHIPPED: "live",
  PILOT: "pilot",
  IN_DEVELOPMENT: "in development",
  LIBRARY: "library",
};

function flagshipLine(item: (typeof flagships)[number]) {
  const live = item.href ? ` Live: ${item.href}.` : "";
  return `- ${item.title} (${statusLabel[item.status]}). ${item.summary}${live} Case study: /work/${item.slug}`;
}

function libraryLine(item: (typeof library)[number]) {
  return `- ${item.title} (${statusLabel[item.status]}). ${item.summary} Case: /work/${item.slug}`;
}

function roleLine(item: (typeof experience)[number]) {
  const products = item.products?.length
    ? ` Nested products: ${item.products.map((product) => product.title).join(", ")}.`
    : "";
  const note = item.note ? ` ${item.note}` : "";
  return `- ${item.role}, ${item.organisation} (${item.place}; ${item.period}). ${item.summary}${products}${note}`;
}

function educationLine(item: (typeof education)[number]) {
  return `- ${item.credential}, ${item.field} — ${item.place} (${item.period}). ${item.body}`;
}

/** Compact site digest for the DrJadav server prompt. Do not import from the chat UI. */
export function sitePagesKnowledge(): string {
  const skills = resume.skills.map((skill) => `- ${skill}`).join("\n");
  const focus = resume.focus
    .map((group) => `- ${group.title}: ${group.items.join("; ")}`)
    .join("\n");
  const notes = resume.notes
    .filter((note) => !/do not list it as employment/i.test(note))
    .map((note) => `- ${note}`)
    .join("\n");

  return `
SITE PAGES (use these paths in answers — one matching link, not a dump of all eight)
- Projects: /projects  (alias: /work redirects here)
- Experience: /experience
- Education: /education
- Skills: /skills
- Books: /books
- Course waitlist: /course
- Framework: /frameworks
- Consultation: /book  (alias /consultation)

PROJECTS (/projects)
Three flagships dominate. Give the live URL when asked about a named flagship. Do not quote $8.5M, 50 engineers, 99.9% uptime, 60+ MVPs, or 22–75% gains as results.
${flagships.map(flagshipLine).join("\n")}

Quieter library (not competing with flagships; nested under roles on /experience):
${library.map(libraryLine).join("\n")}
FlowPilot is not listed — not found. Accountable Hindustan is not routed from this site.

EXPERIENCE (/experience) — LinkedIn order. Postdoctoral work is education, not here.
${experience.map(roleLine).join("\n")}

EDUCATION (/education) — academic only.
${education.map(educationLine).join("\n")}

SKILLS (/skills) — listed, no progress bars or scores.
${skills}

Focus areas:
${focus}

Honesty notes:
${notes}
`.trim();
}
