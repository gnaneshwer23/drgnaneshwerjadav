import { useState } from "react";
import { storefront } from "@/data/commerce";
import { site } from "@/data/site";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, {
  Eyebrow,
  PageLead,
  PageTitle,
} from "@/components/PageShell";
import Seo from "@/components/Seo";
import {
  readConsultProgress,
  writeConsultProgress,
  type ConsultProgress,
} from "@/lib/consult-progress";

const Book = () => {
  const { consult } = storefront;
  const [progress, setProgress] = useState<ConsultProgress>(() =>
    typeof window === "undefined" ? "idle" : readConsultProgress(),
  );

  const mark = (next: ConsultProgress) => {
    setProgress(next);
    writeConsultProgress(next);
  };

  const slotHeld = progress === "slot" || progress === "paid";
  const paid = progress === "paid";

  return (
    <StorefrontLayout>
      <Seo
        title="Consult"
        description={`${consult.minutes}-minute strategy session, ${consult.priceLabel}. Calendar, then Stripe.`}
        path="/book"
      />
      <PageShell>
        <Eyebrow>Consultation</Eyebrow>
        <PageTitle>
          {consult.minutes} minutes with {site.brand}.
        </PageTitle>
        <PageLead>
          A paid strategy session for founders and product leaders who need a
          decision, not a pep talk. Hold a time on Google Calendar, then pay
          via Stripe. The session is confirmed when both steps are done — in
          that order.
        </PageLead>

        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {consult.minutes}-minute strategy session
        </p>
        <p className="mt-3 font-heading text-[clamp(2.25rem,5vw,3.25rem)] font-medium tracking-[-0.04em] text-foreground">
          {consult.priceLabel}
        </p>

        <ol className="mt-12 divide-y divide-border border-y border-border">
          <li className="py-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              01 · Pick a slot
            </p>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Open the Google Appointment Schedule and choose a time. That
              holds the slot on both calendars.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {consult.hasCalendar ? (
                <a
                  href={consult.calendarUrl ?? undefined}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => mark("slot")}
                  className="inline-flex min-h-11 items-center rounded-full bg-foreground px-5 text-[13px] font-medium tracking-[-0.01em] text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Pick a slot
                </a>
              ) : (
                <span className="inline-flex min-h-11 items-center rounded-full bg-foreground/40 px-6 text-sm font-medium text-background">
                  Calendar link coming
                </span>
              )}
              {slotHeld ? (
                <p className="text-sm text-muted-foreground">
                  Slot held — continue to payment.
                </p>
              ) : consult.hasCalendar ? (
                <button
                  type="button"
                  onClick={() => mark("slot")}
                  className="inline-flex min-h-11 items-center text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-[6px] hover:decoration-foreground"
                >
                  I already held a time
                </button>
              ) : null}
            </div>
          </li>

          <li className="py-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              02 · Then pay
            </p>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Pay {consult.priceLabel} on the Stripe Payment Link. Do not pay
              first. The consult is confirmed only after payment.
            </p>
            <div className="mt-5">
              {consult.hasStripe && slotHeld ? (
                <a
                  href={consult.stripeUrl ?? undefined}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => mark("paid")}
                  className="inline-flex min-h-11 items-center rounded-full border border-border px-5 text-[13px] font-medium tracking-[-0.01em] text-foreground hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Pay {consult.priceLabel}
                </a>
              ) : consult.hasStripe ? (
                <span
                  className="inline-flex min-h-11 items-center rounded-full border border-border px-6 text-sm font-medium text-muted-foreground"
                  aria-disabled="true"
                >
                  Pay after you hold a slot
                </span>
              ) : (
                <span className="inline-flex min-h-11 items-center text-sm font-medium text-muted-foreground">
                  Stripe link coming
                </span>
              )}
            </div>
          </li>

          <li className="py-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              03 · Arrive with a real problem
            </p>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Bring the product, team, or decision you are stuck on. You leave
              with a short DrJadav take and next moves.
            </p>
            {paid ? (
              <p className="mt-4 text-sm font-medium text-foreground">
                Both steps started. Check email for the calendar hold and Stripe
                receipt.
              </p>
            ) : null}
          </li>
        </ol>

        {!consult.hasCalendar && !consult.hasStripe ? (
          <p className="mt-8 max-w-xl text-sm text-muted-foreground">
            Scheduling and payment links are not published yet. Email{" "}
            <a
              className="font-medium text-foreground underline-offset-4 hover:underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>{" "}
            in the meantime.
          </p>
        ) : null}

        <section className="mt-16 max-w-2xl border-t border-border pt-12">
          <h2 className="font-heading text-xl font-medium tracking-[-0.03em] text-foreground">
            What you get
          </h2>
          <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
            <li>
              A short read of the situation — what {site.brand} thinks, in
              plain language.
            </li>
            <li>
              A decision frame applied to your case — not a pep talk or a
              manuscript dump.
            </li>
            <li>
              Clear next moves, and whether a longer engagement is even worth
              it.
            </li>
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            This is product and delivery counsel, not medical or legal advice.
          </p>
        </section>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Book;
