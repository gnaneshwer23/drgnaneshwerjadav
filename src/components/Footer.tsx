import { Link } from "react-router-dom";
import { site } from "@/data/site";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background pb-[max(5.5rem,calc(env(safe-area-inset-bottom)+4.5rem))] pt-10 sm:pb-12 sm:pt-12">
      <div className="container mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-lg font-semibold text-foreground">
            {site.brand}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {site.role} · {site.location}
          </p>
        </div>
        <nav
          className="flex flex-wrap items-center gap-x-1 gap-y-1"
          aria-label="Footer"
        >
          {[
            { label: "Books", to: "/books" },
            { label: "Course", to: "/course" },
            { label: "Frameworks", to: "/frameworks" },
            { label: "Book", to: "/book" },
            { label: "Chat", to: "/chat" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="inline-flex min-h-11 items-center px-3 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center px-3 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center px-3 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            LinkedIn
          </a>
        </nav>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
