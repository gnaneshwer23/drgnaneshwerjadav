import { type FormEvent, useState } from "react";
import { site } from "@/data/site";
import ShelfFrame from "@/components/ShelfFrame";
import { SecondaryCta } from "@/components/PageShell";

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
    <ShelfFrame
      title="A DrJadav course is coming. Not live yet."
      lead={`There is no LMS, no fake syllabus, and no invented curriculum. When a cohort opens it will sit on the same operating ideas as the books — deciding before building, and delivering in the age of AI. Join the waitlist and we will email you from ${site.email}.`}
    >
      <div className="mt-8 flex flex-wrap gap-3">
        <SecondaryCta to="/books">Shop books</SecondaryCta>
      </div>

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
            className="inline-flex min-h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
    </ShelfFrame>
  );
};

export default Course;
