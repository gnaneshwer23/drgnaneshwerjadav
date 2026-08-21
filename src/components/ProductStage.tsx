import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { storefront } from "@/data/commerce";

const offerings = [
  {
    n: "01",
    label: "Books",
    to: "/books",
    line: "Eight operating manuals. Gumroad when a URL is published.",
  },
  {
    n: "02",
    label: "Course",
    to: "/course",
    line: "A DrJadav cohort is coming. Waitlist only — nothing invented.",
  },
  {
    n: "03",
    label: "Framework",
    to: "/frameworks",
    line: "Decide Then Build — the operating sequence, as a one-pager.",
  },
  {
    n: "04",
    label: "Consultation",
    to: "/book",
    line: `${storefront.consult.minutes} minutes · ${storefront.consult.priceLabel}. Calendar, then Stripe.`,
  },
] as const;

const ProductStage = () => {
  return (
    <section className="relative px-4 pb-24 pt-8 sm:px-8 sm:pb-32">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto mb-10 max-w-6xl font-mono text-[11px] uppercase tracking-[0.22em] text-white/40"
      >
        The work you can buy
      </motion.p>
      <ol className="mx-auto max-w-6xl">
        {offerings.map((item, i) => (
          <motion.li
            key={item.to}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/10 last:border-b"
          >
            <Link
              to={item.to}
              className="product-row group grid grid-cols-[auto_minmax(0,1fr)_auto] items-baseline gap-4 py-7 sm:gap-8 sm:py-9"
            >
              <span className="font-mono text-[11px] tracking-[0.16em] text-white/35">
                {item.n}
              </span>
              <span className="min-w-0">
                <span className="product-row-title block text-white">
                  {item.label}
                </span>
                <span className="mt-2 block max-w-lg text-sm text-white/45 sm:text-base">
                  {item.line}
                </span>
              </span>
              <ArrowUpRight
                className="h-7 w-7 shrink-0 text-white/30 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                aria-hidden="true"
              />
            </Link>
          </motion.li>
        ))}
      </ol>
    </section>
  );
};

export default ProductStage;
