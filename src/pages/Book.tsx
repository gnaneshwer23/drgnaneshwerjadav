import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { storefront } from "@/data/commerce";
import { site } from "@/data/site";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, {
  Eyebrow,
  PageLead,
  PageTitle,
  PrimaryCta,
  SecondaryCta,
} from "@/components/PageShell";

const steps = [
  {
    number: "01",
    title: "Book on Google Calendar",
    body: "Pick a slot on the appointment schedule. That holds the time on both calendars.",
  },
  {
    number: "02",
    title: "Complete payment via Stripe",
    body: "Pay the published fee on the Stripe Payment Link. The session is confirmed when both steps are done.",
  },
  {
    number: "03",
    title: "Arrive with a real problem",
    body: "Bring the product, team, or decision you are stuck on. You leave with a short DrJadav take and next moves — not a generic teardown.",
  },
] as const;

const Book = () => {
  const { consult } = storefront;

  return (
    <StorefrontLayout tone="paper">
      <PageShell>
        <Eyebrow>Consult</Eyebrow>
        <PageTitle>
          {consult.minutes} minutes with {site.brand}.
        </PageTitle>
        <PageLead>
          A paid strategy session for founders and product leaders who need a
          decision, not a pep talk. Book on Google Calendar, then complete
          payment via Stripe.
        </PageLead>

        <p className="font-display-italic mt-8 text-4xl text-saffron md:text-5xl">
          {consult.priceLabel}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {consult.minutes}-minute strategy session · {consult.currency}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {consult.hasCalendar ? (
            <PrimaryCta href={consult.calendarUrl ?? undefined} external>
              Book on Google Calendar
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </PrimaryCta>
          ) : (
            <PrimaryCta disabled>Calendar link coming</PrimaryCta>
          )}
          {consult.hasStripe ? (
            <SecondaryCta href={consult.stripeUrl ?? undefined} external>
              Pay via Stripe
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </SecondaryCta>
          ) : (
            <SecondaryCta disabled>
              Stripe link coming
            </SecondaryCta>
          )}
        </div>

        {!consult.hasCalendar && !consult.hasStripe && (
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            Scheduling and payment links are not published yet. Email{" "}
            <a className="text-saffron hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            in the meantime.
          </p>
        )}

        <ol className="mt-16 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.number}
              className="rounded-[1.5rem] border border-border bg-card p-6 shadow-card"
            >
              <p className="font-display-italic text-2xl text-saffron">
                {step.number}
              </p>
              <h2 className="font-heading mt-4 text-xl font-medium text-foreground">
                {step.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <section className="mt-16 max-w-2xl border-t border-border pt-12">
          <h2 className="font-heading text-2xl font-medium text-foreground">
            What you get
          </h2>
          <ul className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground">
            <li>A short read of the situation — what {site.brand} thinks, in plain language.</li>
            <li>A decision frame from the books (Decide Then Build, Build Before You Scale) applied to your case, not a manuscript dump.</li>
            <li>Clear next moves, and whether a longer engagement is even worth it.</li>
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            This is product and delivery counsel, not medical or legal advice.
            Prefer to start with a book?{" "}
            <Link to="/books" className="text-saffron hover:underline">
              Shop the shelf
            </Link>
            .
          </p>
        </section>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Book;
