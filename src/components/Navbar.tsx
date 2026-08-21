import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { site } from "@/data/site";

const primary = [
  { label: "Work", to: "/work", match: ["/work"] },
  { label: "Think", to: "/think", match: ["/think", "/shelf", "/books"] },
  { label: "Systems", to: "/systems", match: ["/systems", "/how-i-build", "/lab"] },
  { label: "About", to: "/about", match: ["/about", "/now", "/research", "/patent"] },
] as const;

const utility = [
  { label: "CV", to: "/cv" },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Contact", to: "/contact" },
] as const;

const linkClass = (active = false) =>
  `inline-flex min-h-11 items-center text-[12px] font-medium uppercase tracking-[0.16em] transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
    active ? "text-foreground" : "text-muted-foreground"
  }`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (match: readonly string[]) =>
    match.some((prefix) =>
      prefix === "/work"
        ? location.pathname === "/work" || location.pathname.startsWith("/work/")
        : location.pathname === prefix || location.pathname.startsWith(`${prefix}/`),
    );

  return (
    <motion.nav
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.28 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto] items-center gap-3 px-4 sm:px-6 md:h-[4.25rem] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <Link
          to="/"
          className="flex min-h-11 min-w-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={`${site.navName} home`}
        >
          <span className="truncate font-heading text-[13px] font-semibold uppercase tracking-[0.14em] text-foreground sm:text-sm">
            {site.navName}
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {primary.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={linkClass(isActive(item.match))}
              aria-current={isActive(item.match) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center justify-end gap-5 lg:flex">
          {utility.map((item) =>
            "href" in item ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={linkClass()}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={linkClass(location.pathname === item.to)}
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex min-h-11 min-w-11 items-center justify-center justify-self-end rounded-full text-foreground lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background lg:hidden"
          >
            <div className="container mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
              {[...primary, ...utility].map((item) =>
                "href" in item ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-11 items-center text-sm font-medium text-foreground"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex min-h-11 items-center text-sm font-medium text-foreground"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
