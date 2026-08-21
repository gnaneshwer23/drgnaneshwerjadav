import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { site, narrative } from "@/data/site";
import { requestOpenChat } from "@/lib/chat-widget-state";
import portrait from "@/assets/profile.jpg";

const PersonalHero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 cinematic-grain" aria-hidden="true" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:pb-28 lg:pt-32">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
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
              className="font-serif mt-6 max-w-[14ch] text-[clamp(2.6rem,7vw,5.25rem)] font-medium italic leading-[0.95] tracking-tight text-foreground"
            >
              {site.hero}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mt-6 max-w-lg text-base leading-[1.7] text-muted-foreground"
            >
              {site.tagline} {site.credentials}.
            </motion.p>

            <motion.ol
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.14 }}
              className="mt-8 flex flex-wrap gap-x-1 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
              aria-label="Narrative"
            >
              {narrative.map((step, i) => (
                <li key={step.id} className="inline-flex items-center gap-1">
                  <span className="text-foreground">{step.label}</span>
                  {i < narrative.length - 1 ? (
                    <span aria-hidden="true" className="px-1 text-foreground/30">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </motion.ol>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.18 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/book"
                className="inline-flex min-h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Let’s talk
              </Link>
              <Link
                to="/work"
                className="inline-flex min-h-11 items-center rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Selected work
              </Link>
              <button
                type="button"
                onClick={() => requestOpenChat()}
                className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {site.name}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalHero;
