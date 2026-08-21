import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { flagships } from "@/data/work";
import EvidenceBadge from "@/components/EvidenceBadge";

const statusLabel: Record<string, string> = {
  SHIPPED: "Shipped",
  PILOT: "Pilot",
  IN_DEVELOPMENT: "In development",
  LIBRARY: "Library",
};

const WorkSection = () => {
  return (
    <section id="work" className="section-y scroll-mt-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex max-w-3xl flex-col gap-4 sm:mb-16">
          <p className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
            Selected work · four flagships
          </p>
          <h2 className="display text-foreground">
            Names that appear in public sources. Metrics that do not, stay off this page.
          </h2>
        </div>

        <ol className="divide-y divide-border border-y border-border">
          {flagships.map((item, i) => (
            <motion.li
              key={item.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.32, delay: i * 0.04 }}
            >
              <Link
                to={`/work/${item.slug}`}
                className="group block rounded-lg py-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="grid gap-4 md:grid-cols-[5rem_minmax(0,1fr)_auto] md:items-start md:gap-10">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground">
                    {item.number}
                  </p>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
                      {item.category} · {statusLabel[item.status]}
                    </p>
                    <h3 className="font-heading mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {item.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.badges.slice(0, 3).map((badge) => (
                        <EvidenceBadge
                          key={`${badge.kind}-${badge.label}`}
                          kind={badge.kind}
                          label={badge.label}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="inline-flex min-h-11 items-center text-sm font-medium text-foreground underline decoration-foreground/20 underline-offset-[6px] group-hover:decoration-foreground">
                    Case study
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ol>

        <p className="mt-10">
          <Link
            to="/work"
            className="inline-flex min-h-11 items-center text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-[6px] hover:decoration-foreground"
          >
            All work library
          </Link>
        </p>
      </div>
    </section>
  );
};

export default WorkSection;
