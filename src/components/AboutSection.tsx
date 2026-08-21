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
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-navy" />
            About
          </p>
          <h2 className="display text-foreground">
            Biology to product. Regulated domains to shipped software.
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-base leading-[1.75] text-muted-foreground sm:mt-8">
            <p>
              Product and programme leader in AI-enabled HealthTech and
              EdTech, working in regulated systems. I build and deliver
              regulated AI-enabled digital platforms — from 0→1 products.
            </p>
            <p>
              Background spans pharmacy, biotechnology, and immunology (PhD),
              with an MBA in healthcare management. I use AI as a
              product-building accelerator — synthesising research, drafting
              specs, prototyping workflows, and keeping humans in the loop.
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
                    <span className="mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
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
