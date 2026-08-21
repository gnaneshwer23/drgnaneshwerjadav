import { motion } from "framer-motion";
import { focusAreas, site } from "@/data/site";

const AboutSection = () => {
  return (
    <section id="about" className="section-y scroll-mt-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="max-w-2xl"
        >
          <p className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
            About
          </p>
          <h2 className="display text-foreground">
            Biology to product. Constraint to shipped system.
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-base leading-[1.75] text-muted-foreground sm:mt-8">
            <p>
              AI Product & Programme Leader. I build intelligent products for
              complex problems — HealthTech, EdTech, and regulated systems
              where a model cannot own the decision.
            </p>
            <p>
              Pharmacy, medical biotechnology, immunology (PhD), MBA in
              healthcare. AI is an accelerator: research, specs, prototypes.
              Humans stay in the loop.
            </p>
            <p>Based in {site.location}.</p>
          </div>
        </motion.div>

        <dl className="mt-16 grid gap-10 border-t border-border pt-12 sm:grid-cols-3">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <dt className="font-heading text-lg font-bold text-foreground">
                {area.title}
              </dt>
              <dd className="mt-4 space-y-3">
                {area.items.map((item) => (
                  <p
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                    {item}
                  </p>
                ))}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default AboutSection;
