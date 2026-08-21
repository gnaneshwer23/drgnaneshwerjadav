import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { site } from "@/data/site";

const storefrontLinks = [
  { label: "Books", to: "/books", match: ["/books"] },
  { label: "Course", to: "/course", match: ["/course", "/courses"] },
  { label: "Frameworks", to: "/frameworks", match: ["/frameworks"] },
  { label: "Chat", to: "/chat", match: ["/chat"] },
] as const;

const consultMatch = ["/book", "/consultation"];

const linkClass = (active = false) =>
  `inline-flex min-h-11 items-center text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
    active ? "text-foreground" : "text-muted-foreground"
  }`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";
  const consultActive = consultMatch.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-border bg-background/90 backdrop-blur-xl"
          : "bg-background/70"
      }`}
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 md:h-[4.5rem]">
        <Link
          to="/"
          className="flex min-h-11 min-w-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={`${site.name} home`}
        >
          <span className="font-heading truncate text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {site.brand}
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {onHome ? (
            <a href="#work" className={linkClass()}>
              Work
            </a>
          ) : (
            <Link to="/#work" className={linkClass()}>
              Work
            </Link>
          )}
          {storefrontLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={linkClass(link.match.includes(location.pathname))}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/book"
            className="inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-current={consultActive ? "page" : undefined}
          >
            Book
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-foreground lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
            className="overflow-hidden border-b border-border bg-background lg:hidden"
          >
            <div className="container mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
              <a
                href={onHome ? "#work" : "/#work"}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-11 items-center text-sm font-medium text-foreground"
              >
                Work
              </a>
              {storefrontLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-11 items-center text-sm font-medium text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/book"
                onClick={() => setMobileOpen(false)}
                className="mt-1 mb-2 inline-flex min-h-11 w-fit items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
              >
                Book
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
