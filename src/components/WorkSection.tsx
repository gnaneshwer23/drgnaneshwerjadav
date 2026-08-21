import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { work } from "@/data/site";

const WorkSection = () => {
  return (
    <section id="work" className="section-y scroll-mt-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="eyebrow">Selected work</p>
          <h2 className="display text-foreground">
            Products at the intersection of health, learning, and systems.
          </h2>
        </div>

        <ol className="divide-y divide-border border-y border-border">
          {work.map((item, i) => {
            const href = item.href;
            const inner = (
              <>
                <span className="font-heading w-10 shrink-0 text-sm font-semibold tabular-nums text-saffron">
                  {item.number}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                    <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="shrink-0 text-sm font-medium text-muted-foreground">
                      {item.category}
                    </p>
                  </div>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-3">
                    {item.description}
                  </p>
                </div>
                {href ? (
                  <ArrowUpRight
                    className="mt-0.5 hidden h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-saffron sm:block"
                    aria-hidden="true"
                  />
                ) : null}
              </>
            );

            const className =
              "group flex min-h-11 items-start gap-4 py-7 sm:gap-6 sm:py-8 md:gap-10";

            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`${className} rounded-xl transition-colors hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron sm:-mx-3 sm:px-3`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={className}>{inner}</div>
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
