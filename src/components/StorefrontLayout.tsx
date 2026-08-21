import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

type StorefrontLayoutProps = {
  children: ReactNode;
  tone?: "navy" | "paper";
};

const StorefrontLayout = ({ children, tone = "paper" }: StorefrontLayoutProps) => {
  return (
    <main
      className={cn(
        "flex min-h-dvh flex-col",
        tone === "navy" ? "bg-navy" : "bg-background",
      )}
    >
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default StorefrontLayout;
