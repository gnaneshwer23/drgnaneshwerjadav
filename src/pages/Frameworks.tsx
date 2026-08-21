import { ArrowUpRight } from "lucide-react";
import { storefront } from "@/data/commerce";
import ShelfFrame from "@/components/ShelfFrame";

const Frameworks = () => {
  const first = storefront.frameworks[0];

  return (
    <ShelfFrame
      title="Operating artefacts, not slide theatre."
      lead="Paid one-pagers and PPT decks you can drop into a real team. First SKU is Decide Then Build. Buy on Gumroad when a URL is published. Until then it stays coming soon."
    >
      {first ? (
        <article className="mt-16 border-t border-border pt-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            First SKU
          </p>
          <h2 className="font-heading mt-4 text-[clamp(1.75rem,3.6vw,2.75rem)] font-medium tracking-[-0.04em] text-foreground">
            {first.title}
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            {first.subtitle}. The Decide Then Build loop as a one-pager and
            deck you can actually run.
          </p>
          <div className="mt-8">
            {first.gumroadUrl ? (
              <a
                href={first.gumroadUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-foreground px-5 text-[13px] font-medium tracking-[-0.01em] text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Buy on Gumroad
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : (
              <p className="inline-flex min-h-11 items-center font-mono text-[11px] tracking-[0.12em] text-muted-foreground">
                Coming soon
              </p>
            )}
          </div>
        </article>
      ) : null}

      <p className="mt-12 max-w-lg text-[13px] leading-relaxed text-muted-foreground">
        Further artefacts will land here when they exist. No invented titles.
      </p>
    </ShelfFrame>
  );
};

export default Frameworks;
