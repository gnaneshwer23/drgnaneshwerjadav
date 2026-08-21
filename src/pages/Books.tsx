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
    <StorefrontLayout tone="paper">
      <PageShell>
        <Eyebrow>Product Book 2026</Eyebrow>
        <PageTitle>Eight books. Strategy you can actually use.</PageTitle>
        <PageLead>
          Buy links are Gumroad only, when a URL is published. Titles without a
          link go live next week — no invented Amazon pages.
        </PageLead>
        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryCta to="/book">Book a consult</PrimaryCta>
          <SecondaryCta to="/frameworks">Frameworks</SecondaryCta>
        </div>

        <ol className="mt-16 divide-y divide-border border-y border-border">
          {storefront.books.map((book, index) => (
            <li
              key={book.slug}
              className="grid gap-6 py-10 md:grid-cols-[4rem_1fr_auto] md:items-start"
            >
              <span className="font-heading text-sm font-semibold tabular-nums text-saffron">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  {book.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {book.subtitle}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {book.theme}
                </p>
              </div>
              <div className="md:pt-1">
                {book.gumroadUrl ? (
                  <a
                    href={book.gumroadUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-xl bg-saffron-gradient px-5 py-3 text-sm font-semibold text-accent-foreground shadow-saffron transition-opacity hover:opacity-90"
                  >
                    Buy on Gumroad
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <p className="inline-flex min-h-11 items-center rounded-xl border border-dashed border-border px-5 py-3 text-sm font-medium text-muted-foreground">
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
