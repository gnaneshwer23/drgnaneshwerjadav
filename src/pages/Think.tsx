import { Link } from "react-router-dom";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";
import Seo from "@/components/Seo";
import { thinking } from "@/data/thinking";

const Think = () => {
  return (
    <StorefrontLayout>
      <Seo
        title="Think"
        description="Manual notes on product, regulation, and learning — not a LinkedIn feed."
        path="/think"
      />
      <PageShell>
        <Eyebrow>Think</Eyebrow>
        <PageTitle>Notes, not a social scrape.</PageTitle>
        <PageLead>
          Written here on purpose. The shelf sits beside this: books and the
          Decide Then Build loop. No invented LinkedIn API.
        </PageLead>

        <ol className="mt-12 divide-y divide-border border-y border-border">
          {thinking.map((item) => (
            <li key={item.slug} className="py-10">
              <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground">
                {item.date}
              </p>
              <h2 className="font-serif mt-3 text-3xl font-medium italic tracking-tight text-foreground">
                <Link to={`/think/${item.slug}`} className="hover:underline">
                  {item.title}
                </Link>
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {item.dek}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-10">
          <Link
            to="/shelf"
            className="inline-flex min-h-11 items-center text-sm underline decoration-foreground/30 underline-offset-[6px] hover:decoration-foreground"
          >
            Open the shelf
          </Link>
        </p>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Think;
