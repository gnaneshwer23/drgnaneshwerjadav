import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";
import Seo from "@/components/Seo";
import { skillGroups, skillMatrix, skillsProvenance } from "@/data/skills";

const Skills = () => {
  return (
    <StorefrontLayout>
      <Seo
        title="Skills"
        description="Product, science, and delivery skills — listed from the public CV and a detailed skills inventory. Not scored."
        path="/skills"
      />
      <PageShell>
        <Eyebrow>Skills</Eyebrow>
        <PageTitle>Listed. Not scored.</PageTitle>
        <PageLead>{skillsProvenance}</PageLead>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {skillMatrix.map((skill) => (
            <li
              key={skill}
              className="py-4 text-base leading-relaxed tracking-[-0.01em] text-foreground"
            >
              {skill}
            </li>
          ))}
        </ul>

        <section className="mt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Practised on the work
          </p>
          <div className="mt-8 grid gap-10 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h2 className="font-heading text-lg font-medium tracking-[-0.03em] text-foreground">
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
