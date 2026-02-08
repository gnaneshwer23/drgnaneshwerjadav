import { motion } from "framer-motion";
import {
  Fingerprint,
  Brain,
  ShieldCheck,
  Compass,
  Crown,
  Cpu,
} from "lucide-react";

const engines = [
  {
    icon: Fingerprint,
    title: "Identity System",
    description:
      "Digital career identity with skill profiles, capability mapping, trust scores, and career history — your professional DNA.",
    color: "text-saffron",
    bgColor: "bg-saffron/10",
  },
  {
    icon: Brain,
    title: "Skill Engine",
    description:
      "Modular learning with micro-credentials, AI-powered learning paths, and project-based skill development.",
    color: "text-emerald",
    bgColor: "bg-emerald/10",
  },
  {
    icon: ShieldCheck,
    title: "Trust Engine",
    description:
      "Verified projects, peer and mentor validation, skill reputation scoring — trust that's earned, not claimed.",
    color: "text-saffron-light",
    bgColor: "bg-saffron-light/10",
  },
  {
    icon: Compass,
    title: "Career Engine",
    description:
      "Role mapping, career pathways, opportunity matching, forecasting, and mobility analytics for career navigation.",
    color: "text-emerald-light",
    bgColor: "bg-emerald-light/10",
  },
  {
    icon: Crown,
    title: "Leadership Engine",
    description:
      "Simulations, decision labs, crisis scenarios, ethics training, and governance systems for tomorrow's leaders.",
    color: "text-saffron",
    bgColor: "bg-saffron/10",
  },
  {
    icon: Cpu,
    title: "AI Intelligence",
    description:
      "Personalisation, recommendations, skill-gap prediction, workforce analytics, and organisational intelligence.",
    color: "text-navy-light",
    bgColor: "bg-navy-light/10",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const EnginesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-saffron mb-4 block">
            Platform Architecture
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-5">
            Six Engines.{" "}
            <span className="text-gradient-saffron">One Platform.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            An integrated career operating system that connects identity, skills,
            trust, careers, leadership, and intelligence into one unified experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {engines.map((engine) => (
            <motion.div
              key={engine.title}
              variants={itemVariants}
              className="group relative rounded-2xl border border-border bg-card p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${engine.bgColor} mb-5`}
              >
                <engine.icon className={`h-6 w-6 ${engine.color}`} />
              </div>
              <h3 className="font-heading text-xl font-bold text-card-foreground mb-3">
                {engine.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {engine.description}
              </p>
              <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`w-full h-full rounded-tr-2xl ${engine.bgColor} blur-2xl`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EnginesSection;
