import { Link } from "react-router-dom";
import { storefront } from "@/data/commerce";

const featuredSlugs = ["decide-then-build", "build-before-you-scale"] as const;

const FeaturedShelf = () => {
  const books = featuredSlugs
    .map((slug) => storefront.books.find((book) => book.slug === slug))
    .filter((book): book is NonNullable<typeof book> => Boolean(book));

  return (
    <section className="scroll-mt-24 bg-background pb-8 sm:pb-12">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-t border-border pt-12">
          <div>
            <p className="eyebrow">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-navy" />
              Shelf
            </p>
            <h2 className="display max-w-xl text-foreground">
              Operating manuals, not airport business theatre.
            </h2>
          </div>
          <Link
            to="/shelf"
            className="inline-flex min-h-11 items-center text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-[6px] hover:decoration-foreground"
          >
            All artefacts
          </Link>
        </div>

        <ol className="mt-10 divide-y divide-border border-y border-border">
          {books.map((book) => (
            <li key={book.slug} className="py-8">
              <p className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
                Product Book 2026
              </p>
              <h3 className="font-serif mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {book.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {book.subtitle}. {book.comingSoon ? "Goes live next week." : "On Gumroad."}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default FeaturedShelf;
