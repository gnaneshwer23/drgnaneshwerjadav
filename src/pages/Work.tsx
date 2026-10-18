import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";
import Seo from "@/components/Seo";
import { flagships } from "@/data/work";

const statusLabel: Record<string, string> = {
  SHIPPED: "Live",
  PILOT: "Pilot",
  IN_DEVELOPMENT: "In development",
  LIBRARY: "Library",
};

const Work = () => {
  return (
    <StorefrontLayout>
      <Seo
        title="Work"
        description="Live projects: Immune Super Intelligence, Aksh Health, and DeliverX."
        path="/work"
      />
      <PageShell>
        <Eyebrow>Work</Eyebrow>
        <PageTitle>Live projects. That is the selected work.</PageTitle>
        <PageLead>
          Immune Super Intelligence, Aksh Health, and DeliverX. Fluent Institute
          is also live. Everything else sits under Experience — nested in roles,
          not competing here.
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

        <p className="mt-10 text-sm text-muted-foreground">
          Vigil-MODI, Akeno, Elevare, Nexus, PRISM, and the rest —{" "}
          <Link to="/experience" className="underline">
            experience timeline
          </Link>
          .
        </p>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Work;
