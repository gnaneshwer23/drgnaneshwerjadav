import { motion } from "framer-motion";
import { site } from "@/data/site";
import { requestOpenChat } from "@/lib/chat-widget-state";

const ease = [0.22, 1, 0.36, 1] as const;

const lines = [
  {
    label: "Science",
    text: "Pharmaceutical sciences, medical biotechnology, immunology.",
  },
  {
    label: "Domain",
    text: "Healthcare, clinical systems, and life sciences.",
  },
  {
    label: "Build",
    text: "AI product and programme leadership across technology.",
  },
] as const;

const PersonalHero = () => {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 cinematic-grain" aria-hidden="true" />
      <div className="site-wrap relative z-10 grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
        <div className="min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/55"
          >
            {site.role} · {site.location}
          </motion.p>

          <h1 className="mt-7">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.04, ease }}
                className="home-display block text-[#f4f1ea]"
              >
                Dr. Gnaneshwer Jadav
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease }}
            className="font-serif mt-8 max-w-[26rem] text-[clamp(1.2rem,2.1vw,1.65rem)] italic leading-[1.35] text-white/72"
          >
            {site.hero}
          </motion.p>

          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.42 }}
            onClick={() => requestOpenChat()}
            className="mt-10 inline-flex min-h-11 items-center gap-3 text-[13px] tracking-[-0.01em] text-white/60 transition-colors hover:text-[#f4f1ea]"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--saffron))]"
              aria-hidden="true"
            />
            Ask DrJadav about the rest
          </motion.button>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease }}
          className="max-w-sm space-y-6 lg:justify-self-end"
        >
          {lines.map((line) => (
            <div key={line.label} className="border-t border-white/[0.08] pt-4">
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
                {line.label}
              </dt>
              <dd className="mt-2 text-[15px] leading-relaxed tracking-[-0.015em] text-[#f4f1ea]/80">
                {line.text}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default PersonalHero;
