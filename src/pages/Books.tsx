import { ArrowUpRight } from "lucide-react";
import { storefront } from "@/data/commerce";
import ShelfFrame from "@/components/ShelfFrame";
import { PrimaryCta, SecondaryCta } from "@/components/PageShell";

const Books = () => {
  return (
    <ShelfFrame
      title="Eight books. Strategy you can actually use."
      lead="Operating manuals from HealthTech, EdTech, and delivery work — not airport business theatre. Buy on Gumroad when a URL is published. Titles without a link go live next week. No invented Amazon pages."
    >
      <div className="mt-8 flex flex-wrap gap-3">
        <PrimaryCta to="/book">Book a consult</PrimaryCta>
        <SecondaryCta to="/frameworks">Frameworks</SecondaryCta>
      </div>

      <ol className="mt-16 divide-y divide-border border-y border-border">
        {storefront.books.map((book) => (
          <li key={book.slug} className="flex flex-col py-10">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {book.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{book.subtitle}</p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {book.theme}
            </p>
            <div className="mt-6">
              {book.gumroadUrl ? (
                <a
                  href={book.gumroadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Buy on Gumroad
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ) : (
                <p className="inline-flex min-h-11 items-center font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
                  Goes live next week
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </ShelfFrame>
  );
};

export default Books;
