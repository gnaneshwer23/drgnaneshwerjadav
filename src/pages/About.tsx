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
import Portrait from "@/components/Portrait";

const About = () => {
  return (
    <StorefrontLayout>
      <Seo
        title="About"
        description="AI Product & Programme Leader. Science stack separate from the work. London."
        path="/about"
      />
      <PageShell>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_12rem]">
          <div>
            <Eyebrow>About</Eyebrow>
            <PageTitle>{site.name}</PageTitle>
            <PageLead>
              {site.role}. {site.hero} Based in {site.location}.
            </PageLead>
          </div>
          <Portrait size="about" className="lg:justify-self-end" />
        </div>
        <div className="mt-10 max-w-2xl space-y-4 text-base leading-[1.75] text-muted-foreground">
          <p>{resume.about}</p>
          <p>
            Pharmacy, medical biotechnology, immunology, then healthcare MBA —
            then 0→1 product work. Education, roles, and the three live
            products each have their own page.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <PrimaryCta to="/projects">Projects</PrimaryCta>
          <SecondaryCta to="/book">Let’s talk</SecondaryCta>
        </div>

        <section className="mt-16 grid gap-4 sm:grid-cols-2">
          {[
            { to: "/education", label: "Education" },
            { to: "/experience", label: "Experience" },
            { to: "/skills", label: "Skills" },
            { to: "/research", label: "Research" },
            { to: "/patent", label: "Patent" },
            { to: "/cv", label: "Web CV" },
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
