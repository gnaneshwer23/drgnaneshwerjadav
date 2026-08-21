import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Projects", to: "/#projects" },
  { label: "Experience", to: "/#experience" },
  { label: "Education", to: "/#education" },
  { label: "Chat", to: "/chat" },
] as const;

const ClassicNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.05] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="text-xl font-bold text-[#2196f3]">
          Dr.Gnan
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((link) => {
            const active =
              link.to === "/"
                ? location.pathname === "/"
                : location.pathname + location.hash === link.to ||
                  location.pathname === link.to;
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-[#2196f3] ${
                  active ? "text-[#2196f3]" : "text-[#333]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/#contact"
            className="inline-flex min-h-10 items-center rounded-lg bg-[#2196f3] px-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#0d6efd]"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="flex min-h-11 min-w-11 items-center justify-center text-[#333] md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/[0.05] bg-white px-6 py-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center text-sm font-medium text-[#333]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex min-h-11 items-center justify-center rounded-lg bg-[#2196f3] text-sm font-medium text-white"
          >
            Contact
          </Link>
          <p className="sr-only">{site.name}</p>
        </div>
      )}
    </header>
  );
};

export default ClassicNav;
