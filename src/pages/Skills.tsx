import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";
import Seo from "@/components/Seo";
import { resume } from "@/data/resume";

const Skills = () => {
  return (
    <StorefrontLayout>
      <Seo
        title="Skills"
        description="Product and programme skills from the public CV and LinkedIn — listed, not scored."
        path="/skills"
      />
      <PageShell>
        <Eyebrow>Skills</Eyebrow>
        <PageTitle>From the CV. No bars, no scores.</PageTitle>
        <PageLead>
          Capabilities published on LinkedIn and the local resume. Nothing is
          rated. Focus areas below are the same groups used on the web CV.
        </PageLead>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {resume.skills.map((skill) => (
            <li
              key={skill}
              className="py-4 text-base leading-relaxed text-foreground"
            >
              {skill}
            </li>
          ))}
        </ul>

        <section className="mt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Focus
          </p>
          <div className="mt-8 grid gap-10 sm:grid-cols-3">
            {resume.focus.map((group) => (
              <div key={group.title}>
                <h2 className="font-heading text-lg font-semibold text-foreground">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Skills;
