import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@/data/site";

const PersonalHero = () => {
  return (
    <section className="relative min-h-dvh flex items-end overflow-hidden bg-navy">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      >
        <div className="absolute -top-24 right-[-8%] h-[28rem] w-[28rem] rounded-full border border-saffron/20" />
        <div className="absolute bottom-[-6rem] left-[-4%] h-72 w-72 rounded-full border border-saffron/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-transparent to-navy-dark" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pb-16 pt-32 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-saffron"
        >
          {site.role} · {site.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="font-heading max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-primary-foreground md:text-7xl lg:text-[5.25rem]"
        >
          {site.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/70 md:text-xl"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            to="/book"
            className="inline-flex min-h-11 items-center rounded-xl bg-saffron-gradient px-6 py-3 text-sm font-semibold text-accent-foreground shadow-saffron transition-opacity hover:opacity-90"
          >
            Book a consult
          </Link>
          <Link
            to="/books"
            className="inline-flex min-h-11 items-center rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 px-6 py-3 text-sm font-semibold text-primary-foreground/90 backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
          >
            Shop books
          </Link>
          <a
            href="#work"
            className="inline-flex min-h-11 items-center px-2 py-3 text-sm font-medium text-primary-foreground/60 transition-colors hover:text-saffron"
          >
            Selected work
            <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>

        <p className="mt-16 max-w-xl text-sm text-primary-foreground/45">
          PhD immunology · HealthTech, EdTech, and AI-enabled platforms ·{" "}
          {site.company}
        </p>
      </div>
    </section>
  );
};

export default PersonalHero;
