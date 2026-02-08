import { motion } from "framer-motion";
import {
  UserPlus,
  Target,
  BookOpen,
  FolderCheck,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Onboarding",
    description: "AI-powered career assessment, skill profiling, and goal definition",
  },
  {
    icon: Target,
    title: "Skill Assessment",
    description: "Map your current skills, identify gaps, and chart your growth areas",
  },
  {
    icon: BookOpen,
    title: "Learning Path",
    description: "Modular content, project assignments, simulations, and cohort systems",
  },
  {
    icon: FolderCheck,
    title: "Project Completion",
    description: "Real-world projects that build your portfolio and demonstrate capability",
  },
  {
    icon: ShieldCheck,
    title: "Trust Validation",
    description: "Peer and mentor validation, skill scoring, and trust reputation building",
  },
  {
    icon: Rocket,
    title: "Career Matching",
    description: "Role mapping, opportunity alerts, and transition planning for career mobility",
  },
];

const JourneySection = () => {
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
            How It Works
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-5">
            Your Journey to{" "}
            <span className="text-gradient-saffron">Career Mobility</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A structured pathway from assessment to employment — trust-validated,
            AI-powered, and designed for India's workforce reality.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 md:gap-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 pl-14 md:pl-0 ${
                    isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}
                >
                  <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex-shrink-0 w-12 h-12 rounded-full bg-card border-2 border-saffron/30 flex items-center justify-center shadow-card z-10 -translate-x-6">
                  <step.icon className="h-5 w-5 text-saffron" />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
