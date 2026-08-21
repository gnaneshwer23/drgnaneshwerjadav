import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { storefront } from "@/data/commerce";
import ShelfFrame from "@/components/ShelfFrame";

const beats = [
  {
    label: "Name the decision",
    text: "AI made execution cheap without making deciding easy. The failure mode moved upstream: shipping the wrong thing, faster.",
  },
  {
    label: "Name the constraint",
    text: "Clinical, regulatory, ethical, or a hiring manager’s bar. The constraint is the brief — not a backlog of features.",
  },
  {
    label: "Build the smallest loop",
    text: "One artefact that would change that decision. Specs without a prototype are theatre; prototypes without a decision are toys. Humans stay on the hook.",
  },
] as const;

const Frameworks = () => {
  const first = storefront.frameworks[0];

  return (
    <ShelfFrame
      title="Operating artefacts, not slide theatre."
      lead="Paid one-pagers and decks you can drop into a real team. First SKU is Decide Then Build — the sequence used on HealthTech and EdTech work. Buy on Gumroad when a URL is published."
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
            When building is cheap, the decision is the product. The loop as a
            one-pager and PPT you can actually run — not a thirteen-stage dump.
          </p>

          <dl className="mt-10 max-w-xl space-y-8">
            {beats.map((beat) => (
              <div key={beat.label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {beat.label}
                </dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {beat.text}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 max-w-lg text-[13px] leading-relaxed text-muted-foreground">
            The same argument is a book on the shelf.{" "}
            <Link
              to="/books#decide-then-build"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Decide Then Build
            </Link>
            .
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
