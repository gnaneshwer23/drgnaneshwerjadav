import { Link } from "react-router-dom";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";
import Seo from "@/components/Seo";
import { howIBuild } from "@/data/systems";

const HowIBuild = () => {
  return (
    <StorefrontLayout>
      <Seo
        title="How I build"
        description="Start in the constraint. Decide, then make one artefact. Keep a human on the hook."
        path="/how-i-build"
      />
      <PageShell>
        <Eyebrow>How I build</Eyebrow>
        <PageTitle>Constraint first. Decision second. Software third.</PageTitle>
        <PageLead>
          The same sequence whether the room is a clinic, a regulator, or a
          hiring loop. Full Decide Then Build artefact on /frameworks.
        </PageLead>
        <ol className="mt-12 divide-y divide-border border-y border-border">
          {howIBuild.map((item, i) => (
            <li key={item.title} className="grid gap-4 py-10 md:grid-cols-[5rem_minmax(0,1fr)]">
              <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  {item.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <Link
          to="/frameworks"
          className="mt-10 inline-flex min-h-11 items-center text-sm underline"
        >
          Decide Then Build
        </Link>
      </PageShell>
    </StorefrontLayout>
  );
};

export default HowIBuild;
