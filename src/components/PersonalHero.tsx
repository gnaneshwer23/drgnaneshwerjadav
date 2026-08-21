import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { site } from "@/data/site";

const PersonalHero = () => {
  return (
    <section className="relative flex min-h-dvh items-end overflow-hidden bg-navy">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      >
        <div className="absolute -top-24 right-[-20%] h-64 w-64 rounded-full border border-saffron/20 sm:right-[-8%] sm:h-[28rem] sm:w-[28rem]" />
        <div className="absolute bottom-[-4rem] left-[-15%] h-48 w-48 rounded-full border border-saffron/10 sm:bottom-[-6rem] sm:left-[-4%] sm:h-72 sm:w-72" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-transparent to-navy-dark" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="eyebrow"
        >
          {site.role} · {site.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="font-heading max-w-5xl text-[clamp(2.25rem,8vw,5rem)] font-bold leading-[1.08] tracking-tight text-primary-foreground"
        >
          {site.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/70 sm:mt-8 sm:text-lg"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-10"
        >
          <a
            href="#work"
            className="inline-flex min-h-11 items-center rounded-xl bg-saffron-gradient px-6 text-sm font-semibold text-accent-foreground shadow-saffron transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
          >
            Selected work
            <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center text-sm font-medium text-primary-foreground/70 underline-offset-4 hover:text-saffron hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
          >
            LinkedIn
          </a>
        </motion.div>

        <p className="mt-12 max-w-xl text-sm leading-relaxed text-primary-foreground/45 sm:mt-16">
          PhD immunology · HealthTech, EdTech, and AI-enabled platforms ·{" "}
          {site.company}
        </p>
      </div>
    </section>
  );
};

export default PersonalHero;
