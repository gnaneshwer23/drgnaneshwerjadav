import { Link, useLocation } from "react-router-dom";
import { site } from "@/data/site";

const primary = [
  { label: "Books", to: "/books" },
  { label: "Course", to: "/course" },
  { label: "Framework", to: "/frameworks" },
  { label: "Consultation", to: "/book" },
  { label: "Contact", to: "/contact" },
] as const;

const Footer = () => {
  const location = useLocation();
  const onInk = location.pathname === "/";

  return (
    <footer
      className={`pb-[max(5.5rem,calc(env(safe-area-inset-bottom)+4.5rem))] pt-10 sm:pb-14 ${
        onInk
          ? "border-t border-white/[0.08] text-white/55"
          : "border-t border-border text-muted-foreground"
      }`}
    >
      <div className="site-wrap flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-heading text-[13px] tracking-[-0.01em] text-current opacity-90">
            {site.navName}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 inline-flex min-h-11 items-center text-sm tracking-[-0.01em] underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-1" aria-label="Footer">
          {primary.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="inline-flex min-h-11 items-center text-[13px] tracking-[-0.01em]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/chat"
            className="inline-flex min-h-11 items-center text-[13px] tracking-[-0.01em]"
          >
            DrJadav
          </Link>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center text-[13px] tracking-[-0.01em]"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
