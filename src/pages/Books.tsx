import { ArrowUpRight } from "lucide-react";
import { storefront } from "@/data/commerce";
import ShelfFrame from "@/components/ShelfFrame";

const Books = () => {
  return (
    <ShelfFrame
      title="Eight books. Strategy you can actually use."
      lead="Operating manuals from HealthTech, EdTech, and delivery work — not airport business theatre. Buy on Gumroad when a URL is published. Titles without a link go live next week. No invented Amazon pages."
    >
      <ol className="mt-16 divide-y divide-border border-y border-border">
        {storefront.books.map((book) => (
          <li key={book.slug} className="grid gap-3 py-9 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] sm:items-baseline sm:gap-12">
            <div className="min-w-0">
              <h2 className="font-heading text-[clamp(1.35rem,2.4vw,1.85rem)] font-medium tracking-[-0.03em] text-foreground">
                {book.title}
              </h2>
              <p className="mt-1.5 text-[13px] text-muted-foreground">{book.subtitle}</p>
            </div>
            <div className="sm:text-right">
              <p className="max-w-sm text-[13px] leading-relaxed text-muted-foreground sm:ml-auto">
                {book.theme}
              </p>
              <div className="mt-4 sm:mt-5">
                {book.gumroadUrl ? (
                  <a
                    href={book.gumroadUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 text-[13px] font-medium tracking-[-0.01em] text-foreground underline-offset-4 hover:underline"
                  >
                    Buy on Gumroad
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <p className="inline-flex min-h-11 items-center font-mono text-[11px] tracking-[0.12em] text-muted-foreground">
                    Goes live next week
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </ShelfFrame>
  );
};

export default Books;
