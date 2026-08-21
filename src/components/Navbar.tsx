import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { site } from "@/data/site";
import ChatAvatar from "@/components/ChatAvatar";

const practice = [
  { label: "Projects", to: "/projects", match: ["/projects", "/work"] },
  { label: "Experience", to: "/experience", match: ["/experience"] },
  { label: "Education", to: "/education", match: ["/education"] },
  { label: "Skills", to: "/skills", match: ["/skills"] },
] as const;

const offerings = [
  { label: "Books", to: "/books", match: ["/books"] },
  { label: "Course", to: "/course", match: ["/course"] },
  { label: "Framework", to: "/frameworks", match: ["/frameworks"] },
  { label: "Consultation", to: "/book", match: ["/book", "/consultation"] },
] as const;

const pages = [...practice, ...offerings];

const linkClass = (active = false) =>
  `inline-flex min-h-11 items-center text-[11px] font-medium uppercase tracking-[0.12em] transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
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
      prefix === "/work" || prefix === "/projects"
        ? location.pathname === prefix ||
          location.pathname.startsWith(`${prefix}/`)
        : location.pathname === prefix ||
          location.pathname.startsWith(`${prefix}/`),
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
      <div className="container mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-0 px-4 py-1 sm:px-6 lg:min-h-16">
        <Link
          to="/"
          className="flex min-h-11 min-w-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={`${site.navName} home`}
        >
          <span className="truncate font-heading text-[13px] font-semibold uppercase tracking-[0.14em] text-foreground sm:text-sm">
            {site.navName}
          </span>
        </Link>

        <div className="hidden min-w-0 flex-1 flex-wrap items-center justify-center gap-x-4 xl:gap-x-5 lg:flex">
          {practice.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={linkClass(isActive(item.match))}
              aria-current={isActive(item.match) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <span
            className="hidden h-3 w-px bg-border xl:inline-block"
            aria-hidden="true"
          />
          {offerings.map((item) => (
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

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <Link
            to="/chat"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card pl-1.5 pr-3 text-[11px] font-medium uppercase tracking-[0.12em] text-foreground hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-current={location.pathname === "/chat" ? "page" : undefined}
          >
            <ChatAvatar size="sm" />
            DrJadav
          </Link>
          <Link
            to="/contact"
            className={linkClass(location.pathname === "/contact")}
          >
            Contact
          </Link>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className={linkClass()}
          >
            LinkedIn
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="ml-auto flex min-h-11 min-w-11 items-center justify-center rounded-full text-foreground lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
              {pages.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex min-h-11 items-center text-sm font-medium text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/chat"
                className="flex min-h-11 items-center gap-2 text-sm font-medium text-foreground"
              >
                <ChatAvatar size="sm" />
                DrJadav
              </Link>
              <Link
                to="/contact"
                className="flex min-h-11 items-center text-sm font-medium text-foreground"
              >
                Contact
              </Link>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center text-sm font-medium text-foreground"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
