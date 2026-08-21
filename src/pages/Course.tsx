import { type FormEvent, useState } from "react";
import { site } from "@/data/site";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, {
  Eyebrow,
  PageLead,
  PageTitle,
  PrimaryCta,
  SecondaryCta,
} from "@/components/PageShell";

const WAITLIST_SUBJECT = "Course waitlist";

function waitlistMailto(name: string, email: string) {
  const subject = encodeURIComponent(WAITLIST_SUBJECT);
  const lines = [
    "Please add me to the DrJadav course waitlist.",
    "",
    name.trim() ? `Name: ${name.trim()}` : null,
    email.trim() ? `Email: ${email.trim()}` : null,
  ].filter(Boolean);
  const body = encodeURIComponent(lines.join("\n"));
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}

const Course = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [opened, setOpened] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = waitlistMailto(name, email);
    setOpened(true);
  };

  return (
    <StorefrontLayout>
      <PageShell>
        <Eyebrow>Course</Eyebrow>
        <PageTitle>A DrJadav course is coming. Not live yet.</PageTitle>
        <PageLead>
          There is no LMS, no fake syllabus, and no invented curriculum. When a
          cohort opens it will sit on the same operating ideas as the books —
          deciding before building, and delivering in the age of AI. Join the
          waitlist and we will email you from {site.email}.
        </PageLead>
        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryCta href={waitlistMailto("", "")}>Join the waitlist</PrimaryCta>
          <SecondaryCta to="/books">Shop books</SecondaryCta>
        </div>

        <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              number: "01",
              title: "Coming soon",
              body: "No recorded modules, prices, or start dates yet. This page will change when there is something real to enrol in.",
            },
            {
              number: "02",
              title: "Same operating ideas",
              body: "The course will draw on Product Book 2026 — Decide Then Build, Build Before You Scale — not a generic AI certificate.",
            },
            {
              number: "03",
              title: "Waitlist only",
              body: "Leave a name and email. Your mail app opens a message to Gnaneshwer. Nothing is stored on this site.",
            },
          ].map((item) => (
            <li key={item.number}>
              <div className="flex aspect-[4/3] items-end rounded-2xl bg-secondary p-5">
                <span className="font-heading text-5xl font-semibold tabular-nums text-foreground/15 sm:text-6xl">
                  {item.number}
                </span>
              </div>
              <h2 className="font-heading mt-5 text-xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ol>

        <section className="mt-16 max-w-xl border-t border-border pt-12">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
            Join the waitlist
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Submitting opens your email client. If that fails, write to{" "}
            <a
              className="font-medium text-foreground underline-offset-4 hover:underline"
              href={`mailto:${site.email}?subject=${encodeURIComponent(WAITLIST_SUBJECT)}`}
            >
              {site.email}
            </a>{" "}
            with the subject “Course waitlist”.
          </p>

          <form className="mt-8 space-y-4" onSubmit={onSubmit}>
            <label className="block">
              <span className="text-sm font-medium text-foreground">Name</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 flex min-h-11 w-full rounded-xl border border-border bg-card px-4 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-foreground">Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 flex min-h-11 w-full rounded-xl border border-border bg-card px-4 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </label>
            <button
              type="submit"
              className="inline-flex min-h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Open waitlist email
            </button>
          </form>
          {opened ? (
            <p className="mt-4 text-sm text-muted-foreground">
              If a compose window did not open, email {site.email} directly.
            </p>
          ) : null}
        </section>
      </PageShell>
    </StorefrontLayout>
  );
};

export default Course;
