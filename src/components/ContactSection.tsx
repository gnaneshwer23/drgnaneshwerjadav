import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { label: "Email", href: `mailto:${site.email}`, value: site.email },
  { label: "LinkedIn", href: site.linkedin, value: "gnaneshwer-jadav-healthcare" },
  { label: "GitHub", href: site.github, value: "gnaneshwer23" },
] as const;

const ContactSection = () => {
  return (
    <section id="contact" className="section-y scroll-mt-24 bg-navy">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl"
        >
          <p className="eyebrow">Contact</p>
          <h2 className="display text-primary-foreground">
            Product leadership, AI-enabled systems, or building in regulated
            domains — get in touch.
          </h2>
        </motion.div>

        <ul className="mt-10 max-w-2xl divide-y divide-primary-foreground/10 border-y border-primary-foreground/10 sm:mt-14">
          {links.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="group flex min-h-11 items-center justify-between gap-4 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
              >
                <span>
                  <span className="block text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground/50">
                    {link.label}
                  </span>
                  <span className="mt-1 block break-all font-heading text-base font-semibold text-primary-foreground sm:text-lg">
                    {link.value}
                  </span>
                </span>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-primary-foreground/40 transition-colors group-hover:text-saffron"
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
