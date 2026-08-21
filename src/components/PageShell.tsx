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
}: {
  children: ReactNode;
  tone?: "navy" | "paper";
}) => (
  <h1 className="display max-w-3xl text-foreground">{children}</h1>
);

export const PageLead = ({
  children,
}: {
  children: ReactNode;
  tone?: "navy" | "paper";
}) => (
  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
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
    "inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron disabled:pointer-events-none disabled:opacity-40";

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
    ? "inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-saffron/40 hover:text-saffron focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
    : "inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-saffron/40 hover:text-saffron focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron";

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
