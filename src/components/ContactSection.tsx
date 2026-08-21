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
    <section id="contact" className="scroll-mt-24 bg-navy py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-saffron">
            Contact
          </p>
          <h2 className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
            Product leadership, AI-enabled systems, or building in regulated
            domains — get in touch.
          </h2>
        </motion.div>

        <ul className="mt-14 grid gap-4 md:grid-cols-3">
          {links.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
            >
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="group flex min-h-11 flex-col rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-5 transition-colors hover:border-saffron/40 hover:bg-primary-foreground/10"
              >
                <span className="flex items-center justify-between text-sm font-medium text-primary-foreground/50">
                  {link.label}
                  <ArrowUpRight
                    className="h-4 w-4 transition-colors group-hover:text-saffron"
                    aria-hidden="true"
                  />
                </span>
                <span className="mt-3 break-all font-heading text-lg font-semibold text-primary-foreground">
                  {link.value}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
