import { Link, Navigate, useParams } from "react-router-dom";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";
import EvidenceBadge from "@/components/EvidenceBadge";
import Seo from "@/components/Seo";
import { work, workBySlug } from "@/data/work";

const statusLabel: Record<string, string> = {
  SHIPPED: "Shipped",
  PILOT: "Pilot",
  IN_DEVELOPMENT: "In development",
  LIBRARY: "Library",
};

const blocks = [
  { key: "problem", heading: "Problem" },
  { key: "approach", heading: "Approach" },
  { key: "system", heading: "System" },
  { key: "outcome", heading: "Outcome" },
] as const;

const WorkCase = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? workBySlug(slug) : undefined;

  if (!item) {
    return <Navigate to="/work" replace />;
  }

  const index = work.findIndex((entry) => entry.slug === item.slug);
  const prev = index > 0 ? work[index - 1] : undefined;
  const next = index < work.length - 1 ? work[index + 1] : undefined;

  return (
    <StorefrontLayout>
      <Seo
        title={item.title}
        description={item.summary}
        path={`/work/${item.slug}`}
      />
      <PageShell>
        <Eyebrow>
          Case {item.number} · {item.category} · {statusLabel[item.status]}
        </Eyebrow>
        <PageTitle>{item.title}</PageTitle>
        <PageLead>{item.summary}</PageLead>

        <div className="mt-8 flex flex-wrap gap-2">
          {item.badges.map((badge) => (
            <EvidenceBadge
              key={`${badge.kind}-${badge.label}`}
              kind={badge.kind}
              label={badge.label}
            />
          ))}
        </div>

        <dl className="mt-12 grid gap-6 border-t border-border pt-10 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Role
            </dt>
            <dd className="mt-2 text-sm text-foreground">{item.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Domain
            </dt>
            <dd className="mt-2 text-sm text-foreground">{item.domain}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Status
            </dt>
            <dd className="mt-2 text-sm text-foreground">
              {statusLabel[item.status]}
            </dd>
          </div>
        </dl>

        <div className="mt-12 space-y-12">
          {blocks.map((block) => (
            <section key={block.key} className="border-t border-border pt-10">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {block.heading}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-[1.75] text-foreground/90">
                {item[block.key]}
              </p>
            </section>
          ))}
        </div>

        {item.note ? (
          <p className="mt-12 max-w-2xl text-sm text-muted-foreground">{item.note}</p>
        ) : null}

        <div className="mt-10 flex flex-wrap gap-3">
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background"
            >
              Visit site
            </a>
          ) : null}
          {item.github ? (
            <a
              href={item.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-border px-6 text-sm font-medium"
            >
              GitHub
            </a>
          ) : null}
          <Link
            to="/book"
            className="inline-flex min-h-11 items-center rounded-full border border-border px-6 text-sm font-medium"
          >
            Let’s talk
          </Link>
        </div>

        <nav
          className="mt-16 flex flex-wrap justify-between gap-4 border-t border-border pt-8"
          aria-label="Adjacent cases"
        >
          {prev ? (
            <Link
              to={`/work/${prev.slug}`}
              className="inline-flex min-h-11 items-center text-sm text-muted-foreground hover:text-foreground"
            >
              ← {prev.number} {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={`/work/${next.slug}`}
              className="inline-flex min-h-11 items-center text-sm text-muted-foreground hover:text-foreground"
            >
              {next.number} {next.title} →
            </Link>
          ) : null}
        </nav>
      </PageShell>
    </StorefrontLayout>
  );
};

export default WorkCase;
