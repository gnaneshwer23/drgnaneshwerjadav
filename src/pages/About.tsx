import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { storefront } from "@/data/commerce";
import { resume } from "@/data/resume";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, {
  Eyebrow,
  PageLead,
  PageTitle,
  PrimaryCta,
  SecondaryCta,
} from "@/components/PageShell";

const About = () => {
  return (
    <StorefrontLayout tone="paper">
      <PageShell>
        <Eyebrow>About</Eyebrow>
        <PageTitle>
          {site.name}
        </PageTitle>
        <PageLead>
          {resume.headline} · {resume.location}.
        </PageLead>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Public profile from LinkedIn and local 2025 resume documents. Dates
          and titles follow LinkedIn where they were published.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryCta to="/book">Book a consult</PrimaryCta>
          <SecondaryCta to="/books">Shop books</SecondaryCta>
        </div>

        <section className="mt-16 border-t border-border pt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-saffron">
            Now
          </p>
          <div className="mt-6 grid gap-2 md:grid-cols-[8rem_1fr]">
            <p className="font-heading text-sm font-semibold text-saffron">
              Public profile
            </p>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                {resume.headline}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {resume.about} {resume.current.summary}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-border pt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-saffron">
            Education
          </p>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {resume.education.map((item) => (
              <li key={item.credential} className="py-6">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {item.credential}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.source}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-border pt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-saffron">
            Selected work
          </p>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Ventures and products on the public profile — not a dated employment
            history.
          </p>
          <ol className="mt-8 divide-y divide-border border-y border-border">
            {resume.selectedWork.map((item, index) => (
              <li key={item.title} className="py-8">
                <p className="font-heading text-sm font-semibold tabular-nums text-saffron">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-heading mt-2 text-2xl font-bold text-foreground">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-saffron"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {item.category}
                </p>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          {resume.focus.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <h3 className="font-heading text-lg font-bold text-foreground">
                {area.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-2xl border border-border bg-secondary/50 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-saffron">
            What is not listed
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
            {resume.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            A {storefront.consult.minutes}-minute strategy session is{" "}
            {storefront.consult.priceLabel}.{" "}
            <Link to="/book" className="font-medium text-saffron hover:underline">
              Book a consult
            </Link>
            .
          </p>
        </section>
      </PageShell>
    </StorefrontLayout>
  );
};

export default About;
