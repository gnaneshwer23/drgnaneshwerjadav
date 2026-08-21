import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { site } from "@/data/site";

const projectLinks = [
  { label: "Engines", href: "#engines" },
  { label: "Segments", href: "#segments" },
  { label: "Journey", href: "#journey" },
  { label: "Philosophy", href: "#philosophy" },
];

const DARK_HERO_PATHS = new Set(["/", "/chat", "/book", "/accountable-hindustan"]);

type NavbarProps = {
  variant?: "home" | "project";
};

const Navbar = ({ variant = "home" }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const onDarkHero =
    variant === "project" || DARK_HERO_PATHS.has(location.pathname);
  const lightOnDark = !scrolled && onDarkHero;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const muted = lightOnDark ? "text-primary-foreground/70" : "text-muted-foreground";
  const brandColor = scrolled || !onDarkHero ? "text-foreground" : "text-primary-foreground";

  const navClass = (active: boolean) =>
    `text-sm font-medium transition-colors hover:text-saffron ${
      active ? "text-saffron" : muted
    }`;

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !onDarkHero
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
              variant === "project"
                ? scrolled
                  ? "text-foreground"
                  : "text-primary-foreground"
                : brandColor
            }`}
          >
            {variant === "project" ? "Accountable Hindustan" : site.brand}
          </span>
        </Link>

        {variant === "project" ? (
          <div className="hidden items-center gap-8 md:flex">
            {projectLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-saffron ${muted}`}
              >
                {link.label}
              </a>
            ))}
            <Link to="/" className={navClass(false)}>
              DrJadav
            </Link>
          </div>
        ) : (
          <div className="hidden items-center gap-8 md:flex">
            <Link to="/#work" className={navClass(location.pathname === "/")}>
              Work
            </Link>
            <Link to="/books" className={navClass(location.pathname === "/books")}>
              Books
            </Link>
            <Link to="/chat" className={navClass(location.pathname === "/chat")}>
              Chat
            </Link>
            <Link
              to="/book"
              className="inline-flex min-h-11 items-center rounded-xl bg-saffron-gradient px-4 py-2 text-sm font-semibold text-accent-foreground shadow-saffron transition-opacity hover:opacity-90"
            >
              Book
            </Link>
          </div>
        )}

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className={`flex min-h-11 min-w-11 items-center justify-center md:hidden ${
            scrolled || !onDarkHero ? "text-foreground" : "text-primary-foreground"
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
              {variant === "project" ? (
                <>
                  {projectLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex min-h-11 items-center text-sm font-medium text-foreground"
                    >
                      {link.label}
                    </a>
                  ))}
                  <Link
                    to="/"
                    onClick={() => setMobileOpen(false)}
                    className="flex min-h-11 items-center text-sm font-medium text-foreground"
                  >
                    DrJadav
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/#work"
                    onClick={() => setMobileOpen(false)}
                    className="flex min-h-11 items-center text-sm font-medium text-foreground"
                  >
                    Work
                  </Link>
                  <Link
                    to="/books"
                    onClick={() => setMobileOpen(false)}
                    className="flex min-h-11 items-center text-sm font-medium text-foreground"
                  >
                    Books
                  </Link>
                  <Link
                    to="/chat"
                    onClick={() => setMobileOpen(false)}
                    className="flex min-h-11 items-center text-sm font-medium text-foreground"
                  >
                    Chat
                  </Link>
                  <Link
                    to="/book"
                    onClick={() => setMobileOpen(false)}
                    className="mt-2 inline-flex min-h-11 items-center justify-center rounded-xl bg-saffron-gradient px-4 text-sm font-semibold text-accent-foreground"
                  >
                    Book
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
