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
    title: "Next operating artefact",
    body: "Room on this shelf for another one-pager or deck. No invented title until it exists.",
  },
  {
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
              title: "What you get",
              body: "A compact loop you can run in a week — not the full Decide Then Build manuscript.",
            },
            {
              title: "How you buy",
              body: "Gumroad, only if a URL is published. No invented storefronts.",
            },
            {
              title: "Room for more",
              body: "The shelf is built to take further artefacts. Placeholders below are empty on purpose.",
            },
          ].map((item) => (
            <li key={item.title} className="rounded-[1.75rem] bg-secondary p-8">
              <h2 className="font-heading text-xl font-bold tracking-tight text-foreground">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ol>

        {first ? (
          <article className="mt-16 rounded-[1.75rem] bg-secondary p-8 md:p-12">
            <p className="text-sm font-medium text-muted-foreground">First SKU</p>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-foreground">
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
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Buy on Gumroad
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ) : (
                <p className="inline-flex min-h-11 items-center text-sm font-medium text-muted-foreground">
                  Coming soon
                </p>
              )}
            </div>
          </article>
        ) : null}

        <ol className="mt-8 grid gap-5 sm:grid-cols-2">
          {laterSlots.map((slot) => (
            <li key={slot.title} className="rounded-[1.75rem] bg-secondary p-8">
              <h2 className="font-heading text-xl font-bold tracking-tight text-foreground">
                {slot.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {slot.body}
              </p>
              <p className="mt-5 text-sm font-medium text-muted-foreground">
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
