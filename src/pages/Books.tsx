import { ArrowUpRight } from "lucide-react";
import { storefront } from "@/data/commerce";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, {
  Eyebrow,
  PageLead,
  PageTitle,
  PrimaryCta,
  SecondaryCta,
} from "@/components/PageShell";

const Books = () => {
  return (
    <StorefrontLayout>
      <PageShell>
        <Eyebrow>Product Book 2026</Eyebrow>
        <PageTitle>Eight books. Strategy you can actually use.</PageTitle>
        <PageLead>
          Operating manuals from HealthTech, EdTech, and delivery work — not
          airport business theatre. Buy on Gumroad when a URL is published.
          Titles without a link go live next week. No invented Amazon pages.
        </PageLead>
        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryCta to="/book">Book a consult</PrimaryCta>
          <SecondaryCta to="/frameworks">Frameworks</SecondaryCta>
        </div>

        <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              number: "01",
              title: "What you get",
              body: "A named argument you can take into a real product conversation — decide, then build; ship before you scale.",
            },
            {
              number: "02",
              title: "How you buy",
              body: "Gumroad only, when a URL is live. Until then the title stays on the shelf as “Goes live next week”.",
            },
            {
              number: "03",
              title: "What this is not",
              body: "Not medical or legal advice. The Biology of Opportunity and The Human Operating System are educational.",
            },
          ].map((item) => (
            <li key={item.number}>
              <div className="flex aspect-[4/3] items-end rounded-2xl bg-secondary p-5">
                <span className="font-heading text-5xl font-semibold tabular-nums text-foreground/15 sm:text-6xl">
                  {item.number}
                </span>
              </div>
              <h2 className="font-heading mt-5 text-xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ol>

        <ol className="mt-16 grid gap-8 sm:grid-cols-2">
          {storefront.books.map((book, index) => (
            <li key={book.slug} className="flex flex-col">
              <div className="flex aspect-[4/3] items-end rounded-2xl bg-secondary p-5">
                <span className="font-heading text-5xl font-semibold tabular-nums text-foreground/15 sm:text-6xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="font-heading mt-5 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                {book.title}
              </h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {book.subtitle}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {book.theme}
              </p>
              <div className="mt-5">
                {book.gumroadUrl ? (
                  <a
                    href={book.gumroadUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Buy on Gumroad
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <p className="inline-flex min-h-11 items-center rounded-full border border-dashed border-border px-5 text-sm font-medium text-muted-foreground">
                    Goes live next week
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Books;
