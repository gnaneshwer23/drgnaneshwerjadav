import { Link } from "react-router-dom";
import { storefront } from "@/data/commerce";
import ShelfFrame from "@/components/ShelfFrame";

const Shelf = () => {
  const liveBooks = storefront.books.filter((book) => book.gumroadUrl).length;
  const framework = storefront.frameworks[0];

  return (
    <ShelfFrame
      title="One shelf. Books, a loop, and a course waitlist."
      lead="Operating artefacts from HealthTech, EdTech, and delivery work. Buy on Gumroad when a URL is published. No invented Amazon pages."
    >
      <section className="mt-16 border-t border-border pt-12">
        <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground">
          Books
        </p>
        <h2 className="font-serif mt-3 text-3xl font-semibold tracking-tight text-foreground">
          Product Book 2026
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Ten titles. {liveBooks > 0 ? `${liveBooks} with a live buy link.` : "Buy links appear when each title is for sale."}
        </p>
        <Link
          to="/books"
          className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-[6px] hover:decoration-foreground"
        >
          Browse the books
        </Link>
      </section>

      {framework ? (
        <section className="mt-12 border-t border-border pt-12">
          <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground">
            Frameworks
          </p>
          <h2 className="font-serif mt-3 text-3xl font-semibold tracking-tight text-foreground">
            {framework.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {framework.subtitle}. {framework.comingSoon ? "Coming soon." : "On Gumroad."}
          </p>
          <Link
            to="/frameworks"
            className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-[6px] hover:decoration-foreground"
          >
            Open the loop
          </Link>
        </section>
      ) : null}

      <section className="mt-12 border-t border-border pt-12">
        <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground">
          Course
        </p>
        <h2 className="font-serif mt-3 text-3xl font-semibold tracking-tight text-foreground">
          A DrJadav course is coming. Not live yet.
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          No LMS, no invented syllabus. Join the waitlist when you want to be emailed.
        </p>
        <Link
          to="/course"
          className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-[6px] hover:decoration-foreground"
        >
          Join the waitlist
        </Link>
      </section>
    </ShelfFrame>
  );
};

export default Shelf;
