import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { site } from "@/data/site";
import ChatAvatar from "@/components/ChatAvatar";

const primary = [
  { label: "Books", to: "/books", match: ["/books"] },
  { label: "Course", to: "/course", match: ["/course"] },
  { label: "Framework", to: "/frameworks", match: ["/frameworks"] },
  { label: "Consultation", to: "/book", match: ["/book", "/consultation"] },
] as const;

const overflow = [
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Education", to: "/education" },
  { label: "Skills", to: "/skills" },
] as const;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (match: readonly string[]) =>
    match.some(
      (prefix) =>
        location.pathname === prefix ||
        location.pathname.startsWith(`${prefix}/`),
    );

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4"
    >
      <div
        className="pointer-events-auto flex w-full max-w-5xl items-center gap-3 rounded-full border border-white/10 bg-neutral-950/80 px-2 py-1.5 text-white shadow-[0_18px_50px_-28px_rgba(0,0,0,0.45)] backdrop-blur-xl"
      >
        <Link
          to="/"
          className="nav-link flex min-h-11 min-w-0 items-center px-3 text-[12px] font-medium tracking-[0.08em] sm:text-[13px]"
          aria-label={`${site.navName} home`}
        >
          <span className="truncate uppercase">{site.navName}</span>
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-7 md:flex">
          {primary.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link inline-flex min-h-11 items-center text-[13px] transition-opacity ${
                isActive(item.match) ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
              aria-current={isActive(item.match) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          to="/chat"
          className="ml-auto hidden min-h-11 items-center gap-2 rounded-full bg-white/10 pl-1 pr-3 text-[13px] md:inline-flex"
          aria-current={location.pathname === "/chat" ? "page" : undefined}
        >
          <ChatAvatar size="sm" />
          DrJadav
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="ml-auto flex min-h-11 min-w-11 items-center justify-center rounded-full md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="pointer-events-auto absolute left-3 right-3 top-[4.5rem] overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 text-white md:hidden"
          >
            <div className="flex flex-col px-4 py-3">
              {primary.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex min-h-11 items-center text-base"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/chat"
                className="flex min-h-11 items-center gap-2 text-base"
              >
                <ChatAvatar size="sm" />
                DrJadav
              </Link>
              <p className="mt-3 border-t border-white/10 pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                Ask DrJadav, or open
              </p>
              {overflow.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex min-h-11 items-center text-sm text-white/55"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
