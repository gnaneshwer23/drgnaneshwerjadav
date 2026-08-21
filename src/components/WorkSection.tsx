import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { work } from "@/data/site";

const panels = [
  "bg-[hsl(82_14%_32%)] text-[hsl(40_40%_96%)]",
  "bg-[hsl(18_42%_42%)] text-[hsl(40_40%_96%)]",
  "bg-[hsl(24_18%_16%)] text-[hsl(40_40%_96%)]",
] as const;

const WorkSection = () => {
  return (
    <section id="work" className="section-y scroll-mt-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl sm:mb-16">
          <p className="eyebrow">Selected work</p>
          <h2 className="display text-foreground">
            Products at the intersection of health, learning, and systems.
          </h2>
        </div>

        <ol className="space-y-8 sm:space-y-12">
          {work.map((item, i) => {
            const href = item.href;
            const panel = (
              <div
                className={`relative flex min-h-[12rem] items-end overflow-hidden rounded-[1.75rem] p-6 sm:min-h-[16rem] sm:p-8 ${panels[i % panels.length]}`}
              >
                <span
                  className="font-display-italic absolute right-4 top-2 text-[5rem] leading-none opacity-20 sm:text-[7rem]"
                  aria-hidden="true"
                >
                  {item.number}
                </span>
                <div className="relative">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] opacity-70">
                    {item.category}
                  </p>
                  <p className="font-display-italic mt-2 text-3xl leading-none sm:text-4xl">
                    {item.title}
                  </p>
                </div>
              </div>
            );

            const copy = (
              <div className="flex min-h-11 flex-col justify-center py-2 md:py-4">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-heading text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                    {item.title}
                  </h3>
                  {href ? (
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-saffron"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );

            const inner = (
              <div className="grid gap-5 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-center md:gap-10">
                {panel}
                {copy}
              </div>
            );

            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block rounded-[1.75rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
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
