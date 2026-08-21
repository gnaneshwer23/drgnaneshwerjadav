import { Link } from "react-router-dom";
import { site } from "@/data/site";

const groups = [
  {
    title: "Work",
    links: [
      { label: "Selected work", to: "/work" },
      { label: "How I build", to: "/how-i-build" },
      { label: "AI Lab", to: "/lab" },
      { label: "Patent", to: "/patent" },
    ],
  },
  {
    title: "Think",
    links: [
      { label: "Latest thinking", to: "/think" },
      { label: "Shelf", to: "/shelf" },
      { label: "Books", to: "/books" },
      { label: "Frameworks", to: "/frameworks" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About", to: "/about" },
      { label: "Now", to: "/now" },
      { label: "Research", to: "/research" },
      { label: "Web CV", to: "/cv" },
    ],
  },
] as const;

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground pb-[max(5.5rem,calc(env(safe-area-inset-bottom)+4.5rem))] pt-16 text-background sm:pb-16 sm:pt-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)]">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em]">
              {site.navName}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-background/65">
              {site.role}. {site.hero}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-flex min-h-11 items-center text-sm underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
            >
              {site.email}
            </a>
          </div>
          <nav
            className="grid gap-10 sm:grid-cols-3"
            aria-label="Footer"
          >
            {groups.map((group) => (
              <div key={group.title}>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/45">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-1">
                  {group.links.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="inline-flex min-h-11 items-center text-sm text-background/75 transition-colors hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-background/15 pt-8">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} {site.name}
          </p>
          <div className="flex flex-wrap gap-1">
            {[
              { label: "Consult", to: "/book" },
              { label: "Ask", to: "/chat" },
              { label: "Contact", to: "/contact" },
              { label: "GitHub", href: site.github },
              { label: "LinkedIn", href: site.linkedin },
            ].map((item) =>
              "href" in item ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center px-3 text-xs uppercase tracking-[0.14em] text-background/55 hover:text-background"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="inline-flex min-h-11 items-center px-3 text-xs uppercase tracking-[0.14em] text-background/55 hover:text-background"
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
