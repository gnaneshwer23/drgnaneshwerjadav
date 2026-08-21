import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";
import Seo from "@/components/Seo";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "All", to: "/shelf" },
  { label: "Books", to: "/books" },
  { label: "Frameworks", to: "/frameworks" },
  { label: "Course", to: "/course" },
] as const;

const seoByPath: Record<string, { title: string; description: string }> = {
  "/shelf": {
    title: "Shelf",
    description:
      "Books, Decide Then Build, and a course waitlist. Gumroad only when a URL is published.",
  },
  "/books": {
    title: "Books",
    description:
      "Eight Product Book 2026 titles. Buy on Gumroad when a URL is published.",
  },
  "/frameworks": {
    title: "Frameworks",
    description: "Decide Then Build — the operating sequence for the AI era.",
  },
  "/course": {
    title: "Course",
    description: "Course waitlist. Curriculum and price are not published yet.",
  },
};

type ShelfFrameProps = {
  title: ReactNode;
  lead: ReactNode;
  children: ReactNode;
};

const ShelfFrame = ({ title, lead, children }: ShelfFrameProps) => {
  const location = useLocation();
  const seo = seoByPath[location.pathname] ?? seoByPath["/shelf"];

  return (
    <StorefrontLayout>
      <Seo
        title={seo.title}
        description={seo.description}
        path={location.pathname}
      />
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
                    ? "bg-foreground text-background"
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
