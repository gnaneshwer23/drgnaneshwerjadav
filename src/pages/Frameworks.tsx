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

const Frameworks = () => {
  const first = storefront.frameworks[0];

  return (
    <StorefrontLayout tone="paper">
      <PageShell>
        <Eyebrow>Frameworks</Eyebrow>
        <PageTitle>Operating artefacts, not slide theatre.</PageTitle>
        <PageLead>
          Paid one-pagers and PPT decks you can drop into a real team. First
          SKU is Decide Then Build. Coming soon until a Gumroad URL is set.
        </PageLead>
        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryCta to="/book">Book a consult</PrimaryCta>
          <SecondaryCta to="/books">Shop books</SecondaryCta>
        </div>

        {first && (
          <article className="mt-16 rounded-2xl border border-border bg-card p-8 shadow-card md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-saffron">
              First SKU
            </p>
            <h2 className="font-heading mt-4 text-3xl font-bold text-foreground">
              {first.title}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              {first.subtitle}. A compact loop you can run in a week — not the
              full manuscript.
            </p>
            <div className="mt-8">
              {first.gumroadUrl ? (
                <a
                  href={first.gumroadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center rounded-xl bg-saffron-gradient px-6 py-3 text-sm font-semibold text-accent-foreground shadow-saffron transition-opacity hover:opacity-90"
                >
                  Buy on Gumroad
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              ) : (
                <p className="inline-flex min-h-11 items-center rounded-xl border border-dashed border-border px-5 py-3 text-sm font-medium text-muted-foreground">
                  Coming soon
                </p>
              )}
            </div>
          </article>
        )}
      </PageShell>
    </StorefrontLayout>
  );
};

export default Frameworks;
