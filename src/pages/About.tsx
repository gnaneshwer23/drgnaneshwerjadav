import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { resume } from "@/data/resume";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, {
  Eyebrow,
  PageLead,
  PageTitle,
  PrimaryCta,
  SecondaryCta,
} from "@/components/PageShell";
import Seo from "@/components/Seo";

const About = () => {
  return (
    <StorefrontLayout>
      <Seo
        title="About"
        description="AI Product & Programme Leader. Science → product → AI → delivery → impact. London."
        path="/about"
      />
      <PageShell>
        <Eyebrow>About</Eyebrow>
        <PageTitle>{site.name}</PageTitle>
        <PageLead>
          {site.role}. {site.hero} Based in {site.location}.
        </PageLead>
        <div className="mt-8 max-w-2xl space-y-4 text-base leading-[1.75] text-muted-foreground">
          <p>{resume.about}</p>
          <p>
            Pharmacy in Telangana, medical biotechnology in Siena, immunology
            PhD in Verona, MBA in healthcare at Kent. Then 0→1 product work in
            chronic care, regulatory AI, clinical workflow, and career
            readiness.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <PrimaryCta to="/cv">Web CV</PrimaryCta>
          <SecondaryCta to="/book">Let’s talk</SecondaryCta>
        </div>

        <section className="mt-16 border-t border-border pt-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Experience
          </p>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {resume.experience.map((item) => (
              <li
                key={`${item.organisation}-${item.period}`}
                className="grid gap-3 py-8 md:grid-cols-[minmax(0,1fr)_auto]"
              >
                <div>
                  <h2 className="font-heading text-lg font-semibold text-foreground">
                    {item.role}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.organisation} · {item.place}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                </div>
                <p className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground">
                  {item.period}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 grid gap-4 sm:grid-cols-2">
          {[
            { to: "/research", label: "Research" },
            { to: "/patent", label: "Patent" },
            { to: "/now", label: "Now" },
            { to: "/work", label: "Work library" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="inline-flex min-h-11 items-center border-t border-border pt-4 text-sm font-medium"
            >
              {item.label} →
            </Link>
          ))}
        </section>
      </PageShell>
    </StorefrontLayout>
  );
};

export default About;
