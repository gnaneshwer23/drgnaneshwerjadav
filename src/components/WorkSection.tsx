import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { work } from "@/data/site";

const panelClass = [
  "bg-neutral-800 text-white",
  "bg-stone-300 text-neutral-900",
  "bg-neutral-200 text-neutral-900",
] as const;

const WorkSection = () => {
  return (
    <section id="work" className="section-y scroll-mt-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex max-w-3xl flex-col gap-4 sm:mb-16">
          <p className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
            Selected work
          </p>
          <h2 className="display text-foreground">
            Products at the intersection of health, learning, and systems.
          </h2>
        </div>

        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((item, i) => {
            const href = item.href;
            const inner = (
              <>
                <div
                  className={`relative flex aspect-[4/3] items-end overflow-hidden rounded-[1.75rem] p-6 ${panelClass[i] ?? panelClass[0]}`}
                >
                  <span className="text-sm font-medium opacity-70">
                    {item.category}
                  </span>
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background">
                      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <div className="mt-5">
                  <h3 className="font-heading text-xl font-bold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
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
                    className="group block min-h-11 rounded-[1.75rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
