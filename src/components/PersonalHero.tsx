import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { site } from "@/data/site";
import Portrait from "@/components/Portrait";

const PersonalHero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 cinematic-grain" aria-hidden="true" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-32 lg:pb-32 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div className="min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
            >
              {site.role} · {site.location}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.04 }}
              className="font-heading mt-5 text-[clamp(2.1rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-foreground"
            >
              {site.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="font-serif mt-5 max-w-[22ch] text-[clamp(1.35rem,2.6vw,1.85rem)] font-medium italic leading-snug tracking-tight text-foreground"
            >
              {site.hero}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.16 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/projects"
                className="inline-flex min-h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Projects
              </Link>
              <Link
                to="/book"
                className="inline-flex min-h-11 items-center rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Let’s talk
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="relative w-full"
          >
            <Portrait />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalHero;
