import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { focusAreas, site } from "@/data/site";

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 bg-secondary/50 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-saffron">
              About
            </p>
            <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
              Biology to product. Regulated domains to shipped software.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
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
              <p>
                <Link
                  to="/about"
                  className="font-semibold text-saffron hover:underline"
                >
                  Full timeline
                </Link>
                {" — "}public facts only, until a CV is added.
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {area.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {area.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
