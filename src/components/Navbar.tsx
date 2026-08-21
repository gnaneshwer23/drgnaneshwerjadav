import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { site } from "@/data/site";

const homeLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const projectLinks = [
  { label: "Engines", href: "#engines" },
  { label: "Segments", href: "#segments" },
  { label: "Journey", href: "#journey" },
  { label: "Philosophy", href: "#philosophy" },
];

type NavbarProps = {
  variant?: "home" | "project";
};

const Navbar = ({ variant = "home" }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const links = variant === "project" ? projectLinks : homeLinks;
  const onHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lightOnDark = !scrolled && (variant === "home" || variant === "project");

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-card/80 shadow-card backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6 md:h-20">
        <Link
          to="/"
          className="flex min-h-11 items-center gap-2"
          aria-label={`${site.name} home`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-saffron-gradient">
            <span className="font-heading text-sm font-bold text-accent-foreground">
              {site.shortName}
            </span>
          </span>
          <span
            className={`font-heading text-base font-bold transition-colors md:text-lg ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {variant === "project" ? "Accountable Hindustan" : site.name}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) =>
            onHome || variant === "project" ? (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-saffron ${
                  lightOnDark ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={`/${link.href}`}
                className={`text-sm font-medium transition-colors hover:text-saffron ${
                  lightOnDark ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className={`text-sm font-medium transition-colors hover:text-saffron ${
              lightOnDark ? "text-primary-foreground/70" : "text-muted-foreground"
            }`}
          >
            GitHub
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className={`flex min-h-11 min-w-11 items-center justify-center md:hidden ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-card md:hidden"
          >
            <div className="container mx-auto flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={variant === "project" || onHome ? link.href : `/${link.href}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-11 items-center text-sm font-medium text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center text-sm font-medium text-foreground"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
