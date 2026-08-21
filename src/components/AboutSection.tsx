import { motion } from "framer-motion";
import { focusAreas, site } from "@/data/site";
import portrait from "@/assets/profile.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-y scroll-mt-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35 }}
          >
            <p className="eyebrow">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
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

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <img
              src={portrait}
              alt=""
              width={720}
              height={480}
              className="aspect-[5/4] w-full rounded-[1.75rem] object-cover object-top grayscale"
            />
            <div className="absolute bottom-5 right-5 max-w-[11rem] rounded-2xl bg-card p-5 shadow-card">
              <p className="font-heading text-3xl font-bold tracking-tight text-foreground">
                PhD
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Immunology, Verona — then product in regulated systems.
              </p>
            </div>
          </motion.div>
        </div>

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
                    <span className="mt-1.5 inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-foreground text-[9px] font-bold leading-none text-background">
                      +
                    </span>
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
