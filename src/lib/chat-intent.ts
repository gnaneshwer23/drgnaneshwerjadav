import { BOOK_CATALOG, storefront } from "@/data/commerce";

export type ChatChip = {
  kind:
    | "consult"
    | "book"
    | "waitlist"
    | "framework"
    | "projects"
    | "experience"
    | "education"
    | "skills";
  label: string;
  to: string;
  href?: string;
  primary?: boolean;
};

const MEDICAL =
  /\b(diagnos|prescri|symptom|dosage|treat my|my gut|is this cancer|legal advice)\b/i;
const CONSULT =
  /\b(consult|talk|session|appointment|calendar|slot|50[- ]?min|£50|gbp 50|how (do|can) i book|book a consult|book the)\b/i;
const READ =
  /\b(read|books|book title|manuscript|what should i read|open decide|decide then build)\b/i;
const COURSE = /\b(course|waitlist|cohort|lms|syllabus)\b/i;
const FRAMEWORK = /\b(framework|one-pager|ppt|deck|operating artefact)\b/i;
const PROJECTS =
  /\b(projects?|flagship|fluent|deliverx|aksh|vigil-?modi|akeno|elevare|library)\b/i;
const EXPERIENCE =
  /\b(experience|roles?|linkedin order|career|employers?|worked)\b/i;
const EDUCATION =
  /\b(education|degree|phd|mba|postdoc|university|kent|verona|siena|kakatiya|linköping|linkoping)\b/i;
const SKILLS = /\b(skills?|capabilities|fhir|hl7|competenc)/i;

const FLAGSHIP_HINTS: Array<{
  test: RegExp;
  label: string;
  href: string;
}> = [
  {
    test: /fluent/,
    label: "Visit Fluent Institute",
    href: "https://fluent.institute",
  },
  {
    test: /deliverx|deliver x/,
    label: "Visit DeliverX",
    href: "https://www.deliverx.dev",
  },
  {
    test: /aksh/,
    label: "Visit Aksh Health",
    href: "https://akshhealth.com",
  },
];

function mentionedBooks(text: string) {
  const haystack = text.toLowerCase();
  return storefront.books.filter((book) => {
    const title = book.title.toLowerCase();
    const slug = book.slug.replace(/-/g, " ");
    return haystack.includes(title.toLowerCase()) || haystack.includes(slug);
  });
}

export function citedSources(text: string): string[] {
  const titles = mentionedBooks(text).map((book) => book.title);
  const extra = BOOK_CATALOG.filter(
    (book) =>
      text.toLowerCase().includes(book.title.toLowerCase()) &&
      !titles.includes(book.title),
  ).map((book) => book.title);
  return [...new Set([...titles, ...extra])];
}

export function inferChatActions(options: {
  userMessages: string[];
  lastAssistant: string;
}): ChatChip[] {
  const lastUser = options.userMessages.at(-1) ?? "";
  const together = `${lastUser}\n${options.lastAssistant}`;

  if (MEDICAL.test(lastUser)) return [];

  const chips: ChatChip[] = [];
  const books = mentionedBooks(together);

  if (CONSULT.test(together)) {
    chips.push({
      kind: "consult",
      label: "Book consult",
      to: "/book",
      primary: true,
    });
    if (storefront.consult.calendarUrl) {
      chips.push({
        kind: "consult",
        label: "Pick a slot",
        to: "/book",
        href: storefront.consult.calendarUrl,
      });
    }
  }

  if (READ.test(together) || books.length > 0) {
    const featured =
      books[0] ??
      storefront.books.find((book) => book.slug === "decide-then-build");
    if (featured) {
      chips.push({
        kind: "book",
        label: `Open ${featured.title}`,
        to: "/books",
        href: featured.gumroadUrl ?? undefined,
      });
    }
  }

  if (FRAMEWORK.test(together) && !chips.some((chip) => chip.kind === "framework")) {
    chips.push({
      kind: "framework",
      label: "Open Decide Then Build",
      to: "/frameworks",
    });
  }

  if (COURSE.test(together)) {
    chips.push({
      kind: "waitlist",
      label: "Join waitlist",
      to: "/course",
    });
  }

  if (PROJECTS.test(together)) {
    const hay = together.toLowerCase();
    for (const hint of FLAGSHIP_HINTS) {
      if (hint.test.test(hay)) {
        chips.push({
          kind: "projects",
          label: hint.label,
          to: "/projects",
          href: hint.href,
          primary: !chips.some((chip) => chip.primary),
        });
      }
    }
    if (!chips.some((chip) => chip.kind === "projects" && !chip.href)) {
      chips.push({
        kind: "projects",
        label: "Open projects",
        to: "/projects",
      });
    }
  }

  if (EXPERIENCE.test(together)) {
    chips.push({
      kind: "experience",
      label: "Open experience",
      to: "/experience",
    });
  }

  if (EDUCATION.test(together)) {
    chips.push({
      kind: "education",
      label: "Open education",
      to: "/education",
    });
  }

  if (SKILLS.test(together)) {
    chips.push({
      kind: "skills",
      label: "Open skills",
      to: "/skills",
    });
  }

  const seen = new Set<string>();
  return chips
    .filter((chip) => {
      const key = `${chip.kind}:${chip.label}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 3);
}
