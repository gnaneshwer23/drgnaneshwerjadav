import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const items = [
  { label: "Books", to: "/books" },
  { label: "Course", to: "/course" },
  { label: "Framework", to: "/frameworks" },
  { label: "Consultation", to: "/book" },
] as const;

export default function OfferingsNav() {
  const location = useLocation();

  return (
    <nav className="mt-8 flex flex-wrap gap-2" aria-label="Offerings">
      {items.map((item) => {
        const active =
          location.pathname === item.to ||
          (item.to === "/book" && location.pathname === "/consultation");
        return (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              "inline-flex min-h-11 items-center rounded-full px-4 font-mono text-[11px] font-medium tracking-wide",
              active
                ? "bg-foreground text-background"
                : "border border-border bg-card text-foreground hover:border-foreground/30",
            )}
            aria-current={active ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
