import { motion } from "framer-motion";
import { site } from "@/data/site";
import Portrait from "@/components/Portrait";
import { requestOpenChat } from "@/lib/chat-widget-state";

const ease = [0.22, 1, 0.36, 1] as const;

const PersonalHero = () => {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-16 pt-28 sm:px-8 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 cinematic-grain opacity-[0.07]" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-8">
        <div className="min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45"
          >
            {site.role} · {site.location}
          </motion.p>

          <h1 className="mt-6">
            {["Dr", "Gnaneshwer", "Jadav"].map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "108%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.06 + i * 0.07, ease }}
                  className="block font-heading text-[clamp(3.4rem,12vw,8.75rem)] font-medium leading-[0.84] tracking-[-0.055em] text-white"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease }}
            className="font-serif mt-8 max-w-[18ch] text-[clamp(1.4rem,3vw,2.15rem)] italic leading-snug text-white/80"
          >
            {site.hero}
          </motion.p>

          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() => requestOpenChat()}
            className="mt-10 inline-flex min-h-11 items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
            Ask DrJadav about the rest
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease }}
          className="relative mx-auto w-full max-w-[22rem] lg:max-w-[26rem]"
        >
          <div className="portrait-float">
            <Portrait tone="ink" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalHero;
