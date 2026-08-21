import { Link } from "react-router-dom";
import { site } from "@/data/site";

const Footer = () => {
  return (
    <footer className="bg-navy pb-[max(5.5rem,calc(env(safe-area-inset-bottom)+4.5rem))] pt-12 text-white sm:pb-14 sm:pt-16">
      <div className="container mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0">
          <p className="font-heading text-lg font-bold">{site.brand}</p>
          <p className="mt-1 font-mono text-[11px] tracking-[0.16em] text-white/55">
            {site.role} · {site.location}
          </p>
          <nav
            className="mt-8 flex flex-wrap items-center gap-x-1 gap-y-1"
            aria-label="Footer"
          >
            {[
              { label: "Work", to: "/#work" },
              { label: "Shelf", to: "/shelf" },
              { label: "Books", to: "/books" },
              { label: "Course", to: "/course" },
              { label: "Frameworks", to: "/frameworks" },
              { label: "Consult", to: "/book" },
              { label: "Ask", to: "/chat" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="inline-flex min-h-11 items-center px-3 text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center px-3 text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center px-3 text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              LinkedIn
            </a>
          </nav>
          <p className="mt-8 text-xs text-white/40">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
        <a
          href={`mailto:${site.email}`}
          className="break-all font-heading text-[clamp(1.4rem,4vw,2.75rem)] font-bold leading-[1.05] tracking-tight text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {site.email}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
