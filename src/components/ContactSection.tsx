import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { storefront } from "@/data/commerce";

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-24 bg-background pb-0 pt-8 sm:pt-12">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="rounded-t-[2.5rem] bg-secondary px-6 py-16 text-center sm:px-12 sm:py-24"
        >
          <p className="eyebrow justify-center">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
            Consult
          </p>
          <h2 className="display mx-auto max-w-2xl text-foreground">
            A decision to make? {storefront.consult.minutes} minutes.{" "}
            {storefront.consult.priceLabel}.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            Product leadership, AI-enabled systems, or building in regulated
            domains — pick a slot, then pay.
          </p>
          <Link
            to="/book"
            className="mt-8 inline-flex min-h-11 items-center gap-1 text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-[6px] hover:decoration-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Book a consult
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <p className="mt-10 text-sm text-muted-foreground">
            {site.location} · LinkedIn and GitHub in the footer
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
