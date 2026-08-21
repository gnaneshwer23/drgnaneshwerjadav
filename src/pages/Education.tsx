import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";
import Seo from "@/components/Seo";
import { education } from "@/data/education";

const Education = () => {
  return (
    <StorefrontLayout>
      <Seo
        title="Education"
        description="Academic path only — pharmacy, biotechnology, immunology, healthcare MBA. Postdoc lives here, not on Experience."
        path="/education"
      />
      <PageShell>
        <Eyebrow>Education</Eyebrow>
        <PageTitle>The science stack. Academic only.</PageTitle>
        <PageLead>
          Postdoctoral research sits here, not on the experience timeline. Dates
          are from LinkedIn, resume.html, and the dated CV — nothing invented.
        </PageLead>

        <ol className="mt-12 divide-y divide-border border-y border-border">
          {education.map((item) => (
            <li
              key={`${item.credential}-${item.place}`}
              className="grid gap-3 py-10 md:grid-cols-[8.5rem_minmax(0,1fr)]"
            >
              <p className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground">
                {item.period}
              </p>
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  {item.credential}
                  <span className="text-muted-foreground"> · {item.field}</span>
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{item.place}</p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  Source · {item.source}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Education;
