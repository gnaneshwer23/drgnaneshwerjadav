import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import StorefrontLayout from "@/components/StorefrontLayout";
import PageShell, { Eyebrow, PageLead, PageTitle } from "@/components/PageShell";
import OfferingsNav from "@/components/OfferingsNav";
import Seo from "@/components/Seo";

const seoByPath: Record<string, { title: string; description: string; eyebrow: string }> = {
  "/shelf": {
    title: "Shelf",
    description:
      "Books, Decide Then Build, and a course waitlist. Gumroad only when a URL is published.",
    eyebrow: "Offerings",
  },
  "/books": {
    title: "Books",
    description:
      "Ten titles. Buy on Amazon or Gumroad when a URL is published.",
    eyebrow: "Books",
  },
  "/frameworks": {
    title: "Framework",
    description: "Decide Then Build — the operating sequence for the AI era.",
    eyebrow: "Framework",
  },
  "/course": {
    title: "Course",
    description: "Course waitlist. Curriculum and price are not published yet.",
    eyebrow: "Course",
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
        <Eyebrow>{seo.eyebrow}</Eyebrow>
        <PageTitle>{title}</PageTitle>
        <PageLead>{lead}</PageLead>
        <OfferingsNav />
        {children}
      </PageShell>
    </StorefrontLayout>
  );
};

export default ShelfFrame;
