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
    <nav className="mt-10 flex flex-wrap gap-x-7 gap-y-2" aria-label="Offerings">
      {items.map((item) => {
        const active =
          location.pathname === item.to ||
          (item.to === "/book" && location.pathname === "/consultation");
        return (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              "nav-link inline-flex min-h-11 items-center text-[13px] tracking-[-0.01em]",
              active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
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
