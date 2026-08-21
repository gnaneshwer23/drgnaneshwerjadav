import { Link } from "react-router-dom";
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

const Book = () => {
  const { consult } = storefront;

  return (
    <StorefrontLayout>
      <PageShell>
        <Eyebrow>Consultation</Eyebrow>
        <PageTitle>
          {consult.minutes} minutes with {site.brand}. {consult.priceLabel}.
        </PageTitle>
        <PageLead>
          A paid strategy session for founders and product leaders who need a
          decision, not a pep talk. Pick a slot on Google Calendar, then pay
          via Stripe. The session is confirmed when both steps are done — in
          that order.
        </PageLead>

        <p className="mt-8 font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {consult.priceLabel}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {consult.minutes}-minute strategy session · {consult.currency}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {consult.hasCalendar ? (
            <PrimaryCta href={consult.calendarUrl ?? undefined} external>
              Pick a slot
            </PrimaryCta>
          ) : (
            <PrimaryCta disabled>Calendar link coming</PrimaryCta>
          )}
          {consult.hasStripe ? (
            <SecondaryCta href={consult.stripeUrl ?? undefined} external>
              Then pay {consult.priceLabel}
            </SecondaryCta>
          ) : (
            <SecondaryCta disabled>Stripe link coming</SecondaryCta>
          )}
        </div>

        {!consult.hasCalendar && !consult.hasStripe ? (
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            Scheduling and payment links are not published yet. Email{" "}
            <a
              className="font-medium text-foreground underline-offset-4 hover:underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>{" "}
            in the meantime.
          </p>
        ) : (
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            Do not pay first. Hold a time, then complete the Stripe Payment
            Link.
          </p>
        )}

        <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              label: "01",
              title: "Pick a slot",
              body: "Open the Google Appointment Schedule and choose a time. That holds the slot on both calendars.",
            },
            {
              label: "02",
              title: "Then pay",
              body: `Pay ${consult.priceLabel} on the Stripe Payment Link. The consult is confirmed only after payment.`,
            },
            {
              label: "03",
              title: "Arrive with a real problem",
              body: "Bring the product, team, or decision you are stuck on. You leave with a short DrJadav take and next moves.",
            },
          ].map((step) => (
            <li
              key={step.label}
              className="rounded-[1.75rem] bg-secondary p-8"
            >
              <p className="text-sm font-medium text-muted-foreground">
                {step.label}
              </p>
              <h2 className="font-heading mt-4 text-xl font-bold tracking-tight text-foreground">
                {step.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <section className="mt-16 max-w-2xl border-t border-border pt-12">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
            What you get
          </h2>
          <ul className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground">
            <li>
              A short read of the situation — what {site.brand} thinks, in
              plain language.
            </li>
            <li>
              A decision frame from the books (Decide Then Build, Build Before
              You Scale) applied to your case, not a manuscript dump.
            </li>
            <li>
              Clear next moves, and whether a longer engagement is even worth
              it.
            </li>
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            This is product and delivery counsel, not medical or legal advice.
            Prefer to start with a book or a waitlist?{" "}
            <Link
              to="/books"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Shop the shelf
            </Link>
            {" · "}
            <Link
              to="/course"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Course waitlist
            </Link>
            .
          </p>
        </section>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Book;
