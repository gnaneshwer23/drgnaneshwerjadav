import { motion } from "framer-motion";
import { focusAreas, site } from "@/data/site";

const AboutSection = () => {
  return (
    <section id="about" className="section-y scroll-mt-24 bg-secondary/50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
          >
            <p className="eyebrow">About</p>
            <h2 className="display text-foreground">
              Biology to product. Regulated domains to shipped software.
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-muted-foreground sm:mt-8 sm:space-y-5">
              <p>
                I work at the intersection of HealthTech, EdTech, and
                AI-enabled platforms. My background spans biology, pharmacy,
                biotechnology, and immunology (PhD), with hands-on experience
                building 0→1 and scaled digital products in regulated
                environments.
              </p>
              <p>
                I use AI as a product-building accelerator — synthesising
                research, drafting specs, prototyping workflows, and keeping
                humans in the loop. I am less interested in hype and more
                interested in building things that actually work.
              </p>
              <p>
                Based in {site.location}, currently building at {site.company}.
              </p>
            </div>
          </motion.div>

          <dl className="divide-y divide-border border-y border-border">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="py-6 first:pt-0 last:pb-0 sm:py-7"
              >
                <dt className="font-heading text-base font-bold text-foreground sm:text-lg">
                  {area.title}
                </dt>
                <dd className="mt-3 space-y-2">
                  {area.items.map((item) => (
                    <p
                      key={item}
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      {item}
                    </p>
                  ))}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
