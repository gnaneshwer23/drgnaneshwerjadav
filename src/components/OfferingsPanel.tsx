import { Link } from "react-router-dom";
import { storefront } from "@/data/commerce";

const OfferingsPanel = () => {
  const { consult } = storefront;

  const cells = [
    {
      number: "01",
      title: "Books",
      dek: "Product Book 2026. Gumroad when a URL is live.",
      to: "/books",
      cta: "Open the books",
    },
    {
      number: "02",
      title: "Course",
      dek: "Waitlist only. No invented syllabus or price.",
      to: "/course",
      cta: "Join the waitlist",
    },
    {
      number: "03",
      title: "Consultations",
      dek: `${consult.minutes} minutes. ${consult.priceLabel}. Calendar, then Stripe.`,
      to: "/book",
      cta: "Book a slot",
    },
    {
      number: "04",
      title: "Frameworks",
      dek: "Decide Then Build — the operating sequence.",
      to: "/frameworks",
      cta: "Open the loop",
    },
  ] as const;

  return (
    <section id="offerings" className="section-y scroll-mt-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
              Offerings
            </p>
            <h2 className="display max-w-xl text-foreground">
              The desk. Not more case studies.
            </h2>
          </div>
          <Link
            to="/shelf"
            className="inline-flex min-h-11 items-center text-sm underline decoration-foreground/30 underline-offset-[6px] hover:decoration-foreground"
          >
            Full shelf
          </Link>
        </div>

        <div className="mt-12 grid border border-border sm:grid-cols-2">
          {cells.map((cell, i) => (
            <Link
              key={cell.to}
              to={cell.to}
              className={`flex min-h-[14rem] flex-col justify-between p-8 transition-colors hover:bg-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-10 ${
                i % 2 === 1 ? "sm:border-l sm:border-border" : ""
              } ${i >= 2 ? "border-t border-border" : ""}`}
            >
              <div>
                <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground">
                  {cell.number}
                </p>
                <h3 className="font-heading mt-4 text-2xl font-semibold text-foreground">
                  {cell.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {cell.dek}
                </p>
              </div>
              <p className="mt-8 text-sm font-medium text-foreground">
                {cell.cta} →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsPanel;
