import { ArrowUpRight } from "lucide-react";
import { storefront } from "@/data/commerce";
import ShelfFrame from "@/components/ShelfFrame";
import { PrimaryCta, SecondaryCta } from "@/components/PageShell";

const Frameworks = () => {
  const first = storefront.frameworks[0];

  return (
    <ShelfFrame
      title="Operating artefacts, not slide theatre."
      lead="Paid one-pagers and PPT decks you can drop into a real team. First SKU is Decide Then Build. Buy on Gumroad when a URL is published. Until then it stays coming soon."
    >
      <div className="mt-8 flex flex-wrap gap-3">
        <PrimaryCta to="/book">Book a consult</PrimaryCta>
        <SecondaryCta to="/books">Shop books</SecondaryCta>
      </div>

      {first ? (
        <article className="mt-16 border-t border-border pt-12">
          <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground">
            First SKU
          </p>
          <h2 className="font-serif mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {first.title}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
            {first.subtitle}. The decision loop from the book, as a one-pager
            and deck you can actually run.
          </p>
          <div className="mt-8">
            {first.gumroadUrl ? (
              <a
                href={first.gumroadUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-navy px-6 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Buy on Gumroad
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : (
              <p className="inline-flex min-h-11 items-center font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
                Coming soon
              </p>
            )}
          </div>
        </article>
      ) : null}

      <p className="mt-12 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Further artefacts will land here when they exist. No invented titles.
      </p>
    </ShelfFrame>
  );
};

export default Frameworks;
