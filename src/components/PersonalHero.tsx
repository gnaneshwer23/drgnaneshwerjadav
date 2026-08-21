import { motion } from "framer-motion";
import { site } from "@/data/site";
import Portrait from "@/components/Portrait";
import { requestOpenChat } from "@/lib/chat-widget-state";

const ease = [0.22, 1, 0.36, 1] as const;

const PersonalHero = () => {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 cinematic-grain" aria-hidden="true" />
      <div className="site-wrap relative z-10 grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
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
            {["Dr", "Gnaneshwer", "Jadav"].map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.04 + i * 0.06, ease }}
                  className="block whitespace-nowrap font-heading text-[clamp(2.85rem,9.4vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.042em] text-[#f4f1ea]"
                >
                  {word}
                </motion.span>
              </span>
            ))}
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="relative mx-auto w-full max-w-[16.5rem] sm:max-w-[19rem] lg:max-w-[22rem]"
        >
          <Portrait tone="ink" />
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalHero;
