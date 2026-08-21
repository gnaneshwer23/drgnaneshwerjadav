import { Link, useLocation } from "react-router-dom";
import { site } from "@/data/site";

const primary = [
  { label: "Books", to: "/books" },
  { label: "Course", to: "/course" },
  { label: "Framework", to: "/frameworks" },
  { label: "Consultation", to: "/book" },
] as const;

const Footer = () => {
  const location = useLocation();
  const onInk = location.pathname === "/";

  return (
    <footer
      className={`pb-[max(5.5rem,calc(env(safe-area-inset-bottom)+4.5rem))] pt-10 sm:pb-12 ${
        onInk
          ? "border-t border-white/10 text-white/50"
          : "border-t border-border bg-foreground text-background/70"
      }`}
    >
      <div className="container mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-heading text-sm tracking-wide">{site.navName}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 inline-flex min-h-11 items-center text-sm underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-1" aria-label="Footer">
          {primary.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="inline-flex min-h-11 items-center text-sm"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/chat" className="inline-flex min-h-11 items-center text-sm">
            DrJadav
          </Link>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center text-sm"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
