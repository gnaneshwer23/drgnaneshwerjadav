import { motion } from "framer-motion";

const principles = [
  { left: "Platform", right: "Product" },
  { left: "Trust", right: "Content" },
  { left: "Systems", right: "Courses" },
  { left: "Mobility", right: "Placement" },
  { left: "Capability", right: "Certification" },
  { left: "Infrastructure", right: "Institution" },
];

const PrinciplesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-saffron mb-4 block">
            Our Philosophy
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-5">
            Built on{" "}
            <span className="text-gradient-saffron">First Principles</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We chose to build differently. These six principles guide every
            decision on the platform.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.left}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center gap-4 rounded-xl bg-card border border-border p-5 shadow-card"
            >
              <span className="font-heading text-lg font-bold text-saffron flex-1 text-right">
                {principle.left}
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                over
              </span>
              <span className="font-heading text-lg font-bold text-muted-foreground/60 flex-1 text-left">
                {principle.right}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
