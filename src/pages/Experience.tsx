import { Link } from "react-router-dom";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";
import Seo from "@/components/Seo";
import { experience } from "@/data/experience";

const Experience = () => {
  return (
    <StorefrontLayout>
      <Seo
        title="Experience"
        description="Reverse-chronological roles from LinkedIn and local CVs, with products nested underneath."
        path="/experience"
      />
      <PageShell>
        <Eyebrow>Experience</Eyebrow>
        <PageTitle>LinkedIn order. Products nested, not staged.</PageTitle>
        <PageLead>
          Public LinkedIn was loginwalled in this workspace. Order follows the
          public listing (AMDARI, teaching schools, Akeno) plus resume.html and
          the dated CV. Postdoctoral work is on Education, not here.
        </PageLead>

        <ol className="mt-12 divide-y divide-border border-y border-border">
          {experience.map((item) => (
            <li key={`${item.organisation}-${item.period}`} className="py-10">
              <div className="grid gap-3 md:grid-cols-[8.5rem_minmax(0,1fr)]">
                <p className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground">
                  {item.period}
                </p>
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">
                    {item.role}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.organisation} · {item.place}
                  </p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    Source · {item.source}
                  </p>
                  {item.note ? (
                    <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                      {item.note}
                    </p>
                  ) : null}
                  {item.products && item.products.length > 0 ? (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {item.products.map((product) => (
                        <li key={product.slug}>
                          <Link
                            to={`/work/${product.slug}`}
                            className="inline-flex min-h-11 items-center rounded-full border border-border px-3 font-mono text-[10px] uppercase tracking-[0.12em] hover:border-foreground/40"
                          >
                            {product.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Experience;
