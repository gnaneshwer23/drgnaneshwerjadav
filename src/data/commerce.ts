/**
 * Single storefront config. Never invent Amazon / Gumroad URLs.
 *
 * TO FILL BUY LINKS TOMORROW
 * - Paste a live `https://…` into the book's `buyLinks.amazon` or `buyLinks.gumroad`
 *   (or `buyLinks.other`) in BOOK_CATALOG below. Empty string / "coming-soon" stays disabled.
 * - Gumroad can also be set via the existing `VITE_GUMROAD_*` env vars (see README).
 *
 * TO ADD A DOWNLOADABLE FILE TOMORROW
 * - Drop a short PDF or markdown into `public/books/{slug}.pdf` (or `.md`).
 * - Set `downloadHref` to `/books/{slug}.pdf`. Do not commit full `.docx` manuscripts.
 * - See `content/books/README.md`.
 */

export type BookSlug =
  | "build-before-you-scale"
  | "decide-then-build"
  | "deliver-value-lead-ai"
  | "dharma-in-the-dark"
  | "human-operating-system"
  | "art-of-a-meaningful-life"
  | "biology-of-opportunity"
  | "the-complete-product"
  | "the-shadow-who-got-lost"
  | "book-10";

export type FrameworkSlug = "decide-then-build";

type EnvMap = Record<string, string | undefined>;

const COMING_SOON = new Set([
  "",
  "coming-next-week",
  "coming_next_week",
  "coming-soon",
  "coming_soon",
  "soon",
  "tba",
  "n/a",
  "na",
]);

export function isLiveHttpUrl(value: string | undefined): boolean {
  const trimmed = value?.trim() ?? "";
  if (COMING_SOON.has(trimmed.toLowerCase())) return false;
  return /^https:\/\//i.test(trimmed);
}

export const BOOK_CATALOG: readonly {
  slug: BookSlug;
  title: string;
  subtitle: string;
  shortDescription: string;
  summary: string;
  gumroadEnv: string;
  amazonEnv?: string;
  buyLinks: { amazon: string; gumroad: string; other: string };
  downloadHref: string;
  forthcoming: boolean;
}[] = [
  {
    slug: "build-before-you-scale",
    title: "Build Before You Scale",
    subtitle: "The AI-native early-stage startup playbook",
    shortDescription:
      "Build something real before scaling. The argument walks through Aksh Health, Fluent Institute / Accountable Hindustan, and DeliverX — not hypothetical startups.",
    summary:
      "Copyright 2026, Dr Gnaneshwer Jadav. Theme: build something real before scaling; use real ventures to get hired and to learn. Walks frameworks through three companies: Aksh Health Ltd (FHIR-native clinical AI), Fluent Institute / Accountable Hindustan Pvt Ltd (SHAKTI methodology; Vaagdevi Vidyaniketan, Hyderabad), and DeliverX (Delivery Brain for seven delivery roles). Educational product manual. Buy links are not published yet.",
    gumroadEnv: "VITE_GUMROAD_BUILD_BEFORE_YOU_SCALE",
    amazonEnv: "VITE_AMAZON_BUILD_BEFORE_YOU_SCALE",
    buyLinks: { amazon: "", gumroad: "", other: "" },
    downloadHref: "/books/build-before-you-scale.md",
    forthcoming: false,
  },
  {
    slug: "decide-then-build",
    title: "Decide Then Build",
    subtitle: "Operating model for product work in the AI era",
    shortDescription:
      "AI made execution cheap without making deciding easy. When building is cheap, the decision is everything. The loop also exists as a one-pager on /frameworks.",
    summary:
      "The New Sequence That Separates Good Products from Expensive Mistakes. Core argument: AI made execution cheap without making deciding easy. Introduces a Decide Then Build loop (thirteen stages and four cadences described in the manuscript). The operating sequence is also sold as a framework SKU on /frameworks when a URL is published. Buy links for the book are not published yet.",
    gumroadEnv: "VITE_GUMROAD_DECIDE_THEN_BUILD",
    amazonEnv: "VITE_AMAZON_DECIDE_THEN_BUILD",
    buyLinks: { amazon: "", gumroad: "", other: "" },
    downloadHref: "/books/decide-then-build.md",
    forthcoming: false,
  },
  {
    slug: "deliver-value-lead-ai",
    title: "Deliver Value, and Lead in the Age of AI",
    subtitle: "A story-driven guide to modern project leadership",
    shortDescription:
      "AI suggests. Humans decide. Delivery happens. Three story-projects at three career levels: Aksh Health, Fluent Institute, and DeliverX.",
    summary:
      "Also titled Master Decision-Making, Deliver Value, and Lead in the Age of AI — a story-driven guide (25 chapters). Tagline: “AI suggests. Humans decide. Delivery happens.” Three real projects at three career levels: Aksh Health (PM), Fluent Institute (Senior PM / Product Manager), DeliverX (CEO / co-founder & PM). Buy links are not published yet.",
    gumroadEnv: "VITE_GUMROAD_DELIVER_VALUE",
    amazonEnv: "VITE_AMAZON_DELIVER_VALUE",
    buyLinks: { amazon: "", gumroad: "", other: "" },
    downloadHref: "/books/deliver-value-lead-ai.md",
    forthcoming: false,
  },
  {
    slug: "dharma-in-the-dark",
    title: "Dharma in the Dark",
    subtitle: "An ancient prophecy and the making of the modern world",
    shortDescription:
      "Philosophical exploration of Kali Yuga and the modern world, using the author’s own Sanskrit interpretive renderings — not a product manual.",
    summary:
      "An Ancient Prophecy and the Making of the Modern World (first published 2026). Philosophical exploration of Kali Yuga and the modern world. Author’s own Sanskrit interpretive renderings. Structure: Architecture of Time; The Mirror; The Philosophy; The Response. Buy links are not published yet.",
    gumroadEnv: "VITE_GUMROAD_DHARMA_IN_THE_DARK",
    amazonEnv: "VITE_AMAZON_DHARMA_IN_THE_DARK",
    buyLinks: { amazon: "", gumroad: "", other: "" },
    downloadHref: "/books/dharma-in-the-dark.md",
    forthcoming: false,
  },
  {
    slug: "human-operating-system",
    title: "The Human Operating System",
    subtitle: "21 principles to think clearly, focus deeply, and compound",
    shortDescription:
      "Personal operating-system and habits. Educational, not medical advice. Foreword dated South East London, 2025.",
    summary:
      "21 Principles to Think Clearly, Focus Deeply, Build Better Habits and Create a Life That Compounds (copyright 2025, Gnaneshwer Singh). Personal operating-system / habits book. Loop: Notice. Understand. Choose. Act. Repeat. Evaluate. Adapt. Educational, not medical advice. Foreword dated South East London, 2025. Buy links are not published yet.",
    gumroadEnv: "VITE_GUMROAD_HUMAN_OS",
    amazonEnv: "VITE_AMAZON_HUMAN_OS",
    buyLinks: { amazon: "", gumroad: "", other: "" },
    downloadHref: "/books/human-operating-system.md",
    forthcoming: false,
  },
  {
    slug: "art-of-a-meaningful-life",
    title: "The Art of a Meaningful Life",
    subtitle: "21 principles for living with purpose, wisdom, and grace",
    shortDescription:
      "Five parts: character, courage, self-mastery, compassion, and legacy. Composite stories, not a private memoir.",
    summary:
      "21 Principles for Living with Purpose, Wisdom, and Grace (first edition 2026). Five parts: Build Your Character; Live Courageously; Master Yourself; Serve with Compassion; Leave a Lasting Legacy. Composite stories, not a private memoir. Buy links are not published yet.",
    gumroadEnv: "VITE_GUMROAD_MEANINGFUL_LIFE",
    amazonEnv: "VITE_AMAZON_MEANINGFUL_LIFE",
    buyLinks: { amazon: "", gumroad: "", other: "" },
    downloadHref: "/books/art-of-a-meaningful-life.md",
    forthcoming: false,
  },
  {
    slug: "biology-of-opportunity",
    title: "The Biology of Opportunity",
    subtitle: "How gut, brain, environment and society shape potential",
    shortDescription:
      "Human potential as biology, environment, and society. Educational, not medical advice — never personalised clinical guidance from this book.",
    summary:
      "How the Gut, Brain, Environment and Society Shape Human Potential (2025). Thesis: human potential is shaped by biology, environment, and society. Educational, not medical advice. Never give personalised medical advice from this book. Preface notes pharmacy in Telangana, doctoral immunology in Siena and Verona, postdoc in Linköping, MBA at Kent. Buy links are not published yet.",
    gumroadEnv: "VITE_GUMROAD_BIOLOGY_OF_OPPORTUNITY",
    amazonEnv: "VITE_AMAZON_BIOLOGY_OF_OPPORTUNITY",
    buyLinks: { amazon: "", gumroad: "", other: "" },
    downloadHref: "/books/biology-of-opportunity.md",
    forthcoming: false,
  },
  {
    slug: "the-complete-product",
    title: "The Complete Product",
    subtitle: "What nobody tells you about product management",
    shortDescription:
      "A practical operating manual from a first PM role to product leadership. Case studies: Aksh Health, Fluent Institute, DeliverX.",
    summary:
      "What Nobody Tells You About Product Management. A practical operating manual from first PM role to product leadership (25 chapters). Case studies: Aksh Health, Fluent Institute, DeliverX. Parts include Foundation, Users, Opportunity, Planning, Measurement, Building, Advanced Practice, Leadership, The Complete PM. Buy links are not published yet.",
    gumroadEnv: "VITE_GUMROAD_COMPLETE_PRODUCT",
    amazonEnv: "VITE_AMAZON_COMPLETE_PRODUCT",
    buyLinks: { amazon: "", gumroad: "", other: "" },
    downloadHref: "/books/the-complete-product.md",
    forthcoming: false,
  },
  {
    slug: "the-shadow-who-got-lost",
    title: "The Shadow Who Got Lost at Night",
    subtitle: "Forthcoming children’s picture book",
    shortDescription:
      "A 32-page picture book for ages 4–7, named in the skills inventory. Not in the Product Book 2026 Word archive. Buy links empty until published.",
    summary:
      "Forthcoming. From the Detailed Skills & Projects Compendium: a 32-page picture book, ages 4–7, planned as book 1 of a series. Core concept: Shadow as a character with an interior life, separated from the child Riya during a powercut. Narrative inversion: darkness is Shadow’s home; belonging as choice, not obligation. Dedicated to Trayaksh Singh. Not a Product Book 2026 title. No Amazon or Gumroad URL yet — do not invent one.",
    gumroadEnv: "VITE_GUMROAD_SHADOW_WHO_GOT_LOST",
    amazonEnv: "VITE_AMAZON_SHADOW_WHO_GOT_LOST",
    buyLinks: { amazon: "", gumroad: "", other: "" },
    downloadHref: "/books/the-shadow-who-got-lost.md",
    forthcoming: true,
  },
  {
    slug: "book-10",
    title: "Book 10",
    subtitle: "Forthcoming — title to be announced",
    shortDescription:
      "Tenth shelf slot. Only eight Word manuscripts sit in content/books/. This placeholder is labelled forthcoming so we do not invent a published title.",
    summary:
      "Forthcoming. No title, ISBN, publisher, or buy link is published. When a manuscript is named, replace this placeholder’s title, summary, and download file. Do not invent an Amazon page.",
    gumroadEnv: "VITE_GUMROAD_BOOK_10",
    amazonEnv: "VITE_AMAZON_BOOK_10",
    buyLinks: { amazon: "", gumroad: "", other: "" },
    downloadHref: "/books/book-10.md",
    forthcoming: true,
  },
] as const;

export const FRAMEWORK_CATALOG: readonly {
  slug: FrameworkSlug;
  title: string;
  subtitle: string;
  gumroadEnv: string;
}[] = [
  {
    slug: "decide-then-build",
    title: "Decide Then Build",
    subtitle: "Loop one-pager and PPT deck — first framework SKU",
    gumroadEnv: "VITE_GUMROAD_FRAMEWORK_DECIDE_THEN_BUILD",
  },
] as const;

export type BookOffer = {
  slug: BookSlug;
  title: string;
  subtitle: string;
  shortDescription: string;
  summary: string;
  theme: string;
  buyLinks: { amazon: string | null; gumroad: string | null; other: string | null };
  gumroadUrl: string | null;
  amazonUrl: string | null;
  downloadHref: string | null;
  forthcoming: boolean;
  comingSoon: boolean;
  path: string;
};

export type FrameworkOffer = {
  slug: FrameworkSlug;
  title: string;
  subtitle: string;
  gumroadUrl: string | null;
  comingSoon: boolean;
};

export type ConsultOffer = {
  minutes: number;
  price: number;
  currency: string;
  priceLabel: string;
  calendarUrl: string | null;
  stripeUrl: string | null;
  hasCalendar: boolean;
  hasStripe: boolean;
};

export type Storefront = {
  consult: ConsultOffer;
  books: BookOffer[];
  frameworks: FrameworkOffer[];
};

function readNumber(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(value?.trim() ?? "", 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function liveUrl(value: string | undefined): string | null {
  const trimmed = value?.trim() ?? "";
  return isLiveHttpUrl(trimmed) ? trimmed : null;
}

function formatPrice(price: number, currency: string): string {
  try {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(price);
  } catch {
    return `${currency} ${price}`;
  }
}

function readUrl(value: string | undefined, fallback: string): string | null {
  if (value === undefined) return liveUrl(fallback);
  return liveUrl(value);
}

export function resolveCommerce(env: EnvMap): Storefront {
  const minutes = readNumber(env.VITE_CONSULT_MINUTES, 50);
  const price = readNumber(env.VITE_CONSULT_PRICE, 50);
  const currency = (env.VITE_CONSULT_CURRENCY?.trim() || "GBP").toUpperCase();
  const calendarUrl = readUrl(
    env.VITE_CALENDAR_URL,
    "https://calendar.app.google/7dYv7ZhNBrBeoDoP9",
  );
  const stripeUrl = readUrl(
    env.VITE_STRIPE_CONSULT_URL,
    "https://buy.stripe.com/7sYcMY0dmfjB3miby4b7y00",
  );

  return {
    consult: {
      minutes,
      price,
      currency,
      priceLabel: formatPrice(price, currency),
      calendarUrl,
      stripeUrl,
      hasCalendar: Boolean(calendarUrl),
      hasStripe: Boolean(stripeUrl),
    },
    books: BOOK_CATALOG.map((book) => {
      const gumroadUrl =
        liveUrl(book.buyLinks.gumroad) ?? liveUrl(env[book.gumroadEnv]);
      const amazonUrl =
        liveUrl(book.buyLinks.amazon) ??
        liveUrl(book.amazonEnv ? env[book.amazonEnv] : undefined);
      const otherUrl = liveUrl(book.buyLinks.other);
      const downloadHref = book.downloadHref.trim() || null;
      return {
        slug: book.slug,
        title: book.title,
        subtitle: book.subtitle,
        shortDescription: book.shortDescription,
        summary: book.summary,
        theme: book.shortDescription,
        buyLinks: {
          amazon: amazonUrl,
          gumroad: gumroadUrl,
          other: otherUrl,
        },
        gumroadUrl,
        amazonUrl,
        downloadHref,
        forthcoming: book.forthcoming,
        comingSoon: !gumroadUrl && !amazonUrl && !otherUrl,
        path: "/books",
      };
    }),
    frameworks: FRAMEWORK_CATALOG.map((item) => {
      const gumroadUrl = liveUrl(env[item.gumroadEnv]);
      return {
        slug: item.slug,
        title: item.title,
        subtitle: item.subtitle,
        gumroadUrl,
        comingSoon: !gumroadUrl,
      };
    }),
  };
}

function readRuntimeEnv(): EnvMap {
  if (typeof window === "undefined") {
    return (typeof process !== "undefined" ? process.env : {}) as EnvMap;
  }
  return import.meta.env as EnvMap;
}

/** Resolved storefront for the current runtime (browser Vite env or server process.env). */
export const storefront = resolveCommerce(readRuntimeEnv());

export function bookBySlug(slug: string): BookOffer | undefined {
  return storefront.books.find((book) => book.slug === slug);
}

export function commerceKnowledge(data: Storefront = storefront): string {
  const consultBits = [
    `Consult: ${data.consult.minutes}-minute DrJadav strategy session, ${data.consult.priceLabel}.`,
    "Visitors pick a slot on Google Calendar, then pay via Stripe — in that order. Site path: /book (alias /consultation).",
    data.consult.hasCalendar
      ? `Google Calendar appointment URL: ${data.consult.calendarUrl}`
      : "Google Calendar URL is not published yet. Send people to /book and email gnaneshwer.jadav@gmail.com.",
    data.consult.hasStripe
      ? `Stripe Payment Link: ${data.consult.stripeUrl}`
      : "Stripe Payment Link is not published yet. Do not invent a payment URL.",
  ];

  const bookLines = data.books.map((book) => {
    const bits = [
      book.forthcoming ? "Forthcoming." : null,
      book.shortDescription,
      book.buyLinks.amazon
        ? `Buy on Amazon: ${book.buyLinks.amazon}`
        : "Amazon URL empty — link tomorrow. Do not invent one.",
      book.buyLinks.gumroad
        ? `Buy on Gumroad: ${book.buyLinks.gumroad}`
        : "Gumroad URL empty — link tomorrow. Do not invent one.",
      book.downloadHref
        ? `Public summary download: ${book.downloadHref}`
        : "No public summary file yet.",
    ].filter(Boolean);
    return `- ${book.title} — ${book.subtitle}. ${bits.join(" ")}`;
  });

  const frameworkLines = data.frameworks.map((item) => {
    const buy = item.gumroadUrl
      ? `Buy on Gumroad: ${item.gumroadUrl}`
      : "Coming soon. No Gumroad URL yet.";
    return `- ${item.title} framework (${item.subtitle}). ${buy}`;
  });

  return `
COMMERCE (DrJadav storefront)
${consultBits.join("\n")}
Books (ten titles on /books. Buy only when a URL is listed; otherwise say links go live tomorrow. Never invent Amazon, Gumroad, or ISBN links):
${bookLines.join("\n")}
Frameworks:
${frameworkLines.join("\n")}
Courses: coming soon. No LMS, curriculum, modules, or price yet. Waitlist at /course (alias /courses). Do not invent a syllabus.
Site paths: /projects (Fluent Institute, DeliverX, Aksh Health; /work redirects here), /experience (roles + nested products), /education, /skills, /book (consult; alias /consultation), /books, /course (waitlist), /frameworks, /about, /cv, /chat (DrJadav desk). Let’s talk → /book.
`.trim();
}
