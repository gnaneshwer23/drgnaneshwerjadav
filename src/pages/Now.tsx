import { Link } from "react-router-dom";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";
import Seo from "@/components/Seo";
import { now } from "@/data/now";

const Now = () => {
  return (
    <StorefrontLayout>
      <Seo
        title="Now"
        description="What Gnaneshwer Jadav is building, shipping, writing, and not doing."
        path="/now"
      />
      <PageShell>
        <Eyebrow>Now</Eyebrow>
        <PageTitle>London. Building, shipping, writing.</PageTitle>
        <PageLead>
          A current snapshot — not a backlog of unverified metrics.
        </PageLead>
        <div className="mt-12 grid gap-12 sm:grid-cols-2">
          {now.map((group) => (
            <section key={group.label}>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {group.label}
              </h2>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-foreground/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <Link
          to="/book"
          className="mt-12 inline-flex min-h-11 items-center text-sm underline"
        >
          Let’s talk
        </Link>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Now;
