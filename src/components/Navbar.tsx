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

const DARK_HERO_PATHS = new Set(["/", "/chat", "/book"]);

const linkClass = (lightOnDark: boolean, active = false) =>
  `inline-flex min-h-11 items-center text-sm font-medium transition-colors hover:text-saffron focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron ${
    active
      ? "text-saffron"
      : lightOnDark
        ? "text-primary-foreground/70"
        : "text-muted-foreground"
  }`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";
  const onDarkHero = DARK_HERO_PATHS.has(location.pathname);
  const lightOnDark = !scrolled && onDarkHero;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || !onDarkHero
          ? "border-b border-border bg-card/90 shadow-card backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 md:h-[4.5rem]">
        <Link
          to="/"
          className="flex min-h-11 min-w-0 items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
          aria-label={`${site.name} home`}
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-saffron-gradient">
            <span className="font-heading text-sm font-bold text-accent-foreground">
              {site.shortName}
            </span>
          </span>
          <span
            className={`font-heading truncate text-base font-bold transition-colors sm:text-lg ${
              lightOnDark ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            <span className="sm:hidden">{site.brand}</span>
            <span className="hidden sm:inline">{site.name}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {homeLinks.map((link) =>
            onHome ? (
              <a key={link.label} href={link.href} className={linkClass(lightOnDark)}>
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={`/${link.href}`}
                className={linkClass(lightOnDark)}
              >
                {link.label}
              </Link>
            ),
          )}
          <Link
            to="/chat"
            className={linkClass(lightOnDark, location.pathname === "/chat")}
          >
            Chat
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className={`flex min-h-11 min-w-11 items-center justify-center rounded-lg lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron ${
            lightOnDark ? "text-primary-foreground" : "text-foreground"
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
            className="overflow-hidden border-b border-border bg-card lg:hidden"
          >
            <div className="container mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
              {homeLinks.map((link) => (
                <a
                  key={link.label}
                  href={onHome ? link.href : `/${link.href}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-11 items-center text-sm font-medium text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/chat"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-11 items-center text-sm font-medium text-foreground"
              >
                Chat
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
