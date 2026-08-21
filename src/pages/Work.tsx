import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";
import EvidenceBadge from "@/components/EvidenceBadge";
import Seo from "@/components/Seo";
import { work, workDomains, type WorkDomain } from "@/data/work";

const statusLabel: Record<string, string> = {
  SHIPPED: "Shipped",
  PILOT: "Pilot",
  IN_DEVELOPMENT: "In development",
  LIBRARY: "Library",
};

const Work = () => {
  const [domain, setDomain] = useState<WorkDomain | "All">("All");
  const items = useMemo(
    () => (domain === "All" ? work : work.filter((item) => item.domain === domain)),
    [domain],
  );

  return (
    <StorefrontLayout>
      <Seo
        title="Work"
        description="Selected and library work — HealthTech, EdTech, regulatory AI, and delivery systems. Evidence-labelled."
        path="/work"
      />
      <PageShell>
        <Eyebrow>All work</Eyebrow>
        <PageTitle>Library. Flagships first. Unverified names omitted.</PageTitle>
        <PageLead>
          Filter by domain. TARGET and IN DEVELOPMENT stay labelled. FlowPilot
          is not listed — it was not found in public or local sources.
        </PageLead>

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter work by domain"
        >
          {workDomains.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={domain === item}
              onClick={() => setDomain(item)}
              className={`inline-flex min-h-11 items-center rounded-full border px-4 text-xs uppercase tracking-[0.14em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                domain === item
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground/40"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <ol className="mt-8 divide-y divide-border border-y border-border">
          {items.map((item) => (
            <li key={item.slug}>
              <Link
                to={`/work/${item.slug}`}
                className="block py-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground">
                  {item.number} · {item.category} · {statusLabel[item.status]}
                </p>
                <h2 className="font-heading mt-2 text-2xl font-semibold text-foreground">
                  {item.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.badges.slice(0, 4).map((badge) => (
                    <EvidenceBadge
                      key={`${badge.kind}-${badge.label}`}
                      kind={badge.kind}
                      label={badge.label}
                    />
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Work;
