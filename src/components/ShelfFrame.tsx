import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "All", to: "/shelf" },
  { label: "Books", to: "/books" },
  { label: "Frameworks", to: "/frameworks" },
  { label: "Course", to: "/course" },
] as const;

type ShelfFrameProps = {
  title: ReactNode;
  lead: ReactNode;
  children: ReactNode;
};

const ShelfFrame = ({ title, lead, children }: ShelfFrameProps) => {
  const location = useLocation();

  return (
    <StorefrontLayout>
      <PageShell>
        <Eyebrow>Shelf</Eyebrow>
        <PageTitle>{title}</PageTitle>
        <PageLead>{lead}</PageLead>

        <nav
          className="mt-8 flex flex-wrap gap-2"
          aria-label="Shelf sections"
        >
          {tabs.map((tab) => {
            const active = location.pathname === tab.to;
            return (
              <Link
                key={tab.to}
                to={tab.to}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full px-4 font-mono text-[11px] font-medium tracking-wide",
                  active
                    ? "bg-navy text-white"
                    : "border border-border bg-card text-foreground hover:border-foreground/30",
                )}
                aria-current={active ? "page" : undefined}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>

        {children}
      </PageShell>
    </StorefrontLayout>
  );
};

export default ShelfFrame;
