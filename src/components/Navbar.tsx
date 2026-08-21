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
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6"
    >
      <div className="pointer-events-auto grid w-full max-w-[72rem] grid-cols-[1fr_auto] items-center gap-3 rounded-full border border-white/[0.08] bg-[#0c0c0b]/85 px-2 py-1 text-[#f4f1ea] shadow-[0_12px_40px_-28px_rgba(0,0,0,0.7)] backdrop-blur-xl lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <Link
          to="/"
          className="nav-link flex min-h-10 min-w-0 items-center px-3 text-[12px] font-medium tracking-[0.06em] text-[#f4f1ea] sm:text-[13px]"
          aria-label={`${site.navName} home`}
        >
          <span className="truncate uppercase">{site.navName}</span>
        </Link>

        <div className="hidden items-center justify-center gap-8 whitespace-nowrap lg:flex">
          {primary.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link inline-flex min-h-10 items-center text-[13px] tracking-[-0.01em] ${
                isActive(item.match) ? "opacity-100" : "opacity-55 hover:opacity-100"
              }`}
              aria-current={isActive(item.match) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end gap-1">
          <Link
            to="/chat"
            className="hidden min-h-10 items-center gap-2 rounded-full py-0.5 pl-0.5 pr-3 text-[13px] tracking-[-0.01em] text-[#f4f1ea]/90 ring-1 ring-inset ring-white/[0.08] transition-colors hover:bg-white/[0.04] lg:inline-flex"
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
            className="flex min-h-10 min-w-10 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute left-4 right-4 top-[4.25rem] max-h-[min(28rem,calc(100dvh-5.5rem))] overflow-y-auto overflow-x-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0b] text-[#f4f1ea] sm:left-6 sm:right-6 lg:hidden"
          >
            <div className="flex flex-col px-5 py-3">
              {primary.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex min-h-11 items-center text-[15px] tracking-[-0.015em]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/chat"
                className="flex min-h-11 items-center gap-2 text-[15px] tracking-[-0.015em]"
              >
                <ChatAvatar size="sm" />
                DrJadav
              </Link>
              <p className="mt-2 border-t border-white/[0.08] pt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
                Also
              </p>
              {overflow.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex min-h-10 items-center text-sm text-white/55"
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
