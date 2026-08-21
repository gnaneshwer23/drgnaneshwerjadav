import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { work } from "@/data/site";

const WorkSection = () => {
  return (
    <section id="work" className="section-y scroll-mt-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex max-w-3xl flex-col gap-4 sm:mb-16">
          <p className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-navy" />
            Selected work
          </p>
          <h2 className="display text-foreground">
            Products at the intersection of health, learning, and systems.
          </h2>
        </div>

        <ol className="divide-y divide-border border-y border-border">
          {work.map((item, i) => {
            const href = item.href;
            const inner = (
              <div className="grid gap-4 py-8 md:grid-cols-[5rem_minmax(0,1fr)_auto] md:items-start md:gap-8">
                <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground">
                  {item.number}
                </p>
                <div>
                  <p className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
                    {item.category}
                  </p>
                  <h3 className="font-heading mt-2 text-xl font-bold tracking-tight text-foreground md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                {href ? (
                  <span className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-foreground">
                    Visit
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                ) : null}
              </div>
            );

            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block min-h-11 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default WorkSection;
