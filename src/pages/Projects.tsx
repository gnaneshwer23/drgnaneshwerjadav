import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";
import Seo from "@/components/Seo";
import { flagships, library } from "@/data/work";

const statusLabel: Record<string, string> = {
  SHIPPED: "Live",
  PILOT: "Pilot",
  IN_DEVELOPMENT: "In development",
  LIBRARY: "Library",
};

const Projects = () => {
  return (
    <StorefrontLayout>
      <Seo
        title="Projects"
        description="Fluent Institute, DeliverX, and Aksh Health — the three live products. Other work sits in a quieter library."
        path="/projects"
      />
      <PageShell>
        <Eyebrow>Projects</Eyebrow>
        <PageTitle>Three live products. The rest is a library.</PageTitle>
        <PageLead>
          Fluent Institute, DeliverX, and Aksh Health — each with a live link.
          Everything else is nested under roles on Experience, listed quietly
          below.
        </PageLead>

        <ol className="mt-12">
          {flagships.map((item, i) => (
            <li
              key={item.slug}
              className="border-t border-border py-12 last:border-b"
            >
              <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")} · {item.category} ·{" "}
                {statusLabel[item.status]}
              </p>
              <h2 className="font-serif mt-4 text-[clamp(2rem,4.5vw,3.5rem)] font-medium italic tracking-tight text-foreground">
                {item.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-[1.75] text-muted-foreground">
                {item.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-foreground px-6 text-sm font-medium text-background"
                  >
                    Visit live site
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : null}
                <Link
                  to={`/work/${item.slug}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-border px-6 text-sm font-medium"
                >
                  Case study
                </Link>
              </div>
            </li>
          ))}
        </ol>

        <section className="mt-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Library
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Nested in roles — not competing with the three live products.
          </p>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {library.map((item) => (
              <li
                key={item.slug}
                className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <div className="min-w-0">
                  <Link
                    to={`/work/${item.slug}`}
                    className="font-heading text-base font-semibold text-foreground hover:underline"
                  >
                    {item.title}
                  </Link>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.category}
                  </p>
                </div>
                <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {statusLabel[item.status]}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Projects;
