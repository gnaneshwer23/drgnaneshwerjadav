import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";
import Seo from "@/components/Seo";
import { labPractices } from "@/data/systems";
import { site } from "@/data/site";

const Lab = () => {
  return (
    <StorefrontLayout>
      <Seo
        title="AI Lab"
        description="How AI is used as a product-building accelerator — humans in the loop, regulated by default."
        path="/lab"
      />
      <PageShell>
        <Eyebrow>AI Lab</Eyebrow>
        <PageTitle>A lab, not a neon demo.</PageTitle>
        <PageLead>
          Tools rotate. The rule does not: models draft, people decide. Public
          experiments live on GitHub.
        </PageLead>
        <ul className="mt-12 divide-y divide-border border-y border-border">
          {labPractices.map((item) => (
            <li key={item.title} className="py-10">
              <h2 className="font-heading text-xl font-semibold text-foreground">
                {item.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex min-h-11 items-center text-sm underline"
        >
          github.com/gnaneshwer23
        </a>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Lab;
