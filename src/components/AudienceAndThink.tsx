import { Link } from "react-router-dom";
import { audiences } from "@/data/site";
import { thinking } from "@/data/thinking";

const AudienceAndThink = () => {
  const latest = thinking[0];

  return (
    <section className="section-y bg-background pt-0">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 border-t border-border pt-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
              Four rooms
            </p>
            <h2 className="display text-foreground">Same work. Different doors.</h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {audiences.map((item) => (
                <li key={item.id} className="py-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    {item.line}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
              Latest thinking
            </p>
            <h2 className="font-serif text-3xl font-medium italic tracking-tight text-foreground">
              {latest.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {latest.dek}
            </p>
            <Link
              to={`/think/${latest.slug}`}
              className="mt-6 inline-flex min-h-11 items-center text-sm font-medium underline decoration-foreground/30 underline-offset-[6px] hover:decoration-foreground"
            >
              Read the note
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceAndThink;
