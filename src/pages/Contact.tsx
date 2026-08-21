import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, {
  Eyebrow,
  PageLead,
  PageTitle,
  PrimaryCta,
  SecondaryCta,
} from "@/components/PageShell";
import Seo from "@/components/Seo";
import { site } from "@/data/site";
import { storefront } from "@/data/commerce";

const Contact = () => {
  return (
    <StorefrontLayout>
      <Seo
        title="Contact"
        description="Book a 50-minute consult or write. London."
        path="/contact"
      />
      <PageShell>
        <Eyebrow>Contact</Eyebrow>
        <PageTitle>Let’s talk.</PageTitle>
        <PageLead>
          {storefront.consult.minutes} minutes, {storefront.consult.priceLabel}.
          Hold a slot on Google Calendar, then pay via Stripe. Or email.
        </PageLead>
        <div className="mt-10 flex flex-wrap gap-3">
          <PrimaryCta to="/book">Book a consult</PrimaryCta>
          <SecondaryCta href={`mailto:${site.email}`}>Email</SecondaryCta>
          <SecondaryCta href={site.linkedin} external>
            LinkedIn
          </SecondaryCta>
        </div>
        <dl className="mt-16 grid gap-8 border-t border-border pt-12 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Email
            </dt>
            <dd className="mt-2 break-all text-sm">{site.email}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Location
            </dt>
            <dd className="mt-2 text-sm">{site.location}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              GitHub
            </dt>
            <dd className="mt-2 text-sm">
              <a href={site.github} target="_blank" rel="noreferrer" className="underline">
                gnaneshwer23
              </a>
            </dd>
          </div>
        </dl>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Contact;
