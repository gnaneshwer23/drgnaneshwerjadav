/** Single storefront config. URLs come from Vite env — never invent Amazon links. */

export type BookSlug =
  | "build-before-you-scale"
  | "decide-then-build"
  | "deliver-value-lead-ai"
  | "dharma-in-the-dark"
  | "human-operating-system"
  | "art-of-a-meaningful-life"
  | "biology-of-opportunity"
  | "the-complete-product";

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
  theme: string;
  gumroadEnv: string;
}[] = [
  {
    slug: "build-before-you-scale",
    title: "Build Before You Scale",
    subtitle: "The AI-native early-stage startup playbook",
    theme:
      "Build something real before scaling. Walks the argument through Aksh Health, Fluent Institute / Accountable Hindustan, and DeliverX.",
    gumroadEnv: "VITE_GUMROAD_BUILD_BEFORE_YOU_SCALE",
  },
  {
    slug: "decide-then-build",
    title: "Decide Then Build",
    subtitle: "Operating model for product work in the AI era",
    theme:
      "AI made execution cheap without making deciding easy. When building is cheap, the decision is everything.",
    gumroadEnv: "VITE_GUMROAD_DECIDE_THEN_BUILD",
  },
  {
    slug: "deliver-value-lead-ai",
    title: "Deliver Value, and Lead in the Age of AI",
    subtitle: "A story-driven guide to modern project leadership",
    theme:
      "AI suggests. Humans decide. Delivery happens. Three story-projects at three career levels.",
    gumroadEnv: "VITE_GUMROAD_DELIVER_VALUE",
  },
  {
    slug: "dharma-in-the-dark",
    title: "Dharma in the Dark",
    subtitle: "An ancient prophecy and the making of the modern world",
    theme:
      "Philosophical exploration of Kali Yuga, the modern world, and what Hindu scriptures foresaw.",
    gumroadEnv: "VITE_GUMROAD_DHARMA_IN_THE_DARK",
  },
  {
    slug: "human-operating-system",
    title: "The Human Operating System",
    subtitle: "21 principles to think clearly, focus deeply, and compound",
    theme:
      "Personal operating-system and habits. Educational, not medical advice.",
    gumroadEnv: "VITE_GUMROAD_HUMAN_OS",
  },
  {
    slug: "art-of-a-meaningful-life",
    title: "The Art of a Meaningful Life",
    subtitle: "21 principles for living with purpose, wisdom, and grace",
    theme:
      "Character, courage, self-mastery, compassion, and legacy. Composite stories, not a private memoir.",
    gumroadEnv: "VITE_GUMROAD_MEANINGFUL_LIFE",
  },
  {
    slug: "biology-of-opportunity",
    title: "The Biology of Opportunity",
    subtitle: "How gut, brain, environment and society shape potential",
    theme:
      "Human potential as biology, environment, and society. Educational, not medical advice.",
    gumroadEnv: "VITE_GUMROAD_BIOLOGY_OF_OPPORTUNITY",
  },
  {
    slug: "the-complete-product",
    title: "The Complete Product",
    subtitle: "What nobody tells you about product management",
    theme:
      "A practical operating manual from a first PM role to product leadership.",
    gumroadEnv: "VITE_GUMROAD_COMPLETE_PRODUCT",
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
  theme: string;
  gumroadUrl: string | null;
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
      const gumroadUrl = liveUrl(env[book.gumroadEnv]);
      return {
        slug: book.slug,
        title: book.title,
        subtitle: book.subtitle,
        theme: book.theme,
        gumroadUrl,
        comingSoon: !gumroadUrl,
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
    "Visitors book on Google Calendar, then complete payment via Stripe. Site path: /book.",
    data.consult.hasCalendar
      ? `Google Calendar appointment URL: ${data.consult.calendarUrl}`
      : "Google Calendar URL is not published yet. Send people to /book and email gnaneshwer.jadav@gmail.com.",
    data.consult.hasStripe
      ? `Stripe Payment Link: ${data.consult.stripeUrl}`
      : "Stripe Payment Link is not published yet. Do not invent a payment URL.",
  ];

  const bookLines = data.books.map((book) => {
    const buy = book.gumroadUrl
      ? `Buy on Gumroad: ${book.gumroadUrl}`
      : "Goes live next week. No buy URL yet — do not invent Amazon, Gumroad, or ISBN links.";
    return `- ${book.title} — ${book.subtitle}. ${buy}`;
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
Books (Gumroad only when a URL is listed; otherwise coming next week):
${bookLines.join("\n")}
Frameworks:
${frameworkLines.join("\n")}
Site paths: /book (consult), /books (shelf), /frameworks (stub), /about (timeline).
`.trim();
}
