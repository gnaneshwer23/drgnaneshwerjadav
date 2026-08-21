import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { work } from "@/data/site";

const WorkSection = () => {
  return (
    <section id="work" className="section-y scroll-mt-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex max-w-3xl flex-col gap-3 sm:mb-14">
          <p className="eyebrow">Selected work</p>
          <h2 className="display text-foreground">
            Products at the intersection of health, learning, and systems.
          </h2>
        </div>

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((item, i) => {
            const href = item.href;
            const inner = (
              <>
                <div className="flex aspect-[4/3] items-end rounded-2xl bg-secondary p-5">
                  <span className="font-heading text-5xl font-semibold tabular-nums text-foreground/15 sm:text-6xl">
                    {item.number}
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {item.category}
                    </p>
                  </div>
                  {href ? (
                    <ArrowUpRight
                      className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </>
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
                    className="group block min-h-11 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
