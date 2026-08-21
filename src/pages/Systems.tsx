import { Link } from "react-router-dom";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";
import Seo from "@/components/Seo";
import { systems } from "@/data/systems";

const Systems = () => {
  return (
    <StorefrontLayout>
      <Seo
        title="Systems"
        description="Operating systems: Decide Then Build, MODI, on-prem clinical AI, delivery intelligence, simulation-first learning."
        path="/systems"
      />
      <PageShell>
        <Eyebrow>Systems</Eyebrow>
        <PageTitle>How the work repeats.</PageTitle>
        <PageLead>
          Five operating systems used across HealthTech, EdTech, and delivery —
          not a logo wall, not a skill bar.
        </PageLead>
        <ol className="mt-12 divide-y divide-border border-y border-border">
          {systems.map((item) => (
            <li key={item.number} className="grid gap-4 py-10 md:grid-cols-[5rem_minmax(0,1fr)]">
              <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground">
                {item.number}
              </p>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {item.dek}
                </p>
                <h2 className="font-heading mt-2 text-2xl font-semibold text-foreground">
                  {item.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <Link
                  to={item.href}
                  className="mt-5 inline-flex min-h-11 items-center text-sm underline decoration-foreground/30 underline-offset-[6px]"
                >
                  {item.hrefLabel}
                </Link>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap gap-6">
          <Link to="/how-i-build" className="inline-flex min-h-11 items-center text-sm underline">
            How I build
          </Link>
          <Link to="/lab" className="inline-flex min-h-11 items-center text-sm underline">
            AI Lab
          </Link>
        </div>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Systems;
