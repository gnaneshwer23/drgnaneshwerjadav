import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { flagships } from "@/data/work";

const statusLabel: Record<string, string> = {
  SHIPPED: "Live",
  PILOT: "Pilot",
  IN_DEVELOPMENT: "In development",
  LIBRARY: "Library",
};

const FlagshipWork = () => {
  return (
    <section id="work" className="scroll-mt-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <p className="eyebrow pt-4">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
          Selected work · live products
        </p>
        <h2 className="display max-w-2xl text-foreground">
          Three sites. Three problems. Nothing else on this stage.
        </h2>
      </div>

      <ol className="mt-12">
        {flagships.map((item, i) => (
          <motion.li
            key={item.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className={i % 2 === 1 ? "bg-secondary/60" : "bg-background"}
          >
            <article className="container mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[7rem_minmax(0,1fr)] lg:gap-16 lg:py-24">
              <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {item.category} · {statusLabel[item.status]}
                </p>
                <h3 className="font-serif mt-4 text-[clamp(2.2rem,5vw,4.25rem)] font-medium italic leading-[0.95] tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-6 max-w-2xl text-base leading-[1.75] text-muted-foreground">
                  {item.summary}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-foreground px-6 text-sm font-medium text-background hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      Visit live site
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ) : null}
                  <Link
                    to={`/work/${item.slug}`}
                    className="inline-flex min-h-11 items-center rounded-full border border-border px-6 text-sm font-medium text-foreground hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Case study
                  </Link>
                </div>
              </div>
            </article>
          </motion.li>
        ))}
      </ol>
    </section>
  );
};

export default FlagshipWork;
