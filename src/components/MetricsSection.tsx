import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const metrics = [
  {
    value: 1.4,
    suffix: "B+",
    label: "Potential Users",
    description: "India's workforce population",
  },
  {
    value: 65,
    suffix: "%",
    label: "Youth Under 35",
    description: "Largest working-age demographic",
  },
  {
    value: 48,
    suffix: "%",
    label: "Skill Gap",
    description: "Graduates not job-ready",
  },
  {
    value: 100,
    suffix: "M+",
    label: "Jobs at Risk",
    description: "From AI disruption by 2030",
  },
];

const CountUpNumber = ({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const displayValue =
    value >= 1 && value < 10
      ? count.toFixed(1)
      : Math.round(count).toString();

  return (
    <span className="font-heading text-5xl md:text-6xl font-bold text-saffron">
      {displayValue}
      {suffix}
    </span>
  );
};

const MetricsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-saffron/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-saffron/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-saffron mb-4 block">
            Why Now
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-5">
            The Opportunity Is{" "}
            <span className="text-gradient-saffron">Unprecedented</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <CountUpNumber
                value={metric.value}
                suffix={metric.suffix}
                isInView={isInView}
              />
              <div className="font-heading text-lg font-semibold text-primary-foreground mt-3 mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-primary-foreground/50">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
