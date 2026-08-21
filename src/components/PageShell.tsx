import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

const PageShell = ({ children, className }: PageShellProps) => {
  return (
    <div
      className={cn(
        "container mx-auto flex max-w-6xl flex-1 flex-col px-4 pb-24 pt-24 sm:px-6 sm:pt-28",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="eyebrow">{children}</p>
);

export const PageTitle = ({
  children,
  tone = "paper",
}: {
  children: ReactNode;
  tone?: "navy" | "paper";
}) => (
  <h1
    className={cn(
      "display max-w-3xl",
      tone === "navy" ? "text-primary-foreground" : "text-foreground",
    )}
  >
    {children}
  </h1>
);

export const PageLead = ({
  children,
  tone = "paper",
}: {
  children: ReactNode;
  tone?: "navy" | "paper";
}) => (
  <p
    className={cn(
      "mt-4 max-w-2xl text-base leading-relaxed",
      tone === "navy" ? "text-primary-foreground/65" : "text-muted-foreground",
    )}
  >
    {children}
  </p>
);

export const PrimaryCta = ({
  to,
  href,
  children,
  external,
  disabled,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  external?: boolean;
  disabled?: boolean;
}) => {
  const className =
    "inline-flex min-h-11 items-center justify-center rounded-xl bg-saffron-gradient px-6 py-3 text-sm font-semibold text-accent-foreground shadow-saffron transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron disabled:pointer-events-none disabled:opacity-40";

  if (disabled) {
    return (
      <span className={className} aria-disabled="true">
        {children}
      </span>
    );
  }
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={className}
    >
      {children}
    </a>
  );
};

export const SecondaryCta = ({
  to,
  href,
  children,
  external,
  onNavy,
  disabled,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  external?: boolean;
  onNavy?: boolean;
  disabled?: boolean;
}) => {
  const className = onNavy
    ? "inline-flex min-h-11 items-center justify-center rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 px-6 py-3 text-sm font-semibold text-primary-foreground/90 backdrop-blur-sm transition-colors hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
    : "inline-flex min-h-11 items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-saffron/40 hover:text-saffron focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron";

  if (disabled) {
    return (
      <span className={`${className} opacity-40`} aria-disabled="true">
        {children}
      </span>
    );
  }
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={className}
    >
      {children}
    </a>
  );
};

export default PageShell;
