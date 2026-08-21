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

const laterSlots = [
  {
    number: "02",
    title: "Next operating artefact",
    body: "Room on this shelf for another one-pager or deck. No invented title until it exists.",
  },
  {
    number: "03",
    title: "More loops",
    body: "Further SKUs will land here the same way: named, priced, and sold on Gumroad — or not listed.",
  },
] as const;

const Frameworks = () => {
  const first = storefront.frameworks[0];

  return (
    <StorefrontLayout>
      <PageShell>
        <Eyebrow>Frameworks</Eyebrow>
        <PageTitle>Operating artefacts, not slide theatre.</PageTitle>
        <PageLead>
          Paid one-pagers and PPT decks you can drop into a real team. First
          SKU is Decide Then Build. Buy on Gumroad when a URL is published.
          Until then it stays coming soon.
        </PageLead>
        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryCta to="/book">Book a consult</PrimaryCta>
          <SecondaryCta to="/books">Shop books</SecondaryCta>
        </div>

        <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              number: "01",
              title: "What you get",
              body: "A compact loop you can run in a week — not the full Decide Then Build manuscript.",
            },
            {
              number: "02",
              title: "How you buy",
              body: "Gumroad, only if a URL is published. No invented storefronts.",
            },
            {
              number: "03",
              title: "Room for more",
              body: "The shelf is built to take further artefacts. Placeholders below are empty on purpose.",
            },
          ].map((item) => (
            <li key={item.number}>
              <div className="flex aspect-[4/3] items-end rounded-2xl bg-secondary p-5">
                <span className="font-heading text-5xl font-semibold tabular-nums text-foreground/15 sm:text-6xl">
                  {item.number}
                </span>
              </div>
              <h2 className="font-heading mt-5 text-xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ol>

        {first ? (
          <article className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div className="flex aspect-[4/3] items-end rounded-2xl bg-secondary p-5 sm:p-8">
              <span className="font-heading text-6xl font-semibold tabular-nums text-foreground/15 sm:text-7xl">
                01
              </span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                First SKU
              </p>
              <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-foreground">
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
                    className="inline-flex min-h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Buy on Gumroad
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <p className="inline-flex min-h-11 items-center rounded-full border border-dashed border-border px-5 text-sm font-medium text-muted-foreground">
                    Coming soon
                  </p>
                )}
              </div>
            </div>
          </article>
        ) : null}

        <ol className="mt-12 grid gap-8 sm:grid-cols-2">
          {laterSlots.map((slot) => (
            <li key={slot.number}>
              <div className="flex aspect-[4/3] items-end rounded-2xl bg-secondary p-5">
                <span className="font-heading text-5xl font-semibold tabular-nums text-foreground/15 sm:text-6xl">
                  {slot.number}
                </span>
              </div>
              <h2 className="font-heading mt-5 text-xl font-semibold tracking-tight text-foreground">
                {slot.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {slot.body}
              </p>
              <p className="mt-5 inline-flex min-h-11 items-center rounded-full border border-dashed border-border px-5 text-sm font-medium text-muted-foreground">
                Coming soon
              </p>
            </li>
          ))}
        </ol>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Frameworks;
