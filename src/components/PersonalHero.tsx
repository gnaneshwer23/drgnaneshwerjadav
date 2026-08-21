import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { site } from "@/data/site";
import portrait from "@/assets/profile.jpg";

const PersonalHero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-saffron/10 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
        <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[hsl(82_16%_42%/0.12)] blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:pb-28 lg:pt-32">
        <div className="order-2 min-w-0 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="eyebrow"
          >
            Hello — {site.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-heading max-w-[12ch] text-[clamp(2.75rem,10vw,5.75rem)] font-medium leading-[0.95] tracking-tight text-foreground"
          >
            <span className="font-display-italic">Gnaneshwer</span>
            <span className="mt-1 block">Jadav</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg"
          >
            {site.tagline}
          </motion.p>

          <motion.dl
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.18 }}
            className="mt-8 grid max-w-md gap-3 text-sm sm:mt-10"
          >
            <div className="flex gap-4 border-t border-border pt-3">
              <dt className="w-24 shrink-0 text-muted-foreground">Role</dt>
              <dd className="font-medium text-foreground">{site.role}</dd>
            </div>
            <div className="flex gap-4 border-t border-border pt-3">
              <dt className="w-24 shrink-0 text-muted-foreground">Based</dt>
              <dd className="font-medium text-foreground">{site.location}</dd>
            </div>
            <div className="flex gap-4 border-t border-border pt-3">
              <dt className="w-24 shrink-0 text-muted-foreground">Notes</dt>
              <dd className="font-medium text-foreground">{site.credentials}</dd>
            </div>
          </motion.dl>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.22 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-10"
          >
            <a
              href="#work"
              className="inline-flex min-h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
            >
              Selected work
              <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center text-sm font-medium text-foreground/70 underline-offset-4 hover:text-saffron hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none"
        >
          <div className="relative mx-auto aspect-square max-w-[22rem] sm:max-w-[26rem] lg:max-w-none">
            <div
              className="absolute inset-[8%] rounded-full bg-saffron/25"
              aria-hidden="true"
            />
            <div
              className="absolute inset-[18%] translate-x-[8%] translate-y-[6%] rounded-full bg-[hsl(82_16%_42%/0.22)]"
              aria-hidden="true"
            />
            <img
              src={portrait}
              alt="Portrait of Dr Gnaneshwer Jadav"
              width={460}
              height={460}
              className="relative z-10 h-full w-full rounded-full object-cover shadow-card"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalHero;
