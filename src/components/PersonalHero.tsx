import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@/data/site";
import portrait from "@/assets/profile.jpg";

const PersonalHero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:pb-28 lg:pt-32">
        <div className="order-2 min-w-0 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="eyebrow"
          >
            {site.role} · {site.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.04 }}
            className="font-heading max-w-[11ch] text-[clamp(2.6rem,9vw,5.25rem)] font-semibold leading-[0.96] tracking-tight text-foreground"
          >
            Dr Gnaneshwer
            <span className="block">Jadav</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg"
          >
            {site.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.14 }}
            className="mt-4 text-sm font-medium text-foreground/70"
          >
            {site.credentials}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.18 }}
            className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10"
          >
            <a
              href="#work"
              className="inline-flex min-h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Selected work
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              to="/book"
              className="inline-flex min-h-11 items-center rounded-full border border-border px-6 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Book a consult
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-md"
        >
          <div className="rounded-[1.75rem] bg-secondary p-5 sm:p-8">
            <img
              src={portrait}
              alt="Portrait of Dr Gnaneshwer Jadav"
              width={460}
              height={460}
              className="aspect-square w-full rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalHero;
