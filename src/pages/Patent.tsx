import { Link } from "react-router-dom";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";
import Seo from "@/components/Seo";
import { patentPublic } from "@/data/publications";

const Patent = () => {
  return (
    <StorefrontLayout>
      <Seo
        title="Patent"
        description="High-level note on a granted UK/EU healthcare management system patent. No confidential IP."
        path="/patent"
      />
      <PageShell>
        <Eyebrow>Patent</Eyebrow>
        <PageTitle>{patentPublic.title}</PageTitle>
        <PageLead>
          {patentPublic.jurisdiction}, {patentPublic.year}. {patentPublic.status}.
        </PageLead>
        <p className="mt-10 max-w-2xl text-base leading-[1.75] text-foreground/90">
          {patentPublic.framing}
        </p>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          A manuscript mentions an Indian patent number. That number is not
          independently verified here and is not merged with this grant. Prior
          site copy used “Federated AI Healthcare Management System” as a
          descriptive title — the public claim on this page follows the CV and
          resume.html wording.
        </p>
        <Link
          to="/work/akeno-health"
          className="mt-10 inline-flex min-h-11 items-center text-sm underline"
        >
          Akeno Health case
        </Link>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Patent;
