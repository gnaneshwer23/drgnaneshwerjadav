import { ArrowUpRight, Download } from "lucide-react";
import { storefront, type BookOffer } from "@/data/commerce";
import ShelfFrame from "@/components/ShelfFrame";

function BuyControl({
  href,
  label,
}: {
  href: string | null;
  label: string;
}) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-11 items-center gap-1.5 text-[13px] font-medium tracking-[-0.01em] text-foreground underline-offset-4 hover:underline"
      >
        {label}
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    );
  }
  return null;
}

function BookRow({ book, index }: { book: BookOffer; index: number }) {
  const hasBuy = Boolean(
    book.buyLinks.amazon || book.buyLinks.gumroad || book.buyLinks.other,
  );

  return (
    <li
      id={book.slug}
      className="grid scroll-mt-28 gap-4 py-9 sm:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] sm:items-start sm:gap-12"
    >
      <div className="min-w-0">
        <p className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
          {book.forthcoming ? " · Forthcoming" : ""}
        </p>
        <h2 className="font-heading mt-2 text-[clamp(1.35rem,2.4vw,1.85rem)] font-medium tracking-[-0.03em] text-foreground">
          {book.title}
        </h2>
        <p className="mt-1.5 text-[13px] text-muted-foreground">{book.subtitle}</p>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          {book.shortDescription}
        </p>
      </div>
      <div className="flex flex-col gap-1 sm:items-end sm:text-right">
        <BuyControl href={book.buyLinks.amazon} label="Buy on Amazon" />
        <BuyControl href={book.buyLinks.gumroad} label="Buy on Gumroad" />
        <BuyControl href={book.buyLinks.other} label="Buy" />
        {!hasBuy ? (
          <span className="inline-flex min-h-11 items-center text-[13px] tracking-[-0.01em] text-muted-foreground">
            Buy links when published
          </span>
        ) : null}
        {book.downloadHref ? (
          <a
            href={book.downloadHref}
            download
            className="inline-flex min-h-11 items-center gap-1.5 text-[13px] font-medium tracking-[-0.01em] text-foreground underline-offset-4 hover:underline"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Download summary
          </a>
        ) : null}
      </div>
    </li>
  );
}

const Books = () => {
  return (
    <ShelfFrame
      title="Operating manuals you can actually use."
      lead="Ten titles from HealthTech, EdTech, delivery, and the wider shelf. Download a short summary for each. Buy links appear when a title is for sale."
    >
      <ol className="mt-16 divide-y divide-border border-y border-border">
        {storefront.books.map((book, index) => (
          <BookRow key={book.slug} book={book} index={index} />
        ))}
      </ol>
    </ShelfFrame>
  );
};

export default Books;
