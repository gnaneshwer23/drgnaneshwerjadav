import { BOOK_CATALOG, storefront } from "@/data/commerce";

export type ChatChip = {
  kind: "consult" | "book" | "waitlist" | "framework";
  label: string;
  to: string;
  href?: string;
  primary?: boolean;
};

const MEDICAL =
  /\b(diagnos|prescri|symptom|dosage|treat my|my gut|is this cancer|legal advice)\b/i;
const CONSULT =
  /\b(book|consult|talk|session|appointment|calendar|slot|50[- ]?min|£50|gbp 50|price|how (do|can) i book)\b/i;
const READ =
  /\b(read|book title|manuscript|shelf|what should i read|open decide|decide then build)\b/i;
const COURSE = /\b(course|waitlist|cohort|lms|syllabus)\b/i;
const FRAMEWORK = /\b(framework|one-pager|ppt|deck|operating artefact)\b/i;
const PRODUCT =
  /\b(healthtech|edtech|deliver|aksh|fluent|product|regulated|build an app|startup)\b/i;

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
  }

  if (READ.test(together) || books.length > 0) {
    const featured = books[0] ?? storefront.books.find((book) => book.slug === "decide-then-build");
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

  if (
    chips.every((chip) => chip.kind !== "consult") &&
    options.userMessages.filter((message) => PRODUCT.test(message)).length >= 2
  ) {
    chips.push({
      kind: "consult",
      label: "Book consult",
      to: "/book",
    });
  }

  const seen = new Set<string>();
  return chips.filter((chip) => {
    const key = `${chip.kind}:${chip.label}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 2);
}
