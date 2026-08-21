import { Link } from "react-router-dom";
import { site } from "@/data/site";

const Footer = () => {
  return (
    <footer className="bg-navy-dark py-12">
      <div className="container mx-auto flex flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-base font-bold text-primary-foreground">
            {site.brand}
          </p>
          <p className="mt-1 text-sm text-primary-foreground/50">
            {site.name} · {site.role} · {site.location}
          </p>
        </div>
        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          <Link
            to="/about"
            className="text-sm text-primary-foreground/50 transition-colors hover:text-saffron"
          >
            About
          </Link>
          <Link
            to="/books"
            className="text-sm text-primary-foreground/50 transition-colors hover:text-saffron"
          >
            Books
          </Link>
          <Link
            to="/book"
            className="text-sm text-primary-foreground/50 transition-colors hover:text-saffron"
          >
            Book
          </Link>
          <Link
            to="/chat"
            className="text-sm text-primary-foreground/50 transition-colors hover:text-saffron"
          >
            Chat
          </Link>
          <Link
            to="/frameworks"
            className="text-sm text-primary-foreground/50 transition-colors hover:text-saffron"
          >
            Frameworks
          </Link>
          <Link
            to="/accountable-hindustan"
            className="text-sm text-primary-foreground/50 transition-colors hover:text-saffron"
          >
            Accountable Hindustan
          </Link>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-primary-foreground/50 transition-colors hover:text-saffron"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-primary-foreground/50 transition-colors hover:text-saffron"
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
