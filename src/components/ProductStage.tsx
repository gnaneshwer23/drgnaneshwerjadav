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
    <section className="relative pb-24 pt-4 sm:pb-32">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="site-wrap mb-8 font-mono text-[11px] uppercase tracking-[0.14em] text-white/50"
      >
        The work you can buy
      </motion.p>
      <ol className="site-wrap">
        {offerings.map((item, i) => (
          <motion.li
            key={item.to}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/[0.08] last:border-b"
          >
            <Link
              to={item.to}
              className="product-row group grid grid-cols-[2.25rem_minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-2 py-7 lg:grid-cols-[2.75rem_auto_minmax(0,1fr)_auto] lg:items-center lg:gap-x-8 lg:py-9"
            >
              <span className="font-mono text-[11px] tracking-[0.12em] text-white/50">
                {item.n}
              </span>
              <span className="product-row-title min-w-0 text-[#f4f1ea]">
                {item.label}
              </span>
              <span className="col-start-2 max-w-md text-[13px] leading-relaxed text-white/55 lg:col-start-auto lg:max-w-none lg:justify-self-end lg:text-right lg:text-sm">
                {item.line}
              </span>
              <ArrowUpRight
                className="col-start-3 row-start-1 h-5 w-5 shrink-0 self-center text-white/40 transition-colors duration-300 group-hover:text-[#f4f1ea] lg:col-start-auto lg:row-start-auto"
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
