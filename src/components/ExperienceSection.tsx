import { Link } from "react-router-dom";
import { experience } from "@/data/experience";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-y scroll-mt-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
              Experience
            </p>
            <h2 className="display max-w-xl text-foreground">
              Roles first. Products underneath.
            </h2>
          </div>
          <Link
            to="/experience"
            className="inline-flex min-h-11 items-center text-sm underline decoration-foreground/30 underline-offset-[6px] hover:decoration-foreground"
          >
            Full timeline
          </Link>
        </div>

        <ol className="mt-12 divide-y divide-border border-y border-border">
          {experience.map((item) => (
            <li
              key={`${item.organisation}-${item.period}`}
              className="grid gap-4 py-8 md:grid-cols-[8.5rem_minmax(0,1fr)] md:gap-10"
            >
              <p className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground">
                {item.period}
              </p>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.organisation} · {item.place}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
                {item.products && item.products.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.products.map((product) => (
                      <li key={product.slug}>
                        <Link
                          to={`/work/${product.slug}`}
                          className="inline-flex min-h-11 items-center rounded-full border border-border px-3 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground hover:border-foreground/40"
                        >
                          {product.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
