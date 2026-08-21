import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { storefront } from "@/data/commerce";

const links = [
  { label: "Email", href: `mailto:${site.email}`, value: site.email },
  { label: "LinkedIn", href: site.linkedin, value: "gnaneshwer-jadav" },
  { label: "GitHub", href: site.github, value: "gnaneshwer23" },
] as const;

const ContactSection = () => {
  return (
    <section id="contact" className="section-y scroll-mt-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="max-w-2xl"
        >
          <p className="eyebrow">Contact</p>
          <h2 className="display text-foreground">
            Product leadership, AI-enabled systems, or building in regulated
            domains — get in touch.
          </h2>
          <Link
            to="/book"
            className="mt-8 inline-flex min-h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Book a {storefront.consult.minutes}-minute consult
          </Link>
        </motion.div>

        <ul className="mt-12 max-w-2xl divide-y divide-border border-y border-border sm:mt-14">
          {links.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.28, delay: i * 0.04 }}
            >
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="group flex min-h-11 items-center justify-between gap-4 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {link.label}
                  </span>
                  <span className="mt-1 block break-all font-heading text-lg font-semibold text-foreground sm:text-xl">
                    {link.value}
                  </span>
                </span>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                  aria-hidden="true"
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
