import { motion } from "framer-motion";
import { timeline } from "@/data/timeline";

const ArcTimeline = () => {
  return (
    <section className="section-y scroll-mt-24 bg-background" id="arc">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <p className="eyebrow">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
          Science → Product → AI → Delivery → Impact
        </p>
        <h2 className="display max-w-2xl text-foreground">
          The path is not a career ladder. It is a compounding stack.
        </h2>
        <ol className="mt-14 divide-y divide-border border-y border-border">
          {timeline.map((item, i) => (
            <motion.li
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="grid gap-3 py-8 md:grid-cols-[7rem_6.5rem_minmax(0,1fr)] md:gap-8"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {item.year}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground">
                {item.phase}
              </p>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.place}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ArcTimeline;
