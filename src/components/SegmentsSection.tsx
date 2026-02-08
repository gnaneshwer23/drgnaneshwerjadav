import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Building2 } from "lucide-react";

const segments = [
  {
    icon: GraduationCap,
    title: "Foundation Users",
    subtitle: "Path to Skills",
    users: "Students, unemployed youth, first-generation graduates, rural & Tier-2/3 users",
    color: "border-saffron/40",
    iconBg: "bg-saffron/10",
    iconColor: "text-saffron",
  },
  {
    icon: Briefcase,
    title: "Growth Users",
    subtitle: "Core Platform",
    users: "Working professionals, career switchers, mid-level managers, domain transition seekers",
    color: "border-emerald/40",
    iconBg: "bg-emerald/10",
    iconColor: "text-emerald",
  },
  {
    icon: Award,
    title: "Leadership Users",
    subtitle: "Elevare",
    users: "Managers, leaders, CXOs, founders, policy leaders",
    color: "border-saffron-light/40",
    iconBg: "bg-saffron-light/10",
    iconColor: "text-saffron-light",
  },
  {
    icon: Building2,
    title: "Institutional Users",
    subtitle: "Enterprise & Government",
    users: "Corporates, universities, government bodies, NGOs, CSR organisations",
    color: "border-navy-light/40",
    iconBg: "bg-navy-light/10",
    iconColor: "text-navy-light",
  },
];

const SegmentsSection = () => {
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
            Who It's For
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-5">
            Every Stage.{" "}
            <span className="text-gradient-saffron">Every Ambition.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From first-generation graduates in Tier-3 cities to CXOs charting
            organisational transformation — one platform, infinite pathways.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {segments.map((segment, i) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl border-2 ${segment.color} bg-card p-8 shadow-card hover:shadow-card-hover transition-all duration-300`}
            >
              <div className="flex items-start gap-5">
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-xl ${segment.iconBg} flex items-center justify-center`}
                >
                  <segment.icon className={`h-7 w-7 ${segment.iconColor}`} />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    {segment.subtitle}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-card-foreground mb-2">
                    {segment.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {segment.users}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
