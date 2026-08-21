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
    <StorefrontLayout>
      <PageShell>
        <Eyebrow>About</Eyebrow>
        <PageTitle>{site.name}</PageTitle>
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
          <p className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
            Now
          </p>
          <h2 className="font-heading mt-4 text-2xl font-bold text-foreground">
            {resume.headline}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {resume.about} {resume.current.summary}
          </p>
        </section>

        <section className="mt-16 border-t border-border pt-12">
          <p className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
            Experience
          </p>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {resume.experience.map((item) => (
              <li
                key={`${item.organisation}-${item.period}`}
                className="grid gap-3 py-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)_auto] md:items-start"
              >
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {item.organisation}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.place} · {item.period}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground">{item.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                </div>
                <p className="inline-flex h-8 items-center rounded-full bg-secondary px-3 text-xs font-medium text-muted-foreground">
                  {item.place}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-border pt-12">
          <p className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
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
          <p className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
            Selected work
          </p>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Ventures and products on the public profile — not a dated employment
            history.
          </p>
          <ol className="mt-8 divide-y divide-border border-y border-border">
            {resume.selectedWork.map((item) => (
              <li key={item.title} className="py-8">
                <h3 className="font-heading text-2xl font-bold text-foreground">
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
            <div key={area.title} className="rounded-[1.75rem] bg-secondary p-6">
              <h3 className="font-heading text-lg font-bold text-foreground">
                {area.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-foreground text-[9px] font-bold leading-none text-background">
                      +
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-[1.75rem] bg-secondary p-6 md:p-8">
          <p className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
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
            <Link to="/book" className="font-medium text-foreground underline-offset-4 hover:underline">
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
