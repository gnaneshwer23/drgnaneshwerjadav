import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@/data/site";
import portrait from "@/assets/profile.jpg";

const PersonalHero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <p
        className="pointer-events-none absolute inset-x-0 top-[18%] hidden select-none text-center font-heading text-[clamp(4rem,18vw,14rem)] font-bold leading-none tracking-tight text-foreground/[0.045] lg:block"
        aria-hidden="true"
      >
        PORTFOLIO
      </p>

      <div className="container relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
        <div className="hidden lg:absolute lg:left-4 lg:top-36 lg:flex lg:flex-col lg:gap-16">
          <p className="origin-left rotate-180 text-[11px] font-medium tracking-[0.18em] text-muted-foreground [writing-mode:vertical-rl]">
            {site.role}
          </p>
          <p className="origin-left rotate-180 text-[11px] font-medium tracking-[0.18em] text-muted-foreground [writing-mode:vertical-rl]">
            {site.location} · 2026
          </p>
        </div>

        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8">
          <div className="relative z-10 min-w-0 lg:-mr-20 lg:pb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground"
            >
              <p>
                <span className="font-semibold text-foreground">PhD</span>{" "}
                immunology
              </p>
              <p>
                <span className="font-semibold text-foreground">MBA</span>{" "}
                healthcare
              </p>
              <p>
                <span className="font-semibold text-foreground">Patent</span>{" "}
                holder
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.04 }}
              className="font-heading mt-8 text-[clamp(3.4rem,12vw,8.5rem)] font-bold leading-[0.82] tracking-tight text-foreground"
            >
              Hello
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="mt-4 max-w-md text-lg font-medium text-foreground sm:text-xl"
            >
              — It’s {site.name}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.14 }}
              className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground"
            >
              {site.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.18 }}
              className="mt-8 flex flex-wrap items-center gap-6"
            >
              <a
                href="#work"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Scroll down
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                to="/book"
                className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-[6px] hover:decoration-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Book a consult
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <img
              src={portrait}
              alt="Portrait of Dr Gnaneshwer Jadav"
              width={640}
              height={800}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover object-top grayscale contrast-[1.05]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalHero;
