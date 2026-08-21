import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";
import Seo from "@/components/Seo";
import { publications, publicationNotes } from "@/data/publications";

const Research = () => {
  return (
    <StorefrontLayout>
      <Seo
        title="Research"
        description="Independently found immunology publications and conservative notes on the public record."
        path="/research"
      />
      <PageShell>
        <Eyebrow>Research & publications</Eyebrow>
        <PageTitle>Immunology, then product. Titles we can point to.</PageTitle>
        <PageLead>
          PhD work at Verona on HCMV, CD28null T cells, and systemic sclerosis.
          The list below is the independently found set — not an inflated count.
        </PageLead>
        <ol className="mt-12 divide-y divide-border border-y border-border">
          {publications.map((item) => (
            <li key={item.title} className="py-8">
              <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground">
                {item.year} · {item.venue}
              </p>
              <h2 className="font-heading mt-2 max-w-3xl text-xl font-semibold text-foreground">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h2>
              {item.note ? (
                <p className="mt-2 text-sm text-muted-foreground">{item.note}</p>
              ) : null}
            </li>
          ))}
        </ol>
        <ul className="mt-12 max-w-2xl space-y-3 text-sm leading-relaxed text-muted-foreground">
          {publicationNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Research;
