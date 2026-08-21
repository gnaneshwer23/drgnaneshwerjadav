import { type FormEvent, useState } from "react";
import { site } from "@/data/site";
import ShelfFrame from "@/components/ShelfFrame";

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

const terrain = [
  {
    label: "Science",
    text: "Pharmaceutical sciences, medical biotechnology, and immunology — the stack he trained in, not a module list.",
  },
  {
    label: "Domain",
    text: "Healthcare, clinical systems, and life sciences. Teaching stays educational. It is not medical advice.",
  },
  {
    label: "Build",
    text: "AI product and programme leadership across technology: decide, then make a working loop, with a human on the hook.",
  },
] as const;

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
      lead="For people building intelligent products in regulated, scientific work. Science → Product → AI → Delivery. No LMS, no start date, and no price until a cohort actually opens."
    >
      <dl className="mt-16 max-w-xl space-y-8 border-t border-border pt-12">
        {terrain.map((item) => (
          <div key={item.label}>
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {item.label}
            </dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              {item.text}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-10 max-w-xl text-[13px] leading-relaxed text-muted-foreground">
        Further courses in those areas will land here when they exist. Until
        then this page is a waitlist — join it and we will email you from{" "}
        {site.email}.
      </p>

      <section className="mt-16 max-w-md border-t border-border pt-12">
        <h2 className="font-heading text-xl font-medium tracking-[-0.03em] text-foreground">
          Join the waitlist
        </h2>
        <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
          Submitting opens your email client. If that fails, write to{" "}
          <a
            className="font-medium text-foreground underline-offset-4 hover:underline"
            href={`mailto:${site.email}?subject=${encodeURIComponent(WAITLIST_SUBJECT)}`}
          >
            {site.email}
          </a>{" "}
          with the subject “Course waitlist”.
        </p>

        <form className="mt-8 space-y-5" onSubmit={onSubmit}>
          <label className="block">
            <span className="text-[13px] font-medium tracking-[-0.01em] text-foreground">
              Name
            </span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 flex min-h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </label>
          <label className="block">
            <span className="text-[13px] font-medium tracking-[-0.01em] text-foreground">
              Email
            </span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 flex min-h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </label>
          <button
            type="submit"
            className="inline-flex min-h-11 items-center rounded-full bg-foreground px-5 text-[13px] font-medium tracking-[-0.01em] text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Open waitlist email
          </button>
        </form>
        {opened ? (
          <p className="mt-4 text-[13px] text-muted-foreground">
            If a compose window did not open, email {site.email} directly.
          </p>
        ) : null}
      </section>
    </ShelfFrame>
  );
};

export default Course;
