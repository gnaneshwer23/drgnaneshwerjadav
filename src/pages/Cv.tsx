import { Link } from "react-router-dom";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";
import Seo from "@/components/Seo";
import { resume } from "@/data/resume";
import { site } from "@/data/site";
import { flagships } from "@/data/work";
import { proofStrip } from "@/data/evidence";

const Cv = () => {
  return (
    <StorefrontLayout>
      <Seo
        title="CV"
        description={resume.headline}
        path="/cv"
      />
      <PageShell>
        <Eyebrow>Web CV</Eyebrow>
        <PageTitle>{site.name}</PageTitle>
        <PageLead>
          {resume.headline}. {resume.location}. Public facts from LinkedIn and
          local resume documents — not an inflated dashboard.
        </PageLead>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {resume.about}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background"
          >
            LinkedIn
          </a>
          <Link
            to="/book"
            className="inline-flex min-h-11 items-center rounded-full border border-border px-6 text-sm font-medium"
          >
            Let’s talk
          </Link>
        </div>

        <section className="mt-16 border-t border-border pt-12">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Measured strip
          </h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {proofStrip.map((item) => (
              <li key={item.label}>
                <p className="font-heading text-lg font-semibold">{item.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-border pt-12">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Experience
          </h2>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {resume.experience.map((item) => (
              <li key={`${item.organisation}-${item.period}`} className="py-8">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.organisation} · {item.place} · {item.period}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-border pt-12">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Education
          </h2>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {resume.education.map((item) => (
              <li key={item.credential} className="py-6">
                <h3 className="font-heading text-lg font-semibold">{item.credential}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.source}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-border pt-12">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Flagships
          </h2>
          <ul className="mt-6 space-y-4">
            {flagships.map((item) => (
              <li key={item.slug}>
                <Link to={`/work/${item.slug}`} className="text-sm font-medium underline">
                  {item.number} {item.title}
                </Link>
                <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
              </li>
            ))}
          </ul>
        </section>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Cv;
