import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { work } from "@/data/site";

const WorkSection = () => {
  return (
    <section id="work" className="scroll-mt-24 bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-saffron">
            Selected work
          </p>
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            Products at the intersection of health, learning, and systems.
          </h2>
        </div>

        <ol className="divide-y divide-border border-y border-border">
          {work.map((item, i) => {
            const inner = (
              <>
                <span className="font-heading text-sm font-semibold tabular-nums text-saffron">
                  {item.number}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-8">
                    <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="shrink-0 text-sm font-medium text-muted-foreground">
                      {item.category}
                    </p>
                  </div>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <ArrowUpRight
                  className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-saffron"
                  aria-hidden="true"
                />
              </>
            );

            const className =
              "group flex min-h-11 items-start gap-6 py-8 transition-colors hover:bg-secondary/60 md:-mx-4 md:gap-10 md:px-4";

            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={className}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link to={item.href} className={className}>
                    {inner}
                  </Link>
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
