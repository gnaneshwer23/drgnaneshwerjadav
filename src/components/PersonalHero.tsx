import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { requestOpenChat } from "@/lib/chat-widget-state";
import portrait from "@/assets/profile.jpg";

const PersonalHero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div className="relative z-10 min-w-0 lg:pb-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-[11px] font-medium tracking-[0.18em] text-muted-foreground"
            >
              {site.role} · {site.location} · 2026
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.04 }}
              className="font-heading mt-6 text-[clamp(2.4rem,6.5vw,4.75rem)] font-bold leading-[0.95] tracking-tight text-foreground"
            >
              {site.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mt-4 font-mono text-[11px] tracking-[0.16em] text-muted-foreground"
            >
              PhD · MBA · Patent holder
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
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/book"
                className="inline-flex min-h-11 items-center rounded-full bg-navy px-6 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Book a consult
              </Link>
              <button
                type="button"
                onClick={() => requestOpenChat()}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-saffron"
                  aria-hidden="true"
                />
                Ask
              </button>
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
              className="aspect-[4/5] w-full rounded-[2rem] object-cover object-top"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalHero;
