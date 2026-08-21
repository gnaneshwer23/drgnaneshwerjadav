import { Link } from "react-router-dom";
import { site } from "@/data/site";

const Footer = () => {
  return (
    <footer className="bg-navy-dark pb-[max(5.5rem,calc(env(safe-area-inset-bottom)+4.5rem))] pt-10 sm:pb-12 sm:pt-12">
      <div className="container mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-base font-bold text-primary-foreground">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-primary-foreground/50">
            {site.role} · {site.location}
          </p>
        </div>
        <nav
          className="flex flex-wrap items-center gap-x-1 gap-y-1"
          aria-label="Footer"
        >
          {[
            { label: "Chat", to: "/chat" },
            { label: "Books", to: "/books" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="inline-flex min-h-11 items-center px-3 text-sm text-primary-foreground/50 transition-colors hover:text-saffron focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center px-3 text-sm text-primary-foreground/50 transition-colors hover:text-saffron focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center px-3 text-sm text-primary-foreground/50 transition-colors hover:text-saffron focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
          >
            LinkedIn
          </a>
        </nav>
        <p className="text-xs text-primary-foreground/35">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
